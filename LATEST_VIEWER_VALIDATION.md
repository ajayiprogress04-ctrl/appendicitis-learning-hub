# Latest Tables and Figures viewer verification

## Inspection and smallest changes
The latest working project already implemented the collapsible left list, bounded desktop drag/keyboard divider, mobile drawer, independent panels, measured fit, actual size and manual zoom. These features were retained rather than rebuilt. The remaining mismatch was Focus Workspace: after the earlier page-scroll update it occupied document flow, leaving a competing page scroller active during viewport viewing.

Explicit Focus Workspace now fills the available viewport and temporarily disables document scrolling; list and result scrolling remain independent. The desktop workspace tracks the existing navigation/content width and header. Mobile focus uses a compact header and results drawer. Exit focused workspace, Escape or another navigation destination restores normal scrolling and prior page position. Ordinary view retains the intentional document scrollbar, including access to imports and supporting content. No wheel interception, analysis rerun, data mutation or component remount is introduced by layout controls.

The viewer still fits short tables and figures completely when practical, preserves SVG aspect ratio, wraps table headings, and retains readable minimum scales. Figure sizing now reserves measured space for the caption below the plot, avoiding unnecessary initial caption clipping when the result can fit. Long tables and phone-width figures remain scrollable rather than being reduced to unreadable text. Manual controls are Fit to View, Actual Size, Zoom In, Zoom Out and Reset View. Resizing refits via ResizeObserver/requestAnimationFrame. UI width/collapse preferences are stored locally; research data is not persisted by this controller.

## Actual checks passed
Native Chromium at 1440×900 and 390×900: repeated collapse/reopen; desktop pointer and keyboard resize; right panel width expansion; fit/actual/manual/reset; complete desktop table/figure fit with visible figure caption; aspect ratio; synthetic long-table access; synthetic tall-figure bottom annotation access; selected output and unsaved legend/data retention; reorder/view offsets; independent wheel/panel scrolling; all three themes; focus fixed position/body scroll lock and Escape restoration; navigation and no runtime errors.

Native ordinary-page scroll test at 1440×900 and 390×844: independent left/right/page wheel scrolling; no chaining at boundaries; PageDown keyboard scrolling; mobile emulated touch gestures; selection/draft/offset retention, long-content access and no horizontal overflow.

Native five-tab regression at 1440 and 390 pixels: exact tab order; inline legend edit/save/draft/reorder; separate interpretations; Reports links; Word legend inclusion/exclusion and real download; themes and unchanged dataset/results.

Static asset/HTTP/deployment allowlist checks passed (26 local runtime assets). JavaScript syntax and preview bundling succeeded. This static app has no npm production compilation step. Figures were visually inspected at desktop and mobile sizes.

Physical Android devices, other browser engines and Microsoft Word were not tested in this task. This is a viewer update; the recent one-paragraph narrative and approved Word export implementation are unchanged. Not every output can fit fully at a readable scale on a phone. No GitHub push or Vercel deployment occurred.

## Changed files
- result-viewer.css: viewport focus mode, conditional document scroll lock and mobile focus positioning.
- result-viewer.js: avoid scrolling the document to an already fixed focus workspace; reserve caption height during figure fit.
- index.html: version strings for the modified viewer assets.
- tests/test_native_result_viewer.cjs: explicit focus scroll-lock and restoration checks.
- tests/test_three_scroll_areas.cjs: test the three scroll areas in ordinary mode.
- README.md, RESULT_WORKSPACE_VALIDATION.md, THREE_SCROLL_VALIDATION.md and this file: explain current focus versus ordinary-page behavior.

## Use
Extract the ZIP and run `python -m http.server 8000` in project. Open http://localhost:8000. No npm installation or API keys are required. In Tables & Figures, select an output, hide the list to widen the viewer, and reopen it with Show results list. Drag the divider on desktop or use arrow keys/Home/End when focused. Use Focus workspace for viewport viewing; Exit or Escape restores the page. Use Fit/Actual/Zoom/Reset to inspect the output. Statistical calculations, imports, five tabs, themes, scientific textures, editing and Word-report logic are preserved.
