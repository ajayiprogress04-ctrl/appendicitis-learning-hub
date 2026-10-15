# One-click Google Drive import

## Cause and correction

Previously choose() loaded Google libraries, returned null, and told the user to click again. It also discarded a valid token on every import.

Google libraries now preload when the user opens Import Private Dataset. The Drive button shows loading and is temporarily disabled while SDKs prepare; manual upload stays available. No authorization or dataset request occurs during this preload. Once enabled, one click calls Google authorization directly in that user gesture and continues through designated-file access, retrieval and the existing SAV preview. The early return and second-click instruction are removed. Even a cold programmatic choose() awaits preparation and continues instead of returning a placeholder.

A valid in-memory token is reused. Use another Google account explicitly starts the account chooser and then continues the same import operation. Tokens are never persisted. Missing configuration, load failures, popup errors and cancellation remain visible. The active dataset still changes only after the usual validated preview confirmation.

## Changed files

- google-drive-import.js: preload/readiness state, continuous choose workflow, session reuse and explicit account switching.
- results-browser.js: SDK loading feedback, readiness updates and account-switch control; shared manual/Drive parser unchanged.
- index.html: changed script cache versions.

All prior closed-by-default behaviour, public branding, stable production sharing, designated-file restriction, manual upload, analyses and exports are retained.

## Actual checks

Running local Chromium with intercepted Google SDK/API responses:
- Start with neither Google library loaded. Opening the import panel loads the two scripts and does not authorize.
- One enabled-button click calls authorization once while navigator.userActivation.isActive is true, retrieves the designated dataset and creates an85record preview using the actual attached SAV snapshot and real parser.
- Another import reuses the valid in-memory token without an additional authorization request.
- When initial file access is absent, the same operation proceeds through a Picker restricted to the designated file and then retrieves it.
- Explicit account switching invokes a fresh account chooser. Cancelled authorization restores controls and preserves active dataset.
- Missing configuration shows a clear message. Manual upload still parses the same85records.
- JavaScript syntax passes; zero uncaught browser errors.

These tests used simulated Google SDK, authorization and Drive responses. Live Google sign-in, consent and private Drive retrieval were NOT verified in this task. No production deployment was performed.

## Deploy

Deploy the supplied complete app to the existing Vercel project serving https://appendicitis-learning-hub.vercel.app/ and refresh the page. Alternatively replace only the three changed files above in the latest existing app. No Google Cloud credential changes or new dependencies are required. No private SAV is included.
