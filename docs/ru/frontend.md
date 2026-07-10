[English](../frontend.md) | **Русский**

# Клиентское приложение

## Структура

Вся логика — в [app.js](../../app.js) (jQuery + [viz-js-lib](../../viz.min.js)). Стили —
в [app.css](../../app.css). HTML-оболочку отдаёт [index.template.php](../../index.template.php).

Оболочка содержит «слоты» представлений (views), которые app.js показывает по
одному в зависимости от маршрута:

```html
<div class="view view-index"></div>
<div class="view view-login"></div>
<div class="view view-assets"></div>
<div class="view view-dao"></div>
<div class="view view-account"></div>
<div class="view view-market"></div>
...
```

Навигация построена на History API (`change_state`/`pushState`). В обычном режиме
используются нормальные URL; в автономной (standalone) сборке — hash-роутинг
(`window.location.hash`), см. [build.md](build.md).

## Работа с VIZ

Приватные ключи вводятся при подключении аккаунта и хранятся в `localStorage`
браузера — на сервер они не передаются. Все операции идут через глобальный объект
`viz` из viz-js-lib: `viz.api.*` (чтение), `viz.broadcast.*` (транзакции),
`viz.auth.*` (ключи), `viz.memo.*` (шифрование заметок). Нода выбирается
пользователем и может переключаться (есть уведомление «нода недоступна»).

## Иконки

- [icons/](../../icons/) — SVG-иконки интерфейса (меню, логотип, кнопки). Ссылки
  абсолютные от корня: `/icons/имя.svg`. Так как сайт размещается в корне домена
  (`https://wallet.viz.world/`), пути резолвятся напрямую.
- [profile/](../../profile/) — иконки соцсетей, подставляются в карточки профилей
  аккаунтов динамически из JS.

Иконки инлайнятся в автономную сборку как base64 (см. [minify.php](../../minify.php)).

## Шрифты

Все веб-шрифты собраны в [fonts/](../../fonts/). В текущем оформлении CSS использует
системные/веб-безопасные семейства (`Roboto`, `Arial`, `IBM Plex Serif`), поэтому
файлы шрифтов в `fonts/` (scada, Arial) сейчас **не подключаются** через
`@font-face`. Они оставлены на случай возврата к фирменному начертанию; при
необходимости их следует подключить в `app.css`, иначе — можно удалить.

## Локализация

Тексты вынесены в шаблоны `ltmp_ru.js` / `ltmp_en.js` / `ltmp_zh.js`. Подробнее —
[localization.md](localization.md).
