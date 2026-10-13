from pathlib import Path
import pandas as pd, pyreadstat
p=Path(__file__).resolve().parents[1]/'samples'
df=pd.DataFrame({'MAS':[5.,7.,99.,float('nan')], 'age':[20.,12.,31.,45.], 'note':['alpha','beta','MISSING','0042'], 'long_variable_name':[1.,2.,3.,4.], 'sex':[1.,2.,1.,2.]})
for compressed in [False,True]:
 pyreadstat.write_sav(df,str(p/('SYNTHETIC_Direct_'+('compressed' if compressed else 'plain')+'.sav')),column_labels={'MAS':'Modified Alvarado score','note':'Synthetic text'},variable_value_labels={'MAS':{5:'Five',7:'Seven',99:'Not recorded'}},missing_ranges={'MAS':[99],'note':['MISSING']},variable_measure={'MAS':'ordinal'},row_compress=compressed)
