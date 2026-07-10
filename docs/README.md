**English** | [Русский](ru/README.md)

# wallet.VIZ.world documentation

Open source of a web wallet for the [VIZ](https://viz.world/) blockchain. It is a
lightweight client-side app: all cryptographic operations (signing transactions
with private keys) run in the user's browser, keys never leave the device.

The live instance is served from the domain root: **<https://wallet.viz.world/>**

## Contents

- [architecture.md](architecture.md) — overall architecture, client/server split, file map.
- [setup.md](setup.md) — installation and deployment (nginx, PHP, MySQL, configuration).
- [backend.md](backend.md) — PHP backend: routing, search/sort, admin, cron refresh, DB schema.
- [frontend.md](frontend.md) — client app: template, views, icons, fonts.
- [localization.md](localization.md) — the `ltmp_*` localization system (ru/en/zh).
- [build.md](build.md) — building the standalone version and publishing to GitHub Pages.

## Technologies at a glance

| Layer | Technologies |
|-------|--------------|
| Client | HTML/CSS, [jQuery](https://jquery.com/), [viz-js-lib](https://www.npmjs.com/package/viz-js-lib), [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/) |
| Server | PHP (routing, search, admin, cron), MySQL, nginx |
| Blockchain | VIZ JSON-RPC node |

Important: the server side is **optional** for the wallet to work. Signing and
broadcasting transactions happen directly from the browser to a VIZ node. PHP is
used only for auxiliary features — the marketplaces of accounts/subscriptions for
sale with search and sorting (see [backend.md](backend.md)) and for building the
standalone version.
