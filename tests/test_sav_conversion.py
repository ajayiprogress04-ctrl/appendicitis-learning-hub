import unittest,tempfile,sys,subprocess,json,hashlib
from pathlib import Path
import pandas as pd,pyreadstat
root=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(root/'analysis'))
from import_spss_local import convert
class SAVConversionChecks(unittest.TestCase):
 def test_metadata_and_declared_missing(self):
  with tempfile.TemporaryDirectory() as tmp:
   src=Path(tmp)/'SYNTHETIC.sav';a=Path(tmp)/'a.json';b=Path(tmp)/'b.json'
   pyreadstat.write_sav(pd.DataFrame({'MAS':[5.,9.,7.],'CRP':[1.,None,3.],'hosp_n0':['SYNTHETIC1','SYNTHETIC2','SYNTHETIC3']}),str(src),file_label='SYNTHETIC ONLY',column_labels={'MAS':'Synthetic score'},variable_value_labels={'MAS':{5:'Synthetic5',7:'Synthetic7',9:'Missing'}},missing_ranges={'MAS':[9]},variable_measure={'MAS':'ordinal'})
   before=hashlib.sha256(src.read_bytes()).hexdigest();j=convert(src,a)
   self.assertEqual(j['source_records'],3);self.assertNotIn('hosp_n0',j['records'][0]);self.assertEqual(j['variable_measure']['MAS'],'ordinal');self.assertEqual(j['labels']['MAS'],'Synthetic score');self.assertEqual(j['missing_ranges']['MAS'][0]['lo'],9);self.assertIsNone(j['records'][1]['CRP'])
   subprocess.run([sys.executable,str(root/'analysis/export_browser_data.py'),str(src),'--output',str(b)],check=True,capture_output=True)
   self.assertEqual(json.loads(a.read_text()),json.loads(b.read_text()));self.assertEqual(before,hashlib.sha256(src.read_bytes()).hexdigest())
if __name__=='__main__':unittest.main()
