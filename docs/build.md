**English** | [Русский](ru/build.md)

# Building the standalone version

The standalone version is a **single self-contained HTML file** with all styles,
scripts and icons embedded (base64). Such a file works without a web server: just
open it in a browser. It is useful as a "backup" wallet in case the site is blocked
or unavailable — the file has no connection to our server whatsoever.

## What minify.php does

[minify.php](../minify.php) takes [index.template.php](../index.template.php) and:

1. strips PHP tags (`<?...?>`) and HTML comments;
2. inlines `<img src>` as `data:image/svg+xml;base64,...`;
3. inlines `<link rel="stylesheet">` into `<style>` (and CSS `url()` images too,
   as base64);
4. inlines `<script src>` into `<script>` (viz-js-lib, jQuery, progressbar, ltmp,
   app.js);
5. inlines the favicon;
6. enables standalone mode: replaces `var standalone=false;` with
   `var standalone=true;` (this switches app.js to hash routing);
7. strips external service `<script src>` tags;
8. saves the result into `wallet-viz-world-portable.html`.

Running it manually (only PHP is needed, no DB):

```bash
php minify.php
# → wallet-viz-world-portable.html
```

`wallet-viz-world-portable.html` is a build artifact; it is git-ignored (see
[.gitignore](../.gitignore)) and not committed.

[portable.php](../portable.php) serves that file as a download with the correct
headers (`Content-Disposition: attachment`).

## Publishing to GitHub Pages (CI)

Instead of building manually, a GitHub Action is set up:
[.github/workflows/pages.yml](../.github/workflows/pages.yml). It:

1. triggers on push to `master`, a published release, or a manual run;
2. sets up PHP and runs `php minify.php`;
3. copies `wallet-viz-world-portable.html` to `_site/index.html`;
4. publishes `_site` to GitHub Pages.

### One-time repository setup

In **Settings → Pages → Build and deployment → Source** choose **GitHub Actions**.
After that, on every push to `master` (or a release) Pages will update `index.html`
— the current standalone version of the wallet.

> Note: profile images (`/profile/*.svg`) are injected via JS at runtime and are
> not inlined into the standalone file — that is cosmetic for account cards and
> does not affect the core wallet operation.
