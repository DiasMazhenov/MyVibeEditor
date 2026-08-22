/* MyVibeHTML v0.90 shell controls: admin navigation, page navigator, command palette and responsive studio */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var panel = document.querySelector('#e'), dashboardButton;
        if (!panel) return;
        dashboardButton = panel.querySelector('[data-dashboard]');
        if (!dashboardButton) return;
        dashboardButton.addEventListener('click', function() {
            var target = dashboardButton.getAttribute('data-dashboard-url');
            if (target) window.location.href = target
        })
    });

    document.addEventListener('DOMContentLoaded', function() {
        var panel = document.querySelector('#e'),
            uiContracts = window.MyVibeHTMLUIContracts || {};
        if (!panel) return;

        var palette = null,
            paletteInput = null,
            paletteList = null,
            paletteFocusCleanup = null,
            commands = [],
            activeIndex = 0,
            getText = function(attribute, fallback) {
                var source = panel.querySelector('[data-page-validate]');
                return source && source.getAttribute('data-' + attribute) || fallback
            },
            getLabel = function(element, fallback) {
                return element && (element.getAttribute('data-preview-label') || element.getAttribute('data-block-label') || element.getAttribute('data-site-map-label') || element.getAttribute('data-dashboard-label') || element.textContent.replace(/^\s+|\s+$/g, '')) || fallback
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
                    siteMapButton = panel.querySelector('[data-site-map]'),
                    dashboardButton = panel.querySelector('[data-dashboard]'),
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
                if (siteMapButton) addCommand(list, getLabel(siteMapButton, 'Page navigation'), '', function() { siteMapButton.click() });
                if (dashboardButton) addCommand(list, getLabel(dashboardButton, 'Project dashboard'), '', function() { dashboardButton.click() });
                for (index = 0; index < previewButtons.length; index++) (function(previewButton) {
                    addCommand(list, getLabel(previewButton, previewButton.getAttribute('data-preview-size')), '', function() { previewButton.click() })
                })(previewButtons[index]);
                return list
            },
            close = function() {
                if (palette) {
                    palette.hidden = true;
                    paletteInput.value = '';
                    if (paletteFocusCleanup) paletteFocusCleanup(), paletteFocusCleanup = null
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
                if (paletteFocusCleanup) paletteFocusCleanup();
                paletteFocusCleanup = uiContracts.focusTrap ? uiContracts.focusTrap(palette) : null;
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
        var panel = document.querySelector('#e'),
            uiContracts = window.MyVibeHTMLUIContracts || {},
            previewControls, previewFrame,
            syncMobileShell = function() {
                var previewMobile = document.documentElement.id == 'd' && document.documentElement.getAttribute('data-myvibehtml-preview-size') == 'mobile',
                    viewportMobile = window.matchMedia && window.matchMedia('(max-width:900px)').matches;
                panel.setAttribute('data-myvibehtml-mobile-shell', previewMobile || viewportMobile ? 'true' : 'false')
            };
        if (!panel) return;
        syncMobileShell();
        window.addEventListener('resize', syncMobileShell);

        var menuToggle = document.querySelector('#myvibehtml-mobile-menu-toggle'),
            menu = document.querySelector('#myvibehtml-mobile-menu');
        if (menuToggle && menu) {
            var menuItems = menu.querySelectorAll('[data-mobile-target]'),
                setMenuState = function(open) {
                    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
                    menu.setAttribute('aria-hidden', open ? 'false' : 'true')
                };
            setMenuState(false);
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
        }

        previewControls = panel.querySelector('[data-preview-controls]');
        previewFrame = document.querySelector('#d iframe');
        if (previewControls && previewFrame && document.documentElement.id == 'd') {
            var previewButtons = previewControls.querySelectorAll('[data-preview-size]'),
                previewStorageKey = 'myvibehtml:preview-size:' + location.pathname + location.search.replace(/[?&]rev=[^&]*/, ''),
                setPreviewSize = function(previewSize) {
                    previewSize = previewSize == 'tablet' || previewSize == 'mobile' ? previewSize : 'desktop';
                    document.documentElement.setAttribute('data-myvibehtml-preview-size', previewSize);
                    syncMobileShell();
                    if (previewSize != 'desktop') {
                        previewFrame.style.width = 'min(' + (previewSize == 'tablet' ? 768 : 390) + 'px, calc(100% - 24px))';
                        previewFrame.style.left = '50%';
                        previewFrame.style.right = 'auto';
                        previewFrame.style.transform = 'translateX(-50%)'
                    } else {
                        previewFrame.style.width = '';
                        previewFrame.style.left = '';
                        previewFrame.style.right = '';
                        previewFrame.style.transform = ''
                    }
                    if (uiContracts.storageSet) uiContracts.storageSet(window, 'localStorage', previewStorageKey, previewSize);
                    for (var previewIndex = 0; previewIndex < previewButtons.length; previewIndex++) previewButtons[previewIndex].setAttribute('aria-pressed', previewButtons[previewIndex].getAttribute('data-preview-size') == previewSize ? 'true' : 'false')
                };
            for (var previewIndex = 0; previewIndex < previewButtons.length; previewIndex++) previewButtons[previewIndex].addEventListener('click', function() { setPreviewSize(this.getAttribute('data-preview-size')) });
            var initialPreviewSize = 'desktop';
            var storedPreviewSize = uiContracts.storageGet ? uiContracts.storageGet(window, 'localStorage', previewStorageKey) : null;
            if (storedPreviewSize == 'tablet' || storedPreviewSize == 'mobile') initialPreviewSize = storedPreviewSize;
            setPreviewSize(initialPreviewSize)
        }

    });

    document.addEventListener('DOMContentLoaded', function() {
        var panel = document.querySelector('#e'), siteMapButton, siteMap = null, siteMapList = null, siteMapFocusCleanup = null, iframe;
        if (!panel) return;
        siteMapButton = panel.querySelector('[data-site-map]');
        iframe = document.querySelector('#d iframe');
        if (!siteMapButton || !iframe) return;
        var text = function(attribute, fallback) {
                var source = panel.querySelector('[data-page-validate]');
                return source && source.getAttribute('data-' + attribute) || fallback
            },
            siteMapText = function(attribute, fallback) { return siteMapButton.getAttribute('data-site-map-' + attribute) || fallback },
            close = function() {
                if (siteMap) {
                    siteMap.hidden = true;
                    siteMap.setAttribute('aria-hidden', 'true');
                    if (siteMapFocusCleanup) siteMapFocusCleanup(), siteMapFocusCleanup = null
                }
            },
            render = function() {
                if (!siteMapList) return;
                siteMapList.textContent = '';
                var frameDocument;
                try { frameDocument = iframe.contentDocument } catch (error) { frameDocument = null }
                var links = [], seen = {}, anchors = frameDocument ? frameDocument.querySelectorAll('a[href]') : [], index;
                for (index = 0; index < anchors.length; index++) {
                    var href = anchors[index].getAttribute('href'), url;
                    try { url = new URL(href, window.location.href) } catch (error) { url = null }
                    if (!url || url.origin != window.location.origin || (url.hash && url.pathname == window.location.pathname) || seen[url.href]) continue;
                    seen[url.href] = true;
                    links.push({href:url.href,label:(anchors[index].textContent || '').replace(/^\s+|\s+$/g, '') || url.pathname})
                }
                if (!links.length) {
                    var empty = document.createElement('p');
                    empty.className = 'myvibehtml-site-map-empty';
                    empty.textContent = siteMapText('empty', 'No internal links found on this page');
                    siteMapList.appendChild(empty);
                    return
                }
                for (index = 0; index < links.length; index++) {
                    var item = document.createElement('li'), label = document.createElement('span'), openLink = document.createElement('a');
                    label.textContent = links[index].label;
                    openLink.href = links[index].href;
                    openLink.target = '_blank';
                    openLink.rel = 'noopener';
                    openLink.textContent = siteMapText('open', 'Open');
                    item.appendChild(label);
                    item.appendChild(openLink);
                    siteMapList.appendChild(item)
                }
            },
            open = function() {
                if (!siteMap) {
                    siteMap = document.createElement('aside');
                    siteMap.id = 'myvibehtml-site-map';
                    siteMap.setAttribute('role', 'dialog');
                    siteMap.setAttribute('aria-modal', 'true');
                    siteMap.setAttribute('aria-hidden', 'true');
                    var header = document.createElement('div'), title = document.createElement('h2'), closeButton = document.createElement('button');
                    header.className = 'myvibehtml-site-map-header';
                    title.textContent = siteMapButton.getAttribute('data-site-map-label') || 'Page navigation';
                    closeButton.type = 'button';
                    closeButton.setAttribute('aria-label', text('close', 'Close'));
                    closeButton.textContent = '×';
                    closeButton.addEventListener('click', close);
                    header.appendChild(title);
                    header.appendChild(closeButton);
                    siteMap.appendChild(header);
                    siteMapList = document.createElement('ul');
                    siteMap.appendChild(siteMapList);
                    document.body.appendChild(siteMap);
                    siteMap.addEventListener('click', function(event) { if (event.target == siteMap) close() })
                }
                render();
                siteMap.hidden = false;
                siteMap.setAttribute('aria-hidden', 'false');
                if (siteMapFocusCleanup) siteMapFocusCleanup();
                siteMapFocusCleanup = window.MyVibeHTMLUIContracts && window.MyVibeHTMLUIContracts.focusTrap ? window.MyVibeHTMLUIContracts.focusTrap(siteMap) : null;
                siteMap.querySelector('button').focus()
            };
        siteMapButton.addEventListener('click', open);
        iframe.addEventListener('load', function() { if (siteMap && !siteMap.hidden) render() });
        document.addEventListener('keydown', function(event) { if (event.key == 'Escape' && siteMap && !siteMap.hidden) close() })
    })
}());
