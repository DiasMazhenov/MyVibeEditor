/* MyVibeHTML v0.79 source map */
(function(root, factory) {
    if (typeof module == 'object' && module.exports) module.exports = factory();
    else root.MyVibeHTMLSourceMap = factory();
}(typeof window == 'object' ? window : globalThis, function() {
    var voidTags = {area:1, base:1, br:1, col:1, embed:1, hr:1, img:1, input:1, link:1, meta:1, param:1, source:1, track:1, wbr:1},
        implicitDomTags = {tbody:1, thead:1, tfoot:1};

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
        var entries = [], openStack = [], index = 0;
        while (index < source.length) {
            if (source.slice(index, index + 4) == '<!--') {
                index = source.indexOf('-->', index + 4);
                index = index < 0 ? source.length : index + 3;
                continue;
            }
            var closingMatch = source.slice(index).match(/^<\/\s*([a-z][a-z0-9:-]*)\s*>/i);
            if (closingMatch) {
                var closingTag = closingMatch[1].toLowerCase(),
                    closingEnd = index + closingMatch[0].length,
                    stackIndex = openStack.length - 1;
                while (stackIndex >= 0 && openStack[stackIndex].tag != closingTag) stackIndex--;
                if (stackIndex >= 0) {
                    if (stackIndex !== openStack.length - 1) for (var malformedIndex = stackIndex; malformedIndex < openStack.length; malformedIndex++) openStack[malformedIndex].ambiguous = true;
                    var closingEntry = openStack[stackIndex];
                    closingEntry.elementEnd = closingEnd;
                    closingEntry.complete = !closingEntry.ambiguous;
                    openStack.splice(stackIndex, openStack.length - stackIndex);
                }
                index = closingEnd;
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
            var openEnd = findTagEnd(source, index + tagMatch[0].length);
            if (openEnd < 0) break;
            var tag = tagMatch[1].toLowerCase(),
                raw = source.slice(index, openEnd),
                selfClosing = /\/\s*>$/.test(raw),
                entry = {tag: tag, start: index, end: openEnd, elementStart: index, elementEnd: selfClosing || voidTags[tag] ? openEnd : null, complete: selfClosing || !!voidTags[tag], raw: raw};
            entries.push(entry);
            index = openEnd;
            if (!entry.complete && (tag == 'script' || tag == 'style')) {
                var closeMatch = new RegExp('</' + tag + '\\s*>', 'ig').exec(source.slice(index));
                if (closeMatch) {
                    entry.elementEnd = index + closeMatch.index + closeMatch[0].length;
                    entry.complete = true;
                    index = entry.elementEnd;
                } else {
                    entry.ambiguous = true;
                    index = source.length;
                }
            } else if (!entry.complete) openStack.push(entry);
        }
        for (var openIndex = 0; openIndex < openStack.length; openIndex++) openStack[openIndex].complete = false;
        return entries;
    }

    function build(source, editorDocument) {
        var entries = scan(source), nodes = [], sourceIndex = 0, ambiguous = false;
        if (editorDocument && editorDocument.documentElement) {
            nodes.push(editorDocument.documentElement);
            var descendants = editorDocument.querySelectorAll('*');
            for (var nodeIndex = 0; nodeIndex < descendants.length; nodeIndex++) if (descendants[nodeIndex] !== editorDocument.documentElement) nodes.push(descendants[nodeIndex]);
        }
        for (var nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
            var nodeTag = (nodes[nodeIndex].tagName || '').toLowerCase();
            if (nodeTag == 'body') {
                sourceIndex = 0;
                while (sourceIndex < entries.length && entries[sourceIndex].tag != 'body') sourceIndex++;
                if (sourceIndex >= entries.length) continue;
            }
            while (sourceIndex < entries.length && (entries[sourceIndex].tag == 'script' || entries[sourceIndex].tag == 'style') && entries[sourceIndex].tag != nodeTag) sourceIndex++;
            if (sourceIndex < entries.length && entries[sourceIndex].tag == nodeTag) {
                entries[sourceIndex].node = nodes[nodeIndex];
                nodes[nodeIndex].__myvibehtmlSourceEntry = entries[sourceIndex];
                sourceIndex++;
            } else if (!implicitDomTags[nodeTag]) {
                ambiguous = true;
                break;
            }
        }
        if (!ambiguous) {
            while (sourceIndex < entries.length && (entries[sourceIndex].tag == 'script' || entries[sourceIndex].tag == 'style')) sourceIndex++;
            for (var entryIndex = sourceIndex; entryIndex < entries.length; entryIndex++) if (!entries[entryIndex].node) {
                ambiguous = true;
                break;
            }
        }
        function entryFor(node) {
            var entry = node && node.__myvibehtmlSourceEntry;
            return !ambiguous && entry && entry.complete ? entry : null;
        }
        return {
            entries: entries,
            ambiguous: ambiguous,
            openingRangeFor: function(node) {
                var entry = entryFor(node);
                return entry ? [entry.start, entry.end] : null;
            },
            elementRangeFor: function(node) {
                var entry = entryFor(node);
                return entry && typeof entry.elementEnd == 'number' ? [entry.elementStart, entry.elementEnd] : null;
            },
            rangeFor: function(node) {
                return this.elementRangeFor(node);
            },
            replaceOpeningTag: function(node, replacement) {
                var range = this.openingRangeFor(node);
                return range ? source.slice(0, range[0]) + replacement + source.slice(range[1]) : null;
            }
        };
    }

    return {scan: scan, build: build};
}));
