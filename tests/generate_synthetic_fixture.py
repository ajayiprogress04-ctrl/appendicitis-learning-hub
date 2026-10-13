"""Create explicit synthetic data for local testing only; never include real study files."""
import argparse,json
from pathlib import Path
import pandas as pd
import pyreadstat
p=argparse.ArgumentParser();p.add_argument('output_dir',type=Path);a=p.parse_args();a.output_dir.mkdir(parents=True,exist_ok=True)
rows=[dict(age=10+i,sex=i%2+1,histology=i%6+1,INTRAOP_FINDING=i%4+1,MAS=i%10,AIR=i%13,CRP=i%9+0.3,pcv=30+i%20,total_costs=10000+i*137,Duration_of_admission=i%7+1,time_to_diagnosis=i%5+1,time_to_surgery=i%8+1,diagnostic_confi1=i%5+1,diagnostic_confi2=(i+1)%5+1,postop_complication=7 if i%2 else 1,tendernessRIF=i%2+1,reboundtenderness=i%2+1,migratory=i%2+1,abdominal_pain=i%2+1,signs=i%5+1) for i in range(36)]
data={'schema':'appendicitis-private-rows-v1','dataset_name':'SYNTHETIC AUDIT ONLY','records':rows,'notice':'Generated synthetic fixture. Not study findings.'}
(a.output_dir/'SYNTHETIC_Audit.private.json').write_text(json.dumps(data,indent=2))
frame=pd.DataFrame(rows);frame['hosp_n0']=['SYNTHETIC-'+str(i) for i in range(len(frame))]
pyreadstat.write_sav(frame,str(a.output_dir/'SYNTHETIC_Audit.sav'),file_label='SYNTHETIC AUDIT ONLY',column_labels={c:'Synthetic '+c for c in frame},variable_measure={c:'nominal' if c in ['histology','sex','postop_complication'] else 'ordinal' if c in ['diagnostic_confi1','diagnostic_confi2'] else 'scale' for c in frame if c!='hosp_n0'})
print('Created 36 synthetic records and a synthetic SAV; no patient data used.')
