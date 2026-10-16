# Dependencies

Runtime: no installation/build. Root scripts and CSS are loaded by index.html.
- Bundled SheetJS 0.20.3: vendor/xlsx.full.min.js; license alongside.
- Bundled datareader-spss 0.2.1 browser bundle: vendor/spss-reader.js. See its
  SPSS_READER_INFO.md and MIT license. SAV read locally; current limits are in
  that file and data-import.js. Zlib-compressed SAV needs DecompressionStream.
- Bundled font files and their license notices remain in vendor/.
- DOCX/ZIP generation and preview use existing local JavaScript, not a new
  external document library or server. Native font fallbacks remain available.
- Google Identity Services / Picker SDK load from Google only when requested.
  They need internet, configured Cloud credentials and account/file permission.

Optional developer tools: Python 3 for serving/static checks; Node.js 20+ for
syntax checks. `npm install` installs only playwright-core 1.62.1 for browser
regression testing, not application runtime. Set HUB_CHROMIUM_PATH to a local
Chromium executable; `npm run test:browser` runs the synthetic import/workflow
smoke test. Do not upload node_modules. `npm run check` runs static validation.

Optional independent Python analysis: analysis/requirements.txt pins numpy,
pandas, scipy and pyreadstat. Install them in a separate virtual environment
only when using the analysis scripts or tests/test_statistics.py. These are not
needed by the browser app. Browser calculations are the active UI's source of
truth; optional scripts are not a replacement report-generation workflow.
