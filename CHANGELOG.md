# Changelog

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
