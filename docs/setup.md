**English** | [Русский](ru/setup.md)

# Installation and deployment

## Requirements

- PHP 7.3+ (tested on 8.3/8.4) with the `mysqli` and `gmp`/`bcmath` extensions
  (used by `class/viz_keys.php`);
- MySQL / MariaDB;
- nginx (or another web server) proxying all requests to `index.php`;
- access to a public VIZ JSON-RPC node.

> Minimal option: if the server-side marketplaces (accounts for sale, paid
> subscriptions) are not needed, the DB and cron can be skipped — the wallet
> works without them.

## Steps

1. **Copy the code** into the site root (the live example is served from the
   domain root `https://wallet.viz.world/`).

2. **Create the configuration.** Copy the example and fill in the values:

   ```bash
   cp config.example.php config.php
   ```

   `config.php` is git-ignored (see [.gitignore](../.gitignore)) and **must not**
   end up in the repository — it holds the admin password and DB access. Keys:

   | Key | Description |
   |-----|-------------|
   | `$users_arr` | Logins/passwords for `admin.php`. |
   | `server_timezone` | Server time zone. |
   | `db_host` / `db_login` / `db_password` / `db_base` | MySQL access. |
   | `jsonrpc_node` | VIZ JSON-RPC node URL. |

3. **Create the DB tables** (only if the marketplaces are needed):

   ```bash
   mysql -u <login> -p <database> < tables.sql
   ```

4. **Configure nginx.** Use [nginx.example.conf](../nginx.example.conf) as a base:
   any request that does not match a file/directory is rewritten to `index.php`,
   and `*.php` is handled via php-fpm.

5. **Set up cron** to refresh the marketplaces (only if needed):

   ```cron
   */10 * * * * php /var/www/wallet.viz.world/updater.php > /dev/null 2>&1
   ```

   The interval is up to you (e.g. every 10 minutes).

6. **Check the admin panel.** Open `/admin.php`, log in with a login/password from
   `$users_arr`, and make sure the marketplace sections are visible.

## Security

- Never commit `config.php` or private keys. `.gitignore` already protects
  `config.php`, `*.wif`, `*.key`, `*.pem`.
- The admin password in `config.php` is stored in plain text — use a separate
  strong password and restrict access to `admin.php` at the server level if needed.
- The repository **must not** contain tools like Adminer and the like: they give
  direct access to the DB.
