/* MyVibeHTML v0.69 */
(function() {
    var windowObject = window,
        documentObject = document,
        sourceMapApi = windowObject.MyVibeHTMLSourceMap,
        uiContracts = windowObject.MyVibeHTMLUIContracts || {},
        locationObject = location,
        setIntervalMethod = 'setInterval',
        setTimeoutMethod = 'setTimeout',
        clearIntervalMethod = 'clearInterval',
        clearTimeoutMethod = 'clearTimeout',
        encodeURIComponentMethod = 'encodeURIComponent',
        decodeURIComponentMethod = 'decodeURIComponent',
        getComputedStyleMethod = 'getComputedStyle',
        addEventListenerMethod = 'addEventListener',
        removeEventListenerMethod = 'removeEventListener',
        getAttributeMethod = 'getAttribute',
        setAttributeMethod = 'setAttribute',
        removeAttributeMethod = 'removeAttribute',
        querySelectorAllMethod = 'querySelectorAll',
        querySelectorMethod = 'querySelector',
        removeChildMethod = 'removeChild',
        appendChildMethod = 'appendChild',
        replaceChildMethod = 'replaceChild',
        cloneNodeMethod = 'cloneNode',
        insertNodeMethod = 'insertNode',
        insertBeforeMethod = 'insertBefore',
        createElementMethod = 'createElement',
        parseFromStringMethod = 'parseFromString',
        serializeToStringMethod = 'serializeToString',
        createTextNodeMethod = 'createTextNode',
        firstElementChildProperty = 'firstElementChild',
        lastElementChildProperty = 'lastElementChild',
        nextElementSiblingProperty = 'nextElementSibling',
        previousElementSiblingProperty = 'previousElementSibling',
        nextSiblingProperty = 'nextSibling',
        parentNodeProperty = 'parentNode',
        ownerDocumentProperty = 'ownerDocument',
        contentWindowProperty = 'contentWindow',
        activeElementProperty = 'activeElement',
        documentElementProperty = 'documentElement',
        childNodesProperty = 'childNodes',
        firstChildProperty = 'firstChild',
        indexOfMethod = 'indexOf',
        lastIndexOfMethod = 'lastIndexOf',
        toLowerCaseMethod = 'toLowerCase',
        charCodeAtMethod = 'charCodeAt',
        toFixedMethod = 'toFixed',
        toStringMethod = 'toString',
        substringMethod = 'substring',
        replaceMethod = 'replace',
        searchMethod = 'search',
        matchMethod = 'match',
        sliceMethod = 'slice',
        splitMethod = 'split',
        joinMethod = 'join',
        getSelectionMethod = 'getSelection',
        addRangeMethod = 'addRange',
        createRangeMethod = 'createRange',
        removeAllRangesMethod = 'removeAllRanges',
        getRangeAtMethod = 'getRangeAt',
        setStartMethod = 'setStart',
        setEndMethod = 'setEnd',
        collapseMethod = 'collapse',
        tagNameProperty = 'tagName',
        nodeTypeProperty = 'nodeType',
        classNameProperty = 'className',
        clientHeightProperty = 'clientHeight',
        disabledProperty = 'disabled',
        checkedProperty = 'checked',
        lengthProperty = 'length',
        styleProperty = 'style',
        valueProperty = 'value',
        innerHTMLProperty = 'innerHTML',
        outerHTMLProperty = 'outerHTML',
        textContentProperty = 'textContent',
        getResponseHeaderMethod = 'getResponseHeader',
        setRequestHeaderMethod = 'setRequestHeader',
        preventDefaultMethod = 'preventDefault',
        stopPropagationMethod = 'stopPropagation',
        dataTransferProperty = 'dataTransfer',
        keyCodeProperty = 'keyCode',
        displayProperty = 'display',
        opacityProperty = 'opacity',
        overflowProperty = 'overflow',
        positionProperty = 'position',
        heightProperty = 'height',
        widthProperty = 'width',
        cssFloatProperty = 'cssFloat',
        textIndentProperty = 'textIndent',
        paddingTopProperty = 'paddingTop',
        paddingLeftProperty = 'paddingLeft',
        marginTopProperty = 'marginTop',
        marginLeftProperty = 'marginLeft',
        marginRightProperty = 'marginRight',
        noneValue = 'none',
        blockValue = 'block',
        hiddenValue = 'hidden',
        absoluteValue = 'absolute',
        domContentLoadedEvent = 'DOMContentLoaded',
        clickEvent = 'click',
        focusEvent = 'focus',
        blurEvent = 'blur',
        mouseMoveEvent = 'mousemove',
        mouseDownEvent = 'mousedown',
        mouseUpEvent = 'mouseup',
        keyDownEvent = 'keydown',
        keyUpEvent = 'keyup',
        changeEvent = 'change',
        inputEvent = 'input',
        resizeEvent = 'resize',
        dataAttributePrefix = 'data-',
        productPrefix = 'myvibehtml',
        checkMarker = productPrefix + '_check',
        tokenCookieSuffix = productPrefix + '_token',
        stateCookieSuffix = productPrefix + '_state',
        settingsCookieSuffix = productPrefix + '_settings',
        recoveryCookieSuffix = productPrefix + '_recovery',
        scriptsCookieSuffix = productPrefix + '_scripts',
        stringAttribute = dataAttributePrefix + productPrefix + '-string',
        focusAttribute = dataAttributePrefix + productPrefix + '-focus',
        disabledAttribute = dataAttributePrefix + productPrefix + '-disabled',
        dragOverAttribute = dataAttributePrefix + productPrefix + '-dragover',
        dropAttribute = dataAttributePrefix + productPrefix + '-drop',
        objectAttribute = dataAttributePrefix + productPrefix + '-object',
        attributesAttribute = dataAttributePrefix + productPrefix + '-attributes',
        valueAttribute = 'myvibehtmlValue',
        tokenParameter = '&token=',
        settingsParameter = '&settings[',
        imageTagName = 'img',
        sourceAttribute = 'src',
        caretValue = 'caret',
        scriptTagName = 'script',
        iframeTagName = 'iframe',
        textareaTagName = 'textarea',
        openingScriptTag = '<script',
        closingScriptTag = '</script',
        caretMarkup = '<caret></caret>',
        openingSpanMarkup = '<span class=',
        closingSpanMarkup = '</span>',
        lineBreakMarkup = '<br>',
        appendSpanMarkup = closingSpanMarkup + lineBreakMarkup + openingSpanMarkup;
    var transport = windowObject.MyVibeHTMLTransport || {},
        writeCookie = transport.writeCookie,
        removeCookie = transport.removeCookie,
        readCookie = transport.readCookie,
        sha1 = transport.sha1,
        base64Decode = transport.base64Decode,
        base64UrlEncode = transport.base64UrlEncode,
        ajaxRequest = transport.ajaxRequest,
        generateToken = transport.generateToken,
        animateValue = function(runtimeInput8, runtimeInput9, runtimeInput10, runtimeInput11, runtimeInput12, runtimeInput13, runtimeInput14) {
            var runtimeValue15, runtimeValue16 = new Date(),
                runtimeValue17 = windowObject[setIntervalMethod](function() {
                    runtimeValue15 = (new Date() - runtimeValue16) / runtimeInput11;
                    if (runtimeValue15 < 1) runtimeInput13.call(runtimeInput8, (runtimeInput10 - runtimeInput9) * runtimeInput12(runtimeValue15) + runtimeInput9);
                    else {
                        runtimeInput13.call(runtimeInput8, runtimeInput10);
                        var animateValueValue1 = runtimeInput8.a[lengthProperty];
                        if (animateValueValue1 > 1) {
                            while (animateValueValue1--)
                                if (runtimeInput8.a[animateValueValue1] == runtimeValue17) delete runtimeInput8.a[animateValueValue1]
                        } else delete runtimeInput8.a;
                        windowObject[clearIntervalMethod](runtimeValue17);
                        if (runtimeInput14) runtimeInput14.call(runtimeInput8)
                    }
                }, 10);
            if (!runtimeInput8.a) runtimeInput8.a = [runtimeValue17];
            else runtimeInput8.a[runtimeInput8.a[lengthProperty]] = runtimeValue17
        },
        fadeIn = function(runtimeInput15, runtimeInput16) {
            if (windowObject[getComputedStyleMethod](runtimeInput15)[displayProperty] == noneValue) {
                runtimeInput15[styleProperty][opacityProperty] = '0';
                runtimeInput15[styleProperty][displayProperty] = blockValue;
                animateValue(runtimeInput15, 0, 1, 400, function(fadeInArgument1) {
                    return ((-Math.cos(fadeInArgument1 * Math.PI) / 2) + 0.5)
                }, function(fadeInArgument2) {
                    runtimeInput15[styleProperty][opacityProperty] = fadeInArgument2[toFixedMethod](1)
                }, function() {
                    runtimeInput15[styleProperty][opacityProperty] = '';
                    if (runtimeInput16) runtimeInput16.call(runtimeInput15)
                })
            }
        },
        fadeOut = function(runtimeInput17, runtimeInput18) {
            if (runtimeInput17[styleProperty][overflowProperty] != hiddenValue && windowObject[getComputedStyleMethod](runtimeInput17)[displayProperty] != noneValue) {
                animateValue(runtimeInput17, 1, 0, 300, function(fadeOutArgument1) {
                    return ((-Math.cos(fadeOutArgument1 * Math.PI) / 2) + 0.5)
                }, function(fadeOutArgument2) {
                    runtimeInput17[styleProperty][opacityProperty] = fadeOutArgument2[toFixedMethod](1)
                }, function() {
                    runtimeInput17[styleProperty][displayProperty] = noneValue;
                    runtimeInput17[styleProperty][opacityProperty] = '';
                    if (runtimeInput18) runtimeInput18.call(runtimeInput17)
                })
            }
        },
        slideDown = function(runtimeInput19, runtimeInput20) {
            if (windowObject[getComputedStyleMethod](runtimeInput19)[displayProperty] == noneValue) {
                runtimeInput19[styleProperty][opacityProperty] = '0';
                runtimeInput19[styleProperty][positionProperty] = absoluteValue;
                runtimeInput19[styleProperty][displayProperty] = blockValue;
                var runtimeValue21 = runtimeInput19[clientHeightProperty],
                    runtimeValue22 = parseInt(windowObject[getComputedStyleMethod](runtimeInput19)[paddingTopProperty]);
                runtimeInput19[styleProperty][heightProperty] = '0';
                runtimeInput19[styleProperty][positionProperty] = '';
                runtimeInput19[styleProperty][overflowProperty] = hiddenValue;
                runtimeInput19[styleProperty][marginLeftProperty] = '-' + windowObject[getComputedStyleMethod](runtimeInput19[firstElementChildProperty])[paddingLeftProperty];
                if (runtimeValue22) {
                    runtimeValue21 = runtimeValue21 - runtimeValue22;
                    animateValue(runtimeInput19, 0, runtimeValue22, 200, function(slideDownArgument1) {
                        return ((-Math.cos(slideDownArgument1 * Math.PI) / 2) + 0.5)
                    }, function(slideDownArgument2) {
                        runtimeInput19[styleProperty][paddingTopProperty] = slideDownArgument2[toFixedMethod](0) + 'px'
                    })
                }
                animateValue(runtimeInput19, 0, runtimeValue21, 200, function(slideDownArgument3) {
                    return ((-Math.cos(slideDownArgument3 * Math.PI) / 2) + 0.5)
                }, function(slideDownArgument4) {
                    runtimeInput19[styleProperty][heightProperty] = slideDownArgument4[toFixedMethod](0) + 'px'
                });
                animateValue(runtimeInput19, parseInt(runtimeInput19[styleProperty][marginLeftProperty]), 0, 400, function(slideDownArgument5) {
                    return ((-Math.cos(slideDownArgument5 * Math.PI) / 2) + 0.5)
                }, function(slideDownArgument6) {
                    runtimeInput19[styleProperty][marginLeftProperty] = slideDownArgument6[toFixedMethod](0) + 'px'
                });
                animateValue(runtimeInput19, 0, 1, 600, function(slideDownArgument7) {
                    return ((-Math.cos(slideDownArgument7 * Math.PI) / 2) + 0.5)
                }, function(slideDownArgument8) {
                    runtimeInput19[styleProperty][opacityProperty] = slideDownArgument8[toFixedMethod](1)
                }, function() {
                    runtimeInput19[styleProperty][heightProperty] = '';
                    runtimeInput19[styleProperty][marginLeftProperty] = '';
                    runtimeInput19[styleProperty][paddingTopProperty] = '';
                    runtimeInput19[styleProperty][opacityProperty] = '';
                    runtimeInput19[styleProperty][overflowProperty] = '';
                    if (runtimeInput20) runtimeInput20.call(runtimeInput19)
                })
            }
        },
        slideUp = function(runtimeInput21, runtimeInput22) {
            if (runtimeInput21[styleProperty][overflowProperty] != hiddenValue && windowObject[getComputedStyleMethod](runtimeInput21)[displayProperty] != noneValue) {
                var runtimeValue23 = runtimeInput21[clientHeightProperty],
                    runtimeValue24 = parseInt(windowObject[getComputedStyleMethod](runtimeInput21)[paddingTopProperty]);
                runtimeInput21[styleProperty][overflowProperty] = hiddenValue;
                if (runtimeValue24) {
                    runtimeValue23 = runtimeValue23 - runtimeValue24;
                    animateValue(runtimeInput21, runtimeValue24, 0, 400, function(slideUpArgument1) {
                        return ((-Math.cos(slideUpArgument1 * Math.PI) / 2) + 0.5)
                    }, function(slideUpArgument2) {
                        runtimeInput21[styleProperty][paddingTopProperty] = slideUpArgument2[toFixedMethod](0) + 'px'
                    })
                }
                animateValue(runtimeInput21, runtimeInput21[clientHeightProperty], 0, 420, function(slideUpArgument3) {
                    return ((-Math.cos(slideUpArgument3 * Math.PI) / 2) + 0.5)
                }, function(slideUpArgument4) {
                    runtimeInput21[styleProperty][heightProperty] = slideUpArgument4[toFixedMethod](0) + 'px'
                }, function() {
                    runtimeInput21[styleProperty][displayProperty] = noneValue;
                    runtimeInput21[styleProperty][opacityProperty] = '';
                    runtimeInput21[styleProperty][marginLeftProperty] = '';
                    runtimeInput21[styleProperty][heightProperty] = '';
                    runtimeInput21[styleProperty][overflowProperty] = '';
                    if (runtimeInput22) runtimeInput22.call(runtimeInput21)
                });
                animateValue(runtimeInput21, 0, parseInt('-' + windowObject[getComputedStyleMethod](runtimeInput21[firstElementChildProperty])[paddingLeftProperty]), 400, function(slideUpArgument5) {
                    return ((-Math.cos(slideUpArgument5 * Math.PI) / 2) + 0.5)
                }, function(slideUpArgument6) {
                    runtimeInput21[styleProperty][marginLeftProperty] = slideUpArgument6[toFixedMethod](0) + 'px'
                });
                animateValue(runtimeInput21, 1, 0, 200, function(slideUpArgument7) {
                    return ((-Math.cos(slideUpArgument7 * Math.PI) / 2) + 0.5)
                }, function(slideUpArgument8) {
                    runtimeInput21[styleProperty][opacityProperty] = slideUpArgument8[toFixedMethod](1)
                })
            }
        },
        showPanel = function(runtimeInput23, runtimeInput24) {
            if (windowObject[getComputedStyleMethod](runtimeInput23)[displayProperty] == noneValue) {
                runtimeInput23[styleProperty][opacityProperty] = '0';
                runtimeInput23[styleProperty][positionProperty] = absoluteValue;
                runtimeInput23[styleProperty][displayProperty] = blockValue;
                var runtimeValue25 = runtimeInput23[clientHeightProperty];
                runtimeInput23[styleProperty][heightProperty] = '0';
                runtimeInput23[styleProperty][positionProperty] = '';
                runtimeInput23[styleProperty][overflowProperty] = hiddenValue;
                animateValue(runtimeInput23, 0, runtimeValue25, 150, function(showPanelArgument1) {
                    return ((-Math.cos(showPanelArgument1 * Math.PI) / 2) + 0.5)
                }, function(showPanelArgument2) {
                    runtimeInput23[styleProperty][heightProperty] = showPanelArgument2[toFixedMethod](0) + 'px'
                });
                animateValue(runtimeInput23, 0, 1, 300, function(showPanelArgument3) {
                    return ((-Math.cos(showPanelArgument3 * Math.PI) / 2) + 0.5)
                }, function(showPanelArgument4) {
                    runtimeInput23[styleProperty][opacityProperty] = showPanelArgument4[toFixedMethod](1)
                }, function() {
                    runtimeInput23[styleProperty][heightProperty] = '';
                    runtimeInput23[styleProperty][opacityProperty] = '';
                    runtimeInput23[styleProperty][overflowProperty] = '';
                    if (runtimeInput24) runtimeInput24.call(runtimeInput23)
                })
            }
        },
        hidePanel = function(runtimeInput25, runtimeInput26) {
            if (runtimeInput25[styleProperty][overflowProperty] != hiddenValue && windowObject[getComputedStyleMethod](runtimeInput25)[displayProperty] != noneValue) {
                runtimeInput25[styleProperty][overflowProperty] = hiddenValue;
                animateValue(runtimeInput25, runtimeInput25[clientHeightProperty], 0, 200, function(hidePanelArgument1) {
                    return ((-Math.cos(hidePanelArgument1 * Math.PI) / 2) + 0.5)
                }, function(hidePanelArgument2) {
                    runtimeInput25[styleProperty][heightProperty] = hidePanelArgument2[toFixedMethod](0) + 'px'
                }, function() {
                    runtimeInput25[styleProperty][displayProperty] = noneValue;
                    runtimeInput25[styleProperty][opacityProperty] = '';
                    runtimeInput25[styleProperty][heightProperty] = '';
                    runtimeInput25[styleProperty][overflowProperty] = '';
                    if (runtimeInput26) runtimeInput26.call(runtimeInput25)
                });
                animateValue(runtimeInput25, 1, 0, 150, function(hidePanelArgument3) {
                    return ((-Math.cos(hidePanelArgument3 * Math.PI) / 2) + 0.5)
                }, function(hidePanelArgument4) {
                    runtimeInput25[styleProperty][opacityProperty] = hidePanelArgument4[toFixedMethod](1)
                })
            }
        },
        formatBytes = function(bytes) {
            var kilobyte = 1024,
                megabyte = 1024 * kilobyte,
                gigabyte = 1024 * megabyte,
                terabyte = 1024 * gigabyte;
            if (bytes < megabyte) return (bytes / kilobyte)[toFixedMethod](2) + ' KB';
            else if (bytes < gigabyte) return (bytes / megabyte)[toFixedMethod](2) + ' MB';
            else if (bytes < terabyte) return (bytes / gigabyte)[toFixedMethod](2) + ' GB';
            else return (bytes / terabyte)[toFixedMethod](2) + ' TB'
        };
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var runtimeValue1 = documentObject[querySelectorMethod]('#e');
        if (runtimeValue1) {
            runtimeValue1[addEventListenerMethod](keyDownEvent, function(event) {
                var target = event.target,
                    role = target && target[getAttributeMethod]('role');
                if ((event[keyCodeProperty] == 13 || event[keyCodeProperty] == 32) && (role == 'button' || role == 'tab')) {
                    event[preventDefaultMethod]();
                    if (target[clickEvent]) target[clickEvent]()
                }
            });
            var runtimeValue2 = runtimeValue1[querySelectorMethod]('div>div+ol li:first-child'),
                runtimeValue3 = runtimeValue1[querySelectorMethod]('div>div+ol li+li'),
                runtimeValue4 = runtimeValue1[querySelectorMethod]('div>div+ul li:first-child input'),
                runtimeValue7 = runtimeValue1[querySelectorMethod]('div>div+ul li:last-child input'),
                pageValidateButton = runtimeValue1[querySelectorMethod]('[data-page-validate]'),
                runtimeValue9 = runtimeValue1[querySelectorMethod]('div>div+ul+p samp'),
                runtimeValue10 = runtimeValue1[querySelectorAllMethod]('div>ol+ul>li>a'),
                runtimeValue11 = documentObject[querySelectorMethod]('#j'),
                serializedSource = runtimeValue11[getAttributeMethod]('data-encoding') == 'base64' ? base64Decode(runtimeValue11[textContentProperty]) : runtimeValue11[innerHTMLProperty],
                sourceDraftKey = 'myvibehtml:draft:' + locationObject.pathname + locationObject.search,
                editorTimelineKey = 'myvibehtml:timeline:' + locationObject.pathname + locationObject.search.replace(/[?&]rev=[^&]*/, ''),
                sourceDraftTimer = false,
                sourceHistoryBar = runtimeValue1[querySelectorMethod]('[data-source-history]'),
                sourceHistoryApi = {markSaved:function(){},isDirty:function(){return false}},
                readEditorTimeline = function() {
                    try {
                        var editorTimelineData = uiContracts.storageGet(windowObject, 'localStorage', editorTimelineKey),
                            editorTimelineItems = editorTimelineData ? JSON.parse(editorTimelineData) : [];
                        return Array.isArray(editorTimelineItems) ? editorTimelineItems : []
                    } catch (editorTimelineError) { return [] }
                },
                writeEditorTimeline = function(editorTimelineItems) {
                    uiContracts.storageSet(windowObject, 'localStorage', editorTimelineKey, JSON.stringify(editorTimelineItems))
                },
                recordEditorTimeline = function(editorTimelineSource) {
                    if (typeof editorTimelineSource != 'string' || !editorTimelineSource) return;
                    var editorTimelineItems = readEditorTimeline(),
                        editorTimelineLast = editorTimelineItems[0];
                    if (editorTimelineLast && editorTimelineLast.source === editorTimelineSource) return;
                    editorTimelineItems.unshift({source:editorTimelineSource,updated:Date.now(),label:documentObject.documentElement.lang == 'ru' ? 'Изменение' : 'Change'});
                    editorTimelineItems = editorTimelineItems.slice(0, 40);
                    writeEditorTimeline(editorTimelineItems)
                },
                writeSourceDraft = function(sourceDraftValue) {
                    uiContracts.storageSet(windowObject, 'localStorage', sourceDraftKey, JSON.stringify({source:sourceDraftValue,updated:Date.now()}));
                    recordEditorTimeline(sourceDraftValue)
                },
                readSourceDraft = function() {
                    try {
                        var sourceDraftValue = uiContracts.storageGet(windowObject, 'localStorage', sourceDraftKey),
                            sourceDraftData = sourceDraftValue ? JSON.parse(sourceDraftValue) : null;
                        return sourceDraftData && typeof sourceDraftData.source == 'string' ? sourceDraftData.source : null
                    } catch (sourceDraftError) { return null }
                },
                clearSourceDraft = function() {
                    uiContracts.storageRemove(windowObject, 'localStorage', sourceDraftKey)
                },
                validationDialog = null,
                validationDialogFocusCleanup = null,
                closeValidationDialog = function() {
                    if (!validationDialog) return;
                    validationDialog.hidden = true;
                    if (validationDialogFocusCleanup) validationDialogFocusCleanup(), validationDialogFocusCleanup = null
                },
                validationDialogOpen = function(candidateSource, baselineSource, saveCallback, validationOptions) {
                    var validationText = function(attribute, fallback) {
                            return pageValidateButton && pageValidateButton[getAttributeMethod]('data-' + attribute) || fallback
                        },
                        validationDocument = validationOptions && typeof validationOptions.diff == 'string' ? null : new DOMParser()[parseFromStringMethod](candidateSource, 'text/html'),
                        validationIssues = validationOptions && validationOptions.issues ? validationOptions.issues : [],
                        validationIds = {},
                        validationNodes = validationDocument ? validationDocument[querySelectorAllMethod]('*') : [],
                        validationIndex = 0,
                        validationMessage = function(attribute, russian, english) { return validationText(attribute, documentObject.documentElement.lang == 'ru' ? russian : english) };
                    if (!validationOptions) {
                        if (!candidateSource || !candidateSource.trim()) validationIssues.push({level:'error',text:validationMessage('validation-empty-source', 'Исходный код пуст', 'Source is empty')});
                        for (; validationIndex < validationNodes[lengthProperty]; validationIndex++) {
                            var validationNode = validationNodes[validationIndex],
                                validationNodeId = validationNode[getAttributeMethod]('id'),
                                validationNodeTag = validationNode[tagNameProperty][toLowerCaseMethod]();
                            if (validationNodeId) {
                                if (validationIds[validationNodeId]) validationIssues.push({level:'error',text:validationMessage('validation-duplicate-id', 'Повторяющийся id', 'Duplicate id') + ': #' + validationNodeId});
                                validationIds[validationNodeId] = true
                            }
                            for (var validationAttributeIndex = 0; validationAttributeIndex < validationNode.attributes[lengthProperty]; validationAttributeIndex++) {
                                var validationAttribute = validationNode.attributes[validationAttributeIndex];
                                if ((validationAttribute.name == 'href' || validationAttribute.name == 'src' || validationAttribute.name == 'action') && /^(?:javascript|vbscript):/i.test(validationAttribute.value)) validationIssues.push({level:'error',text:validationMessage('validation-unsafe-url', 'Небезопасный URL в ', 'Unsafe URL in ') + validationNodeTag + '[' + validationAttribute.name + ']'});
                            }
                            if (validationNodeTag == 'img' && !validationNode.hasAttribute('alt')) validationIssues.push({level:'warning',text:validationMessage('validation-image-alt', 'Изображение без атрибута alt', 'Image without alt attribute')});
                        }
                        if (!validationDocument.querySelector('html')) validationIssues.push({level:'warning',text:validationMessage('validation-html', 'Отсутствует элемент html', 'Missing html element')});
                        var validationHtml = validationDocument.querySelector('html'),
                            validationTitle = validationDocument.querySelector('title'),
                            validationDescription = validationDocument.querySelector('meta[name="description"]'),
                            validationViewport = validationDocument.querySelector('meta[name="viewport"]'),
                            validationHeadings = validationDocument.querySelectorAll('h1'),
                            validationHeadingNodes = validationDocument.querySelectorAll('h1,h2,h3,h4,h5,h6'),
                            validationLinks = validationDocument.querySelectorAll('a'),
                            validationInteractiveNodes = validationDocument.querySelectorAll('button,a,input,select,textarea'),
                            validationFormControls = validationDocument.querySelectorAll('input,select,textarea'),
                            validationResourceCount = validationDocument.querySelectorAll('img,script,link,iframe,video,audio').length,
                            validationLabelledbyNodes = validationDocument.querySelectorAll('[aria-labelledby]');
                        if (!validationTitle) validationIssues.push({level:'warning',text:validationMessage('validation-title', 'Отсутствует элемент title', 'Missing title element')});
                        else if (!(validationTitle.textContent || '').replace(/^\s+|\s+$/g, '')) validationIssues.push({level:'warning',text:validationMessage('validation-empty-title', 'Заголовок title пустой', 'Title is empty')});
                        if (!validationHtml || !validationHtml.getAttribute('lang')) validationIssues.push({level:'warning',text:validationMessage('validation-missing-lang', 'Отсутствует атрибут lang', 'Missing lang attribute')});
                        if (!validationDescription) validationIssues.push({level:'warning',text:validationMessage('validation-description', 'Отсутствует meta description', 'Missing meta description')});
                        if (!validationViewport) validationIssues.push({level:'warning',text:validationMessage('validation-viewport', 'Отсутствует meta viewport', 'Missing meta viewport')});
                        if (validationHeadings.length != 1) validationIssues.push({level:'warning',text:validationMessage('validation-h1', 'Страница должна содержать один h1', 'The page should contain one h1')});
                        for (validationIndex = 0; validationIndex < validationLinks.length; validationIndex++) if (!validationLinks[validationIndex].hasAttribute('href')) validationIssues.push({level:'warning',text:validationMessage('validation-links', 'Внутренняя ссылка без href', 'Internal link has no href')});
                        for (validationIndex = 0; validationIndex < validationInteractiveNodes.length; validationIndex++) {
                            var validationInteractiveNode = validationInteractiveNodes[validationIndex],
                                validationInteractiveTag = validationInteractiveNode[tagNameProperty][toLowerCaseMethod](),
                                validationInteractiveType = validationInteractiveNode.getAttribute('type');
                            if (validationInteractiveTag == 'input' && validationInteractiveType == 'hidden') continue;
                            var validationAccessibleName = (validationInteractiveNode.getAttribute('aria-label') || validationInteractiveNode.getAttribute('aria-labelledby') || validationInteractiveNode.getAttribute('title') || validationInteractiveNode[textContentProperty] || validationInteractiveNode.getAttribute('alt') || validationInteractiveNode.getAttribute('value') || '').replace(/^\s+|\s+$/g, '');
                            if (!validationAccessibleName && validationInteractiveTag == 'a') {
                                var validationLinkImage = validationInteractiveNode.querySelector('img[alt]');
                                validationAccessibleName = validationLinkImage && validationLinkImage.getAttribute('alt') || ''
                            }
                            if (!validationAccessibleName) validationIssues.push({level:'warning',text:validationMessage('validation-accessible-name', 'Интерактивный элемент без доступного имени', 'Interactive element has no accessible name')});
                        }
                        for (validationIndex = 0; validationIndex < validationLabelledbyNodes.length; validationIndex++) {
                            var validationLabelledbyReferences = (validationLabelledbyNodes[validationIndex].getAttribute('aria-labelledby') || '').replace(/^\s+|\s+$/g, '').split(/\s+/),
                                validationLabelledbyReferenceIndex;
                            for (validationLabelledbyReferenceIndex = 0; validationLabelledbyReferenceIndex < validationLabelledbyReferences.length; validationLabelledbyReferenceIndex++) if (validationLabelledbyReferences[validationLabelledbyReferenceIndex] && !validationDocument.getElementById(validationLabelledbyReferences[validationLabelledbyReferenceIndex])) validationIssues.push({level:'warning',text:validationMessage('validation-aria-labelledby', 'aria-labelledby ссылается на отсутствующий элемент', 'aria-labelledby references a missing element') + ': ' + validationLabelledbyReferences[validationLabelledbyReferenceIndex]});
                        }
                        for (validationIndex = 0; validationIndex < validationFormControls.length; validationIndex++) {
                            var validationFormControl = validationFormControls[validationIndex],
                                validationFormControlType = validationFormControl.getAttribute('type'),
                                validationHasLabel = validationFormControl.getAttribute('aria-label') || validationFormControl.getAttribute('aria-labelledby'),
                                validationFormControlId = validationFormControl.getAttribute('id');
                            if (validationFormControlType == 'hidden') continue;
                            if (!validationHasLabel && validationFormControl.parentNode && validationFormControl.parentNode[tagNameProperty] && validationFormControl.parentNode[tagNameProperty][toLowerCaseMethod]() == 'label') validationHasLabel = true;
                            if (!validationHasLabel && validationFormControlId) {
                                var validationLabels = validationDocument.querySelectorAll('label');
                                for (var validationLabelIndex = 0; validationLabelIndex < validationLabels.length; validationLabelIndex++) if (validationLabels[validationLabelIndex].getAttribute('for') == validationFormControlId) { validationHasLabel = true; break }
                            }
                            if (!validationHasLabel) validationIssues.push({level:'warning',text:validationMessage('validation-form-label', 'Поле формы без подписи', 'Form control has no label')});
                        }
                        var validationPreviousHeadingLevel = 0;
                        for (validationIndex = 0; validationIndex < validationHeadingNodes.length; validationIndex++) {
                            var validationHeadingLevel = parseInt(validationHeadingNodes[validationIndex][tagNameProperty].charAt(1), 10);
                            if (validationPreviousHeadingLevel && validationHeadingLevel > validationPreviousHeadingLevel + 1) validationIssues.push({level:'warning',text:validationMessage('validation-heading-order', 'Нарушена последовательность заголовков', 'Heading levels skip a step')});
                            validationPreviousHeadingLevel = validationHeadingLevel
                        }
                        if (validationResourceCount > 40 || String(candidateSource || '').split('\n').length > 1000) validationIssues.push({level:'warning',text:validationMessage('validation-heavy', 'Страница содержит слишком много ресурсов или строк', 'The page contains too many resources or lines')});
                    }
                    if (!validationDialog) {
                        validationDialog = documentObject[createElementMethod]('aside');
                        validationDialog.id = 'myvibehtml-validation-dialog';
                        validationDialog.setAttribute('role', 'dialog');
                        validationDialog.setAttribute('aria-modal', 'true');
                        validationDialog[innerHTMLProperty] = '<div class="myvibehtml-validation-header"><h2></h2><button type="button" data-validation-close></button></div><p data-validation-summary></p><ul data-validation-issues></ul><h3></h3><pre data-validation-diff></pre><div class="myvibehtml-validation-footer"><button type="button" data-validation-cancel></button><button type="button" data-validation-confirm></button></div>';
                        documentObject.body[appendChildMethod](validationDialog);
                        validationDialog[querySelectorMethod]('[data-validation-close]')[addEventListenerMethod](clickEvent, closeValidationDialog);
                        validationDialog[querySelectorMethod]('[data-validation-cancel]')[addEventListenerMethod](clickEvent, closeValidationDialog);
                    }
                    var validationErrorCount = 0,
                        validationWarningCount = 0,
                        validationIssueList = validationDialog[querySelectorMethod]('[data-validation-issues]'),
                        validationSummary = validationDialog[querySelectorMethod]('[data-validation-summary]'),
                        validationDiff = validationDialog[querySelectorMethod]('[data-validation-diff]'),
                        validationLines = [],
                        baselineLines = String(baselineSource || '').split('\n'),
                        candidateLines = String(candidateSource || '').split('\n'),
                        validationLineCount = Math.max(baselineLines[lengthProperty], candidateLines[lengthProperty]),
                        validationLineIndex = 0,
                        validationConfirm = validationDialog[querySelectorMethod]('[data-validation-confirm]');
                    validationIssueList[innerHTMLProperty] = '';
                    for (validationIndex = 0; validationIndex < validationIssues[lengthProperty]; validationIndex++) {
                        var validationIssueItem = documentObject[createElementMethod]('li');
                        validationIssueItem[textContentProperty] = validationIssues[validationIndex].text;
                        validationIssueItem.setAttribute('data-level', validationIssues[validationIndex].level);
                        validationIssueList[appendChildMethod](validationIssueItem);
                        if (validationIssues[validationIndex].level == 'error') validationErrorCount++; else validationWarningCount++
                    }
                    if (validationOptions && typeof validationOptions.diff == 'string') validationLines = validationOptions.diff.split('\n').slice(0, 120); else {
                        for (; validationLineIndex < validationLineCount && validationLines[lengthProperty] < 120; validationLineIndex++) {
                            var validationOldLine = baselineLines[validationLineIndex], validationNewLine = candidateLines[validationLineIndex];
                            if (validationOldLine === validationNewLine) validationLines.push('  ' + (validationNewLine || ''));
                            else {
                                if (typeof validationOldLine != 'undefined') validationLines.push('- ' + validationOldLine);
                                if (typeof validationNewLine != 'undefined') validationLines.push('+ ' + validationNewLine)
                            }
                        }
                        if (validationLineIndex < validationLineCount) validationLines.push('…');
                    }
                    validationDialog[querySelectorMethod]('h2')[textContentProperty] = validationOptions && validationOptions.title || validationText('validation-dialog', 'Check before saving');
                    validationDialog[querySelectorMethod]('h3')[textContentProperty] = validationText('validation-issues', 'Notes');
                    validationDialog[querySelectorMethod]('[data-validation-close]')[textContentProperty] = '×';
                    validationDialog[querySelectorMethod]('[data-validation-cancel]')[textContentProperty] = validationText('validation-close', 'Close');
                    validationConfirm[textContentProperty] = validationOptions && validationOptions.confirm || validationText('validation-save', 'Save anyway');
                    validationConfirm.hidden = !saveCallback;
                    var validationScore = Math.max(0, 100 - validationErrorCount * 25 - validationWarningCount * 5),
                        validationRussian = documentObject.documentElement.lang == 'ru',
                        validationErrorLabel = validationRussian ? (validationErrorCount == 1 ? ' ошибка' : ' ошибки') : (validationErrorCount == 1 ? ' error' : ' errors'),
                        validationWarningLabel = validationRussian ? (validationWarningCount == 1 ? ' предупреждение' : ' предупреждения') : (validationWarningCount == 1 ? ' warning' : ' warnings'),
                        validationSummaryText = validationOptions && validationOptions.summary || (validationErrorCount ? validationErrorCount + validationErrorLabel + ', ' + validationWarningCount + validationWarningLabel : validationWarningCount ? validationWarningCount + validationWarningLabel + ' — ' + validationText('validation-clean', 'No critical problems found') : validationText('validation-clean', 'No critical problems found'));
                    validationSummary[textContentProperty] = validationSummaryText + ' · ' + validationMessage('validation-score', 'Оценка', 'Score') + ': ' + validationScore + '/100';
                    validationDiff[textContentProperty] = validationLines[lengthProperty] ? validationLines.join('\n') : validationOptions && validationOptions.noChanges || validationMessage('validation-no-changes', 'Изменений нет', 'No changes');
                    validationConfirm.onclick = saveCallback ? function() { closeValidationDialog(); saveCallback() } : null;
                    validationDialog.hidden = false;
                    if (validationDialogFocusCleanup) validationDialogFocusCleanup();
                    validationDialogFocusCleanup = uiContracts.focusTrap ? uiContracts.focusTrap(validationDialog) : null;
                    validationDialog[querySelectorMethod]('[data-validation-close]')[focusEvent]()
                },
                initializeVisualEditor = function() {
                    var runtimeValue18 = runtimeValue1[querySelectorMethod]('div>ul+div'),
                        runtimeValue19 = runtimeValue18[firstElementChildProperty],
                        runtimeValue20 = runtimeValue19[getAttributeMethod](dataAttributePrefix + 'ab'),
                        runtimeValue26 = runtimeValue19[nextElementSiblingProperty],
                        runtimeValue62 = runtimeValue26[firstElementChildProperty],
                        runtimeValue63 = runtimeValue62[nextElementSiblingProperty],
                        runtimeValue64 = runtimeValue63[nextElementSiblingProperty],
                        runtimeValue65 = runtimeValue64[nextElementSiblingProperty],
                        runtimeValue66 = runtimeValue65[nextElementSiblingProperty],
                        runtimeValue67 = runtimeValue26[nextElementSiblingProperty],
                        runtimeValue68 = runtimeValue67[firstElementChildProperty][firstElementChildProperty][nextElementSiblingProperty],
                        runtimeValue69 = runtimeValue68[firstElementChildProperty][innerHTMLProperty],
                        runtimeValue70 = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cd')[splitMethod](','),
                        runtimeValue71 = 'input,button,textarea,select,iframe,svg,canvas,object,video,audio',
                        contextMenu = null,
                        contextTarget = null,
                        contextMenuPreviousFocus = null,
                        styleInspector = null,
                        styleInspectorTarget = null,
                        styleInspectorFields = null,
                        markupInspectorFields = null,
                        styleInspectorError = null,
                        designTokenFieldset = null,
                        designTokenNameField = null,
                        designTokenValueField = null,
                        styleInspectorResizeHandle = null,
                        styleInspectorResizeState = null,
                        mediaPicker = null,
                        mediaPickerTarget = null,
                        blockLibraryPanel = null,
                        blockLibraryFocusCleanup = null,
                        closeBlockLibrary = function() {
                            if (!blockLibraryPanel) return;
                            blockLibraryPanel.hidden = true;
                            blockLibraryPanel[setAttributeMethod]('aria-hidden', 'true');
                            if (blockLibraryFocusCleanup) blockLibraryFocusCleanup(), blockLibraryFocusCleanup = null
                        },
                        blockLibraryButton = null,
                        componentLinkAttribute = 'data-myvibe-component-id',
                        sourceMapState = null,
                        structuralTagOptions = ['article', 'aside', 'blockquote', 'button', 'code', 'div', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'label', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'span', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'],
                        structuralVoidTags = '|area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr|',
                        getContextNode = function(initializeVisualEditorArgument1) {
                            for (var visualEditorValue2 = initializeVisualEditorArgument1; visualEditorValue2 && visualEditorValue2 != runtimeValue127.body; visualEditorValue2 = visualEditorValue2[parentNodeProperty]) {
                                if (visualEditorValue2.realNode) visualEditorValue2 = visualEditorValue2.realNode;
                                if (visualEditorValue2[tagNameProperty] && visualEditorValue2[tagNameProperty][toLowerCaseMethod]() != scriptTagName && visualEditorValue2[tagNameProperty][toLowerCaseMethod]() != 'style') return visualEditorValue2
                            }
                        },
                        getSectionNode = function(initializeVisualEditorArgument2) {
                            for (var visualEditorValue3 = initializeVisualEditorArgument2; visualEditorValue3 && visualEditorValue3 != runtimeValue127.body; visualEditorValue3 = visualEditorValue3[parentNodeProperty]) {
                                var visualEditorValue4 = visualEditorValue3[tagNameProperty] && visualEditorValue3[tagNameProperty][toLowerCaseMethod]();
                                if (visualEditorValue4 && '|main|section|header|footer|nav|aside|article|'.indexOf('|' + visualEditorValue4 + '|') !== -1) return visualEditorValue3
                            }
                            return initializeVisualEditorArgument2
                        },
                        getBlockNode = function(initializeVisualEditorArgument3) {
                            var visualEditorValue5 = initializeVisualEditorArgument3;
                            while (visualEditorValue5 && visualEditorValue5[parentNodeProperty] && visualEditorValue5[parentNodeProperty] != runtimeValue127.body) {
                                if (visualEditorValue5[parentNodeProperty][tagNameProperty] && '|main|section|header|footer|nav|aside|article|'.indexOf('|' + visualEditorValue5[parentNodeProperty][tagNameProperty][toLowerCaseMethod]() + '|') !== -1) return visualEditorValue5;
                                visualEditorValue5 = visualEditorValue5[parentNodeProperty]
                            }
                            return visualEditorValue5 || initializeVisualEditorArgument3
                        },
                        clearContextSelection = function() {
                            var visualEditorValue1 = runtimeValue127[querySelectorAllMethod]('[data-myvibehtml-selection]');
                            for (var visualEditorValue6 = 0, visualEditorValue7 = visualEditorValue1[lengthProperty]; visualEditorValue6 < visualEditorValue7; visualEditorValue6++) visualEditorValue1[visualEditorValue6][removeAttributeMethod]('data-myvibehtml-selection')
                        },
                        selectContextNode = function(initializeVisualEditorArgument4, initializeVisualEditorArgument5) {
                            if (!initializeVisualEditorArgument4) return;
                            clearContextSelection();
                            initializeVisualEditorArgument4[setAttributeMethod]('data-myvibehtml-selection', initializeVisualEditorArgument5);
                            runtimeValue106.call(initializeVisualEditorArgument4);
                            if (styleInspector && !styleInspector.hidden) renderStyleInspector(initializeVisualEditorArgument4)
                        },
                        hideContextMenu = function() {
                            if (contextMenu) {
                                contextMenu[styleProperty][displayProperty] = noneValue;
                                contextMenu[setAttributeMethod]('aria-hidden', 'true');
                                if (contextMenuPreviousFocus && contextMenuPreviousFocus[focusEvent]) contextMenuPreviousFocus[focusEvent]();
                                contextMenuPreviousFocus = null
                            }
                        },
                        getMediaTarget = function(initializeVisualEditorArgument6) {
                            for (var visualEditorValue7 = initializeVisualEditorArgument6; visualEditorValue7 && visualEditorValue7 != runtimeValue127.body; visualEditorValue7 = visualEditorValue7[parentNodeProperty]) {
                                if (visualEditorValue7.realNode) visualEditorValue7 = visualEditorValue7.realNode;
                                if (visualEditorValue7[tagNameProperty] && (visualEditorValue7[tagNameProperty][toLowerCaseMethod]() == imageTagName || visualEditorValue7[tagNameProperty][toLowerCaseMethod]() == 'svg')) return visualEditorValue7
                            }
                            return null
                        },
                        isMediaTarget = function(initializeVisualEditorArgument7) {
                            return !!getMediaTarget(initializeVisualEditorArgument7)
                        },
                        showMediaReplaceError = function() {
                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bq') || 'Не удалось заменить изображение';
                            runtimeValue9[classNameProperty] = 'd';
                            fadeIn(runtimeValue9)
                        },
                        sanitizeInlineSvg = function(initializeVisualEditorArgument7) {
                            var visualEditorValue8 = new DOMParser()[parseFromStringMethod](initializeVisualEditorArgument7, 'image/svg+xml'),
                                visualEditorValue9 = visualEditorValue8[documentElementProperty];
                            if (!visualEditorValue9 || visualEditorValue9[tagNameProperty][toLowerCaseMethod]() != 'svg' || visualEditorValue8[querySelectorMethod]('parsererror')) return false;
                            var visualEditorValue10 = [visualEditorValue9];
                            Array.prototype.push.apply(visualEditorValue10, visualEditorValue9[querySelectorAllMethod]('*'));
                            for (var visualEditorValue11 = 0, visualEditorValue12 = visualEditorValue10[lengthProperty]; visualEditorValue11 < visualEditorValue12; visualEditorValue11++) {
                                var visualEditorValue13 = visualEditorValue10[visualEditorValue11];
                                if (visualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'script' || visualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'foreignobject' || visualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'iframe' || visualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'object' || visualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'embed' || visualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'style') {
                                    if (visualEditorValue13[parentNodeProperty]) visualEditorValue13[parentNodeProperty][removeChildMethod](visualEditorValue13);
                                    continue
                                }
                                for (var visualEditorValue14 = visualEditorValue13.attributes[lengthProperty] - 1; visualEditorValue14 >= 0; visualEditorValue14--) {
                                    var visualEditorValue15 = visualEditorValue13.attributes[visualEditorValue14],
                                        visualEditorValue16 = visualEditorValue15.name[toLowerCaseMethod](),
                                        visualEditorValue17 = visualEditorValue15.value;
                                    if (visualEditorValue16[indexOfMethod]('on') === 0 || (visualEditorValue16 == 'href' || visualEditorValue16 == 'xlink:href' || visualEditorValue16 == 'src') && /^(?:javascript|vbscript):/i.test(visualEditorValue17) || visualEditorValue16 == 'style' && /(?:javascript|expression)\s*:|url\s*\(\s*(?:javascript|data:text\/html)/i.test(visualEditorValue17)) visualEditorValue13[removeAttributeMethod](visualEditorValue15.name)
                                }
                            }
                            return new XMLSerializer()[serializeToStringMethod](visualEditorValue9)
                        },
                        replaceInlineSvg = function(initializeVisualEditorArgument8, initializeVisualEditorArgument9) {
                            var visualEditorValue18 = new FileReader();
                            visualEditorValue18.onload = function() {
                                var visualEditorValue19 = sanitizeInlineSvg(this.result);
                                if (!visualEditorValue19) {
                                    showMediaReplaceError();
                                    return
                                }
                                var visualEditorValue20 = getStyleSourceRange(initializeVisualEditorArgument8),
                                    visualEditorValue21 = initializeVisualEditorArgument8[parentNodeProperty];
                                if (!visualEditorValue20 || !visualEditorValue21) {
                                    showMediaReplaceError();
                                    return
                                }
                                var visualEditorValue22 = runtimeValue127[createElementMethod]('div');
                                visualEditorValue22[innerHTMLProperty] = visualEditorValue19;
                                var visualEditorValue23 = visualEditorValue22[firstElementChildProperty];
                                if (!visualEditorValue23 || visualEditorValue23[tagNameProperty][toLowerCaseMethod]() != 'svg') {
                                    showMediaReplaceError();
                                    return
                                }
                                visualEditorValue21[replaceChildMethod](visualEditorValue23, initializeVisualEditorArgument8);
                                serializedSource = serializedSource[sliceMethod](0, visualEditorValue20[0]) + visualEditorValue19 + serializedSource[sliceMethod](visualEditorValue20[1]);
                                runtimeValue11[innerHTMLProperty] = serializedSource;
                                runtimeValue4[disabledProperty] = false;
                                mediaPickerTarget = visualEditorValue23;
                                runtimeValue106.call(visualEditorValue23);
                                runtimeValue75();
                                runtimeValue4[disabledProperty] = false
                            };
                            visualEditorValue18.onerror = showMediaReplaceError;
                            visualEditorValue18.readAsText(initializeVisualEditorArgument9)
                        },
                        replaceMediaFile = function(initializeVisualEditorArgument10, initializeVisualEditorArgument11) {
                            var visualEditorValue24 = initializeVisualEditorArgument10[tagNameProperty][toLowerCaseMethod]();
                            if (visualEditorValue24 == imageTagName) runtimeValue114.call(initializeVisualEditorArgument10, {preventDefault: function() {}, dataTransfer: {files: [initializeVisualEditorArgument11], types: ['Files']}});
                            else if (visualEditorValue24 == 'svg') replaceInlineSvg(initializeVisualEditorArgument10, initializeVisualEditorArgument11)
                        },
                        openMediaPicker = function(initializeVisualEditorArgument12) {
                            if (!isMediaTarget(initializeVisualEditorArgument12)) return;
                            if (!mediaPicker) {
                                mediaPicker = documentObject[createElementMethod]('input');
                                mediaPicker.type = 'file';
                                mediaPicker.hidden = true;
                                mediaPicker[setAttributeMethod]('aria-hidden', 'true');
                                mediaPicker[addEventListenerMethod](changeEvent, function() {
                                    var visualEditorValue25 = this.files && this.files[0];
                                    this.value = '';
                                    if (visualEditorValue25 && mediaPickerTarget) replaceMediaFile(mediaPickerTarget, visualEditorValue25)
                                });
                                documentObject.body[appendChildMethod](mediaPicker)
                            }
                            mediaPickerTarget = initializeVisualEditorArgument12;
                            mediaPicker.accept = initializeVisualEditorArgument12[tagNameProperty][toLowerCaseMethod]() == 'svg' ? 'image/svg+xml,.svg' : 'image/*,.svg';
                            mediaPicker.click()
                        },
                        readBlockLibrary = function() {
                            try {
                                var blockLibraryData = uiContracts.storageGet(windowObject, 'localStorage', productPrefix + ':blocks'),
                                    blockLibraryItems = blockLibraryData ? JSON.parse(blockLibraryData) : [];
                                if (!Array.isArray(blockLibraryItems)) return [];
                                for (var blockLibraryIndex = 0; blockLibraryIndex < blockLibraryItems[lengthProperty]; blockLibraryIndex++) {
                                    if (!blockLibraryItems[blockLibraryIndex].id) blockLibraryItems[blockLibraryIndex].id = 'component-' + blockLibraryIndex;
                                    if (!blockLibraryItems[blockLibraryIndex].type) blockLibraryItems[blockLibraryIndex].type = 'component'
                                }
                                return blockLibraryItems
                            } catch (blockLibraryError) {
                                if (uiContracts.storageStatus) uiContracts.storageStatus('read');
                                return []
                            }
                        },
                        writeBlockLibrary = function(blockLibraryItems) {
                            try {
                                uiContracts.storageSet(windowObject, 'localStorage', productPrefix + ':blocks', JSON.stringify(blockLibraryItems))
                            } catch (blockLibraryError) { if (uiContracts.storageStatus) uiContracts.storageStatus('write') }
                        },
                        sanitizeBlockMarkup = function(blockMarkup) {
                            var blockMarkupDocument = new DOMParser()[parseFromStringMethod]('<div>' + blockMarkup + '</div>', 'text/html'),
                                blockMarkupRoot = blockMarkupDocument.body && blockMarkupDocument.body[firstElementChildProperty];
                            if (!blockMarkupRoot) return '';
                            var blockMarkupForbidden = blockMarkupRoot[querySelectorAllMethod]('script,style,iframe,object,embed,foreignobject');
                            for (var blockMarkupIndex = 0; blockMarkupIndex < blockMarkupForbidden[lengthProperty]; blockMarkupIndex++) blockMarkupForbidden[blockMarkupIndex][parentNodeProperty][removeChildMethod](blockMarkupForbidden[blockMarkupIndex]);
                            var blockMarkupElements = blockMarkupRoot[querySelectorAllMethod]('*');
                            for (var blockMarkupElementIndex = 0; blockMarkupElementIndex < blockMarkupElements[lengthProperty]; blockMarkupElementIndex++) {
                                var blockMarkupElement = blockMarkupElements[blockMarkupElementIndex];
                                for (var blockMarkupAttributeIndex = blockMarkupElement.attributes[lengthProperty] - 1; blockMarkupAttributeIndex >= 0; blockMarkupAttributeIndex--) {
                                    var blockMarkupAttribute = blockMarkupElement.attributes[blockMarkupAttributeIndex],
                                        blockMarkupAttributeName = blockMarkupAttribute.name[toLowerCaseMethod]();
                                    if (blockMarkupAttributeName[indexOfMethod]('data-myvibehtml-') === 0 || blockMarkupAttributeName[indexOfMethod]('on') === 0 || ((blockMarkupAttributeName == 'href' || blockMarkupAttributeName == 'src') && /^(?:javascript|vbscript):/i.test(blockMarkupAttribute.value))) blockMarkupElement[removeAttributeMethod](blockMarkupAttribute.name)
                                }
                            }
                            return blockMarkupRoot[innerHTMLProperty]
                        },
                        reloadVisualDocument = function() {
                            runtimeValue127.open();
                            runtimeValue127.write(runtimeValue117(serializedSource));
                            runtimeValue127.close();
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                            runtimeValue115();
                            runtimeValue75()
                        },
                        syncLinkedComponentInstances = function(componentId, componentHtml) {
                            if (!componentId || !componentHtml) return false;
                            var componentMarkup = sanitizeBlockMarkup(componentHtml),
                                componentMarkupContainer = runtimeValue127[createElementMethod]('div');
                            componentMarkupContainer[innerHTMLProperty] = componentMarkup;
                            var componentNode = componentMarkupContainer[firstElementChildProperty];
                            if (!componentNode) return false;
                            componentNode[setAttributeMethod](componentLinkAttribute, componentId);
                            var linkedNodes = runtimeValue127[querySelectorAllMethod]('[' + componentLinkAttribute + ']'),
                                linkedReplacements = [];
                            for (var linkedNodeIndex = 0; linkedNodeIndex < linkedNodes[lengthProperty]; linkedNodeIndex++) {
                                var linkedNode = linkedNodes[linkedNodeIndex];
                                if (linkedNode[getAttributeMethod](componentLinkAttribute) != componentId) continue;
                                var linkedStart = runtimeValue93(linkedNode),
                                    linkedEnd = runtimeValue94(linkedNode);
                                if (typeof linkedStart == 'number' && typeof linkedEnd == 'number') linkedReplacements.push({node:linkedNode,start:linkedStart,end:linkedEnd,markup:componentNode[outerHTMLProperty]})
                            }
                            if (!linkedReplacements[lengthProperty]) return false;
                            linkedReplacements.sort(function(leftReplacement, rightReplacement) { return rightReplacement.start - leftReplacement.start });
                            for (var linkedReplacementIndex = 0; linkedReplacementIndex < linkedReplacements[lengthProperty]; linkedReplacementIndex++) {
                                var linkedReplacement = linkedReplacements[linkedReplacementIndex];
                                serializedSource = serializedSource[sliceMethod](0, linkedReplacement.start) + linkedReplacement.markup + serializedSource[sliceMethod](linkedReplacement.end)
                            }
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            runtimeValue11[setAttributeMethod]('data-cu', '1');
                            writeSourceDraft(serializedSource);
                            runtimeValue4[disabledProperty] = false;
                            reloadVisualDocument();
                            return true
                        },
                        syncAllLinkedComponentInstances = function() {
                            var blockLibraryItems = readBlockLibrary(),
                                componentMarkupById = {},
                                linkedNodes = runtimeValue127[querySelectorAllMethod]('[' + componentLinkAttribute + ']'),
                                linkedReplacements = [];
                            for (var blockLibraryIndex = 0; blockLibraryIndex < blockLibraryItems[lengthProperty]; blockLibraryIndex++) {
                                if (blockLibraryItems[blockLibraryIndex].id && blockLibraryItems[blockLibraryIndex].html) componentMarkupById[blockLibraryItems[blockLibraryIndex].id] = sanitizeBlockMarkup(blockLibraryItems[blockLibraryIndex].html)
                            }
                            for (var linkedNodeIndex = 0; linkedNodeIndex < linkedNodes[lengthProperty]; linkedNodeIndex++) {
                                var linkedNode = linkedNodes[linkedNodeIndex],
                                    linkedComponentId = linkedNode[getAttributeMethod](componentLinkAttribute),
                                    linkedMarkup = componentMarkupById[linkedComponentId],
                                    linkedMarkupContainer = runtimeValue127[createElementMethod]('div'),
                                    linkedChanged = false;
                                if (linkedMarkup) {
                                    linkedMarkupContainer[innerHTMLProperty] = linkedMarkup;
                                    var linkedComponentNode = linkedMarkupContainer[firstElementChildProperty];
                                    if (linkedComponentNode) {
                                        linkedComponentNode[setAttributeMethod](componentLinkAttribute, linkedComponentId);
                                        linkedMarkup = linkedComponentNode[outerHTMLProperty];
                                        linkedChanged = linkedMarkup != linkedNode[outerHTMLProperty]
                                    }
                                } else {
                                    linkedNode[removeAttributeMethod](componentLinkAttribute);
                                    linkedMarkup = linkedNode[outerHTMLProperty];
                                    linkedChanged = true
                                }
                                if (!linkedMarkup || !linkedChanged) continue;
                                var linkedStart = runtimeValue93(linkedNode),
                                    linkedEnd = runtimeValue94(linkedNode);
                                if (typeof linkedStart == 'number' && typeof linkedEnd == 'number') linkedReplacements.push({start:linkedStart,end:linkedEnd,markup:linkedMarkup})
                            }
                            if (!linkedReplacements[lengthProperty]) return false;
                            linkedReplacements.sort(function(leftReplacement, rightReplacement) { return rightReplacement.start - leftReplacement.start });
                            for (var linkedReplacementIndex = 0; linkedReplacementIndex < linkedReplacements[lengthProperty]; linkedReplacementIndex++) {
                                var linkedReplacement = linkedReplacements[linkedReplacementIndex];
                                serializedSource = serializedSource[sliceMethod](0, linkedReplacement.start) + linkedReplacement.markup + serializedSource[sliceMethod](linkedReplacement.end)
                            }
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            runtimeValue11[setAttributeMethod]('data-cu', '1');
                            writeSourceDraft(serializedSource);
                            runtimeValue4[disabledProperty] = false;
                            reloadVisualDocument();
                            return true
                        },
                        createBlockLibrary = function() {
                            if (blockLibraryPanel) return blockLibraryPanel;
                            var blockLibraryRussian = /[А-Яа-яЁё]/.test(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '');
                            blockLibraryPanel = documentObject[createElementMethod]('aside');
                            blockLibraryPanel.id = 'myvibehtml-block-library';
                            blockLibraryPanel.hidden = true;
                            blockLibraryPanel[setAttributeMethod]('aria-hidden', 'true');
                            blockLibraryPanel[setAttributeMethod]('aria-label', blockLibraryRussian ? 'Компоненты' : 'Components');
                            blockLibraryPanel[innerHTMLProperty] = '<div class="myvibehtml-block-library-header"><h2>' + (blockLibraryRussian ? 'Компоненты' : 'Components') + '</h2><button type="button" data-block-library-close aria-label="' + (blockLibraryRussian ? 'Закрыть' : 'Close') + '">×</button></div><p class="myvibehtml-block-library-hint">' + (blockLibraryRussian ? 'Сохраняйте повторно используемые секции и вставляйте их в выбранное место.' : 'Save reusable sections and insert them after the selected node.') + '</p><ul data-block-library-list></ul>';
                            documentObject.body[appendChildMethod](blockLibraryPanel);
                            blockLibraryPanel[querySelectorMethod]('[data-block-library-close]')[addEventListenerMethod](clickEvent, closeBlockLibrary);
                            return blockLibraryPanel
                        },
                        renderBlockLibrary = function() {
                            var blockLibrary = createBlockLibrary(),
                                blockLibraryList = blockLibrary[querySelectorMethod]('[data-block-library-list]'),
                                blockLibraryItems = readBlockLibrary(),
                                blockLibraryRussian = /[А-Яа-яЁё]/.test(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '');
                            blockLibraryList[textContentProperty] = '';
                            if (!blockLibraryItems[lengthProperty]) {
                                var blockLibraryEmpty = documentObject[createElementMethod]('li');
                                blockLibraryEmpty[classNameProperty] = 'myvibehtml-block-library-empty';
                                blockLibraryEmpty[textContentProperty] = blockLibraryRussian ? 'Компонентов пока нет' : 'No components yet';
                                blockLibraryList[appendChildMethod](blockLibraryEmpty);
                                return
                            }
                            for (var blockLibraryIndex = 0; blockLibraryIndex < blockLibraryItems[lengthProperty]; blockLibraryIndex++) {
                                var blockLibraryItem = documentObject[createElementMethod]('li'),
                                    blockLibraryName = documentObject[createElementMethod]('span'),
                                    blockLibraryInsert = documentObject[createElementMethod]('button'),
                                    blockLibraryLinkedInsert = documentObject[createElementMethod]('button'),
                                    blockLibraryDelete = documentObject[createElementMethod]('button');
                                    blockLibraryName[textContentProperty] = blockLibraryItems[blockLibraryIndex].name;
                                    blockLibraryName[setAttributeMethod]('title', blockLibraryItems[blockLibraryIndex].type == 'component' ? (blockLibraryRussian ? 'Компонент' : 'Component') : '');
                                    blockLibraryInsert.type = 'button';
                                    blockLibraryInsert[textContentProperty] = blockLibraryRussian ? 'Вставить' : 'Insert';
                                blockLibraryInsert.blockIndex = blockLibraryIndex;
                                    blockLibraryInsert[addEventListenerMethod](clickEvent, function() {
                                        insertBlockPreset(this.blockIndex)
                                    });
                                    blockLibraryLinkedInsert.type = 'button';
                                    blockLibraryLinkedInsert[textContentProperty] = blockLibraryRussian ? 'Связать' : 'Link';
                                    blockLibraryLinkedInsert[setAttributeMethod]('aria-label', blockLibraryRussian ? 'Вставить связанным компонентом' : 'Insert as linked component');
                                    blockLibraryLinkedInsert[setAttributeMethod]('title', blockLibraryRussian ? 'Синхронизировать компонент между открытыми страницами' : 'Sync this component across open pages');
                                    blockLibraryLinkedInsert.blockIndex = blockLibraryIndex;
                                    blockLibraryLinkedInsert[addEventListenerMethod](clickEvent, function() {
                                        insertBlockPreset(this.blockIndex, true)
                                    });
                                    var blockLibraryUpdate = documentObject[createElementMethod]('button');
                                    blockLibraryUpdate.type = 'button';
                                    blockLibraryUpdate[textContentProperty] = blockLibraryRussian ? 'Обновить' : 'Update';
                                    blockLibraryUpdate[setAttributeMethod]('aria-label', blockLibraryRussian ? 'Обновить компонент' : 'Update component');
                                    blockLibraryUpdate.blockIndex = blockLibraryIndex;
                                    blockLibraryUpdate[addEventListenerMethod](clickEvent, function() {
                                        updateBlockPreset(this.blockIndex)
                                    });
                                    blockLibraryDelete.type = 'button';
                                blockLibraryDelete[textContentProperty] = '×';
                                blockLibraryDelete[setAttributeMethod]('aria-label', blockLibraryRussian ? 'Удалить компонент' : 'Delete component');
                                blockLibraryDelete.blockIndex = blockLibraryIndex;
                                blockLibraryDelete[addEventListenerMethod](clickEvent, function() {
                                    var blockLibraryItemsToDelete = readBlockLibrary();
                                    blockLibraryItemsToDelete.splice(this.blockIndex, 1);
                                    writeBlockLibrary(blockLibraryItemsToDelete);
                                    syncAllLinkedComponentInstances();
                                    renderBlockLibrary()
                                });
                                blockLibraryItem[appendChildMethod](blockLibraryName);
                                blockLibraryItem[appendChildMethod](blockLibraryInsert);
                                blockLibraryItem[appendChildMethod](blockLibraryLinkedInsert);
                                blockLibraryItem[appendChildMethod](blockLibraryUpdate);
                                blockLibraryItem[appendChildMethod](blockLibraryDelete);
                                blockLibraryList[appendChildMethod](blockLibraryItem)
                            }
                        },
                        openBlockLibrary = function() {
                            var blockLibrary = createBlockLibrary();
                            renderBlockLibrary();
                            blockLibrary.hidden = false;
                            blockLibrary[setAttributeMethod]('aria-hidden', 'false');
                            if (blockLibraryFocusCleanup) blockLibraryFocusCleanup();
                            blockLibraryFocusCleanup = uiContracts.focusTrap ? uiContracts.focusTrap(blockLibrary) : null;
                            var blockLibraryClose = blockLibrary[querySelectorMethod]('[data-block-library-close]');
                            if (blockLibraryClose) blockLibraryClose[focusEvent]()
                        },
                        saveBlockPreset = function(blockTarget) {
                            if (!blockTarget || blockTarget == runtimeValue127.body) return;
                            var blockMarkup = sanitizeBlockMarkup(blockTarget[outerHTMLProperty]);
                            if (!blockMarkup) return;
                            var blockLibraryRussian = /[А-Яа-яЁё]/.test(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || ''),
                                blockName = windowObject.prompt(blockLibraryRussian ? 'Название компонента' : 'Component name', blockTarget[tagNameProperty][toLowerCaseMethod]());
                            if (!blockName) return;
                            var blockLibraryItems = readBlockLibrary();
                            blockLibraryItems.unshift({id:'component-' + Date.now(), type:'component', name: blockName[substringMethod](0, 60), html: blockMarkup, created:Date.now(), updated:Date.now()});
                            writeBlockLibrary(blockLibraryItems[sliceMethod](0, 24));
                            openBlockLibrary()
                        },
                        updateBlockPreset = function(blockIndex) {
                            var blockLibraryItems = readBlockLibrary(),
                                blockPreset = blockLibraryItems[blockIndex],
                                blockTarget = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']') || contextTarget;
                            if (!blockPreset || !blockTarget || blockTarget == runtimeValue127.body) return;
                            var blockMarkup = sanitizeBlockMarkup(blockTarget[outerHTMLProperty]),
                                blockLibraryRussian = /[А-Яа-яЁё]/.test(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '');
                            if (!blockMarkup || !windowObject.confirm(blockLibraryRussian ? 'Обновить этот компонент текущим выделением?' : 'Update this component with the current selection?')) return;
                            blockPreset.html = blockMarkup;
                            blockPreset.type = 'component';
                            blockPreset.updated = Date.now();
                            writeBlockLibrary(blockLibraryItems.slice(0, 24));
                            syncLinkedComponentInstances(blockPreset.id, blockPreset.html);
                            openBlockLibrary()
                        },
                        insertBlockPreset = function(blockIndex, linked) {
                            var blockLibraryItems = readBlockLibrary(),
                                blockPreset = blockLibraryItems[blockIndex],
                                blockTarget = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']') || contextTarget;
                            if (!blockPreset || !blockTarget) return;
                            var blockMarkup = sanitizeBlockMarkup(blockPreset.html),
                                blockMarkupContainer = runtimeValue127[createElementMethod]('div');
                            blockMarkupContainer[innerHTMLProperty] = blockMarkup;
                            var blockNode = blockMarkupContainer[firstElementChildProperty],
                                blockStart = runtimeValue93(blockTarget),
                                blockEnd = runtimeValue94(blockTarget);
                            if (!blockNode || typeof blockStart != 'number' || typeof blockEnd != 'number') return;
                            if (linked) blockNode[setAttributeMethod](componentLinkAttribute, blockPreset.id);
                            var blockSerialized = blockNode[outerHTMLProperty];
                            blockTarget[parentNodeProperty][insertBeforeMethod](blockNode, blockTarget[nextElementSiblingProperty]);
                            serializedSource = serializedSource[sliceMethod](0, blockEnd) + blockSerialized + serializedSource[sliceMethod](blockEnd);
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                            runtimeValue4[disabledProperty] = false;
                            writeSourceDraft(serializedSource);
                            runtimeValue75();
                            closeBlockLibrary()
                        },
                        setStyleInspectorWidth = function(width) {
                            if (!styleInspector || windowObject.innerWidth <= 700) return;
                            var minWidth = 320,
                                maxWidth = Math.min(720, Math.max(minWidth, windowObject.innerWidth - 40));
                            styleInspector.style.width = Math.round(Math.max(minWidth, Math.min(maxWidth, width))) + 'px'
                        },
                        resizeStyleInspector = function(event) {
                            if (styleInspectorResizeState) setStyleInspectorWidth(styleInspectorResizeState.startWidth + styleInspectorResizeState.startX - event.clientX)
                        },
                        stopStyleInspectorResize = function() {
                            if (!styleInspectorResizeState) return;
                            documentObject[removeEventListenerMethod](mouseMoveEvent, resizeStyleInspector);
                            documentObject[removeEventListenerMethod](mouseUpEvent, stopStyleInspectorResize);
                            styleInspectorResizeState = null;
                            if (styleInspectorResizeHandle) styleInspectorResizeHandle[removeAttributeMethod]('data-active')
                        },
                        startStyleInspectorResize = function(event) {
                            if (!styleInspector || windowObject.innerWidth <= 700) return;
                            styleInspectorResizeState = {startX: event.clientX, startWidth: styleInspector.offsetWidth};
                            styleInspectorResizeHandle[setAttributeMethod]('data-active', 'true');
                            documentObject[addEventListenerMethod](mouseMoveEvent, resizeStyleInspector);
                            documentObject[addEventListenerMethod](mouseUpEvent, stopStyleInspectorResize);
                            event[preventDefaultMethod]();
                            event[stopPropagationMethod]()
                        },
                        handleStyleInspectorResizeKeydown = function(event) {
                            if (!styleInspector || windowObject.innerWidth <= 700) return;
                            var width = styleInspector.offsetWidth;
                            if (event[keyCodeProperty] == 37) width += 16;
                            else if (event[keyCodeProperty] == 39) width -= 16;
                            else if (event[keyCodeProperty] == 36) width = 320;
                            else if (event[keyCodeProperty] == 35) width = windowObject.innerWidth - 40;
                            else return;
                            event[preventDefaultMethod]();
                            setStyleInspectorWidth(width)
                        },
                        getDesignTokenNames = function() {
                            var designTokenMatches = serializedSource.match(/--[a-zA-Z][a-zA-Z0-9_-]*/g) || [],
                                designTokenNames = [];
                            for (var designTokenIndex = 0; designTokenIndex < designTokenMatches[lengthProperty]; designTokenIndex++) if (designTokenNames[indexOfMethod](designTokenMatches[designTokenIndex]) === -1) designTokenNames.push(designTokenMatches[designTokenIndex]);
                            return designTokenNames
                        },
                        isValidDesignTokenName = function(designTokenName) {
                            return /^--[a-z][a-z0-9_-]{0,63}$/i.test(designTokenName)
                        },
                        isValidDesignTokenValue = function(designTokenValue) {
                            return !!designTokenValue && designTokenValue[lengthProperty] <= 180 && !/[{}<>;]/.test(designTokenValue) && !/(?:javascript|expression|url)\s*\(/i.test(designTokenValue)
                        },
                        getDesignTokenValue = function(designTokenName) {
                            var designTokenRoot = runtimeValue127.documentElement,
                                designTokenValue = designTokenRoot && designTokenRoot[styleProperty].getPropertyValue(designTokenName);
                            if (!designTokenValue && runtimeValue127.defaultView) designTokenValue = runtimeValue127.defaultView[getComputedStyleMethod](designTokenRoot).getPropertyValue(designTokenName);
                            return (designTokenValue || '')[replaceMethod](/^\s+|\s+$/g, '')
                        },
                        renderDesignTokens = function() {
                            if (!designTokenNameField || !designTokenValueField) return;
                            var designTokenNames = getDesignTokenNames();
                            if (!designTokenNames[lengthProperty]) designTokenNames.push('--myvibe-primary');
                            var designTokenSelected = designTokenNameField[valueProperty];
                            designTokenNameField[textContentProperty] = '';
                            for (var designTokenIndex = 0; designTokenIndex < designTokenNames[lengthProperty]; designTokenIndex++) {
                                var designTokenOption = documentObject[createElementMethod]('option');
                                designTokenOption.value = designTokenNames[designTokenIndex];
                                designTokenOption[textContentProperty] = designTokenNames[designTokenIndex];
                                designTokenNameField[appendChildMethod](designTokenOption)
                            }
                            designTokenNameField[valueProperty] = designTokenNames[indexOfMethod](designTokenSelected) === -1 ? designTokenNames[0] : designTokenSelected;
                            designTokenValueField[valueProperty] = getDesignTokenValue(designTokenNameField[valueProperty])
                        },
                        syncDesignTokenSource = function(designTokenName, designTokenValue) {
                            if (!isValidDesignTokenName(designTokenName) || !isValidDesignTokenValue(designTokenValue)) return false;
                            var designTokenRootPattern = /:root\s*\{([\s\S]*?)\}/i,
                                designTokenRootMatch = serializedSource[matchMethod](designTokenRootPattern),
                                designTokenPattern = new RegExp('(^|;)\\s*' + designTokenName[replaceMethod](/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*:\\s*[^;}]*;?', 'i');
                            if (designTokenRootMatch) {
                                var designTokenBody = designTokenRootMatch[1];
                                if (designTokenPattern.test(designTokenBody)) designTokenBody = designTokenBody[replaceMethod](designTokenPattern, function(match, prefix) { return prefix + ' ' + designTokenName + ': ' + designTokenValue + ';' });
                                else designTokenBody = designTokenBody[replaceMethod](/\s*$/, '') + '\n  ' + designTokenName + ': ' + designTokenValue + ';\n';
                                serializedSource = serializedSource[sliceMethod](0, designTokenRootMatch.index) + designTokenRootMatch[0][replaceMethod](designTokenRootMatch[1], designTokenBody) + serializedSource[sliceMethod](designTokenRootMatch.index + designTokenRootMatch[0][lengthProperty]);
                            } else {
                                var designTokenStyle = '<style>:root{' + designTokenName + ':' + designTokenValue + ';}</style>',
                                    designTokenHeadEnd = serializedSource[searchMethod](/<\/head\s*>/i);
                                serializedSource = designTokenHeadEnd < 0 ? designTokenStyle + serializedSource : serializedSource[sliceMethod](0, designTokenHeadEnd) + designTokenStyle + serializedSource[sliceMethod](designTokenHeadEnd)
                            }
                            runtimeValue127.documentElement[styleProperty].setProperty(designTokenName, designTokenValue);
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                            runtimeValue4[disabledProperty] = false;
                            writeSourceDraft(serializedSource);
                            runtimeValue75();
                            return true
                        },
                        applyDesignToken = function() {
                            if (!designTokenNameField || !designTokenValueField) return;
                            var designTokenName = designTokenNameField[valueProperty],
                                designTokenValue = designTokenValueField[valueProperty][replaceMethod](/^\s+|\s+$/g, '');
                            if (!syncDesignTokenSource(designTokenName, designTokenValue)) {
                                styleInspectorError.hidden = false;
                                return
                            }
                            styleInspectorError.hidden = true;
                            renderDesignTokens()
                        },
                        createStyleInspector = function() {
                            if (styleInspector) return styleInspector;
                            var visualEditorValue8 = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '',
                                visualEditorValue9 = /[А-Яа-яЁё]/.test(visualEditorValue8),
                                visualEditorValue10 = visualEditorValue9 ? {
                                    title: 'CSS-свойства',
                                    close: 'Закрыть',
                                    hint: 'Изменения применяются сразу и попадут в HTML после сохранения.',
                                    target: 'Выбранный узел',
                                    invalid: 'Проверьте значение CSS',
                                    reset: 'Сбросить',
                                    layout: 'Разметка',
                                    spacing: 'Отступы',
                                    typography: 'Типографика',
                                    surface: 'Оформление',
                                    display: 'Display',
                                    width: 'Ширина',
                                    height: 'Высота',
                                    margin: 'Margin',
                                    padding: 'Padding',
                                    gap: 'Gap',
                                    fontSize: 'Размер шрифта',
                                    fontWeight: 'Насыщенность',
                                    lineHeight: 'Высота строки',
                                    textAlign: 'Выравнивание',
                                    color: 'Цвет текста',
                                    backgroundColor: 'Фон',
                                    borderRadius: 'Скругление',
                                    tokens: 'Дизайн-токены',
                                    tokenName: 'Token',
                                    tokenValue: 'Значение',
                                    tokenApply: 'Применить',
                                    tokenNew: 'Новый токен'
                                } : {
                                    title: 'CSS properties',
                                    close: 'Close',
                                    hint: 'Changes apply immediately and are written to HTML when saved.',
                                    target: 'Selected node',
                                    invalid: 'Check the CSS value',
                                    reset: 'Reset',
                                    layout: 'Layout',
                                    spacing: 'Spacing',
                                    typography: 'Typography',
                                    surface: 'Surface',
                                    display: 'Display',
                                    width: 'Width',
                                    height: 'Height',
                                    margin: 'Margin',
                                    padding: 'Padding',
                                    gap: 'Gap',
                                    fontSize: 'Font size',
                                    fontWeight: 'Font weight',
                                    lineHeight: 'Line height',
                                    textAlign: 'Text align',
                                    color: 'Text color',
                                    backgroundColor: 'Background',
                                    borderRadius: 'Border radius',
                                    tokens: 'Design tokens',
                                    tokenName: 'Token',
                                    tokenValue: 'Value',
                                    tokenApply: 'Apply',
                                    tokenNew: 'New token'
                                },
                                visualEditorValue11 = function(initializeVisualEditorArgument1, initializeVisualEditorArgument2) {
                                    var visualEditorValue12 = documentObject[createElementMethod]('label'),
                                        visualEditorValue13 = documentObject[createElementMethod]('span'),
                                        visualEditorValue14 = documentObject[createElementMethod](initializeVisualEditorArgument2 ? 'select' : 'input');
                                    visualEditorValue13[textContentProperty] = initializeVisualEditorArgument1.label;
                                    visualEditorValue14[setAttributeMethod]('data-myvibehtml-style-property', initializeVisualEditorArgument1.property);
                                    visualEditorValue14[classNameProperty] = 'myvibehtml-style-field';
                                    visualEditorValue14[setAttributeMethod]('aria-label', initializeVisualEditorArgument1.label);
                                    if (!initializeVisualEditorArgument2) {
                                        visualEditorValue14.type = 'text';
                                        visualEditorValue14[setAttributeMethod]('spellcheck', 'false');
                                    } else for (var visualEditorValue15 = 0, visualEditorValue16 = initializeVisualEditorArgument2[lengthProperty]; visualEditorValue15 < visualEditorValue16; visualEditorValue15++) {
                                        var visualEditorValue17 = documentObject[createElementMethod]('option');
                                        visualEditorValue17.value = initializeVisualEditorArgument2[visualEditorValue15];
                                        visualEditorValue17[textContentProperty] = initializeVisualEditorArgument2[visualEditorValue15];
                                        visualEditorValue14[appendChildMethod](visualEditorValue17)
                                    }
                                    visualEditorValue14[addEventListenerMethod](initializeVisualEditorArgument2 ? 'change' : inputEvent, function() {
                                        applyStyleProperty.call(this)
                                    });
                                    visualEditorValue12[appendChildMethod](visualEditorValue13);
                                    visualEditorValue12[appendChildMethod](visualEditorValue14);
                                    return visualEditorValue12
                                },
                                visualEditorMarkupField = function(markupLabel, markupProperty, markupOptions, markupDisabled) {
                                    var markupFieldLabel = documentObject[createElementMethod]('label'),
                                        markupFieldCaption = documentObject[createElementMethod]('span'),
                                        markupFieldInput = documentObject[createElementMethod](markupOptions ? 'select' : 'input');
                                    markupFieldCaption[textContentProperty] = markupLabel;
                                    markupFieldInput[setAttributeMethod]('data-myvibehtml-markup-property', markupProperty);
                                    markupFieldInput[setAttributeMethod]('aria-label', markupLabel);
                                    markupFieldInput[classNameProperty] = 'myvibehtml-style-field';
                                    if (markupDisabled) markupFieldInput[disabledProperty] = true;
                                    if (markupOptions) for (var markupOptionIndex = 0; markupOptionIndex < markupOptions[lengthProperty]; markupOptionIndex++) {
                                        var markupOption = documentObject[createElementMethod]('option');
                                        markupOption.value = markupOptions[markupOptionIndex];
                                        markupOption[textContentProperty] = markupOptions[markupOptionIndex] || '—';
                                        markupFieldInput[appendChildMethod](markupOption)
                                    } else {
                                        markupFieldInput.type = 'text';
                                        markupFieldInput[setAttributeMethod]('spellcheck', 'false')
                                    }
                                    if (!markupDisabled) markupFieldInput[addEventListenerMethod](markupOptions ? 'change' : inputEvent, applyMarkupProperty);
                                    markupFieldLabel[appendChildMethod](markupFieldCaption);
                                    markupFieldLabel[appendChildMethod](markupFieldInput);
                                    return markupFieldLabel
                                },
                                visualEditorValue18 = [
                                    {title: visualEditorValue10.layout, fields: [
                                        {property: 'display', label: visualEditorValue10.display, options: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none']},
                                        {property: 'width', label: visualEditorValue10.width},
                                        {property: 'height', label: visualEditorValue10.height}
                                    ]},
                                    {title: visualEditorValue10.spacing, fields: [
                                        {property: 'margin', label: visualEditorValue10.margin},
                                        {property: 'padding', label: visualEditorValue10.padding},
                                        {property: 'gap', label: visualEditorValue10.gap}
                                    ]},
                                    {title: visualEditorValue10.typography, fields: [
                                        {property: 'font-size', label: visualEditorValue10.fontSize},
                                        {property: 'font-weight', label: visualEditorValue10.fontWeight, options: ['400', '500', '600', '700']},
                                        {property: 'line-height', label: visualEditorValue10.lineHeight},
                                        {property: 'text-align', label: visualEditorValue10.textAlign, options: ['left', 'center', 'right', 'justify', 'start', 'end']}
                                    ]},
                                    {title: visualEditorValue10.surface, fields: [
                                        {property: 'color', label: visualEditorValue10.color},
                                        {property: 'background-color', label: visualEditorValue10.backgroundColor},
                                        {property: 'border-radius', label: visualEditorValue10.borderRadius}
                                    ]}
                                ];
                                visualEditorMarkupFields = [
                                    {property: 'tagName', label: visualEditorValue9 ? 'Тег' : 'Tag', options: structuralTagOptions},
                                    {property: 'id', label: visualEditorValue9 ? 'ID' : 'ID'},
                                    {property: 'class', label: visualEditorValue9 ? 'Классы' : 'Classes'},
                                    {property: 'role', label: 'ARIA role'},
                                    {property: 'aria-label', label: 'ARIA label'},
                                    {property: 'aria-hidden', label: 'ARIA hidden', options: ['', 'true', 'false']},
                                    {property: 'title', label: visualEditorValue9 ? 'Подсказка' : 'Title'}
                                ],
                                styleInspector = documentObject[createElementMethod]('aside');
                            styleInspector.id = 'myvibehtml-style-inspector';
                            styleInspector[setAttributeMethod]('role', 'dialog');
                            styleInspector[setAttributeMethod]('aria-modal', 'false');
                            styleInspector[setAttributeMethod]('aria-hidden', 'true');
                            styleInspector[setAttributeMethod]('aria-labelledby', 'myvibehtml-style-inspector-title');
                            styleInspector.hidden = true;
                            styleInspectorResizeHandle = documentObject[createElementMethod]('div');
                            styleInspectorResizeHandle[classNameProperty] = 'myvibehtml-style-inspector-resize';
                            styleInspectorResizeHandle[setAttributeMethod]('role', 'separator');
                            styleInspectorResizeHandle[setAttributeMethod]('aria-orientation', 'vertical');
                            styleInspectorResizeHandle[setAttributeMethod]('aria-label', visualEditorValue9 ? 'Изменить ширину панели CSS-свойств' : 'Resize CSS properties panel');
                            styleInspectorResizeHandle[setAttributeMethod]('title', visualEditorValue9 ? 'Потяните для изменения ширины' : 'Drag to resize');
                            styleInspectorResizeHandle[setAttributeMethod]('tabindex', '0');
                            styleInspectorResizeHandle[addEventListenerMethod](mouseDownEvent, startStyleInspectorResize);
                            styleInspectorResizeHandle[addEventListenerMethod](keyDownEvent, handleStyleInspectorResizeKeydown);
                            var visualEditorValue19 = documentObject[createElementMethod]('div'),
                                visualEditorValue20 = documentObject[createElementMethod]('div'),
                                visualEditorValue21 = documentObject[createElementMethod]('h2'),
                                visualEditorValue22 = documentObject[createElementMethod]('button'),
                                visualEditorValue23 = documentObject[createElementMethod]('p'),
                                visualEditorValue24 = documentObject[createElementMethod]('p'),
                                visualEditorValue25 = documentObject[createElementMethod]('form'),
                                visualEditorValue26 = documentObject[createElementMethod]('div'),
                                visualEditorValue27 = documentObject[createElementMethod]('button');
                            visualEditorValue19[classNameProperty] = 'myvibehtml-style-inspector-header';
                            visualEditorValue20[classNameProperty] = 'myvibehtml-style-inspector-heading';
                            visualEditorValue21.id = 'myvibehtml-style-inspector-title';
                            visualEditorValue21[textContentProperty] = visualEditorValue10.title;
                            visualEditorValue22.type = 'button';
                            visualEditorValue22[textContentProperty] = visualEditorValue10.close;
                            visualEditorValue22[classNameProperty] = 'myvibehtml-style-inspector-close';
                            visualEditorValue22[addEventListenerMethod](clickEvent, closeStyleInspector);
                            visualEditorValue23[classNameProperty] = 'myvibehtml-style-inspector-hint';
                            visualEditorValue23[textContentProperty] = visualEditorValue10.hint;
                            visualEditorValue24[classNameProperty] = 'myvibehtml-style-inspector-target';
                            visualEditorValue24[setAttributeMethod]('data-myvibehtml-style-target', '');
                            var markupInspectorFieldset = documentObject[createElementMethod]('fieldset'),
                                markupInspectorLegend = documentObject[createElementMethod]('legend'),
                                markupInspectorGrid = documentObject[createElementMethod]('div');
                            markupInspectorLegend[textContentProperty] = visualEditorValue9 ? 'HTML / ARIA' : 'HTML / ARIA';
                            markupInspectorGrid[classNameProperty] = 'myvibehtml-style-grid myvibehtml-markup-grid';
                            for (var markupInspectorIndex = 0; markupInspectorIndex < visualEditorMarkupFields[lengthProperty]; markupInspectorIndex++) markupInspectorGrid[appendChildMethod](visualEditorMarkupField(visualEditorMarkupFields[markupInspectorIndex].label, visualEditorMarkupFields[markupInspectorIndex].property, visualEditorMarkupFields[markupInspectorIndex].options, visualEditorMarkupFields[markupInspectorIndex].disabled));
                            markupInspectorFieldset[appendChildMethod](markupInspectorLegend);
                            markupInspectorFieldset[appendChildMethod](markupInspectorGrid);
                            designTokenFieldset = documentObject[createElementMethod]('fieldset');
                            designTokenFieldset[classNameProperty] = 'myvibehtml-token-fieldset';
                            designTokenFieldset[innerHTMLProperty] = '<legend>' + visualEditorValue10.tokens + '</legend><div class="myvibehtml-style-grid"><label><span>' + visualEditorValue10.tokenName + '</span><select class="myvibehtml-style-field" data-myvibehtml-token-name aria-label="' + visualEditorValue10.tokenName + '"></select></label><label><span>' + visualEditorValue10.tokenValue + '</span><input class="myvibehtml-style-field" data-myvibehtml-token-value type="text" spellcheck="false" aria-label="' + visualEditorValue10.tokenValue + '"></label></div><div class="myvibehtml-token-actions"><button type="button" data-myvibehtml-token-new>' + visualEditorValue10.tokenNew + '</button><button type="button" data-myvibehtml-token-apply>' + visualEditorValue10.tokenApply + '</button></div>';
                            designTokenNameField = designTokenFieldset[querySelectorMethod]('[data-myvibehtml-token-name]');
                            designTokenValueField = designTokenFieldset[querySelectorMethod]('[data-myvibehtml-token-value]');
                            designTokenFieldset[querySelectorMethod]('[data-myvibehtml-token-name]')[addEventListenerMethod](changeEvent, function() { designTokenValueField[valueProperty] = getDesignTokenValue(this[valueProperty]) });
                            designTokenFieldset[querySelectorMethod]('[data-myvibehtml-token-apply]')[addEventListenerMethod](clickEvent, applyDesignToken);
                            designTokenFieldset[querySelectorMethod]('[data-myvibehtml-token-new]')[addEventListenerMethod](clickEvent, function() {
                                var designTokenPrompt = windowObject.prompt(visualEditorValue9 ? 'Имя нового токена' : 'New token name', '--myvibe-primary');
                                if (!designTokenPrompt) return;
                                designTokenPrompt = designTokenPrompt[replaceMethod](/^\s+|\s+$/g, '');
                                if (!isValidDesignTokenName(designTokenPrompt)) {
                                    styleInspectorError.hidden = false;
                                    return
                                }
                                var designTokenOption = documentObject[createElementMethod]('option');
                                designTokenOption.value = designTokenPrompt;
                                designTokenOption[textContentProperty] = designTokenPrompt;
                                designTokenNameField[appendChildMethod](designTokenOption);
                                designTokenNameField[valueProperty] = designTokenPrompt;
                                designTokenValueField[valueProperty] = '';
                                designTokenValueField[focusEvent]()
                            });
                            visualEditorValue25[setAttributeMethod]('novalidate', 'novalidate');
                            for (var visualEditorValue28 = 0, visualEditorValue29 = visualEditorValue18[lengthProperty]; visualEditorValue28 < visualEditorValue29; visualEditorValue28++) {
                                var visualEditorValue30 = documentObject[createElementMethod]('fieldset'),
                                    visualEditorValue31 = documentObject[createElementMethod]('legend'),
                                    visualEditorValue32 = documentObject[createElementMethod]('div');
                                visualEditorValue31[textContentProperty] = visualEditorValue18[visualEditorValue28].title;
                                visualEditorValue32[classNameProperty] = 'myvibehtml-style-grid';
                                for (var visualEditorValue33 = 0, visualEditorValue34 = visualEditorValue18[visualEditorValue28].fields[lengthProperty]; visualEditorValue33 < visualEditorValue34; visualEditorValue33++) visualEditorValue32[appendChildMethod](visualEditorValue11(visualEditorValue18[visualEditorValue28].fields[visualEditorValue33], visualEditorValue18[visualEditorValue28].fields[visualEditorValue33].options));
                                visualEditorValue30[appendChildMethod](visualEditorValue31);
                                visualEditorValue30[appendChildMethod](visualEditorValue32);
                                visualEditorValue25[appendChildMethod](visualEditorValue30)
                            }
                            styleInspectorError = documentObject[createElementMethod]('p');
                            styleInspectorError[classNameProperty] = 'myvibehtml-style-inspector-error';
                            styleInspectorError[textContentProperty] = visualEditorValue10.invalid;
                            styleInspectorError.hidden = true;
                            visualEditorValue26[classNameProperty] = 'myvibehtml-style-inspector-footer';
                            visualEditorValue27.type = 'button';
                            visualEditorValue27[textContentProperty] = visualEditorValue10.reset;
                            visualEditorValue27[classNameProperty] = 'myvibehtml-style-inspector-reset';
                            visualEditorValue27[addEventListenerMethod](clickEvent, resetStyleInspector);
                            visualEditorValue20[appendChildMethod](visualEditorValue21);
                            visualEditorValue19[appendChildMethod](visualEditorValue20);
                            visualEditorValue19[appendChildMethod](visualEditorValue22);
                            styleInspector[appendChildMethod](visualEditorValue19);
                            styleInspector[appendChildMethod](styleInspectorResizeHandle);
                            styleInspector[appendChildMethod](visualEditorValue23);
                            styleInspector[appendChildMethod](visualEditorValue24);
                            styleInspector[appendChildMethod](markupInspectorFieldset);
                            styleInspector[appendChildMethod](designTokenFieldset);
                            styleInspector[appendChildMethod](visualEditorValue25);
                            styleInspectorFields = styleInspector[querySelectorAllMethod]('[data-myvibehtml-style-property]');
                            markupInspectorFields = styleInspector[querySelectorAllMethod]('[data-myvibehtml-markup-property]');
                            styleInspector[appendChildMethod](styleInspectorError);
                            visualEditorValue26[appendChildMethod](visualEditorValue27);
                            styleInspector[appendChildMethod](visualEditorValue26);
                            documentObject.body[appendChildMethod](styleInspector);
                            documentObject[addEventListenerMethod](keyDownEvent, function(initializeVisualEditorArgument12) {
                                if (initializeVisualEditorArgument12[keyCodeProperty] == 27 && styleInspector && !styleInspector.hidden) closeStyleInspector()
                            });
                            return styleInspector
                        },
                        closeStyleInspector = function() {
                            if (styleInspector) {
                                styleInspector.hidden = true;
                                styleInspector[setAttributeMethod]('aria-hidden', 'true')
                            }
                            styleInspectorTarget = null
                        },
                        getStyleSourceRange = function(initializeVisualEditorArgument2) {
                            if (sourceMapState) return sourceMapState.elementRangeFor(initializeVisualEditorArgument2);
                            var visualEditorValue34 = runtimeValue93(initializeVisualEditorArgument2),
                                visualEditorValue35 = runtimeValue94(initializeVisualEditorArgument2);
                            if (typeof visualEditorValue34 == 'number' && serializedSource[visualEditorValue34] != '<') {
                                var visualEditorValue36 = serializedSource[lastIndexOfMethod]('<', visualEditorValue34);
                                if (visualEditorValue36 >= 0) visualEditorValue34 = visualEditorValue36
                            }
                            if (typeof visualEditorValue34 == 'number' && typeof visualEditorValue35 != 'number') {
                                var visualEditorValue37 = initializeVisualEditorArgument2[tagNameProperty][toLowerCaseMethod](),
                                    visualEditorValue38 = '</' + visualEditorValue37 + '>',
                                    visualEditorValue39 = serializedSource[indexOfMethod](visualEditorValue38, visualEditorValue34);
                                if (visualEditorValue39 >= visualEditorValue34) {
                                    visualEditorValue35 = visualEditorValue39 + visualEditorValue38[lengthProperty]
                                }
                            }
                            if (typeof visualEditorValue34 != 'number' || typeof visualEditorValue35 != 'number' || visualEditorValue35 <= visualEditorValue34) return null;
                            return [visualEditorValue34, visualEditorValue35]
                        },
                        escapeStyleAttribute = function(initializeVisualEditorArgument3) {
                            return initializeVisualEditorArgument3[splitMethod]('&')[joinMethod]('&amp;')[splitMethod]('"')[joinMethod]('&quot;')[splitMethod]('<')[joinMethod]('&lt;')[splitMethod]('>')[joinMethod]('&gt;')
                        },
                        findOpeningTagEnd = function(initializeVisualEditorArgument4) {
                            for (var visualEditorValue36 = '', visualEditorValue37 = 0, visualEditorValue38 = initializeVisualEditorArgument4[lengthProperty]; visualEditorValue37 < visualEditorValue38; visualEditorValue37++) {
                                var visualEditorValue39 = initializeVisualEditorArgument4[visualEditorValue37];
                                if (visualEditorValue36) {
                                    if (visualEditorValue39 == visualEditorValue36) visualEditorValue36 = ''
                                } else if (visualEditorValue39 == '"' || visualEditorValue39 == "'") visualEditorValue36 = visualEditorValue39;
                                else if (visualEditorValue39 == '>') return visualEditorValue37 + 1
                            }
                            return -1
                        },
                        syncStyleSource = function(initializeVisualEditorArgument5, initializeVisualEditorArgument6, initializeVisualEditorArgument7, initializeVisualEditorArgument8) {
                            var visualEditorValue40 = serializedSource[sliceMethod](initializeVisualEditorArgument6, initializeVisualEditorArgument7),
                                visualEditorValue41 = findOpeningTagEnd(visualEditorValue40);
                            if (visualEditorValue41 < 0) return false;
                            var visualEditorValue42 = visualEditorValue40[sliceMethod](0, visualEditorValue41),
                                visualEditorValue43 = /\sstyle\s*=\s*(?:"([\s\S]*?)"|'([\s\S]*?)'|([^\s>]+))/i,
                                visualEditorValue44 = visualEditorValue42[matchMethod](visualEditorValue43);
                            if (initializeVisualEditorArgument8) {
                                if (visualEditorValue44) visualEditorValue42 = visualEditorValue42[replaceMethod](visualEditorValue43, ' style="' + escapeStyleAttribute(initializeVisualEditorArgument8) + '"');
                                else {
                                    var visualEditorValue45 = visualEditorValue42[lengthProperty] - 1;
                                    if (visualEditorValue42[visualEditorValue45 - 1] == '/') visualEditorValue45--;
                                    visualEditorValue42 = visualEditorValue42[sliceMethod](0, visualEditorValue45) + ' style="' + escapeStyleAttribute(initializeVisualEditorArgument8) + '"' + visualEditorValue42[sliceMethod](visualEditorValue45)
                                }
                            } else if (visualEditorValue44) visualEditorValue42 = visualEditorValue42[replaceMethod](visualEditorValue43, '');
                            serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorArgument6) + visualEditorValue42 + visualEditorValue40[sliceMethod](visualEditorValue41) + serializedSource[sliceMethod](initializeVisualEditorArgument7);
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            runtimeValue4[disabledProperty] = false;
                            return true
                        },
                        escapeMarkupAttribute = function(markupValue) {
                            return String(markupValue)[splitMethod]('&')[joinMethod]('&amp;')[splitMethod]('"')[joinMethod]('&quot;')[splitMethod]('<')[joinMethod]('&lt;')[splitMethod]('>')[joinMethod]('&gt;')
                        },
                        syncMarkupSource = function(markupTarget, markupStart, markupEnd, markupProperty, markupValue) {
                            var markupSource = serializedSource[sliceMethod](markupStart, markupEnd),
                                markupOpeningEnd = findOpeningTagEnd(markupSource);
                            if (markupOpeningEnd < 0) return false;
                            var markupOpening = markupSource[sliceMethod](0, markupOpeningEnd),
                                markupAttributePattern = new RegExp('(?:\\s|^)' + markupProperty[replaceMethod](/[.*+?^${}()|[\\]\\\\]/g, '\\$&') + '\\s*=\\s*(?:"[^"]*"|\\x27[^\\x27]*\\x27|[^\\s>]+)', 'i'),
                                markupAttributeValue = markupValue ? ' ' + markupProperty + '="' + escapeMarkupAttribute(markupValue) + '"' : '';
                            if (markupAttributePattern.test(markupOpening)) markupOpening = markupOpening[replaceMethod](markupAttributePattern, markupAttributeValue);
                            else if (markupAttributeValue) {
                                var markupInsertAt = markupOpening[lengthProperty] - 1;
                                if (markupOpening[markupInsertAt - 1] == '/') markupInsertAt--;
                                markupOpening = markupOpening[sliceMethod](0, markupInsertAt) + markupAttributeValue + markupOpening[sliceMethod](markupInsertAt)
                            }
                            serializedSource = serializedSource[sliceMethod](0, markupStart) + markupOpening + markupSource[sliceMethod](markupOpeningEnd) + serializedSource[sliceMethod](markupEnd);
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            runtimeValue4[disabledProperty] = false;
                            return true
                        },
                        isValidStyleValue = function(initializeVisualEditorArgument9, initializeVisualEditorArgument10) {
                            if (!initializeVisualEditorArgument10) return '';
                            if (initializeVisualEditorArgument10[lengthProperty] > 180 || /[{}<>;]/.test(initializeVisualEditorArgument10) || /(?:javascript|expression|url)\s*\(/i.test(initializeVisualEditorArgument10)) return null;
                            try {
                                if (!windowObject.CSS || !windowObject.CSS.supports || !windowObject.CSS.supports(initializeVisualEditorArgument9, initializeVisualEditorArgument10)) return null
                            } catch (visualEditorValue46) {
                                return null
                            }
                            return initializeVisualEditorArgument10
                        },
                        showStructuralError = function() {
                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'struct-invalid-tag') || 'Unsupported tag';
                            runtimeValue9[classNameProperty] = 'o';
                            fadeIn(runtimeValue9)
                        },
                        applyStructuralSource = function(structuralSource) {
                            serializedSource = structuralSource;
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                            runtimeValue11[innerHTMLProperty] = serializedSource;
                            runtimeValue4[disabledProperty] = false;
                            writeSourceDraft(serializedSource);
                            runtimeValue75();
                            return true
                        },
                        attachStructuralNode = function(structuralNode) {
                            if (!structuralNode) return;
                            var structuralNodeTag = structuralNode[tagNameProperty][toLowerCaseMethod]();
                            if (structuralNodeTag == imageTagName) {
                                structuralNode.ondragover = runtimeValue112;
                                structuralNode.ondragleave = runtimeValue113;
                                structuralNode.ondrop = runtimeValue114;
                                structuralNode.ondragstart = function() { runtimeValue1.e = this };
                                structuralNode[addEventListenerMethod](mouseDownEvent, runtimeValue106)
                            } else {
                                structuralNode[addEventListenerMethod](mouseDownEvent, function(event) {
                                    runtimeValue111(event);
                                    runtimeValue106.call(this)
                                });
                                structuralNode[addEventListenerMethod](mouseUpEvent, runtimeValue111);
                                structuralNode[addEventListenerMethod](clickEvent, runtimeValue111)
                            }
                        },
                        replaceStructuralTag = function(structuralTag) {
                            if (!styleInspectorTarget || structuralTagOptions[indexOfMethod](structuralTag) === -1) return false;
                            var structuralCurrentTag = styleInspectorTarget[tagNameProperty][toLowerCaseMethod]();
                            if (structuralCurrentTag == structuralTag) return true;
                            var structuralRange = getStyleSourceRange(styleInspectorTarget),
                                structuralParent = styleInspectorTarget[parentNodeProperty];
                            if (!structuralRange || !structuralParent || structuralCurrentTag == 'body') return false;
                            var structuralReplacement = runtimeValue127[createElementMethod](structuralTag);
                            for (var structuralAttributeIndex = 0; structuralAttributeIndex < styleInspectorTarget.attributes[lengthProperty]; structuralAttributeIndex++) {
                                var structuralAttribute = styleInspectorTarget.attributes[structuralAttributeIndex];
                                structuralReplacement[setAttributeMethod](structuralAttribute.name, structuralAttribute.value)
                            }
                            while (styleInspectorTarget[firstChildProperty]) structuralReplacement[appendChildMethod](styleInspectorTarget[firstChildProperty]);
                            structuralParent[replaceChildMethod](structuralReplacement, styleInspectorTarget);
                            try {
                                var structuralSource = serializedSource[sliceMethod](structuralRange[0], structuralRange[1]),
                                    structuralOpeningPattern = new RegExp('^(\\s*<\\s*)' + structuralCurrentTag + '(\\b)', 'i'),
                                    structuralClosingPattern = new RegExp('(</\\s*)' + structuralCurrentTag + '(\\s*>\\s*)$', 'i');
                                if (!structuralOpeningPattern.test(structuralSource)) throw new Error('opening tag not found');
                                structuralSource = structuralSource[replaceMethod](structuralOpeningPattern, '$1' + structuralTag + '$2');
                                if (structuralVoidTags[indexOfMethod]('|' + structuralCurrentTag + '|') !== -1) structuralSource += '</' + structuralTag + '>';
                                else if (structuralClosingPattern.test(structuralSource)) structuralSource = structuralSource[replaceMethod](structuralClosingPattern, '$1' + structuralTag + '$2');
                                else throw new Error('closing tag not found');
                                applyStructuralSource(serializedSource[sliceMethod](0, structuralRange[0]) + structuralSource + serializedSource[sliceMethod](structuralRange[1]));
                            } catch (structuralReplaceError) {
                                structuralParent[replaceChildMethod](styleInspectorTarget, structuralReplacement);
                                return false
                            }
                            attachStructuralNode(structuralReplacement);
                            styleInspectorTarget = structuralReplacement;
                            selectContextNode(structuralReplacement, 'element');
                            renderStyleInspector(structuralReplacement);
                            return true
                        },
                        insertStructuralNode = function(structuralPosition) {
                            var structuralTarget = contextTarget || styleInspectorTarget;
                            if (!structuralTarget || structuralTarget == runtimeValue127.body) return;
                            var structuralTag = windowObject.prompt(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'struct-tag-prompt') || 'New element tag', 'div');
                            if (structuralTag === null) return;
                            structuralTag = structuralTag.replace(/^\s+|\s+$/g, '')[toLowerCaseMethod]();
                            if (structuralTagOptions[indexOfMethod](structuralTag) === -1) {
                                showStructuralError();
                                return
                            }
                            if (structuralPosition == 'child' && structuralVoidTags[indexOfMethod]('|' + structuralTarget[tagNameProperty][toLowerCaseMethod]() + '|') !== -1) {
                                showStructuralError();
                                return
                            }
                            var structuralText = windowObject.prompt(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'struct-text-prompt') || 'New element text', '');
                            if (structuralText === null) return;
                            var structuralRange = getStyleSourceRange(structuralTarget),
                                structuralParent = structuralTarget[parentNodeProperty];
                            if (!structuralRange || !structuralParent) return;
                            var structuralNode = runtimeValue127[createElementMethod](structuralTag);
                            structuralNode[textContentProperty] = structuralText;
                            var structuralMarkup = structuralNode[outerHTMLProperty],
                                structuralSource = serializedSource;
                            if (structuralPosition == 'child') {
                                var structuralTargetSource = serializedSource[sliceMethod](structuralRange[0], structuralRange[1]),
                                    structuralClosingIndex = structuralTargetSource.search(new RegExp('</' + structuralTarget[tagNameProperty][toLowerCaseMethod]() + '\\s*>\\s*$', 'i'));
                                if (structuralClosingIndex < 0) return;
                                structuralSource = serializedSource[sliceMethod](0, structuralRange[0]) + structuralTargetSource[sliceMethod](0, structuralClosingIndex) + structuralMarkup + structuralTargetSource[sliceMethod](structuralClosingIndex) + serializedSource[sliceMethod](structuralRange[1]);
                                structuralTarget[appendChildMethod](structuralNode)
                            } else {
                                structuralSource = serializedSource[sliceMethod](0, structuralRange[1]) + structuralMarkup + serializedSource[sliceMethod](structuralRange[1]);
                                if (structuralTarget[nextElementSiblingProperty]) structuralParent[insertBeforeMethod](structuralNode, structuralTarget[nextElementSiblingProperty]); else structuralParent[appendChildMethod](structuralNode)
                            }
                            try { applyStructuralSource(structuralSource) } catch (structuralInsertError) {
                                if (structuralNode[parentNodeProperty]) structuralNode[parentNodeProperty][removeChildMethod](structuralNode);
                                return
                            }
                            attachStructuralNode(structuralNode);
                            selectContextNode(structuralNode, 'element')
                        },
                        applyStyleProperty = function() {
                            if (!styleInspectorTarget) return;
                            var visualEditorValue47 = this[getAttributeMethod]('data-myvibehtml-style-property'),
                                visualEditorValue48 = isValidStyleValue(visualEditorValue47, this[valueProperty][replaceMethod](/^\s+|\s+$/g, ''));
                            if (visualEditorValue48 === null) {
                                this[setAttributeMethod]('aria-invalid', 'true');
                                styleInspectorError.hidden = false;
                                return
                            }
                            var visualEditorValue49 = styleInspectorTarget[getAttributeMethod]('style'),
                                visualEditorValue50 = getStyleSourceRange(styleInspectorTarget);
                            if (!visualEditorValue50) return;
                            if (visualEditorValue48) styleInspectorTarget[styleProperty].setProperty(visualEditorValue47, visualEditorValue48);
                            else styleInspectorTarget[styleProperty].removeProperty(visualEditorValue47);
                            var visualEditorValue51 = styleInspectorTarget[getAttributeMethod]('style') || '',
                                visualEditorValue52 = syncStyleSource(styleInspectorTarget, visualEditorValue50[0], visualEditorValue50[1], visualEditorValue51);
                            if (!visualEditorValue52) {
                                if (visualEditorValue49 === null) styleInspectorTarget[removeAttributeMethod]('style');
                                else styleInspectorTarget[setAttributeMethod]('style', visualEditorValue49);
                                return
                            }
                            this[removeAttributeMethod]('aria-invalid');
                            styleInspectorError.hidden = true
                        },
                        applyMarkupProperty = function() {
                            if (!styleInspectorTarget) return;
                            var markupProperty = this[getAttributeMethod]('data-myvibehtml-markup-property'),
                                markupValue = this[valueProperty][replaceMethod](/^\s+|\s+$/g, ''),
                                markupTagChanged = markupProperty == 'tagName',
                                markupRange = getStyleSourceRange(styleInspectorTarget),
                                markupHadAttribute = styleInspectorTarget.hasAttribute(markupProperty),
                                markupPreviousValue = styleInspectorTarget[getAttributeMethod](markupProperty);
                            if (markupTagChanged) {
                                if (!replaceStructuralTag(markupValue)) {
                                    this[setAttributeMethod]('aria-invalid', 'true');
                                    styleInspectorError.hidden = false
                                } else {
                                    this[removeAttributeMethod]('aria-invalid');
                                    styleInspectorError.hidden = true
                                }
                                return
                            }
                            if (markupValue) styleInspectorTarget[setAttributeMethod](markupProperty, markupValue); else styleInspectorTarget[removeAttributeMethod](markupProperty);
                            if (!markupRange || !syncMarkupSource(styleInspectorTarget, markupRange[0], markupRange[1], markupProperty, markupValue)) {
                                if (markupHadAttribute) styleInspectorTarget[setAttributeMethod](markupProperty, markupPreviousValue); else styleInspectorTarget[removeAttributeMethod](markupProperty);
                                this[setAttributeMethod]('aria-invalid', 'true');
                                styleInspectorError.hidden = false;
                                return
                            }
                            this[removeAttributeMethod]('aria-invalid');
                            styleInspectorError.hidden = true
                        },
                        renderStyleInspector = function(initializeVisualEditorArgument11) {
                            if (!initializeVisualEditorArgument11 || initializeVisualEditorArgument11 == runtimeValue127.body) return;
                            createStyleInspector();
                            styleInspectorTarget = initializeVisualEditorArgument11;
                            var visualEditorValue53 = initializeVisualEditorArgument11[ownerDocumentProperty] && initializeVisualEditorArgument11[ownerDocumentProperty].defaultView ? initializeVisualEditorArgument11[ownerDocumentProperty].defaultView[getComputedStyleMethod](initializeVisualEditorArgument11) : runtimeValue126[contentWindowProperty][getComputedStyleMethod](initializeVisualEditorArgument11),
                                visualEditorValue54 = initializeVisualEditorArgument11[tagNameProperty][toLowerCaseMethod](),
                                visualEditorValue55 = initializeVisualEditorArgument11.id ? '#' + initializeVisualEditorArgument11.id : '',
                                visualEditorValue56 = initializeVisualEditorArgument11.className && typeof initializeVisualEditorArgument11.className == 'string' ? '.' + initializeVisualEditorArgument11.className[replaceMethod](/\s+/g, '.') : '';
                            styleInspector[querySelectorMethod]('[data-myvibehtml-style-target]')[textContentProperty] = '<' + visualEditorValue54 + visualEditorValue55 + visualEditorValue56 + '>';
                            for (var visualEditorValue57 = 0, visualEditorValue58 = styleInspectorFields[lengthProperty]; visualEditorValue57 < visualEditorValue58; visualEditorValue57++) {
                                var visualEditorValue59 = styleInspectorFields[visualEditorValue57],
                                    visualEditorValue60 = visualEditorValue59[getAttributeMethod]('data-myvibehtml-style-property'),
                                visualEditorValue61 = initializeVisualEditorArgument11[styleProperty].getPropertyValue(visualEditorValue60) || visualEditorValue53.getPropertyValue(visualEditorValue60) || '';
                                if (visualEditorValue59[tagNameProperty][toLowerCaseMethod]() == 'select' && visualEditorValue61) {
                                    var visualEditorValue62 = false;
                                    for (var visualEditorValue63 = 0, visualEditorValue64 = visualEditorValue59.options[lengthProperty]; visualEditorValue63 < visualEditorValue64; visualEditorValue63++) if (visualEditorValue59.options[visualEditorValue63].value == visualEditorValue61) visualEditorValue62 = true;
                                    if (!visualEditorValue62) {
                                        var visualEditorValue65 = documentObject[createElementMethod]('option');
                                        visualEditorValue65.value = visualEditorValue61;
                                        visualEditorValue65[textContentProperty] = visualEditorValue61;
                                        visualEditorValue59[appendChildMethod](visualEditorValue65)
                                    }
                                }
                                visualEditorValue59[valueProperty] = visualEditorValue61;
                                visualEditorValue59[removeAttributeMethod]('aria-invalid')
                            }
                            for (var markupInspectorValueIndex = 0, markupInspectorValueLength = markupInspectorFields[lengthProperty]; markupInspectorValueIndex < markupInspectorValueLength; markupInspectorValueIndex++) {
                                var markupInspectorField = markupInspectorFields[markupInspectorValueIndex],
                                    markupInspectorProperty = markupInspectorField[getAttributeMethod]('data-myvibehtml-markup-property'),
                                    markupInspectorValue = markupInspectorProperty == 'tagName' ? visualEditorValue54 : initializeVisualEditorArgument11[getAttributeMethod](markupInspectorProperty) || '';
                                if (markupInspectorProperty == 'tagName' && markupInspectorField[tagNameProperty][toLowerCaseMethod]() == 'select' && markupInspectorValue) {
                                    var markupHasCurrentOption = false;
                                    for (var markupOptionIndex = 0; markupOptionIndex < markupInspectorField.options[lengthProperty]; markupOptionIndex++) if (markupInspectorField.options[markupOptionIndex].value == markupInspectorValue) markupHasCurrentOption = true;
                                    if (!markupHasCurrentOption) {
                                        var markupCurrentOption = documentObject[createElementMethod]('option');
                                        markupCurrentOption.value = markupInspectorValue;
                                        markupCurrentOption[textContentProperty] = markupInspectorValue;
                                        markupInspectorField[appendChildMethod](markupCurrentOption)
                                    }
                                }
                                markupInspectorField[valueProperty] = markupInspectorValue;
                                markupInspectorField[removeAttributeMethod]('aria-invalid')
                            }
                            renderDesignTokens();
                            styleInspectorError.hidden = true;
                            styleInspector.hidden = false;
                            styleInspector[setAttributeMethod]('aria-hidden', 'false')
                        },
                        resetStyleInspector = function() {
                            if (!styleInspectorTarget) return;
                            var visualEditorValue62 = styleInspectorTarget[getAttributeMethod]('style'),
                                visualEditorValue63 = getStyleSourceRange(styleInspectorTarget);
                            if (!visualEditorValue63) return;
                            styleInspectorTarget[removeAttributeMethod]('style');
                            if (!syncStyleSource(styleInspectorTarget, visualEditorValue63[0], visualEditorValue63[1], '')) renderStyleInspector(styleInspectorTarget), styleInspectorTarget[setAttributeMethod]('style', visualEditorValue62 || '');
                            else renderStyleInspector(styleInspectorTarget)
                        },
                        createContextMenu = function() {
                            if (contextMenu) return contextMenu;
                            contextMenu = documentObject[createElementMethod]('div');
                            contextMenu.id = 'myvibehtml-context-menu';
                            contextMenu[setAttributeMethod]('role', 'menu');
                            contextMenu[setAttributeMethod]('aria-label', runtimeValue9[getAttributeMethod]('data-context-menu') || 'Element actions');
                            var visualEditorValue8 = [['element', runtimeValue9[getAttributeMethod]('data-select-element') || 'Select element'], ['section', runtimeValue9[getAttributeMethod]('data-select-section') || 'Select section'], ['block', runtimeValue9[getAttributeMethod]('data-select-block') || 'Select block']];
                            for (var visualEditorValue9 = 0, visualEditorValue10 = visualEditorValue8[lengthProperty]; visualEditorValue9 < visualEditorValue10; visualEditorValue9++) {
                                var visualEditorValue11 = documentObject[createElementMethod]('button');
                                visualEditorValue11.type = 'button';
                                visualEditorValue11[setAttributeMethod]('role', 'menuitem');
                                visualEditorValue11.action = visualEditorValue8[visualEditorValue9][0];
                                visualEditorValue11[textContentProperty] = visualEditorValue8[visualEditorValue9][1];
                                visualEditorValue11[addEventListenerMethod](clickEvent, function() {
                                    var createContextMenuValue1 = this.action == 'section' ? getSectionNode(contextTarget) : this.action == 'block' ? getBlockNode(contextTarget) : contextTarget;
                                    selectContextNode(createContextMenuValue1, this.action);
                                    hideContextMenu()
                                });
                                contextMenu[appendChildMethod](visualEditorValue11)
                            }
                            var visualEditorValue12 = documentObject[createElementMethod]('div');
                            visualEditorValue12[classNameProperty] = 'myvibehtml-context-divider';
                            contextMenu[appendChildMethod](visualEditorValue12);
                            var visualEditorValue13 = [['style', /[А-Яа-яЁё]/.test(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '') ? 'Изменить CSS' : 'Edit CSS', null], ['markup', 'HTML / ARIA', null], ['add-child', runtimeValue9[getAttributeMethod]('data-context-add-child') || 'Add inside', null], ['add-after', runtimeValue9[getAttributeMethod]('data-context-add-after') || 'Add next to', null], ['save-block', /[А-Яа-яЁё]/.test(runtimeValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '') ? 'Сохранить компонент' : 'Save component', null], ['media', runtimeValue9[getAttributeMethod]('data-context-media') || 'Replace image/icon', null], ['clone', runtimeValue9[getAttributeMethod]('data-context-copy') || 'Clone', runtimeValue89], ['up', runtimeValue9[getAttributeMethod]('data-context-up') || 'Move up', runtimeValue90], ['down', runtimeValue9[getAttributeMethod]('data-context-down') || 'Move down', runtimeValue91], ['delete', runtimeValue9[getAttributeMethod]('data-context-delete') || 'Delete', runtimeValue92]];
                            for (var visualEditorValue14 = 0, visualEditorValue15 = visualEditorValue13[lengthProperty]; visualEditorValue14 < visualEditorValue15; visualEditorValue14++) {
                                var visualEditorValue16 = documentObject[createElementMethod]('button');
                                visualEditorValue16.type = 'button';
                                visualEditorValue16[setAttributeMethod]('role', 'menuitem');
                                visualEditorValue16[classNameProperty] = 'myvibehtml-context-action';
                                visualEditorValue16.action = visualEditorValue13[visualEditorValue14][0];
                                if (visualEditorValue16.action == 'media') visualEditorValue16[setAttributeMethod]('data-myvibehtml-media-action', 'true');
                                if (visualEditorValue16.action == 'add-child') visualEditorValue16[setAttributeMethod]('data-myvibehtml-structural-child', 'true');
                                if (visualEditorValue16.action == 'add-after') visualEditorValue16[setAttributeMethod]('data-myvibehtml-structural-after', 'true');
                                visualEditorValue16.handler = visualEditorValue13[visualEditorValue14][2];
                                visualEditorValue16[textContentProperty] = visualEditorValue13[visualEditorValue14][1];
                                visualEditorValue16[addEventListenerMethod](clickEvent, function() {
                                    if (this.action == 'save-block') {
                                        saveBlockPreset(contextTarget);
                                        hideContextMenu();
                                        return
                                    }
                                    if (this.action == 'style' || this.action == 'markup') {
                                        var visualEditorValue17 = contextTarget && contextTarget[tagNameProperty][toLowerCaseMethod]() == 'edit' ? contextTarget[parentNodeProperty] : contextTarget;
                                        selectContextNode(visualEditorValue17, 'element');
                                        renderStyleInspector(visualEditorValue17);
                                        hideContextMenu();
                                        return
                                    }
                                    if (this.action == 'add-child' || this.action == 'add-after') {
                                        selectContextNode(contextTarget, 'element');
                                        insertStructuralNode(this.action == 'add-child' ? 'child' : 'after');
                                        hideContextMenu();
                                        return
                                    }
                                    if (this.action == 'media') {
                                        var visualEditorValue18 = getMediaTarget(contextTarget);
                                        if (!visualEditorValue18) return;
                                        selectContextNode(visualEditorValue18, 'element');
                                        hideContextMenu();
                                        openMediaPicker(visualEditorValue18);
                                        return
                                    }
                                    selectContextNode(contextTarget, 'element');
                                    if (this.handler) this.handler.call(this);
                                    hideContextMenu()
                                });
                                contextMenu[appendChildMethod](visualEditorValue16)
                            }
                            contextMenu[styleProperty][displayProperty] = noneValue;
                            documentObject.body[appendChildMethod](contextMenu);
                            contextMenu[addEventListenerMethod](keyDownEvent, function(event) {
                                var contextButtons = contextMenu[querySelectorAllMethod]('button'),
                                    visibleContextButtons = [],
                                    contextButtonIndex = -1;
                                for (var contextButtonCursor = 0; contextButtonCursor < contextButtons[lengthProperty]; contextButtonCursor++) if (contextButtons[contextButtonCursor][styleProperty][displayProperty] != noneValue) {
                                    visibleContextButtons[visibleContextButtons[lengthProperty]] = contextButtons[contextButtonCursor];
                                    if (contextButtons[contextButtonCursor] == documentObject[activeElementProperty]) contextButtonIndex = visibleContextButtons[lengthProperty] - 1
                                }
                                if (event[keyCodeProperty] == 27) {
                                    event[preventDefaultMethod]();
                                    hideContextMenu();
                                    return
                                }
                                if (event[keyCodeProperty] == 38 || event[keyCodeProperty] == 40) {
                                    event[preventDefaultMethod]();
                                    event[stopPropagationMethod]();
                                    if (!visibleContextButtons[lengthProperty]) return;
                                    contextButtonIndex = (contextButtonIndex + (event[keyCodeProperty] == 38 ? visibleContextButtons[lengthProperty] - 1 : 1)) % visibleContextButtons[lengthProperty];
                                    visibleContextButtons[contextButtonIndex][focusEvent]();
                                    return
                                }
                                if (event[keyCodeProperty] == 36 || event[keyCodeProperty] == 35) {
                                    event[preventDefaultMethod]();
                                    event[stopPropagationMethod]();
                                    if (visibleContextButtons[lengthProperty]) visibleContextButtons[event[keyCodeProperty] == 36 ? 0 : visibleContextButtons[lengthProperty] - 1][focusEvent]();
                                    return
                                }
                                if (event[keyCodeProperty] == 13 || event[keyCodeProperty] == 32) {
                                    event[preventDefaultMethod]();
                                    if (documentObject[activeElementProperty] && documentObject[activeElementProperty][clickEvent]) documentObject[activeElementProperty][clickEvent]()
                                }
                            });
                            documentObject[addEventListenerMethod](clickEvent, function(event) {
                                if (event.target != contextMenu && !contextMenu.contains(event.target)) hideContextMenu()
                            });
                            return contextMenu
                        },
                        showContextMenu = function(event) {
                            var visualEditorValue12 = getContextNode(event.target);
                            if (!visualEditorValue12) return;
                            event[preventDefaultMethod]();
                            event[stopPropagationMethod]();
                            contextTarget = visualEditorValue12;
                            var visualEditorValue13 = createContextMenu(),
                                visualEditorValue14 = runtimeValue126.getBoundingClientRect(),
                                visualEditorValue15 = visualEditorValue14.left + event.clientX,
                                visualEditorValue16 = visualEditorValue14.top + event.clientY;
                            var visualEditorValue17 = visualEditorValue13[querySelectorMethod]('[data-myvibehtml-media-action]');
                            if (visualEditorValue17) visualEditorValue17[styleProperty][displayProperty] = isMediaTarget(contextTarget) ? blockValue : noneValue;
                            var visualEditorValue18 = visualEditorValue13[querySelectorMethod]('[data-myvibehtml-structural-child]');
                            if (visualEditorValue18) visualEditorValue18[styleProperty][displayProperty] = structuralVoidTags[indexOfMethod]('|' + contextTarget[tagNameProperty][toLowerCaseMethod]() + '|') === -1 ? blockValue : noneValue;
                            if (visualEditorValue13[styleProperty][displayProperty] != blockValue) contextMenuPreviousFocus = documentObject[activeElementProperty];
                            visualEditorValue13[styleProperty][displayProperty] = blockValue;
                            visualEditorValue13[setAttributeMethod]('aria-hidden', 'false');
                            visualEditorValue15 = Math.max(8, Math.min(visualEditorValue15, windowObject.innerWidth - visualEditorValue13.offsetWidth - 8));
                            visualEditorValue16 = Math.max(8, Math.min(visualEditorValue16, windowObject.innerHeight - visualEditorValue13.offsetHeight - 8));
                            visualEditorValue13[styleProperty].left = visualEditorValue15 + 'px';
                            visualEditorValue13[styleProperty].top = visualEditorValue16 + 'px';
                            visualEditorValue13[firstElementChildProperty].focus()
                        },
                        runtimeValue72 = function(initializeVisualEditorArgument6) {
                            var visualEditorValue17 = [],
                                visualEditorValue18 = initializeVisualEditorArgument6[childNodesProperty];
                            for (var visualEditorValue19 = 0, visualEditorValue20 = visualEditorValue18[lengthProperty]; visualEditorValue19 < visualEditorValue20; visualEditorValue19++) {
                                if (visualEditorValue18[visualEditorValue19][nodeTypeProperty] == 3 && visualEditorValue18[visualEditorValue19][textContentProperty][matchMethod](new RegExp('\\S', 'gi'))) visualEditorValue17[visualEditorValue17[lengthProperty]] = visualEditorValue18[visualEditorValue19];
                                else if (visualEditorValue18[visualEditorValue19][nodeTypeProperty] == 1) {
                                    var visualEditorValue21 = visualEditorValue18[visualEditorValue19][tagNameProperty][toLowerCaseMethod]();
                                    if (visualEditorValue21 != scriptTagName && visualEditorValue21 != 'style') Array.prototype.push.apply(visualEditorValue17, runtimeValue72(visualEditorValue18[visualEditorValue19]))
                                }
                            }
                            return visualEditorValue17
                        },
                        runtimeValue73 = function(initializeVisualEditorArgument7) {
                            if (windowObject.opera) {
                                var visualEditorValue22 = initializeVisualEditorArgument7[nextSiblingProperty],
                                    visualEditorValue23 = initializeVisualEditorArgument7[innerHTMLProperty][splitMethod]('&nbsp;'),
                                    visualEditorValue24 = initializeVisualEditorArgument7.B[splitMethod]('&nbsp;');
                                if (visualEditorValue22 && visualEditorValue22[nodeTypeProperty] == 1 && initializeVisualEditorArgument7[getAttributeMethod](stringAttribute) && visualEditorValue22[getAttributeMethod](stringAttribute)) {
                                    if (!visualEditorValue22.B) visualEditorValue22.B = initializeVisualEditorArgument7.B;
                                    if (initializeVisualEditorArgument7 == runtimeValue127[activeElementProperty]) {
                                        visualEditorValue22[innerHTMLProperty] += '{!caret!}';
                                        runtimeValue73(visualEditorValue22);
                                        initializeVisualEditorArgument7[innerHTMLProperty] += visualEditorValue22[innerHTMLProperty][splitMethod]('{!caret!}')[joinMethod](caretMarkup + ' ');
                                        initializeVisualEditorArgument7[parentNodeProperty][removeChildMethod](visualEditorValue22);
                                        var visualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                        if (visualEditorValue25[lengthProperty]) {
                                            var visualEditorValue26 = runtimeValue126[contentWindowProperty][getSelectionMethod](),
                                                visualEditorValue27 = visualEditorValue25[0][nextSiblingProperty],
                                                visualEditorValue28 = runtimeValue127[createRangeMethod]();
                                            visualEditorValue28[setStartMethod](visualEditorValue27, 0);
                                            visualEditorValue28[setEndMethod](visualEditorValue27, 0);
                                            visualEditorValue28[collapseMethod](true);
                                            visualEditorValue26[removeAllRangesMethod]();
                                            visualEditorValue27[textContentProperty] = visualEditorValue27[textContentProperty][sliceMethod](1);
                                            visualEditorValue25[0][parentNodeProperty][removeChildMethod](visualEditorValue25[0]);
                                            visualEditorValue26[addRangeMethod](visualEditorValue28)
                                        }
                                    } else {
                                        runtimeValue73(visualEditorValue22);
                                        initializeVisualEditorArgument7[innerHTMLProperty] += visualEditorValue22[innerHTMLProperty];
                                        initializeVisualEditorArgument7[parentNodeProperty][removeChildMethod](visualEditorValue22)
                                    }
                                } else if (visualEditorValue22 && visualEditorValue22[nodeTypeProperty] == 3) {
                                    visualEditorValue22[textContentProperty] += '{!caret!}';
                                    initializeVisualEditorArgument7[innerHTMLProperty] += visualEditorValue22[textContentProperty];
                                    initializeVisualEditorArgument7[parentNodeProperty][removeChildMethod](visualEditorValue22);
                                    runtimeValue73(initializeVisualEditorArgument7);
                                    initializeVisualEditorArgument7[innerHTMLProperty] = initializeVisualEditorArgument7[innerHTMLProperty][splitMethod]('{!caret!}')[joinMethod](caretMarkup + ' ');
                                    var visualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                    if (visualEditorValue25[lengthProperty]) {
                                        var visualEditorValue26 = runtimeValue126[contentWindowProperty][getSelectionMethod](),
                                            visualEditorValue27 = visualEditorValue25[0][nextSiblingProperty],
                                            visualEditorValue28 = runtimeValue127[createRangeMethod]();
                                        visualEditorValue28[setStartMethod](visualEditorValue27, 0);
                                        visualEditorValue28[setEndMethod](visualEditorValue27, 0);
                                        visualEditorValue28[collapseMethod](true);
                                        visualEditorValue26[removeAllRangesMethod]();
                                        visualEditorValue27[textContentProperty] = visualEditorValue27[textContentProperty][sliceMethod](1);
                                        visualEditorValue25[0][parentNodeProperty][removeChildMethod](visualEditorValue25[0]);
                                        visualEditorValue26[addRangeMethod](visualEditorValue28)
                                    }
                                }
                                if ((visualEditorValue23[0] == '' && visualEditorValue23[0] != visualEditorValue24) || (visualEditorValue23[visualEditorValue23[lengthProperty] - 1] == '' && visualEditorValue23[visualEditorValue23[lengthProperty] - 1] != visualEditorValue24[visualEditorValue24[lengthProperty] - 1])) {
                                    var visualEditorValue26 = runtimeValue126[contentWindowProperty][getSelectionMethod](),
                                        visualEditorValue28 = visualEditorValue26[getRangeAtMethod](0),
                                        visualEditorValue25 = documentObject[createElementMethod](caretValue);
                                    visualEditorValue28[insertNodeMethod](visualEditorValue25);
                                    initializeVisualEditorArgument7[innerHTMLProperty] = initializeVisualEditorArgument7[innerHTMLProperty][replaceMethod](new RegExp('&nbsp;$', 'gi'), '\n')[splitMethod](caretMarkup)[joinMethod](caretMarkup + ' ');
                                    visualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                    if (visualEditorValue25[lengthProperty]) {
                                        var visualEditorValue27 = visualEditorValue25[0][nextSiblingProperty],
                                            visualEditorValue28 = runtimeValue127[createRangeMethod]();
                                        visualEditorValue28[setStartMethod](visualEditorValue27, 0);
                                        visualEditorValue28[setEndMethod](visualEditorValue27, 0);
                                        visualEditorValue28[collapseMethod](true);
                                        visualEditorValue26[removeAllRangesMethod]();
                                        visualEditorValue27[textContentProperty] = visualEditorValue27[textContentProperty][sliceMethod](1);
                                        visualEditorValue25[0][parentNodeProperty][removeChildMethod](visualEditorValue25[0]);
                                        visualEditorValue26[addRangeMethod](visualEditorValue28)
                                    }
                                }
                            }
                            if (initializeVisualEditorArgument7[innerHTMLProperty][matchMethod](new RegExp('[<>]', 'gi'))) {
                                var visualEditorValue26 = runtimeValue126[contentWindowProperty][getSelectionMethod](),
                                    visualEditorValue28 = visualEditorValue26[getRangeAtMethod](0),
                                    visualEditorValue25 = documentObject[createElementMethod](caretValue);
                                visualEditorValue28[insertNodeMethod](visualEditorValue25);
                                initializeVisualEditorArgument7[innerHTMLProperty] = initializeVisualEditorArgument7[innerHTMLProperty][splitMethod](caretMarkup)[joinMethod]('{!caret!}')[replaceMethod](new RegExp('<.*?>', 'gi'), '')[splitMethod]('{!caret!}')[joinMethod](caretMarkup + ' ');
                                visualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                if (visualEditorValue25[lengthProperty]) {
                                    var visualEditorValue27 = visualEditorValue25[0][nextSiblingProperty],
                                        visualEditorValue28 = runtimeValue127[createRangeMethod]();
                                    visualEditorValue28[setStartMethod](visualEditorValue27, 0);
                                    visualEditorValue28[setEndMethod](visualEditorValue27, 0);
                                    visualEditorValue28[collapseMethod](true);
                                    visualEditorValue26[removeAllRangesMethod]();
                                    visualEditorValue27[textContentProperty] = visualEditorValue27[textContentProperty][sliceMethod](1);
                                    visualEditorValue25[0][parentNodeProperty][removeChildMethod](visualEditorValue25[0]);
                                    visualEditorValue26[addRangeMethod](visualEditorValue28)
                                }
                            }
                        },
                        runtimeValue74 = function(initializeVisualEditorArgument8) {
                            var visualEditorValue29 = initializeVisualEditorArgument8[querySelectorAllMethod]('[' + stringAttribute + ']');
                            for (var visualEditorValue30 = 0, visualEditorValue31 = visualEditorValue29[lengthProperty]; visualEditorValue30 < visualEditorValue31; visualEditorValue30++) {
                                var visualEditorValue32 = visualEditorValue29[visualEditorValue30][nextElementSiblingProperty];
                                if (visualEditorValue32 && visualEditorValue29[visualEditorValue30][getAttributeMethod](stringAttribute) && visualEditorValue32[getAttributeMethod](stringAttribute)) {
                                    var visualEditorValue33 = visualEditorValue29[visualEditorValue30][innerHTMLProperty][replaceMethod](new RegExp('^([\\S\\s]+?)\\s*$', 'gi'), '$1'),
                                        visualEditorValue34 = visualEditorValue32[innerHTMLProperty];
                                    visualEditorValue29[visualEditorValue30][innerHTMLProperty] = visualEditorValue33 + visualEditorValue34;
                                    var visualEditorValue35 = visualEditorValue29[visualEditorValue30].B,
                                        visualEditorValue36 = visualEditorValue32.B;
                                    if (visualEditorValue35 || visualEditorValue36) {
                                        if (!visualEditorValue35) visualEditorValue35 = visualEditorValue33;
                                        else visualEditorValue35 = visualEditorValue35[replaceMethod](new RegExp('^([\\S\\s]+?)\\s*$', 'gi'), '$1');
                                        if (!visualEditorValue36) visualEditorValue36 = visualEditorValue34;
                                        visualEditorValue29[visualEditorValue30].B = visualEditorValue35 + visualEditorValue36
                                    }
                                    visualEditorValue32[parentNodeProperty][removeChildMethod](visualEditorValue32)
                                }
                            }
                            runtimeValue75()
                        },
                        runtimeValue75 = function() {
                            var visualEditorValue37 = false;
                            if (serializedSource != runtimeValue11[innerHTMLProperty]) visualEditorValue37 = true;
                            else {
                                var visualEditorValue38 = runtimeValue127[querySelectorAllMethod]('[' + stringAttribute + ']'),
                                    visualEditorValue39 = runtimeValue127[querySelectorAllMethod]('[' + attributesAttribute + ']');
                                for (var visualEditorValue40 = 0, visualEditorValue41 = visualEditorValue38[lengthProperty]; visualEditorValue40 < visualEditorValue41; visualEditorValue40++) {
                                    if (visualEditorValue38[visualEditorValue40].B && visualEditorValue38[visualEditorValue40].B != visualEditorValue38[visualEditorValue40][innerHTMLProperty][splitMethod](caretMarkup)[joinMethod]('')) {
                                        visualEditorValue37 = true;
                                        break
                                    }
                                }
                                for (var visualEditorValue40 = 0, visualEditorValue41 = visualEditorValue39[lengthProperty]; visualEditorValue40 < visualEditorValue41; visualEditorValue40++) {
                                    var visualEditorValue42 = visualEditorValue39[visualEditorValue40].C;
                                    for (var visualEditorValue43 = 0, visualEditorValue44 = visualEditorValue42[lengthProperty]; visualEditorValue43 < visualEditorValue44; visualEditorValue43++) {
                                        for (var visualEditorValue45 = 0, visualEditorValue46 = runtimeValue70[lengthProperty]; visualEditorValue45 < visualEditorValue46; visualEditorValue45++) {
                                            if (typeof visualEditorValue42[visualEditorValue43][valueAttribute + runtimeValue70[visualEditorValue45]] != 'undefined') {
                                                var visualEditorValue47 = visualEditorValue42[visualEditorValue43][valueAttribute + runtimeValue70[visualEditorValue45]];
                                                if (runtimeValue70[visualEditorValue45] == 'href') {
                                                    if (visualEditorValue47 != visualEditorValue42[visualEditorValue43].z) {
                                                        visualEditorValue37 = true;
                                                        break
                                                    }
                                                } else if (visualEditorValue47 != visualEditorValue42[visualEditorValue43][getAttributeMethod](runtimeValue70[visualEditorValue45])) {
                                                    visualEditorValue37 = true;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (visualEditorValue37) {
                                if (runtimeValue9[textContentProperty] == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ae')) fadeOut(runtimeValue9);
                                runtimeValue4[disabledProperty] = false
                            } else if (!runtimeValue11[getAttributeMethod](dataAttributePrefix + 'cu')) runtimeValue4[disabledProperty] = true
                        },
                        runtimeValue76 = function(initializeVisualEditorArgument9, initializeVisualEditorArgument10) {
                            if (!runtimeValue78(initializeVisualEditorArgument9, initializeVisualEditorArgument10)) initializeVisualEditorArgument9[classNameProperty] += ' ' + initializeVisualEditorArgument10
                        },
                        runtimeValue77 = function(initializeVisualEditorArgument11, initializeVisualEditorArgument12) {
                            if (runtimeValue78(initializeVisualEditorArgument11, initializeVisualEditorArgument12)) initializeVisualEditorArgument11[classNameProperty] = ((' ' + initializeVisualEditorArgument11[classNameProperty] + ' ')[replaceMethod](' ' + initializeVisualEditorArgument12 + ' ', ' '))[sliceMethod](1, -1)
                        },
                        runtimeValue78 = function(initializeVisualEditorArgument13, initializeVisualEditorArgument14) {
                            if ((' ' + initializeVisualEditorArgument13[classNameProperty] + ' ')[indexOfMethod](' ' + initializeVisualEditorArgument14 + ' ') != -1) return true
                        },
                        runtimeValue79 = function() {
                            var visualEditorValue48 = runtimeValue127[querySelectorAllMethod]('[' + stringAttribute + ']'),
                                visualEditorValue49 = runtimeValue127[querySelectorAllMethod]('[' + attributesAttribute + ']');
                            for (var visualEditorValue50 = 0, visualEditorValue51 = visualEditorValue48[lengthProperty]; visualEditorValue50 < visualEditorValue51; visualEditorValue50++) {
                                var visualEditorValue52 = visualEditorValue48[visualEditorValue50].B,
                                    visualEditorValue53 = visualEditorValue48[visualEditorValue50][innerHTMLProperty];
                                if (visualEditorValue52 && visualEditorValue52 != visualEditorValue53) {
                                    var visualEditorValue54 = runtimeValue103('>' + visualEditorValue52 + '<'),
                                        visualEditorValue55 = visualEditorValue54[lengthProperty] - 1;
                                    if (visualEditorValue55 && sha1(locationObject.hostname[replaceMethod]('www.', ''))) {
                                        if (visualEditorValue55 == 1) {
                                            serializedSource = visualEditorValue54[joinMethod]('>' + visualEditorValue53 + '<');
                                            runtimeValue11[innerHTMLProperty] = serializedSource;
                                            visualEditorValue48[visualEditorValue50].B = visualEditorValue53
                                        } else {
                                            var visualEditorValue56 = runtimeValue127[querySelectorAllMethod]('[' + stringAttribute + ']');
                                            for (var visualEditorValue57 = 0, visualEditorValue58 = 0, visualEditorValue59 = false, visualEditorValue60 = visualEditorValue56[lengthProperty]; visualEditorValue57 < visualEditorValue60; visualEditorValue57++) {
                                                var visualEditorValue61 = runtimeValue102(visualEditorValue56[visualEditorValue57]);
                                                if (visualEditorValue61 == visualEditorValue52) {
                                                    if (visualEditorValue59 === false && visualEditorValue48[visualEditorValue50] == visualEditorValue56[visualEditorValue57]) visualEditorValue59 = visualEditorValue58;
                                                    visualEditorValue58++
                                                }
                                            }
                                            if (visualEditorValue54[lengthProperty] == (visualEditorValue58 + 1) && visualEditorValue59 !== false) {
                                                for (var visualEditorValue62 = 0, visualEditorValue63 = visualEditorValue54[lengthProperty]; visualEditorValue62 < visualEditorValue63; visualEditorValue62++) {
                                                    if (visualEditorValue59 == visualEditorValue62) {
                                                        var visualEditorValue64 = visualEditorValue54[sliceMethod](0, visualEditorValue59 + 1)[joinMethod]('>' + visualEditorValue52 + '<'),
                                                            visualEditorValue65 = visualEditorValue54[sliceMethod](visualEditorValue59 + 1)[joinMethod]('>' + visualEditorValue52 + '<');
                                                        serializedSource = visualEditorValue64 + '>' + visualEditorValue53 + '<' + visualEditorValue65;
                                                        runtimeValue11[innerHTMLProperty] = serializedSource;
                                                        visualEditorValue48[visualEditorValue50].B = visualEditorValue53
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            for (var visualEditorValue50 = 0, visualEditorValue51 = visualEditorValue49[lengthProperty]; visualEditorValue50 < visualEditorValue51; visualEditorValue50++) {
                                var visualEditorValue66 = visualEditorValue49[visualEditorValue50].C;
                                for (var visualEditorValue67 = 0, visualEditorValue68 = visualEditorValue66[lengthProperty]; visualEditorValue67 < visualEditorValue68; visualEditorValue67++) {
                                    for (var visualEditorValue69 = 0, visualEditorValue70 = runtimeValue70[lengthProperty]; visualEditorValue69 < visualEditorValue70; visualEditorValue69++) {
                                        if (typeof visualEditorValue66[visualEditorValue67][valueAttribute + runtimeValue70[visualEditorValue69]] != 'undefined') {
                                            var visualEditorValue71 = visualEditorValue66[visualEditorValue67][tagNameProperty][toLowerCaseMethod](),
                                                visualEditorValue72 = visualEditorValue66[visualEditorValue67][valueAttribute + runtimeValue70[visualEditorValue69]],
                                                visualEditorValue73 = visualEditorValue66[visualEditorValue67][getAttributeMethod](runtimeValue70[visualEditorValue69]);
                                            if (runtimeValue70[visualEditorValue69] == 'href') visualEditorValue73 = visualEditorValue66[visualEditorValue67].z;
                                            if (visualEditorValue72 != visualEditorValue73) {
                                                var visualEditorValue74 = runtimeValue118(visualEditorValue71, runtimeValue70[visualEditorValue69], visualEditorValue73),
                                                    visualEditorValue75 = runtimeValue119(visualEditorValue71, runtimeValue70[visualEditorValue69], visualEditorValue73),
                                                    visualEditorValue76 = visualEditorValue75[indexOfMethod](visualEditorValue66[visualEditorValue67]);
                                                if (visualEditorValue74[lengthProperty] == visualEditorValue75[lengthProperty] && visualEditorValue76 !== -1) {
                                                    for (var visualEditorValue50 = 0, visualEditorValue77 = serializedSource, visualEditorValue51 = visualEditorValue74[lengthProperty]; visualEditorValue50 < visualEditorValue51; visualEditorValue50++) visualEditorValue77 = visualEditorValue77[splitMethod](visualEditorValue74[visualEditorValue50])[joinMethod]('{-' + visualEditorValue73 + '-}');
                                                    for (var visualEditorValue50 = 0, visualEditorValue78 = visualEditorValue77[splitMethod]('{-' + visualEditorValue73 + '-}'), visualEditorValue77 = visualEditorValue78[0], visualEditorValue51 = visualEditorValue74[lengthProperty]; visualEditorValue50 < visualEditorValue51; visualEditorValue50++) {
                                                        if (visualEditorValue50 == visualEditorValue76) {
                                                            var visualEditorValue79 = visualEditorValue74[visualEditorValue50][replaceMethod](new RegExp('^(<' + visualEditorValue71 + '[^>]+?' + runtimeValue70[visualEditorValue69] + '\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue72 + '$2');
                                                            visualEditorValue79 = visualEditorValue79[replaceMethod](new RegExp('^(<' + visualEditorValue71 + '[^>]+?' + runtimeValue70[visualEditorValue69] + '\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue72 + '$2');
                                                            visualEditorValue79 = visualEditorValue79[replaceMethod](new RegExp('^(<' + visualEditorValue71 + '[^>]+?' + runtimeValue70[visualEditorValue69] + '\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue72 + '$2');
                                                            visualEditorValue77 = visualEditorValue77 + visualEditorValue79 + visualEditorValue78[visualEditorValue50 + 1]
                                                        } else visualEditorValue77 = visualEditorValue77 + visualEditorValue74[visualEditorValue50] + visualEditorValue78[visualEditorValue50 + 1]
                                                    }
                                                    serializedSource = visualEditorValue77;
                                                    runtimeValue11[innerHTMLProperty] = serializedSource;
                                                    if (runtimeValue70[visualEditorValue69] == 'href') visualEditorValue66[visualEditorValue67].z = visualEditorValue72;
                                                    else visualEditorValue66[visualEditorValue67][setAttributeMethod](runtimeValue70[visualEditorValue69], visualEditorValue72)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            writeSourceDraft(serializedSource);
                            return runtimeValue124(serializedSource)
                        },
                        runtimeValue80 = function(initializeVisualEditorArgument15) {
                            var visualEditorValue80 = false;
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('&(#?[a-z0-9]{2,8});', 'gi'), '{%~$1~%}');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod]('&')[joinMethod]('&amp;amp;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod]('{%~amp~%}')[joinMethod]('&amp;amp;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('{%~(lt|gt|nbsp)~%}', 'gi'), '&amp;$1;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('{%~(#?[a-z0-9]{2,8})~%}', 'gi'), '&$1;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod](' ')[joinMethod]('&amp;nbsp;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('<([^a-z/])', 'gi'), '&amp;lt;$1');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('[<>]', 'gi'), function(gwArgument1) {
                                if (gwArgument1 == '<') {
                                    if (visualEditorValue80) return '&amp;lt;';
                                    else visualEditorValue80 = true
                                } else {
                                    if (!visualEditorValue80) return '&amp;gt;';
                                    else visualEditorValue80 = false
                                }
                                return gwArgument1
                            });
                            var visualEditorValue81 = documentObject[createElementMethod](textareaTagName),
                                visualEditorValue82 = documentObject[createElementMethod]('div');
                            visualEditorValue82[innerHTMLProperty] = '&shy;';
                            if (visualEditorValue82[innerHTMLProperty] == '&shy;') initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod]('­')[joinMethod]('&amp;shy;');
                            visualEditorValue81[innerHTMLProperty] = initializeVisualEditorArgument15[splitMethod](textareaTagName)[joinMethod]('_extarea');
                            return visualEditorValue81[valueProperty][splitMethod]('_extarea')[joinMethod](textareaTagName)
                        },
                        syncToolbarSpace = function(initializeVisualEditorArgument16) {
                            var visualEditorValue83 = documentObject[querySelectorMethod]('#d');
                            if (visualEditorValue83) {
                                if (initializeVisualEditorArgument16) {
                                    visualEditorValue83[setAttributeMethod]('data-myvibehtml-toolbar', 'open');
                                    visualEditorValue83[styleProperty].setProperty('--myvibehtml-toolbar-space', Math.max(116, Math.ceil(runtimeValue18.getBoundingClientRect().bottom + 8)) + 'px')
                                } else {
                                    visualEditorValue83[removeAttributeMethod]('data-myvibehtml-toolbar');
                                    visualEditorValue83[styleProperty].removeProperty('--myvibehtml-toolbar-space')
                                }
                            }
                        },
                        runtimeValue81 = function(initializeVisualEditorArgument17) {
                            var visualEditorValue84 = runtimeValue87(initializeVisualEditorArgument17);
                            if (visualEditorValue84[lengthProperty]) {
                                for (var visualEditorValue85 = '', visualEditorValue86 = visualEditorValue84[lengthProperty] - 1; visualEditorValue86 >= 0; visualEditorValue86--) visualEditorValue85 += runtimeValue20[splitMethod]('{tagname}')[joinMethod](visualEditorValue84[visualEditorValue86][tagNameProperty][toLowerCaseMethod]());
                                runtimeValue19[innerHTMLProperty] = visualEditorValue85;
                                for (var visualEditorValue86 = 0, visualEditorValue87 = runtimeValue19.children, visualEditorValue88 = visualEditorValue87[lengthProperty]; visualEditorValue86 < visualEditorValue88; visualEditorValue86++) {
                                    visualEditorValue87[visualEditorValue86].d = visualEditorValue84[visualEditorValue84[lengthProperty] - visualEditorValue86 - 1];
                                    visualEditorValue87[visualEditorValue86][addEventListenerMethod](clickEvent, runtimeValue88)
                                }
                                visualEditorValue87[visualEditorValue86 - 1][removeEventListenerMethod](clickEvent, runtimeValue88);
                                visualEditorValue87[visualEditorValue86 - 1][classNameProperty] = 'l';
                                visualEditorValue87[visualEditorValue86 - 1].d = visualEditorValue84[0];
                                visualEditorValue84[0][setAttributeMethod](focusAttribute, true);
                                runtimeValue66.d = initializeVisualEditorArgument17;
                                if (initializeVisualEditorArgument17[getAttributeMethod](disabledProperty)) {
                                    visualEditorValue84[0][setAttributeMethod](disabledAttribute, true);
                                    runtimeValue9[classNameProperty] = 'o';
                                    runtimeValue125();
                                    if (runtimeValue9[styleProperty][displayProperty] == blockValue) {
                                        windowObject[setTimeoutMethod](function() {
                                            fadeIn(runtimeValue9)
                                        }, 400)
                                    } else fadeIn(runtimeValue9)
                                }
                                runtimeValue18[styleProperty][displayProperty] = blockValue;
                                syncToolbarSpace(true);
                                runtimeValue82(visualEditorValue84[0]);
                                runtimeValue85(initializeVisualEditorArgument17)
                            }
                        },
                        runtimeValue82 = function(initializeVisualEditorArgument18) {
                            runtimeValue62[classNameProperty] = 'n';
                            runtimeValue63[classNameProperty] = 'n';
                            runtimeValue64[classNameProperty] = 'n';
                            runtimeValue65[classNameProperty] = 'n';
                            if (runtimeValue93(initializeVisualEditorArgument18) && runtimeValue94(initializeVisualEditorArgument18)) {
                                runtimeValue62[classNameProperty] = '';
                                runtimeValue65[classNameProperty] = '';
                                runtimeValue62[addEventListenerMethod](clickEvent, runtimeValue89);
                                runtimeValue65[addEventListenerMethod](clickEvent, runtimeValue92);
                                for (var visualEditorValue89 = initializeVisualEditorArgument18[previousElementSiblingProperty]; visualEditorValue89; visualEditorValue89 = visualEditorValue89[previousElementSiblingProperty]) {
                                    var visualEditorValue90 = visualEditorValue89[tagNameProperty][toLowerCaseMethod]();
                                    if (visualEditorValue90 != scriptTagName && visualEditorValue90 != 'style' && runtimeValue93(visualEditorValue89)) {
                                        runtimeValue63[classNameProperty] = '';
                                        runtimeValue63[addEventListenerMethod](clickEvent, runtimeValue90);
                                        break
                                    }
                                }
                                for (var visualEditorValue91 = initializeVisualEditorArgument18[nextElementSiblingProperty]; visualEditorValue91; visualEditorValue91 = visualEditorValue91[nextElementSiblingProperty]) {
                                    var visualEditorValue90 = visualEditorValue91[tagNameProperty][toLowerCaseMethod]();
                                    if (visualEditorValue90 != scriptTagName && visualEditorValue90 != 'style' && runtimeValue94(visualEditorValue91)) {
                                        runtimeValue64[classNameProperty] = '';
                                        runtimeValue64[addEventListenerMethod](clickEvent, runtimeValue91);
                                        break
                                    }
                                }
                                if (runtimeValue9[styleProperty][displayProperty] == blockValue && (runtimeValue9[firstElementChildProperty] || runtimeValue9[textContentProperty] == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'br'))) fadeOut(runtimeValue9)
                            } else {
                                initializeVisualEditorArgument18[setAttributeMethod](disabledAttribute, true);
                                runtimeValue9[classNameProperty] = 'o';
                                runtimeValue125();
                                if (runtimeValue9[styleProperty][displayProperty] == blockValue) {
                                    windowObject[setTimeoutMethod](function() {
                                        fadeIn(runtimeValue9)
                                    }, 400)
                                } else fadeIn(runtimeValue9)
                            }
                        },
                        runtimeValue83 = function() {
                            if (runtimeValue85.E) delete runtimeValue85.E;
                            var visualEditorValue92 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (visualEditorValue92) {
                                runtimeValue19[innerHTMLProperty] = '';
                                visualEditorValue92[removeAttributeMethod](focusAttribute);
                                runtimeValue62[classNameProperty] = '';
                                runtimeValue63[classNameProperty] = '';
                                runtimeValue64[classNameProperty] = '';
                                runtimeValue65[classNameProperty] = '';
                                runtimeValue62[removeEventListenerMethod](clickEvent, runtimeValue89);
                                runtimeValue63[removeEventListenerMethod](clickEvent, runtimeValue90);
                                runtimeValue64[removeEventListenerMethod](clickEvent, runtimeValue91);
                                runtimeValue65[removeEventListenerMethod](clickEvent, runtimeValue92);
                                runtimeValue18[styleProperty][displayProperty] = '';
                                syncToolbarSpace(false);
                                runtimeValue84();
                                if (runtimeValue127[activeElementProperty]) runtimeValue127[activeElementProperty][blurEvent]();
                                if (runtimeValue9[styleProperty][displayProperty] == blockValue && (runtimeValue9[firstElementChildProperty] || runtimeValue9[textContentProperty] == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'br'))) fadeOut(runtimeValue9)
                            }
                        },
                        runtimeValue84 = function() {
                            if (runtimeValue66[styleProperty][displayProperty] == blockValue) {
                                runtimeValue66[styleProperty][displayProperty] = '';
                                runtimeValue66[classNameProperty] = '';
                                if (runtimeValue67[styleProperty][displayProperty] == blockValue) runtimeValue85.E = true;
                                else runtimeValue66[removeEventListenerMethod](mouseDownEvent, runtimeValue86);
                                runtimeValue67[styleProperty][displayProperty] = '';
                                runtimeValue68[innerHTMLProperty] = ''
                            }
                        },
                        runtimeValue85 = function(initializeVisualEditorArgument19) {
                            runtimeValue84();
                            for (var visualEditorValue93 = initializeVisualEditorArgument19; visualEditorValue93; visualEditorValue93 = visualEditorValue93[parentNodeProperty]) {
                                var visualEditorValue94 = visualEditorValue93[tagNameProperty];
                                if (visualEditorValue94 && visualEditorValue94[toLowerCaseMethod]() != 'body') {
                                    for (var visualEditorValue95 = 0, visualEditorValue96 = runtimeValue70[lengthProperty]; visualEditorValue95 < visualEditorValue96; visualEditorValue95++) {
                                        var visualEditorValue97 = visualEditorValue93[getAttributeMethod](runtimeValue70[visualEditorValue95]);
                                        if (runtimeValue70[visualEditorValue95] == 'href') visualEditorValue97 = visualEditorValue93.z;
                                        if (visualEditorValue97) {
                                            var visualEditorValue98 = runtimeValue118(visualEditorValue94, runtimeValue70[visualEditorValue95], visualEditorValue97),
                                                visualEditorValue99 = runtimeValue119(visualEditorValue94, runtimeValue70[visualEditorValue95], visualEditorValue97),
                                                visualEditorValue100 = visualEditorValue99[indexOfMethod](visualEditorValue93);
                                            if (visualEditorValue98[lengthProperty] == visualEditorValue99[lengthProperty] && visualEditorValue100 !== -1) {
                                                if (typeof visualEditorValue93[valueAttribute + runtimeValue70[visualEditorValue95]] != 'undefined') visualEditorValue97 = visualEditorValue93[valueAttribute + runtimeValue70[visualEditorValue95]];
                                                var visualEditorValue101 = runtimeValue127[createElementMethod]('div');
                                                visualEditorValue101[innerHTMLProperty] = runtimeValue69[splitMethod]('{name}')[joinMethod](runtimeValue70[visualEditorValue95])[splitMethod]('{value}')[joinMethod](visualEditorValue97);
                                                var visualEditorValue102 = runtimeValue68[firstElementChildProperty];
                                                if (visualEditorValue102) {
                                                    runtimeValue68[insertBeforeMethod](visualEditorValue101[firstElementChildProperty], visualEditorValue102);
                                                    runtimeValue68[insertBeforeMethod](visualEditorValue101[firstElementChildProperty], visualEditorValue102);
                                                    var visualEditorValue103 = runtimeValue68[firstElementChildProperty][nextElementSiblingProperty][firstElementChildProperty]
                                                } else {
                                                    runtimeValue68[appendChildMethod](visualEditorValue101[firstElementChildProperty]);
                                                    runtimeValue68[appendChildMethod](visualEditorValue101[firstElementChildProperty]);
                                                    var visualEditorValue103 = runtimeValue68[lastElementChildProperty][firstElementChildProperty]
                                                }
                                                visualEditorValue103.d = visualEditorValue93;
                                                visualEditorValue103.D = runtimeValue70[visualEditorValue95];
                                                visualEditorValue103[addEventListenerMethod](inputEvent, function() {
                                                    this.d[valueAttribute + this.D] = this[valueProperty];
                                                    if (!initializeVisualEditorArgument19.C) {
                                                        initializeVisualEditorArgument19.C = [];
                                                        initializeVisualEditorArgument19[setAttributeMethod](attributesAttribute, true)
                                                    }
                                                    initializeVisualEditorArgument19.C[initializeVisualEditorArgument19.C[lengthProperty]] = this.d;
                                                    runtimeValue75()
                                                });
                                                if (runtimeValue66[styleProperty][displayProperty] != blockValue) {
                                                    runtimeValue66[styleProperty][displayProperty] = blockValue;
                                                    if (runtimeValue85.E) runtimeValue86();
                                                    else runtimeValue66[addEventListenerMethod](mouseDownEvent, runtimeValue86)
                                                }
                                            } else {
                                                runtimeValue66[classNameProperty] = 'n';
                                                runtimeValue66[styleProperty][displayProperty] = blockValue;
                                                runtimeValue9[classNameProperty] = 'o';
                                                runtimeValue125();
                                                if (runtimeValue9[styleProperty][displayProperty] == blockValue) {
                                                    windowObject[setTimeoutMethod](function() {
                                                        fadeIn(runtimeValue9)
                                                    }, 400)
                                                } else fadeIn(runtimeValue9)
                                            }
                                        }
                                    }
                                    if (visualEditorValue93[getAttributeMethod](focusAttribute)) break
                                } else break
                            }
                        },
                        runtimeValue86 = function(event) {
                            runtimeValue67[styleProperty][displayProperty] = blockValue;
                            runtimeValue66[classNameProperty] = 'n';
                            if (event) runtimeValue66[removeEventListenerMethod](mouseDownEvent, runtimeValue86)
                        },
                        runtimeValue87 = function(initializeVisualEditorArgument20) {
                            var visualEditorValue104 = [];
                            for (var visualEditorValue105 = initializeVisualEditorArgument20[parentNodeProperty], visualEditorValue106; visualEditorValue105; visualEditorValue105 = visualEditorValue105[parentNodeProperty]) {
                                var visualEditorValue107 = visualEditorValue105[tagNameProperty];
                                if (visualEditorValue107 && visualEditorValue107[toLowerCaseMethod]() != 'body') {
                                    var visualEditorValue108 = windowObject[getComputedStyleMethod](visualEditorValue105)[displayProperty][toLowerCaseMethod]();
                                    if (visualEditorValue108 != 'inline' && visualEditorValue108 != noneValue) {
                                        for (var visualEditorValue109 = false, visualEditorValue110 = visualEditorValue105[previousElementSiblingProperty]; visualEditorValue110; visualEditorValue110 = visualEditorValue110[previousElementSiblingProperty]) {
                                            var visualEditorValue107 = visualEditorValue110[tagNameProperty][toLowerCaseMethod]();
                                            if (visualEditorValue107 != scriptTagName && visualEditorValue107 != 'style') {
                                                visualEditorValue109 = visualEditorValue105;
                                                break
                                            }
                                        }
                                        if (visualEditorValue109) visualEditorValue104[visualEditorValue104[lengthProperty]] = visualEditorValue109;
                                        else {
                                            for (var visualEditorValue111 = visualEditorValue105[nextElementSiblingProperty]; visualEditorValue111; visualEditorValue111 = visualEditorValue111[nextElementSiblingProperty]) {
                                                var visualEditorValue107 = visualEditorValue111[tagNameProperty][toLowerCaseMethod]();
                                                if (visualEditorValue107 != scriptTagName && visualEditorValue107 != 'style') {
                                                    visualEditorValue104[visualEditorValue104[lengthProperty]] = visualEditorValue105;
                                                    break
                                                }
                                            }
                                        }
                                        if (!visualEditorValue106) visualEditorValue106 = visualEditorValue105
                                    }
                                } else break
                            }
                            if (!visualEditorValue104[lengthProperty] && visualEditorValue106) visualEditorValue104[visualEditorValue104[lengthProperty]] = visualEditorValue106;
                            return visualEditorValue104
                        },
                        runtimeValue88 = function() {
                            var visualEditorValue112 = 0,
                                visualEditorValue113 = runtimeValue19[querySelectorMethod]('.l');
                            if (visualEditorValue113) {
                                visualEditorValue113[addEventListenerMethod](clickEvent, runtimeValue88);
                                visualEditorValue113[classNameProperty] = '';
                                visualEditorValue113.d[removeAttributeMethod](focusAttribute);
                                this[removeEventListenerMethod](clickEvent, runtimeValue88);
                                this[classNameProperty] = 'l';
                                this.d[setAttributeMethod](focusAttribute, true);
                                runtimeValue82(this.d);
                                runtimeValue85(runtimeValue66.d);
                                if (styleInspector && !styleInspector.hidden) renderStyleInspector(this.d)
                            }
                        },
                        runtimeValue89 = function() {
                            var visualEditorValue114 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (visualEditorValue114) {
                                var visualEditorValue115 = runtimeValue93(visualEditorValue114),
                                    visualEditorValue116 = runtimeValue94(visualEditorValue114);
                                if (visualEditorValue115 && visualEditorValue116) {
                                    serializedSource = serializedSource[sliceMethod](0, visualEditorValue116) + serializedSource[sliceMethod](visualEditorValue115, visualEditorValue116) + serializedSource[sliceMethod](visualEditorValue116);
                                    var visualEditorValue117 = visualEditorValue114[cloneNodeMethod](true),
                                        visualEditorValue118 = visualEditorValue117[querySelectorAllMethod]('[' + stringAttribute + ']'),
                                        visualEditorValue119 = visualEditorValue117[querySelectorAllMethod](imageTagName),
                                        visualEditorValue120 = visualEditorValue117[querySelectorAllMethod](runtimeValue71);
                                    for (var visualEditorValue121 = 0, visualEditorValue122 = visualEditorValue118[lengthProperty]; visualEditorValue121 < visualEditorValue122; visualEditorValue121++) {
                                        visualEditorValue118[visualEditorValue121][addEventListenerMethod](mouseDownEvent, runtimeValue105);
                                        visualEditorValue118[visualEditorValue121].ondrop = function(event) {
                                            var gFValue1 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + '] img');
                                            if (gFValue1) {
                                                for (var gFValue2 = gFValue1; gFValue2; gFValue2 = gFValue2[parentNodeProperty])
                                                    if (gFValue2[getAttributeMethod](focusAttribute)) gFValue2[removeAttributeMethod](focusAttribute);
                                                event[preventDefaultMethod]()
                                            }
                                            if (runtimeValue127[activeElementProperty]) runtimeValue127[activeElementProperty][blurEvent]();
                                            runtimeValue105.call(this, event)
                                        };
                                        visualEditorValue118[visualEditorValue121].ondragend = function() {
                                            var gFValue3 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + '] [' + stringAttribute + ']');
                                            if (gFValue3) {
                                                runtimeValue73(gFValue3);
                                                runtimeValue75()
                                            }
                                        }
                                    }
                                    for (var visualEditorValue121 = 0, visualEditorValue122 = visualEditorValue119[lengthProperty]; visualEditorValue121 < visualEditorValue122; visualEditorValue121++) {
                                        visualEditorValue119[visualEditorValue121].ondragover = runtimeValue112;
                                        visualEditorValue119[visualEditorValue121].ondragleave = runtimeValue113;
                                        visualEditorValue119[visualEditorValue121].ondrop = runtimeValue114;
                                        visualEditorValue119[visualEditorValue121].ondragstart = function() {
                                            runtimeValue1.e = this
                                        };
                                        visualEditorValue119[visualEditorValue121][addEventListenerMethod](mouseDownEvent, runtimeValue106)
                                    }
                                    for (var visualEditorValue121 = 0, visualEditorValue122 = visualEditorValue120[lengthProperty]; visualEditorValue121 < visualEditorValue122; visualEditorValue121++) {
                                        var visualEditorValue123 = visualEditorValue120[visualEditorValue121][tagNameProperty][toLowerCaseMethod]();
                                        if ('|iframe|object|video|audio|' [indexOfMethod]('|' + visualEditorValue123 + '|') !== -1) {
                                            var visualEditorValue124 = visualEditorValue120[visualEditorValue121][previousElementSiblingProperty];
                                            if (visualEditorValue124) {
                                                visualEditorValue124.realNode = visualEditorValue120[visualEditorValue121];
                                                if (visualEditorValue123 == iframeTagName) {
                                                    visualEditorValue124.ondragover = runtimeValue112;
                                                    visualEditorValue124.ondragleave = runtimeValue113;
                                                    visualEditorValue124.ondrop = runtimeValue114
                                                }
                                                visualEditorValue124[addEventListenerMethod](mouseDownEvent, function(event) {
                                                    runtimeValue106.call(this.realNode)
                                                })
                                            }
                                        } else {
                                            visualEditorValue120[visualEditorValue121][addEventListenerMethod](mouseDownEvent, function(event) {
                                                runtimeValue111(event);
                                                runtimeValue106.call(this)
                                            });
                                            visualEditorValue120[visualEditorValue121][addEventListenerMethod](mouseUpEvent, runtimeValue111);
                                            visualEditorValue120[visualEditorValue121][addEventListenerMethod](clickEvent, runtimeValue111)
                                        }
                                    }
                                    visualEditorValue117[removeAttributeMethod](focusAttribute);
                                    visualEditorValue114[parentNodeProperty][insertBeforeMethod](visualEditorValue117, visualEditorValue114);
                                    runtimeValue74(visualEditorValue114[parentNodeProperty]);
                                    runtimeValue82(visualEditorValue114)
                                }
                            }
                        },
                        runtimeValue90 = function() {
                            var visualEditorValue125 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (visualEditorValue125) {
                                for (var visualEditorValue126 = [], visualEditorValue127 = visualEditorValue125[previousElementSiblingProperty]; visualEditorValue127; visualEditorValue127 = visualEditorValue127[previousElementSiblingProperty]) {
                                    visualEditorValue126[visualEditorValue126[lengthProperty]] = visualEditorValue127;
                                    var visualEditorValue128 = visualEditorValue127[tagNameProperty][toLowerCaseMethod](),
                                        visualEditorValue129 = runtimeValue93(visualEditorValue127);
                                    if (!visualEditorValue129) {
                                        var visualEditorValue130 = visualEditorValue127[previousElementSiblingProperty];
                                        if (visualEditorValue130) visualEditorValue129 = runtimeValue94(visualEditorValue130)
                                    }
                                    if (visualEditorValue128 != scriptTagName && visualEditorValue128 != 'style' && visualEditorValue129) {
                                        var visualEditorValue131 = runtimeValue93(visualEditorValue125),
                                            visualEditorValue132 = runtimeValue94(visualEditorValue125);
                                        if (visualEditorValue131 && visualEditorValue132) {
                                            serializedSource = serializedSource[sliceMethod](0, visualEditorValue129) + serializedSource[sliceMethod](visualEditorValue131, visualEditorValue132) + serializedSource[sliceMethod](visualEditorValue129, visualEditorValue131) + serializedSource[sliceMethod](visualEditorValue132);
                                            var visualEditorValue133 = visualEditorValue125[nextElementSiblingProperty];
                                            for (var visualEditorValue134 = 0, visualEditorValue135 = visualEditorValue126[lengthProperty]; visualEditorValue134 < visualEditorValue135; visualEditorValue134++) {
                                                if (visualEditorValue133) visualEditorValue133[parentNodeProperty][insertBeforeMethod](visualEditorValue126[visualEditorValue126[lengthProperty] - 1 - visualEditorValue134], visualEditorValue133);
                                                else visualEditorValue125[parentNodeProperty][appendChildMethod](visualEditorValue126[visualEditorValue126[lengthProperty] - 1 - visualEditorValue134])
                                            }
                                            runtimeValue74(visualEditorValue125[parentNodeProperty]);
                                            runtimeValue82(visualEditorValue125)
                                        }
                                        break
                                    }
                                }
                            }
                        },
                        runtimeValue91 = function() {
                            var visualEditorValue136 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (visualEditorValue136) {
                                for (var visualEditorValue137 = [], visualEditorValue138 = visualEditorValue136[nextElementSiblingProperty]; visualEditorValue138; visualEditorValue138 = visualEditorValue138[nextElementSiblingProperty]) {
                                    visualEditorValue137[visualEditorValue137[lengthProperty]] = visualEditorValue138;
                                    var visualEditorValue139 = visualEditorValue138[tagNameProperty][toLowerCaseMethod](),
                                        visualEditorValue140 = runtimeValue94(visualEditorValue138);
                                    if (visualEditorValue139 != scriptTagName && visualEditorValue139 != 'style' && visualEditorValue140) {
                                        var visualEditorValue141 = runtimeValue93(visualEditorValue136),
                                            visualEditorValue142 = runtimeValue94(visualEditorValue136);
                                        if (visualEditorValue141 && visualEditorValue142) {
                                            serializedSource = serializedSource[sliceMethod](0, visualEditorValue141) + serializedSource[sliceMethod](visualEditorValue142, visualEditorValue140) + serializedSource[sliceMethod](visualEditorValue141, visualEditorValue142) + serializedSource[sliceMethod](visualEditorValue140);
                                            for (var visualEditorValue143 = 0, visualEditorValue144 = visualEditorValue137[lengthProperty]; visualEditorValue143 < visualEditorValue144; visualEditorValue143++) visualEditorValue137[visualEditorValue143][parentNodeProperty][insertBeforeMethod](visualEditorValue137[visualEditorValue143], visualEditorValue136);
                                            runtimeValue74(visualEditorValue136[parentNodeProperty]);
                                            runtimeValue82(visualEditorValue136)
                                        }
                                        break
                                    }
                                }
                            }
                        },
                        runtimeValue92 = function() {
                            var visualEditorValue145 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (visualEditorValue145) {
                                var visualEditorValue146 = runtimeValue93(visualEditorValue145),
                                    visualEditorValue147 = runtimeValue94(visualEditorValue145);
                                if (typeof visualEditorValue146 == 'number' && typeof visualEditorValue147 == 'number') {
                                    var visualEditorValue148 = visualEditorValue145[parentNodeProperty];
                                    serializedSource = serializedSource[sliceMethod](0, visualEditorValue146) + serializedSource[sliceMethod](visualEditorValue147);
                                    runtimeValue83();
                                    visualEditorValue148[removeChildMethod](visualEditorValue145);
                                    if (styleInspectorTarget == visualEditorValue145) closeStyleInspector();
                                    runtimeValue74(visualEditorValue148)
                                }
                            }
                        },
                        runtimeValue93 = function(initializeVisualEditorArgument21) {
                            var sourceElementRange = sourceMapState && sourceMapState.elementRangeFor(initializeVisualEditorArgument21);
                            return sourceElementRange ? sourceElementRange[0] : null
                        },
                        runtimeValue94 = function(initializeVisualEditorArgument22) {
                            var sourceElementRange = sourceMapState && sourceMapState.elementRangeFor(initializeVisualEditorArgument22);
                            return sourceElementRange ? sourceElementRange[1] : null
                        },
                        runtimeValue95 = function(initializeVisualEditorArgument23) {
                            var visualEditorValue157 = initializeVisualEditorArgument23[querySelectorAllMethod]('[' + stringAttribute + ']');
                            if (visualEditorValue157[lengthProperty]) {
                                var visualEditorValue158 = runtimeValue102(visualEditorValue157[visualEditorValue157[lengthProperty] - 1]),
                                    visualEditorValue159 = runtimeValue103('>' + visualEditorValue158 + '<');
                                if (visualEditorValue159[lengthProperty] - 1) {
                                    var visualEditorValue160 = runtimeValue122(visualEditorValue158),
                                        visualEditorValue161 = visualEditorValue160[lastIndexOfMethod](visualEditorValue157[visualEditorValue157[lengthProperty] - 1]);
                                    if (visualEditorValue159[lengthProperty] == (visualEditorValue160[lengthProperty] + 1) && visualEditorValue161 !== -1) {
                                        var visualEditorValue162 = runtimeValue104(initializeVisualEditorArgument23)[splitMethod]('>' + visualEditorValue158 + '<');
                                        return runtimeValue121(visualEditorValue159[sliceMethod](visualEditorValue161 + 1)[joinMethod]('>' + visualEditorValue158 + '<'), visualEditorValue162[visualEditorValue162[lengthProperty] - 1][replaceMethod](new RegExp('/edit>', 'gi'), ''))
                                    }
                                }
                            } else if (initializeVisualEditorArgument23[tagNameProperty][toLowerCaseMethod]() == 'edit' && initializeVisualEditorArgument23[getAttributeMethod]('[' + stringAttribute + ']')) return runtimeValue97(initializeVisualEditorArgument23);
                            else {
                                if (initializeVisualEditorArgument23[querySelectorMethod](imageTagName)) return runtimeValue99(initializeVisualEditorArgument23);
                                else if (initializeVisualEditorArgument23[querySelectorMethod](runtimeValue71)) return runtimeValue101(initializeVisualEditorArgument23)
                            }
                        },
                        runtimeValue96 = function(initializeVisualEditorArgument24) {
                            var visualEditorValue163 = runtimeValue102(initializeVisualEditorArgument24)[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1'),
                                visualEditorValue164 = runtimeValue103(visualEditorValue163 + '<'),
                                visualEditorValue165 = visualEditorValue164[lengthProperty] - 1;
                            if (visualEditorValue165) {
                                if (visualEditorValue165 == 1) return serializedSource[indexOfMethod](visualEditorValue163 + '<');
                                else {
                                    var visualEditorValue166 = runtimeValue127[querySelectorAllMethod]('[' + stringAttribute + ']');
                                    for (var visualEditorValue167 = 0, visualEditorValue168 = 0, visualEditorValue169 = false, visualEditorValue170 = visualEditorValue166[lengthProperty]; visualEditorValue167 < visualEditorValue170; visualEditorValue167++) {
                                        var visualEditorValue171 = runtimeValue102(visualEditorValue166[visualEditorValue167])[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1');
                                        if (visualEditorValue171 == visualEditorValue163) {
                                            if (visualEditorValue166[visualEditorValue167] == initializeVisualEditorArgument24) visualEditorValue169 = visualEditorValue168;
                                            visualEditorValue168++
                                        }
                                    }
                                    for (var visualEditorValue167 = 1, visualEditorValue172 = [visualEditorValue164[0]], visualEditorValue170 = visualEditorValue164[lengthProperty]; visualEditorValue167 < visualEditorValue170; visualEditorValue167++) {
                                        if (visualEditorValue164[visualEditorValue167][matchMethod](new RegExp('>\\s*$', 'gi'))) visualEditorValue172[visualEditorValue172[lengthProperty]] = visualEditorValue164[visualEditorValue167];
                                        else visualEditorValue172[visualEditorValue172[lengthProperty] - 1] += (visualEditorValue163 + visualEditorValue164[visualEditorValue167] + '<')
                                    }
                                    if (visualEditorValue172[lengthProperty] == (visualEditorValue168 + 1) && visualEditorValue169 !== false)
                                        for (var visualEditorValue167 = 0, visualEditorValue170 = visualEditorValue172[lengthProperty]; visualEditorValue167 < visualEditorValue170; visualEditorValue167++)
                                            if ((visualEditorValue169 + 1) == visualEditorValue167) return visualEditorValue172[sliceMethod](0, visualEditorValue167)[joinMethod](visualEditorValue163 + '<')[lengthProperty]
                                }
                            }
                        },
                        runtimeValue97 = function(initializeVisualEditorArgument25) {
                            var visualEditorValue173 = runtimeValue102(initializeVisualEditorArgument25)[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1'),
                                visualEditorValue174 = runtimeValue103(visualEditorValue173 + '<'),
                                visualEditorValue175 = visualEditorValue174[lengthProperty] - 1;
                            if (visualEditorValue175) {
                                if (visualEditorValue175 == 1) return serializedSource[indexOfMethod](visualEditorValue173 + '<') + visualEditorValue173[lengthProperty];
                                else {
                                    var visualEditorValue176 = runtimeValue127[querySelectorAllMethod]('[' + stringAttribute + ']');
                                    for (var visualEditorValue177 = 0, visualEditorValue178 = 0, visualEditorValue179 = 0, visualEditorValue180 = visualEditorValue176[lengthProperty]; visualEditorValue177 < visualEditorValue180; visualEditorValue177++) {
                                        var visualEditorValue181 = runtimeValue102(visualEditorValue176[visualEditorValue177])[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1');
                                        if (visualEditorValue181 == visualEditorValue173) {
                                            if (visualEditorValue176[visualEditorValue177] == initializeVisualEditorArgument25) visualEditorValue179 = visualEditorValue178;
                                            visualEditorValue178++
                                        }
                                    }
                                    for (var visualEditorValue177 = 1, visualEditorValue182 = [visualEditorValue174[0]], visualEditorValue180 = visualEditorValue174[lengthProperty]; visualEditorValue177 < visualEditorValue180; visualEditorValue177++) {
                                        if (visualEditorValue174[visualEditorValue177][matchMethod](new RegExp('>\\s*$', 'gi'))) visualEditorValue182[visualEditorValue182[lengthProperty]] = visualEditorValue174[visualEditorValue177];
                                        else visualEditorValue182[visualEditorValue182[lengthProperty] - 1] += (visualEditorValue173 + visualEditorValue174[visualEditorValue177] + '<')
                                    }
                                    if (visualEditorValue182[lengthProperty] == (visualEditorValue178 + 1) && visualEditorValue179 !== false)
                                        for (var visualEditorValue177 = 0, visualEditorValue180 = visualEditorValue182[lengthProperty]; visualEditorValue177 < visualEditorValue180; visualEditorValue177++)
                                            if ((visualEditorValue179 + 1) == visualEditorValue177) return visualEditorValue182[sliceMethod](0, visualEditorValue177)[joinMethod](visualEditorValue173 + '<')[lengthProperty] + visualEditorValue173[lengthProperty]
                                }
                            }
                        },
                        runtimeValue98 = function(initializeVisualEditorArgument26) {
                            var visualEditorValue183 = initializeVisualEditorArgument26[querySelectorMethod](imageTagName);
                            if (visualEditorValue183) {
                                var visualEditorValue184 = visualEditorValue183[getAttributeMethod](sourceAttribute),
                                    visualEditorValue185 = runtimeValue118(imageTagName, sourceAttribute, visualEditorValue184),
                                    visualEditorValue186 = runtimeValue119(imageTagName, sourceAttribute, visualEditorValue184),
                                    visualEditorValue187 = visualEditorValue186[indexOfMethod](visualEditorValue183);
                                if (visualEditorValue185[lengthProperty] == visualEditorValue186[lengthProperty] && visualEditorValue187 !== -1) {
                                    for (var visualEditorValue188 = 0, visualEditorValue189 = serializedSource, visualEditorValue190 = visualEditorValue185[lengthProperty]; visualEditorValue188 < visualEditorValue190; visualEditorValue188++) visualEditorValue189 = visualEditorValue189[splitMethod](visualEditorValue185[visualEditorValue188])[joinMethod]('{-' + visualEditorValue184 + '-}{' + visualEditorValue188 + '}');
                                    visualEditorValue189 = visualEditorValue189[splitMethod]('{-' + visualEditorValue184 + '-}')[sliceMethod](0, visualEditorValue187 + 1)[joinMethod]('{-' + visualEditorValue184 + '-}');
                                    for (var visualEditorValue188 = 0, visualEditorValue190 = visualEditorValue185[lengthProperty]; visualEditorValue188 < visualEditorValue190; visualEditorValue188++) visualEditorValue189 = visualEditorValue189[splitMethod]('{-' + visualEditorValue184 + '-}{' + visualEditorValue188 + '}')[joinMethod](visualEditorValue185[visualEditorValue188]);
                                    return runtimeValue120(visualEditorValue189, runtimeValue104(initializeVisualEditorArgument26)[matchMethod](new RegExp('^[\\s\\S]+?(?=<img[^>]+?src)', 'gi'))[0][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        runtimeValue99 = function(initializeVisualEditorArgument27) {
                            var visualEditorValue191 = initializeVisualEditorArgument27[querySelectorAllMethod](imageTagName);
                            if (visualEditorValue191[lengthProperty]) {
                                var visualEditorValue191 = visualEditorValue191[visualEditorValue191[lengthProperty] - 1],
                                    visualEditorValue192 = visualEditorValue191[getAttributeMethod](sourceAttribute),
                                    visualEditorValue193 = runtimeValue118(imageTagName, sourceAttribute, visualEditorValue192),
                                    visualEditorValue194 = runtimeValue119(imageTagName, sourceAttribute, visualEditorValue192),
                                    visualEditorValue195 = visualEditorValue194[indexOfMethod](visualEditorValue191);
                                if (visualEditorValue193[lengthProperty] == visualEditorValue194[lengthProperty] && visualEditorValue195 !== -1) {
                                    for (var visualEditorValue196 = 0, visualEditorValue197 = serializedSource, visualEditorValue198 = visualEditorValue193[lengthProperty]; visualEditorValue196 < visualEditorValue198; visualEditorValue196++) visualEditorValue197 = visualEditorValue197[splitMethod](visualEditorValue193[visualEditorValue196])[joinMethod]('{-' + visualEditorValue192 + '-}{' + visualEditorValue196 + '}');
                                    var visualEditorValue199 = visualEditorValue197[splitMethod]('{-' + visualEditorValue192 + '-}')[sliceMethod](visualEditorValue195 + 1)[joinMethod]('{-' + visualEditorValue192 + '-}');
                                    for (var visualEditorValue196 = 0, visualEditorValue198 = visualEditorValue193[lengthProperty]; visualEditorValue196 < visualEditorValue198; visualEditorValue196++) visualEditorValue199 = visualEditorValue199[splitMethod]('{-' + visualEditorValue192 + '-}{' + visualEditorValue196 + '}')[joinMethod](visualEditorValue193[visualEditorValue196]);
                                    var visualEditorValue200 = runtimeValue104(initializeVisualEditorArgument27),
                                        visualEditorValue201 = visualEditorValue200[matchMethod](new RegExp('<img[^>]+?src[^>]+?>', 'gi')),
                                        visualEditorValue202 = visualEditorValue200[splitMethod](visualEditorValue201[visualEditorValue201[lengthProperty] - 1]);
                                    return runtimeValue121(visualEditorValue199, visualEditorValue202[visualEditorValue202[lengthProperty] - 1][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        runtimeValue100 = function(initializeVisualEditorArgument28) {
                            var visualEditorValue203 = initializeVisualEditorArgument28[querySelectorMethod](runtimeValue71);
                            if (visualEditorValue203) {
                                var visualEditorValue204 = visualEditorValue203[tagNameProperty][toLowerCaseMethod](),
                                    visualEditorValue205 = serializedSource[matchMethod](new RegExp('<' + visualEditorValue204 + '[^>]*?>', 'gi')),
                                    visualEditorValue206 = Array.prototype[sliceMethod].call(runtimeValue127.body[querySelectorAllMethod](visualEditorValue204)),
                                    visualEditorValue207 = visualEditorValue206[indexOfMethod](visualEditorValue203);
                                if (visualEditorValue205[lengthProperty] == visualEditorValue206[lengthProperty] && visualEditorValue207 !== -1) {
                                    for (var visualEditorValue208 = 0, visualEditorValue209 = serializedSource, visualEditorValue210 = visualEditorValue205[lengthProperty]; visualEditorValue208 < visualEditorValue210; visualEditorValue208++) visualEditorValue209 = visualEditorValue209[splitMethod](visualEditorValue205[visualEditorValue208])[joinMethod]('{-' + visualEditorValue204 + '-}{' + visualEditorValue208 + '}');
                                    visualEditorValue209 = visualEditorValue209[splitMethod]('{-' + visualEditorValue204 + '-}')[sliceMethod](0, visualEditorValue207 + 1)[joinMethod]('{-' + visualEditorValue204 + '-}');
                                    for (var visualEditorValue208 = 0, visualEditorValue210 = visualEditorValue205[lengthProperty]; visualEditorValue208 < visualEditorValue210; visualEditorValue208++) visualEditorValue209 = visualEditorValue209[splitMethod]('{-' + visualEditorValue204 + '-}{' + visualEditorValue208 + '}')[joinMethod](visualEditorValue205[visualEditorValue208]);
                                    return runtimeValue120(visualEditorValue209, runtimeValue104(initializeVisualEditorArgument28)[matchMethod](new RegExp('^[\\s\\S]+?(?=<' + visualEditorValue204 + ')', 'gi'))[0][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        runtimeValue101 = function(initializeVisualEditorArgument29) {
                            var visualEditorValue211 = initializeVisualEditorArgument29[querySelectorAllMethod](runtimeValue71);
                            if (visualEditorValue211[lengthProperty]) {
                                var visualEditorValue211 = visualEditorValue211[visualEditorValue211[lengthProperty] - 1],
                                    visualEditorValue212 = visualEditorValue211[tagNameProperty][toLowerCaseMethod](),
                                    visualEditorValue213 = serializedSource[matchMethod](new RegExp('<(?:' + visualEditorValue212 + ')[^>]*?>', 'gi')),
                                    visualEditorValue214 = Array.prototype[sliceMethod].call(runtimeValue127.body[querySelectorAllMethod](visualEditorValue212)),
                                    visualEditorValue215 = visualEditorValue214[indexOfMethod](visualEditorValue211);
                                if (visualEditorValue213[lengthProperty] == visualEditorValue214[lengthProperty] && visualEditorValue215 !== -1) {
                                    for (var visualEditorValue216 = 0, visualEditorValue217 = serializedSource, visualEditorValue218 = visualEditorValue213[lengthProperty]; visualEditorValue216 < visualEditorValue218; visualEditorValue216++) visualEditorValue217 = visualEditorValue217[splitMethod](visualEditorValue213[visualEditorValue216])[joinMethod]('{-' + visualEditorValue212 + '-}{' + visualEditorValue216 + '}');
                                    var visualEditorValue219 = visualEditorValue217[splitMethod]('{-' + visualEditorValue212 + '-}')[sliceMethod](visualEditorValue215 + 1)[joinMethod]('{-' + visualEditorValue212 + '-}');
                                    for (var visualEditorValue216 = 0, visualEditorValue218 = visualEditorValue213[lengthProperty]; visualEditorValue216 < visualEditorValue218; visualEditorValue216++) visualEditorValue219 = visualEditorValue219[splitMethod]('{-' + visualEditorValue212 + '-}{' + visualEditorValue216 + '}')[joinMethod](visualEditorValue213[visualEditorValue216]);
                                    var visualEditorValue220 = runtimeValue104(initializeVisualEditorArgument29),
                                        visualEditorValue221 = visualEditorValue220[matchMethod](new RegExp('<' + visualEditorValue212 + '[^>]*?>', 'gi')),
                                        visualEditorValue222 = visualEditorValue220[splitMethod](visualEditorValue221[visualEditorValue221[lengthProperty] - 1]);
                                    return runtimeValue121(visualEditorValue219, visualEditorValue222[visualEditorValue222[lengthProperty] - 1][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        runtimeValue102 = function(initializeVisualEditorArgument30) {
                            var visualEditorValue223 = initializeVisualEditorArgument30.B;
                            if (!visualEditorValue223) return initializeVisualEditorArgument30[innerHTMLProperty];
                            return visualEditorValue223
                        },
                        runtimeValue103 = function(initializeVisualEditorArgument31) {
                            var visualEditorValue224 = serializedSource[splitMethod](initializeVisualEditorArgument31);
                            if (!runtimeValue80.fixed) {
                                var visualEditorValue225 = runtimeValue80(serializedSource),
                                    visualEditorValue226 = visualEditorValue225[splitMethod](initializeVisualEditorArgument31);
                                if (visualEditorValue224[lengthProperty] != visualEditorValue226[lengthProperty]) {
                                    serializedSource = visualEditorValue225;
                                    if (runtimeValue11[innerHTMLProperty] != serializedSource) runtimeValue11[innerHTMLProperty] = serializedSource;
                                    visualEditorValue224 = visualEditorValue226;
                                    runtimeValue80.fixed = true
                                }
                            }
                            return visualEditorValue224
                        },
                        runtimeValue104 = function(initializeVisualEditorArgument32) {
                            var visualEditorValue227 = initializeVisualEditorArgument32[outerHTMLProperty][replaceMethod](new RegExp('^[\\s\\S]+?(?:</head>|<body[^>]>|<div[^>]>)', 'gi'), '');
                            visualEditorValue227 = visualEditorValue227[replaceMethod](new RegExp('<!--[\\s\\S]+?-->', 'gi'), '');
                            visualEditorValue227 = visualEditorValue227[replaceMethod](new RegExp('<_cript[\\s\\S]+?/_cript>', 'gi'), '');
                            return visualEditorValue227[replaceMethod](new RegExp('<style[\\s\\S]+?/style>', 'gi'), '')
                        },
                        runtimeValue105 = function() {
                            var visualEditorValue228 = this,
                                visualEditorValue229 = function() {
                                    runtimeValue73(visualEditorValue228);
                                    runtimeValue75()
                                },
                                visualEditorValue230 = function() {
                                    visualEditorValue229.call(visualEditorValue228);
                                    runtimeValue127[removeEventListenerMethod](mouseMoveEvent, visualEditorValue230);
                                    windowObject[setTimeoutMethod](function() {
                                        if (runtimeValue127[activeElementProperty] == visualEditorValue228) runtimeValue127[addEventListenerMethod](mouseMoveEvent, visualEditorValue230)
                                    }, 500)
                                },
                                visualEditorValue231 = function(event) {
                                    visualEditorValue228[removeEventListenerMethod](keyUpEvent, visualEditorValue229);
                                    runtimeValue127[removeEventListenerMethod](mouseMoveEvent, visualEditorValue230);
                                    visualEditorValue228[removeEventListenerMethod](blurEvent, visualEditorValue231);
                                    visualEditorValue228[addEventListenerMethod](mouseDownEvent, runtimeValue105)
                                };
                            visualEditorValue228[addEventListenerMethod](keyUpEvent, visualEditorValue229);
                            runtimeValue127[addEventListenerMethod](mouseMoveEvent, visualEditorValue230);
                            visualEditorValue228[addEventListenerMethod](blurEvent, visualEditorValue231);
                            visualEditorValue228[removeEventListenerMethod](mouseDownEvent, runtimeValue105);
                            if (!visualEditorValue228.B) visualEditorValue228.B = visualEditorValue228[innerHTMLProperty];
                            runtimeValue106.call(visualEditorValue228)
                        },
                        runtimeValue106 = function() {
                            runtimeValue83();
                            runtimeValue81(this);
                            if (styleInspector && !styleInspector.hidden) {
                                var visualEditorSelection = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                                if (visualEditorSelection && visualEditorSelection[tagNameProperty][toLowerCaseMethod]() == 'edit' && visualEditorSelection[firstElementChildProperty]) visualEditorSelection = visualEditorSelection[firstElementChildProperty];
                                if (visualEditorSelection) renderStyleInspector(visualEditorSelection)
                            }
                        },
                        runtimeValue107 = function(event) {
                            var visualEditorValue232 = event.target,
                                visualEditorValue233 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            for (var visualEditorValue234 = visualEditorValue232; visualEditorValue234; visualEditorValue234 = visualEditorValue234[parentNodeProperty]) {
                                if (visualEditorValue234 == runtimeValue18 || visualEditorValue234 == runtimeValue2) {
                                    var visualEditorValue235 = runtimeValue127[activeElementProperty];
                                    if (visualEditorValue235 && visualEditorValue235[getAttributeMethod](stringAttribute) && visualEditorValue235[innerHTMLProperty][splitMethod](caretMarkup)[lengthProperty] < 2) {
                                        var visualEditorValue236 = runtimeValue126[contentWindowProperty][getSelectionMethod](),
                                            visualEditorValue237 = visualEditorValue236[getRangeAtMethod](0),
                                            visualEditorValue238 = documentObject[createElementMethod](caretValue);
                                        visualEditorValue237[insertNodeMethod](visualEditorValue238)
                                    }
                                    if (visualEditorValue232[parentNodeProperty][parentNodeProperty] != runtimeValue68 || visualEditorValue232[disabledProperty]) {
                                        event[preventDefaultMethod]();
                                        event[stopPropagationMethod]()
                                    } else {
                                        var visualEditorValue239 = function(event) {
                                            this[removeEventListenerMethod](blurEvent, visualEditorValue239);
                                            if (visualEditorValue232[parentNodeProperty][parentNodeProperty] != runtimeValue68 || visualEditorValue232[disabledProperty]) runtimeValue108.call(this, event)
                                        };
                                        visualEditorValue232[addEventListenerMethod](blurEvent, visualEditorValue239)
                                    }
                                    return
                                } else if (visualEditorValue234 == visualEditorValue233) return
                            }
                            if (runtimeValue127[querySelectorMethod](caretValue)) runtimeValue108.call(this, event);
                            runtimeValue83()
                        },
                        runtimeValue108 = function(event) {
                            var visualEditorValue240 = runtimeValue127[querySelectorMethod](caretValue);
                            if (visualEditorValue240) {
                                var visualEditorValue241 = event.target;
                                if (visualEditorValue241[parentNodeProperty][parentNodeProperty] != runtimeValue68 || visualEditorValue241[disabledProperty] || event.type == blurEvent) {
                                    var visualEditorValue242 = visualEditorValue240[parentNodeProperty];
                                    visualEditorValue242[innerHTMLProperty] = visualEditorValue242[innerHTMLProperty][splitMethod](caretMarkup)[joinMethod](caretMarkup + ' ');
                                    visualEditorValue240 = visualEditorValue242[querySelectorMethod](caretValue);
                                    var visualEditorValue243 = runtimeValue126[contentWindowProperty][getSelectionMethod](),
                                        visualEditorValue244 = visualEditorValue240[nextSiblingProperty],
                                        visualEditorValue245 = runtimeValue127[createRangeMethod]();
                                    visualEditorValue245[setStartMethod](visualEditorValue244, 0);
                                    visualEditorValue245[setEndMethod](visualEditorValue244, 0);
                                    visualEditorValue245[collapseMethod](true);
                                    visualEditorValue243[removeAllRangesMethod]();
                                    visualEditorValue244[textContentProperty] = visualEditorValue244[textContentProperty][sliceMethod](1);
                                    visualEditorValue240[parentNodeProperty][removeChildMethod](visualEditorValue240);
                                    visualEditorValue243[addRangeMethod](visualEditorValue245);
                                    visualEditorValue242[focusEvent]()
                                }
                            }
                        },
                        runtimeValue109 = function(event) {
                            if (event[keyCodeProperty] == 13) {
                                event[preventDefaultMethod]();
                                resetEditorFocus();
                                runtimeValue83()
                            } else if (event[keyCodeProperty] == 17) runtimeValue109.i = true;
                            else if (event[keyCodeProperty] == 83 && runtimeValue109.i) {
                                event[preventDefaultMethod]();
                                if (!runtimeValue4[disabledProperty]) {
                                    resetEditorFocus();
                                    runtimeValue83();
                                    saveEditorContent(runtimeValue79())
                                }
                            }
                        },
                        runtimeValue110 = function(event) {
                            if (event[keyCodeProperty] == 17) runtimeValue109.i = false
                        },
                        runtimeValue111 = function(event) {
                            event[preventDefaultMethod]();
                            event[stopPropagationMethod]()
                        },
                        runtimeValue112 = function() {
                            this[setAttributeMethod](dragOverAttribute, true);
                            return false
                        },
                        runtimeValue113 = function() {
                            this[removeAttributeMethod](dragOverAttribute);
                            return false
                        },
                        runtimeValue114 = function(event) {
                            var visualEditorValue246 = function(hfArgument1) {
                                    for (var hfValue2 = hfArgument1; hfValue2; hfValue2 = hfValue2[parentNodeProperty]) {
                                        var hfValue3 = hfValue2[tagNameProperty];
                                        if (hfValue3 && hfValue3[toLowerCaseMethod]() != 'body') {
                                            if (hfValue3[toLowerCaseMethod]() == 'a') return hfValue2
                                        } else break
                                    }
                                },
                                visualEditorValue247 = function(hfArgument2, hfArgument3) {
                                    if (hfArgument2) {
                                        if (hfArgument3[lastIndexOfMethod]('/') !== -1) hfArgument3 = hfArgument3[sliceMethod](hfArgument3[lastIndexOfMethod]('/') + 1);
                                        if (hfArgument2[lastIndexOfMethod]('/') !== -1) hfArgument3 = hfArgument2[sliceMethod](0, hfArgument2[lastIndexOfMethod]('/') + 1) + hfArgument3;
                                        if (hfArgument2 == hfArgument3) return true
                                    }
                                },
                                visualEditorValue248 = this;
                            event[preventDefaultMethod]();
                            if (windowObject.FormData) {
                                var visualEditorValue249 = event[dataTransferProperty].files[0];
                                if (visualEditorValue249 && visualEditorValue248[tagNameProperty][toLowerCaseMethod]() == imageTagName && event[dataTransferProperty].types[0][indexOfMethod]('text') === -1) {
                                    var visualEditorValue250 = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bz') * 1,
                                        visualEditorValue251 = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bA') * 1;
                                    if (visualEditorValue249.size < visualEditorValue250 && visualEditorValue249.size < visualEditorValue251) {
                                        var visualEditorValue252 = new FormData(),
                                            visualEditorValue253 = generateToken(),
                                            visualEditorValue254 = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bc');
                                        visualEditorValue252.append('file', visualEditorValue249);
                                        visualEditorValue252.append('token', visualEditorValue253);
                                        writeCookie(tokenCookieSuffix, visualEditorValue253);
                                        visualEditorValue252.append('replace', visualEditorValue248.src[replaceMethod](new RegExp('\\?[\\s\\S]*$', 'gi'), ''));
                                        visualEditorValue248[removeAttributeMethod](dragOverAttribute);
                                        visualEditorValue248[setAttributeMethod](dropAttribute, true);
                                        runtimeValue9[textContentProperty] = visualEditorValue254 + ' (0%)';
                                        runtimeValue9[classNameProperty] = 'b';
                                        fadeIn(runtimeValue9);
                                        ajaxRequest(visualEditorValue252, function(hfArgument4) {
                                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bp');
                                            var hfValue5 = visualEditorValue248[getAttributeMethod](sourceAttribute),
                                                hfValue6 = visualEditorValue248[getAttributeMethod]('srcset'),
                                                hfValue7 = runtimeValue118(imageTagName, sourceAttribute, hfValue5),
                                                hfValue8 = runtimeValue119(imageTagName, sourceAttribute, hfValue5),
                                                hfValue9 = hfValue8[indexOfMethod](visualEditorValue248);
                                            if (hfValue7[lengthProperty] == hfValue8[lengthProperty] && hfValue9 !== -1) {
                                                if (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cf') * 1) {
                                                    var hfValue10 = visualEditorValue246(visualEditorValue248);
                                                    if (hfValue10) {
                                                        var hfValue11 = hfValue10.z;
                                                        if (visualEditorValue247(hfValue11, hfValue5)) {
                                                            var hfValue12 = runtimeValue118('a', 'href', hfValue11),
                                                                hfValue13 = runtimeValue119('a', 'href', hfValue11),
                                                                hfValue14 = hfValue13[indexOfMethod](hfValue10);
                                                            if (hfValue12[lengthProperty] == hfValue13[lengthProperty] && hfValue14 !== -1) {
                                                                var hfValue15 = hfArgument4[sliceMethod](hfArgument4[lastIndexOfMethod]('/') + 1);
                                                                if (hfValue11[lastIndexOfMethod]('/') !== -1) hfValue15 = hfValue11[sliceMethod](0, hfValue11[lastIndexOfMethod]('/') + 1) + hfValue15;
                                                                for (var hfValue16 = 0, hfValue17 = serializedSource, hfValue18 = hfValue12[lengthProperty]; hfValue16 < hfValue18; hfValue16++) hfValue17 = hfValue17[splitMethod](hfValue12[hfValue16])[joinMethod]('{-' + hfValue11 + '-}');
                                                                for (var hfValue16 = 0, hfValue19 = hfValue17[splitMethod]('{-' + hfValue11 + '-}'), hfValue17 = hfValue19[0], hfValue18 = hfValue12[lengthProperty]; hfValue16 < hfValue18; hfValue16++) {
                                                                    if (hfValue16 == hfValue14) {
                                                                        var hfValue20 = hfValue12[hfValue16][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + hfValue15 + '$2');
                                                                        hfValue20 = hfValue20[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + hfValue15 + '$2');
                                                                        hfValue20 = hfValue20[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + hfValue15 + '$2');
                                                                        hfValue17 = hfValue17 + hfValue20 + hfValue19[hfValue16 + 1]
                                                                    } else hfValue17 = hfValue17 + hfValue12[hfValue16] + hfValue19[hfValue16 + 1]
                                                                }
                                                                serializedSource = hfValue17;
                                                                hfValue10.z = hfValue15
                                                            }
                                                        }
                                                    }
                                                }
                                                if (hfArgument4[sliceMethod](0, 1) != '/') {
                                                    hfArgument4 = hfArgument4[sliceMethod](hfArgument4[lastIndexOfMethod]('/') + 1);
                                                    if (hfValue5[lastIndexOfMethod]('/') !== -1) hfArgument4 = hfValue5[sliceMethod](0, hfValue5[lastIndexOfMethod]('/') + 1) + hfArgument4
                                                }
                                                for (var hfValue16 = 0, hfValue8 = runtimeValue127.body[querySelectorAllMethod](imageTagName), hfValue21 = runtimeValue127[createElementMethod](imageTagName), hfValue18 = hfValue8[lengthProperty]; hfValue16 < hfValue18; hfValue16++) {
                                                    hfValue21.src = hfArgument4;
                                                    if (hfValue21.src == hfValue8[hfValue16].src) {
                                                        var hfValue22 = runtimeValue127[createElementMethod](iframeTagName);
                                                        hfValue22[setAttributeMethod](sourceAttribute, hfValue21.src);
                                                        hfValue22[styleProperty][displayProperty] = noneValue;
                                                        hfValue22.onload = function() {
                                                            hfValue22.onload = function() {
                                                                hfValue22.onload = function() {
                                                                    hfValue22.onload = false;
                                                                    visualEditorValue248[setAttributeMethod](sourceAttribute, hfArgument4);
                                                                    runtimeValue127.body[removeChildMethod](hfValue22)
                                                                };
                                                                runtimeValue127.body[appendChildMethod](hfValue22)
                                                            };
                                                            hfValue22[contentWindowProperty].location.reload(true)
                                                        };
                                                        runtimeValue127.body[appendChildMethod](hfValue22)
                                                    }
                                                }
                                                for (var hfValue16 = 0, hfValue17 = serializedSource, hfValue18 = hfValue7[lengthProperty]; hfValue16 < hfValue18; hfValue16++) hfValue17 = hfValue17[splitMethod](hfValue7[hfValue16])[joinMethod]('{-' + hfValue5 + '-}');
                                                for (var hfValue16 = 0, hfValue19 = hfValue17[splitMethod]('{-' + hfValue5 + '-}'), hfValue17 = hfValue19[0], hfValue18 = hfValue7[lengthProperty]; hfValue16 < hfValue18; hfValue16++) {
                                                    if (hfValue16 == hfValue9) {
                                                        var hfValue23 = hfValue7[hfValue16][replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + hfArgument4 + '$2');
                                                        hfValue23 = hfValue23[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + hfArgument4 + '$2');
                                                        hfValue23 = hfValue23[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + hfArgument4 + '$2');
                                                        if (hfValue6) {
                                                            var hfValue24 = hfValue6[splitMethod](',');
                                                            for (var hfValue25 = 0, hfValue26 = hfValue24[lengthProperty]; hfValue25 < hfValue26; hfValue25++) hfValue24[hfValue25] = hfValue24[hfValue25][replaceMethod](new RegExp('^(\\s*)[\\s\\S]+?(\\s+[^\\s]+\\s*)$', 'gi'), '$1' + hfArgument4 + '$2');
                                                            hfValue24 = hfValue24[joinMethod](',');
                                                            hfValue23 = hfValue23[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + hfValue24 + '$2');
                                                            hfValue23 = hfValue23[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + hfValue24 + '$2');
                                                            hfValue23 = hfValue23[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + hfValue24 + '$2');
                                                            visualEditorValue248[setAttributeMethod]('srcset', hfValue24)
                                                        }
                                                        hfValue17 = hfValue17 + hfValue23 + hfValue19[hfValue16 + 1]
                                                    } else hfValue17 = hfValue17 + hfValue7[hfValue16] + hfValue19[hfValue16 + 1]
                                                }
                                                serializedSource = hfValue17;
                                                visualEditorValue248[setAttributeMethod](sourceAttribute, hfArgument4);
                                                visualEditorValue248[addEventListenerMethod]('load', function() {
                                                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bd');
                                                    runtimeValue9[classNameProperty] = 'c';
                                                    runtimeValue106.call(this)
                                                });
                                                runtimeValue4[disabledProperty] = false
                                            } else {
                                                runtimeValue9[classNameProperty] = 'd';
                                                runtimeValue125()
                                            }
                                            visualEditorValue248[removeAttributeMethod](dropAttribute)
                                        }, function() {
                                            visualEditorValue248[removeAttributeMethod](dropAttribute);
                                            runtimeValue9[classNameProperty] = 'd';
                                            if (this[getResponseHeaderMethod]('X-d')) runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bf');
                                            else if (this[getResponseHeaderMethod]('X-b')) runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bo');
                                            else runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'be')
                                        }, function() {
                                            visualEditorValue248[removeAttributeMethod](dropAttribute);
                                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'al');
                                            runtimeValue9[classNameProperty] = 'd'
                                        }, function(hfArgument5, hfArgument6) {
                                            if (runtimeValue9[textContentProperty][indexOfMethod]('(') != -1) runtimeValue9[textContentProperty] = visualEditorValue254 + ' (' + (hfArgument5 / hfArgument6 * 100)[toFixedMethod](1) + '%)'
                                        })
                                    } else {
                                        visualEditorValue248[removeAttributeMethod](dragOverAttribute);
                                        if (visualEditorValue250 > visualEditorValue251) runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(visualEditorValue251) + ')';
                                        else runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(visualEditorValue250) + ')';
                                        runtimeValue9[classNameProperty] = 'o';
                                        fadeIn(runtimeValue9)
                                    }
                                } else {
                                    var visualEditorValue255 = runtimeValue1.e;
                                    if (visualEditorValue255 && visualEditorValue255[tagNameProperty][toLowerCaseMethod]() == imageTagName && visualEditorValue248[tagNameProperty][toLowerCaseMethod]() == imageTagName) {
                                        if (visualEditorValue255 != visualEditorValue248) {
                                            var visualEditorValue256 = visualEditorValue255[getAttributeMethod](sourceAttribute),
                                                visualEditorValue257 = visualEditorValue255[getAttributeMethod]('alt'),
                                                visualEditorValue258 = visualEditorValue255[getAttributeMethod]('srcset'),
                                                visualEditorValue259 = visualEditorValue255[getAttributeMethod]('sizes'),
                                                visualEditorValue260 = visualEditorValue248[getAttributeMethod](sourceAttribute),
                                                visualEditorValue261 = visualEditorValue248[getAttributeMethod]('alt'),
                                                visualEditorValue262 = visualEditorValue248[getAttributeMethod]('srcset'),
                                                visualEditorValue263 = visualEditorValue248[getAttributeMethod]('sizes'),
                                                visualEditorValue264 = runtimeValue118(imageTagName, sourceAttribute, visualEditorValue256),
                                                visualEditorValue265 = runtimeValue118(imageTagName, sourceAttribute, visualEditorValue260),
                                                visualEditorValue266 = runtimeValue119(imageTagName, sourceAttribute, visualEditorValue256),
                                                visualEditorValue267 = runtimeValue119(imageTagName, sourceAttribute, visualEditorValue260),
                                                visualEditorValue268 = visualEditorValue266[indexOfMethod](visualEditorValue255),
                                                visualEditorValue269 = visualEditorValue267[indexOfMethod](visualEditorValue248);
                                            if (visualEditorValue264[lengthProperty] == visualEditorValue266[lengthProperty] && visualEditorValue265[lengthProperty] == visualEditorValue267[lengthProperty] && visualEditorValue268 !== -1 && visualEditorValue269 !== -1) {
                                                if (visualEditorValue256 != visualEditorValue260) {
                                                    if (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cf') * 1) {
                                                        var visualEditorValue270 = visualEditorValue246(visualEditorValue255),
                                                            visualEditorValue271 = visualEditorValue246(visualEditorValue248),
                                                            visualEditorValue272 = serializedSource;
                                                        if (visualEditorValue270) {
                                                            var visualEditorValue273 = visualEditorValue270.z;
                                                            if (visualEditorValue247(visualEditorValue273, visualEditorValue256)) {
                                                                var visualEditorValue274 = runtimeValue118('a', 'href', visualEditorValue273),
                                                                    visualEditorValue275 = runtimeValue119('a', 'href', visualEditorValue273),
                                                                    visualEditorValue276 = visualEditorValue275[indexOfMethod](visualEditorValue270);
                                                                if (visualEditorValue274[lengthProperty] == visualEditorValue275[lengthProperty] && visualEditorValue276 !== -1) {
                                                                    var visualEditorValue277 = visualEditorValue260;
                                                                    if (visualEditorValue271 && visualEditorValue247(visualEditorValue271.z, visualEditorValue277)) visualEditorValue277 = visualEditorValue271.z;
                                                                    else {
                                                                        if (visualEditorValue273[lastIndexOfMethod]('/') !== -1) {
                                                                            if (visualEditorValue277[lastIndexOfMethod]('/') !== -1) visualEditorValue277 = visualEditorValue277[sliceMethod](visualEditorValue277[lastIndexOfMethod]('/') + 1);
                                                                            visualEditorValue277 = visualEditorValue273[sliceMethod](0, visualEditorValue273[lastIndexOfMethod]('/') + 1) + visualEditorValue277
                                                                        }
                                                                    }
                                                                    for (var visualEditorValue278 = 0, visualEditorValue279 = visualEditorValue274[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue274[visualEditorValue278])[joinMethod]('{+' + visualEditorValue273 + '+}')
                                                                }
                                                            }
                                                        }
                                                        if (visualEditorValue271) {
                                                            var visualEditorValue280 = visualEditorValue271.z;
                                                            if (visualEditorValue247(visualEditorValue280, visualEditorValue260)) {
                                                                var visualEditorValue281 = runtimeValue118('a', 'href', visualEditorValue280),
                                                                    visualEditorValue282 = runtimeValue119('a', 'href', visualEditorValue280),
                                                                    visualEditorValue283 = visualEditorValue282[indexOfMethod](visualEditorValue271);
                                                                if (visualEditorValue281[lengthProperty] == visualEditorValue282[lengthProperty] && visualEditorValue283 !== -1) {
                                                                    var visualEditorValue284 = visualEditorValue256;
                                                                    if (visualEditorValue270 && visualEditorValue247(visualEditorValue270.z, visualEditorValue284)) visualEditorValue284 = visualEditorValue270.z;
                                                                    else {
                                                                        if (visualEditorValue280[lastIndexOfMethod]('/') !== -1) {
                                                                            if (visualEditorValue284[lastIndexOfMethod]('/') !== -1) visualEditorValue284 = visualEditorValue284[sliceMethod](visualEditorValue284[lastIndexOfMethod]('/') + 1);
                                                                            visualEditorValue284 = visualEditorValue280[sliceMethod](0, visualEditorValue280[lastIndexOfMethod]('/') + 1) + visualEditorValue284
                                                                        }
                                                                    }
                                                                    for (var visualEditorValue278 = 0, visualEditorValue279 = visualEditorValue281[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue281[visualEditorValue278])[joinMethod]('{-' + visualEditorValue280 + '-}')
                                                                }
                                                            }
                                                        }
                                                        if (visualEditorValue277) {
                                                            for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{+' + visualEditorValue273 + '+}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue274[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                                if (visualEditorValue278 == visualEditorValue276) {
                                                                    var visualEditorValue286 = visualEditorValue274[visualEditorValue278][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue277 + '$2');
                                                                    visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue277 + '$2');
                                                                    visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue277 + '$2');
                                                                    visualEditorValue272 = visualEditorValue272 + visualEditorValue286 + visualEditorValue285[visualEditorValue278 + 1]
                                                                } else visualEditorValue272 = visualEditorValue272 + visualEditorValue274[visualEditorValue278] + visualEditorValue285[visualEditorValue278 + 1]
                                                            }
                                                            visualEditorValue270.z = visualEditorValue277
                                                        }
                                                        if (visualEditorValue284) {
                                                            for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{-' + visualEditorValue280 + '-}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue281[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                                if (visualEditorValue278 == visualEditorValue283) {
                                                                    var visualEditorValue286 = visualEditorValue281[visualEditorValue278][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue284 + '$2');
                                                                    visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue284 + '$2');
                                                                    visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue284 + '$2');
                                                                    visualEditorValue272 = visualEditorValue272 + visualEditorValue286 + visualEditorValue285[visualEditorValue278 + 1]
                                                                } else visualEditorValue272 = visualEditorValue272 + visualEditorValue281[visualEditorValue278] + visualEditorValue285[visualEditorValue278 + 1]
                                                            }
                                                            visualEditorValue271.z = visualEditorValue284
                                                        }
                                                        serializedSource = visualEditorValue272
                                                    }
                                                    for (var visualEditorValue278 = 0, visualEditorValue272 = serializedSource, visualEditorValue279 = visualEditorValue264[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue264[visualEditorValue278])[joinMethod]('{+' + visualEditorValue256 + '+}');
                                                    for (var visualEditorValue278 = 0, visualEditorValue279 = visualEditorValue265[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue265[visualEditorValue278])[joinMethod]('{-' + visualEditorValue260 + '-}');
                                                    for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{+' + visualEditorValue256 + '+}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue264[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                        var visualEditorValue287 = visualEditorValue264[visualEditorValue278];
                                                        if (visualEditorValue278 == visualEditorValue268) {
                                                            visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue260 + '$2');
                                                            visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue260 + '$2');
                                                            visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue260 + '$2');
                                                            visualEditorValue255[setAttributeMethod](sourceAttribute, visualEditorValue260);
                                                            if (visualEditorValue257) {
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue261 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue261 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue261 + '$2');
                                                                visualEditorValue255[setAttributeMethod]('alt', visualEditorValue261)
                                                            }
                                                            if (visualEditorValue258) {
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue262 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue262 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue262 + '$2');
                                                                visualEditorValue255[setAttributeMethod]('srcset', visualEditorValue262)
                                                            }
                                                            if (visualEditorValue259) {
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue263 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue263 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue263 + '$2');
                                                                visualEditorValue255[setAttributeMethod]('sizes', visualEditorValue263)
                                                            }
                                                        }
                                                        visualEditorValue272 = visualEditorValue272 + visualEditorValue287 + visualEditorValue285[visualEditorValue278 + 1]
                                                    }
                                                    for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{-' + visualEditorValue260 + '-}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue265[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                        var visualEditorValue287 = visualEditorValue265[visualEditorValue278];
                                                        if (visualEditorValue278 == visualEditorValue269) {
                                                            visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue256 + '$2');
                                                            visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue256 + '$2');
                                                            visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue256 + '$2');
                                                            visualEditorValue248[setAttributeMethod](sourceAttribute, visualEditorValue256);
                                                            if (visualEditorValue261) {
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue257 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue257 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue257 + '$2');
                                                                visualEditorValue248[setAttributeMethod]('alt', visualEditorValue257)
                                                            }
                                                            if (visualEditorValue262) {
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue258 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue258 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue258 + '$2');
                                                                visualEditorValue248[setAttributeMethod]('srcset', visualEditorValue258)
                                                            }
                                                            if (visualEditorValue263) {
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue259 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue259 + '$2');
                                                                visualEditorValue287 = visualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue259 + '$2');
                                                                visualEditorValue248[setAttributeMethod]('sizes', visualEditorValue259)
                                                            }
                                                        }
                                                        visualEditorValue272 = visualEditorValue272 + visualEditorValue287 + visualEditorValue285[visualEditorValue278 + 1]
                                                    }
                                                    serializedSource = visualEditorValue272;
                                                    runtimeValue1.e = false;
                                                    runtimeValue75()
                                                }
                                                runtimeValue106.call(this)
                                            } else {
                                                runtimeValue9[classNameProperty] = 'd';
                                                runtimeValue125();
                                                fadeIn(runtimeValue9)
                                            }
                                        }
                                    } else if (!visualEditorValue255 && visualEditorValue248[tagNameProperty][toLowerCaseMethod]() == imageTagName) {
                                        var visualEditorValue288 = visualEditorValue248[getAttributeMethod](sourceAttribute),
                                            visualEditorValue262 = visualEditorValue248[getAttributeMethod]('srcset'),
                                            visualEditorValue289 = event[dataTransferProperty].getData('url');
                                        if (!visualEditorValue289) visualEditorValue289 = event[dataTransferProperty].getData('text');
                                        if (visualEditorValue289 && (visualEditorValue289 = visualEditorValue289[matchMethod](new RegExp('http[a-z0-9-=?&.:/]+?(?:png|jpe?g|gif)', 'gi')) + '') && visualEditorValue289 !== 'null') {
                                            var visualEditorValue290 = runtimeValue118(imageTagName, sourceAttribute, visualEditorValue288),
                                                visualEditorValue291 = runtimeValue119(imageTagName, sourceAttribute, visualEditorValue288),
                                                visualEditorValue269 = visualEditorValue291[indexOfMethod](visualEditorValue248);
                                            if (visualEditorValue290[lengthProperty] == visualEditorValue291[lengthProperty] && visualEditorValue269 !== -1) {
                                                if (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cf') * 1) {
                                                    var visualEditorValue292 = visualEditorValue246(visualEditorValue248);
                                                    if (visualEditorValue292) {
                                                        var visualEditorValue293 = visualEditorValue292.z;
                                                        if (visualEditorValue247(visualEditorValue293, visualEditorValue288)) {
                                                            var visualEditorValue294 = runtimeValue118('a', 'href', visualEditorValue293),
                                                                visualEditorValue295 = runtimeValue119('a', 'href', visualEditorValue293),
                                                                visualEditorValue296 = visualEditorValue295[indexOfMethod](visualEditorValue292);
                                                            if (visualEditorValue294[lengthProperty] == visualEditorValue295[lengthProperty] && visualEditorValue296 !== -1) {
                                                                for (var visualEditorValue278 = 0, visualEditorValue272 = serializedSource, visualEditorValue279 = visualEditorValue294[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue294[visualEditorValue278])[joinMethod]('{-' + visualEditorValue293 + '-}');
                                                                for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{-' + visualEditorValue293 + '-}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue294[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                                    if (visualEditorValue278 == visualEditorValue296) {
                                                                        var visualEditorValue286 = visualEditorValue294[visualEditorValue278][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                                        visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                                        visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                                        visualEditorValue272 = visualEditorValue272 + visualEditorValue286 + visualEditorValue285[visualEditorValue278 + 1]
                                                                    } else visualEditorValue272 = visualEditorValue272 + visualEditorValue294[visualEditorValue278] + visualEditorValue285[visualEditorValue278 + 1]
                                                                }
                                                                serializedSource = visualEditorValue272;
                                                                visualEditorValue292.z = visualEditorValue289
                                                            }
                                                        }
                                                    }
                                                }
                                                for (var visualEditorValue278 = 0, visualEditorValue272 = serializedSource, visualEditorValue279 = visualEditorValue290[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue290[visualEditorValue278])[joinMethod]('{-' + visualEditorValue288 + '-}');
                                                for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{-' + visualEditorValue288 + '-}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue290[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                    if (visualEditorValue278 == visualEditorValue269) {
                                                        var visualEditorValue297 = visualEditorValue290[visualEditorValue278][replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                        visualEditorValue297 = visualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                        visualEditorValue297 = visualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                        if (visualEditorValue262) {
                                                            var visualEditorValue298 = visualEditorValue262[splitMethod](',');
                                                            for (var visualEditorValue299 = 0, visualEditorValue300 = visualEditorValue298[lengthProperty]; visualEditorValue299 < visualEditorValue300; visualEditorValue299++) visualEditorValue298[visualEditorValue299] = visualEditorValue298[visualEditorValue299][replaceMethod](new RegExp('(^\\s*)[^\\s]+(\\s)', 'gi'), '$1' + visualEditorValue289 + '$2');
                                                            visualEditorValue298 = visualEditorValue298[joinMethod](',');
                                                            visualEditorValue297 = visualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue298 + '$2');
                                                            visualEditorValue297 = visualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue298 + '$2');
                                                            visualEditorValue297 = visualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue298 + '$2');
                                                            visualEditorValue248[setAttributeMethod]('srcset', visualEditorValue298)
                                                        }
                                                        visualEditorValue272 = visualEditorValue272 + visualEditorValue297 + visualEditorValue285[visualEditorValue278 + 1]
                                                    } else visualEditorValue272 = visualEditorValue272 + visualEditorValue290[visualEditorValue278] + visualEditorValue285[visualEditorValue278 + 1]
                                                }
                                                serializedSource = visualEditorValue272;
                                                visualEditorValue248[setAttributeMethod](sourceAttribute, visualEditorValue289);
                                                runtimeValue106.call(this);
                                                runtimeValue75()
                                            } else {
                                                runtimeValue9[classNameProperty] = 'd';
                                                runtimeValue125();
                                                fadeIn(runtimeValue9)
                                            }
                                        } else {
                                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bq');
                                            runtimeValue9[classNameProperty] = 'o';
                                            fadeIn(runtimeValue9)
                                        }
                                    } else if (!visualEditorValue255 && visualEditorValue248[tagNameProperty][toLowerCaseMethod]() == 'edit') {
                                        var visualEditorValue301 = visualEditorValue248[nextElementSiblingProperty];
                                        if (visualEditorValue301 && visualEditorValue301[tagNameProperty][toLowerCaseMethod]() == iframeTagName) {
                                            var visualEditorValue288 = visualEditorValue301[getAttributeMethod](sourceAttribute),
                                                visualEditorValue289 = event[dataTransferProperty].getData('url');
                                            if (!visualEditorValue289) visualEditorValue289 = event[dataTransferProperty].getData('text');
                                            if (visualEditorValue289 && (visualEditorValue289 = visualEditorValue289[matchMethod](new RegExp('http[a-z0-9-=_?&.:/]{2,100}', 'gi')) + '') && visualEditorValue289 !== 'null') {
                                                var visualEditorValue302 = visualEditorValue289[matchMethod](new RegExp('[a-z0-9-]{2,40}\\.[a-z0-9]{2,10}(?=/)', 'gi')) + '',
                                                    visualEditorValue303 = visualEditorValue288[matchMethod](new RegExp('[a-z0-9-]{2,40}\\.[a-z0-9]{2,10}(?=/)', 'gi')) + '',
                                                    visualEditorValue304 = visualEditorValue289[matchMethod](new RegExp('[a-z0-9-_]{2,60}$', 'gi')) + '',
                                                    visualEditorValue305 = visualEditorValue288[matchMethod](new RegExp('[a-z0-9-_]{2,60}(?=\\?|$)', 'gi')) + '';
                                                if (visualEditorValue302 == visualEditorValue303 && visualEditorValue304[lengthProperty] == visualEditorValue305[lengthProperty]) {
                                                    var visualEditorValue306 = visualEditorValue288[splitMethod](visualEditorValue305)[joinMethod](visualEditorValue304),
                                                        visualEditorValue307 = runtimeValue118(iframeTagName, sourceAttribute, visualEditorValue288),
                                                        visualEditorValue308 = runtimeValue119(iframeTagName, sourceAttribute, visualEditorValue288),
                                                        visualEditorValue269 = visualEditorValue308[indexOfMethod](visualEditorValue301);
                                                    if (visualEditorValue307[lengthProperty] == visualEditorValue308[lengthProperty] && visualEditorValue269 !== -1) {
                                                        for (var visualEditorValue278 = 0, visualEditorValue272 = serializedSource, visualEditorValue279 = visualEditorValue307[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) visualEditorValue272 = visualEditorValue272[splitMethod](visualEditorValue307[visualEditorValue278])[joinMethod]('{-' + visualEditorValue288 + '-}');
                                                        for (var visualEditorValue278 = 0, visualEditorValue285 = visualEditorValue272[splitMethod]('{-' + visualEditorValue288 + '-}'), visualEditorValue272 = visualEditorValue285[0], visualEditorValue279 = visualEditorValue307[lengthProperty]; visualEditorValue278 < visualEditorValue279; visualEditorValue278++) {
                                                            if (visualEditorValue278 == visualEditorValue269) {
                                                                var visualEditorValue286 = visualEditorValue307[visualEditorValue278][replaceMethod](new RegExp('^(<iframe[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue306 + '$2');
                                                                visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<iframe[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue306 + '$2');
                                                                visualEditorValue286 = visualEditorValue286[replaceMethod](new RegExp('^(<iframe[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + visualEditorValue306 + '$2');
                                                                visualEditorValue272 = visualEditorValue272 + visualEditorValue286 + visualEditorValue285[visualEditorValue278 + 1]
                                                            } else visualEditorValue272 = visualEditorValue272 + visualEditorValue307[visualEditorValue278] + visualEditorValue285[visualEditorValue278 + 1]
                                                        }
                                                        serializedSource = visualEditorValue272;
                                                        visualEditorValue301[setAttributeMethod](sourceAttribute, visualEditorValue306);
                                                        runtimeValue106.call(this);
                                                        runtimeValue75()
                                                    } else {
                                                        runtimeValue9[classNameProperty] = 'd';
                                                        runtimeValue125();
                                                        fadeIn(runtimeValue9)
                                                    }
                                                } else {
                                                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bq');
                                                    runtimeValue9[classNameProperty] = 'o';
                                                    fadeIn(runtimeValue9)
                                                }
                                            }
                                        }
                                    }
                                    visualEditorValue248[removeAttributeMethod](dragOverAttribute)
                                }
                            } else {
                                visualEditorValue248[removeAttributeMethod](dragOverAttribute);
                                runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'an');
                                runtimeValue9[classNameProperty] = 'o';
                                fadeIn(runtimeValue9)
                            }
                        },
                        runtimeValue115 = function() {
                            var visualEditorValue309 = runtimeValue72(runtimeValue127.body),
                                visualEditorValue310 = runtimeValue127[querySelectorAllMethod](imageTagName),
                                visualEditorValue311 = runtimeValue127[querySelectorAllMethod]('a'),
                                visualEditorValue312 = runtimeValue127[querySelectorAllMethod](runtimeValue71),
                                visualEditorValue313 = documentObject[querySelectorMethod]('#i')[innerHTMLProperty],
                                visualEditorValue314 = documentObject[createElementMethod]('style');
                            visualEditorValue314[innerHTMLProperty] = visualEditorValue313 + '[data-myvibehtml-selection="section"]{outline:3px solid #f59e0b !important;outline-offset:5px;}' + '[data-myvibehtml-selection="block"]{outline:3px solid #2dd4bf !important;outline-offset:3px;}' + '[data-myvibehtml-selection="element"]{outline:3px solid #14b8a6 !important;outline-offset:2px;}';
                            runtimeValue127.head[appendChildMethod](visualEditorValue314);
                            runtimeValue127[addEventListenerMethod](mouseDownEvent, handleEditorSelection);
                            runtimeValue127[addEventListenerMethod]('contextmenu', showContextMenu);
                            runtimeValue127[addEventListenerMethod](keyDownEvent, function(event) {
                                if (event[keyCodeProperty] == 27) hideContextMenu()
                            });
                            var visualEditorValue315 = runtimeValue80(serializedSource);
                            for (var visualEditorValue316 = 0, visualEditorValue317 = visualEditorValue309[lengthProperty]; visualEditorValue316 < visualEditorValue317; visualEditorValue316++) {
                                var visualEditorValue318 = runtimeValue127[createElementMethod]('edit');
                                visualEditorValue318[setAttributeMethod](stringAttribute, true);
                                visualEditorValue318[setAttributeMethod]('contenteditable', true);
                                visualEditorValue309[visualEditorValue316][parentNodeProperty][insertBeforeMethod](visualEditorValue318, visualEditorValue309[visualEditorValue316]);
                                visualEditorValue318[appendChildMethod](visualEditorValue309[visualEditorValue316]);
                                var visualEditorValue319 = visualEditorValue318[innerHTMLProperty],
                                    visualEditorValue320 = visualEditorValue309[visualEditorValue316][textContentProperty],
                                    visualEditorValue321 = visualEditorValue315[splitMethod]('>' + visualEditorValue319 + '<')[lengthProperty] - 1;
                                for (var visualEditorValue322 = 0, visualEditorValue323 = 0; visualEditorValue322 < visualEditorValue317; visualEditorValue322++) {
                                    if (visualEditorValue320 == visualEditorValue309[visualEditorValue322][textContentProperty]) {
                                        if (visualEditorValue319 == visualEditorValue320) visualEditorValue323++;
                                        else {
                                            var visualEditorValue324 = visualEditorValue309[visualEditorValue322][cloneNodeMethod](true),
                                                visualEditorValue325 = runtimeValue127[createElementMethod]('span');
                                            visualEditorValue325[appendChildMethod](visualEditorValue324);
                                            if (visualEditorValue319 == visualEditorValue325[innerHTMLProperty]) visualEditorValue323++
                                        }
                                    }
                                }
                                if (visualEditorValue321 != visualEditorValue323) visualEditorValue318[setAttributeMethod](disabledProperty, true);
                                visualEditorValue318[addEventListenerMethod](mouseDownEvent, runtimeValue105);
                                visualEditorValue318.ondrop = function(event) {
                                    var hgValue1 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + '] img');
                                    if (hgValue1) {
                                        for (var hgValue2 = hgValue1; hgValue2; hgValue2 = hgValue2[parentNodeProperty])
                                            if (hgValue2[getAttributeMethod](focusAttribute)) hgValue2[removeAttributeMethod](focusAttribute);
                                        event[preventDefaultMethod]()
                                    }
                                    if (runtimeValue127[activeElementProperty]) runtimeValue127[activeElementProperty][blurEvent]();
                                    runtimeValue105.call(this, event)
                                };
                                visualEditorValue318.ondragend = function() {
                                    var hgValue3 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + '] [' + stringAttribute + ']');
                                    if (hgValue3) {
                                        runtimeValue73(hgValue3);
                                        runtimeValue75()
                                    }
                                }
                            }
                            for (var visualEditorValue316 = 0, visualEditorValue317 = visualEditorValue310[lengthProperty]; visualEditorValue316 < visualEditorValue317; visualEditorValue316++) {
                                visualEditorValue310[visualEditorValue316].ondragover = runtimeValue112;
                                visualEditorValue310[visualEditorValue316].ondragleave = runtimeValue113;
                                visualEditorValue310[visualEditorValue316].ondrop = runtimeValue114;
                                visualEditorValue310[visualEditorValue316].ondragstart = function() {
                                    runtimeValue1.e = this
                                };
                                visualEditorValue310[visualEditorValue316][addEventListenerMethod](mouseDownEvent, runtimeValue106);
                                if (visualEditorValue310[visualEditorValue316][getAttributeMethod]('usemap')) visualEditorValue310[visualEditorValue316][removeAttributeMethod]('usemap')
                            }
                            for (var visualEditorValue316 = 0, visualEditorValue317 = visualEditorValue311[lengthProperty]; visualEditorValue316 < visualEditorValue317; visualEditorValue316++) {
                                visualEditorValue311[visualEditorValue316].z = visualEditorValue311[visualEditorValue316][getAttributeMethod]('href');
                                visualEditorValue311[visualEditorValue316][removeAttributeMethod]('href')
                            }
                            for (var visualEditorValue316 = 0, visualEditorValue317 = visualEditorValue312[lengthProperty]; visualEditorValue316 < visualEditorValue317; visualEditorValue316++) {
                                var visualEditorValue326 = visualEditorValue312[visualEditorValue316][tagNameProperty][toLowerCaseMethod]();
                                if ('|iframe|object|video|audio|' [indexOfMethod]('|' + visualEditorValue326 + '|') !== -1) {
                                    var visualEditorValue318 = runtimeValue127[createElementMethod]('edit');
                                    visualEditorValue318[setAttributeMethod](objectAttribute, true);
                                    visualEditorValue318[styleProperty][widthProperty] = visualEditorValue312[visualEditorValue316].offsetWidth + 'px';
                                    visualEditorValue318[styleProperty][heightProperty] = visualEditorValue312[visualEditorValue316].offsetHeight + 'px';
                                    visualEditorValue318[styleProperty][marginLeftProperty] = windowObject[getComputedStyleMethod](visualEditorValue312[visualEditorValue316])[marginLeftProperty];
                                    visualEditorValue318[styleProperty][marginTopProperty] = windowObject[getComputedStyleMethod](visualEditorValue312[visualEditorValue316])['marginTop'];
                                    visualEditorValue318[styleProperty].marginBottom = ('-' + visualEditorValue318[styleProperty][heightProperty]);
                                    visualEditorValue312[visualEditorValue316][parentNodeProperty][insertBeforeMethod](visualEditorValue318, visualEditorValue312[visualEditorValue316]);
                                    visualEditorValue318.realNode = visualEditorValue312[visualEditorValue316];
                                    if (visualEditorValue326 == iframeTagName) {
                                        visualEditorValue318.ondragover = runtimeValue112;
                                        visualEditorValue318.ondragleave = runtimeValue113;
                                        visualEditorValue318.ondrop = runtimeValue114
                                    }
                                    visualEditorValue318[addEventListenerMethod](mouseDownEvent, function(event) {
                                        runtimeValue106.call(this.realNode)
                                    })
                                } else {
                                    visualEditorValue312[visualEditorValue316][addEventListenerMethod](mouseDownEvent, function(event) {
                                        runtimeValue111(event);
                                        runtimeValue106.call(this)
                                    });
                                    visualEditorValue312[visualEditorValue316][addEventListenerMethod](mouseUpEvent, runtimeValue111);
                                    visualEditorValue312[visualEditorValue316][addEventListenerMethod](clickEvent, runtimeValue111)
                                }
                            }
                            documentObject[addEventListenerMethod](keyDownEvent, runtimeValue109);
                            runtimeValue127[addEventListenerMethod](keyDownEvent, runtimeValue109);
                            documentObject[addEventListenerMethod](keyUpEvent, runtimeValue110);
                            runtimeValue127[addEventListenerMethod](keyUpEvent, runtimeValue110);
                            documentObject[addEventListenerMethod](mouseDownEvent, runtimeValue107);
                            runtimeValue127[addEventListenerMethod](mouseDownEvent, runtimeValue107);
                            documentObject[addEventListenerMethod](mouseUpEvent, runtimeValue108);
                            runtimeValue127[addEventListenerMethod](mouseUpEvent, runtimeValue108)
                        },
                        runtimeValue116 = function() {
                            runtimeValue126[styleProperty][heightProperty] = documentObject[documentElementProperty][clientHeightProperty] - runtimeValue1[clientHeightProperty] + 'px'
                        },
                        runtimeValue117 = function(initializeVisualEditorArgument33) {
                            var visualEditorValue327 = documentObject[querySelectorMethod]('#h')[innerHTMLProperty],
                                visualEditorValue328 = initializeVisualEditorArgument33[splitMethod]('<_cript')[joinMethod](openingScriptTag)[splitMethod]('</_cript')[joinMethod](closingScriptTag);
                            visualEditorValue328 = visualEditorValue328[splitMethod]('<?')[joinMethod]('<!--~~?')[splitMethod]('?>')[joinMethod]('?~~-->');
                            visualEditorValue328 = visualEditorValue328[replaceMethod](new RegExp('<meta( +[^>]*?)*?>', 'gi'), '');
                            var visualEditorValue329 = (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cg') * 1),
                                visualEditorValue330 = (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ch') * 1);
                            if (!visualEditorValue329) visualEditorValue328 = visualEditorValue328[replaceMethod](new RegExp(openingScriptTag + '[\\s\\S]+?/script>', 'gi'), '');
                            if (!visualEditorValue330) {
                                visualEditorValue328 = visualEditorValue328[replaceMethod](new RegExp('<style[\\s\\S]+?/style>', 'gi'), '');
                                visualEditorValue328 = visualEditorValue328[replaceMethod](new RegExp('<link[^>]+?>', 'gi'), '')
                            }
                            if (visualEditorValue328[matchMethod](new RegExp('<head', 'gi'))) visualEditorValue328 = visualEditorValue328[replaceMethod](new RegExp('(<head( +[^>]*?)*?>)', 'gi'), '$1' + visualEditorValue327);
                            else visualEditorValue328 = visualEditorValue327 + visualEditorValue328;
                            return visualEditorValue328
                        },
                        runtimeValue118 = function(initializeVisualEditorArgument34, initializeVisualEditorArgument35, initializeVisualEditorArgument36) {
                            var visualEditorValue331 = serializedSource[matchMethod](new RegExp('<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '[^>]+?>', 'gi'));
                            for (var visualEditorValue332 = 0, visualEditorValue333 = [], visualEditorValue334 = visualEditorValue331[lengthProperty]; visualEditorValue332 < visualEditorValue334; visualEditorValue332++) {
                                var visualEditorValue335 = visualEditorValue331[visualEditorValue332][matchMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*"', 'gi'));
                                if (!visualEditorValue335) {
                                    visualEditorValue335 = visualEditorValue331[visualEditorValue332][matchMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*\'', 'gi'));
                                    if (!visualEditorValue335) visualEditorValue335 = visualEditorValue331[visualEditorValue332][replaceMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=', 'gi'), '')[matchMethod](new RegExp('^[^\\s>]+', 'gi'));
                                    else visualEditorValue335 = visualEditorValue331[visualEditorValue332][replaceMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*\'', 'gi'), '')[matchMethod](new RegExp('^[^\']+', 'gi'))
                                } else visualEditorValue335 = visualEditorValue331[visualEditorValue332][replaceMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*"', 'gi'), '')[matchMethod](new RegExp('^[^"]+', 'gi'));
                                if (visualEditorValue335) {
                                    if (initializeVisualEditorArgument36 == visualEditorValue335[0]) visualEditorValue333[visualEditorValue333[lengthProperty]] = visualEditorValue331[visualEditorValue332];
                                    else {
                                        var visualEditorValue336 = documentObject[createElementMethod](textareaTagName);
                                        visualEditorValue336[innerHTMLProperty] = visualEditorValue335[0];
                                        if (initializeVisualEditorArgument36 == visualEditorValue336[valueProperty]) visualEditorValue333[visualEditorValue333[lengthProperty]] = visualEditorValue331[visualEditorValue332]
                                    }
                                }
                            }
                            return visualEditorValue333
                        },
                        runtimeValue119 = function(initializeVisualEditorArgument37, initializeVisualEditorArgument38, initializeVisualEditorArgument39) {
                            var visualEditorValue337 = runtimeValue127.body[querySelectorAllMethod](initializeVisualEditorArgument37);
                            for (var visualEditorValue338 = 0, visualEditorValue339 = [], visualEditorValue340 = false, visualEditorValue341 = visualEditorValue337[lengthProperty]; visualEditorValue338 < visualEditorValue341; visualEditorValue338++) {
                                if (initializeVisualEditorArgument38 == 'href') visualEditorValue340 = visualEditorValue337[visualEditorValue338].z;
                                else visualEditorValue340 = visualEditorValue337[visualEditorValue338][getAttributeMethod](initializeVisualEditorArgument38);
                                if (visualEditorValue340 == initializeVisualEditorArgument39) visualEditorValue339[visualEditorValue339[lengthProperty]] = visualEditorValue337[visualEditorValue338]
                            }
                            return visualEditorValue339
                        },
                        runtimeValue120 = function(initializeVisualEditorArgument40, initializeVisualEditorArgument41) {
                            initializeVisualEditorArgument40 = initializeVisualEditorArgument40[toLowerCaseMethod]();
                            var visualEditorValue342 = [],
                                visualEditorValue343 = initializeVisualEditorArgument40[matchMethod](new RegExp('<[a-z0-9]+(?=\\s|>|$)', 'gi')),
                                visualEditorValue344 = initializeVisualEditorArgument41[toLowerCaseMethod]()[matchMethod](new RegExp('<[a-z0-9]+(?=\\s|>|$)', 'gi'));
                            for (var visualEditorValue345 = 0, visualEditorValue346 = 0, visualEditorValue347 = 0, visualEditorValue348 = visualEditorValue343[lengthProperty]; visualEditorValue345 < visualEditorValue348; visualEditorValue345++) {
                                visualEditorValue346 = initializeVisualEditorArgument40[sliceMethod](visualEditorValue346 + visualEditorValue347)[searchMethod](new RegExp(visualEditorValue343[visualEditorValue345] + '(?=\\s|>|$)', 'gi')) + visualEditorValue346 + visualEditorValue347;
                                visualEditorValue347 = initializeVisualEditorArgument40[sliceMethod](visualEditorValue346)[indexOfMethod](visualEditorValue343[visualEditorValue345]) + visualEditorValue343[visualEditorValue345][lengthProperty];
                                visualEditorValue342[visualEditorValue345] = visualEditorValue346
                            }
                            for (var visualEditorValue345 = 0, skip = 0, visualEditorValue348 = visualEditorValue344[lengthProperty]; visualEditorValue345 < (visualEditorValue348 - skip); visualEditorValue345++) {
                                if (visualEditorValue343[visualEditorValue343[lengthProperty] - 1 - visualEditorValue345] != visualEditorValue344[visualEditorValue344[lengthProperty] - 1 - visualEditorValue345 - skip]) {
                                    if (visualEditorValue344[visualEditorValue344[lengthProperty] - 1 - visualEditorValue345 - skip] == '<tbody') {
                                        skip++;
                                        visualEditorValue345--
                                    } else return false
                                }
                            }
                            return visualEditorValue342[visualEditorValue343[lengthProperty] - visualEditorValue345]
                        },
                        runtimeValue121 = function(initializeVisualEditorArgument42, initializeVisualEditorArgument43) {
                            var visualEditorValue349 = [],
                                visualEditorValue350 = initializeVisualEditorArgument42[toLowerCaseMethod]()[matchMethod](new RegExp('/[a-z0-9]+>', 'gi')),
                                visualEditorValue351 = initializeVisualEditorArgument42[toLowerCaseMethod]()[matchMethod](new RegExp('/[a-z0-9]+>\\s*', 'gi')),
                                visualEditorValue352 = initializeVisualEditorArgument43[toLowerCaseMethod]()[matchMethod](new RegExp('/[a-z0-9]+>', 'gi'));
                            for (var visualEditorValue353 = 0, visualEditorValue354 = serializedSource[lengthProperty] - initializeVisualEditorArgument42[lengthProperty] - 1, visualEditorValue355 = visualEditorValue350[lengthProperty]; visualEditorValue353 < visualEditorValue355; visualEditorValue353++) {
                                visualEditorValue349[visualEditorValue353] = serializedSource[sliceMethod](visualEditorValue354)[indexOfMethod](visualEditorValue350[visualEditorValue353]) + visualEditorValue354 + visualEditorValue351[visualEditorValue353][lengthProperty];
                                visualEditorValue354 = visualEditorValue349[visualEditorValue353]
                            }
                            for (var visualEditorValue353 = 0, skip = 0, visualEditorValue355 = visualEditorValue352[lengthProperty]; visualEditorValue353 < (visualEditorValue355 - skip); visualEditorValue353++) {
                                if (visualEditorValue350[visualEditorValue353] != visualEditorValue352[visualEditorValue353 + skip]) {
                                    if (visualEditorValue352[visualEditorValue353 + skip] == '/tbody>' || visualEditorValue352[visualEditorValue353 + skip] == '/li>' || visualEditorValue352[visualEditorValue353 + skip] == '/p>' || visualEditorValue352[visualEditorValue353 + skip] == '/td>') {
                                        skip++;
                                        visualEditorValue353--
                                    } else return false
                                }
                            }
                            if (visualEditorValue353 === 0) return visualEditorValue349[visualEditorValue353] - visualEditorValue351[visualEditorValue353][lengthProperty] - 1;
                            else return visualEditorValue349[visualEditorValue353 - 1]
                        },
                        runtimeValue122 = function(initializeVisualEditorArgument44) {
                            var visualEditorValue356 = runtimeValue127.body[querySelectorAllMethod]('[' + stringAttribute + ']');
                            for (var visualEditorValue357 = 0, visualEditorValue358 = [], visualEditorValue359 = visualEditorValue356[lengthProperty]; visualEditorValue357 < visualEditorValue359; visualEditorValue357++)
                                if (initializeVisualEditorArgument44 == runtimeValue102(visualEditorValue356[visualEditorValue357])) visualEditorValue358[visualEditorValue358[lengthProperty]] = visualEditorValue356[visualEditorValue357];
                            return visualEditorValue358
                        },
                        runtimeValue123 = function(initializeVisualEditorArgument45) {
                            runtimeValue124.o = [], runtimeValue124.p = [];
                            runtimeValue124.q = [];
                            runtimeValue124.r = [];
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[splitMethod]('<?')[joinMethod]('<!--~~?')[splitMethod]('?>')[joinMethod]('?~~-->');
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[replaceMethod](new RegExp('^[\\s\\S]+?(?:</head>|<body[^>]>|<div[^>]>)', 'gi'), function(str1) {
                                if (!runtimeValue124.o[lengthProperty]) {
                                    runtimeValue124.o[runtimeValue124.o[lengthProperty]] = str1;
                                    return '{!~head' + (runtimeValue124.o[lengthProperty] - 1) + '~!}'
                                } else return str1
                            });
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[replaceMethod](new RegExp('<!--[\\s\\S]+?-->|<_cript[\\s\\S]+?/_cript>', 'gi'), function(str1) {
                                if (str1[indexOfMethod]('<!--') === 0) {
                                    runtimeValue124.p[runtimeValue124.p[lengthProperty]] = str1;
                                    return '{!~comment' + (runtimeValue124.p[lengthProperty] - 1) + '~!}'
                                } else {
                                    runtimeValue124.q[runtimeValue124.q[lengthProperty]] = str1;
                                    return '{!~script' + (runtimeValue124.q[lengthProperty] - 1) + '~!}'
                                }
                            });
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[replaceMethod](new RegExp('<style[\\s\\S]+?/style>', 'gi'), function(str1) {
                                runtimeValue124.r[runtimeValue124.r[lengthProperty]] = str1;
                                return '{!~style' + (runtimeValue124.r[lengthProperty] - 1) + '~!}'
                            });
                            return initializeVisualEditorArgument45[splitMethod]('<br/>')[joinMethod](lineBreakMarkup)[splitMethod]('<br />')[joinMethod](lineBreakMarkup)[splitMethod]('</br>')[joinMethod](lineBreakMarkup)
                        },
                        runtimeValue124 = function(initializeVisualEditorArgument46) {
                            for (var visualEditorValue360 = 0, visualEditorValue361 = runtimeValue124.r[lengthProperty]; visualEditorValue360 < visualEditorValue361; visualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~style' + visualEditorValue360 + '~!}')[joinMethod](runtimeValue124.r[visualEditorValue360]);
                            for (var visualEditorValue360 = 0, visualEditorValue361 = runtimeValue124.q[lengthProperty]; visualEditorValue360 < visualEditorValue361; visualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~script' + visualEditorValue360 + '~!}')[joinMethod](runtimeValue124.q[visualEditorValue360]);
                            for (var visualEditorValue360 = 0, visualEditorValue361 = runtimeValue124.p[lengthProperty]; visualEditorValue360 < visualEditorValue361; visualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~comment' + visualEditorValue360 + '~!}')[joinMethod](runtimeValue124.p[visualEditorValue360]);
                            for (var visualEditorValue360 = 0, visualEditorValue361 = runtimeValue124.o[lengthProperty]; visualEditorValue360 < visualEditorValue361; visualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~head' + visualEditorValue360 + '~!\}')[joinMethod](runtimeValue124.o[visualEditorValue360]);
                            return initializeVisualEditorArgument46[splitMethod]('<!--~~?')[joinMethod]('<?')[splitMethod]('?~~-->')[joinMethod]('?>')
                        },
                        runtimeValue125 = function() {
                            if ((runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cg') * 1)) {
                                runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bs') + ' (' + runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bu') + ')';
                                var visualEditorValue362 = runtimeValue9[firstElementChildProperty];
                                if (visualEditorValue362) {
                                    visualEditorValue362[addEventListenerMethod](clickEvent, function() {
                                        var hqValue1 = generateToken();
                                        writeCookie(tokenCookieSuffix, hqValue1);
                                        runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bv');
                                        runtimeValue9[classNameProperty] = 'b';
                                        windowObject[clearIntervalMethod](runtimeValue9.a);
                                        runtimeValue9[styleProperty][opacityProperty] = '';
                                        ajaxRequest('scripts=1' + tokenParameter + hqValue1, function() {
                                            writeCookie(scriptsCookieSuffix, 1);
                                            locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '')
                                        }, function() {
                                            runtimeValue9[classNameProperty] = 'd';
                                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'aj')
                                        }, function() {
                                            runtimeValue9[classNameProperty] = 'd';
                                            runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'al')
                                        })
                                    })
                                }
                            } else runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'br')
                        },
                        runtimeValue126 = documentObject[querySelectorMethod](iframeTagName),
                        runtimeValue127 = runtimeValue126[contentWindowProperty].document,
                        runtimeValue128 = serializedSource;
                    serializedSource = runtimeValue123(runtimeValue128);
                    blockLibraryButton = documentObject[querySelectorMethod]('[data-block-library]');
                    if (blockLibraryButton) blockLibraryButton[addEventListenerMethod](clickEvent, openBlockLibrary);
                    runtimeValue11[innerHTMLProperty] = serializedSource;
                    runtimeValue3[addEventListenerMethod](clickEvent, function() {
                        var visualEditorValue363 = false,
                            visualEditorValue364 = runtimeValue127[querySelectorMethod]('[' + focusAttribute + ']');
                        if (visualEditorValue364) {
                            var visualEditorValue365 = runtimeValue93(visualEditorValue364),
                                visualEditorValue366 = runtimeValue94(visualEditorValue364);
                            if (typeof visualEditorValue365 == 'number' && typeof visualEditorValue366 == 'number') {
                                serializedSource = serializedSource[sliceMethod](0, visualEditorValue365) + '<fo' + 'cus>' + serializedSource[sliceMethod](visualEditorValue365, visualEditorValue366) + '</fo' + 'cus>' + serializedSource[sliceMethod](visualEditorValue366);
                                visualEditorValue363 = runtimeValue79()
                            }
                        }
                        if (!runtimeValue4[disabledProperty] && !visualEditorValue363) visualEditorValue363 = runtimeValue79();
                        switchEditorMode(visualEditorValue363)
                    });
                    runtimeValue2[classNameProperty] = 'l';
                    windowObject[addEventListenerMethod](resizeEvent, runtimeValue116);
                    runtimeValue116();
                    var runtimeValue129 = readCookie(scriptsCookieSuffix);
                    if (runtimeValue129) {
                        removeCookie(scriptsCookieSuffix);
                        runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bw');
                        runtimeValue9[classNameProperty] = 'c';
                        fadeIn(runtimeValue9)
                    }
                    runtimeValue127.open();
                    runtimeValue127.write(runtimeValue117(runtimeValue128));
                    runtimeValue127.close();
                    if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, runtimeValue127);
                    windowObject[addEventListenerMethod]('load', function() {
                        runtimeValue115();
                        syncAllLinkedComponentInstances()
                    });
                    windowObject[addEventListenerMethod]('storage', function(event) {
                        if (event.key != productPrefix + ':blocks') return;
                        syncAllLinkedComponentInstances();
                        if (blockLibraryPanel && !blockLibraryPanel.hidden) renderBlockLibrary()
                    });
                    runtimeValue4[addEventListenerMethod](clickEvent, function() {
                        if (!runtimeValue4[disabledProperty]) {
                            var visualCandidateSource = runtimeValue79();
                            validationDialogOpen(visualCandidateSource, runtimeValue128, function() { saveEditorContent(visualCandidateSource) })
                        }
                    });
                    if (pageValidateButton) pageValidateButton[addEventListenerMethod](clickEvent, function() { validationDialogOpen(runtimeValue79(), runtimeValue128, null) });
                    if (windowObject.opera) {
                        var runtimeValue130 = documentObject[createElementMethod]('span');
                        runtimeValue130[styleProperty][cssFloatProperty] = 'right';
                        runtimeValue130[styleProperty][marginTopProperty] = '50px';
                        runtimeValue130[styleProperty][textIndentProperty] = '-9999px';
                        runtimeValue130[innerHTMLProperty] = '.';
                        runtimeValue1[appendChildMethod](runtimeValue130)
                    }
                },
                initializeSourceEditor = function() {
                    var runtimeValue131 = documentObject[querySelectorMethod]('pre'),
                        runtimeValue132 = documentObject[querySelectorMethod]('ol'),
                        runtimeValue133 = runtimeValue132[getAttributeMethod](dataAttributePrefix + 'ab'),
                        runtimeValue134 = '|if|else|function|return|true|false|null|new|for|do|while|switch|case|break|continue|try|catch|throw|instanceof|',
                        runtimeValue135 = function(initializeSourceEditorArgument1) {
                            return initializeSourceEditorArgument1[splitMethod]('</_cript')[joinMethod](closingScriptTag)[splitMethod]('<_cript')[joinMethod](openingScriptTag)[splitMethod]('&')[joinMethod]('&amp;')[splitMethod]('<')[joinMethod]('&lt;')[splitMethod]('>')[joinMethod]('&gt;')[splitMethod]('&lt;caret&gt;·&lt;/caret&gt;')[joinMethod](caretMarkup)[splitMethod]('\n')[joinMethod](lineBreakMarkup)
                        },
                        runtimeValue136 = function(initializeSourceEditorArgument2) {
                            initializeSourceEditorArgument2 = initializeSourceEditorArgument2[replaceMethod](new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>');
                            if (windowObject.opera) initializeSourceEditorArgument2 = initializeSourceEditorArgument2[replaceMethod](new RegExp('<div>(?:(?:' + openingSpanMarkup + '[a-z]>)*' + caretMarkup + '(?:' + closingSpanMarkup + ')*)<br></div>', 'gi'), '<div style="height:22px">' + caretMarkup + lineBreakMarkup + '</div>');
                            return initializeSourceEditorArgument2
                        },
                        runtimeValue137 = function(initializeSourceEditorArgument3) {
                            return initializeSourceEditorArgument3[replaceMethod](new RegExp('([^>](?:' + closingSpanMarkup + ')*|[^>])</div>', 'gi'), '$1<br></div>')[splitMethod](lineBreakMarkup)[joinMethod]('\n')[splitMethod](caretMarkup)[joinMethod]('&lt;caret&gt;·&lt;/caret&gt;')[replaceMethod](new RegExp('<.*?>', 'gi'), '')[splitMethod]('&lt;')[joinMethod]('<')[splitMethod]('&gt;')[joinMethod]('>')[splitMethod]('&amp;')[joinMethod]('&')[splitMethod](closingScriptTag)[joinMethod]('</_cript')[splitMethod](openingScriptTag)[joinMethod]('<_cript')
                        },
                        runtimeValue138 = runtimeValue135;
                    if (runtimeValue2[innerHTMLProperty] == 'xml') runtimeValue131[classNameProperty] = 'html';
                    else runtimeValue131[classNameProperty] = runtimeValue2[innerHTMLProperty];
                    if (runtimeValue131[classNameProperty] == 'html') {
                        runtimeValue138 = function(initializeSourceEditorArgument4) {
                            return runtimeValue136(runtimeValue135(initializeSourceEditorArgument4)[replaceMethod](new RegExp('&lt;.+?&gt;', 'gi'), function(str1) {
                                str1 = str1[replaceMethod](new RegExp('"(.+?)"', 'gi'), function(str11, runtimeInput42) {
                                    return '"' + openingSpanMarkup + 'j>' + runtimeInput42[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'j>') + '' + closingSpanMarkup + '"'
                                })[replaceMethod](new RegExp('\'(.+?)\'', 'gi'), function(str21, runtimeInput43) {
                                    return '\'' + openingSpanMarkup + 'j>' + runtimeInput43[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'j>') + closingSpanMarkup + '\''
                                });
                                return openingSpanMarkup + 'f>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'f>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('&amp;#?[a-z0-9]{2,7};', 'gi'), openingSpanMarkup + 'f>$&' + closingSpanMarkup + '')[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*&lt;script.+?&lt;/script&gt;', 'gi'), function(str1) {
                                return openingSpanMarkup + 'h>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*&lt;style.+?&lt;/style&gt;', 'gi'), function(str1) {
                                return openingSpanMarkup + 'i>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'i>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*&lt;!--.*?--&gt;', 'gi'), function(str1) {
                                return openingSpanMarkup + 'g>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup
                            }))
                        }
                    } else if (runtimeValue131[classNameProperty] == 'css') {
                        runtimeValue138 = function(initializeSourceEditorArgument5) {
                            return runtimeValue136(runtimeValue135(initializeSourceEditorArgument5[splitMethod](';')[joinMethod]('!~!'))[replaceMethod](new RegExp('[^{}]+(?={)', 'gi'), function(str1) {
                                return openingSpanMarkup + 'f>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'f>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('{[^{]*?}', 'gi'), function(str1) {
                                str1 = str1[replaceMethod](new RegExp('".+?"|\'.+?\'', 'gi'), function(str11) {
                                    return str11[splitMethod]('!~!')[joinMethod]('!#~!')
                                })[replaceMethod](new RegExp('((?:!~!|{)(?: |\t|<br>|</?caret>)*)([a-z-]+(?: |\t|<br>|</?caret>)*)(?=:)', 'gi'), '$1' + openingSpanMarkup + 'g>$2' + closingSpanMarkup + '')[replaceMethod](new RegExp(':(.+?)(?=!~!|})', 'gi'), function(str31, runtimeInput44) {
                                    return ':' + openingSpanMarkup + 'h>' + runtimeInput44[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup
                                })[splitMethod]('!#~!')[joinMethod]('!~!');
                                return openingSpanMarkup + 'j>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'j>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*/[*].*?[*]/', 'gi'), function(str1) {
                                return openingSpanMarkup + 'i>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'i>') + closingSpanMarkup
                            })[splitMethod]('!~!')[joinMethod](';'))
                        }
                    } else if (runtimeValue131[classNameProperty] == 'js') {
                        runtimeValue138 = function(initializeSourceEditorArgument6) {
                            return runtimeValue136(runtimeValue135(initializeSourceEditorArgument6)[replaceMethod](new RegExp('([^a-z0-9_$<]|^)([a-z]{2,10})(?=[^a-z0-9_$>])', 'gi'), function(str1, TArgument1, TArgument2) {
                                if ((runtimeValue134 + 'var|this|delete|nan|undefined|typeof|in|with|label|void|')[indexOfMethod]('|' + TArgument2 + '|') !== -1) return TArgument1 + openingSpanMarkup + 'f>' + TArgument2 + closingSpanMarkup;
                                else return str1
                            })[replaceMethod](new RegExp('([^a-z0-9_$])(-?[0-9]+(?:\.[0-9]+)*%?)(?=[^a-z0-9_$])', 'gi'), '$1' + openingSpanMarkup + 'j>$2' + closingSpanMarkup + '')[replaceMethod](new RegExp('"(|.*?(?:[^\\\\]|[\\\\][\\\\]))"|\'(|.*?(?:[^\\\\]|[\\\\][\\\\]))\'|(/[*].*?[*]/)|(//.*?(?=<br>|$))', 'gi'), function(str1, TArgument3, TArgument4, TArgument5, TArgument6) {
                                if (TArgument3) return '"' + openingSpanMarkup + 'h>' + TArgument3[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + '' + closingSpanMarkup + '"';
                                else if (TArgument4) return '\'' + openingSpanMarkup + 'h>' + TArgument4[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup + '\'';
                                else if (TArgument5) return openingSpanMarkup + 'g>' + TArgument5[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                else if (TArgument6) return openingSpanMarkup + 'g>' + TArgument6[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                else return str1
                            }))
                        }
                    } else if (runtimeValue131[classNameProperty] == 'php') {
                        runtimeValue138 = function(initializeSourceEditorArgument7) {
                            return runtimeValue136(runtimeValue135(initializeSourceEditorArgument7)[replaceMethod](new RegExp('(&lt;[?](?:php)?)(.*?)([?]&gt;)', 'gi'), function(str1, TArgument7, TArgument8, TArgument9) {
                                TArgument8 = TArgument8[replaceMethod](new RegExp('([^a-z0-9_$<]|^)([a-z]{2,10})(?=[^a-z0-9_$>])', 'gi'), function(str1, runtimeInput45, runtimeInput46) {
                                    if ((runtimeValue134 + 'foreach|as|require|include|require_once|include_once|elseif|endif|endswitch|class|public|private|protected|final|static|abstract|extends|interface|implements|use|const|global|or|and|xor|clone|namespace|trait|yield|declare|goto|')[indexOfMethod]('|' + runtimeInput46 + '|') !== -1) return runtimeInput45 + openingSpanMarkup + 'f>' + runtimeInput46 + closingSpanMarkup;
                                    else return str1
                                })[replaceMethod](new RegExp('([^a-z0-9_$])(-?[0-9]+(?:\.[0-9]+)*%?)(?=[^a-z0-9_$])', 'gi'), '$1' + openingSpanMarkup + 'j>$2' + closingSpanMarkup + '')[replaceMethod](new RegExp('"(|.*?(?:[^\\\\]|[\\\\][\\\\]))"|\'(|.*?(?:[^\\\\]|[\\\\][\\\\]))\'|(/[*].*?[*]/)|((?://|#).*?(?=<br>|$))', 'gi'), function(str1, runtimeInput47, runtimeInput48, runtimeInput49, runtimeInput50) {
                                    if (runtimeInput47) return '"' + openingSpanMarkup + 'h>' + runtimeInput47[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + '' + closingSpanMarkup + '"';
                                    else if (runtimeInput48) return '\'' + openingSpanMarkup + 'h>' + runtimeInput48[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup + '\'';
                                    else if (runtimeInput49) return openingSpanMarkup + 'g>' + runtimeInput49[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                    else if (runtimeInput50) return openingSpanMarkup + 'g>' + runtimeInput50[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                    else return str1
                                });
                                return openingSpanMarkup + 'i>' + TArgument7 + closingSpanMarkup + TArgument8 + openingSpanMarkup + 'i>' + TArgument9 + closingSpanMarkup
                            }))
                        }
                    }
                    var runtimeValue139 = function() {
                            var initializeSourceEditorValue1 = '',
                                initializeSourceEditorValue2 = 0,
                                initializeSourceEditorValue3 = runtimeValue131[querySelectorAllMethod]('div'),
                                initializeSourceEditorValue4 = initializeSourceEditorValue3[lengthProperty] - 1;
                            while (initializeSourceEditorValue2 < initializeSourceEditorValue4) {
                                if (initializeSourceEditorValue3[initializeSourceEditorValue2]) initializeSourceEditorValue1 += runtimeValue133[replaceMethod]('0', initializeSourceEditorValue3[initializeSourceEditorValue2][clientHeightProperty]);
                                initializeSourceEditorValue2++
                            }
                            runtimeValue132[innerHTMLProperty] = initializeSourceEditorValue1
                        },
                        runtimeValue140 = function() {
                            var initializeSourceEditorValue5 = sha1(runtimeValue131[innerHTMLProperty]);
                            if (runtimeValue11[getAttributeMethod](dataAttributePrefix + 'cu')) runtimeValue4[disabledProperty] = false;
                            else if (runtimeValue131.A !== initializeSourceEditorValue5) {
                                if (runtimeValue9[textContentProperty] == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ae')) fadeOut(runtimeValue9);
                                runtimeValue4[disabledProperty] = false
                            } else runtimeValue4[disabledProperty] = true;
                            if (runtimeValue131.h != initializeSourceEditorValue5) {
                                if (documentObject[activeElementProperty] == runtimeValue131) {
                                    var initializeSourceEditorValue6 = windowObject[getSelectionMethod](),
                                        initializeSourceEditorValue7 = initializeSourceEditorValue6[getRangeAtMethod](0),
                                        initializeSourceEditorValue8 = documentObject[createElementMethod](caretValue);
                                    initializeSourceEditorValue7[insertNodeMethod](initializeSourceEditorValue8)
                                }
                                runtimeValue141();
                                runtimeValue131.g.push(runtimeValue131[innerHTMLProperty]);
                                initializeSourceEditorValue8 = runtimeValue131[querySelectorAllMethod](caretValue);
                                if (initializeSourceEditorValue8[lengthProperty]) {
                                    var initializeSourceEditorValue9 = documentObject[createTextNodeMethod](' ');
                                    if (initializeSourceEditorValue8[0][nextSiblingProperty]) initializeSourceEditorValue8[0][parentNodeProperty][insertBeforeMethod](initializeSourceEditorValue9, initializeSourceEditorValue8[0][nextSiblingProperty]);
                                    else initializeSourceEditorValue8[0][parentNodeProperty][appendChildMethod](initializeSourceEditorValue9);
                                    var initializeSourceEditorValue10 = initializeSourceEditorValue8[0][nextSiblingProperty],
                                        initializeSourceEditorValue7 = documentObject[createRangeMethod]();
                                    initializeSourceEditorValue7[setStartMethod](initializeSourceEditorValue10, 0);
                                    initializeSourceEditorValue7[setEndMethod](initializeSourceEditorValue10, 0);
                                    initializeSourceEditorValue7[collapseMethod](true);
                                    initializeSourceEditorValue6[removeAllRangesMethod]();
                                    initializeSourceEditorValue10[textContentProperty] = initializeSourceEditorValue10[textContentProperty][sliceMethod](1);
                                    initializeSourceEditorValue8[0][parentNodeProperty][removeChildMethod](initializeSourceEditorValue8[0]);
                                    initializeSourceEditorValue6[addRangeMethod](initializeSourceEditorValue7)
                                }
                                runtimeValue131.h = sha1(runtimeValue131[innerHTMLProperty]);
                                runtimeValue139();
                                if (sourceHistory && !sourceHistory.applying) sourceHistoryRecord(runtimeValue137(runtimeValue131[innerHTMLProperty]))
                            }
                        },
                        runtimeValue141 = function() {
                            runtimeValue131[innerHTMLProperty] = runtimeValue138(runtimeValue137(runtimeValue131[innerHTMLProperty]))
                        },
                        runtimeValue142 = function() {
                            if (sha1(locationObject.hostname[replaceMethod]('www.', ''))) {
                                runtimeValue131.A = sha1(runtimeValue131[innerHTMLProperty]);
                                return runtimeValue137(runtimeValue131[innerHTMLProperty])
                            }
                        },
                        runtimeValue143 = function() {
                            var initializeSourceEditorValue11 = windowObject[getSelectionMethod](),
                                initializeSourceEditorValue12 = initializeSourceEditorValue11[getRangeAtMethod](0),
                                initializeSourceEditorValue13 = documentObject[createTextNodeMethod]('\t'),
                                initializeSourceEditorValue14 = initializeSourceEditorValue11.anchorNode;
                            if (initializeSourceEditorValue14[nodeTypeProperty] == 3) {
                                initializeSourceEditorValue12[insertNodeMethod](initializeSourceEditorValue13);
                                initializeSourceEditorValue14 = initializeSourceEditorValue14[nextSiblingProperty];
                                initializeSourceEditorValue12 = documentObject[createRangeMethod]();
                                initializeSourceEditorValue12[setStartMethod](initializeSourceEditorValue14, !!initializeSourceEditorValue14[lengthProperty] * 1);
                                initializeSourceEditorValue12[setEndMethod](initializeSourceEditorValue14, !!initializeSourceEditorValue14[lengthProperty] * 1);
                                initializeSourceEditorValue11[removeAllRangesMethod]();
                                initializeSourceEditorValue11[addRangeMethod](initializeSourceEditorValue12)
                            }
                        },
                        runtimeValue144 = function(event) {
                            if (event[keyCodeProperty] == 9) runtimeValue143();
                            else if (event[keyCodeProperty] == 17) runtimeValue145.i = false;
                            if (runtimeValue144.k) windowObject[clearTimeoutMethod](runtimeValue144.k);
                            runtimeValue144.k = windowObject[setTimeoutMethod](function() {
                                runtimeValue144.k = false;
                                runtimeValue140()
                            }, runtimeValue131[getAttributeMethod](dataAttributePrefix + 'cv') * 1)
                        },
                        runtimeValue145 = function(event) {
                            if (event[keyCodeProperty] == 9) event[preventDefaultMethod]();
                            else if (event[keyCodeProperty] == 17) runtimeValue145.i = true;
                            else if (event[keyCodeProperty] == 90 && runtimeValue145.i && !event.shiftKey) {
                                event[preventDefaultMethod]();
                                sourceHistoryUndo()
                            } else if ((event[keyCodeProperty] == 89 && runtimeValue145.i) || (event[keyCodeProperty] == 90 && runtimeValue145.i && event.shiftKey)) {
                                event[preventDefaultMethod]();
                                sourceHistoryRedo()
                            } else if (event[keyCodeProperty] == 83 && runtimeValue145.i) {
                                event[preventDefaultMethod]();
                                runtimeValue147();
                                if (!runtimeValue4[disabledProperty]) {
                                    var sourceCandidateOnShortcut = runtimeValue142();
                                    validationDialogOpen(sourceCandidateOnShortcut, sourceHistory.baseline, function() { saveEditorContent(sourceCandidateOnShortcut) })
                                }
                            }
                        },
                        runtimeValue146 = function(event) {
                            if (!runtimeValue144.k) runtimeValue144(event);
                            documentObject[removeEventListenerMethod](mouseMoveEvent, runtimeValue146);
                            runtimeValue146.k = windowObject[setTimeoutMethod](function() {
                                if (documentObject[activeElementProperty] == runtimeValue131) documentObject[addEventListenerMethod](mouseMoveEvent, runtimeValue146)
                            }, 500)
                        },
                        runtimeValue147 = function() {
                            runtimeValue140();
                            documentObject[removeEventListenerMethod](keyUpEvent, runtimeValue144);
                            documentObject[removeEventListenerMethod](keyDownEvent, runtimeValue145);
                            documentObject[removeEventListenerMethod](mouseMoveEvent, runtimeValue146);
                            windowObject[clearTimeoutMethod](runtimeValue146.k);
                            windowObject[clearTimeoutMethod](runtimeValue144.k);
                            runtimeValue131[removeEventListenerMethod](blurEvent, runtimeValue147)
                        },
                        runtimeValue148 = function() {
                            documentObject[addEventListenerMethod](keyUpEvent, runtimeValue144);
                            documentObject[addEventListenerMethod](keyDownEvent, runtimeValue145);
                            documentObject[addEventListenerMethod](mouseMoveEvent, runtimeValue146);
                            runtimeValue131[addEventListenerMethod](blurEvent, runtimeValue147);
                            if (!runtimeValue131.A) {
                                runtimeValue131.A = sha1(runtimeValue131[innerHTMLProperty]);
                                runtimeValue131.h = runtimeValue131.A
                            }
                            runtimeValue131.g = [runtimeValue131[innerHTMLProperty]]
                        },
                        runtimeValue149 = function() {
                            runtimeValue139();
                            documentObject.body[styleProperty][heightProperty] = documentObject[documentElementProperty][clientHeightProperty] - runtimeValue1[clientHeightProperty] + 'px'
                        },
                        runtimeValue150 = function(initializeSourceEditorArgument8) {
                            return initializeSourceEditorArgument8[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*&lt;focus.+?&lt;/focus&gt;', 'gi'), function(str1) {
                                return openingSpanMarkup + 'k>' + str1[splitMethod](lineBreakMarkup + '</div><div>')[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + '</div><div>' + openingSpanMarkup + 'k>') + closingSpanMarkup
                            })[splitMethod]('&lt;focus&gt;')[joinMethod]('')[splitMethod]('&lt;/focus&gt;')[joinMethod]('')
                        },
                        sourceHistory = {undo:[],redo:[],baseline:'',current:'',applying:false},
                        sourceHistoryStatus = sourceHistoryBar ? sourceHistoryBar[querySelectorMethod]('[data-source-draft-status]') : null,
                        sourceHistoryUndoButton = sourceHistoryBar ? sourceHistoryBar[querySelectorMethod]('[data-source-action="undo"]') : null,
                        sourceHistoryRedoButton = sourceHistoryBar ? sourceHistoryBar[querySelectorMethod]('[data-source-action="redo"]') : null,
                        sourceHistoryRestoreButton = sourceHistoryBar ? sourceHistoryBar[querySelectorMethod]('[data-source-action="restore"]') : null,
                        sourceHistoryTimelineButton = sourceHistoryBar ? sourceHistoryBar[querySelectorMethod]('[data-source-action="timeline"]') : null,
                        sourceHistoryTimeline = null,
                        sourceHistoryTimelineFocusCleanup = null,
                        closeSourceHistoryTimeline = function() {
                            if (!sourceHistoryTimeline) return;
                            sourceHistoryTimeline.hidden = true;
                            sourceHistoryTimeline[setAttributeMethod]('aria-hidden', 'true');
                            if (sourceHistoryTimelineFocusCleanup) sourceHistoryTimelineFocusCleanup(), sourceHistoryTimelineFocusCleanup = null
                        },
                        sourceHistoryValue = function() { return runtimeValue137(runtimeValue131[innerHTMLProperty]) },
                        sourceHistoryStatusUpdate = function() {
                            if (!sourceHistoryBar) return;
                            var sourceDraftValue = readSourceDraft(),
                                sourceIsDirty = sourceHistory.current !== sourceHistory.baseline,
                                sourceDraftAvailable = !!sourceDraftValue && sourceDraftValue !== sourceHistory.current;
                            sourceHistoryBar.setAttribute('data-dirty', sourceIsDirty ? 'true' : 'false');
                            sourceHistoryBar.setAttribute('data-draft', sourceDraftAvailable ? 'true' : 'false');
                            if (sourceHistoryUndoButton) sourceHistoryUndoButton[disabledProperty] = sourceHistory.undo[lengthProperty] < 2;
                            if (sourceHistoryRedoButton) sourceHistoryRedoButton[disabledProperty] = !sourceHistory.redo[lengthProperty];
                            if (sourceHistoryRestoreButton) sourceHistoryRestoreButton[disabledProperty] = !sourceDraftAvailable;
                            if (sourceHistoryStatus) sourceHistoryStatus[textContentProperty] = sourceIsDirty ? sourceHistoryBar[getAttributeMethod]('data-dirty') : sourceDraftAvailable ? sourceHistoryBar[getAttributeMethod]('data-draft') : sourceHistoryBar[getAttributeMethod]('data-clean')
                        },
                        sourceHistoryDraftSchedule = function(sourceDraftValue) {
                            if (sourceDraftTimer) windowObject[clearTimeoutMethod](sourceDraftTimer);
                            sourceDraftTimer = windowObject[setTimeoutMethod](function() {
                                sourceDraftTimer = false;
                                writeSourceDraft(sourceDraftValue);
                                sourceHistoryStatusUpdate()
                            }, 350)
                        },
                        sourceHistoryRecord = function(sourceValue) {
                            if (sourceHistory.applying || sourceValue === sourceHistory.current) return;
                            if (!sourceHistory.undo[lengthProperty] || sourceHistory.undo[sourceHistory.undo[lengthProperty] - 1] !== sourceValue) sourceHistory.undo.push(sourceValue);
                            var sourceHistoryLimit = parseInt(runtimeValue131[getAttributeMethod](dataAttributePrefix + 'cx'), 10) || 50;
                            while (sourceHistory.undo[lengthProperty] > sourceHistoryLimit + 1) sourceHistory.undo.shift();
                            sourceHistory.current = sourceValue;
                            sourceHistory.redo = [];
                            sourceHistoryDraftSchedule(sourceValue);
                            sourceHistoryStatusUpdate()
                        },
                        sourceHistoryRender = function(sourceValue) {
                            sourceHistory.applying = true;
                            runtimeValue131[innerHTMLProperty] = runtimeValue150(runtimeValue138(runtimeValue137(sourceValue)));
                            runtimeValue131.h = sha1(runtimeValue131[innerHTMLProperty]);
                            runtimeValue139();
                            sourceHistory.applying = false;
                            runtimeValue140()
                        },
                        sourceHistoryUndo = function() {
                            if (sourceHistory.undo[lengthProperty] < 2) return;
                            sourceHistory.redo.push(sourceHistory.undo.pop());
                            sourceHistory.current = sourceHistory.undo[sourceHistory.undo[lengthProperty] - 1];
                            sourceHistoryRender(sourceHistory.current);
                            sourceHistoryStatusUpdate()
                        },
                        sourceHistoryRedo = function() {
                            if (!sourceHistory.redo[lengthProperty]) return;
                            sourceHistory.current = sourceHistory.redo.pop();
                            sourceHistory.undo.push(sourceHistory.current);
                            sourceHistoryRender(sourceHistory.current);
                            sourceHistoryStatusUpdate()
                        },
                        sourceHistoryRestore = function() {
                            var sourceDraftValue = readSourceDraft();
                            if (!sourceDraftValue || sourceDraftValue === sourceHistory.current) return;
                            sourceHistory.undo.push(sourceDraftValue);
                            sourceHistory.redo = [];
                            sourceHistory.current = sourceDraftValue;
                            sourceHistoryRender(sourceDraftValue);
                            sourceHistoryStatusUpdate()
                        },
                        sourceHistoryMarkSaved = function() {
                            sourceHistory.baseline = sourceHistory.current;
                            sourceHistory.undo = [sourceHistory.current];
                            sourceHistory.redo = [];
                            clearSourceDraft();
                            sourceHistoryStatusUpdate()
                        },
                        sourceHistoryOpenTimeline = function() {
                            var sourceHistoryTimelineRussian = documentObject.documentElement.lang == 'ru';
                            if (!sourceHistoryTimeline) {
                                sourceHistoryTimeline = documentObject[createElementMethod]('aside');
                                sourceHistoryTimeline.id = 'myvibehtml-timeline';
                                sourceHistoryTimeline[setAttributeMethod]('role', 'dialog');
                                sourceHistoryTimeline[setAttributeMethod]('aria-modal', 'false');
                                sourceHistoryTimeline[setAttributeMethod]('aria-label', sourceHistoryTimelineRussian ? 'История изменений' : 'Change history');
                                sourceHistoryTimeline.hidden = true;
                                sourceHistoryTimeline[innerHTMLProperty] = '<div class="myvibehtml-timeline-header"><h2>' + (sourceHistoryTimelineRussian ? 'История изменений' : 'Change history') + '</h2><button type="button" data-timeline-close aria-label="' + (sourceHistoryTimelineRussian ? 'Закрыть' : 'Close') + '">×</button></div><p>' + (sourceHistoryTimelineRussian ? 'Снимки создаются при изменениях в визуальном и текстовом редакторе.' : 'Snapshots are created by visual and source editor changes.') + '</p><ol data-timeline-list></ol>';
                                documentObject.body[appendChildMethod](sourceHistoryTimeline);
                                sourceHistoryTimeline[querySelectorMethod]('[data-timeline-close]')[addEventListenerMethod](clickEvent, closeSourceHistoryTimeline);
                            }
                            var sourceHistoryTimelineList = sourceHistoryTimeline[querySelectorMethod]('[data-timeline-list]'),
                                sourceHistoryTimelineItems = readEditorTimeline();
                            sourceHistoryTimelineList[textContentProperty] = '';
                            if (!sourceHistoryTimelineItems[lengthProperty]) {
                                var sourceHistoryTimelineEmpty = documentObject[createElementMethod]('li');
                                sourceHistoryTimelineEmpty[textContentProperty] = sourceHistoryTimelineRussian ? 'История пока пуста' : 'History is empty';
                                sourceHistoryTimelineList[appendChildMethod](sourceHistoryTimelineEmpty)
                            } else for (var sourceHistoryTimelineIndex = 0; sourceHistoryTimelineIndex < sourceHistoryTimelineItems[lengthProperty]; sourceHistoryTimelineIndex++) {
                                var sourceHistoryTimelineItem = documentObject[createElementMethod]('li'),
                                    sourceHistoryTimelineEntry = documentObject[createElementMethod]('button'),
                                    sourceHistoryTimelineDate = new Date(sourceHistoryTimelineItems[sourceHistoryTimelineIndex].updated || 0);
                                sourceHistoryTimelineEntry.type = 'button';
                                sourceHistoryTimelineEntry.timelineIndex = sourceHistoryTimelineIndex;
                                sourceHistoryTimelineEntry[textContentProperty] = (sourceHistoryTimelineItems[sourceHistoryTimelineIndex].label || (sourceHistoryTimelineRussian ? 'Изменение' : 'Change')) + ' · ' + sourceHistoryTimelineDate.toLocaleString();
                                sourceHistoryTimelineEntry[setAttributeMethod]('title', sourceHistoryTimelineItems[sourceHistoryTimelineIndex].source.slice(0, 120));
                                sourceHistoryTimelineEntry[addEventListenerMethod](clickEvent, function() {
                                    var sourceHistoryTimelineItemToRestore = readEditorTimeline()[this.timelineIndex];
                                    if (!sourceHistoryTimelineItemToRestore || sourceHistoryTimelineItemToRestore.source === sourceHistory.current) return;
                                    if (!windowObject.confirm(sourceHistoryTimelineRussian ? 'Восстановить этот снимок? Текущие изменения останутся в Undo.' : 'Restore this snapshot? Current changes remain in Undo.')) return;
                                    sourceHistory.undo.push(sourceHistoryTimelineItemToRestore.source);
                                    sourceHistory.redo = [];
                                    sourceHistory.current = sourceHistoryTimelineItemToRestore.source;
                                    sourceHistoryRender(sourceHistory.current);
                                    sourceHistoryStatusUpdate();
                                    closeSourceHistoryTimeline()
                                });
                                sourceHistoryTimelineItem[appendChildMethod](sourceHistoryTimelineEntry);
                                sourceHistoryTimelineList[appendChildMethod](sourceHistoryTimelineItem)
                            }
                            sourceHistoryTimeline.hidden = false;
                            sourceHistoryTimeline[setAttributeMethod]('aria-hidden', 'false');
                            if (sourceHistoryTimelineFocusCleanup) sourceHistoryTimelineFocusCleanup();
                            sourceHistoryTimelineFocusCleanup = uiContracts.focusTrap ? uiContracts.focusTrap(sourceHistoryTimeline) : null;
                            sourceHistoryTimeline[querySelectorMethod]('[data-timeline-close]')[focusEvent]()
                        };
                    windowObject[addEventListenerMethod](resizeEvent, runtimeValue149);
                    runtimeValue149();
                    if (!(runtimeValue131[getAttributeMethod](dataAttributePrefix + 'cw') * 1)) {
                        runtimeValue138 = runtimeValue135;
                        runtimeValue150 = function(initializeSourceEditorArgument9) {
                            return initializeSourceEditorArgument9[splitMethod]('&lt;focus&gt;')[joinMethod]('')[splitMethod]('&lt;/focus&gt;')[joinMethod]('')
                        };
                        runtimeValue139 = function() {};
                        runtimeValue141 = function() {}
                    }
                    if (runtimeValue3) {
                        runtimeValue2[addEventListenerMethod](clickEvent, function() {
                            if (runtimeValue4[disabledProperty]) switchEditorMode();
                            else switchEditorMode(runtimeValue142())
                        });
                        runtimeValue3[classNameProperty] = 'l'
                    }
                    runtimeValue131[innerHTMLProperty] = runtimeValue150(runtimeValue138(runtimeValue137(runtimeValue138(runtimeValue11[innerHTMLProperty]))));
                    runtimeValue139();
                    sourceHistory.current = sourceHistoryValue();
                    sourceHistory.baseline = sourceHistory.current;
                    sourceHistory.undo = [sourceHistory.current];
                    sourceHistoryApi.markSaved = sourceHistoryMarkSaved;
                    sourceHistoryApi.isDirty = function() { return sourceHistory.current !== sourceHistory.baseline };
                    if (sourceHistoryUndoButton) sourceHistoryUndoButton[addEventListenerMethod](clickEvent, sourceHistoryUndo);
                    if (sourceHistoryRedoButton) sourceHistoryRedoButton[addEventListenerMethod](clickEvent, sourceHistoryRedo);
                    if (sourceHistoryRestoreButton) sourceHistoryRestoreButton[addEventListenerMethod](clickEvent, sourceHistoryRestore);
                    if (sourceHistoryTimelineButton) sourceHistoryTimelineButton[addEventListenerMethod](clickEvent, sourceHistoryOpenTimeline);
                    sourceHistoryStatusUpdate();
                    windowObject[addEventListenerMethod]('beforeunload', function(event) {
                        if (sourceHistoryApi.isDirty()) {
                            event[preventDefaultMethod]();
                            event.returnValue = ''
                        }
                    });
                    runtimeValue131[addEventListenerMethod](focusEvent, runtimeValue148);
                    runtimeValue131[focusEvent]();
                    runtimeValue4[addEventListenerMethod](clickEvent, function() {
                        if (!runtimeValue4[disabledProperty]) {
                            var sourceCandidateOnSave = runtimeValue142();
                            validationDialogOpen(sourceCandidateOnSave, sourceHistory.baseline, function() {
                                runtimeValue147();
                                saveEditorContent(sourceCandidateOnSave)
                            })
                        }
                    });
                    if (pageValidateButton) pageValidateButton[addEventListenerMethod](clickEvent, function() { validationDialogOpen(runtimeValue142(), sourceHistory.baseline, null) })
                },
                saveEditorContent = function(runtimeInput51) {
                    var runtimeValue151 = generateToken();
                    if (saveEditorContent.f) writeCookie(tokenCookieSuffix, runtimeValue151);
                    else runtimeInput51 = '';
                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ad');
                    runtimeValue9[classNameProperty] = 'b';
                    fadeIn(runtimeValue9);
                    runtimeValue4[disabledProperty] = true;
                    resetEditorFocus();
                    ajaxRequest('save=' + windowObject[encodeURIComponentMethod](base64UrlEncode(runtimeInput51)) + tokenParameter + runtimeValue151, function() {
                        var saveEditorContentValue1 = locationObject.href[replaceMethod](locationObject.hash, '')[replaceMethod](runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](0, -1)[lastIndexOfMethod]('/') + 1), '');
                        if (!saveEditorContentValue1[matchMethod](new RegExp('\.php$', 'gi'))) {
                            var saveEditorContentValue2 = documentObject[createElementMethod](iframeTagName);
                            saveEditorContentValue2[setAttributeMethod](sourceAttribute, saveEditorContentValue1);
                            saveEditorContentValue2[styleProperty][displayProperty] = noneValue;
                            saveEditorContentValue2.onload = function() {
                                saveEditorContentValue2.onload = function() {
                                    saveEditorContentValue2.onload = false;
                                    documentObject.body[removeChildMethod](saveEditorContentValue2)
                                };
                                saveEditorContentValue2[contentWindowProperty].location.reload(true)
                            };
                            documentObject.body[appendChildMethod](saveEditorContentValue2)
                        }
                        var saveEditorContentValue3 = runtimeValue1[querySelectorMethod]('#f>ul>li>ul');
                        if (saveEditorContentValue3) saveEditorContentValue3[innerHTMLProperty] = '';
                        runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ae');
                        runtimeValue9[classNameProperty] = 'c';
                        clearSourceDraft();
                        sourceHistoryApi.markSaved();
                        if (runtimeValue7[valueProperty] == runtimeValue7[getAttributeMethod](dataAttributePrefix + 'ac')) logout()
                    }, function() {
                        runtimeValue4[disabledProperty] = false;
                        runtimeValue4[focusEvent]();
                        runtimeValue9[classNameProperty] = 'd';
                        if (this[getResponseHeaderMethod]('X-a')) runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'am');
                        else if (this[getResponseHeaderMethod]('X-b')) runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'bo');
                        else runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'aj')
                    }, function() {
                        runtimeValue4[disabledProperty] = false;
                        runtimeValue4[focusEvent]();
                        if (this.status == 403) runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ak');
                        else runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'al');
                        runtimeValue9[classNameProperty] = 'd'
                    })
                },
                switchEditorMode = function(runtimeInput52) {
                    var runtimeValue152 = documentObject[createElementMethod]('form'),
                        runtimeValue153 = documentObject[createElementMethod](inputEvent);
                    runtimeValue153.name = 'switch';
                    if (documentObject[documentElementProperty].id == 'c') runtimeValue153[valueProperty] = 0;
                    else runtimeValue153[valueProperty] = 1;
                    runtimeValue152[appendChildMethod](runtimeValue153);
                    if (runtimeInput52) {
                        var runtimeValue154 = documentObject[createElementMethod](textareaTagName),
                            runtimeValue155 = documentObject[createElementMethod](inputEvent);
                        runtimeValue154.name = 'source';
                        runtimeValue154[valueProperty] = base64UrlEncode(runtimeInput52);
                        runtimeValue155.name = 'token';
                        runtimeValue155[valueProperty] = generateToken();
                        writeCookie(tokenCookieSuffix, runtimeValue155[valueProperty]);
                        runtimeValue152[appendChildMethod](runtimeValue155);
                        runtimeValue152[appendChildMethod](runtimeValue154)
                    }
                    runtimeValue152.method = 'post';
                    runtimeValue152[styleProperty][displayProperty] = noneValue;
                    documentObject[documentElementProperty][appendChildMethod](runtimeValue152);
                    runtimeValue152.submit()
                },
                logout = function() {
                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ag');
                    runtimeValue9[classNameProperty] = 'b';
                    fadeIn(runtimeValue9);
                    ajaxRequest('logout=1', function() {
                        runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ah');
                        runtimeValue9[classNameProperty] = 'c';
                        var logoutValue1 = locationObject.href[replaceMethod](locationObject.hash, '');
                        if (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ci') * 1) logoutValue1 = logoutValue1[replaceMethod](runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](0, -1)[lastIndexOfMethod]('/') + 1), '');
                        locationObject.href = logoutValue1
                    }, function() {
                        runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'aj');
                        runtimeValue9[classNameProperty] = 'd'
                    }, function() {
                        runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'al');
                        runtimeValue9[classNameProperty] = 'd'
                    })
                },
                resetEditorFocus = function() {
                    var runtimeValue156 = documentObject[createElementMethod](inputEvent);
                    runtimeValue156[styleProperty][marginLeftProperty] = '-2000px';
                    runtimeValue1[appendChildMethod](runtimeValue156);
                    runtimeValue156[focusEvent]();
                    runtimeValue1[removeChildMethod](runtimeValue156)
                },
                handleEditorSelection = function(event) {
                    var runtimeValue157 = event.target;
                    for (var runtimeValue158 = runtimeValue157; runtimeValue158; runtimeValue158 = runtimeValue158[parentNodeProperty])
                        if (runtimeValue158[classNameProperty] == 'A') return;
                    for (var runtimeValue159 = 0, runtimeValue160 = runtimeValue10[lengthProperty]; runtimeValue159 < runtimeValue160; runtimeValue159++) {
                        var runtimeValue161 = runtimeValue10[runtimeValue159][nextElementSiblingProperty];
                        runtimeValue161[styleProperty][displayProperty] = noneValue;
                        runtimeValue161[classNameProperty] = '';
                        runtimeValue10[runtimeValue159][classNameProperty] = 'm'
                    }
                    if (runtimeValue157[classNameProperty] == 'm') {
                        var runtimeValue161 = runtimeValue157[nextElementSiblingProperty];
                        runtimeValue161[styleProperty][displayProperty] = blockValue;
                        runtimeValue161[classNameProperty] = 'A';
                        runtimeValue157[classNameProperty] = ''
                    }
                };
            for (var runtimeValue12 = 0, runtimeValue13 = runtimeValue10[lengthProperty]; runtimeValue12 < runtimeValue13; runtimeValue12++) runtimeValue10[runtimeValue12][classNameProperty] = 'm';
            documentObject[addEventListenerMethod](mouseDownEvent, handleEditorSelection);
            runtimeValue7[addEventListenerMethod](clickEvent, function() {
                if (runtimeValue4[disabledProperty] || runtimeValue7[valueProperty] == runtimeValue7[getAttributeMethod](dataAttributePrefix + 'ac')) logout();
                else {
                    runtimeValue7[valueProperty] = runtimeValue7[getAttributeMethod](dataAttributePrefix + 'ac');
                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'af');
                    runtimeValue9[classNameProperty] = 'o';
                    fadeIn(runtimeValue9);
                    resetEditorFocus()
                }
            });
            var runtimeValue14 = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ce') / 2;
            windowObject[setIntervalMethod](function() {
                ajaxRequest('reload=1', function() {
                    if (runtimeValue9[styleProperty][displayProperty] == blockValue && (runtimeValue9[textContentProperty] == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ah') || runtimeValue9[textContentProperty] == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'al'))) fadeOut(runtimeValue9)
                }, function() {
                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ah') + ' (' + runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ai') + ')';
                    runtimeValue9[classNameProperty] = 'o';
                    fadeIn(runtimeValue9);
                    var runtimeValue162 = runtimeValue9[firstElementChildProperty];
                    if (runtimeValue162) runtimeValue162[addEventListenerMethod](clickEvent, function() {
                        locationObject.reload(true)
                    })
                }, function() {
                    runtimeValue9[textContentProperty] = runtimeValue9[getAttributeMethod](dataAttributePrefix + 'al');
                    runtimeValue9[classNameProperty] = 'o';
                    fadeIn(runtimeValue9)
                })
            }, 1000 * 60 * runtimeValue14);
            runtimeValue7[disabledProperty] = false;
            if (runtimeValue11[getAttributeMethod](dataAttributePrefix + 'cu')) runtimeValue4[disabledProperty] = false;
            if (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ck') == runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cj') || (runtimeValue9[getAttributeMethod](dataAttributePrefix + 'ck')[substringMethod](0, 3) == '127' && runtimeValue9[getAttributeMethod](dataAttributePrefix + 'cj')[substringMethod](0, 3) == '127')) ajaxRequest.m = true;
            if (documentObject[documentElementProperty].id == 'c') initializeSourceEditor();
            else if (documentObject[documentElementProperty].id == 'd') initializeVisualEditor();
        }
    });
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var runtimeValue163 = documentObject[querySelectorMethod]('#e'),
            runtimeValue164 = documentObject[querySelectorMethod]('#f');
        if (runtimeValue163 && runtimeValue164) {
            var runtimeValue165 = runtimeValue163[querySelectorMethod]('div>div+ul+p samp'),
                runtimeValue166 = runtimeValue163[querySelectorMethod]('div>ol+ul>li>a'),
                runtimeValue167 = runtimeValue164[querySelectorMethod]('li>ol'),
                runtimeValue168 = runtimeValue167[firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy'),
                runtimeValue169 = locationObject.pathname[sliceMethod](runtimeValue168[lengthProperty]),
                runtimeValue170 = '',
                fileManagerCurrentDirectory = runtimeValue168,
                fileManagerSearchInput = runtimeValue164[querySelectorMethod]('[data-file-search]'),
                fileManagerReplacementInput = runtimeValue164[querySelectorMethod]('[data-file-replacement]'),
                fileManagerSearchResults = runtimeValue164[querySelectorMethod]('[data-file-search-results]'),
                fileManagerSearchTimer = false,
                fileManagerMediaMode = false,
                fileManagerContentMode = false,
                fileManagerReplacePreviewButton = runtimeValue164[querySelectorMethod]('[data-file-action="replace"]'),
                fileManagerRollbackButton = runtimeValue164[querySelectorMethod]('[data-file-action="rollback"]'),
                fileManagerLastReplacementId = '';
            fileManagerLastReplacementId = uiContracts.storageGet(windowObject, 'sessionStorage', 'myvibehtml:last-replacement') || '';
            if (fileManagerRollbackButton && fileManagerLastReplacementId) fileManagerRollbackButton[hiddenValue] = false;
            if (locationObject.pathname == runtimeValue165[getAttributeMethod](dataAttributePrefix + 'cl') && locationObject[searchMethod][indexOfMethod]('?q=') === 0) {
                runtimeValue169 = runtimeValue168 + locationObject[searchMethod][sliceMethod](3);
                runtimeValue170 = locationObject[searchMethod]
            } else runtimeValue169 = runtimeValue168 + runtimeValue169[sliceMethod](runtimeValue169[indexOfMethod]('/') + 1);
            var revealCurrentPath = function(runtimeInput53) {
                    var runtimeValue173 = runtimeInput53[nextElementSiblingProperty],
                        runtimeValue174 = runtimeInput53[firstElementChildProperty][firstElementChildProperty],
                        runtimeValue175 = runtimeValue174[getAttributeMethod](dataAttributePrefix + 'cy'),
                        runtimeValue176 = function() {
                            var revealCurrentPathValue1 = runtimeValue169[sliceMethod](runtimeValue175[lengthProperty])[indexOfMethod]('/');
                            if (revealCurrentPathValue1 != -1) {
                                runtimeValue174 = runtimeValue174[parentNodeProperty][parentNodeProperty][nextElementSiblingProperty][querySelectorMethod]('[data-cy="' + runtimeValue169[sliceMethod](0, revealCurrentPathValue1 + runtimeValue175[lengthProperty] + 1) + '"]');
                                if (runtimeValue174) revealCurrentPath(runtimeValue174[parentNodeProperty][parentNodeProperty])
                            } else {
                                runtimeValue174 = runtimeValue174[parentNodeProperty][parentNodeProperty][nextElementSiblingProperty][querySelectorMethod]('[href="' + locationObject.pathname + runtimeValue170 + '"]');
                                if (runtimeValue174) runtimeValue174[parentNodeProperty][classNameProperty] = 'n'
                            }
                        };
                    if (runtimeValue173[firstElementChildProperty]) {
                        if (windowObject[getComputedStyleMethod](runtimeValue173)[displayProperty] == noneValue) {
                            runtimeValue174.l = function() {
                                runtimeValue174.l = function() {};
                                runtimeValue176()
                            };
                            windowObject[setTimeoutMethod](function() {
                                expandDirectory.call(runtimeValue174)
                            }, 0)
                        } else runtimeValue176()
                    } else {
                        runtimeValue174.l = function() {
                            runtimeValue174.l = function() {
                                runtimeValue174.l = function() {};
                                runtimeValue176()
                            };
                            expandDirectory.call(runtimeValue174)
                        };
                        openDirectory.call(runtimeValue174)
                    }
                },
                replaceFileListFragment = function(runtimeInput54, runtimeInput55) {
                    var runtimeValue177 = new DOMParser().parseFromString(runtimeInput54, 'text/html'),
                        runtimeValue178 = documentObject.createDocumentFragment(),
                        runtimeValue179 = {LI: 1, OL: 1, UL: 1, A: 1, I: 1, INPUT: 1, SPAN: 1, CODE: 1},
                        runtimeValue180 = {CLASS: 1, 'DATA-CY': 1, 'DATA-CZ': 1, TITLE: 1, ROLE: 1, TABINDEX: 1, 'ARIA-LABEL': 1, TYPE: 1, NAME: 1, VALUE: 1, CHECKED: 1},
                        runtimeValue181 = function(replaceFileListFragmentArgument1) {
                            if (replaceFileListFragmentArgument1.nodeType != 1) return true;
                            if (!runtimeValue179[replaceFileListFragmentArgument1.nodeName]) {
                                if (replaceFileListFragmentArgument1.parentNode) replaceFileListFragmentArgument1.parentNode.removeChild(replaceFileListFragmentArgument1);
                                return false
                            }
                            for (var replaceFileListFragmentValue2 = replaceFileListFragmentArgument1.attributes.length - 1; replaceFileListFragmentValue2 >= 0; replaceFileListFragmentValue2--) if (!runtimeValue180[replaceFileListFragmentArgument1.attributes[replaceFileListFragmentValue2].name.toUpperCase()]) replaceFileListFragmentArgument1.removeAttribute(replaceFileListFragmentArgument1.attributes[replaceFileListFragmentValue2].name);
                            for (var replaceFileListFragmentValue3 = replaceFileListFragmentArgument1.firstChild; replaceFileListFragmentValue3;) {
                                var replaceFileListFragmentValue4 = replaceFileListFragmentValue3.nextSibling;
                                runtimeValue181(replaceFileListFragmentValue3);
                                replaceFileListFragmentValue3 = replaceFileListFragmentValue4
                            }
                            return true
                        };
                    for (var runtimeValue182 = runtimeValue177.body.firstChild; runtimeValue182;) {
                        var runtimeValue183 = runtimeValue182.nextSibling;
                        if (runtimeValue181(runtimeValue182)) runtimeValue178.appendChild(runtimeValue182);
                        runtimeValue182 = runtimeValue183
                    }
                    runtimeInput55.textContent = '';
                    runtimeInput55.appendChild(runtimeValue178)
                },
                fileManagerToken = function() {
                    var fileManagerTokenValue = generateToken();
                    writeCookie(tokenCookieSuffix, fileManagerTokenValue);
                    return tokenParameter + fileManagerTokenValue
                },
                fileManagerStatus = function(fileManagerStatusText, fileManagerStatusClass) {
                    runtimeValue165[textContentProperty] = fileManagerStatusText;
                    runtimeValue165[classNameProperty] = fileManagerStatusClass || 'o';
                    fadeIn(runtimeValue165)
                },
                fileManagerReload = function() { locationObject.reload(true) },
                fileManagerSubmit = function(fileManagerPayload, fileManagerSuccess) {
                    ajaxRequest(fileManagerPayload + fileManagerToken(), fileManagerSuccess, function() { fileManagerStatus(runtimeValue165[getAttributeMethod](dataAttributePrefix + 'aj'), 'd') }, function() {
                        var fileManagerErrorResponse = this && this.responseText || '';
                        fileManagerStatus(fileManagerErrorResponse[indexOfMethod]('replace:stale') === 0 ? runtimeValue164[getAttributeMethod]('data-replace-stale') : runtimeValue165[getAttributeMethod](dataAttributePrefix + 'al'), 'o')
                    })
                },
                fileManagerReplacePreview = function() {
                    var fileManagerReplaceSearch = fileManagerSearchInput ? fileManagerSearchInput[valueProperty] : '',
                        fileManagerReplaceValue = fileManagerReplacementInput ? fileManagerReplacementInput[valueProperty] : '';
                    if (!fileManagerContentMode || !fileManagerReplaceSearch) return;
                    fileManagerSubmit('content_replace_preview=' + windowObject[encodeURIComponentMethod](fileManagerReplaceSearch) + '&replacement=' + windowObject[encodeURIComponentMethod](fileManagerReplaceValue), function(fileManagerReplaceResponse) {
                        if (fileManagerReplaceResponse[indexOfMethod]('replace:preview') !== 0) {
                            fileManagerStatus(runtimeValue164[getAttributeMethod]('data-replace-error'), 'd');
                            return
                        }
                        var fileManagerReplaceLines = fileManagerReplaceResponse[splitMethod]('\n'),
                            fileManagerReplaceSnapshot = '',
                            fileManagerReplaceFiles = 0,
                            fileManagerReplaceMatches = 0,
                            fileManagerReplaceDiffStart = fileManagerReplaceResponse[indexOfMethod]('\ndiff\n'),
                            fileManagerReplaceDiff = fileManagerReplaceDiffStart === -1 ? '' : fileManagerReplaceResponse[sliceMethod](fileManagerReplaceDiffStart + 6);
                        for (var fileManagerReplaceLineIndex = 0; fileManagerReplaceLineIndex < fileManagerReplaceLines[lengthProperty]; fileManagerReplaceLineIndex++) {
                            if (fileManagerReplaceLines[fileManagerReplaceLineIndex][indexOfMethod]('snapshot=') === 0) fileManagerReplaceSnapshot = fileManagerReplaceLines[fileManagerReplaceLineIndex][sliceMethod](9);
                            else if (fileManagerReplaceLines[fileManagerReplaceLineIndex][indexOfMethod]('files=') === 0) fileManagerReplaceFiles = parseInt(fileManagerReplaceLines[fileManagerReplaceLineIndex][sliceMethod](6), 10) || 0;
                            else if (fileManagerReplaceLines[fileManagerReplaceLineIndex][indexOfMethod]('matches=') === 0) fileManagerReplaceMatches = parseInt(fileManagerReplaceLines[fileManagerReplaceLineIndex][sliceMethod](8), 10) || 0
                        }
                        var fileManagerReplaceApply = function() {
                            fileManagerSubmit('content_replace_apply=' + windowObject[encodeURIComponentMethod](fileManagerReplaceSearch) + '&replacement=' + windowObject[encodeURIComponentMethod](fileManagerReplaceValue) + '&snapshot=' + windowObject[encodeURIComponentMethod](fileManagerReplaceSnapshot), function(fileManagerApplyResponse) {
                                var fileManagerReplacementId = /(?:^|\n)id=([a-f0-9]{32})/i.exec(fileManagerApplyResponse);
                                if (!fileManagerReplacementId) {
                                    fileManagerStatus(runtimeValue164[getAttributeMethod]('data-replace-error'), 'd');
                                    return
                                }
                                fileManagerLastReplacementId = fileManagerReplacementId[1];
                                uiContracts.storageSet(windowObject, 'sessionStorage', 'myvibehtml:last-replacement', fileManagerLastReplacementId);
                                if (fileManagerRollbackButton) fileManagerRollbackButton[hiddenValue] = false;
                                fileManagerStatus(runtimeValue164[getAttributeMethod]('data-replace-success'), 'c');
                                searchProject()
                            })
                        };
                        validationDialogOpen('', '', fileManagerReplaceFiles && fileManagerReplaceMatches ? fileManagerReplaceApply : null, {
                            title: runtimeValue164[getAttributeMethod]('data-replace-preview') || 'Replacement preview',
                            summary: fileManagerReplaceFiles ? fileManagerReplaceFiles + ' file(s), ' + fileManagerReplaceMatches + ' match(es)' : runtimeValue164[getAttributeMethod]('data-replace-no-changes') || 'No matches to replace',
                            diff: fileManagerReplaceDiff === 'NO_CHANGES' ? '' : fileManagerReplaceDiff,
                            confirm: runtimeValue164[getAttributeMethod]('data-replace-apply') || 'Apply replacement',
                            noChanges: runtimeValue164[getAttributeMethod]('data-replace-no-changes') || 'No matches to replace'
                        })
                    })
                },
                fileManagerRollback = function() {
                    if (!fileManagerLastReplacementId) return;
                    fileManagerSubmit('content_replace_rollback=' + windowObject[encodeURIComponentMethod](fileManagerLastReplacementId), function() {
                        fileManagerLastReplacementId = '';
                        uiContracts.storageRemove(windowObject, 'sessionStorage', 'myvibehtml:last-replacement');
                        if (fileManagerRollbackButton) fileManagerRollbackButton[hiddenValue] = true;
                        fileManagerStatus(runtimeValue164[getAttributeMethod]('data-replace-rollback-success'), 'c');
                        searchProject()
                    })
                },
                fileManagerCreate = function(fileManagerAction) {
                    var fileManagerName = windowObject.prompt(fileManagerSearchInput ? fileManagerSearchInput[getAttributeMethod](dataAttributePrefix + 'file-prompt') : '', fileManagerAction == 'new_file' ? 'new-page.html' : 'new-folder');
                    if (fileManagerName) fileManagerSubmit(fileManagerAction + '=' + windowObject[encodeURIComponentMethod](fileManagerCurrentDirectory) + '&name=' + windowObject[encodeURIComponentMethod](fileManagerName), fileManagerReload)
                },
                renameFile = function() {
                    var renameFileEntry = this[parentNodeProperty][parentNodeProperty],
                        renameFileLink = renameFileEntry[firstElementChildProperty][firstElementChildProperty],
                        renameFileName = windowObject.prompt(fileManagerSearchInput ? fileManagerSearchInput[getAttributeMethod](dataAttributePrefix + 'file-prompt') : '', renameFileLink[textContentProperty]);
                    if (renameFileName && renameFileName !== renameFileLink[textContentProperty]) fileManagerSubmit('rename=' + windowObject[encodeURIComponentMethod](renameFileLink[getAttributeMethod](dataAttributePrefix + 'cy')) + '&name=' + windowObject[encodeURIComponentMethod](renameFileName), fileManagerReload)
                },
                searchProject = function() {
                    if (fileManagerSearchTimer) windowObject[clearTimeoutMethod](fileManagerSearchTimer);
                    var fileManagerSearchTerm = fileManagerSearchInput ? fileManagerSearchInput[valueProperty] : '';
                    if (!fileManagerSearchTerm) {
                        fileManagerSearchResults[hiddenValue] = true;
                        fileManagerSearchResults[textContentProperty] = '';
                        return
                    }
                    fileManagerSearchTimer = windowObject[setTimeoutMethod](function() {
                        fileManagerSubmit((fileManagerContentMode ? 'content_search=' : 'search=') + windowObject[encodeURIComponentMethod](fileManagerSearchTerm), function(fileManagerSearchResponse) {
                            replaceFileListFragment(fileManagerSearchResponse, fileManagerSearchResults);
                            fileManagerSearchResults[hiddenValue] = false;
                            var fileManagerSearchLinks = fileManagerSearchResults[querySelectorAllMethod]('a');
                            for (var fileManagerSearchIndex = 0; fileManagerSearchIndex < fileManagerSearchLinks[lengthProperty]; fileManagerSearchIndex++) {
                                if (fileManagerMediaMode && !/\.(?:avif|gif|ico|jpe?g|png|svg|webp)$/i.test(fileManagerSearchLinks[fileManagerSearchIndex][getAttributeMethod](dataAttributePrefix + 'cy') || '')) fileManagerSearchLinks[fileManagerSearchIndex][parentNodeProperty][hiddenValue] = true;
                                fileManagerSearchLinks[fileManagerSearchIndex].href = fileManagerSearchLinks[fileManagerSearchIndex][getAttributeMethod](dataAttributePrefix + 'cy');
                                fileManagerSearchLinks[fileManagerSearchIndex][addEventListenerMethod](clickEvent, function() { fileManagerSearchResults[hiddenValue] = true })
                            }
                        })
                    }, 250)
                },
                openDirectory = function() {
                    var runtimeValue184 = this,
                        runtimeValue185 = runtimeValue184[parentNodeProperty],
                        runtimeValue186 = runtimeValue185[parentNodeProperty],
                        runtimeValue187 = runtimeValue184[getAttributeMethod](dataAttributePrefix + 'cy');
                    fileManagerCurrentDirectory = runtimeValue187;
                    runtimeValue185[classNameProperty] = 'b';
                    ajaxRequest('open=' + windowObject[encodeURIComponentMethod](runtimeValue187), function(openDirectoryArgument1) {
                        var openDirectoryValue2 = runtimeValue186[nextElementSiblingProperty];
                        replaceFileListFragment(openDirectoryArgument1, openDirectoryValue2);
                        var openDirectoryValue3 = openDirectoryValue2[querySelectorAllMethod]('li>ol');
                        for (var openDirectoryValue4 = 0, openDirectoryValue5 = openDirectoryValue3[lengthProperty]; openDirectoryValue4 < openDirectoryValue5; openDirectoryValue4++) initializeFileEntry(openDirectoryValue3[openDirectoryValue4]);
                        runtimeValue185[classNameProperty] = '';
                        runtimeValue184.l();
                        var openDirectoryValue6 = this[getResponseHeaderMethod]('X-c');
                        if (openDirectoryValue6) {
                            var openDirectoryValue7 = runtimeValue186[firstElementChildProperty][nextElementSiblingProperty];
                            openDirectoryValue7[innerHTMLProperty] = formatBytes(openDirectoryValue6 * 1);
                            if (openDirectoryValue6[lengthProperty] > 9) openDirectoryValue7[classNameProperty] = 'y'
                        }
                    }, function() {
                        runtimeValue185[classNameProperty] = '';
                        runtimeValue184[addEventListenerMethod](clickEvent, openDirectory);
                        runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'aj');
                        runtimeValue165[classNameProperty] = 'd';
                        fadeIn(runtimeValue165)
                    }, function() {
                        runtimeValue185[classNameProperty] = '';
                        runtimeValue184[addEventListenerMethod](clickEvent, openDirectory);
                        runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'al');
                        runtimeValue165[classNameProperty] = 'd';
                        fadeIn(runtimeValue165)
                    });
                    runtimeValue184[removeEventListenerMethod](clickEvent, openDirectory)
                },
                expandDirectory = function() {
                    var runtimeValue188 = this,
                        runtimeValue189 = runtimeValue188[parentNodeProperty],
                        runtimeValue190 = runtimeValue189[parentNodeProperty][nextElementSiblingProperty],
                        runtimeValue191 = function() {
                            runtimeValue188[addEventListenerMethod](clickEvent, collapseDirectory);
                            runtimeValue189[classNameProperty] = 't';
                            runtimeValue188.l()
                        };
                    if (runtimeValue190[firstElementChildProperty]) slideDown(runtimeValue190, runtimeValue191);
                    else runtimeValue191();
                    runtimeValue188[removeEventListenerMethod](clickEvent, expandDirectory)
                },
                collapseDirectory = function() {
                    var runtimeValue192 = this,
                        runtimeValue193 = runtimeValue192[parentNodeProperty],
                        runtimeValue194 = runtimeValue193[parentNodeProperty][nextElementSiblingProperty],
                        runtimeValue195 = function() {
                            runtimeValue192[addEventListenerMethod](clickEvent, expandDirectory);
                            runtimeValue193[classNameProperty] = ''
                        };
                    if (runtimeValue194[firstElementChildProperty]) slideUp(runtimeValue194, runtimeValue195);
                    else runtimeValue195();
                    runtimeValue192[removeEventListenerMethod](clickEvent, collapseDirectory)
                },
                initializeFileEntry = function(runtimeInput56) {
                    var runtimeValue196 = runtimeInput56[firstElementChildProperty],
                        runtimeValue197 = runtimeValue196[nextElementSiblingProperty],
                        runtimeValue198 = runtimeValue197[nextElementSiblingProperty],
                        runtimeValue199 = runtimeInput56[lastElementChildProperty][firstElementChildProperty],
                        runtimeValue199Rename = runtimeInput56[lastElementChildProperty][lastElementChildProperty],
                        runtimeValue200 = runtimeValue196[firstElementChildProperty],
                        runtimeValue201 = runtimeValue200[getAttributeMethod](dataAttributePrefix + 'cy'),
                        runtimeValue202 = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'cl');
                    renderFileSize(runtimeValue197);
                    renderFileDate(runtimeValue198);
                    if (runtimeInput56[classNameProperty] == 's' || runtimeInput56[classNameProperty] == 'u') {
                        runtimeValue200.l = function() {
                            runtimeValue200.l = function() {};
                            expandDirectory.call(runtimeValue200)
                        };
                        runtimeValue200[addEventListenerMethod](clickEvent, openDirectory);
                        if (runtimeValue202 && runtimeValue201[sliceMethod](0, runtimeValue202[lengthProperty]) == runtimeValue202) {
                            if (runtimeInput56[classNameProperty] == 'u' && runtimeInput56[nextElementSiblingProperty][firstElementChildProperty]) runtimeValue199[addEventListenerMethod](clickEvent, recoverBackup);
                            else runtimeValue199[classNameProperty] = 'n'
                        } else runtimeValue199[addEventListenerMethod](clickEvent, queueUploads)
                    } else {
                        var runtimeValue203 = runtimeInput56[parentNodeProperty][parentNodeProperty][previousElementSiblingProperty][firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy');
                        if (runtimeValue202 && runtimeValue203 && runtimeValue203[sliceMethod](0, runtimeValue202[lengthProperty]) == runtimeValue202) {
                            runtimeValue196[classNameProperty] = 'q';
                            runtimeValue199[classNameProperty] = 'n'
                        } else {
                            if (runtimeValue202 && runtimeValue201[sliceMethod](0, runtimeValue202[lengthProperty]) !== runtimeValue202) runtimeValue200[setAttributeMethod]('target', '_blank');
                            runtimeValue200.href = runtimeValue201;
                            runtimeValue199[addEventListenerMethod](clickEvent, deleteFile)
                        }
                    }
                    if (runtimeInput56[classNameProperty] != 'u' && runtimeValue199Rename && runtimeValue199Rename != runtimeValue199) runtimeValue199Rename[addEventListenerMethod](clickEvent, renameFile)
                },
                renderFileSize = function(runtimeInput57) {
                    var runtimeValue204 = runtimeInput57[getAttributeMethod](dataAttributePrefix + 'cz');
                    if (runtimeValue204) runtimeInput57[innerHTMLProperty] = formatBytes(runtimeValue204 * 1);
                    if (runtimeValue204[lengthProperty] > 9) runtimeInput57[classNameProperty] = 'y'
                },
                renderFileDate = function(runtimeInput58) {
                    var runtimeValue205 = runtimeInput58[innerHTMLProperty] * 1000,
                        runtimeValue206 = new Date(runtimeValue205),
                        runtimeValue207 = new Date().getTime(),
                        runtimeValue208 = 24 * 60 * 60 * 1000,
                        runtimeValue209 = runtimeValue208 * 7;
                    if ((runtimeValue207 - runtimeValue205) < runtimeValue208) runtimeInput58[classNameProperty] = 'w';
                    else if ((runtimeValue207 - runtimeValue205) < runtimeValue209) runtimeInput58[classNameProperty] = 'x';
                    runtimeInput58[innerHTMLProperty] = padDatePart(runtimeValue206.getDate()) + '.' + padDatePart(runtimeValue206.getMonth() + 1) + '.' + ((runtimeValue206.getFullYear() + '')[sliceMethod](2)) + ' ' + padDatePart(runtimeValue206.getHours()) + ':' + padDatePart(runtimeValue206.getMinutes())
                },
                padDatePart = function(runtimeInput59) {
                    return (runtimeInput59 < 10) ? '0' + runtimeInput59 : runtimeInput59
                },
                queueUploads = function() {
                    if (windowObject.FormData) {
                        var runtimeValue210 = documentObject[createElementMethod]('form'),
                            runtimeValue211 = documentObject[createElementMethod](inputEvent);
                        runtimeValue210[styleProperty][positionProperty] = absoluteValue;
                        runtimeValue210[styleProperty][marginLeftProperty] = '-9999px';
                        runtimeValue211.type = 'file';
                        runtimeValue211.name = 'file[]';
                        runtimeValue211.multiple = true;
                        runtimeValue210[appendChildMethod](runtimeValue211);
                        this[parentNodeProperty][appendChildMethod](runtimeValue210);
                        runtimeValue211[addEventListenerMethod](changeEvent, function() {
                            var queueUploadsValue1 = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bz') * 1,
                                queueUploadsValue2 = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bA') * 1,
                                queueUploadsValue3 = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'cc') * 1,
                                queueUploadsValue4 = runtimeValue211.files,
                                queueUploadsValue5 = queueUploadsValue4[lengthProperty];
                            if (queueUploadsValue5 <= queueUploadsValue3) {
                                runtimeValue210.size = 0;
                                for (var queueUploadsValue6 = 0; queueUploadsValue6 < queueUploadsValue5; queueUploadsValue6++) runtimeValue210.size += queueUploadsValue4[queueUploadsValue6]['size'];
                                if (runtimeValue210.size < queueUploadsValue1 && runtimeValue210.size < queueUploadsValue2) {
                                    if (sha1(locationObject.hostname[replaceMethod]('www.', ''))) {
                                        if (!uploadFile.s) {
                                            uploadFile.s = [];
                                            uploadFile.w = runtimeValue210.size;
                                            uploadFile.v = 0
                                        } else uploadFile.w += runtimeValue210.size;
                                        uploadFile.s.push(runtimeValue210);
                                        if (!uploadFile.t) {
                                            uploadFile.t = true;
                                            processUploadQueue(0)
                                        }
                                    }
                                } else {
                                    if (queueUploadsValue1 > queueUploadsValue2) runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(queueUploadsValue2) + ')';
                                    else runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(queueUploadsValue1) + ')';
                                    runtimeValue165[classNameProperty] = 'o';
                                    fadeIn(runtimeValue165)
                                }
                            } else {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bg') + ' (' + queueUploadsValue3 + ')';
                                runtimeValue165[classNameProperty] = 'o';
                                fadeIn(runtimeValue165)
                            }
                        });
                        runtimeValue211[focusEvent]();
                        runtimeValue211[clickEvent]()
                    } else {
                        runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'an');
                        runtimeValue165[classNameProperty] = 'o';
                        fadeIn(runtimeValue165)
                    }
                },
                uploadFile = function(runtimeInput60) {
                    var runtimeValue212 = new FormData(runtimeInput60),
                        runtimeValue213 = generateToken(),
                        runtimeValue214 = runtimeInput60[parentNodeProperty][parentNodeProperty][firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy'),
                        runtimeValue215 = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bc');
                    runtimeValue212.append('upload', windowObject[encodeURIComponentMethod](runtimeValue214));
                    runtimeValue212.append('token', runtimeValue213);
                    writeCookie(tokenCookieSuffix, runtimeValue213);
                    runtimeValue165[textContentProperty] = runtimeValue215 + ' (0%)';
                    runtimeValue165[classNameProperty] = 'b';
                    fadeIn(runtimeValue165);
                    ajaxRequest(runtimeValue212, function(uploadFileArgument1) {
                        var uploadFileValue2 = runtimeInput60[parentNodeProperty][parentNodeProperty],
                            uploadFileValue3 = uploadFileValue2[nextElementSiblingProperty],
                            uploadFileValue4 = uploadFileValue2[firstElementChildProperty],
                            uploadFileValue5 = uploadFileValue4[nextElementSiblingProperty],
                            uploadFileValue6 = documentObject[createElementMethod]('div');
                        uploadFileValue6[innerHTMLProperty] = uploadFileArgument1;
                        if (uploadFileValue6[firstElementChildProperty] && uploadFileValue6[firstElementChildProperty][tagNameProperty][toLowerCaseMethod]() == 'li') {
                            if (uploadFileValue3[firstElementChildProperty]) {
                                var uploadFileValue7 = false;
                                while (uploadFileValue7 = uploadFileValue6[firstElementChildProperty]) {
                                    var uploadFileValue8 = uploadFileValue7[querySelectorMethod]('a'),
                                        uploadFileValue9 = uploadFileValue3[querySelectorAllMethod]('a');
                                    if (uploadFileValue8 && uploadFileValue9[lengthProperty]) {
                                        var uploadFileValue10 = uploadFileValue8[getAttributeMethod](dataAttributePrefix + 'cy');
                                        for (var uploadFileValue11 = 0, uploadFileValue12 = uploadFileValue9[lengthProperty]; uploadFileValue11 < uploadFileValue12; uploadFileValue11++)
                                            if (uploadFileValue9[uploadFileValue11][getAttributeMethod](dataAttributePrefix + 'cy') == uploadFileValue10) uploadFileValue9[uploadFileValue11][parentNodeProperty][parentNodeProperty][styleProperty][displayProperty] = noneValue
                                    }
                                    uploadFileValue3[appendChildMethod](uploadFileValue7);
                                    initializeFileEntry(uploadFileValue7[firstElementChildProperty])
                                }
                                fadeIn(uploadFileValue3)
                            } else {
                                var uploadFileValue8 = uploadFileValue4[firstElementChildProperty];
                                uploadFileValue8.l = function() {
                                    uploadFileValue8.l = function() {
                                        uploadFileValue8.l = function() {}
                                    };
                                    expandDirectory.call(uploadFileValue8)
                                };
                                openDirectory.call(uploadFileValue8);
                                uploadFileValue4[classNameProperty] = ''
                            }
                            var uploadFileValue13 = this[getResponseHeaderMethod]('X-c');
                            if (uploadFileValue13) {
                                uploadFileValue5[innerHTMLProperty] = formatBytes(uploadFileValue13 * 1);
                                if (uploadFileValue13[lengthProperty] > 9) uploadFileValue5[classNameProperty] = 'y'
                            }
                            uploadFile.v += runtimeInput60.size;
                            if (this[getResponseHeaderMethod]('X-d')) processUploadQueue(3);
                            else if (this[getResponseHeaderMethod]('X-b')) processUploadQueue(4);
                            else if (this[getResponseHeaderMethod]('X-e')) processUploadQueue(2);
                            else processUploadQueue(0)
                        } else {
                            if (this[getResponseHeaderMethod]('X-d')) processUploadQueue(3);
                            else if (this[getResponseHeaderMethod]('X-b')) processUploadQueue(4);
                            else processUploadQueue(2)
                        }
                    }, function() {
                        processUploadQueue(2)
                    }, function() {
                        processUploadQueue(1)
                    }, function(uploadFileArgument2, uploadFileArgument3) {
                        if (runtimeValue165[textContentProperty][indexOfMethod]('(') != -1) runtimeValue165[textContentProperty] = runtimeValue215 + ' (' + ((uploadFileArgument2 + uploadFile.v) * 100 / uploadFile.w)[toFixedMethod](1) + '%)'
                    })
                },
                processUploadQueue = function(runtimeInput61) {
                    if (typeof uploadFile.u == 'undefined' || uploadFile.u < runtimeInput61) uploadFile.u = runtimeInput61;
                    if (uploadFile.s && uploadFile.s[lengthProperty]) uploadFile(uploadFile.s.shift());
                    else {
                        switch (uploadFile.u) {
                            case 0: {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bd');
                                runtimeValue165[classNameProperty] = 'c';
                                break
                            }
                            case 1: {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'al');
                                runtimeValue165[classNameProperty] = 'd';
                                break
                            }
                            case 2: {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'be');
                                runtimeValue165[classNameProperty] = 'd';
                                break
                            }
                            case 3: {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bf');
                                runtimeValue165[classNameProperty] = 'd';
                                break
                            }
                            case 4: {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bo');
                                runtimeValue165[classNameProperty] = 'd';
                                break
                            }
                        }
                        delete uploadFile.u;
                        delete uploadFile.s;
                        delete uploadFile.w;
                        delete uploadFile.v;
                        delete uploadFile.t
                    }
                },
                deleteFile = function() {
                    var runtimeValue216 = this[nextElementSiblingProperty],
                        runtimeValue217 = runtimeValue216[nextElementSiblingProperty],
                        runtimeValue218 = this[parentNodeProperty][parentNodeProperty],
                        runtimeValue219 = function() {
                            var deleteFileValue1 = runtimeValue218[parentNodeProperty],
                                deleteFileValue2 = runtimeValue218[firstElementChildProperty][firstElementChildProperty],
                                deleteFileValue3 = deleteFileValue2[getAttributeMethod](dataAttributePrefix + 'cy'),
                                deleteFileValue4 = generateToken();
                            writeCookie(tokenCookieSuffix, deleteFileValue4);
                            runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bi');
                            runtimeValue165[classNameProperty] = 'b';
                            fadeIn(runtimeValue165);
                            deleteFileValue1[styleProperty][displayProperty] = noneValue;
                            ajaxRequest('remove=' + windowObject[encodeURIComponentMethod](deleteFileValue3) + tokenParameter + deleteFileValue4, function() {
                                var lValue1 = deleteFileValue1[parentNodeProperty],
                                    lValue2 = lValue1[previousElementSiblingProperty][firstElementChildProperty],
                                    lValue3 = lValue2[nextElementSiblingProperty];
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bj');
                                runtimeValue165[classNameProperty] = 'c';
                                deleteFileValue1[parentNodeProperty][removeChildMethod](deleteFileValue1);
                                if (deleteFileValue2[parentNodeProperty][classNameProperty] == 'n') locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '');
                                var lValue4 = this[getResponseHeaderMethod]('X-c');
                                if (lValue4) {
                                    lValue3[innerHTMLProperty] = formatBytes(lValue4 * 1);
                                    if (lValue4[lengthProperty] > 9) lValue3[classNameProperty] = 'y'
                                }
                            }, function() {
                                runtimeValue165[classNameProperty] = 'd';
                                deleteFileValue1[styleProperty][displayProperty] = blockValue;
                                if (this[getResponseHeaderMethod]('X-d')) {
                                    runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'aj');
                                    runtimeValue218[classNameProperty] = runtimeValue218[classNameProperty][replaceMethod](' z', '')
                                } else if (this[getResponseHeaderMethod]('X-b')) {
                                    runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bo');
                                    runtimeValue218[classNameProperty] = runtimeValue218[classNameProperty][replaceMethod](' z', '')
                                } else runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bk')
                            }, function() {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'al');
                                runtimeValue165[classNameProperty] = 'o';
                                deleteFileValue1[styleProperty][displayProperty] = blockValue
                            })
                        };
                    runtimeValue218[classNameProperty] += ' z';
                    runtimeValue217[addEventListenerMethod](clickEvent, function() {
                        runtimeValue216[removeEventListenerMethod](clickEvent, runtimeValue219);
                        runtimeValue218[classNameProperty] = runtimeValue218[classNameProperty][replaceMethod](' z', '')
                    });
                    runtimeValue216[addEventListenerMethod](clickEvent, runtimeValue219)
                },
                recoverBackup = function() {
                    var runtimeValue220 = this[nextElementSiblingProperty],
                        runtimeValue221 = runtimeValue220[nextElementSiblingProperty],
                        runtimeValue222 = this[parentNodeProperty][parentNodeProperty],
                        runtimeValue223 = function() {
                            var recoverBackupValue1 = runtimeValue222[nextElementSiblingProperty][lastElementChildProperty][firstElementChildProperty][firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy'),
                                recoverBackupValue2 = generateToken();
                            writeCookie(tokenCookieSuffix, recoverBackupValue2);
                            runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bl');
                            runtimeValue165[classNameProperty] = 'b';
                            fadeIn(runtimeValue165);
                            ajaxRequest('recovery=' + windowObject[encodeURIComponentMethod](recoverBackupValue1) + tokenParameter + recoverBackupValue2, function() {
                                writeCookie(recoveryCookieSuffix, 1);
                                locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '')
                            }, function() {
                                runtimeValue165[classNameProperty] = 'd';
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bn')
                            }, function() {
                                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'al');
                                runtimeValue165[classNameProperty] = 'o'
                            })
                        };
                    runtimeValue222[classNameProperty] += ' z';
                    runtimeValue221[addEventListenerMethod](clickEvent, function() {
                        runtimeValue220[removeEventListenerMethod](clickEvent, runtimeValue223);
                        runtimeValue222[classNameProperty] = runtimeValue222[classNameProperty][replaceMethod](' z', '')
                    });
                    runtimeValue220[addEventListenerMethod](clickEvent, runtimeValue223)
                };
            if (fileManagerSearchInput) fileManagerSearchInput[addEventListenerMethod](inputEvent, function() {
                if (!fileManagerContentMode) {
                    fileManagerMediaMode = false;
                    if (fileManagerMediaButton) fileManagerMediaButton.setAttribute('aria-pressed', 'false')
                }
                searchProject()
            });
            var fileManagerCreateFileButton = runtimeValue164[querySelectorMethod]('[data-file-action="new-file"]'),
                fileManagerCreateFolderButton = runtimeValue164[querySelectorMethod]('[data-file-action="new-folder"]'),
                fileManagerMediaButton = runtimeValue164[querySelectorMethod]('[data-file-action="media"]'),
                fileManagerContentButton = runtimeValue164[querySelectorMethod]('[data-file-action="content"]');
            if (fileManagerCreateFileButton) fileManagerCreateFileButton[addEventListenerMethod](clickEvent, function() { fileManagerCreate('new_file') });
            if (fileManagerCreateFolderButton) fileManagerCreateFolderButton[addEventListenerMethod](clickEvent, function() { fileManagerCreate('new_folder') });
            if (fileManagerMediaButton) fileManagerMediaButton[addEventListenerMethod](clickEvent, function() {
                fileManagerContentMode = false;
                fileManagerMediaMode = true;
                fileManagerMediaButton.setAttribute('aria-pressed', 'true');
                if (fileManagerContentButton) fileManagerContentButton.setAttribute('aria-pressed', 'false');
                if (fileManagerReplacementInput) fileManagerReplacementInput[hiddenValue] = true;
                if (fileManagerReplacePreviewButton) fileManagerReplacePreviewButton[hiddenValue] = true;
                if (fileManagerSearchInput) fileManagerSearchInput[valueProperty] = '.';
                searchProject()
            });
            if (fileManagerContentButton) fileManagerContentButton[addEventListenerMethod](clickEvent, function() {
                fileManagerContentMode = !fileManagerContentMode;
                fileManagerMediaMode = false;
                fileManagerContentButton.setAttribute('aria-pressed', fileManagerContentMode ? 'true' : 'false');
                if (fileManagerMediaButton) fileManagerMediaButton.setAttribute('aria-pressed', 'false');
                if (fileManagerReplacementInput) fileManagerReplacementInput[hiddenValue] = !fileManagerContentMode;
                if (fileManagerReplacePreviewButton) fileManagerReplacePreviewButton[hiddenValue] = !fileManagerContentMode;
                if (fileManagerSearchInput) {
                    fileManagerSearchInput[valueProperty] = '';
                    fileManagerSearchInput.placeholder = fileManagerContentMode ? fileManagerSearchInput[getAttributeMethod](dataAttributePrefix + 'content-prompt') : fileManagerSearchInput[getAttributeMethod](dataAttributePrefix + 'search-prompt');
                    fileManagerSearchInput[focusEvent]()
                }
                fileManagerSearchResults[hiddenValue] = true;
                fileManagerSearchResults[textContentProperty] = ''
            });
            if (fileManagerReplacePreviewButton) fileManagerReplacePreviewButton[addEventListenerMethod](clickEvent, fileManagerReplacePreview);
            if (fileManagerRollbackButton) fileManagerRollbackButton[addEventListenerMethod](clickEvent, fileManagerRollback);
            initializeFileEntry(runtimeValue167);
            runtimeValue166[addEventListenerMethod](mouseDownEvent, function() {
                if (this[nextElementSiblingProperty][styleProperty][displayProperty] != blockValue) revealCurrentPath(runtimeValue167)
            });
            var runtimeValue171 = readCookie(recoveryCookieSuffix);
            if (runtimeValue171) {
                removeCookie(recoveryCookieSuffix);
                runtimeValue165[textContentProperty] = runtimeValue165[getAttributeMethod](dataAttributePrefix + 'bm');
                runtimeValue165[classNameProperty] = 'c';
                fadeIn(runtimeValue165);
                var runtimeValue172 = runtimeValue166[nextElementSiblingProperty];
                runtimeValue172[styleProperty][displayProperty] = blockValue;
                runtimeValue172[classNameProperty] = 'A';
                runtimeValue166[classNameProperty] = '';
                revealCurrentPath(runtimeValue167)
            }
        }
    });
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var runtimeValue224 = documentObject[querySelectorMethod]('#e'),
            runtimeValue225 = documentObject[querySelectorMethod]('#g');
        if (runtimeValue224 && runtimeValue225) {
            var runtimeValue226 = runtimeValue224[querySelectorMethod]('div>ol+ul>li+li>a'),
                runtimeValue227 = runtimeValue225[querySelectorMethod]('dd a'),
                runtimeValue228 = runtimeValue225[querySelectorAllMethod]('fieldset'),
                runtimeValue229 = runtimeValue225[querySelectorAllMethod]('legend'),
                runtimeValue230 = runtimeValue225[querySelectorMethod]('input[type="password"]'),
                runtimeValue231 = runtimeValue225[querySelectorAllMethod]('dd input[type="text"]'),
                runtimeValue232 = runtimeValue225[querySelectorAllMethod]('input[type="radio"]'),
                runtimeValue233 = runtimeValue225[querySelectorAllMethod]('input[type="checkbox"]'),
                runtimeValue234 = runtimeValue225[querySelectorMethod]('fieldset+p input[type="button"]'),
                runtimeValue235 = runtimeValue225[querySelectorMethod]('p a'),
                runtimeValue236 = runtimeValue224[querySelectorMethod]('div>div+ul+p samp'),
                togglePasswordField = function() {
                    if (this[classNameProperty]) {
                        this[previousElementSiblingProperty].type = 'password';
                        this[classNameProperty] = '';
                        this.title = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'bx')
                    } else {
                        this[previousElementSiblingProperty].type = 'text';
                        this[classNameProperty] = 'e';
                        this.title = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'by')
                    }
                },
                validateSettings = function() {
                    var runtimeValue244 = false,
                        runtimeValue245 = false,
                        runtimeValue246 = false;
                    if (runtimeValue230[valueProperty][lengthProperty] > 0 && runtimeValue230[valueProperty] != runtimeValue230.b) runtimeValue245 = true;
                    for (var runtimeValue247 = 0, runtimeValue248 = runtimeValue231[lengthProperty]; runtimeValue247 < runtimeValue248; runtimeValue247++) {
                        var runtimeValue249 = runtimeValue231[runtimeValue247][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (runtimeValue249 && runtimeValue249 != runtimeValue231[runtimeValue247][valueProperty]) runtimeValue244 = true;
                        if (runtimeValue231[runtimeValue247][valueProperty] != runtimeValue231[runtimeValue247].b) runtimeValue245 = true;
                        var runtimeValue250 = runtimeValue231[runtimeValue247][parentNodeProperty][previousElementSiblingProperty];
                        if (runtimeValue247 == 5) {
                            if (!runtimeValue231[runtimeValue247][valueProperty][matchMethod]('^[-a-z0-9._/]{1,30}$')) {
                                runtimeValue250[classNameProperty] = 'd';
                                runtimeValue246 = true
                            } else runtimeValue250[classNameProperty] = ''
                        } else if (runtimeValue247 == 6) {
                            if (!runtimeValue231[runtimeValue247][valueProperty][matchMethod]('^[0-9]{0,2}$')) {
                                runtimeValue250[classNameProperty] = 'd';
                                runtimeValue246 = true
                            } else runtimeValue250[classNameProperty] = ''
                        } else {
                            if (!runtimeValue231[runtimeValue247][valueProperty][matchMethod]('^[1-9][0-9]{0,6}$')) {
                                runtimeValue250[classNameProperty] = 'd';
                                runtimeValue246 = true
                            } else runtimeValue250[classNameProperty] = ''
                        }
                    }
                    for (var runtimeValue247 = 0, runtimeValue248 = runtimeValue232[lengthProperty]; runtimeValue247 < runtimeValue248; runtimeValue247++)
                        if (runtimeValue232[runtimeValue247][checkedProperty] != runtimeValue232[runtimeValue247].b) runtimeValue245 = true;
                    for (var runtimeValue247 = 0, runtimeValue248 = runtimeValue233[lengthProperty]; runtimeValue247 < runtimeValue248; runtimeValue247++) {
                        var runtimeValue249 = runtimeValue233[runtimeValue247][parentNodeProperty][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (runtimeValue249 && !!(runtimeValue249 * 1) != runtimeValue233[runtimeValue247][checkedProperty]) runtimeValue244 = true;
                        if (runtimeValue233[runtimeValue247][checkedProperty] != runtimeValue233[runtimeValue247].b) runtimeValue245 = true
                    }
                    if (runtimeValue245 && !runtimeValue246) runtimeValue234[disabledProperty] = false;
                    else runtimeValue234[disabledProperty] = true;
                    if (runtimeValue244 && runtimeValue235[classNameProperty] != 'l') {
                        runtimeValue235[addEventListenerMethod](clickEvent, restoreSettingsDefaults);
                        runtimeValue235[classNameProperty] = 'l'
                    } else if (!runtimeValue244 && runtimeValue235[classNameProperty] == 'l') {
                        runtimeValue235[removeEventListenerMethod](clickEvent, restoreSettingsDefaults);
                        runtimeValue235[classNameProperty] = ''
                    }
                },
                handleSettingsKeydown = function(event) {
                    if (event[keyCodeProperty] == 13) saveSettings()
                },
                saveSettings = function() {
                    if (!runtimeValue234[disabledProperty]) {
                        blurSettingsControls();
                        runtimeValue234[disabledProperty] = true;
                        runtimeValue230.c = runtimeValue230[valueProperty];
                        runtimeValue230[removeEventListenerMethod](inputEvent, validateSettings);
                        for (var runtimeValue251 = 0, runtimeValue252 = runtimeValue231[lengthProperty]; runtimeValue251 < runtimeValue252; runtimeValue251++) {
                            runtimeValue231[runtimeValue251].c = runtimeValue231[runtimeValue251][valueProperty];
                            runtimeValue231[runtimeValue251][removeEventListenerMethod](inputEvent, validateSettings)
                        }
                        for (var runtimeValue251 = 0, runtimeValue252 = runtimeValue232[lengthProperty]; runtimeValue251 < runtimeValue252; runtimeValue251++) {
                            runtimeValue232[runtimeValue251].c = runtimeValue232[runtimeValue251][checkedProperty];
                            runtimeValue232[runtimeValue251][removeEventListenerMethod](changeEvent, validateSettings)
                        }
                        for (var runtimeValue251 = 0, runtimeValue252 = runtimeValue233[lengthProperty]; runtimeValue251 < runtimeValue252; runtimeValue251++) {
                            runtimeValue233[runtimeValue251].c = runtimeValue233[runtimeValue251][checkedProperty];
                            runtimeValue233[runtimeValue251][removeEventListenerMethod](changeEvent, validateSettings)
                        }
                        if (runtimeValue230[valueProperty]) {
                            runtimeValue236[textContentProperty] = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'az');
                            runtimeValue236[classNameProperty] = 'b';
                            fadeIn(runtimeValue236);
                            submitSettings(runtimeValue230[valueProperty])
                        } else submitSettings('')
                    }
                },
                toggleSettingsSection = function(event) {
                    var runtimeValue253 = this[nextElementSiblingProperty];
                    if (runtimeValue253) {
                        var runtimeValue254 = this[parentNodeProperty];
                        if (runtimeValue254[classNameProperty] == 't') {
                            if (!runtimeValue254[querySelectorMethod]('.d')) {
                                hidePanel(runtimeValue253, function() {
                                    runtimeValue254[classNameProperty] = ''
                                })
                            }
                        } else {
                            runtimeValue254[classNameProperty] = 't';
                            showPanel(runtimeValue253);
                            if (event) {
                                for (var runtimeValue255 = 0, runtimeValue256 = runtimeValue229[lengthProperty]; runtimeValue255 < runtimeValue256; runtimeValue255++) {
                                    if (runtimeValue229[runtimeValue255] == this) {
                                        writeCookie(settingsCookieSuffix, runtimeValue255, 60 * 24 * 90, runtimeValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                                        break
                                    }
                                }
                            }
                        }
                    }
                },
                blurSettingsControls = function() {
                    var runtimeValue257 = documentObject[createElementMethod](inputEvent);
                    runtimeValue257[styleProperty][marginLeftProperty] = '-2000px';
                    runtimeValue224[appendChildMethod](runtimeValue257);
                    runtimeValue257[focusEvent]();
                    runtimeValue224[removeChildMethod](runtimeValue257)
                },
                restoreSettingsDefaults = function() {
                    for (var runtimeValue261 = 0, runtimeValue262 = runtimeValue231[lengthProperty]; runtimeValue261 < runtimeValue262; runtimeValue261++) {
                        var runtimeValue263 = runtimeValue231[runtimeValue261][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (runtimeValue263 && runtimeValue263 != runtimeValue231[runtimeValue261][valueProperty]) runtimeValue231[runtimeValue261][valueProperty] = runtimeValue263
                    }
                    for (var runtimeValue261 = 0, runtimeValue262 = runtimeValue232[lengthProperty]; runtimeValue261 < runtimeValue262; runtimeValue261++) {
                        var runtimeValue263 = runtimeValue232[runtimeValue261][parentNodeProperty][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (runtimeValue263 && !!(runtimeValue263 * 1) != runtimeValue232[runtimeValue261][checkedProperty]) runtimeValue232[runtimeValue261][checkedProperty] = !!(runtimeValue263 * 1)
                    }
                    for (var runtimeValue261 = 0, runtimeValue262 = runtimeValue233[lengthProperty]; runtimeValue261 < runtimeValue262; runtimeValue261++) {
                        var runtimeValue263 = runtimeValue233[runtimeValue261][parentNodeProperty][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (runtimeValue263 && !!(runtimeValue263 * 1) != runtimeValue233[runtimeValue261][checkedProperty]) runtimeValue233[runtimeValue261][checkedProperty] = !!(runtimeValue263 * 1)
                    }
                    runtimeValue235[removeEventListenerMethod](clickEvent, restoreSettingsDefaults);
                    runtimeValue235[classNameProperty] = '';
                    validateSettings()
                },
                submitSettings = function(runtimeInput66) {
                    var runtimeValue264 = false;
                    runtimeValue236[textContentProperty] = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'ad');
                    runtimeValue236[classNameProperty] = 'b';
                    fadeIn(runtimeValue236);
                    var runtimeValue265 = generateToken();
                    writeCookie(tokenCookieSuffix, runtimeValue265);
                    var runtimeValue266 = 'token=' + runtimeValue265 + settingsParameter + 'password]=' + windowObject[encodeURIComponentMethod](runtimeInput66) + settingsParameter + 'auth_error_limit]=' + runtimeValue231[0][valueProperty] + settingsParameter + 'auth_lockout_duration]=' + runtimeValue231[1][valueProperty] + settingsParameter + 'auth_session_reset]=' + runtimeValue231[2][valueProperty] + settingsParameter + 'code_redraw_delay]=' + runtimeValue231[3][valueProperty] + settingsParameter + 'code_undo_limit]=' + runtimeValue231[4][valueProperty] + settingsParameter + 'default_file]=' + runtimeValue231[5][valueProperty] + settingsParameter + 'recovery_points]=' + runtimeValue231[6][valueProperty] + settingsParameter + 'logout_to_site]=' + (runtimeValue233[0][checkedProperty] * 1) + settingsParameter + 'site_scripts]=' + (runtimeValue233[1][checkedProperty] * 1) + settingsParameter + 'site_styles]=' + (runtimeValue233[2][checkedProperty] * 1) + settingsParameter + 'link_replacing]=' + (runtimeValue233[3][checkedProperty] * 1) + settingsParameter + 'name_correction]=' + (runtimeValue233[4][checkedProperty] * 1) + settingsParameter + 'image_rewriting]=' + (runtimeValue233[5][checkedProperty] * 1) + settingsParameter + 'code_highlighting]=' + (runtimeValue233[6][checkedProperty] * 1) + settingsParameter + 'folder_size]=' + (runtimeValue233[7][checkedProperty] * 1);
                    for (var runtimeValue267 = 0, runtimeValue268 = runtimeValue232[lengthProperty]; runtimeValue267 < runtimeValue268; runtimeValue267++) {
                        if (runtimeValue232[runtimeValue267][checkedProperty]) {
                            if (runtimeValue232[runtimeValue267].b != runtimeValue232[runtimeValue267][checkedProperty]) runtimeValue264 = true;
                            runtimeValue266 += settingsParameter + 'lang]=' + runtimeValue232[runtimeValue267][valueProperty]
                        }
                    }
                    if ((runtimeValue233[1].b != runtimeValue233[1][checkedProperty] || runtimeValue233[2].b != runtimeValue233[2][checkedProperty]) && documentObject[documentElementProperty].id == 'd') runtimeValue264 = true;
                    else if (runtimeValue233[6].b != runtimeValue233[6][checkedProperty] && documentObject[documentElementProperty].id == 'c') runtimeValue264 = true;
                    ajaxRequest(runtimeValue266, function() {
                        if (runtimeValue264) {
                            var submitValue1 = '';
                            for (var submitValue2 = 0, submitValue3 = runtimeValue228[lengthProperty]; submitValue2 < submitValue3; submitValue2++)
                                if (runtimeValue228[submitValue2][classNameProperty] == 't') submitValue1 += submitValue2;
                            writeCookie(stateCookieSuffix, submitValue1, false, runtimeValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                            locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '')
                        } else {
                            applySavedSettings();
                            runtimeValue236[textContentProperty] = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'ae');
                            runtimeValue236[classNameProperty] = 'c'
                        }
                    }, function() {
                        restoreSettingsUi();
                        runtimeValue236[textContentProperty] = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'aj')
                    }, function() {
                        restoreSettingsUi();
                        runtimeValue236[textContentProperty] = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'al')
                    })
                },
                applySavedSettings = function() {
                    runtimeValue230.b = runtimeValue230.c;
                    runtimeValue230[addEventListenerMethod](inputEvent, validateSettings);
                    for (var runtimeValue269 = 0, runtimeValue270 = runtimeValue231[lengthProperty] - 1; runtimeValue269 < runtimeValue270; runtimeValue269++) {
                        runtimeValue231[runtimeValue269].b = runtimeValue231[runtimeValue269].c;
                        runtimeValue231[runtimeValue269][addEventListenerMethod](inputEvent, validateSettings)
                    }
                    for (var runtimeValue269 = 0, runtimeValue270 = runtimeValue232[lengthProperty]; runtimeValue269 < runtimeValue270; runtimeValue269++) {
                        runtimeValue232[runtimeValue269].b = runtimeValue232[runtimeValue269].c;
                        runtimeValue232[runtimeValue269][addEventListenerMethod](changeEvent, validateSettings)
                    }
                    for (var runtimeValue269 = 0, runtimeValue270 = runtimeValue233[lengthProperty]; runtimeValue269 < runtimeValue270; runtimeValue269++) {
                        runtimeValue233[runtimeValue269].b = runtimeValue233[runtimeValue269].c;
                        runtimeValue233[runtimeValue269][addEventListenerMethod](changeEvent, validateSettings)
                    }
                    runtimeValue236[setAttributeMethod](dataAttributePrefix + 'ci', runtimeValue233[0].c * 1);
                    validateSettings()
                },
                restoreSettingsUi = function() {
                    runtimeValue230[addEventListenerMethod](inputEvent, validateSettings);
                    for (var runtimeValue271 = 0, runtimeValue272 = runtimeValue231[lengthProperty]; runtimeValue271 < runtimeValue272; runtimeValue271++) runtimeValue231[runtimeValue271][addEventListenerMethod](inputEvent, validateSettings);
                    for (var runtimeValue271 = 0, runtimeValue272 = runtimeValue232[lengthProperty]; runtimeValue271 < runtimeValue272; runtimeValue271++) runtimeValue232[runtimeValue271][addEventListenerMethod](changeEvent, validateSettings);
                    for (var runtimeValue271 = 0, runtimeValue272 = runtimeValue233[lengthProperty]; runtimeValue271 < runtimeValue272; runtimeValue271++) runtimeValue233[runtimeValue271][addEventListenerMethod](changeEvent, validateSettings);
                    runtimeValue234[disabledProperty] = false;
                    runtimeValue236[classNameProperty] = 'd'
                },
                initializeSettings = function() {
                    if (!runtimeValue225.init) {
                        runtimeValue227.title = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'bx');
                        runtimeValue227[addEventListenerMethod](mouseDownEvent, togglePasswordField);
                        runtimeValue230[addEventListenerMethod](inputEvent, validateSettings);
                        runtimeValue230[addEventListenerMethod](keyDownEvent, handleSettingsKeydown);
                        runtimeValue230.b = runtimeValue230[valueProperty];
                        for (var runtimeValue273 = 0, runtimeValue274 = runtimeValue231[lengthProperty]; runtimeValue273 < runtimeValue274; runtimeValue273++) {
                            runtimeValue231[runtimeValue273].b = runtimeValue231[runtimeValue273][valueProperty];
                            runtimeValue231[runtimeValue273][addEventListenerMethod](inputEvent, validateSettings);
                            runtimeValue231[runtimeValue273][addEventListenerMethod](keyDownEvent, handleSettingsKeydown)
                        }
                        for (var runtimeValue273 = 0, runtimeValue274 = runtimeValue232[lengthProperty]; runtimeValue273 < runtimeValue274; runtimeValue273++) {
                            runtimeValue232[runtimeValue273].b = runtimeValue232[runtimeValue273][checkedProperty];
                            runtimeValue232[runtimeValue273][parentNodeProperty][addEventListenerMethod](clickEvent, function() {
                                for (var settingsValue1 = 0, settingsValue2 = runtimeValue232[lengthProperty]; settingsValue1 < settingsValue2; settingsValue1++) {
                                    if (runtimeValue232[settingsValue1][parentNodeProperty] == this) {
                                        runtimeValue232[settingsValue1][parentNodeProperty][classNameProperty] = '';
                                        runtimeValue232[settingsValue1][checkedProperty] = true;
                                        validateSettings.call(runtimeValue232[settingsValue1])
                                    } else runtimeValue232[settingsValue1][parentNodeProperty][classNameProperty] = 'l'
                                }
                            });
                            if (runtimeValue232[runtimeValue273][checkedProperty]) runtimeValue232[runtimeValue273][parentNodeProperty][classNameProperty] = '';
                            else runtimeValue232[runtimeValue273][parentNodeProperty][classNameProperty] = 'l'
                        }
                        for (var runtimeValue273 = 0, runtimeValue274 = runtimeValue233[lengthProperty]; runtimeValue273 < runtimeValue274; runtimeValue273++) {
                            runtimeValue233[runtimeValue273].b = runtimeValue233[runtimeValue273][checkedProperty];
                            runtimeValue233[runtimeValue273][addEventListenerMethod](changeEvent, validateSettings)
                        }
                        runtimeValue234[addEventListenerMethod](clickEvent, saveSettings);
                        for (var runtimeValue273 = 0, runtimeValue274 = runtimeValue229[lengthProperty]; runtimeValue273 < runtimeValue274; runtimeValue273++) runtimeValue229[runtimeValue273][addEventListenerMethod](clickEvent, toggleSettingsSection);
                        if (!runtimeValue225[querySelectorMethod]('.t')) {
                            var runtimeValue275 = readCookie(settingsCookieSuffix);
                            if (!runtimeValue275) runtimeValue275 = 0;
                            windowObject[setTimeoutMethod](function() {
                                toggleSettingsSection.call(runtimeValue229[runtimeValue275])
                            }, 200)
                        }
                        validateSettings();
                        runtimeValue225.init = true
                    }
                }
            var runtimeValue238 = readCookie(stateCookieSuffix);
            if (runtimeValue238) {
                removeCookie(stateCookieSuffix, runtimeValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                runtimeValue236[textContentProperty] = runtimeValue236[getAttributeMethod](dataAttributePrefix + 'ae');
                runtimeValue236[classNameProperty] = 'c';
                fadeIn(runtimeValue236);
                var runtimeValue239 = runtimeValue226[nextElementSiblingProperty];
                runtimeValue239[styleProperty][displayProperty] = blockValue;
                runtimeValue239[classNameProperty] = 'A';
                runtimeValue226[classNameProperty] = '';
                for (var runtimeValue240 = 0, runtimeValue241 = runtimeValue238[lengthProperty]; runtimeValue240 < runtimeValue241; runtimeValue240++) {
                    for (var runtimeValue242 = 0, runtimeValue243 = runtimeValue228[lengthProperty]; runtimeValue242 < runtimeValue243; runtimeValue242++) {
                        if ((runtimeValue238[sliceMethod](runtimeValue240, runtimeValue240 + 1) * 1) == runtimeValue242) {
                            runtimeValue228[runtimeValue242][classNameProperty] = 't';
                            runtimeValue228[runtimeValue242][lastElementChildProperty][styleProperty][displayProperty] = blockValue
                        }
                    }
                }
                initializeSettings()
            }
            runtimeValue226[addEventListenerMethod](mouseDownEvent, initializeSettings)
        }
    })
}());
