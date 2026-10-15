# Designated study dataset import

This update pins import to the exact Google Drive file selected by the administrator: Acute_Appendicitis_Categorized (3).sav. It does not upload, replace, rename or change that original file, and does not bundle the dataset in this update.

## Deploy

Replace index.html, results-browser.js, google-drive-import.js and google-drive-config.js in the existing current app. Keep all other files, including client-report-style.js from the earlier report-style update. No additional dependencies or server are required. This package is not a full standalone app.

The supplied Google configuration is included. The selected Drive file ID is configured. No owner email, account password, client secret or access token is embedded.

## Owner configuration

1. In Google Drive, open the designated dataset's Share dialog. Keep General access Restricted. Add each approved researcher's own Google email as Viewer. Allow those authorized viewers to download the file; API import requires reading its contents. Share only this file, not your entire Drive.
2. If the OAuth application is still in Testing, add each researcher under Google Auth Platform > Audience > Test users. Consent-screen eligibility and Drive permissions are separate requirements.
3. In the OAuth Web client, add the EXACT deployed application's origin to Authorized JavaScript origins (https://host, no slash/path/wildcard). Prefer your stable Vercel production domain. In the browser API key settings, allow the deployed website with /* and https://docs.google.com/*, and restrict the key to Google Picker API. Both Google Drive API and Google Picker API must be enabled in the same configured project.
4. Deploy these app files. Cloud settings, private-file permissions and deployment cannot be changed by this static frontend and have not been changed automatically.

## Researcher workflow

Tables & Figures > Import Private Dataset > Import from Google Drive. On first use, libraries load and the status asks for another click. Each actual import prompts for the researcher's own Google account; there is no forced owner account and no reuse of an earlier researcher's token.

The app requests only drive.file. It first tries to read the designated file using the newly authorized token. If Google has not granted the app access to that file for this user, Picker opens pre-navigated to that file using DocsView.setFileIds. Confirm that single file once; the app rejects another file ID. The app does not present a general Drive browsing view in configured designated mode. Google may still require its own consent/file-access confirmation.

The actual SAV is fetched with the same token, then passed through the existing local parser, preview and dataset confirmation. The active analysis dataset changes only when the user confirms the validated preview. A file named .sav.bin is accepted only after an SPSS $FL2/$FL3 signature check; only the browser File name is normalized to .sav. Original bytes and Drive file are unchanged. Other unsupported formats are rejected. Manual upload remains available.

An email address identifies an account, not a specific Drive dataset. The configured file ID identifies this dataset independently of the account selected. File IDs are not access credentials: Google enforces each researcher's sharing and download permissions. Removing a researcher from Drive prevents future retrieval; it cannot erase dataset bytes they already imported or downloaded.

## Executed checks

- Local JavaScript syntax checks.
- Running Chromium app: attached SAV snapshot parses as 85 records, with variable/value labels and no preview validation errors; confirmation activates it and the existing population analysis generates.
- Manual upload of the same SAV bytes yields identical participant records and column metadata, including labels, missing counts and types.
- Simulated researcher A and B authorization: a fresh select_account prompt, the corresponding token, and the same designated file request; no general picker on successful direct access.
- Simulated first-time file grant preselects the designated file; a different returned file ID is rejected.
- Cancellation, wrong extension, expired authorization, declined/cancelled authorization, inaccessible file and corrupt SAV handling preserve the active dataset.
- Mobile import control present at 390 px; no uncaught browser errors in the completed suite.
- Configured file ID checked with intercepted requests; .sav.bin normalization retains identical bytes and rejects corrupt content.

Google authorization/Picker/Drive responses in these checks were simulated. Real Google-account consent, live private-file permissions, the latest remote contents and cross-account downloads were NOT verified. The attached snapshot was used for parsing checks. No deployment or Drive-permission changes were performed.

Official implementation references:
https://developers.google.com/identity/oauth2/web/reference/js-reference
https://developers.google.com/workspace/drive/picker/reference/picker.docsview.setfileids
https://developers.google.com/workspace/drive/api/guides/api-specific-auth
