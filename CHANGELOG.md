# Changelog

## 0.54

- версия отображается рядом с названием MyVibeHTML на странице авторизации и в мобильной шапке редактора;
- сохранены единые version markers и cache-busting URLs для всех runtime-модулей.

## 0.53

- восстановлены animation primitives после extraction transport-модуля, чтобы auth и панели не падали на `fadeIn()`;
- статус авторизации переведён в flex-раскладку: индикатор загрузки занимает отдельную ячейку и больше не наезжает на текст.

## 0.52

- transport-примитивы cookies, совместимый SHA-1/Base64 слой и AJAX вынесены в `myvibehtml-transport.js`;
- основной editor closure теперь использует transport через явный модульный контракт; auth-протокол и DOM-поведение сохранены.

## 0.51

- preview-переключатели и mobile menu вынесены из основного editor closure в существующий shell-модуль;
- сохранены `aria-pressed`, `aria-expanded`, `aria-hidden`, обработка Escape и прямой вызов текущих DOM-контролов без дублирования бизнес-логики.

## 0.50

- command palette вынесена из основного editor closure в локальный `myvibehtml-shell-controls.js`;
- shell-модуль загружается после `myvibehtml.js`, использует только публичные DOM-контролы и не добавляет внешних зависимостей;
- динамическая разметка palette собирается через DOM API и `textContent`, без вставки локализованных строк через `innerHTML`.

## 0.49

- исправлен переход CSS-инспектора из desktop в mobile: сохранённая inline-ширина больше не выталкивает bottom-sheet за safe inset;
- mobile CSS-инспектор использует `width:auto!important` и safe-area inset для правого, левого и нижнего отступов;
- browser acceptance выявил и подтвердил исправление desktop/mobile geometry и keyboard resize.

## 0.48

- CSS-инспектор на desktop перенесён в правую боковую панель на всю высоту окна;
- добавлен resize по левой границе панели с поддержкой мыши и клавиш `ArrowLeft`/`ArrowRight`, `Home`/`End`;
- на мобильных сохранён адаптивный bottom-sheet, чтобы панель не перекрывала весь узкий viewport.

## 0.47

- устранено наложение HTML/ARIA-полей на блок «Разметка»;
- CSS-инспектор переведён из flex-контейнера в обычный поток, чтобы fieldset не сжимались и сохраняли естественную высоту;
- общий scrollbar окна сохранён без вложенной прокрутки.

## 0.46

- scrollbar перенесён с внутренней CSS-формы на всё окно CSS-инспектора;
- HTML/ARIA, CSS-группы и footer теперь находятся в одном потоке прокрутки без вложенных scrollbar;
- горизонтальный overflow и выезд полей за границы окна по-прежнему запрещены.

## 0.45

- нижняя панель CSS-инспектора получила ограничение по высоте viewport и вертикальный внутренний скролл для групп CSS;
- заголовок, выбранный узел и кнопки управления остаются закреплёнными, а на мобильных прокручивается вся панель;
- горизонтальный overflow полей по-прежнему запрещён адаптивной сеткой.

## 0.44

- CSS-инспектор больше не использует `min-width:max-content`: поля HTML/ARIA и CSS перестраиваются в адаптивную сетку внутри панели;
- нижняя панель сохраняет внутреннюю прокрутку только для случаев, когда высоты viewport недостаточно, без горизонтального выезда полей;
- при выборе другого элемента обычным кликом или через breadcrumb CSS/HTML/ARIA-поля перечитываются для нового узла.

## 0.43

- исправлена независимая инициализация preview-переключателей от mobile menu;
- режимы `Десктоп`, `Планшет`, `Телефон` и `Блоки` получили локальные SVG-иконки Tabler через Iconify API;
- добавлены `title`/`aria-label` и единая геометрия кнопок.

## 0.42

- контекстное меню получило полноценную клавиатурную навигацию, Home/End и возврат фокуса к исходному элементу;
- theme и fallback используют один владелец design tokens, а fallback остаётся самостоятельным критическим слоем;
- accessibility и regression checks дополнены проверкой focus/keyboard contract.

## 0.41

- генерация CSRF-токенов вынесена в локальный UI-contract module без внешних зависимостей;
- CI проверяет PHP 7.4/8.1/8.3, Node 20, модульные границы и полный HTTP regression;
- authenticated HTTP E2E проверяет актуальный авторизованный panel response только через GitHub Actions secrets.

## 0.40

- поле `Тег` в HTML/ARIA-инспекторе стало редактируемым через allowlist безопасных структурных тегов;
- контекстное меню получило действия `Добавить внутрь` и `Добавить рядом` с текстовым вводом без HTML-инъекции;
- переименование и вставка синхронизируются с исходником и source map, а новые узлы получают существующие обработчики визуального редактора.

## 0.39

- добавлена безопасная массовая замена текста в проекте через preview/apply/rollback;
- preview фиксирует snapshot-хеш и показывает построчный diff до записи;
- применение ограничено разрешёнными текстовыми файлами, проверяет отсутствие конкурентных изменений, использует транзакционный backup вне web-root и атомарную запись каждого файла;
- в файловой панели добавлены поля нового текста, предпросмотр, применение и откат последней замены.

## 0.38

- добавлен read-only поиск по содержимому проекта с номером строки и коротким контекстом совпадения;
- поиск ограничивает глубину, число результатов, размер файла, скрытые файлы и симлинки; бинарное содержимое пропускается;
- добавлена отдельная кнопка режима «В содержимом», активное состояние и адаптивный перенос панели файловых инструментов.

## 0.37

- добавлена command palette по `Ctrl/Cmd+K` с поиском, Escape, стрелками и Enter;
- команды переиспользуют существующие вкладки, Save, Validate, Undo/Redo, preview и библиотеку блоков без дублирования обработчиков;
- палитра адаптивна и доступна с клавиатуры.

## 0.36

- добавлена проверка HTML перед сохранением: дубли `id`, небезопасные URL, отсутствующие `alt` и базовые структурные предупреждения;
- добавлен безопасный построчный diff исходника с режимом «проверить» и явным «сохранить всё равно»;
- проверка подключена к кнопке Save и Ctrl/Cmd+S в визуальном и текстовом редакторах.

## 0.35

- добавлена локальная библиотека блоков: сохранение выбранного узла, вставка и удаление пресетов;
- добавлен медиаменеджер в файловый менеджер с фильтром изображений и прямым открытием файла;
- библиотека блоков очищает опасные теги, inline-события, javascript-ссылки и внутренние служебные атрибуты.

## 0.34

- добавлен адаптивный preview в визуальном редакторе с режимами desktop, tablet (`768px`) и mobile (`390px`);
- режимы переключаются без перезагрузки через CSS и нативный iframe, без внешних библиотек;
- на узких экранах переключатель вынесен в отдельную полосу под верхней панелью.

## 0.33

- расширен инспектор выделенного элемента: добавлены текущие `tag`, `id`, `class`, `role`, `aria-label`, `aria-hidden` и `title`;
- изменения HTML/ARIA-атрибутов синхронизируются с исходником через source map и безопасное экранирование;
- контекстное меню получило действие `HTML / ARIA`; desktop-инспектор остаётся нижней горизонтальной панелью.

## 0.32

- added file-manager create file/folder, rename and project search with path/name validation;
- added local graphite/teal file tools and safe DOM-rendered search results;
- added CRUD/search regression assertions and synchronized runtime version markers.

## 0.31

- added source Undo/Redo controls, keyboard shortcuts, local drafts and unsaved-change state;
- draft storage reuses the existing source/visual save flow and is cleared after successful save.

## 0.30

- consolidated responsive CSS ownership and removed duplicate mobile panel cascade;
- keyboard roles, focus indicators, high-contrast and reduced-motion support;
- O(n log n) file entry sorting via `usort()`;
- PHP 7.4 minimum made explicit and obsolete compatibility branches removed;
- added accessibility, security and current architecture documentation.

## 0.29

- extracted `myvibehtml-runtime.php`;
- added GitHub Actions CI and optional authenticated HTTP E2E.

## 0.28

- completed generated-name cleanup and removed dead update/install/activate code;
- removed `textolite.*` compatibility aliases.

## 0.27–0.23

- added DOM/source-map synchronization, password/session hardening, atomic config/recovery and runtime-outside-web-root backups.
