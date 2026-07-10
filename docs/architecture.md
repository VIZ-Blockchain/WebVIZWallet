**English** | [Русский](ru/architecture.md)

# Architecture

## The idea

wallet.VIZ.world is a **client-side** app (a jQuery SPA). The user connects a VIZ
account by entering private keys, which are stored only in the browser's
`localStorage`. All transactions are built and signed on the client with
[viz-js-lib](https://www.npmjs.com/package/viz-js-lib) and sent directly to the
selected VIZ JSON-RPC node.

The PHP server only performs auxiliary tasks and is **not required** for the
wallet's basic operation:

- clean URLs (`/path/to/page/`) via a single entry point;
- the "accounts/subaccounts for sale" and "paid subscriptions" marketplaces with
  server-side search and sorting (data is periodically pulled from a node into MySQL);
- an admin panel for hiding individual marketplace records;
- building the standalone version into a single HTML file.

```
Browser (app.js + viz-js-lib)  ──JSON-RPC──▶  VIZ node
        │
        │ (marketplace only: search/sort)
        ▼
   PHP (ajax.php) ──▶ MySQL ◀── cron (updater.php) ──JSON-RPC──▶ VIZ node
```

## Request flow

1. nginx forwards every request without a matching file/directory to `index.php`
   (see [nginx.example.conf](../nginx.example.conf)).
2. [index.php](../index.php) parses the URL, redirects when needed (adds a
   trailing `/`, handles `/go?url=`), then includes
   [index.template.php](../index.template.php).
3. The template returns the page "shell" and loads the client scripts
   (`viz.min.js`, `jquery-*.min.js`, `progressbar.min.js`, `ltmp_*.js`, `app.js`).
4. From there all navigation and rendering of "views" happen on the client in
   [app.js](../app.js) via the History API.

## File map

### Entry points and routing (PHP)
| File | Purpose |
|------|---------|
| [index.php](../index.php) | Router: URL parsing, redirects, includes the template. |
| [index.template.php](../index.template.php) | App HTML shell, loads scripts/styles. |
| [autoloader.php](../autoloader.php) | Backend bootstrap: config, DB, VIZ classes. |

### Backend endpoints (PHP)
| File | Purpose |
|------|---------|
| [ajax.php](../ajax.php) | Search/sort API over the marketplaces (JSON). |
| [admin.php](../admin.php) | Admin panel: login and hiding/showing marketplace records. |
| [updater.php](../updater.php) | Cron: refresh the marketplaces from a VIZ node into MySQL. |

More in [backend.md](backend.md).

### Client
| File / folder | Purpose |
|------|---------|
| [app.js](../app.js) | The whole client app: routing, views, VIZ interaction. |
| [app.css](../app.css) | Styles. |
| `ltmp_ru.js`, `ltmp_en.js`, `ltmp_zh.js` | View templates with localization. |
| [icons/](../icons/) | UI SVG icons. |
| [profile/](../profile/) | Social icons for account profiles. |
| [fonts/](../fonts/) | Web fonts. |

More in [frontend.md](frontend.md) and [localization.md](localization.md).

### Vendored libraries
| File | Library |
|------|---------|
| [viz.min.js](../viz.min.js) | viz-js-lib (npm build). |
| `jquery-3.7.1.min.js` | jQuery 3.7.1. |
| [progressbar.min.js](../progressbar.min.js) | progressbar.js 1.1.0. |

### Standalone build
| File | Purpose |
|------|---------|
| [minify.php](../minify.php) | Inlines all assets into a single `wallet-viz-world-portable.html`. |
| [portable.php](../portable.php) | Serves that file as a download. |
| [.github/workflows/pages.yml](../.github/workflows/pages.yml) | CI: build and publish to GitHub Pages. |

More in [build.md](build.md).

### Configuration and infrastructure
| File | Purpose |
|------|---------|
| [config.example.php](../config.example.php) | Configuration template (copy to `config.php`). |
| [tables.sql](../tables.sql) | MySQL table schema. |
| [nginx.example.conf](../nginx.example.conf) | Example nginx configuration. |
| `class/` | Classes: DB, VIZ JSON-RPC client, key handling. |
