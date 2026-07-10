[English](../localization.md) | **Русский**

# Локализация

Кошелёк поддерживает три языка: русский (`ru`), английский (`en`) и китайский
(`zh`). Язык по умолчанию — `en`.

## Файлы

| Файл | Язык | Глобальная переменная |
|------|------|-----------------------|
| [ltmp_ru.js](../../ltmp_ru.js) | Русский | `ltmp_ru_arr` |
| [ltmp_en.js](../../ltmp_en.js) | English | `ltmp_en_arr` |
| [ltmp_zh.js](../../ltmp_zh.js) | 中文 | `ltmp_zh_arr` |

Каждый файл — это объект `var ltmp_<lang>_arr = { ключ: \`HTML-шаблон\`, ... }`.
Значения — шаблонные строки (template literals) с HTML-разметкой представлений.
Все три файла подключаются в [index.template.php](../../index.template.php).

Верхнеуровневые ключи (по 13 в каждом файле) должны **совпадать** во всех языках —
это шаблоны представлений (`preset_view_index`, `menu_preset` и т.д.) и словари
подписей. Внутри шаблонов встречаются вложенные подключения через маркеры,
которые app.js разворачивает функцией `ltmp()`.

## Как выбирается язык

Логика — в [app.js](../../app.js) (около строк 142–177):

1. `langs_arr` сопоставляет коды локали браузера (`ru-RU`, `zh-CN`, `en-GB`, …) с
   поддерживаемыми языками (`ru`/`en`/`zh`).
2. `available_langs` — список языков для переключателя в интерфейсе
   (`English`, `Русский`, `中文`).
3. Если в `localStorage` есть сохранённый выбор `lang` — берётся он; иначе язык
   подбирается по `navigator.languages`; иначе — `default_lang = 'en'`.
4. Активный словарь: `ltmp_arr = window['ltmp_' + selected_lang + '_arr']`.

Выбранный язык сохраняется в `localStorage['lang']`.

## Как добавить новый язык

1. Скопируйте `ltmp_en.js` в `ltmp_<code>.js`, переименуйте переменную в
   `ltmp_<code>_arr` и переведите значения (ключи и структуру не менять).
2. Подключите файл в [index.template.php](../../index.template.php) рядом с
   остальными `ltmp_*.js`.
3. В [app.js](../../app.js) добавьте код(ы) локали в `langs_arr` и запись в
   `available_langs`.

## Проверка полноты перевода

Быстрая проверка, что нет непереведённых строк (в англ./кит. не осталось
кириллицы) и что набор ключей совпадает во всех языках:

```bash
python - <<'PY'
import re
keys=lambda f:[m.group(1) for l in open(f,encoding='utf-8')
               for m in [re.match(r'^\t([A-Za-z_]\w*):\s*`',l)] if m]
ru,en,zh=map(keys,('ltmp_ru.js','ltmp_en.js','ltmp_zh.js'))
print('counts',len(ru),len(en),len(zh))
print('diff en',set(ru)^set(en),'diff zh',set(ru)^set(zh))
PY
```
