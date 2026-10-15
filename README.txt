Failed / Blocked Output — Verified State-Handling Repair

Replace the four matching app files in this archive. Actual changes for this task: bulk-analysis.js and index.html. Matching unchanged results-browser.js and result-exports.js are included to preserve the existing progress/worker/export dependencies. No study data is included. Not deployed.

Verified root cause:
The All Objectives workflow selects 117 definitions, including four explicitly unsupported analyses. The prior processor saved unsupported definitions as status=blocked with a separate skip flag. Several completion/count/retry paths still treated blocked as an error, and Word validation overwrote their state as blocked again. Thus an otherwise successful 113-output report could be labelled Completed with errors. A fresh run did not reproduce a failure of a supported analysis with the supplied study data.

Underlying fix:
- Shared outcome state distinguishes ready/review, unsupported, unavailable (missing columns), blocked (actual report validation), failed (actual processing) and cancelled.
- Generation and Word validation retain these classifications. Completion, progress, retry, preview and exclusion reporting consume the same state.
- Unsupported/missing-data exclusions do not create fake failures or retry jobs. An entirely ineligible selection reports No eligible outputs and downloads nothing.
- Genuine validation failures, calculation errors/timeouts, figure errors and document errors remain errors; no validation was weakened.
- Visible item-specific reasons and corrective actions remain, and valid outputs still export together.
- Bounded diagnostics, available through HUB_BULK.diagnostics() and the developer console, record item identifier/title, objective, operation/run, stage, diagnostic code, reason and action. Exception stacks appear in console errors. No participant records are logged.
- Global preparation/compilation stages clear a stale current-item label.

Actual tests:
- Fresh generation from the 85-record study extract, with no preloaded results:113 successful supported outputs,0 failed/blocked,4 unsupported exclusions.
- Complete preview:74 tables,39 figures. Word download:113 outputs,74 editable tables,39 images,15 objective/scope headings.
- All table cells, caption ordering, ZIP/XML and image integrity checked. File SHA256 matches the previously LibreOffice-rendered complete report exactly, confirming unchanged scientific output.
- Individual Objective2 generation, navigation and all-objective interpretations passed; genuine progress and report compilation were observed.
- Missing-CRP test copy:valid demographic output generated/exported; missing-column analysis reported unavailable; unsupported analysis remained separate;0 false failures.
- No-eligible-content selection:clear status,no document,no fabricated success or failure.
- Persistent injected calculation error:real successful figure still downloaded; genuine failure and unsupported exclusion identified separately.
- Retry processed only the failed eligible item and rebuilt the complete selected preview.
- Worker watchdog tested with a deliberately dropped response and test-only accelerated timeout:timeout recorded,next real figure generated after worker restart.
- Actual partial Word download after injected image-conversion failure and successful retry; ordinary Word validation still rejects unreviewed content.
- Cancellation,restart,individual recalculation after cancellation,duplicate prevention and source-change compilation safeguards passed.
- Progress/failure/retry UI checked at1440px and390px across Light,Dark,Colored themes; screenshots inspected;no horizontal overflow.
- JavaScript syntax check passed.

Remaining unsupported definitions (not repaired by inventing analyses):
1. Reliable between-age-group AUC comparison:insufficient reference-negative children for the existing comparison.
2. Resident doctor versus medical officer comparison:profession/group/clinician information absent.
3. Incremental direct cost of adding hs-CRP:itemised and comparative diagnostic-pathway data absent.
4. Prespecified multivariable association/causal estimates:no approved causal adjustment set/model specification. Existing supported exploratory OLS cost analyses remain intact.

No supported-output calculation failure remains in the tested supplied dataset. Different datasets can still have genuine missing-data or analysis errors; those are now classified and diagnosed explicitly rather than hidden.
