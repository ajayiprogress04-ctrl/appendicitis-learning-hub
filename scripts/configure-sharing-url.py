"""Set the stable, public production URL before manual deployment."""
from pathlib import Path
from urllib.parse import urlsplit
import re,sys
if len(sys.argv)!=2: raise SystemExit('Usage: python3 scripts/configure-sharing-url.py https://YOUR-PUBLIC-DOMAIN')
u=urlsplit(sys.argv[1])
if u.scheme!='https' or not u.hostname or u.username or u.password or u.query or u.fragment or u.path not in ('','/'): raise SystemExit('Use an HTTPS origin only; no path, query, credentials or fragment.')
origin='https://'+u.netloc
p=Path(__file__).resolve().parents[1]/'index.html';s=p.read_text()
s,n=re.subn(r'(<link rel="canonical" href=")[^"]+(">)',lambda m:m[1]+origin+'/'+m[2],s)
if n!=1:raise SystemExit('Canonical tag missing or duplicated. No file written.')
for prop in ['og:url','og:image','og:image:secure_url','twitter:image']:
 suffix='/' if prop=='og:url' else '/assets/appendicitis-social-v2.png'
 s,n=re.subn(r'(<meta (?:property|name)="'+re.escape(prop)+r'" content=")[^"]+(">)',lambda m:m[1]+origin+suffix+m[2],s)
 if n!=1:raise SystemExit('Missing/duplicated '+prop+'. No file written.')
p.write_text(s);print('Public sharing URLs updated to '+origin)
