# Public presentation and sharing update

## Changes

- Clear public identity: Appendicitis Research | Statistical Learning Hub; research/student-focused introduction and practical entry points.
- Existing formal title/body/interface typography reused, with scoped responsive landing-page styles. Existing themes, research text and workspace styles retained.
- Personal tutoring wording, dated sidebar footer and version label removed from public chrome. Study notes and learning progress remain available.
- Server-rendered title, description, canonical URL, Open Graph and large-image social-card metadata. No JavaScript is required for a crawler to read it.
- Native SVG favicon, 180px touch icon and a 1200×630 PNG social card using the established navy/ruby/gold identity. Decorative curve is not a study result.
- Copy app link and Share app actions. Native share uses browser support; cancellation is handled; clipboard failure exposes a selectable link. Only the public canonical app URL is shared, with no dataset ID, token, participant data, search state or report selections.
- .vercelignore updated to include the new assets and current report/Drive modules. Previously these recently added modules were absent from its allowlist; CLI deployment could omit them.

## Deployment and the public URL — action required

The supplied URL https://appendicitis-learning-livguz7vc-progress04.vercel.app/ was requested without a logged-in Vercel session. It returned HTTP302 to Vercel's SSO flow and ultimately a login page. It is not currently a verified public sharing URL. A protected page cannot reliably provide link previews to social crawlers.

No connected Vercel deployment tool, local Vercel CLI or Git remote was available. No deployment or project setting was changed. Do not interpret the local checks below as a successful live update.

1. In the existing Vercel project, Settings > Domains, obtain the stable production domain. Do not invent one or use a rotating deployment-specific address for general sharing.
2. Keep previews protected if desired. Configure Deployment Protection so the intended public production domain can be opened by logged-out visitors. Do not publish any bypass token as a sharing link. Keep the SAV file restricted in Drive; public app access does not grant dataset access.
3. Before deployment, set canonical/social-image URLs to that production origin. From this project directory run:
   python3 scripts/configure-sharing-url.py https://YOUR-ACTUAL-PUBLIC-PRODUCTION-DOMAIN
   Alternatively update canonical, og:url, og:image, og:image:secure_url and twitter:image in index.html consistently. The current values use the exact URL supplied by the user and must be updated if the production domain differs. The Copy/Share controls follow the canonical URL.
4. Deploy the runtime files to the SAME Vercel project using your existing manual workflow. The full ZIP contains all current runtime files; it does not contain the private SAV. No new dependencies/build system are needed.
5. If the app origin changes, add that exact origin to Google OAuth Authorized JavaScript origins and its /* pattern to the browser key's website restrictions. Preserve https://docs.google.com/*.
6. Open the production domain in a private/logged-out browser. Verify HTTP200 for the page and /assets/appendicitis-social.png, and that both are accessible without Vercel login. Then inspect a freshly shared link in WhatsApp and LinkedIn's Post Inspector. Platforms cache previews; refreshed metadata does not guarantee an immediate update of older messages. Email preview support varies by client.

## Checks actually completed

- Running local Chromium app: all five tabs, landing Explore action and Quick Start dialog.
- Real clipboard copy. Simulated native-share success/cancellation/failure and selectable-link fallback.
- Server HTML metadata inspection without JavaScript; local icon and social PNG endpoints return200.
- Desktop1440px and mobile390/320px in Light, OLED Dark and Colored modes; checked landing controls, page overflow and screenshots. Also inspected a150% CSS zoom view (not a platform-wide browser zoom certification).
- Real attached SAV snapshot:85records, confirmation and existing population analysis; zero uncaught browser exceptions during the suite.
- Social card visually inspected at1200×630. JavaScript syntax check passed.

Not completed: production deployment, live metadata/image retrieval from a public app page, or actual WhatsApp/LinkedIn preview rendering. Live Google-account authorization and Word export were not rerun in this presentation task. Statistical engines, dataset coding, analyses and Word-export logic were not modified.
