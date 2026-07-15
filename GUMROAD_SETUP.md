# Gumroad setup for HARUSPEX

Gumroad's native profile supports fonts, accent/background colors, pages, text sections, product sections, posts, and subscribe sections. It does **not** provide arbitrary checkout CSS. Use the included landing page as the premium sales layer, then send buyers to Gumroad for checkout and delivery.

## Recommended Gumroad profile settings

**Profile name:** Ikonic Haus  
**Bio:** Premium software, creative systems, and digital products—built with obsessive attention to design, usability, and craftsmanship.  
**Background:** Near-black  
**Accent:** HARUSPEX vermilion/red  
**Font:** Choose the cleanest readable sans-serif available in Gumroad's profile settings  
**Profile image:** HARUSPEX emblem for launch, or an Ikonic Haus master mark once available

## Profile structure

Create these Gumroad profile pages/sections:

1. **Systems** — HARUSPEX and future software
2. **Creative Tools** — future creative products
3. **About Ikonic Haus** — short studio statement
4. **Updates** — release posts and changelogs
5. **Subscribe** — product launch and update list

Feature HARUSPEX at the top of the Systems page.

## Product setup

Use one HARUSPEX product with versions/tiers if the license files and deliverables can be cleanly separated:

- Personal
- Professional
- Commercial

Alternatively, use separate products if support terms, contracts, or delivery materials differ substantially.

### Cover media

Use the final interface screenshot or a 45–75 second product walkthrough as the first cover. Gumroad permits multiple cover images/video, so follow with:

1. Full dashboard
2. Probability Lattice close-up
3. Risk controls / circuit breaker
4. Setup or diagnostics view
5. Package contents / manual preview

Do not show invented profits or simulated figures without labeling them.

## Connecting the website

Open `script.js` and replace each URL in `GUMROAD_LINKS` with the exact Share URL copied from Gumroad for that edition/version.

For a normal product URL, Gumroad documents `?wanted=true` as a way to send customers directly to the payment form. Test the finished link in an incognito window before launch.

## Domain setup

Recommended structure:

- `haruspex.systems` or a clean `.com` → this landing page
- Gumroad → checkout, delivery, updates, receipts
- `support@yourdomain.com` → customer support
- `/docs` → public quick start, system requirements, release notes

Gumroad also supports custom domains for profiles and individual products, but the dedicated landing page gives you more control over presentation.

## Launch check

- Exact product links tested
- Mobile layout checked
- Prices match Gumroad
- Tier contents match delivered files
- Screenshot matches final release
- Support email works
- License and EULA available
- Risk disclosure visible
- Refund terms visible before purchase
- No profitability claims
- Checkout tested in private/incognito mode
