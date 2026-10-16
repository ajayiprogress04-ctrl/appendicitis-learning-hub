"""Check static runtime dependencies and syntax without installing anything."""
import re, subprocess, shutil, sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
missing=[]
for p in [root/'index.html',*root.glob('*.css')]:
 text=p.read_text()
 refs=re.findall(r'''(?:src|href)=["']([^"']+)["']''',text) if p.suffix=='.html' else re.findall(r'''url\(["']?([^\)"']+)''',text)
 for ref in refs:
  if ref.startswith(('http:','https:','data:','#')):continue
  target=(p.parent/ref.split('?')[0].split('#')[0]).resolve()
  if not target.exists():missing.append((p.name,ref))
assert not missing,missing
node=shutil.which('node')
if not node:raise SystemExit('Node.js is required for JavaScript syntax checks.')
for p in sorted(root.glob('*.js')):subprocess.run([node,'--check',str(p)],check=True)
html=(root/'index.html').read_text()
nav=re.search(r'<nav class="workspace-tabs".*?</nav>',html).group()
assert re.findall(r'>(Objectives|Reports|Papers)</button>',nav)==['Objectives','Reports','Papers']
assert 'paper-objective-workflow.js' in html and 'word-document-preview.js' in html
assert 'w:pgSz w:w="11906" w:h="16838"' in (root/'paper-objective-workflow.js').read_text()
assert not re.search(r'w:orient=["\']landscape', (root/'result-exports.js').read_text())
assert not missing
print('PASS local HTML/CSS assets, root JavaScript syntax, three primary tabs, required workflow modules and portrait export configuration')
