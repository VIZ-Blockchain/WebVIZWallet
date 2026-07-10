# Сборка автономной (standalone) версии

Автономная версия — это **один самодостаточный HTML-файл**, в который встроены
все стили, скрипты и иконки (base64). Такой файл работает без веб-сервера:
достаточно открыть его в браузере. Он полезен как «резервный» кошелёк на случай,
если сайт заблокирован или недоступен — файл никак не связан с нашим сервером.

## Что делает minify.php

[minify.php](../minify.php) берёт [index.template.php](../index.template.php) и:

1. вырезает PHP-вставки (`<?...?>`) и HTML-комментарии;
2. инлайнит `<img src>` как `data:image/svg+xml;base64,...`;
3. инлайнит `<link rel="stylesheet">` в `<style>` (и картинки `url()` в CSS —
   тоже base64);
4. инлайнит `<script src>` в `<script>` (viz-js-lib, jQuery, progressbar, ltmp,
   app.js);
5. инлайнит favicon;
6. включает автономный режим: заменяет `var standalone=false;` на
   `var standalone=true;` (это переключает app.js на hash-роутинг);
7. вырезает внешние сервисные `<script src>`;
8. сохраняет результат в `wallet-viz-world-portable.html`.

Запуск вручную (нужен только PHP, БД не требуется):

```bash
php minify.php
# → wallet-viz-world-portable.html
```

Файл `wallet-viz-world-portable.html` — сборочный артефакт, он в
[.gitignore](../.gitignore) и не коммитится.

[portable.php](../portable.php) отдаёт этот файл на скачивание с корректными
заголовками (`Content-Disposition: attachment`).

## Публикация в GitHub Pages (CI)

Вместо ручной сборки настроен GitHub Action
[.github/workflows/pages.yml](../.github/workflows/pages.yml). Он:

1. срабатывает на push в `master`, публикацию релиза или ручной запуск;
2. поднимает PHP и выполняет `php minify.php`;
3. копирует `wallet-viz-world-portable.html` в `_site/index.html`;
4. публикует `_site` в GitHub Pages.

### Разовая настройка репозитория

В **Settings → Pages → Build and deployment → Source** выберите **GitHub Actions**.
После этого при каждом пуше в `master` (или релизе) в Pages будет обновляться
`index.html` — актуальная автономная версия кошелька.

> Примечание: изображения профилей (`/profile/*.svg`) подставляются в JS
> динамически и не инлайнятся в автономный файл — это косметика карточек
> аккаунтов и на основную работу кошелька не влияет.
