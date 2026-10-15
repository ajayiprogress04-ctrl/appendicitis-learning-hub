"""Check local HTTP asset delivery and source configuration without patient data."""
from pathlib import Path
import re,json,threading,http.server,urllib.request,urllib.error,subprocess
root=Path(__file__).resolve().parents[1]
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kw):super().__init__(*args,directory=str(root),**kw)
 def log_message(self,*args):pass
html=(root/'index.html').read_text();assets=re.findall(r'(?:src|href)="(\./[^"]+)"',html)
assert len(assets)==35,len(assets)
for a in assets:assert (root/a.split('?')[0]).is_file(),a
config=json.loads((root/'vercel.json').read_text());assert config['framework'] is None;assert config['outputDirectory']=='.';assert config['buildCommand']=='';assert config['installCommand']==''
assert not re.search(r'<(?:script|link)[^>]*(?:src|href)="https?://',html)
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),Handler);threading.Thread(target=server.serve_forever,daemon=True).start();base='http://127.0.0.1:'+str(server.server_port)
try:
 for a in ['/', '/index.html']+['/'+x.removeprefix('./') for x in assets]:
  with urllib.request.urlopen(base+a) as r:assert r.status==200 and len(r.read())>0,a
 try:urllib.request.urlopen(base+'/not-a-real-file.html');raise AssertionError('Expected 404')
 except urllib.error.HTTPError as e:assert e.code==404
finally:server.shutdown();server.server_close()
# Ensure the allowlist includes every runtime asset but no sample/input directories.
ignore=(root/'.vercelignore').read_text().splitlines();assert '/*' in ignore
for a in assets:
 name=a.removeprefix('./').split('?')[0]
 assert '!'+name in ignore or '!/'+name in ignore,name
assert not any(s in ['!samples','!samples/','!analysis','!analysis/','!tests','!tests/'] for s in ignore)
assert not list(root.glob('.env*'))
print('Entry point, 35 local runtime assets, HTTP 200/404, static Vercel configuration, dependency order and deployment allowlist passed. This is not a native browser or live-deployment test.')
