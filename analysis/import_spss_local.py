"""Local SAV picker. No server or network. Requires pyreadstat and pandas."""
import argparse,json,hashlib
from pathlib import Path
import pyreadstat
import pandas as pd
def convert(source,out):
 d,m=pyreadstat.read_sav(source,user_missing=True);f=[k for k in d if k!='hosp_n0' and pd.api.types.is_numeric_dtype(d[k])]
 j=dict(schema='appendicitis-private-rows-v1',source_sha256=hashlib.sha256(Path(source).read_bytes()).hexdigest(),source_records=len(d),records=[{k:None if pd.isna(r[k]) else float(r[k]) for k in f} for _,r in d.iterrows()],labels={k:m.column_names_to_labels[k] for k in f},value_labels={k:m.variable_value_labels.get(k,{}) for k in f},missing_ranges=m.missing_ranges,variable_measure=m.variable_measure,original_variable_types=m.original_variable_types,file_label=m.file_label,identifier_fields_removed=['hosp_n0'])
 Path(out).write_text(json.dumps(j,indent=2,allow_nan=False),encoding='utf-8');return j
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('source',nargs='?');p.add_argument('--output');a=p.parse_args()
 if a.source:convert(a.source,a.output or str(Path(a.source).with_suffix('.private.json')))
 else:
  import tkinter as tk
  from tkinter import filedialog,messagebox
  root=tk.Tk();root.withdraw();source=filedialog.askopenfilename(title='Select private SAV',filetypes=[('SPSS','*.sav')])
  if source:
   out=filedialog.asksaveasfilename(title='Save private input',initialfile=Path(source).stem+'.private.json',defaultextension='.json')
   if out:
    try:convert(source,out);messagebox.showinfo('Ready','Select the prepared file in Tables & figures and confirm its preview. Nothing was uploaded.')
    except Exception:messagebox.showerror('Cannot read SAV','Check the SAV file and output location. Encrypted or damaged files may not be readable.')
