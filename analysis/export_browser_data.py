"""Convert a SAV locally with declared missing codes and metadata preserved. Never deploy the output."""
import argparse
from pathlib import Path
from import_spss_local import convert
p=argparse.ArgumentParser();p.add_argument('sav',type=Path);p.add_argument('--output',type=Path,default=Path('private_browser_data.json'));a=p.parse_args()
j=convert(a.sav,a.output)
print('Wrote private browser input:',len(j['records']),'rows; hospital identifier excluded. Never publish this output.')
