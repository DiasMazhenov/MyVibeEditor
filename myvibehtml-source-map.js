/* MyVibeHTML v0.55 source map */
(function(root, factory) {
    if (typeof module == 'object' && module.exports) module.exports = factory();
    else root.MyVibeHTMLSourceMap = factory();
}(typeof window == 'object' ? window : globalThis, function() {
    function findTagEnd(source, start) {
        var quote = '', index;
        for (index = start; index < source.length; index++) {
            if (quote) {
                if (source[index] == quote) quote = '';
            } else if (source[index] == '"' || source[index] == "'") quote = source[index];
            else if (source[index] == '>') return index + 1;
        }
        return -1;
    }

    function scan(source) {
        var entries = [], index = 0;
        while (index < source.length) {
            if (source.slice(index, index + 4) == '<!--') {
                index = source.indexOf('-->', index + 4);
                index = index < 0 ? source.length : index + 3;
                continue;
            }
            if (source[index] != '<' || source[index + 1] == '/' || source[index + 1] == '!' || source[index + 1] == '?') {
                index++;
                continue;
            }
            var tagMatch = source.slice(index).match(/^<([a-z][a-z0-9:-]*)\b/i);
            if (!tagMatch) {
                index++;
                continue;
            }
            var end = findTagEnd(source, index + tagMatch[0].length);
            if (end < 0) break;
            var tag = tagMatch[1].toLowerCase(), raw = source.slice(index, end), selfClosing = /\/\s*>$/.test(raw);
            entries.push({tag: tag, start: index, end: end, raw: raw, selfClosing: selfClosing});
            index = end;
            if (!selfClosing && (tag == 'script' || tag == 'style')) {
                var closeMatch = new RegExp('</' + tag + '\\s*>', 'ig').exec(source.slice(index));
                if (closeMatch) index += closeMatch.index;
                else index = source.length;
            }
        }
        return entries;
    }

    function build(source, editorDocument) {
        var entries = scan(source), nodes = [];
        if (editorDocument && editorDocument.documentElement) {
            nodes.push(editorDocument.documentElement);
            var descendants = editorDocument.querySelectorAll('*');
            for (var nodeIndex = 0; nodeIndex < descendants.length; nodeIndex++) if (descendants[nodeIndex] !== editorDocument.documentElement) nodes.push(descendants[nodeIndex]);
        }
        var sourceIndex = 0;
        for (var nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
            var nodeTag = (nodes[nodeIndex].tagName || '').toLowerCase();
            if (nodeTag == 'body') {
                sourceIndex = 0;
                while (sourceIndex < entries.length && entries[sourceIndex].tag != 'body') sourceIndex++;
                if (sourceIndex >= entries.length) sourceIndex = 0;
            }
            while (sourceIndex < entries.length && entries[sourceIndex].tag != nodeTag) sourceIndex++;
            if (sourceIndex < entries.length) {
                entries[sourceIndex].node = nodes[nodeIndex];
                nodes[nodeIndex].__myvibehtmlSourceEntry = entries[sourceIndex];
                sourceIndex++;
            }
        }
        return {
            entries: entries,
            rangeFor: function(node) {
                var entry = node && node.__myvibehtmlSourceEntry;
                return entry ? [entry.start, entry.end] : null;
            },
            replaceOpeningTag: function(node, replacement) {
                var entry = node && node.__myvibehtmlSourceEntry;
                if (!entry) return null;
                return source.slice(0, entry.start) + replacement + source.slice(entry.end);
            }
        };
    }

    return {scan: scan, build: build};
}));
