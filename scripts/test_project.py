"""One local audit command. Generates synthetic reference data in a temporary directory."""
import subprocess,sys,tempfile,os,json
from pathlib import Path
root=Path(__file__).resolve().parents[1];node=os.environ.get('HUB_NODE','node');results=[]
def run(args):
 print('RUN '+ ' '.join(str(x) for x in args),flush=True)
 p=subprocess.run([str(x) for x in args],cwd=root,text=True,capture_output=True)
 print(p.stdout,end='',flush=True)
 if p.stderr:print(p.stderr,end='',flush=True)
 results.append({'command':str(args[0])+' '+str(args[1]),'passed':p.returncode==0})
 if p.returncode:raise SystemExit(p.returncode)
with tempfile.TemporaryDirectory(prefix='appendicitis-synthetic-audit-') as temp:
 d=Path(temp)
 for p in list(root.glob('*.js'))+list((root/'tests').glob('*.cjs')):run([node,'--check',p])
 run([sys.executable,'tests/generate_sav_import.py']);run([node,'tests/test_direct_sav.cjs'])
 for test in ['test_import.cjs','test_import_controller.cjs','test_edge_cases.cjs','test_learning.cjs','test_global_search.cjs','test_interpretations.cjs','test_report_reordering.cjs','test_scope_reports_removed.cjs','test_chapter_reporting.cjs','test_biostat_reporting.cjs','test_three_tab_workflow.cjs','test_sidebar.cjs','test_glossary.cjs','test_legends.cjs']:
  run([node,'tests/'+test])
 run([sys.executable,'tests/test_static_package.py']);run([sys.executable,'tests/test_statistics.py']);run([sys.executable,'tests/test_sav_conversion.py'])
 run([sys.executable,'tests/generate_synthetic_fixture.py',d]);run([sys.executable,'analysis/run_analysis.py',d/'SYNTHETIC_Audit.sav','--output',d/'SYNTHETIC_Aggregate.private.json'])
 run([node,'tests/test_synthetic_reference.cjs',d/'SYNTHETIC_Audit.private.json',d/'SYNTHETIC_Aggregate.private.json'])
 run([node,'tests/test_catalog_ui.cjs',d/'SYNTHETIC_Audit.private.json']);run([node,'tests/test_workspace.cjs',d/'SYNTHETIC_Aggregate.private.json'])
 print('All local checks passed. Native browser, mobile layout and live deployment are separate checks.',flush=True)
