# PHP-бэкенд

Бэкенд решает три задачи: **роутинг**, **витрина с поиском/сортировкой** и
**админка**. Плюс отдельный cron-скрипт наполняет БД. Ниже — что именно делает
каждый скрипт.

## Бутстрап

[autoloader.php](../autoloader.php) подключается всеми серверными эндпоинтами. Он:

1. загружает `config.php`;
2. выставляет часовой пояс;
3. подключает классы из `class/` (`viz_jsonrpc.php`, `db.php`, `viz_keys.php`);
4. создаёт `$db` (соединение с MySQL) и `$api` (JSON-RPC клиент VIZ);
5. вычисляет IP клиента.

Классы:

| Класс (файл) | Назначение |
|--------------|-----------|
| `DataManagerDatabase` (`class/db.php`) | Тонкая обёртка над `mysqli`: `sql()`, `row()`, `select_one()`, `table_count()`, `prepare()` (экранирование). |
| `viz_jsonrpc_web` (`class/viz_jsonrpc.php`) | JSON-RPC клиент к ноде VIZ: `execute_method(method, params)`. |
| `viz_keys` (`class/viz_keys.php`) | Работа с ключами VIZ (WIF/hex, подпись, проверка). |

## Роутинг

[index.php](../index.php):

- разбирает `REQUEST_URI`, самостоятельно наполняя `$_GET`;
- если в пути нет расширения и нет завершающего `/` — редиректит на версию с `/`
  (красивые URL);
- обрабатывает служебный редирект `/go?url=...`;
- подключает [index.template.php](../index.template.php) — HTML-оболочку.

Дальнейшая навигация — целиком на клиенте (см. [frontend.md](frontend.md)).

## Витрина: поиск и сортировка

[ajax.php](../ajax.php) — JSON API поверх таблиц MySQL. Выбор действия — параметр
`?action=`:

| `action` | Таблица | Что возвращает |
|----------|---------|----------------|
| `get_short_accounts_on_sale` | `accounts_on_sale` (короткие, `length=2`) | Список аккаунтов и цен. |
| `get_accounts_on_sale` | `accounts_on_sale` (`length!=2`) | Список аккаунтов и цен. |
| `get_subaccounts_on_sale` | `subaccounts_on_sale` | Список субаккаунтов и цен. |
| `get_paid_subscriptions` | `paid_subscriptions` | Провайдеры платных подписок и метрики. |

Общие параметры запроса:

- `search` — фильтр по имени (`LIKE %...%`, значение экранируется через `db->prepare`);
- `descr` — для подписок дополнительный фильтр по `url`;
- `order` — сортировка (`+price`/`-price`, `+provider`/`-provider`, `+amount`/… для подписок);
- `page` — номер страницы (по 10 записей на страницу).

Показываются только записи со `status=0` (не скрытые админом).

## Админка

[admin.php](../admin.php):

- вход по логину/паролю из `$users_arr` (кука `wallet_vizworld_*`, пароль хешируется `md5`);
- разделы по `?action=`: `accounts_on_sale`, `subaccounts_on_sale`, `paid_subscriptions`;
- в каждом разделе можно **скрыть** (`status=1`) или **показать** (`status=0`)
  конкретную запись; скрытые не попадают в выдачу `ajax.php`.

## Cron: наполнение БД

[updater.php](../updater.php) запускается по расписанию и синхронизирует витрины с
нодой VIZ. Для каждой из трёх таблиц он:

1. `TRUNCATE` таблицы;
2. постранично выкачивает данные с ноды (`get_paid_subscriptions`,
   `get_accounts_on_sale`, `get_subaccounts_on_sale`, плюс детали через
   `get_paid_subscription_options`);
3. вставляет свежие записи, **сохраняя** прежний `status` (чтобы скрытые админом
   записи оставались скрытыми).

## Схема БД

Полностью — в [tables.sql](../tables.sql). Кратко:

### `accounts_on_sale` / `subaccounts_on_sale`
| Поле | Тип | Смысл |
|------|-----|-------|
| `id` | int PK | Идентификатор оффера с ноды. |
| `time` | int | Время последнего обновления (unixtime). |
| `account` | varchar | Имя аккаунта/субаккаунта. |
| `length` | tinyint | Длина имени (для фильтра коротких имён). |
| `level` | tinyint | Уровень (число сегментов через точку). |
| `seller` | varchar | Продавец. |
| `price` | int | Цена в «милли-VIZ» (VIZ × 1000). |
| `status` | tinyint | 0 — показывать, 1 — скрыто админом. |

### `paid_subscriptions`
| Поле | Тип | Смысл |
|------|-----|-------|
| `id` | int PK | Идентификатор. |
| `time` | int | Время обновления. |
| `creator` | varchar | Аккаунт-провайдер подписки. |
| `period` | int | Период. |
| `levels` | int | Число уровней. |
| `url` | varchar | Описание/ссылка. |
| `amount` | int | Стоимость (× 1000). |
| `available` | tinyint | Доступна ли подписка. |
| `sub_count` / `sub_amount` | int | Активные подписчики и их сумма. |
| `sub_auto_count` / `sub_auto_amount` | int | То же с автопродлением. |
| `status` | tinyint | 0 — показывать, 1 — скрыто. |
