from pathlib import Path
import re,zipfile,tinycss2
root=Path(__file__).resolve().parents[1];css=(root/'styles.css').read_text()
rules=tinycss2.parse_stylesheet(css,skip_whitespace=True,skip_comments=True)
def check_rules(rules):
 for r in rules:
  assert r.type!='error',r
  if r.type=='at-rule' and r.content and r.lower_at_keyword=='media':check_rules(tinycss2.parse_rule_list(r.content,skip_whitespace=True,skip_comments=True))
  if r.type=='qualified-rule':
   for d in tinycss2.parse_declaration_list(r.content,skip_whitespace=True,skip_comments=True):assert d.type!='error',d
check_rules(rules)
assert len(re.findall(r'^\.dark-theme\s*\{',css,re.M))==1
for old in ['#111c2c','#1b2a3d','#26384e','#20364a','#26343c','#203638']:assert old not in css
for token in ['--bg:#000000','--surface:#080808','--soft:#0D0D0D','--input:#101010','--line:#252525','--ink:#F5F5F5','--muted:#A3A3A3']:assert token in css,token
for component in ['.topbar','.desktop-sidebar','.objective-card','.method-card','.variable-card','.catalog-data','.global-hit','.results-scroll','.result-preview','.interpretation','.report-order','.toast','dialog']:
 assert '.dark-theme '+component in css,component
assert 'prefers-reduced-motion:reduce' in css
assert 'filter:blur' not in css and '@keyframes' not in css
assert '.dark-theme .result-preview svg text' in css and 'fill:#F5F5F5' in css
assert '.dark-theme svg rect[fill="#fff"]' in css
assert 'outline:2px solid var(--teal)' in css
# WCAG text contrast on the lightest normal dark surface.
def lum(h):
 c=[int(h[i:i+2],16)/255 for i in [1,3,5]];c=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c];return sum(a*b for a,b in zip(c,[.2126,.7152,.0722]))
for fg,bg in [('#F5F5F5','#181818'),('#A3A3A3','#181818'),('#89d5dd','#181818'),('#080808','#78c4cc')]:
 ratio=(max(lum(fg),lum(bg))+.05)/(min(lum(fg),lum(bg))+.05);assert ratio>=4.5;print(f'{fg} on {bg}: {ratio:.2f}:1')
print('CSS syntax, consolidated palette, component coverage, chart labels, focus, reduced motion and contrast checks passed. No native rendering test.')
