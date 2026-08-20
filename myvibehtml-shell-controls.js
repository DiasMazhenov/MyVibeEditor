/* MyVibeHTML v0.55 shell controls: command palette and responsive controls */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var panel = document.querySelector('#e');
        if (!panel) return;

        var palette = null,
            paletteInput = null,
            paletteList = null,
            commands = [],
            activeIndex = 0,
            getText = function(attribute, fallback) {
                var source = panel.querySelector('[data-page-validate]');
                return source && source.getAttribute('data-' + attribute) || fallback
            },
            getLabel = function(element, fallback) {
                return element && (element.getAttribute('data-preview-label') || element.getAttribute('data-block-label') || element.textContent.replace(/^\s+|\s+$/g, '')) || fallback
            },
            dispatch = function(element) {
                if (!element) return;
                if (element.tagName == 'A') element.dispatchEvent(new MouseEvent('mousedown', {bubbles:true, cancelable:true, view:window}));
                else if (element.click) element.click()
            },
            addCommand = function(list, label, shortcut, action) {
                if (action) list.push({label:label, shortcut:shortcut, action:action})
            },
            buildCommands = function() {
                var list = [],
                    modes = panel.querySelectorAll('div>ol>li'),
                    tabs = panel.querySelectorAll('div>ol+ul>li>a'),
                    saveButton = panel.querySelector('div>div+ul li:first-child input'),
                    validateButton = panel.querySelector('[data-page-validate]'),
                    undoButton = panel.querySelector('[data-source-action="undo"]'),
                    redoButton = panel.querySelector('[data-source-action="redo"]'),
                    previewButtons = panel.querySelectorAll('[data-preview-size]'),
                    blockButton = panel.querySelector('[data-block-library]'),
                    index;
                if (modes[0]) addCommand(list, getLabel(modes[0], 'HTML'), 'Ctrl/⌘+1', function() { dispatch(modes[0]) });
                if (modes[1]) addCommand(list, getLabel(modes[1], 'Text'), 'Ctrl/⌘+2', function() { dispatch(modes[1]) });
                if (tabs[0]) addCommand(list, getLabel(tabs[0], 'Files'), '', function() { dispatch(tabs[0]) });
                if (tabs[1]) addCommand(list, getLabel(tabs[1], 'Settings'), '', function() { dispatch(tabs[1]) });
                if (validateButton) addCommand(list, getLabel(validateButton, 'Check page'), '', function() { validateButton.click() });
                if (saveButton) addCommand(list, getLabel(saveButton, 'Save'), 'Ctrl/⌘+S', function() { saveButton.click() });
                if (undoButton) addCommand(list, getLabel(undoButton, 'Undo'), 'Ctrl/⌘+Z', function() { undoButton.click() });
                if (redoButton) addCommand(list, getLabel(redoButton, 'Redo'), 'Ctrl/⌘+Y', function() { redoButton.click() });
                if (blockButton) addCommand(list, getLabel(blockButton, 'Blocks'), '', function() { blockButton.click() });
                for (index = 0; index < previewButtons.length; index++) (function(previewButton) {
                    addCommand(list, getLabel(previewButton, previewButton.getAttribute('data-preview-size')), '', function() { previewButton.click() })
                })(previewButtons[index]);
                return list
            },
            close = function() {
                if (palette) {
                    palette.hidden = true;
                    paletteInput.value = ''
                }
            },
            render = function() {
                var query = paletteInput.value.toLowerCase(), visible = [], index;
                paletteList.textContent = '';
                for (index = 0; index < commands.length; index++) {
                    if (query && commands[index].label.toLowerCase().indexOf(query) === -1) continue;
                    visible.push(commands[index]);
                    var button = document.createElement('button');
                    button.type = 'button';
                    button.setAttribute('role', 'option');
                    button.setAttribute('aria-selected', visible.length - 1 == activeIndex ? 'true' : 'false');
                    var label = document.createElement('span'), shortcut = document.createElement('kbd');
                    label.textContent = commands[index].label;
                    shortcut.textContent = commands[index].shortcut;
                    button.appendChild(label);
                    button.appendChild(shortcut);
                    button.__myvibeCommand = commands[index];
                    button.addEventListener('click', function() {
                        var selected = this.__myvibeCommand;
                        close();
                        if (selected) selected.action()
                    });
                    paletteList.appendChild(button)
                }
                if (!visible.length) {
                    var empty = document.createElement('p');
                    empty.textContent = getText('command-empty', 'No commands found');
                    paletteList.appendChild(empty)
                }
            },
            open = function() {
                if (!palette) {
                    palette = document.createElement('aside');
                    palette.id = 'myvibehtml-command-palette';
                    palette.setAttribute('role', 'dialog');
                    palette.setAttribute('aria-label', getText('command-palette', 'Command palette'));
                    var header = document.createElement('div'), title = document.createElement('h2'), escapeHint = document.createElement('kbd');
                    header.className = 'myvibehtml-command-header';
                    title.textContent = getText('command-palette', 'Command palette');
                    escapeHint.textContent = 'Esc';
                    header.appendChild(title);
                    header.appendChild(escapeHint);
                    palette.appendChild(header);
                    paletteInput = document.createElement('input');
                    paletteInput.type = 'search';
                    paletteInput.placeholder = getText('command-search', 'Search commands');
                    paletteInput.setAttribute('aria-label', getText('command-search', 'Search commands'));
                    palette.appendChild(paletteInput);
                    paletteList = document.createElement('div');
                    paletteList.setAttribute('role', 'listbox');
                    palette.appendChild(paletteList);
                    var hint = document.createElement('p');
                    hint.className = 'myvibehtml-command-hint';
                    hint.textContent = getText('command-hint', 'Use ↑ ↓ and Enter');
                    palette.appendChild(hint);
                    document.body.appendChild(palette);
                    paletteInput.addEventListener('input', function() { activeIndex = 0; render() });
                    palette.addEventListener('click', function(event) { if (event.target == palette) close() })
                }
                commands = buildCommands();
                activeIndex = 0;
                palette.hidden = false;
                render();
                paletteInput.focus()
            };

        document.addEventListener('keydown', function(event) {
            if ((event.metaKey || event.ctrlKey) && event.keyCode == 75) {
                event.preventDefault();
                open();
                return
            }
            if (!palette || palette.hidden) return;
            if (event.keyCode == 27) {
                event.preventDefault();
                close()
            } else if (event.keyCode == 40 || event.keyCode == 38) {
                event.preventDefault();
                var buttons = paletteList.querySelectorAll('button');
                if (!buttons.length) return;
                activeIndex = (activeIndex + (event.keyCode == 40 ? 1 : buttons.length - 1)) % buttons.length;
                for (var index = 0; index < buttons.length; index++) buttons[index].setAttribute('aria-selected', index == activeIndex ? 'true' : 'false');
                buttons[activeIndex].focus()
            } else if (event.keyCode == 13 && document.activeElement && document.activeElement.parentNode == paletteList) {
                event.preventDefault();
                document.activeElement.click()
            }
        });
        document.addEventListener('click', function(event) { if (palette && !palette.hidden && !palette.contains(event.target)) close() })
    });

    document.addEventListener('DOMContentLoaded', function() {
        var panel = document.querySelector('#e'), previewControls, previewFrame;
        if (!panel) return;
        previewControls = panel.querySelector('[data-preview-controls]');
        previewFrame = document.querySelector('#d iframe');
        if (previewControls && previewFrame && document.documentElement.id == 'd') {
            var previewButtons = previewControls.querySelectorAll('[data-preview-size]'),
                setPreviewSize = function(previewSize) {
                    if (previewSize != 'tablet' && previewSize != 'mobile') previewSize = 'desktop';
                    document.documentElement.setAttribute('data-myvibehtml-preview-size', previewSize);
                    for (var previewIndex = 0; previewIndex < previewButtons.length; previewIndex++) previewButtons[previewIndex].setAttribute('aria-pressed', previewButtons[previewIndex].getAttribute('data-preview-size') == previewSize ? 'true' : 'false')
                };
            for (var previewIndex = 0; previewIndex < previewButtons.length; previewIndex++) previewButtons[previewIndex].addEventListener('click', function() { setPreviewSize(this.getAttribute('data-preview-size')) });
            setPreviewSize('desktop')
        }

        var menuToggle = document.querySelector('#myvibehtml-mobile-menu-toggle'),
            menu = document.querySelector('#myvibehtml-mobile-menu');
        if (!menuToggle || !menu) return;
        var menuItems = menu.querySelectorAll('[data-mobile-target]'),
            setMenuState = function(open) {
                menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
                menu.setAttribute('aria-hidden', open ? 'false' : 'true')
            };
        for (var itemIndex = 0; itemIndex < menuItems.length; itemIndex++) {
            var item = menuItems[itemIndex], target = panel.querySelector(item.getAttribute('data-mobile-target'));
            if (!target) {
                item.hidden = true;
                continue
            }
            item.addEventListener('click', function(event) {
                event.preventDefault();
                var target = panel.querySelector(this.getAttribute('data-mobile-target'));
                if (target && !target.disabled) {
                    if (target.tagName == 'A') target.dispatchEvent(new MouseEvent('mousedown', {bubbles:true, cancelable:true, view:window}));
                    else if (target.click) target.click()
                }
                setMenuState(false)
            })
        }
        menuToggle.addEventListener('click', function(event) {
            event.preventDefault();
            setMenuState(menu.getAttribute('aria-hidden') == 'true')
        });
        document.addEventListener('click', function(event) {
            if (event.target != menuToggle && !menuToggle.contains(event.target) && event.target != menu && !menu.contains(event.target)) setMenuState(false)
        });
        document.addEventListener('keydown', function(event) {
            if (event.key == 'Escape') {
                setMenuState(false);
                menuToggle.focus()
            }
        })
    })
}());
