**English** | [Русский](ru/frontend.md)

# Client application

## Structure

All the logic is in [app.js](../app.js) (jQuery + [viz-js-lib](../viz.min.js)).
Styles are in [app.css](../app.css). The HTML shell is served by
[index.template.php](../index.template.php).

The shell contains view "slots" that app.js shows one at a time depending on the
route:

```html
<div class="view view-index"></div>
<div class="view view-login"></div>
<div class="view view-assets"></div>
<div class="view view-dao"></div>
<div class="view view-account"></div>
<div class="view view-market"></div>
...
```

Navigation is built on the History API (`change_state`/`pushState`). In the normal
mode regular URLs are used; in the standalone build — hash routing
(`window.location.hash`), see [build.md](build.md).

## Working with VIZ

Private keys are entered when connecting an account and stored in the browser's
`localStorage` — they are not sent to the server. All operations go through the
global `viz` object from viz-js-lib: `viz.api.*` (reads), `viz.broadcast.*`
(transactions), `viz.auth.*` (keys), `viz.memo.*` (memo encryption). The node is
chosen by the user and can be switched (there is a "node unavailable" notice).

## Icons

- [icons/](../icons/) — UI SVG icons (menu, logo, buttons). Paths are absolute
  from the root: `/icons/name.svg`. Since the site is served from the domain root
  (`https://wallet.viz.world/`), the paths resolve directly.
- [profile/](../profile/) — social icons, injected into account profile cards
  dynamically from JS.

Icons are inlined into the standalone build as base64 (see [minify.php](../minify.php)).

## Fonts

All web fonts live in [fonts/](../fonts/). The current design uses
system/web-safe families (`Roboto`, `Arial`, `IBM Plex Serif`), so the font files
in `fonts/` (scada, Arial) are currently **not** loaded via `@font-face`. They are
kept in case the branded typeface is restored; if needed they should be hooked up
in `app.css`, otherwise they can be removed.

## Localization

Texts are extracted into the `ltmp_ru.js` / `ltmp_en.js` / `ltmp_zh.js` templates.
See [localization.md](localization.md).
