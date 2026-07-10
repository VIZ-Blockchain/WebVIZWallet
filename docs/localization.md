**English** | [Русский](ru/localization.md)

# Localization

The wallet supports three languages: Russian (`ru`), English (`en`) and Chinese
(`zh`). The default language is `en`.

## Files

| File | Language | Global variable |
|------|----------|-----------------|
| [ltmp_ru.js](../ltmp_ru.js) | Russian | `ltmp_ru_arr` |
| [ltmp_en.js](../ltmp_en.js) | English | `ltmp_en_arr` |
| [ltmp_zh.js](../ltmp_zh.js) | 中文 | `ltmp_zh_arr` |

Each file is an object `var ltmp_<lang>_arr = { key: \`HTML template\`, ... }`. The
values are template literals with the HTML markup of the views. All three files are
loaded in [index.template.php](../index.template.php).

The top-level keys (13 in each file) must **match** across all languages — they are
the view templates (`preset_view_index`, `menu_preset`, etc.) and caption
dictionaries. Inside the templates there are nested includes via markers that
app.js expands with the `ltmp()` function.

## How the language is chosen

The logic is in [app.js](../app.js) (around lines 142–177):

1. `langs_arr` maps browser locale codes (`ru-RU`, `zh-CN`, `en-GB`, …) to the
   supported languages (`ru`/`en`/`zh`).
2. `available_langs` is the list of languages for the in-app switcher
   (`English`, `Русский`, `中文`).
3. If `localStorage` has a saved `lang` choice — it is used; otherwise the language
   is picked from `navigator.languages`; otherwise — `default_lang = 'en'`.
4. Active dictionary: `ltmp_arr = window['ltmp_' + selected_lang + '_arr']`.

The chosen language is saved in `localStorage['lang']`.

## How to add a new language

1. Copy `ltmp_en.js` to `ltmp_<code>.js`, rename the variable to
   `ltmp_<code>_arr` and translate the values (do not change the keys or structure).
2. Load the file in [index.template.php](../index.template.php) next to the other
   `ltmp_*.js`.
3. In [app.js](../app.js) add the locale code(s) to `langs_arr` and an entry to
   `available_langs`.

## Checking translation completeness

A quick check that there are no untranslated strings (no Cyrillic left in the
English/Chinese files) and that the key sets match across languages:

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
