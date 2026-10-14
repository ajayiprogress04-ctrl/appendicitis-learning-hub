"""Inspect the genuine browser-downloaded Word export, including result parity."""
from pathlib import Path
import json,zipfile,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]/'samples'
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
def val(node,name):return node.get('{'+ns['w']+'}'+name)
with zipfile.ZipFile(root/'SYNTHETIC_Approved_Report.docx') as z:
 assert z.testzip() is None
 for name in z.namelist():
  if name.endswith('.xml') or name.endswith('.rels'): ET.fromstring(z.read(name))
 doc=ET.fromstring(z.read('word/document.xml'));styles=ET.fromstring(z.read('word/styles.xml'))
 margin=doc.find('.//w:pgMar',ns);assert all(val(margin,k)=='936' for k in ['top','bottom','left','right'])
 assert val(styles.find('.//w:docDefaults/w:rPrDefault/w:rPr/w:sz',ns),'val')=='22'
 assert len(doc.findall('.//w:tbl',ns))==1
 table=doc.find('.//w:tbl',ns);widths=[int(val(n,'w')) for n in table.findall('./w:tblGrid/w:gridCol',ns)];assert sum(widths)==10368 and len(set(widths))>1
 assert all(val(n,'fill')=='EDEDED' for n in table.findall('.//w:shd',ns))
 assert len(table.findall('.//w:tblHeader',ns))==1
 assert len(table.findall('.//w:cantSplit',ns))==6
 assert all(val(n,'val')=='19' for n in table.findall('.//w:sz',ns))
 texts=[''.join(n.itertext()) for n in doc.findall('.//w:t',ns)]
 selected=json.loads((root/'SYNTHETIC_Approved_Report_Selection.json').read_text());r=next(i['result'] for i in selected if i['result']['kind']=='table')
 for row in r['rows']:
  for v in row:assert str(v) in texts
 assert 'Analysis n = 36.' in ''.join(texts)
 assert any('PAGE' in n.attrib.get('{'+ns['w']+'}instr','') for n in ET.fromstring(z.read('word/footer1.xml')).iter())
 assert len([n for n in z.namelist() if n.startswith('word/media/')])==1
 assert 'OSSN' not in ''.join(texts) and 'Lab Study' not in ''.join(texts)
print('Approved Word profile: ZIP/XML integrity, margins, body/table typography, adaptive widths, shading, repeating/no-split rows, actual cell values/n, figure package, PAGE footer and absence of previous-study content: PASS')
