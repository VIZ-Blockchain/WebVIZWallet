**English** | [Русский](README-ru.md)

# wallet.VIZ.world

Open source of a web wallet for the [VIZ](https://viz.world/) blockchain — a
lightweight client-side app for managing accounts, assets and the DAO. The live
instance is served from the domain root: **<https://wallet.viz.world/>**

A standalone version — a single self-contained HTML file — is built and published
to GitHub Pages automatically on every release:
**<https://viz-blockchain.github.io/WebVIZWallet/>** (see [docs/build.md](docs/build.md)).

All cryptographic operations (signing transactions with private keys) run in the
user's browser. Keys are stored only in `localStorage` and are never sent to the
server. The server-side (PHP) part is optional and only provides auxiliary
features.

## Documentation

Full description is in [docs/](docs/):

- [Architecture](docs/architecture.md) — design, client/server split, file map.
- [Setup & deployment](docs/setup.md) — nginx, PHP, MySQL, configuration.
- [PHP backend](docs/backend.md) — routing, marketplace search/sort, admin, cron, DB schema.
- [Frontend](docs/frontend.md) — the app, views, icons, fonts.
- [Localization](docs/localization.md) — the `ltmp_*` system (ru/en/zh).
- [Build](docs/build.md) — standalone version and GitHub Pages publishing.

## Quick start

```bash
cp config.example.php config.php   # fill in credentials (git-ignored)
mysql -u <login> -p <db> < tables.sql   # only if you need the marketplaces
# configure nginx from nginx.example.conf
```

Minimal setup: if the server-side marketplaces (accounts for sale, paid
subscriptions) are not needed, you can skip the DB and cron — the wallet works
without them.

## Structure

### Server-side scripts (PHP)
- `config.example.php` — configuration template (admin access, DB, JSON-RPC node URL); copy to `config.php`;
- `autoloader.php` — backend bootstrap (config, DB, VIZ classes);
- `index.php` — router: URL parsing, redirects, includes the `index.template.php` template;
- `updater.php` — cron: refreshes the marketplaces from a VIZ node into MySQL;
- `ajax.php` — search & sort API over the marketplaces;
- `admin.php` — admin panel: login and hiding/showing marketplace records;
- `minify.php` — builds the standalone version of the site into a single HTML file;
- `portable.php` — serves the standalone version as a download.

### Client
- `app.js`, `app.css` — the application and styles;
- `ltmp_ru.js`, `ltmp_en.js`, `ltmp_zh.js` — view templates with localization;
- `icons/` — UI SVG icons; `profile/` — social icons; `fonts/` — web fonts.

### Related files
- `tables.sql` — SQL to create the marketplace tables;
- `nginx.example.conf` — example nginx configuration (rewrites `/path/` to `index.php`);
- `.github/workflows/pages.yml` — CI: builds the standalone version and publishes it to GitHub Pages;
- `class/` — classes: DB, VIZ JSON-RPC client, key handling.

## Dependencies

- MySQL, nginx, PHP;
- a VIZ JSON-RPC node;
- [viz-js-lib](https://www.npmjs.com/package/viz-js-lib) (`viz.min.js`);
- [jQuery](https://jquery.com/) 3.7.1;
- [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/) 1.1.0.

## License

See [LICENSE](LICENSE).
