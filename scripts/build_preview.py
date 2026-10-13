"""Build a standalone preview with scripts AFTER the DOM, in original load order."""
from pathlib import Path
import argparse,re,base64
root=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser();p.add_argument('output',type=Path);a=p.parse_args();scripts=[]
def script(m):
 text=(root/m.group(1).split('?')[0]).read_text();scripts.append('<script>\n'+text.replace('</script','<\\/script')+'\n</script>');return ''
def stylesheet(m):
 text=(root/m.group(1).split('?')[0]).read_text()
 text=re.sub(r'url\("(\./vendor/[^" ]+\.woff2)"\)',lambda f:'url("data:font/woff2;base64,'+base64.b64encode((root/f.group(1)).read_bytes()).decode()+'")',text)
 return '<style>\n'+text+'\n</style>'
s=(root/'index.html').read_text();s=re.sub(r'<script src="([^\"]+)" defer></script>',script,s);s=re.sub(r'<link rel="stylesheet" href="([^\"]+)">',stylesheet,s);a.output.write_text(s.replace('</body>','\n'.join(scripts)+'\n</body>'))
