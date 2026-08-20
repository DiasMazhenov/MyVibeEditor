# Changelog

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
