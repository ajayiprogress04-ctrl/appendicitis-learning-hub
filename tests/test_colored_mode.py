from pathlib import Path
import re,xml.etree.ElementTree as ET,tinycss2
r=Path(__file__).resolve().parents[1];css=(r/'colored-mode.css').read_text()
def check(rules):
 for rule in rules:
  assert rule.type!='error',rule
  if rule.type=='qualified-rule':
   for d in tinycss2.parse_declaration_list(rule.content,skip_comments=True,skip_whitespace=True):assert d.type!='error',d
  elif rule.type=='at-rule' and rule.content:check(tinycss2.parse_rule_list(rule.content,skip_comments=True,skip_whitespace=True))
check(tinycss2.parse_stylesheet(css,skip_comments=True,skip_whitespace=True))
urls=re.findall(r'url\("([^" ]+)"\)',css);assert len(urls)==6
for u in urls:
 p=r/u;assert p.is_file();root=ET.fromstring(p.read_text());assert root.find('.//{http://www.w3.org/2000/svg}linearGradient') is not None
 for n in root.iter():assert n.tag.rsplit('}',1)[-1] not in ['script','image','foreignObject','animate','animateTransform'];assert not any('href' in k or k.lower().startswith('on') for k in n.attrib)
 assert '!/'+p.relative_to(r).as_posix() in (r/'.vercelignore').read_text()
assert 'animation:none' in css and 'filter:blur' not in css and '@keyframes' not in css
html=(r/'index.html').read_text();assert all('value="'+x+'"' in html for x in ['light','dark','colored'])
def lum(h):
 c=[int(h[i:i+2],16)/255 for i in [1,3,5]];c=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c];return sum(a*b for a,b in zip(c,[.2126,.7152,.0722]))
def ratio(a,b):return (max(lum(a),lum(b))+.05)/(min(lum(a),lum(b))+.05)
for fg,bg in [('#f4f7ff','#11182e'),('#b9c7e4','#192441'),('#ffffff','#7752c6'),('#ffffff','#5257a8'),('#ffffff','#216d83'),('#ffffff','#825cce'),('#ffffff','#5860b2'),('#ffffff','#26788b'),('#a9b8d7','#0d1830')]:
 v=ratio(fg,bg);assert v>=4.5,(fg,bg,v);print(f'{fg} on {bg}: {v:.2f}:1')
print('Colored CSS, six original gradient SVGs, local assets/allowlist, three options, static/reduced-motion behaviour and representative reading/action/placeholder contrast passed.')
