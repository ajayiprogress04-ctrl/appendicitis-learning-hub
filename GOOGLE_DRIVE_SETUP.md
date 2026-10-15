# Google Drive SPSS import setup

This is a static browser application. Google Identity Services' token model plus Google Picker reads only files explicitly selected by the user (`drive.file`). The file is fetched directly from Google Drive over HTTPS into the existing local SAV parser, preview, validation and confirmation workflow. No dataset is sent to the app server. No OAuth client secret, service account, refresh token or backend is needed. Access tokens remain in memory only and are not logged or stored.

## Configure once

1. In one Google Cloud project, enable **Google Drive API** and **Google Picker API**.
2. Configure Google Auth Platform branding, audience and consent. Add only `https://www.googleapis.com/auth/drive.file` to the requested data access. In Testing mode, add the Google accounts that will use the app as test users. Complete Google's publication requirements before wider use.
3. Create an **OAuth client ID → Web application**. Add the actual app origin to **Authorized JavaScript origins**, for example `https://your-app.vercel.app`. Add your custom production origin separately. For development add `http://localhost:8000`. Paths are not origins. Add exact preview origins individually if used. This popup token flow needs no redirect URI.
4. Create a browser **API key** in the SAME project. Restrict it to **Google Picker API** and HTTP referrers for your app origins (for example `https://your-app.vercel.app/*`). Google's Picker guide also requires `https://docs.google.com/*` because the Picker runs in that iframe. Do not leave the API key unrestricted.
5. In `google-drive-config.js`, set `clientId`, `apiKey` and `appId`. `appId` is the numeric Google Cloud project number. These three are public browser configuration identifiers, not secrets. Never add a client secret, password or access token. Vercel environment variables alone will not populate this static file: configure it before upload, or use your existing deployment process to generate it.
6. Deploy `index.html`, `results-browser.js`, `google-drive-config.js` and `google-drive-import.js` together. Keep all other app files. Use HTTPS (localhost is allowed for development), not `file://`.

## Use

Tables & Figures → Import Private Dataset → Connect Google Drive → Choose SPSS File. On the first use, Google libraries load; click Connect Google Drive again when the status says ready. This preserves a direct user click for the authorization popup. Authorize, choose an existing `.sav` file, inspect the existing variable/label preview, then choose **Use this dataset for analysis**. The active dataset changes only through the usual confirmation process. Manual upload is unchanged.

The picker shows folders and files because SPSS files can have different MIME types. Only a selected `.sav` is accepted. Existing limits remain: 15 MB, 5,000 records, 300 columns, and the existing SAV reader's supported encodings/compression. It does not make private files public. Files with restricted download permissions may be inaccessible. Network access to Google, popups and the Picker iframe must be allowed. If a deployment adds Content Security Policy, allow Google's documented SDK, authorization, Picker frame and Drive fetch endpoints; do not disable the policy globally.

## Verification status

Local syntax and browser integration checks cover the real SAV parser and shared analysis pipeline, manual upload, simulated Picker selection/cancellation, simulated authorization failure/expiry, inaccessible files, invalid extensions and corrupt SAV content. Simulated Google responses are not a live authorization test. Live Google OAuth/Picker/Drive import cannot be verified until genuine project configuration is supplied and deployed. No credentials have been invented, no Google account was accessed and no deployment was performed.

After configuration: authorize with an allowed test account, select a private real SAV, confirm records/labels, activate the dataset and generate an existing result. Repeat with cancelled authorization, a non-SAV selection and a restricted file. Confirm manual upload still works.

Official references:
- https://developers.google.com/workspace/drive/picker/guides/web-picker
- https://developers.google.com/identity/oauth2/web/guides/use-token-model
- https://developers.google.com/workspace/drive/api/guides/manage-downloads
