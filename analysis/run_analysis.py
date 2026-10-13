"""Local, reproducible analysis. Nothing is sent to a server; output has no patient rows.
Run: python run_analysis.py input.sav --output results.json
All additional modules and model development are exploratory, not new approved objectives.
"""
import argparse, hashlib, json, itertools, platform, warnings
from pathlib import Path
import numpy as np
import pandas as pd
import scipy
from scipy import stats, optimize
from scipy.special import expit
import pyreadstat
SEED=20261012

def finite(v): return float(v) if np.isfinite(v) else None

def interval(v):return [finite(x) for x in v]

def wilson(k,n):
 if not n:return {'estimate':None,'ci95':[None,None],'denominator':0}
 z=stats.norm.ppf(.975);p=k/n;d=1+z*z/n;c=(p+z*z/(2*n))/d;h=z*np.sqrt(p*(1-p)/n+z*z/(4*n*n))/d
 return {'estimate':p,'ci95':[max(0,c-h),min(1,c+h)],'denominator':int(n)}

def confusion(y,pred):
 y=np.asarray(y);pred=np.asarray(pred);tp=int(((y==1)&pred).sum());tn=int(((y==0)&~pred).sum());fp=int(((y==0)&pred).sum());fn=int(((y==1)&~pred).sum())
 out=dict(tp=tp,tn=tn,fp=fp,fn=fn,n=len(y),sensitivity=wilson(tp,tp+fn),specificity=wilson(tn,tn+fp),ppv=wilson(tp,tp+fp),npv=wilson(tn,tn+fn),accuracy=wilson(tp+tn,len(y)))
 # Log scale LR intervals only when all four cells are positive. No arbitrary correction.
 for name,ratio,se in [('lr_positive',(tp/(tp+fn))/(fp/(fp+tn)) if fp else np.inf,np.sqrt(1/tp-1/(tp+fn)+1/fp-1/(fp+tn)) if tp and fp else None),('lr_negative',(fn/(tp+fn))/(tn/(fp+tn)) if tn else np.inf,np.sqrt(1/fn-1/(tp+fn)+1/tn-1/(fp+tn)) if fn and tn else None)]:
  out[name]={'estimate':finite(ratio),'boundary':'infinite' if np.isinf(ratio) else None,'ci95':interval(np.exp(np.log(ratio)+np.array([-1,1])*stats.norm.ppf(.975)*se)) if se is not None and ratio>0 else [None,None]}
 return out

def auc(y,score):
 pos=np.asarray(score)[np.asarray(y)==1];neg=np.asarray(score)[np.asarray(y)==0]
 return float(((pos[:,None]>neg)+.5*(pos[:,None]==neg)).mean())

def roc(y,s):
 y=np.asarray(y);s=np.asarray(s);p=int(y.sum());n=len(y)-p
 return [[0.,0.]]+[[float(((s>=t)&(y==0)).sum()/n),float(((s>=t)&(y==1)).sum()/p)] for t in sorted(set(s),reverse=True)]

def auc_ci(y,s,rng):
 pos=np.asarray(s)[np.asarray(y)==1];neg=np.asarray(s)[np.asarray(y)==0];samples=[]
 for _ in range(1500):
  a=rng.choice(pos,len(pos));b=rng.choice(neg,len(neg));samples.append(((a[:,None]>b)+.5*(a[:,None]==b)).mean())
 return interval(np.quantile(samples,[.025,.975]))

def placements(y,s):
 a=np.asarray(s)[y==1];b=np.asarray(s)[y==0];m=(a[:,None]>b)+.5*(a[:,None]==b)
 return m.mean(1),m.mean(0)

def delong(y,a,b):
 va,wa=placements(y,a);vb,wb=placements(y,b);diff=auc(y,a)-auc(y,b);variance=np.var(va-vb,ddof=1)/len(va)+np.var(wa-wb,ddof=1)/len(wa)
 if variance<=0:return dict(delta_auc=diff,z=None,p=None,ci95=[None,None],note='Zero estimated variance; inferential comparison unavailable.')
 se=np.sqrt(variance);z=diff/se
 return dict(delta_auc=diff,z=float(z),p=float(2*stats.norm.sf(abs(z))),ci95=interval(diff+np.array([-1,1])*stats.norm.ppf(.975)*se),note='Paired DeLong for fixed unfitted continuous markers; sparse reference negatives limit precision.')

def firth(X,y):
 """Jeffreys penalized binomial likelihood, adjusted-score gradient, BFGS."""
 X=np.asarray(X,float);y=np.asarray(y,float)
 def fn(beta):
  eta=X@beta;p=expit(eta);w=np.maximum(p*(1-p),1e-12);info=X.T@(w[:,None]*X);sign,logdet=np.linalg.slogdet(info)
  if sign<=0:raise ValueError('Singular information matrix')
  inv=np.linalg.inv(info);h=w*np.einsum('ij,jk,ik->i',X,inv,X)
  ll=np.sum(y*eta-np.logaddexp(0,eta))+.5*logdet
  score=X.T@(y-p+h*(.5-p))
  return -ll,-score
 fit=optimize.minimize(fn,np.zeros(X.shape[1]),jac=True,method='BFGS',options={'gtol':1e-7,'maxiter':500})
 if np.linalg.norm(fn(fit.x)[1],ord=np.inf)>1e-5:raise ValueError('Firth fit did not converge')
 return fit.x

def fit_predict(train,y,test):
 mu=train.mean(0);sd=train.std(0);sd=np.where(sd>0,sd,1)
 X=np.column_stack([np.ones(len(train)),(train-mu)/sd]);T=np.column_stack([np.ones(len(test)),(test-mu)/sd]);b=firth(X,y)
 return expit(T@b),{'intercept_standardized':float(b[0]),'coefficients_standardized':interval(b[1:]),'training_means':interval(mu),'training_sds':interval(sd)}

def calibration(y,p):
 p=np.clip(p,1e-12,1-1e-12);edges=np.linspace(0,1,6);bins=[]
 for i in range(5):
  m=(p>=edges[i])&(p<=edges[i+1] if i==4 else p<edges[i+1])
  if m.any():bins.append({'n':int(m.sum()),'mean_predicted':float(p[m].mean()),'observed':float(y[m].mean()),'observed_ci95':wilson(int(y[m].sum()),int(m.sum()))['ci95']})
 return {'brier':float(np.mean((y-p)**2)),'log_loss':float(-np.mean(y*np.log(p)+(1-y)*np.log(1-p))),'mean_predicted':float(p.mean()),'observed_prevalence':float(y.mean()),'bins':bins,'note':'Five fixed probability bins; no optimized binning. Very sparse negatives; calibration slope and clinical validation not established.'}

def summary(x):
 q=np.quantile(x,[.25,.5,.75]);return dict(n=len(x),mean=float(np.mean(x)),sd=float(np.std(x,ddof=1)),median=float(q[1]),q1=float(q[0]),q3=float(q[2]),minimum=float(np.min(x)),maximum=float(np.max(x)),skewness=finite(stats.skew(x,bias=False)))

def bootstrap_difference(a,b,fn,rng,n=3000):
 return interval(np.quantile([fn(rng.choice(a,len(a)),rng.choice(b,len(b))) for _ in range(n)],[.025,.975]))

def cost_analysis(df,rng):
 cost=pd.to_numeric(df.total_costs,errors='coerce');sev=df.histology.map({1:1,2:1,3:1,4:2,5:2,6:0});valid=cost.notna()&cost.ge(0)&sev.isin([1,2]);a=cost[valid&(sev==2)].to_numpy();b=cost[valid&(sev==1)].to_numpy()
 out={'question':'Do recorded total hospital costs differ between simple and complicated histological appendicitis?','status':'Exploratory additional question; not a replacement approved objective','variables':['histology','HISTOLOGY_SEVERITY','total_costs','TOTAL_COST'],'currency':'NGN','total_records':len(df),'eligible':int(valid.sum()),'excluded_reference_negative':int((sev==0).sum()),'missing_or_invalid_cost_among_appendicitis':int((sev.isin([1,2])&~(cost.notna()&cost.ge(0))).sum()),'unclassified_histology':int(sev.isna().sum())}
 if min(len(a),len(b))<2:out['unavailable']='At least two complete cases per group are required.';return out
 out['groups']={'simple':summary(b),'complicated':summary(a)}
 t=stats.ttest_ind(a,b,equal_var=False);v1=np.var(a,ddof=1)/len(a);v2=np.var(b,ddof=1)/len(b);d=np.mean(a)-np.mean(b);dfw=(v1+v2)**2/(v1*v1/(len(a)-1)+v2*v2/(len(b)-1));ci=d+np.array([-1,1])*stats.t.ppf(.975,dfw)*np.sqrt(v1+v2)
 ties=len(set(np.r_[a,b]))<len(a)+len(b);method='asymptotic' if ties else 'exact';u=stats.mannwhitneyu(a,b,alternative='two-sided',method=method)
 rb=lambda x,y:float(2*(((x[:,None]>y)+.5*(x[:,None]==y)).mean())-1)
 rank_primary=max(abs(stats.skew(a,bias=False)),abs(stats.skew(b,bias=False)))>1 or min(len(a),len(b))<10
 out.update(primary_test='Mann–Whitney U' if rank_primary else 'Welch independent-samples t-test',selection_reason='Conservative exploratory selection: rank comparison if either absolute sample skewness exceeds 1 or either group has fewer than 10 cases; otherwise Welch. No normality p-value gating.',welch={'statistic':finite(t.statistic),'df':finite(dfw),'p':finite(t.pvalue),'mean_difference_complicated_minus_simple':float(d),'ci95':interval(ci)},mann_whitney={'u_complicated':float(u.statistic),'p':float(u.pvalue),'method':method+'; two-sided; continuity/tie correction for asymptotic calculation','rank_biserial_complicated_minus_simple':rb(a,b),'effect_ci95':bootstrap_difference(a,b,rb,rng,1500)},differences={'mean':float(d),'mean_bootstrap_ci95':bootstrap_difference(a,b,lambda x,y:np.mean(x)-np.mean(y),rng),'median':float(np.median(a)-np.median(b)),'median_bootstrap_ci95':bootstrap_difference(a,b,lambda x,y:np.median(x)-np.median(y),rng),'hodges_lehmann_pairwise_location_shift':float(np.median(a[:,None]-b)),'location_shift_ci95':bootstrap_difference(a,b,lambda x,y:np.median(x[:,None]-y),rng)},limitations=['Histological severity only; operative rupture does not override it.','Independent patient observations assumed. Mann–Whitney compares distributions; it is not automatically a test of medians.','Percentile bootstrap intervals use independent within-group resampling; small complicated group limits stability.','Recorded NGN totals only; cost components, perspective and price year unavailable.','No adjusted cost regression: small complicated group and no prespecified adjustment set. Differences are associations, not causal effects.'])
 return out

def diagnostic(df,rng):
 required=['MAS','AIR','CRP','histology'];sub=df[required].apply(pd.to_numeric,errors='coerce');available={c:int(sub[c].notna().sum()) for c in required};valid=sub.histology.isin(range(1,7))&sub.MAS.isin(range(0,10))&sub.AIR.isin(range(0,13))&sub.CRP.ge(0)&sub.CRP.notna();sub=sub[valid];y=sub.histology.isin(range(1,6)).astype(int).to_numpy()
 out={'question':'Compare diagnostic strategies against histopathology','n_common':len(y),'positive':int(y.sum()),'negative':int(len(y)-y.sum()),'excluded_missing_or_invalid':int(len(df)-len(y)),'field_nonmissing':available,'scope':'Common complete-case subset for direct comparisons; all added combinations exploratory.','reference_mapping':'Histology 1–5 positive; 6 isolated reactive lymphoid hyperplasia negative.','strategies':[],'comparisons':[],'limitations':['Reference-negative counts determine specificity precision; predictive values are selected-cohort dependent.','MAS >=7 is protocol-supported score categorization. hsCRP >3 mg/L is laboratory elevation, not a validated appendicitis diagnostic cutoff. AIR >=9 is an operational standard-score high-probability threshold, not protocol prespecified.','No combined AND/OR rule was recovered. All combinations are Firth logistic development using continuous predictors and no interactions.','Model cutoff 0.50 is analyst operational, fixed before fitting, not optimized.','Leave-one-out validation fits scaling and coefficients on each training fold; no held-out response is used in fitting.','AUC intervals for held-out predictions resample predictions conditional on the fitted cross-validation procedure; they do not fully account for model-development variability. External validation remains necessary.','No DeLong p-values for fitted or cross-validated models. Pairwise DeLong comparisons are restricted to unfitted continuous marker scores.','No cost-driver causal claims, no recalculation of MAS or AIR totals, and no patient exclusions inferred from RVS.']}
 if len(y)<10 or min(int(y.sum()),int(len(y)-y.sum()))<2:out['unavailable']='Insufficient common complete cases or fewer than two observations in a reference class.';return out
 arrays={c:sub[c].to_numpy() for c in ['MAS','AIR','CRP']}
 thresholds={'MAS':(7,False,'Protocol-supported high MAS classification'),'AIR':(9,False,'Exploratory operational AIR high-probability classification'),'CRP':(3,True,'Study laboratory elevation, not disease-specific validated threshold')}
 for col in ['AIR','MAS','CRP']:
  score=arrays[col];cut,strict,note=thresholds[col];pred=score>cut if strict else score>=cut
  out['strategies'].append({'id':col,'name':{'AIR':'AIR alone','MAS':'MAS alone','CRP':'hsCRP alone'}[col],'kind':'Unfitted recorded marker','threshold':('>' if strict else '>=')+str(cut)+(' mg/L' if col=='CRP' else ' points'),'threshold_note':note,'evaluation':'Recorded marker ranking; fixed operational classification','auc':auc(y,score),'auc_ci95':auc_ci(y,score,rng),'roc':roc(y,score),'metrics':confusion(y,pred)})
 combinations=[['MAS'],['CRP'],['AIR'],['MAS','CRP'],['MAS','AIR'],['CRP','AIR'],['AIR','MAS','CRP']]
 for cols in combinations:
  name=' + '.join('hsCRP' if c=='CRP' else c for c in cols);X=sub[cols].to_numpy();item={'id':'model_'+'_'.join(cols),'name':name+' model','kind':'Exploratory Firth model','predictors':cols,'threshold':'>=0.50 predicted probability','threshold_note':'Fixed analyst operating point, not protocol-prespecified or optimized','evaluation':'Leave-one-out held-out predictions'}
  try:
   apparent,parameters=fit_predict(X,y,X);held=np.empty(len(y))
   for i in range(len(y)):
    mask=np.arange(len(y))!=i;held[i]=fit_predict(X[mask],y[mask],X[i:i+1])[0][0]
   item.update(auc=auc(y,held),auc_ci95=auc_ci(y,held,rng),roc=roc(y,held),metrics=confusion(y,held>=.5),calibration=calibration(y,held),apparent_auc=auc(y,apparent),parameters=parameters)
  except (ValueError,np.linalg.LinAlgError) as e:item['unavailable']=str(e)
  out['strategies'].append(item)
 for a,b in itertools.combinations(['AIR','MAS','CRP'],2):
  out['comparisons'].append({'a':a,'b':b,'method':'Paired DeLong',**delong(y,arrays[a],arrays[b])})
 for a,b in itertools.combinations(['AIR','MAS','CRP'],2):
  ca,sa,_=thresholds[a];cb,sb,_=thresholds[b];pa=arrays[a]>ca if sa else arrays[a]>=ca;pb=arrays[b]>cb if sb else arrays[b]>=cb
  for group,label in [(y==1,'sensitivity'),(y==0,'specificity')]:
   b01=int((~pa[group]&pb[group]).sum());b10=int((pa[group]&~pb[group]).sum());discord=b01+b10
   out['comparisons'].append({'a':a,'b':b,'method':'Exact McNemar '+label,'n':int(group.sum()),'a_negative_b_positive':b01,'a_positive_b_negative':b10,'p':float(stats.binomtest(b01,discord,.5).pvalue) if discord else 1.,'note':'Conditional exact binomial discordance test at fixed thresholds; marker elevation is not a validated disease rule.'})
 base=next(x for x in out['strategies'] if x['id']=='model_MAS');comb=next(x for x in out['strategies'] if x['id']=='model_MAS_CRP')
 if 'auc' in base and 'auc' in comb:
  out['incremental_hscrp']={'delta_loo_auc':comb['auc']-base['auc'],'delta_loo_brier':comb['calibration']['brier']-base['calibration']['brier'],'delta_loo_log_loss':comb['calibration']['log_loss']-base['calibration']['log_loss'],'interpretation':'Positive AUC difference favours ranking with hsCRP; negative Brier/log-loss differences favour probabilistic performance. This internally evaluated small cohort cannot establish external clinical benefit.'}
 return out

def categorical_associations(df,rng):
 results=[];severity=df.histology.map({1:0,2:0,3:0,4:1,5:1});comp=df.postop_complication.map({1:1,2:1,3:1,4:1,5:1,6:1,7:0,8:1})
 for grouping,groups,names in [('Histological severity',severity,['simple','complicated']),('Recorded postoperative complication',comp,['explicit none','recorded complication'])]:
  for col in ['AIR','MAS','CRP','total_costs','time_to_diagnosis','time_to_surgery','Duration_of_admission']:
   values=pd.to_numeric(df[col],errors='coerce');valid=groups.notna()&values.notna()&values.ge(0);x=values[valid&(groups==1)].to_numpy();y=values[valid&(groups==0)].to_numpy()
   if min(len(x),len(y))<2:continue
   ties=len(set(np.r_[x,y]))<len(x)+len(y);method='asymptotic' if ties else 'exact';test=stats.mannwhitneyu(x,y,alternative='two-sided',method=method)
   rb=lambda a,b:float(2*(((a[:,None]>b)+.5*(a[:,None]==b)).mean())-1)
   results.append({'grouping':grouping,'variable':col,'n':int(valid.sum()),'excluded_not_applicable_or_unknown':int((~valid).sum()),'groups':{names[0]:summary(y),names[1]:summary(x)},'method':'Mann–Whitney U, '+method,'statistic':float(test.statistic),'p':float(test.pvalue),'effect':rb(x,y),'effect_ci95':bootstrap_difference(x,y,rb,rng,1000),'effect_direction':names[1]+' minus '+names[0],'note':'Exploratory recorded-group distribution comparison, not correlation or causation. No adjusted regression with sparse groups.'})
 order=sorted(range(len(results)),key=lambda i:results[i]['p']);last=0
 for j,i in enumerate(order):last=max(last,min(1,results[i]['p']*(len(results)-j)));results[i]['p_holm']=last
 return results

def associations(df,rng):
 cols=['AIR','MAS','CRP','total_costs','time_to_diagnosis','time_to_surgery','Duration_of_admission'];out=[]
 for a,b in itertools.combinations(cols,2):
  s=df[[a,b]].apply(pd.to_numeric,errors='coerce').dropna();x=s[a].to_numpy();z=s[b].to_numpy()
  if len(s)<4 or np.ptp(x)==0 or np.ptp(z)==0:continue
  r=stats.spearmanr(x,z);boot=[]
  with warnings.catch_warnings():
   warnings.simplefilter('ignore')
   for _ in range(1000):
    ids=rng.integers(0,len(s),len(s));v=stats.spearmanr(x[ids],z[ids]).statistic
    if np.isfinite(v):boot.append(v)
  out.append({'x':a,'y':b,'n':len(s),'method':'Spearman rank association','estimate':float(r.statistic),'ci95':interval(np.quantile(boot,[.025,.975])) if len(boot)>900 else [None,None],'p':finite(r.pvalue),'scatter_binned':binned_scatter(x,z),'note':'Exploratory pairwise complete cases. Asymptotic two-sided p; paired percentile bootstrap CI. No causal interpretation.'})
 # Holm familywise correction across the displayed 21 exploratory continuous comparisons.
 order=sorted(range(len(out)),key=lambda i:out[i]['p']);last=0
 for j,i in enumerate(order):last=max(last,min(1,out[i]['p']*(len(out)-j)));out[i]['p_holm']=last
 return {'group_comparisons':categorical_associations(df,rng),'question':'Explore score, biomarker, recorded interval and cost associations','scope':'Exploratory; correlation does not establish causality','rows':out,'notes':['Spearman selected consistently for bounded scores and possibly skewed clinical measures; no test selected to maximize significance.','Holm correction applies across this displayed family only.','Categorical group outcomes use exploratory Mann–Whitney comparisons of recorded measurements, with a separate Holm family across the 14 group comparisons; no binary Pearson correlations or sparse adjusted regressions.','MAS components are documented in the variable explorer; exact reconstruction is unavailable because measured fever thresholds and full source scoring observations are absent.','Charts aggregate to quantile cells to avoid exporting patient-level points.']}

def binned_scatter(x,y):
 # Aggregate joint histogram; no identifiers or individual observations exported.
 xe=np.unique(np.quantile(x,np.linspace(0,1,7)));ye=np.unique(np.quantile(y,np.linspace(0,1,7)))
 if len(xe)<2 or len(ye)<2:return []
 h,xe,ye=np.histogram2d(x,y,bins=[xe,ye]);return [[float((xe[i]+xe[i+1])/2),float((ye[j]+ye[j+1])/2),int(h[i,j])] for i in range(len(xe)-1) for j in range(len(ye)-1) if h[i,j]>0]

def main():
 ap=argparse.ArgumentParser();ap.add_argument('dataset',type=Path);ap.add_argument('--output',type=Path,default=Path('results.json'));args=ap.parse_args();df,meta=pyreadstat.read_sav(args.dataset);needed={'histology','total_costs','MAS','AIR','CRP','time_to_diagnosis','time_to_surgery','Duration_of_admission','postop_complication'}
 if not needed.issubset(df):raise SystemExit('Missing required source columns: '+', '.join(sorted(needed-set(df))))
 if df.empty:raise SystemExit('Dataset contains no records; no analysis was performed.')
 source_hash=hashlib.sha256(args.dataset.read_bytes()).hexdigest();rng=np.random.default_rng(SEED)
 out={'schema_version':1,'build':'2026-10-12-research-v3','generated_from_sha256':source_hash,'records':len(df),'contains_patient_rows':False,'seed':SEED,'environment':{'python':platform.python_version(),'numpy':np.__version__,'pandas':pd.__version__,'scipy':scipy.__version__,'pyreadstat':pyreadstat.__version__},'definitions':{'reference':'Histology 1–5 positive; 6 negative under agreed isolated reactive lymphoid hyperplasia interpretation','severity':'Histology 1–3 simple; 4–5 complicated; 6 not applicable; independent of operative findings','units':{'CRP':'mg/L','total_costs':'NGN','time_to_diagnosis':'hours','time_to_surgery':'hours','Duration_of_admission':'days'},'eligibility':'All supplied records retained; complete clinical eligibility cannot be established from these fields; no RVS exclusion'},'costs':cost_analysis(df,rng),'diagnostics':diagnostic(df,rng),'associations':associations(df,rng)}
 assert source_hash==hashlib.sha256(args.dataset.read_bytes()).hexdigest();args.output.parent.mkdir(parents=True,exist_ok=True);args.output.write_text(json.dumps(out,indent=2,allow_nan=False));print(json.dumps({'records':len(df),'common_diagnostic_n':out['diagnostics']['n_common'],'cost_eligible':out['costs']['eligible'],'output':str(args.output),'patient_rows_exported':False}))
if __name__=='__main__':main()
