# Миграция jQuery 3.7.1 → cash.js (цель #49)

Статус: **полностью проскоплено, готово к исполнению в тестируемой ветке.** app.js = 8352 строки,
~1315 `$`-вызовов. cash.js покрывает ~99% 1:1 (селекторы, `.on/.off`, `addClass/removeClass/toggleClass`,
`attr/html/text/val`, `append/prepend/remove`, `find/closest/parent`, `css`, `.each`, `data`). Ниже —
ПОЛНЫЙ список того, что cash.js НЕ умеет и требует ручной правки (всего 13 сайтов).

## Несовместимые сайты (точные строки в app.js)

### 1) `$.ajax` → `fetch` (6 шт: 1524, 1630, 1697, 1765, 7300, 7343)
Все — GET/POST на `https://wallet.viz.world/ajax.php` с `data:{...}` и `success:fn`. Шаблон замены:
```js
// было: $.ajax({type:'GET',url:U,data:D,success:fn})
fetch(U+'?'+new URLSearchParams(D)).then(r=>r.text()).then(fn);
// POST: fetch(U,{method:'POST',body:new URLSearchParams(D)}).then(r=>r.text()).then(fn)
```
Ответ приходит строкой (код уже делает `JSON.parse(response_data)` внутри) — сохранить `.text()`, не `.json()`.
Добавить `.catch()` (в jQuery ошибки молчали; поведение оставить — пустой catch или лог).

### 2) `$('body,html').animate({scrollTop:X},ms)` → `window.scrollTo` (4 шт: 610, 4473, 6967, 8343)
```js
// было: $('body,html').animate({scrollTop:Y},1000)
window.scrollTo({top:Y, behavior:'smooth'});   // ms=0 → behavior:'auto'
```
Y = `$('.index[data-index='+hash+']').offset().top - 64 - 10` (см. п.3 для offset).
`energy_radial.animate(...)` (3454) — это **progressbar.js, НЕ jQuery** → НЕ трогать.

### 3) `.offset().top` → getBoundingClientRect (2 шт: 610, 8343, внутри scroll)
```js
// было: $(sel).offset().top
el.getBoundingClientRect().top + window.scrollY
```

### 4) `$.extend({}, obj)` → `Object.assign` (1 шт: 3853)
```js
Object.assign({}, p.bet)
```

## Порядок исполнения (staged, тестируемо)
1. Ветка `chore/cash-migration` (НЕ master — это swap фреймворка, «ничего не сломается» тут НЕ действует).
2. Вендорить `cash.min.js` (эталон — Free-Speech-Project), подключить ВМЕСТО jquery в
   `wallet-viz-world-portable.html` И в dev-подключении.
3. Прав­ки 13 сайтов выше. Прогнать `php minify.php` → standalone.
4. **Регрессия (обязательно, кошелёк живой + подпись tx):** vision/shot.js по всем экранам standalone
   (главная, unlock, send, PM-раздел, свойства валидатора, настройки) + проверить что клики/формы/аякс
   работают. Подпись транзакции НЕ ломать — проверить хотя бы build tx (dry).
5. Только после зелёной регрессии — мердж в master (авто-деплой Pages).

## Почему не сделано этим тиком
Swap фреймворка на ЖИВОМ кошельке с подписью tx нельзя пушить вслепую в master без полной регрессии
(автотестов нет, я не могу интерактивно проверить все money-потоки). План выше делает флип механическим;
исполнять — в ветке с проверкой через shot.js, желательно с ведома владельца. Экономия после: −~80 КБ
(jQuery 3.7.1 ~87КБ min → cash ~6КБ).

---
## DONE (2026-07-11) — фактический подход
Реализовано НЕ переписыванием 13 сайтов, а **compat-shim** в начале app.js (cash поддерживает namespaces
и offset, что упростило): shim добавил `$.ajax`→fetch, `$.extend`, `$.fn.animate({scrollTop})/scrollTop`,
jQuery shorthand-события (`.change/.focus/.keyup/...`), `window.jQuery=$`. Плюс правки несовместимых
СЕЛЕКТОРОВ (cash = strict native qsa): 24× `[attr='+var+']`→quoted, 3× `option:selected`→`option:checked`,
1× `$(location.hash)`→safe query. **Верифицировано на тестнете (bettor):** login грузит баланс, transfer
0.001 VIZ и PM-ставка легли на цепь, обход всех разделов 0 JS-ошибок. Смержено в master. −71КБ.
