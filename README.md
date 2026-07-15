# Ikonic Haus / HARUSPEX landing page

A responsive, no-build static landing page designed to sell HARUSPEX through Gumroad while keeping the brand presentation on a dedicated website.

## What is included

- `index.html` — page structure and all product copy
- `styles.css` — complete responsive visual system
- `script.js` — Gumroad links, mobile navigation, reveal effects, current year
- `assets/haruspex-dashboard.png` — supplied dashboard screenshot
- `assets/haruspex-emblem.png` — supplied HARUSPEX sigil
- `assets/favicon.png` — supplied favicon
- `GUMROAD_SETUP.md` — exact setup checklist
- `gumroad-product-copy.md` — Gumroad-native product description starter

## Configure before publishing

1. Open `script.js`.
2. Replace the three `YOUR-GUMROAD-USERNAME` links with the exact Gumroad Share link for each edition or version.
3. Open `index.html` and replace `support@YOURDOMAIN.com`.
4. Confirm prices, inclusions, product version, support policy, and every capability against the final tested release.
5. Replace the screenshot after the final dashboard polish so the page matches the product buyers receive.

## Preview locally

Double-click `index.html`, or run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

This is a static site and can be deployed to:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- Any standard web host

No framework, package manager, or build step is required.

## Important

This page deliberately avoids performance claims, testimonials, fabricated statistics, and promises of profit. Have the license, risk disclosure, privacy policy, refund policy, and sales copy reviewed before a commercial launch.
