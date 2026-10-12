import importlib.util,unittest
from pathlib import Path
import numpy as np
from scipy.special import expit
from scipy import stats
spec=importlib.util.spec_from_file_location('engine',Path(__file__).resolve().parents[1]/'analysis/run_analysis.py');a=importlib.util.module_from_spec(spec);spec.loader.exec_module(a)
class StatisticsChecks(unittest.TestCase):
 def test_firth_intercept_analytic(self):
  y=np.r_[np.ones(17),np.zeros(3)];b=a.firth(np.ones((20,1)),y)
  self.assertAlmostEqual(expit(b[0]),17.5/21,places=7)
 def test_firth_separation_finite(self):
  X=np.column_stack([np.ones(10),np.arange(10)]);y=(np.arange(10)>=5).astype(int);b=a.firth(X,y)
  self.assertTrue(np.isfinite(b).all());self.assertGreater(b[1],0)
 def test_auc_ties_and_roc(self):
  y=np.array([1,1,0,0]);s=np.array([2,1,1,0]);self.assertEqual(a.auc(y,s),.875)
  pts=np.asarray(a.roc(y,s));self.assertAlmostEqual(np.trapezoid(pts[:,1],pts[:,0]),.875)
 def test_delong_against_placement_formula(self):
  y=np.array([1,1,1,0,0,0]);x=np.array([4,2,1,3,1,0]);z=np.array([3,2,0,4,1,0]);r=a.delong(y,x,z)
  vx,wx=a.placements(y,x);vz,wz=a.placements(y,z);var=np.var(vx-vz,ddof=1)/3+np.var(wx-wz,ddof=1)/3
  self.assertAlmostEqual(r['z'],(a.auc(y,x)-a.auc(y,z))/np.sqrt(var))
 def test_confusion_denominators_and_boundary_lr(self):
  r=a.confusion(np.array([1,1,0,0]),np.array([1,0,1,0],bool))
  self.assertEqual((r['tp'],r['tn'],r['fp'],r['fn']),(1,1,1,1));self.assertEqual(r['sensitivity']['estimate'],.5)
  self.assertEqual(r['lr_positive']['estimate'],1)
  z=a.confusion(np.array([1,1,0,0]),np.array([1,1,0,0],bool));self.assertEqual(z['lr_positive']['boundary'],'infinite');self.assertEqual(z['lr_negative']['estimate'],0)
 def test_wilson_known_interval(self):
  r=a.wilson(50,100);self.assertAlmostEqual(r['ci95'][0],.4038315303659956);self.assertEqual(a.wilson(0,0)['estimate'],None)
 def test_fold_scaling_only_uses_training(self):
  train=np.column_stack([np.arange(10.),[1,3,0,4,2,6,3,7,4,8]]);y=np.array([0,0,0,0,0,1,1,1,1,1]);p,b=a.fit_predict(train,y,np.array([[12.,5.]]))
  self.assertTrue(np.allclose(b['training_means'],train.mean(0)));self.assertTrue(0<p[0]<1)
if __name__=='__main__':unittest.main()
