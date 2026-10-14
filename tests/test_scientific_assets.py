from pathlib import Path
import re,xml.etree.ElementTree as ET,tinycss2
r=Path(__file__).resolve().parents[1];css=(r/'scientific-backgrounds.css').read_text();files=[p for p in (r/'scientific-textures').glob('*.svg') if '-colored' not in p.name];assert len(files)==12
urls=re.findall(r'url\("([^" ]+)"\)',css);assert len(urls)==12
for u in urls:assert (r/u).is_file(),u
for p in files:
 root=ET.fromstring(p.read_text());assert root.tag.endswith('svg') and root.get('viewBox')
 assert root.find('{http://www.w3.org/2000/svg}title') is not None
 for node in root.iter():
  assert node.tag.rsplit('}',1)[-1] not in ['script','image','foreignObject','animate','animateTransform']
  assert not any(k.lower().startswith('on') or 'href' in k for k in node.attrib)
 assert p.name.split('-')[0] in ['dna','molecules','cells','anatomy','data','waveforms']
 assert '#888881' in p.read_text() if '-dark' in p.name else '#77736b' in p.read_text()
assert sum(p.stat().st_size for p in files)<100000
assert '--science-texture:' not in (r/'styles.css').read_text()
assert '--science-base:#000000' in css and '--science-base:#f7f6f2' in css
assert 'filter:' not in css and 'animation:' not in css and 'position:fixed' not in css
ignore=(r/'.vercelignore').read_text()
for p in files:assert '!/'+p.relative_to(r).as_posix() in ignore
rules=tinycss2.parse_stylesheet(css,skip_comments=True,skip_whitespace=True)
def check(rules):
 for rule in rules:
  assert rule.type!='error',rule
  if rule.type=='qualified-rule':
   for d in tinycss2.parse_declaration_list(rule.content,skip_comments=True,skip_whitespace=True):assert d.type!='error',d
  elif rule.type=='at-rule' and rule.content:check(tinycss2.parse_rule_list(rule.content,skip_comments=True,skip_whitespace=True))
check(rules)
print('12 original SVGs parsed; six motif families, theme colours, local references, <100 kB artwork, no scripts/animations/overlays, deployment allowlist and CSS syntax passed.')
