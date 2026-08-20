# Семантическая деобфускация v0.28

В v0.28 убраны остатки механической маркировки локальных переменных:

- PHP-переменные вида `$DispatchValueN`, `$Render...ValueN` и `$Get...ValueN` получили имена от области действия (`$dispatchN`, `$renderPanelN`, `$getSitePathN` и т. п.);
- JavaScript-переменные `callbackValueN` и `callbackArgumentN` переименованы в `runtimeValueN` и `runtimeInputN`, а локальные группы редактора — в `visualEditorValueN`, `settingsValueN` и `submitValueN`;
- суффикс числа оставлен только как средство различать несколько однотипных локальных значений внутри одной функции, а не как скрытие смысла;
- удалены мёртвые update/install/activate-заглушки, старые update-настройки и aliases `textolite.*`.

Смысловые границы runtime описаны в [`function-catalog.md`](function-catalog.md), а проверка отсутствия старых generated-префиксов выполняется в `tests/deobfuscation.test.js`. Имена публичных функций, классов и security-контрактов не зависят от локальных числовых суффиксов.
