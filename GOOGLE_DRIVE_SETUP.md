# Existing private Google Drive import

The current public browser client ID, API key, project number and designated
file ID are retained in google-drive-config.js. These identify the browser app;
they are NOT a Google password, client secret or access token. Never put those
secrets in the app. Restrict the API key to your deployed website and required
Google APIs; verify restrictions in the Cloud console before public deployment.

For the same Cloud project: enable Google Drive API and Google Picker API,
configure an External consent screen, and set a Web OAuth client's authorised
JavaScript origin to your actual HTTPS app origin (no path). Add allowed test
accounts while consent is in Testing, or complete Google's publication steps.
Authorised researchers use THEIR OWN Google accounts; separately share the
private designated SAV with each researcher as Viewer in Google Drive.

Import is one initial click, then Google's necessary account/consent/file actions.
The integration uses the limited drive.file scope. Account switching is retained.
If an account has not granted the app access to the designated file, Google's
Picker permission step may still be required. A file ID is not permission to read
it. Do not make the file public or request access to the owner's whole Drive.

Manual upload remains the fallback. After deployment test with each authorised
account: sign-in/consent, designated file, SAV preview/labels, confirmation,
analysis; also cancellation, denied access and expired sessions. Local checks
cannot prove live Google permissions. This consolidation did not test Google
OAuth or change file sharing. No backend password-sharing service is included:
Google account/file permissions provide current access control. A separate
password gateway would need a real server, hashed verifier, rate limiting and
session expiry; do not simulate it in frontend code.
