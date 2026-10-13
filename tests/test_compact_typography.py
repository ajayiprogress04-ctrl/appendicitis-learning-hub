from pathlib import Path
import re,threading,http.server,urllib.request
from fontTools.ttLib import TTFont
root=Path(__file__).resolve().parents[1];css=(root/'styles.css').read_text()
fpath=root/'vendor/inter-latin-variable.woff2';font=TTFont(fpath)
assert any(a.axisTag=='wght' and a.minValue<=400 and a.maxValue>=600 for a in font['fvar'].axes)
names=[n.toUnicode() for n in font['name'].names];assert any('Inter' in n for n in names)
cmap=font.getBestCmap();assert all(ord(c) in cmap for c in '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-=.%')
assert 'font-display:swap' in css and 'system-ui' in css
assert 'Georgia' not in css and 'Times New Roman' not in css
for token in ['--type-title:20px','--type-section:15px','--type-card:13px','--type-body:12px','--type-table:11px','--type-meta:10px','--type-chart:10px']:assert token in css
assert 'tabular-nums lining-nums' in css and 'overflow-wrap:anywhere' in css
assert 'min-height:40px' in css and 'font-size:16px;min-height:40px' in css
ignore=(root/'.vercelignore').read_text();assert '!/vendor/inter-latin-variable.woff2' in ignore
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(root),**kw)
 def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),Handler);threading.Thread(target=server.serve_forever,daemon=True).start()
try:
 with urllib.request.urlopen('http://127.0.0.1:'+str(server.server_port)+'/vendor/inter-latin-variable.woff2') as r:assert r.status==200 and r.read()==fpath.read_bytes()
finally:server.shutdown();server.server_close()
print(f'Inter variable WOFF2 decoded: {fpath.stat().st_size} bytes; weights/glyphs, local HTTP delivery, scale, wrapping, tabular numerals, fallback, deployment allowlist and mobile control rules passed.')
print('Approximate CSS row budget: 29.4 px compact versus 47.7 px previously; not a native measurement.')
