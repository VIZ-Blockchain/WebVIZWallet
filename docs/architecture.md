# Архитектура

## Общая идея

wallet.VIZ.world — это **клиентское** приложение (SPA на jQuery). Пользователь
подключает аккаунт VIZ, вводя приватные ключи, которые сохраняются только в
`localStorage` браузера. Все транзакции формируются и подписываются на стороне
клиента библиотекой [viz-js-lib](https://www.npmjs.com/package/viz-js-lib) и
отправляются напрямую на выбранную JSON-RPC ноду VIZ.

PHP-сервер выполняет только вспомогательные задачи и **не является обязательным**
для базовой работы кошелька:

- красивые URL (`/path/to/page/`) через единую точку входа;
- витрина «аккаунты/субаккаунты на продажу» и «платные подписки» с серверным
  поиском и сортировкой (данные периодически выкачиваются с ноды в MySQL);
- админка для скрытия отдельных записей витрины;
- сборка автономной (standalone) версии в один HTML-файл.

```
Браузер (app.js + viz-js-lib)  ──JSON-RPC──▶  Нода VIZ
        │
        │ (только витрина: поиск/сортировка)
        ▼
   PHP (ajax.php) ──▶ MySQL ◀── cron (updater.php) ──JSON-RPC──▶ Нода VIZ
```

## Поток запроса

1. nginx все запросы без файла/директории отправляет на `index.php`
   (см. [nginx.example.conf](../nginx.example.conf)).
2. [index.php](../index.php) разбирает URL, при необходимости делает редирект
   (добавляет завершающий `/`, обрабатывает `/go?url=`), затем подключает
   [index.template.php](../index.template.php).
3. Шаблон отдаёт «оболочку» страницы и подключает клиентские скрипты
   (`viz.min.js`, `jquery-*.min.js`, `progressbar.min.js`, `ltmp_*.js`, `app.js`).
4. Дальше вся навигация и рендеринг «представлений» (views) происходят на клиенте
   в [app.js](../app.js) через History API.

## Карта файлов

### Точки входа и роутинг (PHP)
| Файл | Назначение |
|------|-----------|
| [index.php](../index.php) | Роутер: разбор URL, редиректы, подключение шаблона. |
| [index.template.php](../index.template.php) | HTML-оболочка приложения, подключение скриптов/стилей. |
| [autoloader.php](../autoloader.php) | Бутстрап бэкенда: конфиг, БД, классы VIZ. |

### Бэкенд-эндпоинты (PHP)
| Файл | Назначение |
|------|-----------|
| [ajax.php](../ajax.php) | API поиска/сортировки по витринам (JSON). |
| [admin.php](../admin.php) | Админка: вход и скрытие/показ записей витрин. |
| [updater.php](../updater.php) | Cron: обновление витрин из ноды VIZ в MySQL. |

Подробнее — в [backend.md](backend.md).

### Клиент
| Файл / папка | Назначение |
|------|-----------|
| [app.js](../app.js) | Всё клиентское приложение: роутинг, views, работа с VIZ. |
| [app.css](../app.css) | Стили. |
| `ltmp_ru.js`, `ltmp_en.js`, `ltmp_zh.js` | Шаблоны представлений с локализацией. |
| [icons/](../icons/) | SVG-иконки интерфейса. |
| [profile/](../profile/) | Иконки соцсетей для профилей аккаунтов. |
| [fonts/](../fonts/) | Веб-шрифты. |

Подробнее — в [frontend.md](frontend.md) и [localization.md](localization.md).

### Библиотеки (vendored)
| Файл | Библиотека |
|------|-----------|
| [viz.min.js](../viz.min.js) | viz-js-lib (сборка с npm). |
| `jquery-3.7.1.min.js` | jQuery 3.7.1. |
| [progressbar.min.js](../progressbar.min.js) | progressbar.js 1.1.0. |

### Сборка автономной версии
| Файл | Назначение |
|------|-----------|
| [minify.php](../minify.php) | Инлайнит все ресурсы в один `wallet-viz-world-portable.html`. |
| [portable.php](../portable.php) | Отдаёт этот файл на скачивание. |
| [.github/workflows/pages.yml](../.github/workflows/pages.yml) | CI: сборка и публикация в GitHub Pages. |

Подробнее — в [build.md](build.md).

### Конфигурация и инфраструктура
| Файл | Назначение |
|------|-----------|
| [config.example.php](../config.example.php) | Шаблон конфигурации (скопировать в `config.php`). |
| [tables.sql](../tables.sql) | Схема таблиц MySQL. |
| [nginx.example.conf](../nginx.example.conf) | Пример конфигурации nginx. |
| `class/` | Классы: БД, JSON-RPC клиент VIZ, работа с ключами. |
