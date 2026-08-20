# Доступность v0.42

- Контекстное меню открывает первый доступный пункт и поддерживает `ArrowUp`/`ArrowDown`, `Home`, `End`, `Enter`, `Space` и `Escape`.
- После закрытия меню фокус возвращается к элементу, с которого оно было открыто, если элемент ещё доступен.
- Design tokens имеют одного владельца в fallback-слое; theme использует палитру без дублирования.

# Доступность v0.30

Цель этапа — базовая WCAG 2.1 AA-совместимость для панели editor/auth и ключевых сценариев: вход, переключение `html/text`, открытие `Файлы`/`Настройки`, context menu и CSS-инспектор.

Сделано:

- визуальные action-иконки получили `role="button"`, `tabindex="0"` и `aria-label`;
- вкладки получили `role="tab"` и клавиатурную активацию Enter/Space;
- password visibility toggle доступен с клавиатуры и обновляет `aria-label`;
- добавлены видимые `:focus-visible`, `prefers-contrast: more` и `prefers-reduced-motion` правила;
- server-rendered file actions сохраняют role/label через DOM allowlist;
- CSS-сортировка файлового списка переведена с O(n²) поиска на `usort()`.

Проверки:

- `node --check myvibehtml.js` и PHP lint — автоматический smoke;
- `security-smoke.sh` и HTTP regression — PASS;
- ручной checklist для release: пройти Tab от auth до панели, активировать Enter/Space, проверить Escape для inspector/context menu, увеличить масштаб до 200% и проверить ширину 320px.

Полный axe/скринридер-аудит не заявляется выполненным: в проекте намеренно нет браузерной тестовой зависимости, а текущая среда не предоставляет headless browser.
