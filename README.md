# wallet.VIZ.world

Открытый код веб-кошелька для блокчейна [VIZ](https://viz.world/) — лёгкое
клиент-приложение для управления аккаунтами, активами и DAO. Рабочий пример
развёрнут в корне домена: **<https://wallet.viz.world/>**

Автономная (standalone) версия — один самодостаточный HTML-файл — автоматически
собирается и публикуется в GitHub Pages при каждом релизе:
**<https://viz-blockchain.github.io/WebVIZWallet/>** (см. [docs/build.md](docs/build.md)).

Все криптографические операции (подпись транзакций приватными ключами)
выполняются в браузере пользователя. Ключи хранятся только в `localStorage` и не
передаются на сервер. Серверная (PHP) часть необязательна и отвечает лишь за
вспомогательные функции.

## Документация

Подробное описание — в каталоге [docs/](docs/):

- [Архитектура](docs/architecture.md) — устройство, разделение клиент/сервер, карта файлов.
- [Установка и развёртывание](docs/setup.md) — nginx, PHP, MySQL, конфигурация.
- [PHP-бэкенд](docs/backend.md) — роутинг, поиск/сортировка витрин, админка, cron, схема БД.
- [Клиент](docs/frontend.md) — приложение, представления, иконки, шрифты.
- [Локализация](docs/localization.md) — система `ltmp_*` (ru/en/zh).
- [Сборка](docs/build.md) — автономная версия и публикация в GitHub Pages.

## Быстрый старт

```bash
cp config.example.php config.php   # заполнить доступы (в git не попадает)
mysql -u <login> -p <db> < tables.sql   # только если нужны витрины
# настроить nginx по nginx.example.conf
```

Минимальный вариант: если серверные витрины (аккаунты на продаже, платные
подписки) не нужны — БД и cron можно не поднимать, кошелёк работает и без них.

## Структура

### Серверные скрипты (PHP)
- `config.example.php` — шаблон конфигурации (доступ в админку, БД, адрес ноды JSON-RPC); скопировать в `config.php`;
- `autoloader.php` — бутстрап бэкенда (конфиг, БД, классы VIZ);
- `index.php` — роутер: разбор URL, редиректы, подключение шаблона `index.template.php`;
- `updater.php` — cron: обновляет витрины из ноды VIZ в MySQL;
- `ajax.php` — API поиска и сортировки по витринам;
- `admin.php` — админка: вход и скрытие/показ записей витрин;
- `minify.php` — собирает автономную версию сайта в один HTML-файл;
- `portable.php` — отдаёт автономную версию на скачивание.

### Клиент
- `app.js`, `app.css` — приложение и стили;
- `ltmp_ru.js`, `ltmp_en.js`, `ltmp_zh.js` — шаблоны представлений с локализацией;
- `icons/` — SVG-иконки интерфейса; `profile/` — иконки соцсетей; `fonts/` — веб-шрифты.

### Сопутствующие файлы
- `tables.sql` — SQL для создания таблиц витрин;
- `nginx.example.conf` — пример настройки nginx (перенаправление `/path/` на `index.php`);
- `.github/workflows/pages.yml` — CI: сборка автономной версии и публикация в GitHub Pages;
- `class/` — классы: БД, JSON-RPC клиент VIZ, работа с ключами.

## Зависимости

- MySQL, nginx, PHP;
- JSON-RPC нода VIZ;
- [viz-js-lib](https://www.npmjs.com/package/viz-js-lib) (`viz.min.js`);
- [jQuery](https://jquery.com/) 3.7.1;
- [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/) 1.1.0.

## Лицензия

См. [LICENSE](LICENSE).
