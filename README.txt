Tables & Figures — Eight-Step Workflow Ordering

Replace results-browser.js,result-viewer.css,index.html in the existing app root. These are the only changed files. No dataset is included. Not deployed.

The existing controls are organised in this order:
1. Import Private Dataset
2. Supported File Formats and Data Coding
3. Objectives for Additional Analysis
4. Selected Analysis Summary
5. Generated Results and Export Controls
6. Selected Reports Order
7. Main Results List and Focus Workspace
8. Bulk Analysis and Report Export

Implementation:
- Existing DOM nodes and delegated event handlers are reused. No duplicate import,objective,browser,ordering,workspace or bulk panels are created.
- Existing individual report-selection checkboxes move into step3,with full output titles. They remain available by default and can be collapsed. No new selection state is introduced.
- Step4 reports the actual selected objectives/scopes,tables,figures,calculated availability and N where available. The current objective explanation is retained.
- Existing statistical reporting audit remains in step5 with generated results/export controls.
- Existing report ordering and focus/list/fit workspace are retained. Bulk updates replace the same panel within the final step8 wrapper.
- Scoped CSS supplies spacing and bounded selection-list scrolling. No statistical engine,report-generation logic,theme tokens or navigation code changed.

Actual verification:
- Initial empty screen and post-import/render states:all eight steps in order;Bulk remains the final child;no duplicate scope selector or bulk panel.
- Original SPSS SAV selected through the file input,previewed and confirmed:85 records.
- Individual demographic table and histopathology figure genuinely generated from that import.
- Moved checkboxes,actual selection summary,selected result,focus mode,sidebar collapse/reopen and independent list/result scrolling passed.
- Report move-up ordering passed and was reflected in the selected Word document.
- Actual downloads:Word,HTML,calculation log;one selected editable table and one figure present;selected versus bulk scientific order verified.
- Bottom bulk panel:analysis,live progress,report compilation,preview and Word download passed.
- All eight steps and responsive layout checked at1440px and390px in Light,Dark,Colored themes;screenshots inspected;no horizontal overflow.
- All Objectives run on imported SPSS data:113 eligible outputs generated/exported;four known unsupported definitions remain exclusions.
- Complete Word download verified:74 editable tables,39 embedded figures,15 objective/scope headings,valid Word XML/ZIP and PNGs. Its SHA256 exactly matches the previously verified complete report.
- No browser runtime errors;results-browser.js syntax check passed.
