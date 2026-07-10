**English** | [Русский](ru/backend.md)

# PHP backend

The backend handles three things: **routing**, the **marketplace with search/sort**
and the **admin panel**. Plus a separate cron script fills the DB. Below is what
each script does.

## Bootstrap

[autoloader.php](../autoloader.php) is included by every server-side endpoint. It:

1. loads `config.php`;
2. sets the time zone;
3. includes the classes from `class/` (`viz_jsonrpc.php`, `db.php`, `viz_keys.php`);
4. creates `$db` (the MySQL connection) and `$api` (the VIZ JSON-RPC client);
5. computes the client IP.

Classes:

| Class (file) | Purpose |
|--------------|---------|
| `DataManagerDatabase` (`class/db.php`) | Thin `mysqli` wrapper: `sql()`, `row()`, `select_one()`, `table_count()`, `prepare()` (escaping). |
| `viz_jsonrpc_web` (`class/viz_jsonrpc.php`) | JSON-RPC client for a VIZ node: `execute_method(method, params)`. |
| `viz_keys` (`class/viz_keys.php`) | VIZ key handling (WIF/hex, signing, verification). |

## Routing

[index.php](../index.php):

- parses `REQUEST_URI`, populating `$_GET` itself;
- if the path has no extension and no trailing `/`, redirects to the version with
  `/` (clean URLs);
- handles the service redirect `/go?url=...`;
- includes [index.template.php](../index.template.php) — the HTML shell.

All further navigation happens entirely on the client (see [frontend.md](frontend.md)).

## Marketplace: search and sorting

[ajax.php](../ajax.php) is a JSON API over the MySQL tables. The action is chosen
with the `?action=` parameter:

| `action` | Table | Returns |
|----------|-------|---------|
| `get_short_accounts_on_sale` | `accounts_on_sale` (short, `length=2`) | List of accounts and prices. |
| `get_accounts_on_sale` | `accounts_on_sale` (`length!=2`) | List of accounts and prices. |
| `get_subaccounts_on_sale` | `subaccounts_on_sale` | List of subaccounts and prices. |
| `get_paid_subscriptions` | `paid_subscriptions` | Paid-subscription providers and metrics. |

Common query parameters:

- `search` — filter by name (`LIKE %...%`, the value is escaped via `db->prepare`);
- `descr` — for subscriptions, an extra filter by `url`;
- `order` — sorting (`+price`/`-price`, `+provider`/`-provider`, `+amount`/… for subscriptions);
- `page` — page number (10 records per page).

Only records with `status=0` (not hidden by the admin) are shown.

## Admin panel

[admin.php](../admin.php):

- login with a username/password from `$users_arr` (the `wallet_vizworld_*` cookie, the password is `md5`-hashed);
- sections by `?action=`: `accounts_on_sale`, `subaccounts_on_sale`, `paid_subscriptions`;
- in each section you can **hide** (`status=1`) or **show** (`status=0`) a specific
  record; hidden ones do not appear in the `ajax.php` output.

## Cron: filling the DB

[updater.php](../updater.php) runs on a schedule and syncs the marketplaces with a
VIZ node. For each of the three tables it:

1. `TRUNCATE`s the table;
2. pulls data from the node page by page (`get_paid_subscriptions`,
   `get_accounts_on_sale`, `get_subaccounts_on_sale`, plus details via
   `get_paid_subscription_options`);
3. inserts fresh records while **preserving** the previous `status` (so records
   hidden by the admin stay hidden).

## DB schema

Full schema is in [tables.sql](../tables.sql). In short:

### `accounts_on_sale` / `subaccounts_on_sale`
| Column | Type | Meaning |
|--------|------|---------|
| `id` | int PK | Offer id from the node. |
| `time` | int | Last update time (unixtime). |
| `account` | varchar | Account/subaccount name. |
| `length` | tinyint | Name length (for the short-name filter). |
| `level` | tinyint | Level (number of dot-separated segments). |
| `seller` | varchar | Seller. |
| `price` | int | Price in "milli-VIZ" (VIZ × 1000). |
| `status` | tinyint | 0 — show, 1 — hidden by admin. |

### `paid_subscriptions`
| Column | Type | Meaning |
|--------|------|---------|
| `id` | int PK | Identifier. |
| `time` | int | Update time. |
| `creator` | varchar | Provider account of the subscription. |
| `period` | int | Period. |
| `levels` | int | Number of levels. |
| `url` | varchar | Description/link. |
| `amount` | int | Price (× 1000). |
| `available` | tinyint | Whether the subscription is available. |
| `sub_count` / `sub_amount` | int | Active subscribers and their total. |
| `sub_auto_count` / `sub_auto_amount` | int | Same, with auto-renewal. |
| `status` | tinyint | 0 — show, 1 — hidden. |
