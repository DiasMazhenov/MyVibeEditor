/* MyVibeHTML v0.77 admin page interactions. */
(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        var body = document.body,
            buttons = document.querySelectorAll('[data-admin-nav]'),
            sections = document.querySelectorAll('[data-admin-section]'),
            menu = document.querySelector('[data-admin-menu]'),
            sidebar = document.querySelector('[data-admin-sidebar]'),
            search = document.querySelector('[data-admin-file-search]'),
            activate = function(name, updateUrl) {
                var index, button, section;
                for (index = 0; index < buttons.length; index++) {
                    button = buttons[index];
                    button.setAttribute('aria-current', button.getAttribute('data-admin-nav') == name ? 'page' : 'false')
                }
                for (index = 0; index < sections.length; index++) {
                    section = sections[index];
                    section.hidden = section.getAttribute('data-admin-section') != name
                }
                if (updateUrl && window.history && window.history.replaceState) window.history.replaceState(null, '', '#' + name);
                body.removeAttribute('data-admin-sidebar-open');
                if (menu) menu.setAttribute('aria-expanded', 'false')
            },
            initial = (window.location.hash || '#overview').slice(1);
        if (!document.querySelector('[data-admin-section="' + initial + '"]')) initial = 'overview';
        for (var index = 0; index < buttons.length; index++) buttons[index].addEventListener('click', function() { activate(this.getAttribute('data-admin-nav'), true) });
        activate(initial, false);
        if (menu && sidebar) {
            menu.addEventListener('click', function() {
                var open = body.getAttribute('data-admin-sidebar-open') == 'true';
                body.setAttribute('data-admin-sidebar-open', open ? 'false' : 'true');
                menu.setAttribute('aria-expanded', open ? 'false' : 'true')
            });
            document.addEventListener('click', function(event) {
                if (body.getAttribute('data-admin-sidebar-open') == 'true' && event.target != sidebar && !sidebar.contains(event.target) && event.target != menu) {
                    body.removeAttribute('data-admin-sidebar-open');
                    menu.setAttribute('aria-expanded', 'false')
                }
            });
            document.addEventListener('keydown', function(event) {
                if (event.key == 'Escape') {
                    body.removeAttribute('data-admin-sidebar-open');
                    menu.setAttribute('aria-expanded', 'false')
                }
            })
        }
        if (search) search.addEventListener('input', function() {
            var term = this.value.toLowerCase().replace(/^\s+|\s+$/g, ''), rows = document.querySelectorAll('[data-admin-file-row]');
            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) rows[rowIndex].hidden = !!term && rows[rowIndex].textContent.toLowerCase().indexOf(term) == -1
        })
    })
}());
