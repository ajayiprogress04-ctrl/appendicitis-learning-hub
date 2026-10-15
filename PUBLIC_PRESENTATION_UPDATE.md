# Production sharing correction

Public address: https://appendicitis-learning-hub.vercel.app/

The production page was fetched without Vercel authentication and returned HTTP200. Its landing introduction was current, but og:url and og:image still pointed to an older protected deployment. This explains why a branded production page could still have an incorrect preview.

Updated index.html canonical, og:url, og:image, og:image:secure_url and twitter:image to the stable production origin. The new sharing image, assets/appendicitis-social-v2.png, uses the requested clean white background, navy rounded-square Sigma logo and app title/subtitle. Its versioned name avoids reusing the previous image URL. The Vercel upload allowlist includes it. Current Copy/Share controls share the opened app address without query/hash, so use the stable production address for public sharing.

Deploy to the EXISTING Vercel project serving appendicitis-learning-hub.vercel.app. The complete app package contains the current runtime app, existing report/Drive fixes and new sharing assets, without the private SAV. No new libraries/build process are required. The assistant has not deployed it.

After deployment, open https://appendicitis-learning-hub.vercel.app/ in a logged-out browser. Confirm the page and /assets/appendicitis-social-v2.png load publicly. Send a fresh production link in WhatsApp. Previously sent message previews may remain cached; LinkedIn also has a Post Inspector to refresh its crawler. Social clients choose their own thumbnail cropping and layout.

If using Google Drive import at this production address, add https://appendicitis-learning-hub.vercel.app to the OAuth client's Authorized JavaScript origins and https://appendicitis-learning-hub.vercel.app/* to the browser API key's Website restrictions. Keep existing required entries, including https://docs.google.com/*, and private dataset permissions.

Checks performed: unauthenticated HTTP200 for the live production page; inspection of its existing raw metadata; local corrected metadata and image dimensions1200x630 checked; new logo image visually inspected. Earlier local browser checks covered three themes, mobile/desktop, navigation, actual clipboard copy, same-view shared links, SAV parsing and an existing analysis. No research calculations were changed.

Not verified: deployment of this correction, live availability of the new image, refreshed live metadata or actual WhatsApp preview after deployment. No automatic changes to Vercel or Google Cloud settings were performed.
