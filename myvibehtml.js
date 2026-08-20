/* MyVibeHTML v0.27 */
(function() {
    var windowObject = window,
        documentObject = document,
        sourceMapApi = windowObject.MyVibeHTMLSourceMap,
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
        updateMarker = productPrefix + '_update',
        installMarker = productPrefix + '_install',
        notInstallMarker = productPrefix + '_not_install',
        activateMarker = productPrefix + '_activate',
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
        systemParameter = 'system=',
        tokenParameter = '&token=',
        versionParameter = '&version=',
        finalParameter = '&final=',
        betaParameter = '&beta=',
        rollbackParameter = '&rollback=',
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
    var writeCookie = function(callbackArgument1, callbackArgument2, callbackArgument3, callbackArgument4) {
            var callbackValue5 = windowObject[encodeURIComponentMethod](callbackArgument1) + '=' + windowObject[encodeURIComponentMethod](callbackArgument2);
            if (callbackArgument3) {
                var callbackValue6 = new Date();
                callbackValue6.setTime(callbackValue6.getTime() + (1000 * 60 * callbackArgument3));
                callbackValue5 += ';expires=' + callbackValue6.toUTCString()
            }
            if (callbackArgument4) callbackValue5 += ';path=' + windowObject[encodeURIComponentMethod](callbackArgument4)[splitMethod]('%2F')[joinMethod]('/');
            documentObject.cookie = callbackValue5
        },
        removeCookie = function(callbackArgument5, callbackArgument6) {
            writeCookie(callbackArgument5, 1, -1, callbackArgument6)
        },
        readCookie = function(callbackArgument7) {
            var callbackValue8 = documentObject.cookie[matchMethod]('(^|;) ?' + callbackArgument7 + ' ?= ?([^;]*)(;|$)');
            if (callbackValue8) return callbackValue8[2]
        },
        animateValue = function(callbackArgument8, callbackArgument9, callbackArgument10, callbackArgument11, callbackArgument12, callbackArgument13, callbackArgument14) {
            var callbackValue15, callbackValue16 = new Date(),
                callbackValue17 = windowObject[setIntervalMethod](function() {
                    callbackValue15 = (new Date() - callbackValue16) / callbackArgument11;
                    if (callbackValue15 < 1) callbackArgument13.call(callbackArgument8, (callbackArgument10 - callbackArgument9) * callbackArgument12(callbackValue15) + callbackArgument9);
                    else {
                        callbackArgument13.call(callbackArgument8, callbackArgument10);
                        var animateValueValue1 = callbackArgument8.a[lengthProperty];
                        if (animateValueValue1 > 1) {
                            while (animateValueValue1--)
                                if (callbackArgument8.a[animateValueValue1] == callbackValue17) delete callbackArgument8.a[animateValueValue1]
                        } else delete callbackArgument8.a;
                        windowObject[clearIntervalMethod](callbackValue17);
                        if (callbackArgument14) callbackArgument14.call(callbackArgument8)
                    }
                }, 10);
            if (!callbackArgument8.a) callbackArgument8.a = [callbackValue17];
            else callbackArgument8.a[callbackArgument8.a[lengthProperty]] = callbackValue17
        },
        fadeIn = function(callbackArgument15, callbackArgument16) {
            if (windowObject[getComputedStyleMethod](callbackArgument15)[displayProperty] == noneValue) {
                callbackArgument15[styleProperty][opacityProperty] = '0';
                callbackArgument15[styleProperty][displayProperty] = blockValue;
                animateValue(callbackArgument15, 0, 1, 400, function(fadeInArgument1) {
                    return ((-Math.cos(fadeInArgument1 * Math.PI) / 2) + 0.5)
                }, function(fadeInArgument2) {
                    callbackArgument15[styleProperty][opacityProperty] = fadeInArgument2[toFixedMethod](1)
                }, function() {
                    callbackArgument15[styleProperty][opacityProperty] = '';
                    if (callbackArgument16) callbackArgument16.call(callbackArgument15)
                })
            }
        },
        fadeOut = function(callbackArgument17, callbackArgument18) {
            if (callbackArgument17[styleProperty][overflowProperty] != hiddenValue && windowObject[getComputedStyleMethod](callbackArgument17)[displayProperty] != noneValue) {
                animateValue(callbackArgument17, 1, 0, 300, function(fadeOutArgument1) {
                    return ((-Math.cos(fadeOutArgument1 * Math.PI) / 2) + 0.5)
                }, function(fadeOutArgument2) {
                    callbackArgument17[styleProperty][opacityProperty] = fadeOutArgument2[toFixedMethod](1)
                }, function() {
                    callbackArgument17[styleProperty][displayProperty] = noneValue;
                    callbackArgument17[styleProperty][opacityProperty] = '';
                    if (callbackArgument18) callbackArgument18.call(callbackArgument17)
                })
            }
        },
        slideDown = function(callbackArgument19, callbackArgument20) {
            if (windowObject[getComputedStyleMethod](callbackArgument19)[displayProperty] == noneValue) {
                callbackArgument19[styleProperty][opacityProperty] = '0';
                callbackArgument19[styleProperty][positionProperty] = absoluteValue;
                callbackArgument19[styleProperty][displayProperty] = blockValue;
                var callbackValue21 = callbackArgument19[clientHeightProperty],
                    callbackValue22 = parseInt(windowObject[getComputedStyleMethod](callbackArgument19)[paddingTopProperty]);
                callbackArgument19[styleProperty][heightProperty] = '0';
                callbackArgument19[styleProperty][positionProperty] = '';
                callbackArgument19[styleProperty][overflowProperty] = hiddenValue;
                callbackArgument19[styleProperty][marginLeftProperty] = '-' + windowObject[getComputedStyleMethod](callbackArgument19[firstElementChildProperty])[paddingLeftProperty];
                if (callbackValue22) {
                    callbackValue21 = callbackValue21 - callbackValue22;
                    animateValue(callbackArgument19, 0, callbackValue22, 200, function(slideDownArgument1) {
                        return ((-Math.cos(slideDownArgument1 * Math.PI) / 2) + 0.5)
                    }, function(slideDownArgument2) {
                        callbackArgument19[styleProperty][paddingTopProperty] = slideDownArgument2[toFixedMethod](0) + 'px'
                    })
                }
                animateValue(callbackArgument19, 0, callbackValue21, 200, function(slideDownArgument3) {
                    return ((-Math.cos(slideDownArgument3 * Math.PI) / 2) + 0.5)
                }, function(slideDownArgument4) {
                    callbackArgument19[styleProperty][heightProperty] = slideDownArgument4[toFixedMethod](0) + 'px'
                });
                animateValue(callbackArgument19, parseInt(callbackArgument19[styleProperty][marginLeftProperty]), 0, 400, function(slideDownArgument5) {
                    return ((-Math.cos(slideDownArgument5 * Math.PI) / 2) + 0.5)
                }, function(slideDownArgument6) {
                    callbackArgument19[styleProperty][marginLeftProperty] = slideDownArgument6[toFixedMethod](0) + 'px'
                });
                animateValue(callbackArgument19, 0, 1, 600, function(slideDownArgument7) {
                    return ((-Math.cos(slideDownArgument7 * Math.PI) / 2) + 0.5)
                }, function(slideDownArgument8) {
                    callbackArgument19[styleProperty][opacityProperty] = slideDownArgument8[toFixedMethod](1)
                }, function() {
                    callbackArgument19[styleProperty][heightProperty] = '';
                    callbackArgument19[styleProperty][marginLeftProperty] = '';
                    callbackArgument19[styleProperty][paddingTopProperty] = '';
                    callbackArgument19[styleProperty][opacityProperty] = '';
                    callbackArgument19[styleProperty][overflowProperty] = '';
                    if (callbackArgument20) callbackArgument20.call(callbackArgument19)
                })
            }
        },
        slideUp = function(callbackArgument21, callbackArgument22) {
            if (callbackArgument21[styleProperty][overflowProperty] != hiddenValue && windowObject[getComputedStyleMethod](callbackArgument21)[displayProperty] != noneValue) {
                var callbackValue23 = callbackArgument21[clientHeightProperty],
                    callbackValue24 = parseInt(windowObject[getComputedStyleMethod](callbackArgument21)[paddingTopProperty]);
                callbackArgument21[styleProperty][overflowProperty] = hiddenValue;
                if (callbackValue24) {
                    callbackValue23 = callbackValue23 - callbackValue24;
                    animateValue(callbackArgument21, callbackValue24, 0, 400, function(slideUpArgument1) {
                        return ((-Math.cos(slideUpArgument1 * Math.PI) / 2) + 0.5)
                    }, function(slideUpArgument2) {
                        callbackArgument21[styleProperty][paddingTopProperty] = slideUpArgument2[toFixedMethod](0) + 'px'
                    })
                }
                animateValue(callbackArgument21, callbackArgument21[clientHeightProperty], 0, 420, function(slideUpArgument3) {
                    return ((-Math.cos(slideUpArgument3 * Math.PI) / 2) + 0.5)
                }, function(slideUpArgument4) {
                    callbackArgument21[styleProperty][heightProperty] = slideUpArgument4[toFixedMethod](0) + 'px'
                }, function() {
                    callbackArgument21[styleProperty][displayProperty] = noneValue;
                    callbackArgument21[styleProperty][opacityProperty] = '';
                    callbackArgument21[styleProperty][marginLeftProperty] = '';
                    callbackArgument21[styleProperty][heightProperty] = '';
                    callbackArgument21[styleProperty][overflowProperty] = '';
                    if (callbackArgument22) callbackArgument22.call(callbackArgument21)
                });
                animateValue(callbackArgument21, 0, parseInt('-' + windowObject[getComputedStyleMethod](callbackArgument21[firstElementChildProperty])[paddingLeftProperty]), 400, function(slideUpArgument5) {
                    return ((-Math.cos(slideUpArgument5 * Math.PI) / 2) + 0.5)
                }, function(slideUpArgument6) {
                    callbackArgument21[styleProperty][marginLeftProperty] = slideUpArgument6[toFixedMethod](0) + 'px'
                });
                animateValue(callbackArgument21, 1, 0, 200, function(slideUpArgument7) {
                    return ((-Math.cos(slideUpArgument7 * Math.PI) / 2) + 0.5)
                }, function(slideUpArgument8) {
                    callbackArgument21[styleProperty][opacityProperty] = slideUpArgument8[toFixedMethod](1)
                })
            }
        },
        showPanel = function(callbackArgument23, callbackArgument24) {
            if (windowObject[getComputedStyleMethod](callbackArgument23)[displayProperty] == noneValue) {
                callbackArgument23[styleProperty][opacityProperty] = '0';
                callbackArgument23[styleProperty][positionProperty] = absoluteValue;
                callbackArgument23[styleProperty][displayProperty] = blockValue;
                var callbackValue25 = callbackArgument23[clientHeightProperty];
                callbackArgument23[styleProperty][heightProperty] = '0';
                callbackArgument23[styleProperty][positionProperty] = '';
                callbackArgument23[styleProperty][overflowProperty] = hiddenValue;
                animateValue(callbackArgument23, 0, callbackValue25, 150, function(showPanelArgument1) {
                    return ((-Math.cos(showPanelArgument1 * Math.PI) / 2) + 0.5)
                }, function(showPanelArgument2) {
                    callbackArgument23[styleProperty][heightProperty] = showPanelArgument2[toFixedMethod](0) + 'px'
                });
                animateValue(callbackArgument23, 0, 1, 300, function(showPanelArgument3) {
                    return ((-Math.cos(showPanelArgument3 * Math.PI) / 2) + 0.5)
                }, function(showPanelArgument4) {
                    callbackArgument23[styleProperty][opacityProperty] = showPanelArgument4[toFixedMethod](1)
                }, function() {
                    callbackArgument23[styleProperty][heightProperty] = '';
                    callbackArgument23[styleProperty][opacityProperty] = '';
                    callbackArgument23[styleProperty][overflowProperty] = '';
                    if (callbackArgument24) callbackArgument24.call(callbackArgument23)
                })
            }
        },
        hidePanel = function(callbackArgument25, callbackArgument26) {
            if (callbackArgument25[styleProperty][overflowProperty] != hiddenValue && windowObject[getComputedStyleMethod](callbackArgument25)[displayProperty] != noneValue) {
                var callbackValue27 = callbackArgument25[clientHeightProperty];
                callbackArgument25[styleProperty][overflowProperty] = hiddenValue;
                animateValue(callbackArgument25, callbackArgument25[clientHeightProperty], 0, 200, function(hidePanelArgument1) {
                    return ((-Math.cos(hidePanelArgument1 * Math.PI) / 2) + 0.5)
                }, function(hidePanelArgument2) {
                    callbackArgument25[styleProperty][heightProperty] = hidePanelArgument2[toFixedMethod](0) + 'px'
                }, function() {
                    callbackArgument25[styleProperty][displayProperty] = noneValue;
                    callbackArgument25[styleProperty][opacityProperty] = '';
                    callbackArgument25[styleProperty][heightProperty] = '';
                    callbackArgument25[styleProperty][overflowProperty] = '';
                    if (callbackArgument26) callbackArgument26.call(callbackArgument25)
                });
                animateValue(callbackArgument25, 1, 0, 150, function(hidePanelArgument3) {
                    return ((-Math.cos(hidePanelArgument3 * Math.PI) / 2) + 0.5)
                }, function(hidePanelArgument4) {
                    callbackArgument25[styleProperty][opacityProperty] = hidePanelArgument4[toFixedMethod](1)
                })
            }
        },
        utf8Encode = function(callbackArgument27) {
            var callbackValue28, callbackValue29, callbackValue30 = '';
            callbackValue29 = String.fromCharCode;
            callbackArgument27 = callbackArgument27[replaceMethod](new RegExp('\r\n', 'g'), '\n');
            for (callbackValue28 = 0; callbackValue28 < callbackArgument27[lengthProperty]; callbackValue28++) {
                var callbackValue31 = callbackArgument27[charCodeAtMethod](callbackValue28);
                if (callbackValue31 < 128) callbackValue30 += callbackValue29(callbackValue31);
                else if ((callbackValue31 > 127) && (callbackValue31 < 2048)) {
                    callbackValue30 += callbackValue29((callbackValue31 >> 6) | 192);
                    callbackValue30 += callbackValue29((callbackValue31 & 63) | 128)
                } else {
                    callbackValue30 += callbackValue29((callbackValue31 >> 12) | 224);
                    callbackValue30 += callbackValue29(((callbackValue31 >> 6) & 63) | 128);
                    callbackValue30 += callbackValue29((callbackValue31 & 63) | 128)
                }
            }
            return callbackValue30
        },
        sha1 = function(callbackArgument28) {
            var callbackValue32 = function(sha1Argument1, sha1Argument2) {
                    return (sha1Argument1 << sha1Argument2) | (sha1Argument1 >>> (32 - sha1Argument2))
                },
                callbackValue33 = function(sha1Argument3) {
                    var sha1Value4, sha1Value5, sha1Value6 = '';
                    for (sha1Value4 = 7; sha1Value4 >= 0; sha1Value4--) {
                        sha1Value5 = (sha1Argument3 >>> (sha1Value4 * 4)) & 0x0f;
                        sha1Value6 += sha1Value5[toStringMethod](16)
                    }
                    return sha1Value6
                },
                callbackValue34, callbackValue35, callbackValue36, callbackValue37, callbackValue38, callbackValue39, callbackValue40, callbackValue41, callbackValue42, callbackValue43, callbackValue44, callbackValue45, callbackValue46 = 0x67452301,
                callbackValue47 = 0xEFCDAB89,
                callbackValue48 = 0x98BADCFE,
                callbackValue49 = 0x10325476,
                callbackValue50 = 0xC3D2E1F0;
            callbackArgument28 = utf8Encode(callbackArgument28);
            callbackValue38 = callbackArgument28[lengthProperty];
            callbackValue34 = new Array();
            callbackValue45 = new Array(80);
            for (callbackValue36 = 0; callbackValue36 < callbackValue38 - 3; callbackValue36 += 4) {
                callbackValue37 = callbackArgument28[charCodeAtMethod](callbackValue36) << 24 | callbackArgument28[charCodeAtMethod](callbackValue36 + 1) << 16 | callbackArgument28[charCodeAtMethod](callbackValue36 + 2) << 8 | callbackArgument28[charCodeAtMethod](callbackValue36 + 3);
                callbackValue34.push(callbackValue37)
            }
            switch (callbackValue38 % 4) {
                case 0:
                    callbackValue36 = 0x080000000;
                    break;
                case 1:
                    callbackValue36 = callbackArgument28[charCodeAtMethod](callbackValue38 - 1) << 24 | 0x0800000;
                    break;
                case 2:
                    callbackValue36 = callbackArgument28[charCodeAtMethod](callbackValue38 - 2) << 24 | callbackArgument28[charCodeAtMethod](callbackValue38 - 1) << 16 | 0x08000;
                    break;
                case 3:
                    callbackValue36 = callbackArgument28[charCodeAtMethod](callbackValue38 - 3) << 24 | callbackArgument28[charCodeAtMethod](callbackValue38 - 2) << 16 | callbackArgument28[charCodeAtMethod](callbackValue38 - 1) << 8 | 0x80;
                    break
            }
            callbackValue34.push(callbackValue36);
            while ((callbackValue34[lengthProperty] % 16) != 14) callbackValue34.push(0);
            callbackValue34.push(callbackValue38 >>> 29);
            callbackValue34.push((callbackValue38 << 3) & 0x0ffffffff);
            for (callbackValue35 = 0; callbackValue35 < callbackValue34[lengthProperty]; callbackValue35 += 16) {
                for (callbackValue36 = 0; callbackValue36 < 16; callbackValue36++) callbackValue45[callbackValue36] = callbackValue34[callbackValue35 + callbackValue36];
                for (callbackValue36 = 16; callbackValue36 <= 79; callbackValue36++) callbackValue45[callbackValue36] = callbackValue32(callbackValue45[callbackValue36 - 3] ^ callbackValue45[callbackValue36 - 8] ^ callbackValue45[callbackValue36 - 14] ^ callbackValue45[callbackValue36 - 16], 1);
                callbackValue40 = callbackValue46;
                callbackValue41 = callbackValue47;
                callbackValue42 = callbackValue48;
                callbackValue43 = callbackValue49;
                callbackValue44 = callbackValue50;
                for (callbackValue36 = 0; callbackValue36 <= 19; callbackValue36++) {
                    callbackValue39 = (callbackValue32(callbackValue40, 5) + ((callbackValue41 & callbackValue42) | (~callbackValue41 & callbackValue43)) + callbackValue44 + callbackValue45[callbackValue36] + 0x5A827999) & 0x0ffffffff;
                    callbackValue44 = callbackValue43;
                    callbackValue43 = callbackValue42;
                    callbackValue42 = callbackValue32(callbackValue41, 30);
                    callbackValue41 = callbackValue40;
                    callbackValue40 = callbackValue39
                }
                for (callbackValue36 = 20; callbackValue36 <= 39; callbackValue36++) {
                    callbackValue39 = (callbackValue32(callbackValue40, 5) + (callbackValue41 ^ callbackValue42 ^ callbackValue43) + callbackValue44 + callbackValue45[callbackValue36] + 0x6ED9EBA1) & 0x0ffffffff;
                    callbackValue44 = callbackValue43;
                    callbackValue43 = callbackValue42;
                    callbackValue42 = callbackValue32(callbackValue41, 30);
                    callbackValue41 = callbackValue40;
                    callbackValue40 = callbackValue39
                }
                for (callbackValue36 = 40; callbackValue36 <= 59; callbackValue36++) {
                    callbackValue39 = (callbackValue32(callbackValue40, 5) + ((callbackValue41 & callbackValue42) | (callbackValue41 & callbackValue43) | (callbackValue42 & callbackValue43)) + callbackValue44 + callbackValue45[callbackValue36] + 0x8F1BBCDC) & 0x0ffffffff;
                    callbackValue44 = callbackValue43;
                    callbackValue43 = callbackValue42;
                    callbackValue42 = callbackValue32(callbackValue41, 30);
                    callbackValue41 = callbackValue40;
                    callbackValue40 = callbackValue39
                }
                for (callbackValue36 = 60; callbackValue36 <= 79; callbackValue36++) {
                    callbackValue39 = (callbackValue32(callbackValue40, 5) + (callbackValue41 ^ callbackValue42 ^ callbackValue43) + callbackValue44 + callbackValue45[callbackValue36] + 0xCA62C1D6) & 0x0ffffffff;
                    callbackValue44 = callbackValue43;
                    callbackValue43 = callbackValue42;
                    callbackValue42 = callbackValue32(callbackValue41, 30);
                    callbackValue41 = callbackValue40;
                    callbackValue40 = callbackValue39
                }
                callbackValue46 = (callbackValue46 + callbackValue40) & 0x0ffffffff;
                callbackValue47 = (callbackValue47 + callbackValue41) & 0x0ffffffff;
                callbackValue48 = (callbackValue48 + callbackValue42) & 0x0ffffffff;
                callbackValue49 = (callbackValue49 + callbackValue43) & 0x0ffffffff;
                callbackValue50 = (callbackValue50 + callbackValue44) & 0x0ffffffff
            }
            return (callbackValue33(callbackValue46) + callbackValue33(callbackValue47) + callbackValue33(callbackValue48) + callbackValue33(callbackValue49) + callbackValue33(callbackValue50))[toLowerCaseMethod]()
        },
        base64Encode = function(callbackArgument29) {
            return btoa(windowObject[encodeURIComponentMethod](callbackArgument29)[replaceMethod](new RegExp('%([0-9A-F]{2})', 'g'), function(base64EncodeArgument1, base64EncodeArgument2) {
                return String.fromCharCode('0x' + base64EncodeArgument2)
            }))
        },
        base64Decode = function(callbackArgument29) {
            try {
                callbackArgument29 = callbackArgument29[replaceMethod](/-/g, '+')[replaceMethod](/_/g, '/');
                while (callbackArgument29[lengthProperty] % 4) callbackArgument29 += '=';
                return windowObject[decodeURIComponentMethod](Array.prototype.map.call(atob(callbackArgument29), function(base64DecodeValue1) {
                    return '%' + ('00' + base64DecodeValue1.charCodeAt(0).toString(16)).slice(-2)
                }).join(''))
            } catch (base64DecodeError) {
                return ''
            }
        },
        base64UrlEncode = function(callbackArgument30) {
            return base64Encode(callbackArgument30)[replaceMethod](/\+/g, '-')[replaceMethod](/\//g, '_')[replaceMethod](/=+$/, '')
        },
        ajaxRequest = function(callbackArgument30, callbackArgument31, callbackArgument32, callbackArgument33, callbackArgument34, callbackArgument35) {
            var callbackValue51 = new XMLHttpRequest();
            if (callbackArgument35) {
                callbackArgument33.call(callbackValue51);
                return
            }
            callbackValue51.open('POST', locationObject.href, true);
            callbackValue51[setRequestHeaderMethod]('AJAX', 1)
            callbackValue51.onreadystatechange = function() {
                if (callbackValue51.readyState == 4) {
                    if (callbackValue51.status == 200) {
                        windowObject[clearTimeoutMethod](callbackValue52);
                        callbackArgument31.call(callbackValue51, callbackValue51.responseText)
                    } else if (callbackValue51.status == 404) {
                        windowObject[clearTimeoutMethod](callbackValue52);
                        callbackArgument32.call(callbackValue51, callbackValue51.responseText)
                    }
                }
            };
            if (callbackArgument30.charAt) {
                var callbackValue52 = windowObject[setTimeoutMethod](function() {
                    callbackValue51.onreadystatechange = function() {};
                    callbackArgument33.call(callbackValue51)
                }, 20000);
                callbackValue51[setRequestHeaderMethod]('Content-Type', 'application/x-www-form-urlencoded')
            } else {
                var callbackValue53 = function() {
                        return windowObject[setTimeoutMethod](function() {
                            callbackValue51.onreadystatechange = function() {};
                            callbackValue51.upload.onprogress = function() {};
                            callbackArgument33.call(callbackValue51)
                        }, 20000)
                    },
                    callbackValue52 = callbackValue53(),
                    callbackValue54 = 0;
                callbackValue51.upload.onprogress = function(event) {
                    if (event.loaded > callbackValue54) {
                        callbackValue54 = event.loaded;
                        windowObject[clearTimeoutMethod](callbackValue52);
                        callbackArgument34.call(callbackValue51, callbackValue54, event.total)
                    } else callbackValue52 = callbackValue53()
                };
                callbackArgument34.call(callbackValue51, 0, 0)
            }
            callbackValue51.send(callbackArgument30)
        },
        generateToken = function() {
            var tokenBytes = new Uint8Array(32),
                tokenHex = '';
            if (windowObject.crypto && windowObject.crypto.getRandomValues) {
                windowObject.crypto.getRandomValues(tokenBytes);
                for (var tokenByteIndex = 0; tokenByteIndex < tokenBytes.length; tokenByteIndex++) tokenHex += ('00' + tokenBytes[tokenByteIndex].toString(16)).slice(-2);
                return tokenHex
            }
            return sha1(new Date().getTime() + '' + Math.floor(Math.random() * 2147483648))
        },
        formatBytes = function(callbackArgument36) {
            var callbackValue55 = 1024,
                callbackValue56 = 1024 * callbackValue55,
                callbackValue57 = 1024 * callbackValue56,
                callbackValue58 = 1024 * callbackValue57;
            if (callbackArgument36 < callbackValue56) return (callbackArgument36 / callbackValue55)[toFixedMethod](2) + ' KB';
            else if (callbackArgument36 < callbackValue57) return (callbackArgument36 / callbackValue56)[toFixedMethod](2) + ' MB';
            else if (callbackArgument36 < callbackValue58) return (callbackArgument36 / callbackValue57)[toFixedMethod](2) + ' GB';
            else return (callbackArgument36 / callbackValue58)[toFixedMethod](2) + ' TB'
        };
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var authPage = documentObject[querySelectorMethod]('#a');
        if (authPage) {
            var loginButton = authPage[querySelectorMethod]('input[type="button"]'),
                passwordInput = authPage[querySelectorMethod]('input[type="password"]'),
                passwordToggle = passwordInput[nextElementSiblingProperty],
                authStatus = authPage[querySelectorMethod]('p samp'),
                attemptList = authPage[querySelectorMethod]('ol'),
                attemptTemplate = attemptList[removeChildMethod](attemptList[firstElementChildProperty]),
                maxAttempts = attemptList[getAttributeMethod](dataAttributePrefix + 'cp'),
                failedAttempts = attemptList[getAttributeMethod](dataAttributePrefix + 'cq'),
                togglePasswordVisibility = function() {
                    if (this[classNameProperty]) {
                        passwordInput.type = 'password';
                        this[classNameProperty] = '';
                        this.title = this[getAttributeMethod](dataAttributePrefix + 'bx')
                    } else {
                        passwordInput.type = 'text';
                        this[classNameProperty] = 'e';
                        this.title = this[getAttributeMethod](dataAttributePrefix + 'by')
                    }
                },
                handleLoginKeydown = function(event) {
                    if (event[keyCodeProperty] == 13) {
                        passwordInput[removeEventListenerMethod](inputEvent, updateLoginButton);
                        startLogin()
                    }
                },
                updateLoginButton = function() {
                    if (passwordInput[valueProperty][lengthProperty] > 0) loginButton[disabledProperty] = false;
                    else loginButton[disabledProperty] = true
                },
                startLogin = function() {
                    if (!loginButton[disabledProperty]) {
                        passwordInput[focusEvent]();
                        passwordInput[disabledProperty] = true;
                        loginButton[disabledProperty] = true;
                        authStatus[innerHTMLProperty] = authStatus[getAttributeMethod](dataAttributePrefix + 'az');
                        authStatus[classNameProperty] = 'b';
                        fadeIn(authStatus);
                        submitLogin(passwordInput[valueProperty])
                    }
                },
                submitLogin = function(callbackArgument41) {
                    authStatus[innerHTMLProperty] = authStatus[getAttributeMethod](dataAttributePrefix + 'cr');
                    ajaxRequest('password=' + windowObject[encodeURIComponentMethod](callbackArgument41), function() {
                        writeCookie(checkMarker, 1, false, authStatus[getAttributeMethod](dataAttributePrefix + 'cl'));
                        authStatus[innerHTMLProperty] = authStatus[getAttributeMethod](dataAttributePrefix + 'cs');
                        authStatus[classNameProperty] = 'c';
                        if (locationObject.href[indexOfMethod](windowObject[encodeURIComponentMethod](authStatus[getAttributeMethod](dataAttributePrefix + 'cl'))[splitMethod]('%2F')[joinMethod]('/')) === -1) {
                            var submitLoginValue1 = authStatus[getAttributeMethod](dataAttributePrefix + 'cl')[splitMethod]('/'),
                                submitLoginValue2 = locationObject.hostname[replaceMethod]('www.', '');
                            if (submitLoginValue1[lengthProperty] > 3 && submitLoginValue2[indexOfMethod](submitLoginValue1[1]) === 0 && submitLoginValue2[splitMethod]('.')[lengthProperty] > 2) locationObject.href = locationObject.protocol + '//' + submitLoginValue2[sliceMethod](submitLoginValue1[1][lengthProperty] + 1) + authStatus[getAttributeMethod](dataAttributePrefix + 'cl');
                            else locationObject.reload(true)
                        } else locationObject.reload(true)
                    }, function() {
                        passwordInput[disabledProperty] = false;
                        passwordInput[focusEvent]();
                        passwordInput[addEventListenerMethod](inputEvent, updateLoginButton);
                        authStatus[classNameProperty] = 'd';
                        if (!this[getResponseHeaderMethod]('X-a')) {
                            authStatus[innerHTMLProperty] = authStatus[getAttributeMethod](dataAttributePrefix + 'ct');
                            failedAttempts = failedAttempts * 1 + 1;
                            attemptList[setAttributeMethod](dataAttributePrefix + 'cq', failedAttempts);
                            if (failedAttempts >= maxAttempts) locationObject.reload(true);
                            else attemptList[appendChildMethod](attemptList[firstElementChildProperty])[classNameProperty] = 'a'
                        } else {
                            updateLoginButton.call(passwordInput);
                            authStatus[innerHTMLProperty] = authStatus[getAttributeMethod](dataAttributePrefix + 'am')
                        }
                    }, function() {
                        passwordInput[disabledProperty] = false;
                        passwordInput[focusEvent]();
                        passwordInput[addEventListenerMethod](inputEvent, updateLoginButton);
                        authStatus[innerHTMLProperty] = authStatus[getAttributeMethod](dataAttributePrefix + 'al');
                        authStatus[classNameProperty] = 'd'
                    })
                };
            for (var attemptIndex = 0; attemptIndex < maxAttempts; attemptIndex++) {
                var attemptRow = attemptTemplate[cloneNodeMethod](true);
                if (attemptIndex >= (maxAttempts - failedAttempts)) attemptRow[classNameProperty] = 'a';
                attemptList[appendChildMethod](attemptRow)
            }
            if (locationObject.href[indexOfMethod](windowObject[encodeURIComponentMethod](authStatus[getAttributeMethod](dataAttributePrefix + 'cl'))[splitMethod]('%2F')[joinMethod]('/')) === -1) {
                authStatus[classNameProperty] = 'd';
                fadeIn(authStatus)
            } else if (loginButton[valueProperty][indexOfMethod]('{') !== -1) {
                authStatus[innerHTMLProperty] = 'Problem with parse_ini_file';
                authStatus[classNameProperty] = 'd';
                fadeIn(authStatus)
            }
            attemptList[styleProperty][displayProperty] = blockValue;
            passwordInput[focusEvent]();
            passwordToggle.title = passwordToggle[getAttributeMethod](dataAttributePrefix + 'bx');
            passwordToggle[addEventListenerMethod](mouseDownEvent, togglePasswordVisibility);
            loginButton[addEventListenerMethod](clickEvent, startLogin);
            passwordInput[addEventListenerMethod](inputEvent, updateLoginButton);
            passwordInput[addEventListenerMethod](keyDownEvent, handleLoginKeydown)
        }
    });
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var callbackValue1 = documentObject[querySelectorMethod]('#e');
        if (callbackValue1) {
            var callbackValue2 = callbackValue1[querySelectorMethod]('div>div+ol li:first-child'),
                callbackValue3 = callbackValue1[querySelectorMethod]('div>div+ol li+li'),
                callbackValue4 = callbackValue1[querySelectorMethod]('div>div+ul li:first-child input'),
                callbackValue7 = callbackValue1[querySelectorMethod]('div>div+ul li:last-child input'),
                callbackValue9 = callbackValue1[querySelectorMethod]('div>div+ul+p samp'),
                callbackValue10 = callbackValue1[querySelectorAllMethod]('div>ol+ul>li>a'),
                callbackValue11 = documentObject[querySelectorMethod]('#j'),
                serializedSource = callbackValue11[getAttributeMethod]('data-encoding') == 'base64' ? base64Decode(callbackValue11[textContentProperty]) : callbackValue11[innerHTMLProperty],
                initializeVisualEditor = function() {
                    var callbackValue18 = callbackValue1[querySelectorMethod]('div>ul+div'),
                        callbackValue19 = callbackValue18[firstElementChildProperty],
                        callbackValue20 = callbackValue19[getAttributeMethod](dataAttributePrefix + 'ab'),
                        callbackValue26 = callbackValue19[nextElementSiblingProperty],
                        callbackValue62 = callbackValue26[firstElementChildProperty],
                        callbackValue63 = callbackValue62[nextElementSiblingProperty],
                        callbackValue64 = callbackValue63[nextElementSiblingProperty],
                        callbackValue65 = callbackValue64[nextElementSiblingProperty],
                        callbackValue66 = callbackValue65[nextElementSiblingProperty],
                        callbackValue67 = callbackValue26[nextElementSiblingProperty],
                        callbackValue68 = callbackValue67[firstElementChildProperty][firstElementChildProperty][nextElementSiblingProperty],
                        callbackValue69 = callbackValue68[firstElementChildProperty][innerHTMLProperty],
                        callbackValue70 = callbackValue9[getAttributeMethod](dataAttributePrefix + 'cd')[splitMethod](','),
                        callbackValue71 = 'input,button,textarea,select,iframe,svg,canvas,object,video,audio',
                        contextMenu = null,
                        contextTarget = null,
                        styleInspector = null,
                        styleInspectorTarget = null,
                        styleInspectorFields = null,
                        styleInspectorError = null,
                        mediaPicker = null,
                        mediaPickerTarget = null,
                        sourceMapState = null,
                        getContextNode = function(initializeVisualEditorArgument1) {
                            for (var initializeVisualEditorValue2 = initializeVisualEditorArgument1; initializeVisualEditorValue2 && initializeVisualEditorValue2 != callbackValue127.body; initializeVisualEditorValue2 = initializeVisualEditorValue2[parentNodeProperty]) {
                                if (initializeVisualEditorValue2.realNode) initializeVisualEditorValue2 = initializeVisualEditorValue2.realNode;
                                if (initializeVisualEditorValue2[tagNameProperty] && initializeVisualEditorValue2[tagNameProperty][toLowerCaseMethod]() != scriptTagName && initializeVisualEditorValue2[tagNameProperty][toLowerCaseMethod]() != 'style') return initializeVisualEditorValue2
                            }
                        },
                        getSectionNode = function(initializeVisualEditorArgument2) {
                            for (var initializeVisualEditorValue3 = initializeVisualEditorArgument2; initializeVisualEditorValue3 && initializeVisualEditorValue3 != callbackValue127.body; initializeVisualEditorValue3 = initializeVisualEditorValue3[parentNodeProperty]) {
                                var initializeVisualEditorValue4 = initializeVisualEditorValue3[tagNameProperty] && initializeVisualEditorValue3[tagNameProperty][toLowerCaseMethod]();
                                if (initializeVisualEditorValue4 && '|main|section|header|footer|nav|aside|article|'.indexOf('|' + initializeVisualEditorValue4 + '|') !== -1) return initializeVisualEditorValue3
                            }
                            return initializeVisualEditorArgument2
                        },
                        getBlockNode = function(initializeVisualEditorArgument3) {
                            var initializeVisualEditorValue5 = initializeVisualEditorArgument3;
                            while (initializeVisualEditorValue5 && initializeVisualEditorValue5[parentNodeProperty] && initializeVisualEditorValue5[parentNodeProperty] != callbackValue127.body) {
                                if (initializeVisualEditorValue5[parentNodeProperty][tagNameProperty] && '|main|section|header|footer|nav|aside|article|'.indexOf('|' + initializeVisualEditorValue5[parentNodeProperty][tagNameProperty][toLowerCaseMethod]() + '|') !== -1) return initializeVisualEditorValue5;
                                initializeVisualEditorValue5 = initializeVisualEditorValue5[parentNodeProperty]
                            }
                            return initializeVisualEditorValue5 || initializeVisualEditorArgument3
                        },
                        clearContextSelection = function() {
                            var initializeVisualEditorValue1 = callbackValue127[querySelectorAllMethod]('[data-myvibehtml-selection]');
                            for (var initializeVisualEditorValue6 = 0, initializeVisualEditorValue7 = initializeVisualEditorValue1[lengthProperty]; initializeVisualEditorValue6 < initializeVisualEditorValue7; initializeVisualEditorValue6++) initializeVisualEditorValue1[initializeVisualEditorValue6][removeAttributeMethod]('data-myvibehtml-selection')
                        },
                        selectContextNode = function(initializeVisualEditorArgument4, initializeVisualEditorArgument5) {
                            if (!initializeVisualEditorArgument4) return;
                            clearContextSelection();
                            initializeVisualEditorArgument4[setAttributeMethod]('data-myvibehtml-selection', initializeVisualEditorArgument5);
                            callbackValue106.call(initializeVisualEditorArgument4);
                            if (styleInspector && !styleInspector.hidden) renderStyleInspector(initializeVisualEditorArgument4)
                        },
                        hideContextMenu = function() {
                            if (contextMenu) {
                                contextMenu[styleProperty][displayProperty] = noneValue;
                                contextMenu[setAttributeMethod]('aria-hidden', 'true')
                            }
                        },
                        getMediaTarget = function(initializeVisualEditorArgument6) {
                            for (var initializeVisualEditorValue7 = initializeVisualEditorArgument6; initializeVisualEditorValue7 && initializeVisualEditorValue7 != callbackValue127.body; initializeVisualEditorValue7 = initializeVisualEditorValue7[parentNodeProperty]) {
                                if (initializeVisualEditorValue7.realNode) initializeVisualEditorValue7 = initializeVisualEditorValue7.realNode;
                                if (initializeVisualEditorValue7[tagNameProperty] && (initializeVisualEditorValue7[tagNameProperty][toLowerCaseMethod]() == imageTagName || initializeVisualEditorValue7[tagNameProperty][toLowerCaseMethod]() == 'svg')) return initializeVisualEditorValue7
                            }
                            return null
                        },
                        isMediaTarget = function(initializeVisualEditorArgument7) {
                            return !!getMediaTarget(initializeVisualEditorArgument7)
                        },
                        showMediaReplaceError = function() {
                            callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bq') || 'Не удалось заменить изображение';
                            callbackValue9[classNameProperty] = 'd';
                            fadeIn(callbackValue9)
                        },
                        sanitizeInlineSvg = function(initializeVisualEditorArgument7) {
                            var initializeVisualEditorValue8 = new DOMParser()[parseFromStringMethod](initializeVisualEditorArgument7, 'image/svg+xml'),
                                initializeVisualEditorValue9 = initializeVisualEditorValue8[documentElementProperty];
                            if (!initializeVisualEditorValue9 || initializeVisualEditorValue9[tagNameProperty][toLowerCaseMethod]() != 'svg' || initializeVisualEditorValue8[querySelectorMethod]('parsererror')) return false;
                            var initializeVisualEditorValue10 = [initializeVisualEditorValue9];
                            Array.prototype.push.apply(initializeVisualEditorValue10, initializeVisualEditorValue9[querySelectorAllMethod]('*'));
                            for (var initializeVisualEditorValue11 = 0, initializeVisualEditorValue12 = initializeVisualEditorValue10[lengthProperty]; initializeVisualEditorValue11 < initializeVisualEditorValue12; initializeVisualEditorValue11++) {
                                var initializeVisualEditorValue13 = initializeVisualEditorValue10[initializeVisualEditorValue11];
                                if (initializeVisualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'script' || initializeVisualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'foreignobject' || initializeVisualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'iframe' || initializeVisualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'object' || initializeVisualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'embed' || initializeVisualEditorValue13[tagNameProperty][toLowerCaseMethod]() == 'style') {
                                    if (initializeVisualEditorValue13[parentNodeProperty]) initializeVisualEditorValue13[parentNodeProperty][removeChildMethod](initializeVisualEditorValue13);
                                    continue
                                }
                                for (var initializeVisualEditorValue14 = initializeVisualEditorValue13.attributes[lengthProperty] - 1; initializeVisualEditorValue14 >= 0; initializeVisualEditorValue14--) {
                                    var initializeVisualEditorValue15 = initializeVisualEditorValue13.attributes[initializeVisualEditorValue14],
                                        initializeVisualEditorValue16 = initializeVisualEditorValue15.name[toLowerCaseMethod](),
                                        initializeVisualEditorValue17 = initializeVisualEditorValue15.value;
                                    if (initializeVisualEditorValue16[indexOfMethod]('on') === 0 || (initializeVisualEditorValue16 == 'href' || initializeVisualEditorValue16 == 'xlink:href' || initializeVisualEditorValue16 == 'src') && /^(?:javascript|vbscript):/i.test(initializeVisualEditorValue17) || initializeVisualEditorValue16 == 'style' && /(?:javascript|expression)\s*:|url\s*\(\s*(?:javascript|data:text\/html)/i.test(initializeVisualEditorValue17)) initializeVisualEditorValue13[removeAttributeMethod](initializeVisualEditorValue15.name)
                                }
                            }
                            return new XMLSerializer()[serializeToStringMethod](initializeVisualEditorValue9)
                        },
                        replaceInlineSvg = function(initializeVisualEditorArgument8, initializeVisualEditorArgument9) {
                            var initializeVisualEditorValue18 = new FileReader();
                            initializeVisualEditorValue18.onload = function() {
                                var initializeVisualEditorValue19 = sanitizeInlineSvg(this.result);
                                if (!initializeVisualEditorValue19) {
                                    showMediaReplaceError();
                                    return
                                }
                                var initializeVisualEditorValue20 = getStyleSourceRange(initializeVisualEditorArgument8),
                                    initializeVisualEditorValue21 = initializeVisualEditorArgument8[parentNodeProperty];
                                if (!initializeVisualEditorValue20 || !initializeVisualEditorValue21) {
                                    showMediaReplaceError();
                                    return
                                }
                                var initializeVisualEditorValue22 = callbackValue127[createElementMethod]('div');
                                initializeVisualEditorValue22[innerHTMLProperty] = initializeVisualEditorValue19;
                                var initializeVisualEditorValue23 = initializeVisualEditorValue22[firstElementChildProperty];
                                if (!initializeVisualEditorValue23 || initializeVisualEditorValue23[tagNameProperty][toLowerCaseMethod]() != 'svg') {
                                    showMediaReplaceError();
                                    return
                                }
                                initializeVisualEditorValue21[replaceChildMethod](initializeVisualEditorValue23, initializeVisualEditorArgument8);
                                serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorValue20[0]) + initializeVisualEditorValue19 + serializedSource[sliceMethod](initializeVisualEditorValue20[1]);
                                callbackValue11[innerHTMLProperty] = serializedSource;
                                callbackValue4[disabledProperty] = false;
                                mediaPickerTarget = initializeVisualEditorValue23;
                                callbackValue106.call(initializeVisualEditorValue23);
                                callbackValue75();
                                callbackValue4[disabledProperty] = false
                            };
                            initializeVisualEditorValue18.onerror = showMediaReplaceError;
                            initializeVisualEditorValue18.readAsText(initializeVisualEditorArgument9)
                        },
                        replaceMediaFile = function(initializeVisualEditorArgument10, initializeVisualEditorArgument11) {
                            var initializeVisualEditorValue24 = initializeVisualEditorArgument10[tagNameProperty][toLowerCaseMethod]();
                            if (initializeVisualEditorValue24 == imageTagName) callbackValue114.call(initializeVisualEditorArgument10, {preventDefault: function() {}, dataTransfer: {files: [initializeVisualEditorArgument11], types: ['Files']}});
                            else if (initializeVisualEditorValue24 == 'svg') replaceInlineSvg(initializeVisualEditorArgument10, initializeVisualEditorArgument11)
                        },
                        openMediaPicker = function(initializeVisualEditorArgument12) {
                            if (!isMediaTarget(initializeVisualEditorArgument12)) return;
                            if (!mediaPicker) {
                                mediaPicker = documentObject[createElementMethod]('input');
                                mediaPicker.type = 'file';
                                mediaPicker.hidden = true;
                                mediaPicker[setAttributeMethod]('aria-hidden', 'true');
                                mediaPicker[addEventListenerMethod](changeEvent, function() {
                                    var initializeVisualEditorValue25 = this.files && this.files[0];
                                    this.value = '';
                                    if (initializeVisualEditorValue25 && mediaPickerTarget) replaceMediaFile(mediaPickerTarget, initializeVisualEditorValue25)
                                });
                                documentObject.body[appendChildMethod](mediaPicker)
                            }
                            mediaPickerTarget = initializeVisualEditorArgument12;
                            mediaPicker.accept = initializeVisualEditorArgument12[tagNameProperty][toLowerCaseMethod]() == 'svg' ? 'image/svg+xml,.svg' : 'image/*,.svg';
                            mediaPicker.click()
                        },
                        createStyleInspector = function() {
                            if (styleInspector) return styleInspector;
                            var initializeVisualEditorValue8 = callbackValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '',
                                initializeVisualEditorValue9 = /[А-Яа-яЁё]/.test(initializeVisualEditorValue8),
                                initializeVisualEditorValue10 = initializeVisualEditorValue9 ? {
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
                                    borderRadius: 'Скругление'
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
                                    borderRadius: 'Border radius'
                                },
                                initializeVisualEditorValue11 = function(initializeVisualEditorArgument1, initializeVisualEditorArgument2) {
                                    var initializeVisualEditorValue12 = documentObject[createElementMethod]('label'),
                                        initializeVisualEditorValue13 = documentObject[createElementMethod]('span'),
                                        initializeVisualEditorValue14 = documentObject[createElementMethod](initializeVisualEditorArgument2 ? 'select' : 'input');
                                    initializeVisualEditorValue13[textContentProperty] = initializeVisualEditorArgument1.label;
                                    initializeVisualEditorValue14[setAttributeMethod]('data-myvibehtml-style-property', initializeVisualEditorArgument1.property);
                                    initializeVisualEditorValue14[classNameProperty] = 'myvibehtml-style-field';
                                    initializeVisualEditorValue14[setAttributeMethod]('aria-label', initializeVisualEditorArgument1.label);
                                    if (!initializeVisualEditorArgument2) {
                                        initializeVisualEditorValue14.type = 'text';
                                        initializeVisualEditorValue14[setAttributeMethod]('spellcheck', 'false');
                                    } else for (var initializeVisualEditorValue15 = 0, initializeVisualEditorValue16 = initializeVisualEditorArgument2[lengthProperty]; initializeVisualEditorValue15 < initializeVisualEditorValue16; initializeVisualEditorValue15++) {
                                        var initializeVisualEditorValue17 = documentObject[createElementMethod]('option');
                                        initializeVisualEditorValue17.value = initializeVisualEditorArgument2[initializeVisualEditorValue15];
                                        initializeVisualEditorValue17[textContentProperty] = initializeVisualEditorArgument2[initializeVisualEditorValue15];
                                        initializeVisualEditorValue14[appendChildMethod](initializeVisualEditorValue17)
                                    }
                                    initializeVisualEditorValue14[addEventListenerMethod](initializeVisualEditorArgument2 ? 'change' : inputEvent, function() {
                                        applyStyleProperty.call(this)
                                    });
                                    initializeVisualEditorValue12[appendChildMethod](initializeVisualEditorValue13);
                                    initializeVisualEditorValue12[appendChildMethod](initializeVisualEditorValue14);
                                    return initializeVisualEditorValue12
                                },
                                initializeVisualEditorValue18 = [
                                    {title: initializeVisualEditorValue10.layout, fields: [
                                        {property: 'display', label: initializeVisualEditorValue10.display, options: ['block', 'inline', 'inline-block', 'flex', 'grid', 'none']},
                                        {property: 'width', label: initializeVisualEditorValue10.width},
                                        {property: 'height', label: initializeVisualEditorValue10.height}
                                    ]},
                                    {title: initializeVisualEditorValue10.spacing, fields: [
                                        {property: 'margin', label: initializeVisualEditorValue10.margin},
                                        {property: 'padding', label: initializeVisualEditorValue10.padding},
                                        {property: 'gap', label: initializeVisualEditorValue10.gap}
                                    ]},
                                    {title: initializeVisualEditorValue10.typography, fields: [
                                        {property: 'font-size', label: initializeVisualEditorValue10.fontSize},
                                        {property: 'font-weight', label: initializeVisualEditorValue10.fontWeight, options: ['400', '500', '600', '700']},
                                        {property: 'line-height', label: initializeVisualEditorValue10.lineHeight},
                                        {property: 'text-align', label: initializeVisualEditorValue10.textAlign, options: ['left', 'center', 'right', 'justify', 'start', 'end']}
                                    ]},
                                    {title: initializeVisualEditorValue10.surface, fields: [
                                        {property: 'color', label: initializeVisualEditorValue10.color},
                                        {property: 'background-color', label: initializeVisualEditorValue10.backgroundColor},
                                        {property: 'border-radius', label: initializeVisualEditorValue10.borderRadius}
                                    ]}
                                ];
                            styleInspector = documentObject[createElementMethod]('aside');
                            styleInspector.id = 'myvibehtml-style-inspector';
                            styleInspector[setAttributeMethod]('role', 'dialog');
                            styleInspector[setAttributeMethod]('aria-modal', 'false');
                            styleInspector[setAttributeMethod]('aria-hidden', 'true');
                            styleInspector.hidden = true;
                            var initializeVisualEditorValue19 = documentObject[createElementMethod]('div'),
                                initializeVisualEditorValue20 = documentObject[createElementMethod]('div'),
                                initializeVisualEditorValue21 = documentObject[createElementMethod]('h2'),
                                initializeVisualEditorValue22 = documentObject[createElementMethod]('button'),
                                initializeVisualEditorValue23 = documentObject[createElementMethod]('p'),
                                initializeVisualEditorValue24 = documentObject[createElementMethod]('p'),
                                initializeVisualEditorValue25 = documentObject[createElementMethod]('form'),
                                initializeVisualEditorValue26 = documentObject[createElementMethod]('div'),
                                initializeVisualEditorValue27 = documentObject[createElementMethod]('button');
                            initializeVisualEditorValue19[classNameProperty] = 'myvibehtml-style-inspector-header';
                            initializeVisualEditorValue20[classNameProperty] = 'myvibehtml-style-inspector-heading';
                            initializeVisualEditorValue21.id = 'myvibehtml-style-inspector-title';
                            initializeVisualEditorValue21[textContentProperty] = initializeVisualEditorValue10.title;
                            initializeVisualEditorValue22.type = 'button';
                            initializeVisualEditorValue22[textContentProperty] = initializeVisualEditorValue10.close;
                            initializeVisualEditorValue22[classNameProperty] = 'myvibehtml-style-inspector-close';
                            initializeVisualEditorValue22[addEventListenerMethod](clickEvent, closeStyleInspector);
                            initializeVisualEditorValue23[classNameProperty] = 'myvibehtml-style-inspector-hint';
                            initializeVisualEditorValue23[textContentProperty] = initializeVisualEditorValue10.hint;
                            initializeVisualEditorValue24[classNameProperty] = 'myvibehtml-style-inspector-target';
                            initializeVisualEditorValue24[setAttributeMethod]('data-myvibehtml-style-target', '');
                            initializeVisualEditorValue25[setAttributeMethod]('novalidate', 'novalidate');
                            for (var initializeVisualEditorValue28 = 0, initializeVisualEditorValue29 = initializeVisualEditorValue18[lengthProperty]; initializeVisualEditorValue28 < initializeVisualEditorValue29; initializeVisualEditorValue28++) {
                                var initializeVisualEditorValue30 = documentObject[createElementMethod]('fieldset'),
                                    initializeVisualEditorValue31 = documentObject[createElementMethod]('legend'),
                                    initializeVisualEditorValue32 = documentObject[createElementMethod]('div');
                                initializeVisualEditorValue31[textContentProperty] = initializeVisualEditorValue18[initializeVisualEditorValue28].title;
                                initializeVisualEditorValue32[classNameProperty] = 'myvibehtml-style-grid';
                                for (var initializeVisualEditorValue33 = 0, initializeVisualEditorValue34 = initializeVisualEditorValue18[initializeVisualEditorValue28].fields[lengthProperty]; initializeVisualEditorValue33 < initializeVisualEditorValue34; initializeVisualEditorValue33++) initializeVisualEditorValue32[appendChildMethod](initializeVisualEditorValue11(initializeVisualEditorValue18[initializeVisualEditorValue28].fields[initializeVisualEditorValue33], initializeVisualEditorValue18[initializeVisualEditorValue28].fields[initializeVisualEditorValue33].options));
                                initializeVisualEditorValue30[appendChildMethod](initializeVisualEditorValue31);
                                initializeVisualEditorValue30[appendChildMethod](initializeVisualEditorValue32);
                                initializeVisualEditorValue25[appendChildMethod](initializeVisualEditorValue30)
                            }
                            styleInspectorError = documentObject[createElementMethod]('p');
                            styleInspectorError[classNameProperty] = 'myvibehtml-style-inspector-error';
                            styleInspectorError[textContentProperty] = initializeVisualEditorValue10.invalid;
                            styleInspectorError.hidden = true;
                            initializeVisualEditorValue26[classNameProperty] = 'myvibehtml-style-inspector-footer';
                            initializeVisualEditorValue27.type = 'button';
                            initializeVisualEditorValue27[textContentProperty] = initializeVisualEditorValue10.reset;
                            initializeVisualEditorValue27[classNameProperty] = 'myvibehtml-style-inspector-reset';
                            initializeVisualEditorValue27[addEventListenerMethod](clickEvent, resetStyleInspector);
                            initializeVisualEditorValue20[appendChildMethod](initializeVisualEditorValue21);
                            initializeVisualEditorValue19[appendChildMethod](initializeVisualEditorValue20);
                            initializeVisualEditorValue19[appendChildMethod](initializeVisualEditorValue22);
                            styleInspector[appendChildMethod](initializeVisualEditorValue19);
                            styleInspector[appendChildMethod](initializeVisualEditorValue23);
                            styleInspector[appendChildMethod](initializeVisualEditorValue24);
                            styleInspector[appendChildMethod](initializeVisualEditorValue25);
                            styleInspectorFields = styleInspector[querySelectorAllMethod]('[data-myvibehtml-style-property]');
                            styleInspector[appendChildMethod](styleInspectorError);
                            initializeVisualEditorValue26[appendChildMethod](initializeVisualEditorValue27);
                            styleInspector[appendChildMethod](initializeVisualEditorValue26);
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
                            if (sourceMapState) {
                                var sourceMapRange = sourceMapState.rangeFor(initializeVisualEditorArgument2);
                                if (sourceMapRange) return sourceMapRange;
                            }
                            var initializeVisualEditorValue34 = callbackValue93(initializeVisualEditorArgument2),
                                initializeVisualEditorValue35 = callbackValue94(initializeVisualEditorArgument2);
                            if (typeof initializeVisualEditorValue34 == 'number' && serializedSource[initializeVisualEditorValue34] != '<') {
                                var initializeVisualEditorValue36 = serializedSource[lastIndexOfMethod]('<', initializeVisualEditorValue34);
                                if (initializeVisualEditorValue36 >= 0) initializeVisualEditorValue34 = initializeVisualEditorValue36
                            }
                            if (typeof initializeVisualEditorValue34 == 'number' && typeof initializeVisualEditorValue35 != 'number') {
                                var initializeVisualEditorValue37 = initializeVisualEditorArgument2[tagNameProperty][toLowerCaseMethod](),
                                    initializeVisualEditorValue38 = '</' + initializeVisualEditorValue37 + '>',
                                    initializeVisualEditorValue39 = serializedSource[indexOfMethod](initializeVisualEditorValue38, initializeVisualEditorValue34);
                                if (initializeVisualEditorValue39 >= initializeVisualEditorValue34) {
                                    initializeVisualEditorValue35 = initializeVisualEditorValue39 + initializeVisualEditorValue38[lengthProperty]
                                }
                            }
                            if (typeof initializeVisualEditorValue34 != 'number' || typeof initializeVisualEditorValue35 != 'number' || initializeVisualEditorValue35 <= initializeVisualEditorValue34) return null;
                            return [initializeVisualEditorValue34, initializeVisualEditorValue35]
                        },
                        escapeStyleAttribute = function(initializeVisualEditorArgument3) {
                            return initializeVisualEditorArgument3[splitMethod]('&')[joinMethod]('&amp;')[splitMethod]('"')[joinMethod]('&quot;')[splitMethod]('<')[joinMethod]('&lt;')[splitMethod]('>')[joinMethod]('&gt;')
                        },
                        findOpeningTagEnd = function(initializeVisualEditorArgument4) {
                            for (var initializeVisualEditorValue36 = '', initializeVisualEditorValue37 = 0, initializeVisualEditorValue38 = initializeVisualEditorArgument4[lengthProperty]; initializeVisualEditorValue37 < initializeVisualEditorValue38; initializeVisualEditorValue37++) {
                                var initializeVisualEditorValue39 = initializeVisualEditorArgument4[initializeVisualEditorValue37];
                                if (initializeVisualEditorValue36) {
                                    if (initializeVisualEditorValue39 == initializeVisualEditorValue36) initializeVisualEditorValue36 = ''
                                } else if (initializeVisualEditorValue39 == '"' || initializeVisualEditorValue39 == "'") initializeVisualEditorValue36 = initializeVisualEditorValue39;
                                else if (initializeVisualEditorValue39 == '>') return initializeVisualEditorValue37 + 1
                            }
                            return -1
                        },
                        syncStyleSource = function(initializeVisualEditorArgument5, initializeVisualEditorArgument6, initializeVisualEditorArgument7, initializeVisualEditorArgument8) {
                            var initializeVisualEditorValue40 = serializedSource[sliceMethod](initializeVisualEditorArgument6, initializeVisualEditorArgument7),
                                initializeVisualEditorValue41 = findOpeningTagEnd(initializeVisualEditorValue40);
                            if (initializeVisualEditorValue41 < 0) return false;
                            var initializeVisualEditorValue42 = initializeVisualEditorValue40[sliceMethod](0, initializeVisualEditorValue41),
                                initializeVisualEditorValue43 = /\sstyle\s*=\s*(?:"([\s\S]*?)"|'([\s\S]*?)'|([^\s>]+))/i,
                                initializeVisualEditorValue44 = initializeVisualEditorValue42[matchMethod](initializeVisualEditorValue43);
                            if (initializeVisualEditorArgument8) {
                                if (initializeVisualEditorValue44) initializeVisualEditorValue42 = initializeVisualEditorValue42[replaceMethod](initializeVisualEditorValue43, ' style="' + escapeStyleAttribute(initializeVisualEditorArgument8) + '"');
                                else {
                                    var initializeVisualEditorValue45 = initializeVisualEditorValue42[lengthProperty] - 1;
                                    if (initializeVisualEditorValue42[initializeVisualEditorValue45 - 1] == '/') initializeVisualEditorValue45--;
                                    initializeVisualEditorValue42 = initializeVisualEditorValue42[sliceMethod](0, initializeVisualEditorValue45) + ' style="' + escapeStyleAttribute(initializeVisualEditorArgument8) + '"' + initializeVisualEditorValue42[sliceMethod](initializeVisualEditorValue45)
                                }
                            } else if (initializeVisualEditorValue44) initializeVisualEditorValue42 = initializeVisualEditorValue42[replaceMethod](initializeVisualEditorValue43, '');
                            serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorArgument6) + initializeVisualEditorValue42 + initializeVisualEditorValue40[sliceMethod](initializeVisualEditorValue41) + serializedSource[sliceMethod](initializeVisualEditorArgument7);
                            if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, callbackValue127);
                            callbackValue11[innerHTMLProperty] = serializedSource;
                            callbackValue4[disabledProperty] = false;
                            return true
                        },
                        isValidStyleValue = function(initializeVisualEditorArgument9, initializeVisualEditorArgument10) {
                            if (!initializeVisualEditorArgument10) return '';
                            if (initializeVisualEditorArgument10[lengthProperty] > 180 || /[{}<>;]/.test(initializeVisualEditorArgument10) || /(?:javascript|expression|url)\s*\(/i.test(initializeVisualEditorArgument10)) return null;
                            try {
                                if (!windowObject.CSS || !windowObject.CSS.supports || !windowObject.CSS.supports(initializeVisualEditorArgument9, initializeVisualEditorArgument10)) return null
                            } catch (initializeVisualEditorValue46) {
                                return null
                            }
                            return initializeVisualEditorArgument10
                        },
                        applyStyleProperty = function() {
                            if (!styleInspectorTarget) return;
                            var initializeVisualEditorValue47 = this[getAttributeMethod]('data-myvibehtml-style-property'),
                                initializeVisualEditorValue48 = isValidStyleValue(initializeVisualEditorValue47, this[valueProperty][replaceMethod](/^\s+|\s+$/g, ''));
                            if (initializeVisualEditorValue48 === null) {
                                this[setAttributeMethod]('aria-invalid', 'true');
                                styleInspectorError.hidden = false;
                                return
                            }
                            var initializeVisualEditorValue49 = styleInspectorTarget[getAttributeMethod]('style'),
                                initializeVisualEditorValue50 = getStyleSourceRange(styleInspectorTarget);
                            if (!initializeVisualEditorValue50) return;
                            if (initializeVisualEditorValue48) styleInspectorTarget[styleProperty].setProperty(initializeVisualEditorValue47, initializeVisualEditorValue48);
                            else styleInspectorTarget[styleProperty].removeProperty(initializeVisualEditorValue47);
                            var initializeVisualEditorValue51 = styleInspectorTarget[getAttributeMethod]('style') || '',
                                initializeVisualEditorValue52 = syncStyleSource(styleInspectorTarget, initializeVisualEditorValue50[0], initializeVisualEditorValue50[1], initializeVisualEditorValue51);
                            if (!initializeVisualEditorValue52) {
                                if (initializeVisualEditorValue49 === null) styleInspectorTarget[removeAttributeMethod]('style');
                                else styleInspectorTarget[setAttributeMethod]('style', initializeVisualEditorValue49);
                                return
                            }
                            this[removeAttributeMethod]('aria-invalid');
                            styleInspectorError.hidden = true
                        },
                        renderStyleInspector = function(initializeVisualEditorArgument11) {
                            if (!initializeVisualEditorArgument11 || initializeVisualEditorArgument11 == callbackValue127.body) return;
                            createStyleInspector();
                            styleInspectorTarget = initializeVisualEditorArgument11;
                            var initializeVisualEditorValue53 = initializeVisualEditorArgument11[ownerDocumentProperty] && initializeVisualEditorArgument11[ownerDocumentProperty].defaultView ? initializeVisualEditorArgument11[ownerDocumentProperty].defaultView[getComputedStyleMethod](initializeVisualEditorArgument11) : callbackValue126[contentWindowProperty][getComputedStyleMethod](initializeVisualEditorArgument11),
                                initializeVisualEditorValue54 = initializeVisualEditorArgument11[tagNameProperty][toLowerCaseMethod](),
                                initializeVisualEditorValue55 = initializeVisualEditorArgument11.id ? '#' + initializeVisualEditorArgument11.id : '',
                                initializeVisualEditorValue56 = initializeVisualEditorArgument11.className && typeof initializeVisualEditorArgument11.className == 'string' ? '.' + initializeVisualEditorArgument11.className[replaceMethod](/\s+/g, '.') : '';
                            styleInspector[querySelectorMethod]('[data-myvibehtml-style-target]')[textContentProperty] = '<' + initializeVisualEditorValue54 + initializeVisualEditorValue55 + initializeVisualEditorValue56 + '>';
                            for (var initializeVisualEditorValue57 = 0, initializeVisualEditorValue58 = styleInspectorFields[lengthProperty]; initializeVisualEditorValue57 < initializeVisualEditorValue58; initializeVisualEditorValue57++) {
                                var initializeVisualEditorValue59 = styleInspectorFields[initializeVisualEditorValue57],
                                    initializeVisualEditorValue60 = initializeVisualEditorValue59[getAttributeMethod]('data-myvibehtml-style-property'),
                                initializeVisualEditorValue61 = initializeVisualEditorArgument11[styleProperty].getPropertyValue(initializeVisualEditorValue60) || initializeVisualEditorValue53.getPropertyValue(initializeVisualEditorValue60) || '';
                                if (initializeVisualEditorValue59[tagNameProperty][toLowerCaseMethod]() == 'select' && initializeVisualEditorValue61) {
                                    var initializeVisualEditorValue62 = false;
                                    for (var initializeVisualEditorValue63 = 0, initializeVisualEditorValue64 = initializeVisualEditorValue59.options[lengthProperty]; initializeVisualEditorValue63 < initializeVisualEditorValue64; initializeVisualEditorValue63++) if (initializeVisualEditorValue59.options[initializeVisualEditorValue63].value == initializeVisualEditorValue61) initializeVisualEditorValue62 = true;
                                    if (!initializeVisualEditorValue62) {
                                        var initializeVisualEditorValue65 = documentObject[createElementMethod]('option');
                                        initializeVisualEditorValue65.value = initializeVisualEditorValue61;
                                        initializeVisualEditorValue65[textContentProperty] = initializeVisualEditorValue61;
                                        initializeVisualEditorValue59[appendChildMethod](initializeVisualEditorValue65)
                                    }
                                }
                                initializeVisualEditorValue59[valueProperty] = initializeVisualEditorValue61;
                                initializeVisualEditorValue59[removeAttributeMethod]('aria-invalid')
                            }
                            styleInspectorError.hidden = true;
                            styleInspector.hidden = false;
                            styleInspector[setAttributeMethod]('aria-hidden', 'false')
                        },
                        resetStyleInspector = function() {
                            if (!styleInspectorTarget) return;
                            var initializeVisualEditorValue62 = styleInspectorTarget[getAttributeMethod]('style'),
                                initializeVisualEditorValue63 = getStyleSourceRange(styleInspectorTarget);
                            if (!initializeVisualEditorValue63) return;
                            styleInspectorTarget[removeAttributeMethod]('style');
                            if (!syncStyleSource(styleInspectorTarget, initializeVisualEditorValue63[0], initializeVisualEditorValue63[1], '')) renderStyleInspector(styleInspectorTarget), styleInspectorTarget[setAttributeMethod]('style', initializeVisualEditorValue62 || '');
                            else renderStyleInspector(styleInspectorTarget)
                        },
                        createContextMenu = function() {
                            if (contextMenu) return contextMenu;
                            contextMenu = documentObject[createElementMethod]('div');
                            contextMenu.id = 'myvibehtml-context-menu';
                            contextMenu[setAttributeMethod]('role', 'menu');
                            contextMenu[setAttributeMethod]('aria-label', callbackValue9[getAttributeMethod]('data-context-menu') || 'Element actions');
                            var initializeVisualEditorValue8 = [['element', callbackValue9[getAttributeMethod]('data-select-element') || 'Select element'], ['section', callbackValue9[getAttributeMethod]('data-select-section') || 'Select section'], ['block', callbackValue9[getAttributeMethod]('data-select-block') || 'Select block']];
                            for (var initializeVisualEditorValue9 = 0, initializeVisualEditorValue10 = initializeVisualEditorValue8[lengthProperty]; initializeVisualEditorValue9 < initializeVisualEditorValue10; initializeVisualEditorValue9++) {
                                var initializeVisualEditorValue11 = documentObject[createElementMethod]('button');
                                initializeVisualEditorValue11.type = 'button';
                                initializeVisualEditorValue11[setAttributeMethod]('role', 'menuitem');
                                initializeVisualEditorValue11.action = initializeVisualEditorValue8[initializeVisualEditorValue9][0];
                                initializeVisualEditorValue11[textContentProperty] = initializeVisualEditorValue8[initializeVisualEditorValue9][1];
                                initializeVisualEditorValue11[addEventListenerMethod](clickEvent, function() {
                                    var createContextMenuValue1 = this.action == 'section' ? getSectionNode(contextTarget) : this.action == 'block' ? getBlockNode(contextTarget) : contextTarget;
                                    selectContextNode(createContextMenuValue1, this.action);
                                    hideContextMenu()
                                });
                                contextMenu[appendChildMethod](initializeVisualEditorValue11)
                            }
                            var initializeVisualEditorValue12 = documentObject[createElementMethod]('div');
                            initializeVisualEditorValue12[classNameProperty] = 'myvibehtml-context-divider';
                            contextMenu[appendChildMethod](initializeVisualEditorValue12);
                            var initializeVisualEditorValue13 = [['style', /[А-Яа-яЁё]/.test(callbackValue9[getAttributeMethod](dataAttributePrefix + 'context-menu') || '') ? 'Изменить CSS' : 'Edit CSS', null], ['media', callbackValue9[getAttributeMethod]('data-context-media') || 'Replace image/icon', null], ['clone', callbackValue9[getAttributeMethod]('data-context-copy') || 'Clone', callbackValue89], ['up', callbackValue9[getAttributeMethod]('data-context-up') || 'Move up', callbackValue90], ['down', callbackValue9[getAttributeMethod]('data-context-down') || 'Move down', callbackValue91], ['delete', callbackValue9[getAttributeMethod]('data-context-delete') || 'Delete', callbackValue92]];
                            for (var initializeVisualEditorValue14 = 0, initializeVisualEditorValue15 = initializeVisualEditorValue13[lengthProperty]; initializeVisualEditorValue14 < initializeVisualEditorValue15; initializeVisualEditorValue14++) {
                                var initializeVisualEditorValue16 = documentObject[createElementMethod]('button');
                                initializeVisualEditorValue16.type = 'button';
                                initializeVisualEditorValue16[setAttributeMethod]('role', 'menuitem');
                                initializeVisualEditorValue16[classNameProperty] = 'myvibehtml-context-action';
                                initializeVisualEditorValue16.action = initializeVisualEditorValue13[initializeVisualEditorValue14][0];
                                if (initializeVisualEditorValue16.action == 'media') initializeVisualEditorValue16[setAttributeMethod]('data-myvibehtml-media-action', 'true');
                                initializeVisualEditorValue16.handler = initializeVisualEditorValue13[initializeVisualEditorValue14][2];
                                initializeVisualEditorValue16[textContentProperty] = initializeVisualEditorValue13[initializeVisualEditorValue14][1];
                                initializeVisualEditorValue16[addEventListenerMethod](clickEvent, function() {
                                    if (this.action == 'style') {
                                        var initializeVisualEditorValue17 = contextTarget && contextTarget[tagNameProperty][toLowerCaseMethod]() == 'edit' ? contextTarget[parentNodeProperty] : contextTarget;
                                        selectContextNode(initializeVisualEditorValue17, 'element');
                                        renderStyleInspector(initializeVisualEditorValue17);
                                        hideContextMenu();
                                        return
                                    }
                                    if (this.action == 'media') {
                                        var initializeVisualEditorValue18 = getMediaTarget(contextTarget);
                                        if (!initializeVisualEditorValue18) return;
                                        selectContextNode(initializeVisualEditorValue18, 'element');
                                        hideContextMenu();
                                        openMediaPicker(initializeVisualEditorValue18);
                                        return
                                    }
                                    selectContextNode(contextTarget, 'element');
                                    if (this.handler) this.handler.call(this);
                                    hideContextMenu()
                                });
                                contextMenu[appendChildMethod](initializeVisualEditorValue16)
                            }
                            contextMenu[styleProperty][displayProperty] = noneValue;
                            documentObject.body[appendChildMethod](contextMenu);
                            documentObject[addEventListenerMethod](clickEvent, function(event) {
                                if (event.target != contextMenu && !contextMenu.contains(event.target)) hideContextMenu()
                            });
                            return contextMenu
                        },
                        showContextMenu = function(event) {
                            var initializeVisualEditorValue12 = getContextNode(event.target);
                            if (!initializeVisualEditorValue12) return;
                            event[preventDefaultMethod]();
                            event[stopPropagationMethod]();
                            contextTarget = initializeVisualEditorValue12;
                            var initializeVisualEditorValue13 = createContextMenu(),
                                initializeVisualEditorValue14 = callbackValue126.getBoundingClientRect(),
                                initializeVisualEditorValue15 = initializeVisualEditorValue14.left + event.clientX,
                                initializeVisualEditorValue16 = initializeVisualEditorValue14.top + event.clientY;
                            var initializeVisualEditorValue17 = initializeVisualEditorValue13[querySelectorMethod]('[data-myvibehtml-media-action]');
                            if (initializeVisualEditorValue17) initializeVisualEditorValue17[styleProperty][displayProperty] = isMediaTarget(contextTarget) ? blockValue : noneValue;
                            initializeVisualEditorValue13[styleProperty][displayProperty] = blockValue;
                            initializeVisualEditorValue13[setAttributeMethod]('aria-hidden', 'false');
                            initializeVisualEditorValue15 = Math.max(8, Math.min(initializeVisualEditorValue15, windowObject.innerWidth - initializeVisualEditorValue13.offsetWidth - 8));
                            initializeVisualEditorValue16 = Math.max(8, Math.min(initializeVisualEditorValue16, windowObject.innerHeight - initializeVisualEditorValue13.offsetHeight - 8));
                            initializeVisualEditorValue13[styleProperty].left = initializeVisualEditorValue15 + 'px';
                            initializeVisualEditorValue13[styleProperty].top = initializeVisualEditorValue16 + 'px';
                            initializeVisualEditorValue13[firstElementChildProperty].focus()
                        },
                        callbackValue72 = function(initializeVisualEditorArgument6) {
                            var initializeVisualEditorValue17 = [],
                                initializeVisualEditorValue18 = initializeVisualEditorArgument6[childNodesProperty];
                            for (var initializeVisualEditorValue19 = 0, initializeVisualEditorValue20 = initializeVisualEditorValue18[lengthProperty]; initializeVisualEditorValue19 < initializeVisualEditorValue20; initializeVisualEditorValue19++) {
                                if (initializeVisualEditorValue18[initializeVisualEditorValue19][nodeTypeProperty] == 3 && initializeVisualEditorValue18[initializeVisualEditorValue19][textContentProperty][matchMethod](new RegExp('\\S', 'gi'))) initializeVisualEditorValue17[initializeVisualEditorValue17[lengthProperty]] = initializeVisualEditorValue18[initializeVisualEditorValue19];
                                else if (initializeVisualEditorValue18[initializeVisualEditorValue19][nodeTypeProperty] == 1) {
                                    var initializeVisualEditorValue21 = initializeVisualEditorValue18[initializeVisualEditorValue19][tagNameProperty][toLowerCaseMethod]();
                                    if (initializeVisualEditorValue21 != scriptTagName && initializeVisualEditorValue21 != 'style') Array.prototype.push.apply(initializeVisualEditorValue17, callbackValue72(initializeVisualEditorValue18[initializeVisualEditorValue19]))
                                }
                            }
                            return initializeVisualEditorValue17
                        },
                        callbackValue73 = function(initializeVisualEditorArgument7) {
                            if (windowObject.opera) {
                                var initializeVisualEditorValue22 = initializeVisualEditorArgument7[nextSiblingProperty],
                                    initializeVisualEditorValue23 = initializeVisualEditorArgument7[innerHTMLProperty][splitMethod]('&nbsp;'),
                                    initializeVisualEditorValue24 = initializeVisualEditorArgument7.B[splitMethod]('&nbsp;');
                                if (initializeVisualEditorValue22 && initializeVisualEditorValue22[nodeTypeProperty] == 1 && initializeVisualEditorArgument7[getAttributeMethod](stringAttribute) && initializeVisualEditorValue22[getAttributeMethod](stringAttribute)) {
                                    if (!initializeVisualEditorValue22.B) initializeVisualEditorValue22.B = initializeVisualEditorArgument7.B;
                                    if (initializeVisualEditorArgument7 == callbackValue127[activeElementProperty]) {
                                        initializeVisualEditorValue22[innerHTMLProperty] += '{!caret!}';
                                        callbackValue73(initializeVisualEditorValue22);
                                        initializeVisualEditorArgument7[innerHTMLProperty] += initializeVisualEditorValue22[innerHTMLProperty][splitMethod]('{!caret!}')[joinMethod](caretMarkup + ' ');
                                        initializeVisualEditorArgument7[parentNodeProperty][removeChildMethod](initializeVisualEditorValue22);
                                        var initializeVisualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                        if (initializeVisualEditorValue25[lengthProperty]) {
                                            var initializeVisualEditorValue26 = callbackValue126[contentWindowProperty][getSelectionMethod](),
                                                initializeVisualEditorValue27 = initializeVisualEditorValue25[0][nextSiblingProperty],
                                                initializeVisualEditorValue28 = callbackValue127[createRangeMethod]();
                                            initializeVisualEditorValue28[setStartMethod](initializeVisualEditorValue27, 0);
                                            initializeVisualEditorValue28[setEndMethod](initializeVisualEditorValue27, 0);
                                            initializeVisualEditorValue28[collapseMethod](true);
                                            initializeVisualEditorValue26[removeAllRangesMethod]();
                                            initializeVisualEditorValue27[textContentProperty] = initializeVisualEditorValue27[textContentProperty][sliceMethod](1);
                                            initializeVisualEditorValue25[0][parentNodeProperty][removeChildMethod](initializeVisualEditorValue25[0]);
                                            initializeVisualEditorValue26[addRangeMethod](initializeVisualEditorValue28)
                                        }
                                    } else {
                                        callbackValue73(initializeVisualEditorValue22);
                                        initializeVisualEditorArgument7[innerHTMLProperty] += initializeVisualEditorValue22[innerHTMLProperty];
                                        initializeVisualEditorArgument7[parentNodeProperty][removeChildMethod](initializeVisualEditorValue22)
                                    }
                                } else if (initializeVisualEditorValue22 && initializeVisualEditorValue22[nodeTypeProperty] == 3) {
                                    initializeVisualEditorValue22[textContentProperty] += '{!caret!}';
                                    initializeVisualEditorArgument7[innerHTMLProperty] += initializeVisualEditorValue22[textContentProperty];
                                    initializeVisualEditorArgument7[parentNodeProperty][removeChildMethod](initializeVisualEditorValue22);
                                    callbackValue73(initializeVisualEditorArgument7);
                                    initializeVisualEditorArgument7[innerHTMLProperty] = initializeVisualEditorArgument7[innerHTMLProperty][splitMethod]('{!caret!}')[joinMethod](caretMarkup + ' ');
                                    var initializeVisualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                    if (initializeVisualEditorValue25[lengthProperty]) {
                                        var initializeVisualEditorValue26 = callbackValue126[contentWindowProperty][getSelectionMethod](),
                                            initializeVisualEditorValue27 = initializeVisualEditorValue25[0][nextSiblingProperty],
                                            initializeVisualEditorValue28 = callbackValue127[createRangeMethod]();
                                        initializeVisualEditorValue28[setStartMethod](initializeVisualEditorValue27, 0);
                                        initializeVisualEditorValue28[setEndMethod](initializeVisualEditorValue27, 0);
                                        initializeVisualEditorValue28[collapseMethod](true);
                                        initializeVisualEditorValue26[removeAllRangesMethod]();
                                        initializeVisualEditorValue27[textContentProperty] = initializeVisualEditorValue27[textContentProperty][sliceMethod](1);
                                        initializeVisualEditorValue25[0][parentNodeProperty][removeChildMethod](initializeVisualEditorValue25[0]);
                                        initializeVisualEditorValue26[addRangeMethod](initializeVisualEditorValue28)
                                    }
                                }
                                if ((initializeVisualEditorValue23[0] == '' && initializeVisualEditorValue23[0] != initializeVisualEditorValue24) || (initializeVisualEditorValue23[initializeVisualEditorValue23[lengthProperty] - 1] == '' && initializeVisualEditorValue23[initializeVisualEditorValue23[lengthProperty] - 1] != initializeVisualEditorValue24[initializeVisualEditorValue24[lengthProperty] - 1])) {
                                    var initializeVisualEditorValue26 = callbackValue126[contentWindowProperty][getSelectionMethod](),
                                        initializeVisualEditorValue28 = initializeVisualEditorValue26[getRangeAtMethod](0),
                                        initializeVisualEditorValue25 = documentObject[createElementMethod](caretValue);
                                    initializeVisualEditorValue28[insertNodeMethod](initializeVisualEditorValue25);
                                    initializeVisualEditorArgument7[innerHTMLProperty] = initializeVisualEditorArgument7[innerHTMLProperty][replaceMethod](new RegExp('&nbsp;$', 'gi'), '\n')[splitMethod](caretMarkup)[joinMethod](caretMarkup + ' ');
                                    initializeVisualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                    if (initializeVisualEditorValue25[lengthProperty]) {
                                        var initializeVisualEditorValue27 = initializeVisualEditorValue25[0][nextSiblingProperty],
                                            initializeVisualEditorValue28 = callbackValue127[createRangeMethod]();
                                        initializeVisualEditorValue28[setStartMethod](initializeVisualEditorValue27, 0);
                                        initializeVisualEditorValue28[setEndMethod](initializeVisualEditorValue27, 0);
                                        initializeVisualEditorValue28[collapseMethod](true);
                                        initializeVisualEditorValue26[removeAllRangesMethod]();
                                        initializeVisualEditorValue27[textContentProperty] = initializeVisualEditorValue27[textContentProperty][sliceMethod](1);
                                        initializeVisualEditorValue25[0][parentNodeProperty][removeChildMethod](initializeVisualEditorValue25[0]);
                                        initializeVisualEditorValue26[addRangeMethod](initializeVisualEditorValue28)
                                    }
                                }
                            }
                            if (initializeVisualEditorArgument7[innerHTMLProperty][matchMethod](new RegExp('[<>]', 'gi'))) {
                                var initializeVisualEditorValue26 = callbackValue126[contentWindowProperty][getSelectionMethod](),
                                    initializeVisualEditorValue28 = initializeVisualEditorValue26[getRangeAtMethod](0),
                                    initializeVisualEditorValue25 = documentObject[createElementMethod](caretValue);
                                initializeVisualEditorValue28[insertNodeMethod](initializeVisualEditorValue25);
                                initializeVisualEditorArgument7[innerHTMLProperty] = initializeVisualEditorArgument7[innerHTMLProperty][splitMethod](caretMarkup)[joinMethod]('{!caret!}')[replaceMethod](new RegExp('<.*?>', 'gi'), '')[splitMethod]('{!caret!}')[joinMethod](caretMarkup + ' ');
                                initializeVisualEditorValue25 = initializeVisualEditorArgument7[querySelectorAllMethod](caretValue);
                                if (initializeVisualEditorValue25[lengthProperty]) {
                                    var initializeVisualEditorValue27 = initializeVisualEditorValue25[0][nextSiblingProperty],
                                        initializeVisualEditorValue28 = callbackValue127[createRangeMethod]();
                                    initializeVisualEditorValue28[setStartMethod](initializeVisualEditorValue27, 0);
                                    initializeVisualEditorValue28[setEndMethod](initializeVisualEditorValue27, 0);
                                    initializeVisualEditorValue28[collapseMethod](true);
                                    initializeVisualEditorValue26[removeAllRangesMethod]();
                                    initializeVisualEditorValue27[textContentProperty] = initializeVisualEditorValue27[textContentProperty][sliceMethod](1);
                                    initializeVisualEditorValue25[0][parentNodeProperty][removeChildMethod](initializeVisualEditorValue25[0]);
                                    initializeVisualEditorValue26[addRangeMethod](initializeVisualEditorValue28)
                                }
                            }
                        },
                        callbackValue74 = function(initializeVisualEditorArgument8) {
                            var initializeVisualEditorValue29 = initializeVisualEditorArgument8[querySelectorAllMethod]('[' + stringAttribute + ']');
                            for (var initializeVisualEditorValue30 = 0, initializeVisualEditorValue31 = initializeVisualEditorValue29[lengthProperty]; initializeVisualEditorValue30 < initializeVisualEditorValue31; initializeVisualEditorValue30++) {
                                var initializeVisualEditorValue32 = initializeVisualEditorValue29[initializeVisualEditorValue30][nextElementSiblingProperty];
                                if (initializeVisualEditorValue32 && initializeVisualEditorValue29[initializeVisualEditorValue30][getAttributeMethod](stringAttribute) && initializeVisualEditorValue32[getAttributeMethod](stringAttribute)) {
                                    var initializeVisualEditorValue33 = initializeVisualEditorValue29[initializeVisualEditorValue30][innerHTMLProperty][replaceMethod](new RegExp('^([\\S\\s]+?)\\s*$', 'gi'), '$1'),
                                        initializeVisualEditorValue34 = initializeVisualEditorValue32[innerHTMLProperty];
                                    initializeVisualEditorValue29[initializeVisualEditorValue30][innerHTMLProperty] = initializeVisualEditorValue33 + initializeVisualEditorValue34;
                                    var initializeVisualEditorValue35 = initializeVisualEditorValue29[initializeVisualEditorValue30].B,
                                        initializeVisualEditorValue36 = initializeVisualEditorValue32.B;
                                    if (initializeVisualEditorValue35 || initializeVisualEditorValue36) {
                                        if (!initializeVisualEditorValue35) initializeVisualEditorValue35 = initializeVisualEditorValue33;
                                        else initializeVisualEditorValue35 = initializeVisualEditorValue35[replaceMethod](new RegExp('^([\\S\\s]+?)\\s*$', 'gi'), '$1');
                                        if (!initializeVisualEditorValue36) initializeVisualEditorValue36 = initializeVisualEditorValue34;
                                        initializeVisualEditorValue29[initializeVisualEditorValue30].B = initializeVisualEditorValue35 + initializeVisualEditorValue36
                                    }
                                    initializeVisualEditorValue32[parentNodeProperty][removeChildMethod](initializeVisualEditorValue32)
                                }
                            }
                            callbackValue75()
                        },
                        callbackValue75 = function() {
                            var initializeVisualEditorValue37 = false;
                            if (serializedSource != callbackValue11[innerHTMLProperty]) initializeVisualEditorValue37 = true;
                            else {
                                var initializeVisualEditorValue38 = callbackValue127[querySelectorAllMethod]('[' + stringAttribute + ']'),
                                    initializeVisualEditorValue39 = callbackValue127[querySelectorAllMethod]('[' + attributesAttribute + ']');
                                for (var initializeVisualEditorValue40 = 0, initializeVisualEditorValue41 = initializeVisualEditorValue38[lengthProperty]; initializeVisualEditorValue40 < initializeVisualEditorValue41; initializeVisualEditorValue40++) {
                                    if (initializeVisualEditorValue38[initializeVisualEditorValue40].B && initializeVisualEditorValue38[initializeVisualEditorValue40].B != initializeVisualEditorValue38[initializeVisualEditorValue40][innerHTMLProperty][splitMethod](caretMarkup)[joinMethod]('')) {
                                        initializeVisualEditorValue37 = true;
                                        break
                                    }
                                }
                                for (var initializeVisualEditorValue40 = 0, initializeVisualEditorValue41 = initializeVisualEditorValue39[lengthProperty]; initializeVisualEditorValue40 < initializeVisualEditorValue41; initializeVisualEditorValue40++) {
                                    var initializeVisualEditorValue42 = initializeVisualEditorValue39[initializeVisualEditorValue40].C;
                                    for (var initializeVisualEditorValue43 = 0, initializeVisualEditorValue44 = initializeVisualEditorValue42[lengthProperty]; initializeVisualEditorValue43 < initializeVisualEditorValue44; initializeVisualEditorValue43++) {
                                        for (var initializeVisualEditorValue45 = 0, initializeVisualEditorValue46 = callbackValue70[lengthProperty]; initializeVisualEditorValue45 < initializeVisualEditorValue46; initializeVisualEditorValue45++) {
                                            if (typeof initializeVisualEditorValue42[initializeVisualEditorValue43][valueAttribute + callbackValue70[initializeVisualEditorValue45]] != 'undefined') {
                                                var initializeVisualEditorValue47 = initializeVisualEditorValue42[initializeVisualEditorValue43][valueAttribute + callbackValue70[initializeVisualEditorValue45]];
                                                if (callbackValue70[initializeVisualEditorValue45] == 'href') {
                                                    if (initializeVisualEditorValue47 != initializeVisualEditorValue42[initializeVisualEditorValue43].z) {
                                                        initializeVisualEditorValue37 = true;
                                                        break
                                                    }
                                                } else if (initializeVisualEditorValue47 != initializeVisualEditorValue42[initializeVisualEditorValue43][getAttributeMethod](callbackValue70[initializeVisualEditorValue45])) {
                                                    initializeVisualEditorValue37 = true;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (initializeVisualEditorValue37) {
                                if (callbackValue9[textContentProperty] == callbackValue9[getAttributeMethod](dataAttributePrefix + 'ae')) fadeOut(callbackValue9);
                                callbackValue4[disabledProperty] = false
                            } else if (!callbackValue11[getAttributeMethod](dataAttributePrefix + 'cu')) callbackValue4[disabledProperty] = true
                        },
                        callbackValue76 = function(initializeVisualEditorArgument9, initializeVisualEditorArgument10) {
                            if (!callbackValue78(initializeVisualEditorArgument9, initializeVisualEditorArgument10)) initializeVisualEditorArgument9[classNameProperty] += ' ' + initializeVisualEditorArgument10
                        },
                        callbackValue77 = function(initializeVisualEditorArgument11, initializeVisualEditorArgument12) {
                            if (callbackValue78(initializeVisualEditorArgument11, initializeVisualEditorArgument12)) initializeVisualEditorArgument11[classNameProperty] = ((' ' + initializeVisualEditorArgument11[classNameProperty] + ' ')[replaceMethod](' ' + initializeVisualEditorArgument12 + ' ', ' '))[sliceMethod](1, -1)
                        },
                        callbackValue78 = function(initializeVisualEditorArgument13, initializeVisualEditorArgument14) {
                            if ((' ' + initializeVisualEditorArgument13[classNameProperty] + ' ')[indexOfMethod](' ' + initializeVisualEditorArgument14 + ' ') != -1) return true
                        },
                        callbackValue79 = function() {
                            var initializeVisualEditorValue48 = callbackValue127[querySelectorAllMethod]('[' + stringAttribute + ']'),
                                initializeVisualEditorValue49 = callbackValue127[querySelectorAllMethod]('[' + attributesAttribute + ']');
                            for (var initializeVisualEditorValue50 = 0, initializeVisualEditorValue51 = initializeVisualEditorValue48[lengthProperty]; initializeVisualEditorValue50 < initializeVisualEditorValue51; initializeVisualEditorValue50++) {
                                var initializeVisualEditorValue52 = initializeVisualEditorValue48[initializeVisualEditorValue50].B,
                                    initializeVisualEditorValue53 = initializeVisualEditorValue48[initializeVisualEditorValue50][innerHTMLProperty];
                                if (initializeVisualEditorValue52 && initializeVisualEditorValue52 != initializeVisualEditorValue53) {
                                    var initializeVisualEditorValue54 = callbackValue103('>' + initializeVisualEditorValue52 + '<'),
                                        initializeVisualEditorValue55 = initializeVisualEditorValue54[lengthProperty] - 1;
                                    if (initializeVisualEditorValue55 && sha1(locationObject.hostname[replaceMethod]('www.', ''))) {
                                        if (initializeVisualEditorValue55 == 1) {
                                            serializedSource = initializeVisualEditorValue54[joinMethod]('>' + initializeVisualEditorValue53 + '<');
                                            callbackValue11[innerHTMLProperty] = serializedSource;
                                            initializeVisualEditorValue48[initializeVisualEditorValue50].B = initializeVisualEditorValue53
                                        } else {
                                            var initializeVisualEditorValue56 = callbackValue127[querySelectorAllMethod]('[' + stringAttribute + ']');
                                            for (var initializeVisualEditorValue57 = 0, initializeVisualEditorValue58 = 0, initializeVisualEditorValue59 = false, initializeVisualEditorValue60 = initializeVisualEditorValue56[lengthProperty]; initializeVisualEditorValue57 < initializeVisualEditorValue60; initializeVisualEditorValue57++) {
                                                var initializeVisualEditorValue61 = callbackValue102(initializeVisualEditorValue56[initializeVisualEditorValue57]);
                                                if (initializeVisualEditorValue61 == initializeVisualEditorValue52) {
                                                    if (initializeVisualEditorValue59 === false && initializeVisualEditorValue48[initializeVisualEditorValue50] == initializeVisualEditorValue56[initializeVisualEditorValue57]) initializeVisualEditorValue59 = initializeVisualEditorValue58;
                                                    initializeVisualEditorValue58++
                                                }
                                            }
                                            if (initializeVisualEditorValue54[lengthProperty] == (initializeVisualEditorValue58 + 1) && initializeVisualEditorValue59 !== false) {
                                                for (var initializeVisualEditorValue62 = 0, initializeVisualEditorValue63 = initializeVisualEditorValue54[lengthProperty]; initializeVisualEditorValue62 < initializeVisualEditorValue63; initializeVisualEditorValue62++) {
                                                    if (initializeVisualEditorValue59 == initializeVisualEditorValue62) {
                                                        var initializeVisualEditorValue64 = initializeVisualEditorValue54[sliceMethod](0, initializeVisualEditorValue59 + 1)[joinMethod]('>' + initializeVisualEditorValue52 + '<'),
                                                            initializeVisualEditorValue65 = initializeVisualEditorValue54[sliceMethod](initializeVisualEditorValue59 + 1)[joinMethod]('>' + initializeVisualEditorValue52 + '<');
                                                        serializedSource = initializeVisualEditorValue64 + '>' + initializeVisualEditorValue53 + '<' + initializeVisualEditorValue65;
                                                        callbackValue11[innerHTMLProperty] = serializedSource;
                                                        initializeVisualEditorValue48[initializeVisualEditorValue50].B = initializeVisualEditorValue53
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            for (var initializeVisualEditorValue50 = 0, initializeVisualEditorValue51 = initializeVisualEditorValue49[lengthProperty]; initializeVisualEditorValue50 < initializeVisualEditorValue51; initializeVisualEditorValue50++) {
                                var initializeVisualEditorValue66 = initializeVisualEditorValue49[initializeVisualEditorValue50].C;
                                for (var initializeVisualEditorValue67 = 0, initializeVisualEditorValue68 = initializeVisualEditorValue66[lengthProperty]; initializeVisualEditorValue67 < initializeVisualEditorValue68; initializeVisualEditorValue67++) {
                                    for (var initializeVisualEditorValue69 = 0, initializeVisualEditorValue70 = callbackValue70[lengthProperty]; initializeVisualEditorValue69 < initializeVisualEditorValue70; initializeVisualEditorValue69++) {
                                        if (typeof initializeVisualEditorValue66[initializeVisualEditorValue67][valueAttribute + callbackValue70[initializeVisualEditorValue69]] != 'undefined') {
                                            var initializeVisualEditorValue71 = initializeVisualEditorValue66[initializeVisualEditorValue67][tagNameProperty][toLowerCaseMethod](),
                                                initializeVisualEditorValue72 = initializeVisualEditorValue66[initializeVisualEditorValue67][valueAttribute + callbackValue70[initializeVisualEditorValue69]],
                                                initializeVisualEditorValue73 = initializeVisualEditorValue66[initializeVisualEditorValue67][getAttributeMethod](callbackValue70[initializeVisualEditorValue69]);
                                            if (callbackValue70[initializeVisualEditorValue69] == 'href') initializeVisualEditorValue73 = initializeVisualEditorValue66[initializeVisualEditorValue67].z;
                                            if (initializeVisualEditorValue72 != initializeVisualEditorValue73) {
                                                var initializeVisualEditorValue74 = callbackValue118(initializeVisualEditorValue71, callbackValue70[initializeVisualEditorValue69], initializeVisualEditorValue73),
                                                    initializeVisualEditorValue75 = callbackValue119(initializeVisualEditorValue71, callbackValue70[initializeVisualEditorValue69], initializeVisualEditorValue73),
                                                    initializeVisualEditorValue76 = initializeVisualEditorValue75[indexOfMethod](initializeVisualEditorValue66[initializeVisualEditorValue67]);
                                                if (initializeVisualEditorValue74[lengthProperty] == initializeVisualEditorValue75[lengthProperty] && initializeVisualEditorValue76 !== -1) {
                                                    for (var initializeVisualEditorValue50 = 0, initializeVisualEditorValue77 = serializedSource, initializeVisualEditorValue51 = initializeVisualEditorValue74[lengthProperty]; initializeVisualEditorValue50 < initializeVisualEditorValue51; initializeVisualEditorValue50++) initializeVisualEditorValue77 = initializeVisualEditorValue77[splitMethod](initializeVisualEditorValue74[initializeVisualEditorValue50])[joinMethod]('{-' + initializeVisualEditorValue73 + '-}');
                                                    for (var initializeVisualEditorValue50 = 0, initializeVisualEditorValue78 = initializeVisualEditorValue77[splitMethod]('{-' + initializeVisualEditorValue73 + '-}'), initializeVisualEditorValue77 = initializeVisualEditorValue78[0], initializeVisualEditorValue51 = initializeVisualEditorValue74[lengthProperty]; initializeVisualEditorValue50 < initializeVisualEditorValue51; initializeVisualEditorValue50++) {
                                                        if (initializeVisualEditorValue50 == initializeVisualEditorValue76) {
                                                            var initializeVisualEditorValue79 = initializeVisualEditorValue74[initializeVisualEditorValue50][replaceMethod](new RegExp('^(<' + initializeVisualEditorValue71 + '[^>]+?' + callbackValue70[initializeVisualEditorValue69] + '\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue72 + '$2');
                                                            initializeVisualEditorValue79 = initializeVisualEditorValue79[replaceMethod](new RegExp('^(<' + initializeVisualEditorValue71 + '[^>]+?' + callbackValue70[initializeVisualEditorValue69] + '\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue72 + '$2');
                                                            initializeVisualEditorValue79 = initializeVisualEditorValue79[replaceMethod](new RegExp('^(<' + initializeVisualEditorValue71 + '[^>]+?' + callbackValue70[initializeVisualEditorValue69] + '\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue72 + '$2');
                                                            initializeVisualEditorValue77 = initializeVisualEditorValue77 + initializeVisualEditorValue79 + initializeVisualEditorValue78[initializeVisualEditorValue50 + 1]
                                                        } else initializeVisualEditorValue77 = initializeVisualEditorValue77 + initializeVisualEditorValue74[initializeVisualEditorValue50] + initializeVisualEditorValue78[initializeVisualEditorValue50 + 1]
                                                    }
                                                    serializedSource = initializeVisualEditorValue77;
                                                    callbackValue11[innerHTMLProperty] = serializedSource;
                                                    if (callbackValue70[initializeVisualEditorValue69] == 'href') initializeVisualEditorValue66[initializeVisualEditorValue67].z = initializeVisualEditorValue72;
                                                    else initializeVisualEditorValue66[initializeVisualEditorValue67][setAttributeMethod](callbackValue70[initializeVisualEditorValue69], initializeVisualEditorValue72)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return callbackValue124(serializedSource)
                        },
                        callbackValue80 = function(initializeVisualEditorArgument15) {
                            var initializeVisualEditorValue80 = false;
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('&(#?[a-z0-9]{2,8});', 'gi'), '{%~$1~%}');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod]('&')[joinMethod]('&amp;amp;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod]('{%~amp~%}')[joinMethod]('&amp;amp;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('{%~(lt|gt|nbsp)~%}', 'gi'), '&amp;$1;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('{%~(#?[a-z0-9]{2,8})~%}', 'gi'), '&$1;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod](' ')[joinMethod]('&amp;nbsp;');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('<([^a-z/])', 'gi'), '&amp;lt;$1');
                            initializeVisualEditorArgument15 = initializeVisualEditorArgument15[replaceMethod](new RegExp('[<>]', 'gi'), function(gwArgument1) {
                                if (gwArgument1 == '<') {
                                    if (initializeVisualEditorValue80) return '&amp;lt;';
                                    else initializeVisualEditorValue80 = true
                                } else {
                                    if (!initializeVisualEditorValue80) return '&amp;gt;';
                                    else initializeVisualEditorValue80 = false
                                }
                                return gwArgument1
                            });
                            var initializeVisualEditorValue81 = documentObject[createElementMethod](textareaTagName),
                                initializeVisualEditorValue82 = documentObject[createElementMethod]('div');
                            initializeVisualEditorValue82[innerHTMLProperty] = '&shy;';
                            if (initializeVisualEditorValue82[innerHTMLProperty] == '&shy;') initializeVisualEditorArgument15 = initializeVisualEditorArgument15[splitMethod]('­')[joinMethod]('&amp;shy;');
                            initializeVisualEditorValue81[innerHTMLProperty] = initializeVisualEditorArgument15[splitMethod](textareaTagName)[joinMethod]('_extarea');
                            return initializeVisualEditorValue81[valueProperty][splitMethod]('_extarea')[joinMethod](textareaTagName)
                        },
                        syncToolbarSpace = function(initializeVisualEditorArgument16) {
                            var initializeVisualEditorValue83 = documentObject[querySelectorMethod]('#d');
                            if (initializeVisualEditorValue83) {
                                if (initializeVisualEditorArgument16) {
                                    initializeVisualEditorValue83[setAttributeMethod]('data-myvibehtml-toolbar', 'open');
                                    initializeVisualEditorValue83[styleProperty].setProperty('--myvibehtml-toolbar-space', Math.max(116, Math.ceil(callbackValue18.getBoundingClientRect().bottom + 8)) + 'px')
                                } else {
                                    initializeVisualEditorValue83[removeAttributeMethod]('data-myvibehtml-toolbar');
                                    initializeVisualEditorValue83[styleProperty].removeProperty('--myvibehtml-toolbar-space')
                                }
                            }
                        },
                        callbackValue81 = function(initializeVisualEditorArgument17) {
                            var initializeVisualEditorValue84 = callbackValue87(initializeVisualEditorArgument17);
                            if (initializeVisualEditorValue84[lengthProperty]) {
                                for (var initializeVisualEditorValue85 = '', initializeVisualEditorValue86 = initializeVisualEditorValue84[lengthProperty] - 1; initializeVisualEditorValue86 >= 0; initializeVisualEditorValue86--) initializeVisualEditorValue85 += callbackValue20[splitMethod]('{tagname}')[joinMethod](initializeVisualEditorValue84[initializeVisualEditorValue86][tagNameProperty][toLowerCaseMethod]());
                                callbackValue19[innerHTMLProperty] = initializeVisualEditorValue85;
                                for (var initializeVisualEditorValue86 = 0, initializeVisualEditorValue87 = callbackValue19.children, initializeVisualEditorValue88 = initializeVisualEditorValue87[lengthProperty]; initializeVisualEditorValue86 < initializeVisualEditorValue88; initializeVisualEditorValue86++) {
                                    initializeVisualEditorValue87[initializeVisualEditorValue86].d = initializeVisualEditorValue84[initializeVisualEditorValue84[lengthProperty] - initializeVisualEditorValue86 - 1];
                                    initializeVisualEditorValue87[initializeVisualEditorValue86][addEventListenerMethod](clickEvent, callbackValue88)
                                }
                                initializeVisualEditorValue87[initializeVisualEditorValue86 - 1][removeEventListenerMethod](clickEvent, callbackValue88);
                                initializeVisualEditorValue87[initializeVisualEditorValue86 - 1][classNameProperty] = 'l';
                                initializeVisualEditorValue87[initializeVisualEditorValue86 - 1].d = initializeVisualEditorValue84[0];
                                initializeVisualEditorValue84[0][setAttributeMethod](focusAttribute, true);
                                callbackValue66.d = initializeVisualEditorArgument17;
                                if (initializeVisualEditorArgument17[getAttributeMethod](disabledProperty)) {
                                    initializeVisualEditorValue84[0][setAttributeMethod](disabledAttribute, true);
                                    callbackValue9[classNameProperty] = 'o';
                                    callbackValue125();
                                    if (callbackValue9[styleProperty][displayProperty] == blockValue) {
                                        windowObject[setTimeoutMethod](function() {
                                            fadeIn(callbackValue9)
                                        }, 400)
                                    } else fadeIn(callbackValue9)
                                }
                                callbackValue18[styleProperty][displayProperty] = blockValue;
                                syncToolbarSpace(true);
                                callbackValue82(initializeVisualEditorValue84[0]);
                                callbackValue85(initializeVisualEditorArgument17)
                            }
                        },
                        callbackValue82 = function(initializeVisualEditorArgument18) {
                            callbackValue62[classNameProperty] = 'n';
                            callbackValue63[classNameProperty] = 'n';
                            callbackValue64[classNameProperty] = 'n';
                            callbackValue65[classNameProperty] = 'n';
                            if (callbackValue93(initializeVisualEditorArgument18) && callbackValue94(initializeVisualEditorArgument18)) {
                                callbackValue62[classNameProperty] = '';
                                callbackValue65[classNameProperty] = '';
                                callbackValue62[addEventListenerMethod](clickEvent, callbackValue89);
                                callbackValue65[addEventListenerMethod](clickEvent, callbackValue92);
                                for (var initializeVisualEditorValue89 = initializeVisualEditorArgument18[previousElementSiblingProperty]; initializeVisualEditorValue89; initializeVisualEditorValue89 = initializeVisualEditorValue89[previousElementSiblingProperty]) {
                                    var initializeVisualEditorValue90 = initializeVisualEditorValue89[tagNameProperty][toLowerCaseMethod]();
                                    if (initializeVisualEditorValue90 != scriptTagName && initializeVisualEditorValue90 != 'style' && callbackValue93(initializeVisualEditorValue89)) {
                                        callbackValue63[classNameProperty] = '';
                                        callbackValue63[addEventListenerMethod](clickEvent, callbackValue90);
                                        break
                                    }
                                }
                                for (var initializeVisualEditorValue91 = initializeVisualEditorArgument18[nextElementSiblingProperty]; initializeVisualEditorValue91; initializeVisualEditorValue91 = initializeVisualEditorValue91[nextElementSiblingProperty]) {
                                    var initializeVisualEditorValue90 = initializeVisualEditorValue91[tagNameProperty][toLowerCaseMethod]();
                                    if (initializeVisualEditorValue90 != scriptTagName && initializeVisualEditorValue90 != 'style' && callbackValue94(initializeVisualEditorValue91)) {
                                        callbackValue64[classNameProperty] = '';
                                        callbackValue64[addEventListenerMethod](clickEvent, callbackValue91);
                                        break
                                    }
                                }
                                if (callbackValue9[styleProperty][displayProperty] == blockValue && (callbackValue9[firstElementChildProperty] || callbackValue9[textContentProperty] == callbackValue9[getAttributeMethod](dataAttributePrefix + 'br'))) fadeOut(callbackValue9)
                            } else {
                                initializeVisualEditorArgument18[setAttributeMethod](disabledAttribute, true);
                                callbackValue9[classNameProperty] = 'o';
                                callbackValue125();
                                if (callbackValue9[styleProperty][displayProperty] == blockValue) {
                                    windowObject[setTimeoutMethod](function() {
                                        fadeIn(callbackValue9)
                                    }, 400)
                                } else fadeIn(callbackValue9)
                            }
                        },
                        callbackValue83 = function() {
                            if (callbackValue85.E) delete callbackValue85.E;
                            var initializeVisualEditorValue92 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (initializeVisualEditorValue92) {
                                callbackValue19[innerHTMLProperty] = '';
                                initializeVisualEditorValue92[removeAttributeMethod](focusAttribute);
                                callbackValue62[classNameProperty] = '';
                                callbackValue63[classNameProperty] = '';
                                callbackValue64[classNameProperty] = '';
                                callbackValue65[classNameProperty] = '';
                                callbackValue62[removeEventListenerMethod](clickEvent, callbackValue89);
                                callbackValue63[removeEventListenerMethod](clickEvent, callbackValue90);
                                callbackValue64[removeEventListenerMethod](clickEvent, callbackValue91);
                                callbackValue65[removeEventListenerMethod](clickEvent, callbackValue92);
                                callbackValue18[styleProperty][displayProperty] = '';
                                syncToolbarSpace(false);
                                callbackValue84();
                                if (callbackValue127[activeElementProperty]) callbackValue127[activeElementProperty][blurEvent]();
                                if (callbackValue9[styleProperty][displayProperty] == blockValue && (callbackValue9[firstElementChildProperty] || callbackValue9[textContentProperty] == callbackValue9[getAttributeMethod](dataAttributePrefix + 'br'))) fadeOut(callbackValue9)
                            }
                        },
                        callbackValue84 = function() {
                            if (callbackValue66[styleProperty][displayProperty] == blockValue) {
                                callbackValue66[styleProperty][displayProperty] = '';
                                callbackValue66[classNameProperty] = '';
                                if (callbackValue67[styleProperty][displayProperty] == blockValue) callbackValue85.E = true;
                                else callbackValue66[removeEventListenerMethod](mouseDownEvent, callbackValue86);
                                callbackValue67[styleProperty][displayProperty] = '';
                                callbackValue68[innerHTMLProperty] = ''
                            }
                        },
                        callbackValue85 = function(initializeVisualEditorArgument19) {
                            callbackValue84();
                            for (var initializeVisualEditorValue93 = initializeVisualEditorArgument19; initializeVisualEditorValue93; initializeVisualEditorValue93 = initializeVisualEditorValue93[parentNodeProperty]) {
                                var initializeVisualEditorValue94 = initializeVisualEditorValue93[tagNameProperty];
                                if (initializeVisualEditorValue94 && initializeVisualEditorValue94[toLowerCaseMethod]() != 'body') {
                                    for (var initializeVisualEditorValue95 = 0, initializeVisualEditorValue96 = callbackValue70[lengthProperty]; initializeVisualEditorValue95 < initializeVisualEditorValue96; initializeVisualEditorValue95++) {
                                        var initializeVisualEditorValue97 = initializeVisualEditorValue93[getAttributeMethod](callbackValue70[initializeVisualEditorValue95]);
                                        if (callbackValue70[initializeVisualEditorValue95] == 'href') initializeVisualEditorValue97 = initializeVisualEditorValue93.z;
                                        if (initializeVisualEditorValue97) {
                                            var initializeVisualEditorValue98 = callbackValue118(initializeVisualEditorValue94, callbackValue70[initializeVisualEditorValue95], initializeVisualEditorValue97),
                                                initializeVisualEditorValue99 = callbackValue119(initializeVisualEditorValue94, callbackValue70[initializeVisualEditorValue95], initializeVisualEditorValue97),
                                                initializeVisualEditorValue100 = initializeVisualEditorValue99[indexOfMethod](initializeVisualEditorValue93);
                                            if (initializeVisualEditorValue98[lengthProperty] == initializeVisualEditorValue99[lengthProperty] && initializeVisualEditorValue100 !== -1) {
                                                if (typeof initializeVisualEditorValue93[valueAttribute + callbackValue70[initializeVisualEditorValue95]] != 'undefined') initializeVisualEditorValue97 = initializeVisualEditorValue93[valueAttribute + callbackValue70[initializeVisualEditorValue95]];
                                                var initializeVisualEditorValue101 = callbackValue127[createElementMethod]('div');
                                                initializeVisualEditorValue101[innerHTMLProperty] = callbackValue69[splitMethod]('{name}')[joinMethod](callbackValue70[initializeVisualEditorValue95])[splitMethod]('{value}')[joinMethod](initializeVisualEditorValue97);
                                                var initializeVisualEditorValue102 = callbackValue68[firstElementChildProperty];
                                                if (initializeVisualEditorValue102) {
                                                    callbackValue68[insertBeforeMethod](initializeVisualEditorValue101[firstElementChildProperty], initializeVisualEditorValue102);
                                                    callbackValue68[insertBeforeMethod](initializeVisualEditorValue101[firstElementChildProperty], initializeVisualEditorValue102);
                                                    var initializeVisualEditorValue103 = callbackValue68[firstElementChildProperty][nextElementSiblingProperty][firstElementChildProperty]
                                                } else {
                                                    callbackValue68[appendChildMethod](initializeVisualEditorValue101[firstElementChildProperty]);
                                                    callbackValue68[appendChildMethod](initializeVisualEditorValue101[firstElementChildProperty]);
                                                    var initializeVisualEditorValue103 = callbackValue68[lastElementChildProperty][firstElementChildProperty]
                                                }
                                                initializeVisualEditorValue103.d = initializeVisualEditorValue93;
                                                initializeVisualEditorValue103.D = callbackValue70[initializeVisualEditorValue95];
                                                initializeVisualEditorValue103[addEventListenerMethod](inputEvent, function() {
                                                    this.d[valueAttribute + this.D] = this[valueProperty];
                                                    if (!initializeVisualEditorArgument19.C) {
                                                        initializeVisualEditorArgument19.C = [];
                                                        initializeVisualEditorArgument19[setAttributeMethod](attributesAttribute, true)
                                                    }
                                                    initializeVisualEditorArgument19.C[initializeVisualEditorArgument19.C[lengthProperty]] = this.d;
                                                    callbackValue75()
                                                });
                                                if (callbackValue66[styleProperty][displayProperty] != blockValue) {
                                                    callbackValue66[styleProperty][displayProperty] = blockValue;
                                                    if (callbackValue85.E) callbackValue86();
                                                    else callbackValue66[addEventListenerMethod](mouseDownEvent, callbackValue86)
                                                }
                                            } else {
                                                callbackValue66[classNameProperty] = 'n';
                                                callbackValue66[styleProperty][displayProperty] = blockValue;
                                                callbackValue9[classNameProperty] = 'o';
                                                callbackValue125();
                                                if (callbackValue9[styleProperty][displayProperty] == blockValue) {
                                                    windowObject[setTimeoutMethod](function() {
                                                        fadeIn(callbackValue9)
                                                    }, 400)
                                                } else fadeIn(callbackValue9)
                                            }
                                        }
                                    }
                                    if (initializeVisualEditorValue93[getAttributeMethod](focusAttribute)) break
                                } else break
                            }
                        },
                        callbackValue86 = function(event) {
                            callbackValue67[styleProperty][displayProperty] = blockValue;
                            callbackValue66[classNameProperty] = 'n';
                            if (event) callbackValue66[removeEventListenerMethod](mouseDownEvent, callbackValue86)
                        },
                        callbackValue87 = function(initializeVisualEditorArgument20) {
                            var initializeVisualEditorValue104 = [];
                            for (var initializeVisualEditorValue105 = initializeVisualEditorArgument20[parentNodeProperty], initializeVisualEditorValue106; initializeVisualEditorValue105; initializeVisualEditorValue105 = initializeVisualEditorValue105[parentNodeProperty]) {
                                var initializeVisualEditorValue107 = initializeVisualEditorValue105[tagNameProperty];
                                if (initializeVisualEditorValue107 && initializeVisualEditorValue107[toLowerCaseMethod]() != 'body') {
                                    var initializeVisualEditorValue108 = windowObject[getComputedStyleMethod](initializeVisualEditorValue105)[displayProperty][toLowerCaseMethod]();
                                    if (initializeVisualEditorValue108 != 'inline' && initializeVisualEditorValue108 != noneValue) {
                                        for (var initializeVisualEditorValue109 = false, initializeVisualEditorValue110 = initializeVisualEditorValue105[previousElementSiblingProperty]; initializeVisualEditorValue110; initializeVisualEditorValue110 = initializeVisualEditorValue110[previousElementSiblingProperty]) {
                                            var initializeVisualEditorValue107 = initializeVisualEditorValue110[tagNameProperty][toLowerCaseMethod]();
                                            if (initializeVisualEditorValue107 != scriptTagName && initializeVisualEditorValue107 != 'style') {
                                                initializeVisualEditorValue109 = initializeVisualEditorValue105;
                                                break
                                            }
                                        }
                                        if (initializeVisualEditorValue109) initializeVisualEditorValue104[initializeVisualEditorValue104[lengthProperty]] = initializeVisualEditorValue109;
                                        else {
                                            for (var initializeVisualEditorValue111 = initializeVisualEditorValue105[nextElementSiblingProperty]; initializeVisualEditorValue111; initializeVisualEditorValue111 = initializeVisualEditorValue111[nextElementSiblingProperty]) {
                                                var initializeVisualEditorValue107 = initializeVisualEditorValue111[tagNameProperty][toLowerCaseMethod]();
                                                if (initializeVisualEditorValue107 != scriptTagName && initializeVisualEditorValue107 != 'style') {
                                                    initializeVisualEditorValue104[initializeVisualEditorValue104[lengthProperty]] = initializeVisualEditorValue105;
                                                    break
                                                }
                                            }
                                        }
                                        if (!initializeVisualEditorValue106) initializeVisualEditorValue106 = initializeVisualEditorValue105
                                    }
                                } else break
                            }
                            if (!initializeVisualEditorValue104[lengthProperty] && initializeVisualEditorValue106) initializeVisualEditorValue104[initializeVisualEditorValue104[lengthProperty]] = initializeVisualEditorValue106;
                            return initializeVisualEditorValue104
                        },
                        callbackValue88 = function() {
                            var initializeVisualEditorValue112 = 0,
                                initializeVisualEditorValue113 = callbackValue19[querySelectorMethod]('.l');
                            if (initializeVisualEditorValue113) {
                                initializeVisualEditorValue113[addEventListenerMethod](clickEvent, callbackValue88);
                                initializeVisualEditorValue113[classNameProperty] = '';
                                initializeVisualEditorValue113.d[removeAttributeMethod](focusAttribute);
                                this[removeEventListenerMethod](clickEvent, callbackValue88);
                                this[classNameProperty] = 'l';
                                this.d[setAttributeMethod](focusAttribute, true);
                                callbackValue82(this.d);
                                callbackValue85(callbackValue66.d)
                            }
                        },
                        callbackValue89 = function() {
                            var initializeVisualEditorValue114 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (initializeVisualEditorValue114) {
                                var initializeVisualEditorValue115 = callbackValue93(initializeVisualEditorValue114),
                                    initializeVisualEditorValue116 = callbackValue94(initializeVisualEditorValue114);
                                if (initializeVisualEditorValue115 && initializeVisualEditorValue116) {
                                    serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorValue116) + serializedSource[sliceMethod](initializeVisualEditorValue115, initializeVisualEditorValue116) + serializedSource[sliceMethod](initializeVisualEditorValue116);
                                    var initializeVisualEditorValue117 = initializeVisualEditorValue114[cloneNodeMethod](true),
                                        initializeVisualEditorValue118 = initializeVisualEditorValue117[querySelectorAllMethod]('[' + stringAttribute + ']'),
                                        initializeVisualEditorValue119 = initializeVisualEditorValue117[querySelectorAllMethod](imageTagName),
                                        initializeVisualEditorValue120 = initializeVisualEditorValue117[querySelectorAllMethod](callbackValue71);
                                    for (var initializeVisualEditorValue121 = 0, initializeVisualEditorValue122 = initializeVisualEditorValue118[lengthProperty]; initializeVisualEditorValue121 < initializeVisualEditorValue122; initializeVisualEditorValue121++) {
                                        initializeVisualEditorValue118[initializeVisualEditorValue121][addEventListenerMethod](mouseDownEvent, callbackValue105);
                                        initializeVisualEditorValue118[initializeVisualEditorValue121].ondrop = function(event) {
                                            var gFValue1 = callbackValue127[querySelectorMethod]('[' + focusAttribute + '] img');
                                            if (gFValue1) {
                                                for (var gFValue2 = gFValue1; gFValue2; gFValue2 = gFValue2[parentNodeProperty])
                                                    if (gFValue2[getAttributeMethod](focusAttribute)) gFValue2[removeAttributeMethod](focusAttribute);
                                                event[preventDefaultMethod]()
                                            }
                                            if (callbackValue127[activeElementProperty]) callbackValue127[activeElementProperty][blurEvent]();
                                            callbackValue105.call(this, event)
                                        };
                                        initializeVisualEditorValue118[initializeVisualEditorValue121].ondragend = function() {
                                            var gFValue3 = callbackValue127[querySelectorMethod]('[' + focusAttribute + '] [' + stringAttribute + ']');
                                            if (gFValue3) {
                                                callbackValue73(gFValue3);
                                                callbackValue75()
                                            }
                                        }
                                    }
                                    for (var initializeVisualEditorValue121 = 0, initializeVisualEditorValue122 = initializeVisualEditorValue119[lengthProperty]; initializeVisualEditorValue121 < initializeVisualEditorValue122; initializeVisualEditorValue121++) {
                                        initializeVisualEditorValue119[initializeVisualEditorValue121].ondragover = callbackValue112;
                                        initializeVisualEditorValue119[initializeVisualEditorValue121].ondragleave = callbackValue113;
                                        initializeVisualEditorValue119[initializeVisualEditorValue121].ondrop = callbackValue114;
                                        initializeVisualEditorValue119[initializeVisualEditorValue121].ondragstart = function() {
                                            callbackValue1.e = this
                                        };
                                        initializeVisualEditorValue119[initializeVisualEditorValue121][addEventListenerMethod](mouseDownEvent, callbackValue106)
                                    }
                                    for (var initializeVisualEditorValue121 = 0, initializeVisualEditorValue122 = initializeVisualEditorValue120[lengthProperty]; initializeVisualEditorValue121 < initializeVisualEditorValue122; initializeVisualEditorValue121++) {
                                        var initializeVisualEditorValue123 = initializeVisualEditorValue120[initializeVisualEditorValue121][tagNameProperty][toLowerCaseMethod]();
                                        if ('|iframe|object|video|audio|' [indexOfMethod]('|' + initializeVisualEditorValue123 + '|') !== -1) {
                                            var initializeVisualEditorValue124 = initializeVisualEditorValue120[initializeVisualEditorValue121][previousElementSiblingProperty];
                                            if (initializeVisualEditorValue124) {
                                                initializeVisualEditorValue124.realNode = initializeVisualEditorValue120[initializeVisualEditorValue121];
                                                if (initializeVisualEditorValue123 == iframeTagName) {
                                                    initializeVisualEditorValue124.ondragover = callbackValue112;
                                                    initializeVisualEditorValue124.ondragleave = callbackValue113;
                                                    initializeVisualEditorValue124.ondrop = callbackValue114
                                                }
                                                initializeVisualEditorValue124[addEventListenerMethod](mouseDownEvent, function(event) {
                                                    callbackValue106.call(this.realNode)
                                                })
                                            }
                                        } else {
                                            initializeVisualEditorValue120[initializeVisualEditorValue121][addEventListenerMethod](mouseDownEvent, function(event) {
                                                callbackValue111(event);
                                                callbackValue106.call(this)
                                            });
                                            initializeVisualEditorValue120[initializeVisualEditorValue121][addEventListenerMethod](mouseUpEvent, callbackValue111);
                                            initializeVisualEditorValue120[initializeVisualEditorValue121][addEventListenerMethod](clickEvent, callbackValue111)
                                        }
                                    }
                                    initializeVisualEditorValue117[removeAttributeMethod](focusAttribute);
                                    initializeVisualEditorValue114[parentNodeProperty][insertBeforeMethod](initializeVisualEditorValue117, initializeVisualEditorValue114);
                                    callbackValue74(initializeVisualEditorValue114[parentNodeProperty]);
                                    callbackValue82(initializeVisualEditorValue114)
                                }
                            }
                        },
                        callbackValue90 = function() {
                            var initializeVisualEditorValue125 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (initializeVisualEditorValue125) {
                                for (var initializeVisualEditorValue126 = [], initializeVisualEditorValue127 = initializeVisualEditorValue125[previousElementSiblingProperty]; initializeVisualEditorValue127; initializeVisualEditorValue127 = initializeVisualEditorValue127[previousElementSiblingProperty]) {
                                    initializeVisualEditorValue126[initializeVisualEditorValue126[lengthProperty]] = initializeVisualEditorValue127;
                                    var initializeVisualEditorValue128 = initializeVisualEditorValue127[tagNameProperty][toLowerCaseMethod](),
                                        initializeVisualEditorValue129 = callbackValue93(initializeVisualEditorValue127);
                                    if (!initializeVisualEditorValue129) {
                                        var initializeVisualEditorValue130 = initializeVisualEditorValue127[previousElementSiblingProperty];
                                        if (initializeVisualEditorValue130) initializeVisualEditorValue129 = callbackValue94(initializeVisualEditorValue130)
                                    }
                                    if (initializeVisualEditorValue128 != scriptTagName && initializeVisualEditorValue128 != 'style' && initializeVisualEditorValue129) {
                                        var initializeVisualEditorValue131 = callbackValue93(initializeVisualEditorValue125),
                                            initializeVisualEditorValue132 = callbackValue94(initializeVisualEditorValue125);
                                        if (initializeVisualEditorValue131 && initializeVisualEditorValue132) {
                                            serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorValue129) + serializedSource[sliceMethod](initializeVisualEditorValue131, initializeVisualEditorValue132) + serializedSource[sliceMethod](initializeVisualEditorValue129, initializeVisualEditorValue131) + serializedSource[sliceMethod](initializeVisualEditorValue132);
                                            var initializeVisualEditorValue133 = initializeVisualEditorValue125[nextElementSiblingProperty];
                                            for (var initializeVisualEditorValue134 = 0, initializeVisualEditorValue135 = initializeVisualEditorValue126[lengthProperty]; initializeVisualEditorValue134 < initializeVisualEditorValue135; initializeVisualEditorValue134++) {
                                                if (initializeVisualEditorValue133) initializeVisualEditorValue133[parentNodeProperty][insertBeforeMethod](initializeVisualEditorValue126[initializeVisualEditorValue126[lengthProperty] - 1 - initializeVisualEditorValue134], initializeVisualEditorValue133);
                                                else initializeVisualEditorValue125[parentNodeProperty][appendChildMethod](initializeVisualEditorValue126[initializeVisualEditorValue126[lengthProperty] - 1 - initializeVisualEditorValue134])
                                            }
                                            callbackValue74(initializeVisualEditorValue125[parentNodeProperty]);
                                            callbackValue82(initializeVisualEditorValue125)
                                        }
                                        break
                                    }
                                }
                            }
                        },
                        callbackValue91 = function() {
                            var initializeVisualEditorValue136 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (initializeVisualEditorValue136) {
                                for (var initializeVisualEditorValue137 = [], initializeVisualEditorValue138 = initializeVisualEditorValue136[nextElementSiblingProperty]; initializeVisualEditorValue138; initializeVisualEditorValue138 = initializeVisualEditorValue138[nextElementSiblingProperty]) {
                                    initializeVisualEditorValue137[initializeVisualEditorValue137[lengthProperty]] = initializeVisualEditorValue138;
                                    var initializeVisualEditorValue139 = initializeVisualEditorValue138[tagNameProperty][toLowerCaseMethod](),
                                        initializeVisualEditorValue140 = callbackValue94(initializeVisualEditorValue138);
                                    if (initializeVisualEditorValue139 != scriptTagName && initializeVisualEditorValue139 != 'style' && initializeVisualEditorValue140) {
                                        var initializeVisualEditorValue141 = callbackValue93(initializeVisualEditorValue136),
                                            initializeVisualEditorValue142 = callbackValue94(initializeVisualEditorValue136);
                                        if (initializeVisualEditorValue141 && initializeVisualEditorValue142) {
                                            serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorValue141) + serializedSource[sliceMethod](initializeVisualEditorValue142, initializeVisualEditorValue140) + serializedSource[sliceMethod](initializeVisualEditorValue141, initializeVisualEditorValue142) + serializedSource[sliceMethod](initializeVisualEditorValue140);
                                            for (var initializeVisualEditorValue143 = 0, initializeVisualEditorValue144 = initializeVisualEditorValue137[lengthProperty]; initializeVisualEditorValue143 < initializeVisualEditorValue144; initializeVisualEditorValue143++) initializeVisualEditorValue137[initializeVisualEditorValue143][parentNodeProperty][insertBeforeMethod](initializeVisualEditorValue137[initializeVisualEditorValue143], initializeVisualEditorValue136);
                                            callbackValue74(initializeVisualEditorValue136[parentNodeProperty]);
                                            callbackValue82(initializeVisualEditorValue136)
                                        }
                                        break
                                    }
                                }
                            }
                        },
                        callbackValue92 = function() {
                            var initializeVisualEditorValue145 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            if (initializeVisualEditorValue145) {
                                var initializeVisualEditorValue146 = callbackValue93(initializeVisualEditorValue145),
                                    initializeVisualEditorValue147 = callbackValue94(initializeVisualEditorValue145);
                                if (initializeVisualEditorValue146 && initializeVisualEditorValue147) {
                                    var initializeVisualEditorValue148 = initializeVisualEditorValue145[parentNodeProperty];
                                    serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorValue146) + serializedSource[sliceMethod](initializeVisualEditorValue147);
                                    callbackValue83();
                                    initializeVisualEditorValue148[removeChildMethod](initializeVisualEditorValue145);
                                    if (styleInspectorTarget == initializeVisualEditorValue145) closeStyleInspector();
                                    callbackValue74(initializeVisualEditorValue148)
                                }
                            }
                        },
                        callbackValue93 = function(initializeVisualEditorArgument21) {
                            var initializeVisualEditorValue149 = initializeVisualEditorArgument21[querySelectorAllMethod]('[' + stringAttribute + ']');
                            if (initializeVisualEditorValue149[lengthProperty]) {
                                var initializeVisualEditorValue150 = callbackValue102(initializeVisualEditorValue149[0]),
                                    initializeVisualEditorValue151 = callbackValue103('>' + initializeVisualEditorValue150 + '<');
                                if (initializeVisualEditorValue151[lengthProperty] - 1) {
                                    var initializeVisualEditorValue152 = callbackValue122(initializeVisualEditorValue150),
                                        initializeVisualEditorValue153 = initializeVisualEditorValue152[indexOfMethod](initializeVisualEditorValue149[0]);
                                    if (initializeVisualEditorValue151[lengthProperty] == (initializeVisualEditorValue152[lengthProperty] + 1) && initializeVisualEditorValue153 !== -1) return callbackValue120(initializeVisualEditorValue151[sliceMethod](0, initializeVisualEditorValue153 + 1)[joinMethod]('>' + initializeVisualEditorValue150 + '<'), callbackValue104(initializeVisualEditorArgument21)[splitMethod]('>' + initializeVisualEditorValue150 + '<')[0][replaceMethod](new RegExp('<edit[\\s\\S]+?' + stringAttribute + '="[\\s\\S]+', 'gi'), ''))
                                }
                            } else if (initializeVisualEditorArgument21[tagNameProperty][toLowerCaseMethod]() == 'edit' && initializeVisualEditorArgument21[getAttributeMethod](stringAttribute)) return callbackValue96(initializeVisualEditorArgument21);
                            else {
                                if (initializeVisualEditorArgument21[querySelectorMethod](imageTagName)) return callbackValue98(initializeVisualEditorArgument21);
                                else if (initializeVisualEditorArgument21[querySelectorMethod](callbackValue71)) return callbackValue100(initializeVisualEditorArgument21)
                            }
                        },
                        callbackValue94 = function(initializeVisualEditorArgument22) {
                            var initializeVisualEditorValue154 = initializeVisualEditorArgument22[nextElementSiblingProperty];
                            if (initializeVisualEditorValue154) {
                                var initializeVisualEditorValue155 = initializeVisualEditorValue154[tagNameProperty][toLowerCaseMethod]();
                                if (initializeVisualEditorValue155 != scriptTagName && initializeVisualEditorValue155 != 'style') {
                                    if (initializeVisualEditorValue155 == 'edit' && initializeVisualEditorValue154[getAttributeMethod](stringAttribute)) return callbackValue96(initializeVisualEditorValue154);
                                    else {
                                        var initializeVisualEditorValue156 = callbackValue93(initializeVisualEditorValue154);
                                        if (initializeVisualEditorValue156) return initializeVisualEditorValue156;
                                        else return callbackValue95(initializeVisualEditorArgument22)
                                    }
                                }
                            } else return callbackValue95(initializeVisualEditorArgument22)
                        },
                        callbackValue95 = function(initializeVisualEditorArgument23) {
                            var initializeVisualEditorValue157 = initializeVisualEditorArgument23[querySelectorAllMethod]('[' + stringAttribute + ']');
                            if (initializeVisualEditorValue157[lengthProperty]) {
                                var initializeVisualEditorValue158 = callbackValue102(initializeVisualEditorValue157[initializeVisualEditorValue157[lengthProperty] - 1]),
                                    initializeVisualEditorValue159 = callbackValue103('>' + initializeVisualEditorValue158 + '<');
                                if (initializeVisualEditorValue159[lengthProperty] - 1) {
                                    var initializeVisualEditorValue160 = callbackValue122(initializeVisualEditorValue158),
                                        initializeVisualEditorValue161 = initializeVisualEditorValue160[lastIndexOfMethod](initializeVisualEditorValue157[initializeVisualEditorValue157[lengthProperty] - 1]);
                                    if (initializeVisualEditorValue159[lengthProperty] == (initializeVisualEditorValue160[lengthProperty] + 1) && initializeVisualEditorValue161 !== -1) {
                                        var initializeVisualEditorValue162 = callbackValue104(initializeVisualEditorArgument23)[splitMethod]('>' + initializeVisualEditorValue158 + '<');
                                        return callbackValue121(initializeVisualEditorValue159[sliceMethod](initializeVisualEditorValue161 + 1)[joinMethod]('>' + initializeVisualEditorValue158 + '<'), initializeVisualEditorValue162[initializeVisualEditorValue162[lengthProperty] - 1][replaceMethod](new RegExp('/edit>', 'gi'), ''))
                                    }
                                }
                            } else if (initializeVisualEditorArgument23[tagNameProperty][toLowerCaseMethod]() == 'edit' && initializeVisualEditorArgument23[getAttributeMethod]('[' + stringAttribute + ']')) return callbackValue97(initializeVisualEditorArgument23);
                            else {
                                if (initializeVisualEditorArgument23[querySelectorMethod](imageTagName)) return callbackValue99(initializeVisualEditorArgument23);
                                else if (initializeVisualEditorArgument23[querySelectorMethod](callbackValue71)) return callbackValue101(initializeVisualEditorArgument23)
                            }
                        },
                        callbackValue96 = function(initializeVisualEditorArgument24) {
                            var initializeVisualEditorValue163 = callbackValue102(initializeVisualEditorArgument24)[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1'),
                                initializeVisualEditorValue164 = callbackValue103(initializeVisualEditorValue163 + '<'),
                                initializeVisualEditorValue165 = initializeVisualEditorValue164[lengthProperty] - 1;
                            if (initializeVisualEditorValue165) {
                                if (initializeVisualEditorValue165 == 1) return serializedSource[indexOfMethod](initializeVisualEditorValue163 + '<');
                                else {
                                    var initializeVisualEditorValue166 = callbackValue127[querySelectorAllMethod]('[' + stringAttribute + ']');
                                    for (var initializeVisualEditorValue167 = 0, initializeVisualEditorValue168 = 0, initializeVisualEditorValue169 = false, initializeVisualEditorValue170 = initializeVisualEditorValue166[lengthProperty]; initializeVisualEditorValue167 < initializeVisualEditorValue170; initializeVisualEditorValue167++) {
                                        var initializeVisualEditorValue171 = callbackValue102(initializeVisualEditorValue166[initializeVisualEditorValue167])[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1');
                                        if (initializeVisualEditorValue171 == initializeVisualEditorValue163) {
                                            if (initializeVisualEditorValue166[initializeVisualEditorValue167] == initializeVisualEditorArgument24) initializeVisualEditorValue169 = initializeVisualEditorValue168;
                                            initializeVisualEditorValue168++
                                        }
                                    }
                                    for (var initializeVisualEditorValue167 = 1, initializeVisualEditorValue172 = [initializeVisualEditorValue164[0]], initializeVisualEditorValue170 = initializeVisualEditorValue164[lengthProperty]; initializeVisualEditorValue167 < initializeVisualEditorValue170; initializeVisualEditorValue167++) {
                                        if (initializeVisualEditorValue164[initializeVisualEditorValue167][matchMethod](new RegExp('>\\s*$', 'gi'))) initializeVisualEditorValue172[initializeVisualEditorValue172[lengthProperty]] = initializeVisualEditorValue164[initializeVisualEditorValue167];
                                        else initializeVisualEditorValue172[initializeVisualEditorValue172[lengthProperty] - 1] += (initializeVisualEditorValue163 + initializeVisualEditorValue164[initializeVisualEditorValue167] + '<')
                                    }
                                    if (initializeVisualEditorValue172[lengthProperty] == (initializeVisualEditorValue168 + 1) && initializeVisualEditorValue169 !== false)
                                        for (var initializeVisualEditorValue167 = 0, initializeVisualEditorValue170 = initializeVisualEditorValue172[lengthProperty]; initializeVisualEditorValue167 < initializeVisualEditorValue170; initializeVisualEditorValue167++)
                                            if ((initializeVisualEditorValue169 + 1) == initializeVisualEditorValue167) return initializeVisualEditorValue172[sliceMethod](0, initializeVisualEditorValue167)[joinMethod](initializeVisualEditorValue163 + '<')[lengthProperty]
                                }
                            }
                        },
                        callbackValue97 = function(initializeVisualEditorArgument25) {
                            var initializeVisualEditorValue173 = callbackValue102(initializeVisualEditorArgument25)[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1'),
                                initializeVisualEditorValue174 = callbackValue103(initializeVisualEditorValue173 + '<'),
                                initializeVisualEditorValue175 = initializeVisualEditorValue174[lengthProperty] - 1;
                            if (initializeVisualEditorValue175) {
                                if (initializeVisualEditorValue175 == 1) return serializedSource[indexOfMethod](initializeVisualEditorValue173 + '<') + initializeVisualEditorValue173[lengthProperty];
                                else {
                                    var initializeVisualEditorValue176 = callbackValue127[querySelectorAllMethod]('[' + stringAttribute + ']');
                                    for (var initializeVisualEditorValue177 = 0, initializeVisualEditorValue178 = 0, initializeVisualEditorValue179 = 0, initializeVisualEditorValue180 = initializeVisualEditorValue176[lengthProperty]; initializeVisualEditorValue177 < initializeVisualEditorValue180; initializeVisualEditorValue177++) {
                                        var initializeVisualEditorValue181 = callbackValue102(initializeVisualEditorValue176[initializeVisualEditorValue177])[replaceMethod](new RegExp('^\\s*([\\S\\s]+?)$', 'gi'), '$1');
                                        if (initializeVisualEditorValue181 == initializeVisualEditorValue173) {
                                            if (initializeVisualEditorValue176[initializeVisualEditorValue177] == initializeVisualEditorArgument25) initializeVisualEditorValue179 = initializeVisualEditorValue178;
                                            initializeVisualEditorValue178++
                                        }
                                    }
                                    for (var initializeVisualEditorValue177 = 1, initializeVisualEditorValue182 = [initializeVisualEditorValue174[0]], initializeVisualEditorValue180 = initializeVisualEditorValue174[lengthProperty]; initializeVisualEditorValue177 < initializeVisualEditorValue180; initializeVisualEditorValue177++) {
                                        if (initializeVisualEditorValue174[initializeVisualEditorValue177][matchMethod](new RegExp('>\\s*$', 'gi'))) initializeVisualEditorValue182[initializeVisualEditorValue182[lengthProperty]] = initializeVisualEditorValue174[initializeVisualEditorValue177];
                                        else initializeVisualEditorValue182[initializeVisualEditorValue182[lengthProperty] - 1] += (initializeVisualEditorValue173 + initializeVisualEditorValue174[initializeVisualEditorValue177] + '<')
                                    }
                                    if (initializeVisualEditorValue182[lengthProperty] == (initializeVisualEditorValue178 + 1) && initializeVisualEditorValue179 !== false)
                                        for (var initializeVisualEditorValue177 = 0, initializeVisualEditorValue180 = initializeVisualEditorValue182[lengthProperty]; initializeVisualEditorValue177 < initializeVisualEditorValue180; initializeVisualEditorValue177++)
                                            if ((initializeVisualEditorValue179 + 1) == initializeVisualEditorValue177) return initializeVisualEditorValue182[sliceMethod](0, initializeVisualEditorValue177)[joinMethod](initializeVisualEditorValue173 + '<')[lengthProperty] + initializeVisualEditorValue173[lengthProperty]
                                }
                            }
                        },
                        callbackValue98 = function(initializeVisualEditorArgument26) {
                            var initializeVisualEditorValue183 = initializeVisualEditorArgument26[querySelectorMethod](imageTagName);
                            if (initializeVisualEditorValue183) {
                                var initializeVisualEditorValue184 = initializeVisualEditorValue183[getAttributeMethod](sourceAttribute),
                                    initializeVisualEditorValue185 = callbackValue118(imageTagName, sourceAttribute, initializeVisualEditorValue184),
                                    initializeVisualEditorValue186 = callbackValue119(imageTagName, sourceAttribute, initializeVisualEditorValue184),
                                    initializeVisualEditorValue187 = initializeVisualEditorValue186[indexOfMethod](initializeVisualEditorValue183);
                                if (initializeVisualEditorValue185[lengthProperty] == initializeVisualEditorValue186[lengthProperty] && initializeVisualEditorValue187 !== -1) {
                                    for (var initializeVisualEditorValue188 = 0, initializeVisualEditorValue189 = serializedSource, initializeVisualEditorValue190 = initializeVisualEditorValue185[lengthProperty]; initializeVisualEditorValue188 < initializeVisualEditorValue190; initializeVisualEditorValue188++) initializeVisualEditorValue189 = initializeVisualEditorValue189[splitMethod](initializeVisualEditorValue185[initializeVisualEditorValue188])[joinMethod]('{-' + initializeVisualEditorValue184 + '-}{' + initializeVisualEditorValue188 + '}');
                                    initializeVisualEditorValue189 = initializeVisualEditorValue189[splitMethod]('{-' + initializeVisualEditorValue184 + '-}')[sliceMethod](0, initializeVisualEditorValue187 + 1)[joinMethod]('{-' + initializeVisualEditorValue184 + '-}');
                                    for (var initializeVisualEditorValue188 = 0, initializeVisualEditorValue190 = initializeVisualEditorValue185[lengthProperty]; initializeVisualEditorValue188 < initializeVisualEditorValue190; initializeVisualEditorValue188++) initializeVisualEditorValue189 = initializeVisualEditorValue189[splitMethod]('{-' + initializeVisualEditorValue184 + '-}{' + initializeVisualEditorValue188 + '}')[joinMethod](initializeVisualEditorValue185[initializeVisualEditorValue188]);
                                    return callbackValue120(initializeVisualEditorValue189, callbackValue104(initializeVisualEditorArgument26)[matchMethod](new RegExp('^[\\s\\S]+?(?=<img[^>]+?src)', 'gi'))[0][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        callbackValue99 = function(initializeVisualEditorArgument27) {
                            var initializeVisualEditorValue191 = initializeVisualEditorArgument27[querySelectorAllMethod](imageTagName);
                            if (initializeVisualEditorValue191[lengthProperty]) {
                                var initializeVisualEditorValue191 = initializeVisualEditorValue191[initializeVisualEditorValue191[lengthProperty] - 1],
                                    initializeVisualEditorValue192 = initializeVisualEditorValue191[getAttributeMethod](sourceAttribute),
                                    initializeVisualEditorValue193 = callbackValue118(imageTagName, sourceAttribute, initializeVisualEditorValue192),
                                    initializeVisualEditorValue194 = callbackValue119(imageTagName, sourceAttribute, initializeVisualEditorValue192),
                                    initializeVisualEditorValue195 = initializeVisualEditorValue194[indexOfMethod](initializeVisualEditorValue191);
                                if (initializeVisualEditorValue193[lengthProperty] == initializeVisualEditorValue194[lengthProperty] && initializeVisualEditorValue195 !== -1) {
                                    for (var initializeVisualEditorValue196 = 0, initializeVisualEditorValue197 = serializedSource, initializeVisualEditorValue198 = initializeVisualEditorValue193[lengthProperty]; initializeVisualEditorValue196 < initializeVisualEditorValue198; initializeVisualEditorValue196++) initializeVisualEditorValue197 = initializeVisualEditorValue197[splitMethod](initializeVisualEditorValue193[initializeVisualEditorValue196])[joinMethod]('{-' + initializeVisualEditorValue192 + '-}{' + initializeVisualEditorValue196 + '}');
                                    var initializeVisualEditorValue199 = initializeVisualEditorValue197[splitMethod]('{-' + initializeVisualEditorValue192 + '-}')[sliceMethod](initializeVisualEditorValue195 + 1)[joinMethod]('{-' + initializeVisualEditorValue192 + '-}');
                                    for (var initializeVisualEditorValue196 = 0, initializeVisualEditorValue198 = initializeVisualEditorValue193[lengthProperty]; initializeVisualEditorValue196 < initializeVisualEditorValue198; initializeVisualEditorValue196++) initializeVisualEditorValue199 = initializeVisualEditorValue199[splitMethod]('{-' + initializeVisualEditorValue192 + '-}{' + initializeVisualEditorValue196 + '}')[joinMethod](initializeVisualEditorValue193[initializeVisualEditorValue196]);
                                    var initializeVisualEditorValue200 = callbackValue104(initializeVisualEditorArgument27),
                                        initializeVisualEditorValue201 = initializeVisualEditorValue200[matchMethod](new RegExp('<img[^>]+?src[^>]+?>', 'gi')),
                                        initializeVisualEditorValue202 = initializeVisualEditorValue200[splitMethod](initializeVisualEditorValue201[initializeVisualEditorValue201[lengthProperty] - 1]);
                                    return callbackValue121(initializeVisualEditorValue199, initializeVisualEditorValue202[initializeVisualEditorValue202[lengthProperty] - 1][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        callbackValue100 = function(initializeVisualEditorArgument28) {
                            var initializeVisualEditorValue203 = initializeVisualEditorArgument28[querySelectorMethod](callbackValue71);
                            if (initializeVisualEditorValue203) {
                                var initializeVisualEditorValue204 = initializeVisualEditorValue203[tagNameProperty][toLowerCaseMethod](),
                                    initializeVisualEditorValue205 = serializedSource[matchMethod](new RegExp('<' + initializeVisualEditorValue204 + '[^>]*?>', 'gi')),
                                    initializeVisualEditorValue206 = Array.prototype[sliceMethod].call(callbackValue127.body[querySelectorAllMethod](initializeVisualEditorValue204)),
                                    initializeVisualEditorValue207 = initializeVisualEditorValue206[indexOfMethod](initializeVisualEditorValue203);
                                if (initializeVisualEditorValue205[lengthProperty] == initializeVisualEditorValue206[lengthProperty] && initializeVisualEditorValue207 !== -1) {
                                    for (var initializeVisualEditorValue208 = 0, initializeVisualEditorValue209 = serializedSource, initializeVisualEditorValue210 = initializeVisualEditorValue205[lengthProperty]; initializeVisualEditorValue208 < initializeVisualEditorValue210; initializeVisualEditorValue208++) initializeVisualEditorValue209 = initializeVisualEditorValue209[splitMethod](initializeVisualEditorValue205[initializeVisualEditorValue208])[joinMethod]('{-' + initializeVisualEditorValue204 + '-}{' + initializeVisualEditorValue208 + '}');
                                    initializeVisualEditorValue209 = initializeVisualEditorValue209[splitMethod]('{-' + initializeVisualEditorValue204 + '-}')[sliceMethod](0, initializeVisualEditorValue207 + 1)[joinMethod]('{-' + initializeVisualEditorValue204 + '-}');
                                    for (var initializeVisualEditorValue208 = 0, initializeVisualEditorValue210 = initializeVisualEditorValue205[lengthProperty]; initializeVisualEditorValue208 < initializeVisualEditorValue210; initializeVisualEditorValue208++) initializeVisualEditorValue209 = initializeVisualEditorValue209[splitMethod]('{-' + initializeVisualEditorValue204 + '-}{' + initializeVisualEditorValue208 + '}')[joinMethod](initializeVisualEditorValue205[initializeVisualEditorValue208]);
                                    return callbackValue120(initializeVisualEditorValue209, callbackValue104(initializeVisualEditorArgument28)[matchMethod](new RegExp('^[\\s\\S]+?(?=<' + initializeVisualEditorValue204 + ')', 'gi'))[0][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        callbackValue101 = function(initializeVisualEditorArgument29) {
                            var initializeVisualEditorValue211 = initializeVisualEditorArgument29[querySelectorAllMethod](callbackValue71);
                            if (initializeVisualEditorValue211[lengthProperty]) {
                                var initializeVisualEditorValue211 = initializeVisualEditorValue211[initializeVisualEditorValue211[lengthProperty] - 1],
                                    initializeVisualEditorValue212 = initializeVisualEditorValue211[tagNameProperty][toLowerCaseMethod](),
                                    initializeVisualEditorValue213 = serializedSource[matchMethod](new RegExp('<(?:' + initializeVisualEditorValue212 + ')[^>]*?>', 'gi')),
                                    initializeVisualEditorValue214 = Array.prototype[sliceMethod].call(callbackValue127.body[querySelectorAllMethod](initializeVisualEditorValue212)),
                                    initializeVisualEditorValue215 = initializeVisualEditorValue214[indexOfMethod](initializeVisualEditorValue211);
                                if (initializeVisualEditorValue213[lengthProperty] == initializeVisualEditorValue214[lengthProperty] && initializeVisualEditorValue215 !== -1) {
                                    for (var initializeVisualEditorValue216 = 0, initializeVisualEditorValue217 = serializedSource, initializeVisualEditorValue218 = initializeVisualEditorValue213[lengthProperty]; initializeVisualEditorValue216 < initializeVisualEditorValue218; initializeVisualEditorValue216++) initializeVisualEditorValue217 = initializeVisualEditorValue217[splitMethod](initializeVisualEditorValue213[initializeVisualEditorValue216])[joinMethod]('{-' + initializeVisualEditorValue212 + '-}{' + initializeVisualEditorValue216 + '}');
                                    var initializeVisualEditorValue219 = initializeVisualEditorValue217[splitMethod]('{-' + initializeVisualEditorValue212 + '-}')[sliceMethod](initializeVisualEditorValue215 + 1)[joinMethod]('{-' + initializeVisualEditorValue212 + '-}');
                                    for (var initializeVisualEditorValue216 = 0, initializeVisualEditorValue218 = initializeVisualEditorValue213[lengthProperty]; initializeVisualEditorValue216 < initializeVisualEditorValue218; initializeVisualEditorValue216++) initializeVisualEditorValue219 = initializeVisualEditorValue219[splitMethod]('{-' + initializeVisualEditorValue212 + '-}{' + initializeVisualEditorValue216 + '}')[joinMethod](initializeVisualEditorValue213[initializeVisualEditorValue216]);
                                    var initializeVisualEditorValue220 = callbackValue104(initializeVisualEditorArgument29),
                                        initializeVisualEditorValue221 = initializeVisualEditorValue220[matchMethod](new RegExp('<' + initializeVisualEditorValue212 + '[^>]*?>', 'gi')),
                                        initializeVisualEditorValue222 = initializeVisualEditorValue220[splitMethod](initializeVisualEditorValue221[initializeVisualEditorValue221[lengthProperty] - 1]);
                                    return callbackValue121(initializeVisualEditorValue219, initializeVisualEditorValue222[initializeVisualEditorValue222[lengthProperty] - 1][replaceMethod](new RegExp('<edit[\\s\\S]+?' + objectAttribute + '="[\\s\\S]+</edit>', 'gi'), ''))
                                }
                            }
                        },
                        callbackValue102 = function(initializeVisualEditorArgument30) {
                            var initializeVisualEditorValue223 = initializeVisualEditorArgument30.B;
                            if (!initializeVisualEditorValue223) return initializeVisualEditorArgument30[innerHTMLProperty];
                            return initializeVisualEditorValue223
                        },
                        callbackValue103 = function(initializeVisualEditorArgument31) {
                            var initializeVisualEditorValue224 = serializedSource[splitMethod](initializeVisualEditorArgument31);
                            if (!callbackValue80.fixed) {
                                var initializeVisualEditorValue225 = callbackValue80(serializedSource),
                                    initializeVisualEditorValue226 = initializeVisualEditorValue225[splitMethod](initializeVisualEditorArgument31);
                                if (initializeVisualEditorValue224[lengthProperty] != initializeVisualEditorValue226[lengthProperty]) {
                                    serializedSource = initializeVisualEditorValue225;
                                    if (callbackValue11[innerHTMLProperty] != serializedSource) callbackValue11[innerHTMLProperty] = serializedSource;
                                    initializeVisualEditorValue224 = initializeVisualEditorValue226;
                                    callbackValue80.fixed = true
                                }
                            }
                            return initializeVisualEditorValue224
                        },
                        callbackValue104 = function(initializeVisualEditorArgument32) {
                            var initializeVisualEditorValue227 = initializeVisualEditorArgument32[outerHTMLProperty][replaceMethod](new RegExp('^[\\s\\S]+?(?:</head>|<body[^>]>|<div[^>]>)', 'gi'), '');
                            initializeVisualEditorValue227 = initializeVisualEditorValue227[replaceMethod](new RegExp('<!--[\\s\\S]+?-->', 'gi'), '');
                            initializeVisualEditorValue227 = initializeVisualEditorValue227[replaceMethod](new RegExp('<_cript[\\s\\S]+?/_cript>', 'gi'), '');
                            return initializeVisualEditorValue227[replaceMethod](new RegExp('<style[\\s\\S]+?/style>', 'gi'), '')
                        },
                        callbackValue105 = function() {
                            var initializeVisualEditorValue228 = this,
                                initializeVisualEditorValue229 = function() {
                                    callbackValue73(initializeVisualEditorValue228);
                                    callbackValue75()
                                },
                                initializeVisualEditorValue230 = function() {
                                    initializeVisualEditorValue229.call(initializeVisualEditorValue228);
                                    callbackValue127[removeEventListenerMethod](mouseMoveEvent, initializeVisualEditorValue230);
                                    windowObject[setTimeoutMethod](function() {
                                        if (callbackValue127[activeElementProperty] == initializeVisualEditorValue228) callbackValue127[addEventListenerMethod](mouseMoveEvent, initializeVisualEditorValue230)
                                    }, 500)
                                },
                                initializeVisualEditorValue231 = function(event) {
                                    initializeVisualEditorValue228[removeEventListenerMethod](keyUpEvent, initializeVisualEditorValue229);
                                    callbackValue127[removeEventListenerMethod](mouseMoveEvent, initializeVisualEditorValue230);
                                    initializeVisualEditorValue228[removeEventListenerMethod](blurEvent, initializeVisualEditorValue231);
                                    initializeVisualEditorValue228[addEventListenerMethod](mouseDownEvent, callbackValue105)
                                };
                            initializeVisualEditorValue228[addEventListenerMethod](keyUpEvent, initializeVisualEditorValue229);
                            callbackValue127[addEventListenerMethod](mouseMoveEvent, initializeVisualEditorValue230);
                            initializeVisualEditorValue228[addEventListenerMethod](blurEvent, initializeVisualEditorValue231);
                            initializeVisualEditorValue228[removeEventListenerMethod](mouseDownEvent, callbackValue105);
                            if (!initializeVisualEditorValue228.B) initializeVisualEditorValue228.B = initializeVisualEditorValue228[innerHTMLProperty];
                            callbackValue106.call(initializeVisualEditorValue228)
                        },
                        callbackValue106 = function() {
                            callbackValue83();
                            callbackValue81(this)
                        },
                        callbackValue107 = function(event) {
                            var initializeVisualEditorValue232 = event.target,
                                initializeVisualEditorValue233 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                            for (var initializeVisualEditorValue234 = initializeVisualEditorValue232; initializeVisualEditorValue234; initializeVisualEditorValue234 = initializeVisualEditorValue234[parentNodeProperty]) {
                                if (initializeVisualEditorValue234 == callbackValue18 || initializeVisualEditorValue234 == callbackValue2) {
                                    var initializeVisualEditorValue235 = callbackValue127[activeElementProperty];
                                    if (initializeVisualEditorValue235 && initializeVisualEditorValue235[getAttributeMethod](stringAttribute) && initializeVisualEditorValue235[innerHTMLProperty][splitMethod](caretMarkup)[lengthProperty] < 2) {
                                        var initializeVisualEditorValue236 = callbackValue126[contentWindowProperty][getSelectionMethod](),
                                            initializeVisualEditorValue237 = initializeVisualEditorValue236[getRangeAtMethod](0),
                                            initializeVisualEditorValue238 = documentObject[createElementMethod](caretValue);
                                        initializeVisualEditorValue237[insertNodeMethod](initializeVisualEditorValue238)
                                    }
                                    if (initializeVisualEditorValue232[parentNodeProperty][parentNodeProperty] != callbackValue68 || initializeVisualEditorValue232[disabledProperty]) {
                                        event[preventDefaultMethod]();
                                        event[stopPropagationMethod]()
                                    } else {
                                        var initializeVisualEditorValue239 = function(event) {
                                            this[removeEventListenerMethod](blurEvent, initializeVisualEditorValue239);
                                            if (initializeVisualEditorValue232[parentNodeProperty][parentNodeProperty] != callbackValue68 || initializeVisualEditorValue232[disabledProperty]) callbackValue108.call(this, event)
                                        };
                                        initializeVisualEditorValue232[addEventListenerMethod](blurEvent, initializeVisualEditorValue239)
                                    }
                                    return
                                } else if (initializeVisualEditorValue234 == initializeVisualEditorValue233) return
                            }
                            if (callbackValue127[querySelectorMethod](caretValue)) callbackValue108.call(this, event);
                            callbackValue83()
                        },
                        callbackValue108 = function(event) {
                            var initializeVisualEditorValue240 = callbackValue127[querySelectorMethod](caretValue);
                            if (initializeVisualEditorValue240) {
                                var initializeVisualEditorValue241 = event.target;
                                if (initializeVisualEditorValue241[parentNodeProperty][parentNodeProperty] != callbackValue68 || initializeVisualEditorValue241[disabledProperty] || event.type == blurEvent) {
                                    var initializeVisualEditorValue242 = initializeVisualEditorValue240[parentNodeProperty];
                                    initializeVisualEditorValue242[innerHTMLProperty] = initializeVisualEditorValue242[innerHTMLProperty][splitMethod](caretMarkup)[joinMethod](caretMarkup + ' ');
                                    initializeVisualEditorValue240 = initializeVisualEditorValue242[querySelectorMethod](caretValue);
                                    var initializeVisualEditorValue243 = callbackValue126[contentWindowProperty][getSelectionMethod](),
                                        initializeVisualEditorValue244 = initializeVisualEditorValue240[nextSiblingProperty],
                                        initializeVisualEditorValue245 = callbackValue127[createRangeMethod]();
                                    initializeVisualEditorValue245[setStartMethod](initializeVisualEditorValue244, 0);
                                    initializeVisualEditorValue245[setEndMethod](initializeVisualEditorValue244, 0);
                                    initializeVisualEditorValue245[collapseMethod](true);
                                    initializeVisualEditorValue243[removeAllRangesMethod]();
                                    initializeVisualEditorValue244[textContentProperty] = initializeVisualEditorValue244[textContentProperty][sliceMethod](1);
                                    initializeVisualEditorValue240[parentNodeProperty][removeChildMethod](initializeVisualEditorValue240);
                                    initializeVisualEditorValue243[addRangeMethod](initializeVisualEditorValue245);
                                    initializeVisualEditorValue242[focusEvent]()
                                }
                            }
                        },
                        callbackValue109 = function(event) {
                            if (event[keyCodeProperty] == 13) {
                                event[preventDefaultMethod]();
                                resetEditorFocus();
                                callbackValue83()
                            } else if (event[keyCodeProperty] == 17) callbackValue109.i = true;
                            else if (event[keyCodeProperty] == 83 && callbackValue109.i) {
                                event[preventDefaultMethod]();
                                if (!callbackValue4[disabledProperty]) {
                                    resetEditorFocus();
                                    callbackValue83();
                                    saveEditorContent(callbackValue79())
                                }
                            }
                        },
                        callbackValue110 = function(event) {
                            if (event[keyCodeProperty] == 17) callbackValue109.i = false
                        },
                        callbackValue111 = function(event) {
                            event[preventDefaultMethod]();
                            event[stopPropagationMethod]()
                        },
                        callbackValue112 = function() {
                            this[setAttributeMethod](dragOverAttribute, true);
                            return false
                        },
                        callbackValue113 = function() {
                            this[removeAttributeMethod](dragOverAttribute);
                            return false
                        },
                        callbackValue114 = function(event) {
                            var initializeVisualEditorValue246 = function(hfArgument1) {
                                    for (var hfValue2 = hfArgument1; hfValue2; hfValue2 = hfValue2[parentNodeProperty]) {
                                        var hfValue3 = hfValue2[tagNameProperty];
                                        if (hfValue3 && hfValue3[toLowerCaseMethod]() != 'body') {
                                            if (hfValue3[toLowerCaseMethod]() == 'a') return hfValue2
                                        } else break
                                    }
                                },
                                initializeVisualEditorValue247 = function(hfArgument2, hfArgument3) {
                                    if (hfArgument2) {
                                        if (hfArgument3[lastIndexOfMethod]('/') !== -1) hfArgument3 = hfArgument3[sliceMethod](hfArgument3[lastIndexOfMethod]('/') + 1);
                                        if (hfArgument2[lastIndexOfMethod]('/') !== -1) hfArgument3 = hfArgument2[sliceMethod](0, hfArgument2[lastIndexOfMethod]('/') + 1) + hfArgument3;
                                        if (hfArgument2 == hfArgument3) return true
                                    }
                                },
                                initializeVisualEditorValue248 = this;
                            event[preventDefaultMethod]();
                            if (windowObject.FormData) {
                                var initializeVisualEditorValue249 = event[dataTransferProperty].files[0];
                                if (initializeVisualEditorValue249 && initializeVisualEditorValue248[tagNameProperty][toLowerCaseMethod]() == imageTagName && event[dataTransferProperty].types[0][indexOfMethod]('text') === -1) {
                                    var initializeVisualEditorValue250 = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bz') * 1,
                                        initializeVisualEditorValue251 = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bA') * 1;
                                    if (initializeVisualEditorValue249.size < initializeVisualEditorValue250 && initializeVisualEditorValue249.size < initializeVisualEditorValue251) {
                                        var initializeVisualEditorValue252 = new FormData(),
                                            initializeVisualEditorValue253 = generateToken(),
                                            initializeVisualEditorValue254 = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bc');
                                        initializeVisualEditorValue252.append('file', initializeVisualEditorValue249);
                                        initializeVisualEditorValue252.append('token', initializeVisualEditorValue253);
                                        writeCookie(tokenCookieSuffix, initializeVisualEditorValue253);
                                        initializeVisualEditorValue252.append('replace', initializeVisualEditorValue248.src[replaceMethod](new RegExp('\\?[\\s\\S]*$', 'gi'), ''));
                                        initializeVisualEditorValue248[removeAttributeMethod](dragOverAttribute);
                                        initializeVisualEditorValue248[setAttributeMethod](dropAttribute, true);
                                        callbackValue9[textContentProperty] = initializeVisualEditorValue254 + ' (0%)';
                                        callbackValue9[classNameProperty] = 'b';
                                        fadeIn(callbackValue9);
                                        ajaxRequest(initializeVisualEditorValue252, function(hfArgument4) {
                                            callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bp');
                                            var hfValue5 = initializeVisualEditorValue248[getAttributeMethod](sourceAttribute),
                                                hfValue6 = initializeVisualEditorValue248[getAttributeMethod]('srcset'),
                                                hfValue7 = callbackValue118(imageTagName, sourceAttribute, hfValue5),
                                                hfValue8 = callbackValue119(imageTagName, sourceAttribute, hfValue5),
                                                hfValue9 = hfValue8[indexOfMethod](initializeVisualEditorValue248);
                                            if (hfValue7[lengthProperty] == hfValue8[lengthProperty] && hfValue9 !== -1) {
                                                if (callbackValue9[getAttributeMethod](dataAttributePrefix + 'cf') * 1) {
                                                    var hfValue10 = initializeVisualEditorValue246(initializeVisualEditorValue248);
                                                    if (hfValue10) {
                                                        var hfValue11 = hfValue10.z;
                                                        if (initializeVisualEditorValue247(hfValue11, hfValue5)) {
                                                            var hfValue12 = callbackValue118('a', 'href', hfValue11),
                                                                hfValue13 = callbackValue119('a', 'href', hfValue11),
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
                                                for (var hfValue16 = 0, hfValue8 = callbackValue127.body[querySelectorAllMethod](imageTagName), hfValue21 = callbackValue127[createElementMethod](imageTagName), hfValue18 = hfValue8[lengthProperty]; hfValue16 < hfValue18; hfValue16++) {
                                                    hfValue21.src = hfArgument4;
                                                    if (hfValue21.src == hfValue8[hfValue16].src) {
                                                        var hfValue22 = callbackValue127[createElementMethod](iframeTagName);
                                                        hfValue22[setAttributeMethod](sourceAttribute, hfValue21.src);
                                                        hfValue22[styleProperty][displayProperty] = noneValue;
                                                        hfValue22.onload = function() {
                                                            hfValue22.onload = function() {
                                                                hfValue22.onload = function() {
                                                                    hfValue22.onload = false;
                                                                    initializeVisualEditorValue248[setAttributeMethod](sourceAttribute, hfArgument4);
                                                                    callbackValue127.body[removeChildMethod](hfValue22)
                                                                };
                                                                callbackValue127.body[appendChildMethod](hfValue22)
                                                            };
                                                            hfValue22[contentWindowProperty].location.reload(true)
                                                        };
                                                        callbackValue127.body[appendChildMethod](hfValue22)
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
                                                            initializeVisualEditorValue248[setAttributeMethod]('srcset', hfValue24)
                                                        }
                                                        hfValue17 = hfValue17 + hfValue23 + hfValue19[hfValue16 + 1]
                                                    } else hfValue17 = hfValue17 + hfValue7[hfValue16] + hfValue19[hfValue16 + 1]
                                                }
                                                serializedSource = hfValue17;
                                                initializeVisualEditorValue248[setAttributeMethod](sourceAttribute, hfArgument4);
                                                initializeVisualEditorValue248[addEventListenerMethod]('load', function() {
                                                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bd');
                                                    callbackValue9[classNameProperty] = 'c';
                                                    callbackValue106.call(this)
                                                });
                                                callbackValue4[disabledProperty] = false
                                            } else {
                                                callbackValue9[classNameProperty] = 'd';
                                                callbackValue125()
                                            }
                                            initializeVisualEditorValue248[removeAttributeMethod](dropAttribute)
                                        }, function() {
                                            initializeVisualEditorValue248[removeAttributeMethod](dropAttribute);
                                            callbackValue9[classNameProperty] = 'd';
                                            if (this[getResponseHeaderMethod]('X-d')) callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bf');
                                            else if (this[getResponseHeaderMethod]('X-b')) callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bo');
                                            else callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'be')
                                        }, function() {
                                            initializeVisualEditorValue248[removeAttributeMethod](dropAttribute);
                                            callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'al');
                                            callbackValue9[classNameProperty] = 'd'
                                        }, function(hfArgument5, hfArgument6) {
                                            if (callbackValue9[textContentProperty][indexOfMethod]('(') != -1) callbackValue9[textContentProperty] = initializeVisualEditorValue254 + ' (' + (hfArgument5 / hfArgument6 * 100)[toFixedMethod](1) + '%)'
                                        })
                                    } else {
                                        initializeVisualEditorValue248[removeAttributeMethod](dragOverAttribute);
                                        if (initializeVisualEditorValue250 > initializeVisualEditorValue251) callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(initializeVisualEditorValue251) + ')';
                                        else callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(initializeVisualEditorValue250) + ')';
                                        callbackValue9[classNameProperty] = 'o';
                                        fadeIn(callbackValue9)
                                    }
                                } else {
                                    var initializeVisualEditorValue255 = callbackValue1.e;
                                    if (initializeVisualEditorValue255 && initializeVisualEditorValue255[tagNameProperty][toLowerCaseMethod]() == imageTagName && initializeVisualEditorValue248[tagNameProperty][toLowerCaseMethod]() == imageTagName) {
                                        if (initializeVisualEditorValue255 != initializeVisualEditorValue248) {
                                            var initializeVisualEditorValue256 = initializeVisualEditorValue255[getAttributeMethod](sourceAttribute),
                                                initializeVisualEditorValue257 = initializeVisualEditorValue255[getAttributeMethod]('alt'),
                                                initializeVisualEditorValue258 = initializeVisualEditorValue255[getAttributeMethod]('srcset'),
                                                initializeVisualEditorValue259 = initializeVisualEditorValue255[getAttributeMethod]('sizes'),
                                                initializeVisualEditorValue260 = initializeVisualEditorValue248[getAttributeMethod](sourceAttribute),
                                                initializeVisualEditorValue261 = initializeVisualEditorValue248[getAttributeMethod]('alt'),
                                                initializeVisualEditorValue262 = initializeVisualEditorValue248[getAttributeMethod]('srcset'),
                                                initializeVisualEditorValue263 = initializeVisualEditorValue248[getAttributeMethod]('sizes'),
                                                initializeVisualEditorValue264 = callbackValue118(imageTagName, sourceAttribute, initializeVisualEditorValue256),
                                                initializeVisualEditorValue265 = callbackValue118(imageTagName, sourceAttribute, initializeVisualEditorValue260),
                                                initializeVisualEditorValue266 = callbackValue119(imageTagName, sourceAttribute, initializeVisualEditorValue256),
                                                initializeVisualEditorValue267 = callbackValue119(imageTagName, sourceAttribute, initializeVisualEditorValue260),
                                                initializeVisualEditorValue268 = initializeVisualEditorValue266[indexOfMethod](initializeVisualEditorValue255),
                                                initializeVisualEditorValue269 = initializeVisualEditorValue267[indexOfMethod](initializeVisualEditorValue248);
                                            if (initializeVisualEditorValue264[lengthProperty] == initializeVisualEditorValue266[lengthProperty] && initializeVisualEditorValue265[lengthProperty] == initializeVisualEditorValue267[lengthProperty] && initializeVisualEditorValue268 !== -1 && initializeVisualEditorValue269 !== -1) {
                                                if (initializeVisualEditorValue256 != initializeVisualEditorValue260) {
                                                    if (callbackValue9[getAttributeMethod](dataAttributePrefix + 'cf') * 1) {
                                                        var initializeVisualEditorValue270 = initializeVisualEditorValue246(initializeVisualEditorValue255),
                                                            initializeVisualEditorValue271 = initializeVisualEditorValue246(initializeVisualEditorValue248),
                                                            initializeVisualEditorValue272 = serializedSource;
                                                        if (initializeVisualEditorValue270) {
                                                            var initializeVisualEditorValue273 = initializeVisualEditorValue270.z;
                                                            if (initializeVisualEditorValue247(initializeVisualEditorValue273, initializeVisualEditorValue256)) {
                                                                var initializeVisualEditorValue274 = callbackValue118('a', 'href', initializeVisualEditorValue273),
                                                                    initializeVisualEditorValue275 = callbackValue119('a', 'href', initializeVisualEditorValue273),
                                                                    initializeVisualEditorValue276 = initializeVisualEditorValue275[indexOfMethod](initializeVisualEditorValue270);
                                                                if (initializeVisualEditorValue274[lengthProperty] == initializeVisualEditorValue275[lengthProperty] && initializeVisualEditorValue276 !== -1) {
                                                                    var initializeVisualEditorValue277 = initializeVisualEditorValue260;
                                                                    if (initializeVisualEditorValue271 && initializeVisualEditorValue247(initializeVisualEditorValue271.z, initializeVisualEditorValue277)) initializeVisualEditorValue277 = initializeVisualEditorValue271.z;
                                                                    else {
                                                                        if (initializeVisualEditorValue273[lastIndexOfMethod]('/') !== -1) {
                                                                            if (initializeVisualEditorValue277[lastIndexOfMethod]('/') !== -1) initializeVisualEditorValue277 = initializeVisualEditorValue277[sliceMethod](initializeVisualEditorValue277[lastIndexOfMethod]('/') + 1);
                                                                            initializeVisualEditorValue277 = initializeVisualEditorValue273[sliceMethod](0, initializeVisualEditorValue273[lastIndexOfMethod]('/') + 1) + initializeVisualEditorValue277
                                                                        }
                                                                    }
                                                                    for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue279 = initializeVisualEditorValue274[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue274[initializeVisualEditorValue278])[joinMethod]('{+' + initializeVisualEditorValue273 + '+}')
                                                                }
                                                            }
                                                        }
                                                        if (initializeVisualEditorValue271) {
                                                            var initializeVisualEditorValue280 = initializeVisualEditorValue271.z;
                                                            if (initializeVisualEditorValue247(initializeVisualEditorValue280, initializeVisualEditorValue260)) {
                                                                var initializeVisualEditorValue281 = callbackValue118('a', 'href', initializeVisualEditorValue280),
                                                                    initializeVisualEditorValue282 = callbackValue119('a', 'href', initializeVisualEditorValue280),
                                                                    initializeVisualEditorValue283 = initializeVisualEditorValue282[indexOfMethod](initializeVisualEditorValue271);
                                                                if (initializeVisualEditorValue281[lengthProperty] == initializeVisualEditorValue282[lengthProperty] && initializeVisualEditorValue283 !== -1) {
                                                                    var initializeVisualEditorValue284 = initializeVisualEditorValue256;
                                                                    if (initializeVisualEditorValue270 && initializeVisualEditorValue247(initializeVisualEditorValue270.z, initializeVisualEditorValue284)) initializeVisualEditorValue284 = initializeVisualEditorValue270.z;
                                                                    else {
                                                                        if (initializeVisualEditorValue280[lastIndexOfMethod]('/') !== -1) {
                                                                            if (initializeVisualEditorValue284[lastIndexOfMethod]('/') !== -1) initializeVisualEditorValue284 = initializeVisualEditorValue284[sliceMethod](initializeVisualEditorValue284[lastIndexOfMethod]('/') + 1);
                                                                            initializeVisualEditorValue284 = initializeVisualEditorValue280[sliceMethod](0, initializeVisualEditorValue280[lastIndexOfMethod]('/') + 1) + initializeVisualEditorValue284
                                                                        }
                                                                    }
                                                                    for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue279 = initializeVisualEditorValue281[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue281[initializeVisualEditorValue278])[joinMethod]('{-' + initializeVisualEditorValue280 + '-}')
                                                                }
                                                            }
                                                        }
                                                        if (initializeVisualEditorValue277) {
                                                            for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{+' + initializeVisualEditorValue273 + '+}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue274[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                                if (initializeVisualEditorValue278 == initializeVisualEditorValue276) {
                                                                    var initializeVisualEditorValue286 = initializeVisualEditorValue274[initializeVisualEditorValue278][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue277 + '$2');
                                                                    initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue277 + '$2');
                                                                    initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue277 + '$2');
                                                                    initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue286 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                                } else initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue274[initializeVisualEditorValue278] + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                            }
                                                            initializeVisualEditorValue270.z = initializeVisualEditorValue277
                                                        }
                                                        if (initializeVisualEditorValue284) {
                                                            for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{-' + initializeVisualEditorValue280 + '-}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue281[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                                if (initializeVisualEditorValue278 == initializeVisualEditorValue283) {
                                                                    var initializeVisualEditorValue286 = initializeVisualEditorValue281[initializeVisualEditorValue278][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue284 + '$2');
                                                                    initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue284 + '$2');
                                                                    initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue284 + '$2');
                                                                    initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue286 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                                } else initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue281[initializeVisualEditorValue278] + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                            }
                                                            initializeVisualEditorValue271.z = initializeVisualEditorValue284
                                                        }
                                                        serializedSource = initializeVisualEditorValue272
                                                    }
                                                    for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue272 = serializedSource, initializeVisualEditorValue279 = initializeVisualEditorValue264[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue264[initializeVisualEditorValue278])[joinMethod]('{+' + initializeVisualEditorValue256 + '+}');
                                                    for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue279 = initializeVisualEditorValue265[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue265[initializeVisualEditorValue278])[joinMethod]('{-' + initializeVisualEditorValue260 + '-}');
                                                    for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{+' + initializeVisualEditorValue256 + '+}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue264[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                        var initializeVisualEditorValue287 = initializeVisualEditorValue264[initializeVisualEditorValue278];
                                                        if (initializeVisualEditorValue278 == initializeVisualEditorValue268) {
                                                            initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue260 + '$2');
                                                            initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue260 + '$2');
                                                            initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue260 + '$2');
                                                            initializeVisualEditorValue255[setAttributeMethod](sourceAttribute, initializeVisualEditorValue260);
                                                            if (initializeVisualEditorValue257) {
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue261 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue261 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue261 + '$2');
                                                                initializeVisualEditorValue255[setAttributeMethod]('alt', initializeVisualEditorValue261)
                                                            }
                                                            if (initializeVisualEditorValue258) {
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue262 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue262 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue262 + '$2');
                                                                initializeVisualEditorValue255[setAttributeMethod]('srcset', initializeVisualEditorValue262)
                                                            }
                                                            if (initializeVisualEditorValue259) {
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue263 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue263 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue263 + '$2');
                                                                initializeVisualEditorValue255[setAttributeMethod]('sizes', initializeVisualEditorValue263)
                                                            }
                                                        }
                                                        initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue287 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                    }
                                                    for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{-' + initializeVisualEditorValue260 + '-}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue265[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                        var initializeVisualEditorValue287 = initializeVisualEditorValue265[initializeVisualEditorValue278];
                                                        if (initializeVisualEditorValue278 == initializeVisualEditorValue269) {
                                                            initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue256 + '$2');
                                                            initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue256 + '$2');
                                                            initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue256 + '$2');
                                                            initializeVisualEditorValue248[setAttributeMethod](sourceAttribute, initializeVisualEditorValue256);
                                                            if (initializeVisualEditorValue261) {
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue257 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue257 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?alt\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue257 + '$2');
                                                                initializeVisualEditorValue248[setAttributeMethod]('alt', initializeVisualEditorValue257)
                                                            }
                                                            if (initializeVisualEditorValue262) {
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue258 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue258 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue258 + '$2');
                                                                initializeVisualEditorValue248[setAttributeMethod]('srcset', initializeVisualEditorValue258)
                                                            }
                                                            if (initializeVisualEditorValue263) {
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue259 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue259 + '$2');
                                                                initializeVisualEditorValue287 = initializeVisualEditorValue287[replaceMethod](new RegExp('^(<img[^>]+?sizes\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue259 + '$2');
                                                                initializeVisualEditorValue248[setAttributeMethod]('sizes', initializeVisualEditorValue259)
                                                            }
                                                        }
                                                        initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue287 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                    }
                                                    serializedSource = initializeVisualEditorValue272;
                                                    callbackValue1.e = false;
                                                    callbackValue75()
                                                }
                                                callbackValue106.call(this)
                                            } else {
                                                callbackValue9[classNameProperty] = 'd';
                                                callbackValue125();
                                                fadeIn(callbackValue9)
                                            }
                                        }
                                    } else if (!initializeVisualEditorValue255 && initializeVisualEditorValue248[tagNameProperty][toLowerCaseMethod]() == imageTagName) {
                                        var initializeVisualEditorValue288 = initializeVisualEditorValue248[getAttributeMethod](sourceAttribute),
                                            initializeVisualEditorValue262 = initializeVisualEditorValue248[getAttributeMethod]('srcset'),
                                            initializeVisualEditorValue289 = event[dataTransferProperty].getData('url');
                                        if (!initializeVisualEditorValue289) initializeVisualEditorValue289 = event[dataTransferProperty].getData('text');
                                        if (initializeVisualEditorValue289 && (initializeVisualEditorValue289 = initializeVisualEditorValue289[matchMethod](new RegExp('http[a-z0-9-=?&.:/]+?(?:png|jpe?g|gif)', 'gi')) + '') && initializeVisualEditorValue289 !== 'null') {
                                            var initializeVisualEditorValue290 = callbackValue118(imageTagName, sourceAttribute, initializeVisualEditorValue288),
                                                initializeVisualEditorValue291 = callbackValue119(imageTagName, sourceAttribute, initializeVisualEditorValue288),
                                                initializeVisualEditorValue269 = initializeVisualEditorValue291[indexOfMethod](initializeVisualEditorValue248);
                                            if (initializeVisualEditorValue290[lengthProperty] == initializeVisualEditorValue291[lengthProperty] && initializeVisualEditorValue269 !== -1) {
                                                if (callbackValue9[getAttributeMethod](dataAttributePrefix + 'cf') * 1) {
                                                    var initializeVisualEditorValue292 = initializeVisualEditorValue246(initializeVisualEditorValue248);
                                                    if (initializeVisualEditorValue292) {
                                                        var initializeVisualEditorValue293 = initializeVisualEditorValue292.z;
                                                        if (initializeVisualEditorValue247(initializeVisualEditorValue293, initializeVisualEditorValue288)) {
                                                            var initializeVisualEditorValue294 = callbackValue118('a', 'href', initializeVisualEditorValue293),
                                                                initializeVisualEditorValue295 = callbackValue119('a', 'href', initializeVisualEditorValue293),
                                                                initializeVisualEditorValue296 = initializeVisualEditorValue295[indexOfMethod](initializeVisualEditorValue292);
                                                            if (initializeVisualEditorValue294[lengthProperty] == initializeVisualEditorValue295[lengthProperty] && initializeVisualEditorValue296 !== -1) {
                                                                for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue272 = serializedSource, initializeVisualEditorValue279 = initializeVisualEditorValue294[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue294[initializeVisualEditorValue278])[joinMethod]('{-' + initializeVisualEditorValue293 + '-}');
                                                                for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{-' + initializeVisualEditorValue293 + '-}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue294[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                                    if (initializeVisualEditorValue278 == initializeVisualEditorValue296) {
                                                                        var initializeVisualEditorValue286 = initializeVisualEditorValue294[initializeVisualEditorValue278][replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                                        initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                                        initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<a[^>]+?href\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                                        initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue286 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                                    } else initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue294[initializeVisualEditorValue278] + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                                }
                                                                serializedSource = initializeVisualEditorValue272;
                                                                initializeVisualEditorValue292.z = initializeVisualEditorValue289
                                                            }
                                                        }
                                                    }
                                                }
                                                for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue272 = serializedSource, initializeVisualEditorValue279 = initializeVisualEditorValue290[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue290[initializeVisualEditorValue278])[joinMethod]('{-' + initializeVisualEditorValue288 + '-}');
                                                for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{-' + initializeVisualEditorValue288 + '-}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue290[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                    if (initializeVisualEditorValue278 == initializeVisualEditorValue269) {
                                                        var initializeVisualEditorValue297 = initializeVisualEditorValue290[initializeVisualEditorValue278][replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                        initializeVisualEditorValue297 = initializeVisualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                        initializeVisualEditorValue297 = initializeVisualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                        if (initializeVisualEditorValue262) {
                                                            var initializeVisualEditorValue298 = initializeVisualEditorValue262[splitMethod](',');
                                                            for (var initializeVisualEditorValue299 = 0, initializeVisualEditorValue300 = initializeVisualEditorValue298[lengthProperty]; initializeVisualEditorValue299 < initializeVisualEditorValue300; initializeVisualEditorValue299++) initializeVisualEditorValue298[initializeVisualEditorValue299] = initializeVisualEditorValue298[initializeVisualEditorValue299][replaceMethod](new RegExp('(^\\s*)[^\\s]+(\\s)', 'gi'), '$1' + initializeVisualEditorValue289 + '$2');
                                                            initializeVisualEditorValue298 = initializeVisualEditorValue298[joinMethod](',');
                                                            initializeVisualEditorValue297 = initializeVisualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue298 + '$2');
                                                            initializeVisualEditorValue297 = initializeVisualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue298 + '$2');
                                                            initializeVisualEditorValue297 = initializeVisualEditorValue297[replaceMethod](new RegExp('^(<img[^>]+?srcset\\s*=\\s*)[^\'">\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue298 + '$2');
                                                            initializeVisualEditorValue248[setAttributeMethod]('srcset', initializeVisualEditorValue298)
                                                        }
                                                        initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue297 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                    } else initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue290[initializeVisualEditorValue278] + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                }
                                                serializedSource = initializeVisualEditorValue272;
                                                initializeVisualEditorValue248[setAttributeMethod](sourceAttribute, initializeVisualEditorValue289);
                                                callbackValue106.call(this);
                                                callbackValue75()
                                            } else {
                                                callbackValue9[classNameProperty] = 'd';
                                                callbackValue125();
                                                fadeIn(callbackValue9)
                                            }
                                        } else {
                                            callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bq');
                                            callbackValue9[classNameProperty] = 'o';
                                            fadeIn(callbackValue9)
                                        }
                                    } else if (!initializeVisualEditorValue255 && initializeVisualEditorValue248[tagNameProperty][toLowerCaseMethod]() == 'edit') {
                                        var initializeVisualEditorValue301 = initializeVisualEditorValue248[nextElementSiblingProperty];
                                        if (initializeVisualEditorValue301 && initializeVisualEditorValue301[tagNameProperty][toLowerCaseMethod]() == iframeTagName) {
                                            var initializeVisualEditorValue288 = initializeVisualEditorValue301[getAttributeMethod](sourceAttribute),
                                                initializeVisualEditorValue289 = event[dataTransferProperty].getData('url');
                                            if (!initializeVisualEditorValue289) initializeVisualEditorValue289 = event[dataTransferProperty].getData('text');
                                            if (initializeVisualEditorValue289 && (initializeVisualEditorValue289 = initializeVisualEditorValue289[matchMethod](new RegExp('http[a-z0-9-=_?&.:/]{2,100}', 'gi')) + '') && initializeVisualEditorValue289 !== 'null') {
                                                var initializeVisualEditorValue302 = initializeVisualEditorValue289[matchMethod](new RegExp('[a-z0-9-]{2,40}\\.[a-z0-9]{2,10}(?=/)', 'gi')) + '',
                                                    initializeVisualEditorValue303 = initializeVisualEditorValue288[matchMethod](new RegExp('[a-z0-9-]{2,40}\\.[a-z0-9]{2,10}(?=/)', 'gi')) + '',
                                                    initializeVisualEditorValue304 = initializeVisualEditorValue289[matchMethod](new RegExp('[a-z0-9-_]{2,60}$', 'gi')) + '',
                                                    initializeVisualEditorValue305 = initializeVisualEditorValue288[matchMethod](new RegExp('[a-z0-9-_]{2,60}(?=\\?|$)', 'gi')) + '';
                                                if (initializeVisualEditorValue302 == initializeVisualEditorValue303 && initializeVisualEditorValue304[lengthProperty] == initializeVisualEditorValue305[lengthProperty]) {
                                                    var initializeVisualEditorValue306 = initializeVisualEditorValue288[splitMethod](initializeVisualEditorValue305)[joinMethod](initializeVisualEditorValue304),
                                                        initializeVisualEditorValue307 = callbackValue118(iframeTagName, sourceAttribute, initializeVisualEditorValue288),
                                                        initializeVisualEditorValue308 = callbackValue119(iframeTagName, sourceAttribute, initializeVisualEditorValue288),
                                                        initializeVisualEditorValue269 = initializeVisualEditorValue308[indexOfMethod](initializeVisualEditorValue301);
                                                    if (initializeVisualEditorValue307[lengthProperty] == initializeVisualEditorValue308[lengthProperty] && initializeVisualEditorValue269 !== -1) {
                                                        for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue272 = serializedSource, initializeVisualEditorValue279 = initializeVisualEditorValue307[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) initializeVisualEditorValue272 = initializeVisualEditorValue272[splitMethod](initializeVisualEditorValue307[initializeVisualEditorValue278])[joinMethod]('{-' + initializeVisualEditorValue288 + '-}');
                                                        for (var initializeVisualEditorValue278 = 0, initializeVisualEditorValue285 = initializeVisualEditorValue272[splitMethod]('{-' + initializeVisualEditorValue288 + '-}'), initializeVisualEditorValue272 = initializeVisualEditorValue285[0], initializeVisualEditorValue279 = initializeVisualEditorValue307[lengthProperty]; initializeVisualEditorValue278 < initializeVisualEditorValue279; initializeVisualEditorValue278++) {
                                                            if (initializeVisualEditorValue278 == initializeVisualEditorValue269) {
                                                                var initializeVisualEditorValue286 = initializeVisualEditorValue307[initializeVisualEditorValue278][replaceMethod](new RegExp('^(<iframe[^>]+?src\\s*=\\s*")[^"]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue306 + '$2');
                                                                initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<iframe[^>]+?src\\s*=\\s*\')[^\']+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue306 + '$2');
                                                                initializeVisualEditorValue286 = initializeVisualEditorValue286[replaceMethod](new RegExp('^(<iframe[^>]+?src\\s*=\\s*)[^"\'>\\s]+([\\s\\S]+)$', 'gi'), '$1' + initializeVisualEditorValue306 + '$2');
                                                                initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue286 + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                            } else initializeVisualEditorValue272 = initializeVisualEditorValue272 + initializeVisualEditorValue307[initializeVisualEditorValue278] + initializeVisualEditorValue285[initializeVisualEditorValue278 + 1]
                                                        }
                                                        serializedSource = initializeVisualEditorValue272;
                                                        initializeVisualEditorValue301[setAttributeMethod](sourceAttribute, initializeVisualEditorValue306);
                                                        callbackValue106.call(this);
                                                        callbackValue75()
                                                    } else {
                                                        callbackValue9[classNameProperty] = 'd';
                                                        callbackValue125();
                                                        fadeIn(callbackValue9)
                                                    }
                                                } else {
                                                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bq');
                                                    callbackValue9[classNameProperty] = 'o';
                                                    fadeIn(callbackValue9)
                                                }
                                            }
                                        }
                                    }
                                    initializeVisualEditorValue248[removeAttributeMethod](dragOverAttribute)
                                }
                            } else {
                                initializeVisualEditorValue248[removeAttributeMethod](dragOverAttribute);
                                callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'an');
                                callbackValue9[classNameProperty] = 'o';
                                fadeIn(callbackValue9)
                            }
                        },
                        callbackValue115 = function() {
                            var initializeVisualEditorValue309 = callbackValue72(callbackValue127.body),
                                initializeVisualEditorValue310 = callbackValue127[querySelectorAllMethod](imageTagName),
                                initializeVisualEditorValue311 = callbackValue127[querySelectorAllMethod]('a'),
                                initializeVisualEditorValue312 = callbackValue127[querySelectorAllMethod](callbackValue71),
                                initializeVisualEditorValue313 = documentObject[querySelectorMethod]('#i')[innerHTMLProperty],
                                initializeVisualEditorValue314 = documentObject[createElementMethod]('style');
                            initializeVisualEditorValue314[innerHTMLProperty] = initializeVisualEditorValue313 + '[data-myvibehtml-selection="section"]{outline:3px solid #f59e0b !important;outline-offset:5px;}' + '[data-myvibehtml-selection="block"]{outline:3px solid #2dd4bf !important;outline-offset:3px;}' + '[data-myvibehtml-selection="element"]{outline:3px solid #14b8a6 !important;outline-offset:2px;}';
                            callbackValue127.head[appendChildMethod](initializeVisualEditorValue314);
                            callbackValue127[addEventListenerMethod](mouseDownEvent, handleEditorSelection);
                            callbackValue127[addEventListenerMethod]('contextmenu', showContextMenu);
                            callbackValue127[addEventListenerMethod](keyDownEvent, function(event) {
                                if (event[keyCodeProperty] == 27) hideContextMenu()
                            });
                            var initializeVisualEditorValue315 = callbackValue80(serializedSource);
                            for (var initializeVisualEditorValue316 = 0, initializeVisualEditorValue317 = initializeVisualEditorValue309[lengthProperty]; initializeVisualEditorValue316 < initializeVisualEditorValue317; initializeVisualEditorValue316++) {
                                var initializeVisualEditorValue318 = callbackValue127[createElementMethod]('edit');
                                initializeVisualEditorValue318[setAttributeMethod](stringAttribute, true);
                                initializeVisualEditorValue318[setAttributeMethod]('contenteditable', true);
                                initializeVisualEditorValue309[initializeVisualEditorValue316][parentNodeProperty][insertBeforeMethod](initializeVisualEditorValue318, initializeVisualEditorValue309[initializeVisualEditorValue316]);
                                initializeVisualEditorValue318[appendChildMethod](initializeVisualEditorValue309[initializeVisualEditorValue316]);
                                var initializeVisualEditorValue319 = initializeVisualEditorValue318[innerHTMLProperty],
                                    initializeVisualEditorValue320 = initializeVisualEditorValue309[initializeVisualEditorValue316][textContentProperty],
                                    initializeVisualEditorValue321 = initializeVisualEditorValue315[splitMethod]('>' + initializeVisualEditorValue319 + '<')[lengthProperty] - 1;
                                for (var initializeVisualEditorValue322 = 0, initializeVisualEditorValue323 = 0; initializeVisualEditorValue322 < initializeVisualEditorValue317; initializeVisualEditorValue322++) {
                                    if (initializeVisualEditorValue320 == initializeVisualEditorValue309[initializeVisualEditorValue322][textContentProperty]) {
                                        if (initializeVisualEditorValue319 == initializeVisualEditorValue320) initializeVisualEditorValue323++;
                                        else {
                                            var initializeVisualEditorValue324 = initializeVisualEditorValue309[initializeVisualEditorValue322][cloneNodeMethod](true),
                                                initializeVisualEditorValue325 = callbackValue127[createElementMethod]('span');
                                            initializeVisualEditorValue325[appendChildMethod](initializeVisualEditorValue324);
                                            if (initializeVisualEditorValue319 == initializeVisualEditorValue325[innerHTMLProperty]) initializeVisualEditorValue323++
                                        }
                                    }
                                }
                                if (initializeVisualEditorValue321 != initializeVisualEditorValue323) initializeVisualEditorValue318[setAttributeMethod](disabledProperty, true);
                                initializeVisualEditorValue318[addEventListenerMethod](mouseDownEvent, callbackValue105);
                                initializeVisualEditorValue318.ondrop = function(event) {
                                    var hgValue1 = callbackValue127[querySelectorMethod]('[' + focusAttribute + '] img');
                                    if (hgValue1) {
                                        for (var hgValue2 = hgValue1; hgValue2; hgValue2 = hgValue2[parentNodeProperty])
                                            if (hgValue2[getAttributeMethod](focusAttribute)) hgValue2[removeAttributeMethod](focusAttribute);
                                        event[preventDefaultMethod]()
                                    }
                                    if (callbackValue127[activeElementProperty]) callbackValue127[activeElementProperty][blurEvent]();
                                    callbackValue105.call(this, event)
                                };
                                initializeVisualEditorValue318.ondragend = function() {
                                    var hgValue3 = callbackValue127[querySelectorMethod]('[' + focusAttribute + '] [' + stringAttribute + ']');
                                    if (hgValue3) {
                                        callbackValue73(hgValue3);
                                        callbackValue75()
                                    }
                                }
                            }
                            for (var initializeVisualEditorValue316 = 0, initializeVisualEditorValue317 = initializeVisualEditorValue310[lengthProperty]; initializeVisualEditorValue316 < initializeVisualEditorValue317; initializeVisualEditorValue316++) {
                                initializeVisualEditorValue310[initializeVisualEditorValue316].ondragover = callbackValue112;
                                initializeVisualEditorValue310[initializeVisualEditorValue316].ondragleave = callbackValue113;
                                initializeVisualEditorValue310[initializeVisualEditorValue316].ondrop = callbackValue114;
                                initializeVisualEditorValue310[initializeVisualEditorValue316].ondragstart = function() {
                                    callbackValue1.e = this
                                };
                                initializeVisualEditorValue310[initializeVisualEditorValue316][addEventListenerMethod](mouseDownEvent, callbackValue106);
                                if (initializeVisualEditorValue310[initializeVisualEditorValue316][getAttributeMethod]('usemap')) initializeVisualEditorValue310[initializeVisualEditorValue316][removeAttributeMethod]('usemap')
                            }
                            for (var initializeVisualEditorValue316 = 0, initializeVisualEditorValue317 = initializeVisualEditorValue311[lengthProperty]; initializeVisualEditorValue316 < initializeVisualEditorValue317; initializeVisualEditorValue316++) {
                                initializeVisualEditorValue311[initializeVisualEditorValue316].z = initializeVisualEditorValue311[initializeVisualEditorValue316][getAttributeMethod]('href');
                                initializeVisualEditorValue311[initializeVisualEditorValue316][removeAttributeMethod]('href')
                            }
                            for (var initializeVisualEditorValue316 = 0, initializeVisualEditorValue317 = initializeVisualEditorValue312[lengthProperty]; initializeVisualEditorValue316 < initializeVisualEditorValue317; initializeVisualEditorValue316++) {
                                var initializeVisualEditorValue326 = initializeVisualEditorValue312[initializeVisualEditorValue316][tagNameProperty][toLowerCaseMethod]();
                                if ('|iframe|object|video|audio|' [indexOfMethod]('|' + initializeVisualEditorValue326 + '|') !== -1) {
                                    var initializeVisualEditorValue318 = callbackValue127[createElementMethod]('edit');
                                    initializeVisualEditorValue318[setAttributeMethod](objectAttribute, true);
                                    initializeVisualEditorValue318[styleProperty][widthProperty] = initializeVisualEditorValue312[initializeVisualEditorValue316].offsetWidth + 'px';
                                    initializeVisualEditorValue318[styleProperty][heightProperty] = initializeVisualEditorValue312[initializeVisualEditorValue316].offsetHeight + 'px';
                                    initializeVisualEditorValue318[styleProperty][marginLeftProperty] = windowObject[getComputedStyleMethod](initializeVisualEditorValue312[initializeVisualEditorValue316])[marginLeftProperty];
                                    initializeVisualEditorValue318[styleProperty][marginTopProperty] = windowObject[getComputedStyleMethod](initializeVisualEditorValue312[initializeVisualEditorValue316])['marginTop'];
                                    initializeVisualEditorValue318[styleProperty].marginBottom = ('-' + initializeVisualEditorValue318[styleProperty][heightProperty]);
                                    initializeVisualEditorValue312[initializeVisualEditorValue316][parentNodeProperty][insertBeforeMethod](initializeVisualEditorValue318, initializeVisualEditorValue312[initializeVisualEditorValue316]);
                                    initializeVisualEditorValue318.realNode = initializeVisualEditorValue312[initializeVisualEditorValue316];
                                    if (initializeVisualEditorValue326 == iframeTagName) {
                                        initializeVisualEditorValue318.ondragover = callbackValue112;
                                        initializeVisualEditorValue318.ondragleave = callbackValue113;
                                        initializeVisualEditorValue318.ondrop = callbackValue114
                                    }
                                    initializeVisualEditorValue318[addEventListenerMethod](mouseDownEvent, function(event) {
                                        callbackValue106.call(this.realNode)
                                    })
                                } else {
                                    initializeVisualEditorValue312[initializeVisualEditorValue316][addEventListenerMethod](mouseDownEvent, function(event) {
                                        callbackValue111(event);
                                        callbackValue106.call(this)
                                    });
                                    initializeVisualEditorValue312[initializeVisualEditorValue316][addEventListenerMethod](mouseUpEvent, callbackValue111);
                                    initializeVisualEditorValue312[initializeVisualEditorValue316][addEventListenerMethod](clickEvent, callbackValue111)
                                }
                            }
                            documentObject[addEventListenerMethod](keyDownEvent, callbackValue109);
                            callbackValue127[addEventListenerMethod](keyDownEvent, callbackValue109);
                            documentObject[addEventListenerMethod](keyUpEvent, callbackValue110);
                            callbackValue127[addEventListenerMethod](keyUpEvent, callbackValue110);
                            documentObject[addEventListenerMethod](mouseDownEvent, callbackValue107);
                            callbackValue127[addEventListenerMethod](mouseDownEvent, callbackValue107);
                            documentObject[addEventListenerMethod](mouseUpEvent, callbackValue108);
                            callbackValue127[addEventListenerMethod](mouseUpEvent, callbackValue108)
                        },
                        callbackValue116 = function() {
                            callbackValue126[styleProperty][heightProperty] = documentObject[documentElementProperty][clientHeightProperty] - callbackValue1[clientHeightProperty] + 'px'
                        },
                        callbackValue117 = function(initializeVisualEditorArgument33) {
                            var initializeVisualEditorValue327 = documentObject[querySelectorMethod]('#h')[innerHTMLProperty],
                                initializeVisualEditorValue328 = initializeVisualEditorArgument33[splitMethod]('<_cript')[joinMethod](openingScriptTag)[splitMethod]('</_cript')[joinMethod](closingScriptTag);
                            initializeVisualEditorValue328 = initializeVisualEditorValue328[splitMethod]('<?')[joinMethod]('<!--~~?')[splitMethod]('?>')[joinMethod]('?~~-->');
                            initializeVisualEditorValue328 = initializeVisualEditorValue328[replaceMethod](new RegExp('<meta( +[^>]*?)*?>', 'gi'), '');
                            var initializeVisualEditorValue329 = (callbackValue9[getAttributeMethod](dataAttributePrefix + 'cg') * 1),
                                initializeVisualEditorValue330 = (callbackValue9[getAttributeMethod](dataAttributePrefix + 'ch') * 1);
                            if (!initializeVisualEditorValue329) initializeVisualEditorValue328 = initializeVisualEditorValue328[replaceMethod](new RegExp(openingScriptTag + '[\\s\\S]+?/script>', 'gi'), '');
                            if (!initializeVisualEditorValue330) {
                                initializeVisualEditorValue328 = initializeVisualEditorValue328[replaceMethod](new RegExp('<style[\\s\\S]+?/style>', 'gi'), '');
                                initializeVisualEditorValue328 = initializeVisualEditorValue328[replaceMethod](new RegExp('<link[^>]+?>', 'gi'), '')
                            }
                            if (initializeVisualEditorValue328[matchMethod](new RegExp('<head', 'gi'))) initializeVisualEditorValue328 = initializeVisualEditorValue328[replaceMethod](new RegExp('(<head( +[^>]*?)*?>)', 'gi'), '$1' + initializeVisualEditorValue327);
                            else initializeVisualEditorValue328 = initializeVisualEditorValue327 + initializeVisualEditorValue328;
                            return initializeVisualEditorValue328
                        },
                        callbackValue118 = function(initializeVisualEditorArgument34, initializeVisualEditorArgument35, initializeVisualEditorArgument36) {
                            var initializeVisualEditorValue331 = serializedSource[matchMethod](new RegExp('<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '[^>]+?>', 'gi'));
                            for (var initializeVisualEditorValue332 = 0, initializeVisualEditorValue333 = [], initializeVisualEditorValue334 = initializeVisualEditorValue331[lengthProperty]; initializeVisualEditorValue332 < initializeVisualEditorValue334; initializeVisualEditorValue332++) {
                                var initializeVisualEditorValue335 = initializeVisualEditorValue331[initializeVisualEditorValue332][matchMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*"', 'gi'));
                                if (!initializeVisualEditorValue335) {
                                    initializeVisualEditorValue335 = initializeVisualEditorValue331[initializeVisualEditorValue332][matchMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*\'', 'gi'));
                                    if (!initializeVisualEditorValue335) initializeVisualEditorValue335 = initializeVisualEditorValue331[initializeVisualEditorValue332][replaceMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=', 'gi'), '')[matchMethod](new RegExp('^[^\\s>]+', 'gi'));
                                    else initializeVisualEditorValue335 = initializeVisualEditorValue331[initializeVisualEditorValue332][replaceMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*\'', 'gi'), '')[matchMethod](new RegExp('^[^\']+', 'gi'))
                                } else initializeVisualEditorValue335 = initializeVisualEditorValue331[initializeVisualEditorValue332][replaceMethod](new RegExp('^<' + initializeVisualEditorArgument34 + '\\s+?(?:[^>]+?\\s+?)?' + initializeVisualEditorArgument35 + '\\s*=\\s*"', 'gi'), '')[matchMethod](new RegExp('^[^"]+', 'gi'));
                                if (initializeVisualEditorValue335) {
                                    if (initializeVisualEditorArgument36 == initializeVisualEditorValue335[0]) initializeVisualEditorValue333[initializeVisualEditorValue333[lengthProperty]] = initializeVisualEditorValue331[initializeVisualEditorValue332];
                                    else {
                                        var initializeVisualEditorValue336 = documentObject[createElementMethod](textareaTagName);
                                        initializeVisualEditorValue336[innerHTMLProperty] = initializeVisualEditorValue335[0];
                                        if (initializeVisualEditorArgument36 == initializeVisualEditorValue336[valueProperty]) initializeVisualEditorValue333[initializeVisualEditorValue333[lengthProperty]] = initializeVisualEditorValue331[initializeVisualEditorValue332]
                                    }
                                }
                            }
                            return initializeVisualEditorValue333
                        },
                        callbackValue119 = function(initializeVisualEditorArgument37, initializeVisualEditorArgument38, initializeVisualEditorArgument39) {
                            var initializeVisualEditorValue337 = callbackValue127.body[querySelectorAllMethod](initializeVisualEditorArgument37);
                            for (var initializeVisualEditorValue338 = 0, initializeVisualEditorValue339 = [], initializeVisualEditorValue340 = false, initializeVisualEditorValue341 = initializeVisualEditorValue337[lengthProperty]; initializeVisualEditorValue338 < initializeVisualEditorValue341; initializeVisualEditorValue338++) {
                                if (initializeVisualEditorArgument38 == 'href') initializeVisualEditorValue340 = initializeVisualEditorValue337[initializeVisualEditorValue338].z;
                                else initializeVisualEditorValue340 = initializeVisualEditorValue337[initializeVisualEditorValue338][getAttributeMethod](initializeVisualEditorArgument38);
                                if (initializeVisualEditorValue340 == initializeVisualEditorArgument39) initializeVisualEditorValue339[initializeVisualEditorValue339[lengthProperty]] = initializeVisualEditorValue337[initializeVisualEditorValue338]
                            }
                            return initializeVisualEditorValue339
                        },
                        callbackValue120 = function(initializeVisualEditorArgument40, initializeVisualEditorArgument41) {
                            initializeVisualEditorArgument40 = initializeVisualEditorArgument40[toLowerCaseMethod]();
                            var initializeVisualEditorValue342 = [],
                                initializeVisualEditorValue343 = initializeVisualEditorArgument40[matchMethod](new RegExp('<[a-z0-9]+(?=\\s|>|$)', 'gi')),
                                initializeVisualEditorValue344 = initializeVisualEditorArgument41[toLowerCaseMethod]()[matchMethod](new RegExp('<[a-z0-9]+(?=\\s|>|$)', 'gi'));
                            for (var initializeVisualEditorValue345 = 0, initializeVisualEditorValue346 = 0, initializeVisualEditorValue347 = 0, initializeVisualEditorValue348 = initializeVisualEditorValue343[lengthProperty]; initializeVisualEditorValue345 < initializeVisualEditorValue348; initializeVisualEditorValue345++) {
                                initializeVisualEditorValue346 = initializeVisualEditorArgument40[sliceMethod](initializeVisualEditorValue346 + initializeVisualEditorValue347)[searchMethod](new RegExp(initializeVisualEditorValue343[initializeVisualEditorValue345] + '(?=\\s|>|$)', 'gi')) + initializeVisualEditorValue346 + initializeVisualEditorValue347;
                                initializeVisualEditorValue347 = initializeVisualEditorArgument40[sliceMethod](initializeVisualEditorValue346)[indexOfMethod](initializeVisualEditorValue343[initializeVisualEditorValue345]) + initializeVisualEditorValue343[initializeVisualEditorValue345][lengthProperty];
                                initializeVisualEditorValue342[initializeVisualEditorValue345] = initializeVisualEditorValue346
                            }
                            for (var initializeVisualEditorValue345 = 0, skip = 0, initializeVisualEditorValue348 = initializeVisualEditorValue344[lengthProperty]; initializeVisualEditorValue345 < (initializeVisualEditorValue348 - skip); initializeVisualEditorValue345++) {
                                if (initializeVisualEditorValue343[initializeVisualEditorValue343[lengthProperty] - 1 - initializeVisualEditorValue345] != initializeVisualEditorValue344[initializeVisualEditorValue344[lengthProperty] - 1 - initializeVisualEditorValue345 - skip]) {
                                    if (initializeVisualEditorValue344[initializeVisualEditorValue344[lengthProperty] - 1 - initializeVisualEditorValue345 - skip] == '<tbody') {
                                        skip++;
                                        initializeVisualEditorValue345--
                                    } else return false
                                }
                            }
                            return initializeVisualEditorValue342[initializeVisualEditorValue343[lengthProperty] - initializeVisualEditorValue345]
                        },
                        callbackValue121 = function(initializeVisualEditorArgument42, initializeVisualEditorArgument43) {
                            var initializeVisualEditorValue349 = [],
                                initializeVisualEditorValue350 = initializeVisualEditorArgument42[toLowerCaseMethod]()[matchMethod](new RegExp('/[a-z0-9]+>', 'gi')),
                                initializeVisualEditorValue351 = initializeVisualEditorArgument42[toLowerCaseMethod]()[matchMethod](new RegExp('/[a-z0-9]+>\\s*', 'gi')),
                                initializeVisualEditorValue352 = initializeVisualEditorArgument43[toLowerCaseMethod]()[matchMethod](new RegExp('/[a-z0-9]+>', 'gi'));
                            for (var initializeVisualEditorValue353 = 0, initializeVisualEditorValue354 = serializedSource[lengthProperty] - initializeVisualEditorArgument42[lengthProperty] - 1, initializeVisualEditorValue355 = initializeVisualEditorValue350[lengthProperty]; initializeVisualEditorValue353 < initializeVisualEditorValue355; initializeVisualEditorValue353++) {
                                initializeVisualEditorValue349[initializeVisualEditorValue353] = serializedSource[sliceMethod](initializeVisualEditorValue354)[indexOfMethod](initializeVisualEditorValue350[initializeVisualEditorValue353]) + initializeVisualEditorValue354 + initializeVisualEditorValue351[initializeVisualEditorValue353][lengthProperty];
                                initializeVisualEditorValue354 = initializeVisualEditorValue349[initializeVisualEditorValue353]
                            }
                            for (var initializeVisualEditorValue353 = 0, skip = 0, initializeVisualEditorValue355 = initializeVisualEditorValue352[lengthProperty]; initializeVisualEditorValue353 < (initializeVisualEditorValue355 - skip); initializeVisualEditorValue353++) {
                                if (initializeVisualEditorValue350[initializeVisualEditorValue353] != initializeVisualEditorValue352[initializeVisualEditorValue353 + skip]) {
                                    if (initializeVisualEditorValue352[initializeVisualEditorValue353 + skip] == '/tbody>' || initializeVisualEditorValue352[initializeVisualEditorValue353 + skip] == '/li>' || initializeVisualEditorValue352[initializeVisualEditorValue353 + skip] == '/p>' || initializeVisualEditorValue352[initializeVisualEditorValue353 + skip] == '/td>') {
                                        skip++;
                                        initializeVisualEditorValue353--
                                    } else return false
                                }
                            }
                            if (initializeVisualEditorValue353 === 0) return initializeVisualEditorValue349[initializeVisualEditorValue353] - initializeVisualEditorValue351[initializeVisualEditorValue353][lengthProperty] - 1;
                            else return initializeVisualEditorValue349[initializeVisualEditorValue353 - 1]
                        },
                        callbackValue122 = function(initializeVisualEditorArgument44) {
                            var initializeVisualEditorValue356 = callbackValue127.body[querySelectorAllMethod]('[' + stringAttribute + ']');
                            for (var initializeVisualEditorValue357 = 0, initializeVisualEditorValue358 = [], initializeVisualEditorValue359 = initializeVisualEditorValue356[lengthProperty]; initializeVisualEditorValue357 < initializeVisualEditorValue359; initializeVisualEditorValue357++)
                                if (initializeVisualEditorArgument44 == callbackValue102(initializeVisualEditorValue356[initializeVisualEditorValue357])) initializeVisualEditorValue358[initializeVisualEditorValue358[lengthProperty]] = initializeVisualEditorValue356[initializeVisualEditorValue357];
                            return initializeVisualEditorValue358
                        },
                        callbackValue123 = function(initializeVisualEditorArgument45) {
                            callbackValue124.o = [], callbackValue124.p = [];
                            callbackValue124.q = [];
                            callbackValue124.r = [];
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[splitMethod]('<?')[joinMethod]('<!--~~?')[splitMethod]('?>')[joinMethod]('?~~-->');
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[replaceMethod](new RegExp('^[\\s\\S]+?(?:</head>|<body[^>]>|<div[^>]>)', 'gi'), function(str1) {
                                if (!callbackValue124.o[lengthProperty]) {
                                    callbackValue124.o[callbackValue124.o[lengthProperty]] = str1;
                                    return '{!~head' + (callbackValue124.o[lengthProperty] - 1) + '~!}'
                                } else return str1
                            });
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[replaceMethod](new RegExp('<!--[\\s\\S]+?-->|<_cript[\\s\\S]+?/_cript>', 'gi'), function(str1) {
                                if (str1[indexOfMethod]('<!--') === 0) {
                                    callbackValue124.p[callbackValue124.p[lengthProperty]] = str1;
                                    return '{!~comment' + (callbackValue124.p[lengthProperty] - 1) + '~!}'
                                } else {
                                    callbackValue124.q[callbackValue124.q[lengthProperty]] = str1;
                                    return '{!~script' + (callbackValue124.q[lengthProperty] - 1) + '~!}'
                                }
                            });
                            initializeVisualEditorArgument45 = initializeVisualEditorArgument45[replaceMethod](new RegExp('<style[\\s\\S]+?/style>', 'gi'), function(str1) {
                                callbackValue124.r[callbackValue124.r[lengthProperty]] = str1;
                                return '{!~style' + (callbackValue124.r[lengthProperty] - 1) + '~!}'
                            });
                            return initializeVisualEditorArgument45[splitMethod]('<br/>')[joinMethod](lineBreakMarkup)[splitMethod]('<br />')[joinMethod](lineBreakMarkup)[splitMethod]('</br>')[joinMethod](lineBreakMarkup)
                        },
                        callbackValue124 = function(initializeVisualEditorArgument46) {
                            for (var initializeVisualEditorValue360 = 0, initializeVisualEditorValue361 = callbackValue124.r[lengthProperty]; initializeVisualEditorValue360 < initializeVisualEditorValue361; initializeVisualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~style' + initializeVisualEditorValue360 + '~!}')[joinMethod](callbackValue124.r[initializeVisualEditorValue360]);
                            for (var initializeVisualEditorValue360 = 0, initializeVisualEditorValue361 = callbackValue124.q[lengthProperty]; initializeVisualEditorValue360 < initializeVisualEditorValue361; initializeVisualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~script' + initializeVisualEditorValue360 + '~!}')[joinMethod](callbackValue124.q[initializeVisualEditorValue360]);
                            for (var initializeVisualEditorValue360 = 0, initializeVisualEditorValue361 = callbackValue124.p[lengthProperty]; initializeVisualEditorValue360 < initializeVisualEditorValue361; initializeVisualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~comment' + initializeVisualEditorValue360 + '~!}')[joinMethod](callbackValue124.p[initializeVisualEditorValue360]);
                            for (var initializeVisualEditorValue360 = 0, initializeVisualEditorValue361 = callbackValue124.o[lengthProperty]; initializeVisualEditorValue360 < initializeVisualEditorValue361; initializeVisualEditorValue360++) initializeVisualEditorArgument46 = initializeVisualEditorArgument46[splitMethod]('{!~head' + initializeVisualEditorValue360 + '~!\}')[joinMethod](callbackValue124.o[initializeVisualEditorValue360]);
                            return initializeVisualEditorArgument46[splitMethod]('<!--~~?')[joinMethod]('<?')[splitMethod]('?~~-->')[joinMethod]('?>')
                        },
                        callbackValue125 = function() {
                            if ((callbackValue9[getAttributeMethod](dataAttributePrefix + 'cg') * 1)) {
                                callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bs') + ' (' + callbackValue9[getAttributeMethod](dataAttributePrefix + 'bu') + ')';
                                var initializeVisualEditorValue362 = callbackValue9[firstElementChildProperty];
                                if (initializeVisualEditorValue362) {
                                    initializeVisualEditorValue362[addEventListenerMethod](clickEvent, function() {
                                        var hqValue1 = generateToken();
                                        writeCookie(tokenCookieSuffix, hqValue1);
                                        callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bv');
                                        callbackValue9[classNameProperty] = 'b';
                                        windowObject[clearIntervalMethod](callbackValue9.a);
                                        callbackValue9[styleProperty][opacityProperty] = '';
                                        ajaxRequest('scripts=1' + tokenParameter + hqValue1, function() {
                                            writeCookie(scriptsCookieSuffix, 1);
                                            locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '')
                                        }, function() {
                                            callbackValue9[classNameProperty] = 'd';
                                            callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'aj')
                                        }, function() {
                                            callbackValue9[classNameProperty] = 'd';
                                            callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'al')
                                        })
                                    })
                                }
                            } else callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'br')
                        },
                        callbackValue126 = documentObject[querySelectorMethod](iframeTagName),
                        callbackValue127 = callbackValue126[contentWindowProperty].document,
                        callbackValue128 = serializedSource;
                    serializedSource = callbackValue123(callbackValue128);
                    callbackValue11[innerHTMLProperty] = serializedSource;
                    callbackValue3[addEventListenerMethod](clickEvent, function() {
                        var initializeVisualEditorValue363 = false,
                            initializeVisualEditorValue364 = callbackValue127[querySelectorMethod]('[' + focusAttribute + ']');
                        if (initializeVisualEditorValue364) {
                            var initializeVisualEditorValue365 = callbackValue93(initializeVisualEditorValue364),
                                initializeVisualEditorValue366 = callbackValue94(initializeVisualEditorValue364);
                            if (initializeVisualEditorValue365 && initializeVisualEditorValue366) {
                                serializedSource = serializedSource[sliceMethod](0, initializeVisualEditorValue365) + '<fo' + 'cus>' + serializedSource[sliceMethod](initializeVisualEditorValue365, initializeVisualEditorValue366) + '</fo' + 'cus>' + serializedSource[sliceMethod](initializeVisualEditorValue366);
                                initializeVisualEditorValue363 = callbackValue79()
                            }
                        }
                        if (!callbackValue4[disabledProperty] && !initializeVisualEditorValue363) initializeVisualEditorValue363 = callbackValue79();
                        switchEditorMode(initializeVisualEditorValue363)
                    });
                    callbackValue2[classNameProperty] = 'l';
                    windowObject[addEventListenerMethod](resizeEvent, callbackValue116);
                    callbackValue116();
                    var callbackValue129 = readCookie(scriptsCookieSuffix);
                    if (callbackValue129) {
                        removeCookie(scriptsCookieSuffix);
                        callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bw');
                        callbackValue9[classNameProperty] = 'c';
                        fadeIn(callbackValue9)
                    }
                    callbackValue127.open();
                    callbackValue127.write(callbackValue117(callbackValue128));
                    callbackValue127.close();
                    if (sourceMapApi) sourceMapState = sourceMapApi.build(serializedSource, callbackValue127);
                    windowObject[addEventListenerMethod]('load', function() {
                        callbackValue115()
                    });
                    callbackValue4[addEventListenerMethod](clickEvent, function() {
                        if (!callbackValue4[disabledProperty]) saveEditorContent(callbackValue79())
                    });
                    if (windowObject.opera) {
                        var callbackValue130 = documentObject[createElementMethod]('span');
                        callbackValue130[styleProperty][cssFloatProperty] = 'right';
                        callbackValue130[styleProperty][marginTopProperty] = '50px';
                        callbackValue130[styleProperty][textIndentProperty] = '-9999px';
                        callbackValue130[innerHTMLProperty] = '.';
                        callbackValue1[appendChildMethod](callbackValue130)
                    }
                },
                initializeSourceEditor = function() {
                    var callbackValue131 = documentObject[querySelectorMethod]('pre'),
                        callbackValue132 = documentObject[querySelectorMethod]('ol'),
                        callbackValue133 = callbackValue132[getAttributeMethod](dataAttributePrefix + 'ab'),
                        callbackValue134 = '|if|else|function|return|true|false|null|new|for|do|while|switch|case|break|continue|try|catch|throw|instanceof|',
                        callbackValue135 = function(initializeSourceEditorArgument1) {
                            return initializeSourceEditorArgument1[splitMethod]('</_cript')[joinMethod](closingScriptTag)[splitMethod]('<_cript')[joinMethod](openingScriptTag)[splitMethod]('&')[joinMethod]('&amp;')[splitMethod]('<')[joinMethod]('&lt;')[splitMethod]('>')[joinMethod]('&gt;')[splitMethod]('&lt;caret&gt;·&lt;/caret&gt;')[joinMethod](caretMarkup)[splitMethod]('\n')[joinMethod](lineBreakMarkup)
                        },
                        callbackValue136 = function(initializeSourceEditorArgument2) {
                            initializeSourceEditorArgument2 = initializeSourceEditorArgument2[replaceMethod](new RegExp('.*?(?:<br>|$)', 'gi'), '<div>$&</div>');
                            if (windowObject.opera) initializeSourceEditorArgument2 = initializeSourceEditorArgument2[replaceMethod](new RegExp('<div>(?:(?:' + openingSpanMarkup + '[a-z]>)*' + caretMarkup + '(?:' + closingSpanMarkup + ')*)<br></div>', 'gi'), '<div style="height:22px">' + caretMarkup + lineBreakMarkup + '</div>');
                            return initializeSourceEditorArgument2
                        },
                        callbackValue137 = function(initializeSourceEditorArgument3) {
                            return initializeSourceEditorArgument3[replaceMethod](new RegExp('([^>](?:' + closingSpanMarkup + ')*|[^>])</div>', 'gi'), '$1<br></div>')[splitMethod](lineBreakMarkup)[joinMethod]('\n')[splitMethod](caretMarkup)[joinMethod]('&lt;caret&gt;·&lt;/caret&gt;')[replaceMethod](new RegExp('<.*?>', 'gi'), '')[splitMethod]('&lt;')[joinMethod]('<')[splitMethod]('&gt;')[joinMethod]('>')[splitMethod]('&amp;')[joinMethod]('&')[splitMethod](closingScriptTag)[joinMethod]('</_cript')[splitMethod](openingScriptTag)[joinMethod]('<_cript')
                        },
                        callbackValue138 = callbackValue135;
                    if (callbackValue2[innerHTMLProperty] == 'xml') callbackValue131[classNameProperty] = 'html';
                    else callbackValue131[classNameProperty] = callbackValue2[innerHTMLProperty];
                    if (callbackValue131[classNameProperty] == 'html') {
                        callbackValue138 = function(initializeSourceEditorArgument4) {
                            return callbackValue136(callbackValue135(initializeSourceEditorArgument4)[replaceMethod](new RegExp('&lt;.+?&gt;', 'gi'), function(str1) {
                                str1 = str1[replaceMethod](new RegExp('"(.+?)"', 'gi'), function(str11, callbackArgument42) {
                                    return '"' + openingSpanMarkup + 'j>' + callbackArgument42[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'j>') + '' + closingSpanMarkup + '"'
                                })[replaceMethod](new RegExp('\'(.+?)\'', 'gi'), function(str21, callbackArgument43) {
                                    return '\'' + openingSpanMarkup + 'j>' + callbackArgument43[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'j>') + closingSpanMarkup + '\''
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
                    } else if (callbackValue131[classNameProperty] == 'css') {
                        callbackValue138 = function(initializeSourceEditorArgument5) {
                            return callbackValue136(callbackValue135(initializeSourceEditorArgument5[splitMethod](';')[joinMethod]('!~!'))[replaceMethod](new RegExp('[^{}]+(?={)', 'gi'), function(str1) {
                                return openingSpanMarkup + 'f>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'f>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('{[^{]*?}', 'gi'), function(str1) {
                                str1 = str1[replaceMethod](new RegExp('".+?"|\'.+?\'', 'gi'), function(str11) {
                                    return str11[splitMethod]('!~!')[joinMethod]('!#~!')
                                })[replaceMethod](new RegExp('((?:!~!|{)(?: |\t|<br>|</?caret>)*)([a-z-]+(?: |\t|<br>|</?caret>)*)(?=:)', 'gi'), '$1' + openingSpanMarkup + 'g>$2' + closingSpanMarkup + '')[replaceMethod](new RegExp(':(.+?)(?=!~!|})', 'gi'), function(str31, callbackArgument44) {
                                    return ':' + openingSpanMarkup + 'h>' + callbackArgument44[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup
                                })[splitMethod]('!#~!')[joinMethod]('!~!');
                                return openingSpanMarkup + 'j>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'j>') + closingSpanMarkup
                            })[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*/[*].*?[*]/', 'gi'), function(str1) {
                                return openingSpanMarkup + 'i>' + str1[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'i>') + closingSpanMarkup
                            })[splitMethod]('!~!')[joinMethod](';'))
                        }
                    } else if (callbackValue131[classNameProperty] == 'js') {
                        callbackValue138 = function(initializeSourceEditorArgument6) {
                            return callbackValue136(callbackValue135(initializeSourceEditorArgument6)[replaceMethod](new RegExp('([^a-z0-9_$<]|^)([a-z]{2,10})(?=[^a-z0-9_$>])', 'gi'), function(str1, TArgument1, TArgument2) {
                                if ((callbackValue134 + 'var|this|delete|nan|undefined|typeof|in|with|label|void|')[indexOfMethod]('|' + TArgument2 + '|') !== -1) return TArgument1 + openingSpanMarkup + 'f>' + TArgument2 + closingSpanMarkup;
                                else return str1
                            })[replaceMethod](new RegExp('([^a-z0-9_$])(-?[0-9]+(?:\.[0-9]+)*%?)(?=[^a-z0-9_$])', 'gi'), '$1' + openingSpanMarkup + 'j>$2' + closingSpanMarkup + '')[replaceMethod](new RegExp('"(|.*?(?:[^\\\\]|[\\\\][\\\\]))"|\'(|.*?(?:[^\\\\]|[\\\\][\\\\]))\'|(/[*].*?[*]/)|(//.*?(?=<br>|$))', 'gi'), function(str1, TArgument3, TArgument4, TArgument5, TArgument6) {
                                if (TArgument3) return '"' + openingSpanMarkup + 'h>' + TArgument3[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + '' + closingSpanMarkup + '"';
                                else if (TArgument4) return '\'' + openingSpanMarkup + 'h>' + TArgument4[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup + '\'';
                                else if (TArgument5) return openingSpanMarkup + 'g>' + TArgument5[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                else if (TArgument6) return openingSpanMarkup + 'g>' + TArgument6[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                else return str1
                            }))
                        }
                    } else if (callbackValue131[classNameProperty] == 'php') {
                        callbackValue138 = function(initializeSourceEditorArgument7) {
                            return callbackValue136(callbackValue135(initializeSourceEditorArgument7)[replaceMethod](new RegExp('(&lt;[?](?:php)?)(.*?)([?]&gt;)', 'gi'), function(str1, TArgument7, TArgument8, TArgument9) {
                                TArgument8 = TArgument8[replaceMethod](new RegExp('([^a-z0-9_$<]|^)([a-z]{2,10})(?=[^a-z0-9_$>])', 'gi'), function(str1, callbackArgument45, callbackArgument46) {
                                    if ((callbackValue134 + 'foreach|as|require|include|require_once|include_once|elseif|endif|endswitch|class|public|private|protected|final|static|abstract|extends|interface|implements|use|const|global|or|and|xor|clone|namespace|trait|yield|declare|goto|')[indexOfMethod]('|' + callbackArgument46 + '|') !== -1) return callbackArgument45 + openingSpanMarkup + 'f>' + callbackArgument46 + closingSpanMarkup;
                                    else return str1
                                })[replaceMethod](new RegExp('([^a-z0-9_$])(-?[0-9]+(?:\.[0-9]+)*%?)(?=[^a-z0-9_$])', 'gi'), '$1' + openingSpanMarkup + 'j>$2' + closingSpanMarkup + '')[replaceMethod](new RegExp('"(|.*?(?:[^\\\\]|[\\\\][\\\\]))"|\'(|.*?(?:[^\\\\]|[\\\\][\\\\]))\'|(/[*].*?[*]/)|((?://|#).*?(?=<br>|$))', 'gi'), function(str1, callbackArgument47, callbackArgument48, callbackArgument49, callbackArgument50) {
                                    if (callbackArgument47) return '"' + openingSpanMarkup + 'h>' + callbackArgument47[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + '' + closingSpanMarkup + '"';
                                    else if (callbackArgument48) return '\'' + openingSpanMarkup + 'h>' + callbackArgument48[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'h>') + closingSpanMarkup + '\'';
                                    else if (callbackArgument49) return openingSpanMarkup + 'g>' + callbackArgument49[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                    else if (callbackArgument50) return openingSpanMarkup + 'g>' + callbackArgument50[splitMethod](lineBreakMarkup)[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + openingSpanMarkup + 'g>') + closingSpanMarkup;
                                    else return str1
                                });
                                return openingSpanMarkup + 'i>' + TArgument7 + closingSpanMarkup + TArgument8 + openingSpanMarkup + 'i>' + TArgument9 + closingSpanMarkup
                            }))
                        }
                    }
                    var callbackValue139 = function() {
                            var initializeSourceEditorValue1 = '',
                                initializeSourceEditorValue2 = 0,
                                initializeSourceEditorValue3 = callbackValue131[querySelectorAllMethod]('div'),
                                initializeSourceEditorValue4 = initializeSourceEditorValue3[lengthProperty] - 1;
                            while (initializeSourceEditorValue2 < initializeSourceEditorValue4) {
                                if (initializeSourceEditorValue3[initializeSourceEditorValue2]) initializeSourceEditorValue1 += callbackValue133[replaceMethod]('0', initializeSourceEditorValue3[initializeSourceEditorValue2][clientHeightProperty]);
                                initializeSourceEditorValue2++
                            }
                            callbackValue132[innerHTMLProperty] = initializeSourceEditorValue1
                        },
                        callbackValue140 = function() {
                            var initializeSourceEditorValue5 = sha1(callbackValue131[innerHTMLProperty]);
                            if (callbackValue11[getAttributeMethod](dataAttributePrefix + 'cu')) callbackValue4[disabledProperty] = false;
                            else if (callbackValue131.A !== initializeSourceEditorValue5) {
                                if (callbackValue9[textContentProperty] == callbackValue9[getAttributeMethod](dataAttributePrefix + 'ae')) fadeOut(callbackValue9);
                                callbackValue4[disabledProperty] = false
                            } else callbackValue4[disabledProperty] = true;
                            if (callbackValue131.h != initializeSourceEditorValue5) {
                                if (documentObject[activeElementProperty] == callbackValue131) {
                                    var initializeSourceEditorValue6 = windowObject[getSelectionMethod](),
                                        initializeSourceEditorValue7 = initializeSourceEditorValue6[getRangeAtMethod](0),
                                        initializeSourceEditorValue8 = documentObject[createElementMethod](caretValue);
                                    initializeSourceEditorValue7[insertNodeMethod](initializeSourceEditorValue8)
                                }
                                callbackValue141();
                                callbackValue131.g.push(callbackValue131[innerHTMLProperty]);
                                initializeSourceEditorValue8 = callbackValue131[querySelectorAllMethod](caretValue);
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
                                callbackValue131.h = sha1(callbackValue131[innerHTMLProperty]);
                                callbackValue139()
                            }
                        },
                        callbackValue141 = function() {
                            callbackValue131[innerHTMLProperty] = callbackValue138(callbackValue137(callbackValue131[innerHTMLProperty]))
                        },
                        callbackValue142 = function() {
                            if (sha1(locationObject.hostname[replaceMethod]('www.', ''))) {
                                callbackValue131.A = sha1(callbackValue131[innerHTMLProperty]);
                                return callbackValue137(callbackValue131[innerHTMLProperty])
                            }
                        },
                        callbackValue143 = function() {
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
                        callbackValue144 = function(event) {
                            if (event[keyCodeProperty] == 9) callbackValue143();
                            else if (event[keyCodeProperty] == 17) callbackValue145.i = false;
                            if (callbackValue144.k) windowObject[clearTimeoutMethod](callbackValue144.k);
                            callbackValue144.k = windowObject[setTimeoutMethod](function() {
                                callbackValue144.k = false;
                                callbackValue140()
                            }, callbackValue131[getAttributeMethod](dataAttributePrefix + 'cv') * 1)
                        },
                        callbackValue145 = function(event) {
                            if (event[keyCodeProperty] == 9) event[preventDefaultMethod]();
                            else if (event[keyCodeProperty] == 17) callbackValue145.i = true;
                            else if (event[keyCodeProperty] == 90 && callbackValue145.i) {
                                event[preventDefaultMethod]();
                                if (callbackValue131.g[lengthProperty] > 1) {
                                    callbackValue131.g.pop();
                                    callbackValue131[innerHTMLProperty] = callbackValue131.g.pop()[splitMethod](caretMarkup)[joinMethod](caretMarkup + ' ');
                                    var initializeSourceEditorValue15 = callbackValue131[querySelectorAllMethod](caretValue);
                                    if (initializeSourceEditorValue15[lengthProperty]) {
                                        var initializeSourceEditorValue16 = windowObject[getSelectionMethod](),
                                            initializeSourceEditorValue17 = initializeSourceEditorValue15[0][nextSiblingProperty],
                                            initializeSourceEditorValue18 = documentObject[createRangeMethod]();
                                        initializeSourceEditorValue18[setStartMethod](initializeSourceEditorValue17, 0);
                                        initializeSourceEditorValue18[setEndMethod](initializeSourceEditorValue17, 0);
                                        initializeSourceEditorValue18[collapseMethod](true);
                                        initializeSourceEditorValue16[removeAllRangesMethod]();
                                        initializeSourceEditorValue17[textContentProperty] = initializeSourceEditorValue17[textContentProperty][sliceMethod](1);
                                        initializeSourceEditorValue15[0][parentNodeProperty][removeChildMethod](initializeSourceEditorValue15[0]);
                                        initializeSourceEditorValue16[addRangeMethod](initializeSourceEditorValue18)
                                    }
                                }
                            } else if (event[keyCodeProperty] == 83 && callbackValue145.i) {
                                event[preventDefaultMethod]();
                                callbackValue147();
                                if (!callbackValue4[disabledProperty]) saveEditorContent(callbackValue142())
                            }
                        },
                        callbackValue146 = function(event) {
                            if (!callbackValue144.k) callbackValue144(event);
                            documentObject[removeEventListenerMethod](mouseMoveEvent, callbackValue146);
                            callbackValue146.k = windowObject[setTimeoutMethod](function() {
                                if (documentObject[activeElementProperty] == callbackValue131) documentObject[addEventListenerMethod](mouseMoveEvent, callbackValue146)
                            }, 500)
                        },
                        callbackValue147 = function() {
                            callbackValue140();
                            documentObject[removeEventListenerMethod](keyUpEvent, callbackValue144);
                            documentObject[removeEventListenerMethod](keyDownEvent, callbackValue145);
                            documentObject[removeEventListenerMethod](mouseMoveEvent, callbackValue146);
                            windowObject[clearTimeoutMethod](callbackValue146.k);
                            windowObject[clearTimeoutMethod](callbackValue144.k);
                            callbackValue131[removeEventListenerMethod](blurEvent, callbackValue147)
                        },
                        callbackValue148 = function() {
                            documentObject[addEventListenerMethod](keyUpEvent, callbackValue144);
                            documentObject[addEventListenerMethod](keyDownEvent, callbackValue145);
                            documentObject[addEventListenerMethod](mouseMoveEvent, callbackValue146);
                            callbackValue131[addEventListenerMethod](blurEvent, callbackValue147);
                            if (!callbackValue131.A) {
                                callbackValue131.A = sha1(callbackValue131[innerHTMLProperty]);
                                callbackValue131.h = callbackValue131.A
                            }
                            callbackValue131.g = [callbackValue131[innerHTMLProperty]]
                        },
                        callbackValue149 = function() {
                            callbackValue139();
                            documentObject.body[styleProperty][heightProperty] = documentObject[documentElementProperty][clientHeightProperty] - callbackValue1[clientHeightProperty] + 'px'
                        },
                        callbackValue150 = function(initializeSourceEditorArgument8) {
                            return initializeSourceEditorArgument8[replaceMethod](new RegExp('(?:' + openingSpanMarkup + '[a-z]>)*&lt;focus.+?&lt;/focus&gt;', 'gi'), function(str1) {
                                return openingSpanMarkup + 'k>' + str1[splitMethod](lineBreakMarkup + '</div><div>')[joinMethod]('' + closingSpanMarkup + lineBreakMarkup + '</div><div>' + openingSpanMarkup + 'k>') + closingSpanMarkup
                            })[splitMethod]('&lt;focus&gt;')[joinMethod]('')[splitMethod]('&lt;/focus&gt;')[joinMethod]('')
                        };
                    windowObject[addEventListenerMethod](resizeEvent, callbackValue149);
                    callbackValue149();
                    if (!(callbackValue131[getAttributeMethod](dataAttributePrefix + 'cw') * 1)) {
                        callbackValue138 = callbackValue135;
                        callbackValue150 = function(initializeSourceEditorArgument9) {
                            return initializeSourceEditorArgument9[splitMethod]('&lt;focus&gt;')[joinMethod]('')[splitMethod]('&lt;/focus&gt;')[joinMethod]('')
                        };
                        callbackValue139 = function() {};
                        callbackValue141 = function() {}
                    }
                    if (callbackValue3) {
                        callbackValue2[addEventListenerMethod](clickEvent, function() {
                            if (callbackValue4[disabledProperty]) switchEditorMode();
                            else switchEditorMode(callbackValue142())
                        });
                        callbackValue3[classNameProperty] = 'l'
                    }
                    callbackValue131[innerHTMLProperty] = callbackValue150(callbackValue138(callbackValue137(callbackValue138(callbackValue11[innerHTMLProperty]))));
                    callbackValue139();
                    callbackValue131[addEventListenerMethod](focusEvent, callbackValue148);
                    callbackValue131[focusEvent]();
                    callbackValue4[addEventListenerMethod](clickEvent, function() {
                        if (!callbackValue4[disabledProperty]) {
                            callbackValue147();
                            saveEditorContent(callbackValue142())
                        }
                    })
                },
                saveEditorContent = function(callbackArgument51) {
                    var callbackValue151 = generateToken();
                    if (saveEditorContent.f) writeCookie(tokenCookieSuffix, callbackValue151);
                    else callbackArgument51 = '';
                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ad');
                    callbackValue9[classNameProperty] = 'b';
                    fadeIn(callbackValue9);
                    callbackValue4[disabledProperty] = true;
                    resetEditorFocus();
                    ajaxRequest('save=' + windowObject[encodeURIComponentMethod](base64UrlEncode(callbackArgument51)) + tokenParameter + callbackValue151, function() {
                        var saveEditorContentValue1 = locationObject.href[replaceMethod](locationObject.hash, '')[replaceMethod](callbackValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](callbackValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](0, -1)[lastIndexOfMethod]('/') + 1), '');
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
                        var saveEditorContentValue3 = callbackValue1[querySelectorMethod]('#f>ul>li>ul');
                        if (saveEditorContentValue3) saveEditorContentValue3[innerHTMLProperty] = '';
                        callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ae');
                        callbackValue9[classNameProperty] = 'c';
                        if (callbackValue7[valueProperty] == callbackValue7[getAttributeMethod](dataAttributePrefix + 'ac')) logout()
                    }, function() {
                        callbackValue4[disabledProperty] = false;
                        callbackValue4[focusEvent]();
                        callbackValue9[classNameProperty] = 'd';
                        if (this[getResponseHeaderMethod]('X-a')) callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'am');
                        else if (this[getResponseHeaderMethod]('X-b')) callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'bo');
                        else callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'aj')
                    }, function() {
                        callbackValue4[disabledProperty] = false;
                        callbackValue4[focusEvent]();
                        if (this.status == 403) callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ak');
                        else callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'al');
                        callbackValue9[classNameProperty] = 'd'
                    })
                },
                switchEditorMode = function(callbackArgument52) {
                    var callbackValue152 = documentObject[createElementMethod]('form'),
                        callbackValue153 = documentObject[createElementMethod](inputEvent);
                    callbackValue153.name = 'switch';
                    if (documentObject[documentElementProperty].id == 'c') callbackValue153[valueProperty] = 0;
                    else callbackValue153[valueProperty] = 1;
                    callbackValue152[appendChildMethod](callbackValue153);
                    if (callbackArgument52) {
                        var callbackValue154 = documentObject[createElementMethod](textareaTagName),
                            callbackValue155 = documentObject[createElementMethod](inputEvent);
                        callbackValue154.name = 'source';
                        callbackValue154[valueProperty] = base64UrlEncode(callbackArgument52);
                        callbackValue155.name = 'token';
                        callbackValue155[valueProperty] = generateToken();
                        writeCookie(tokenCookieSuffix, callbackValue155[valueProperty]);
                        callbackValue152[appendChildMethod](callbackValue155);
                        callbackValue152[appendChildMethod](callbackValue154)
                    }
                    callbackValue152.method = 'post';
                    callbackValue152[styleProperty][displayProperty] = noneValue;
                    documentObject[documentElementProperty][appendChildMethod](callbackValue152);
                    callbackValue152.submit()
                },
                logout = function() {
                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ag');
                    callbackValue9[classNameProperty] = 'b';
                    fadeIn(callbackValue9);
                    ajaxRequest('logout=1', function() {
                        callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ah');
                        callbackValue9[classNameProperty] = 'c';
                        var logoutValue1 = locationObject.href[replaceMethod](locationObject.hash, '');
                        if (callbackValue9[getAttributeMethod](dataAttributePrefix + 'ci') * 1) logoutValue1 = logoutValue1[replaceMethod](callbackValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](callbackValue9[getAttributeMethod](dataAttributePrefix + 'cl')[sliceMethod](0, -1)[lastIndexOfMethod]('/') + 1), '');
                        locationObject.href = logoutValue1
                    }, function() {
                        callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'aj');
                        callbackValue9[classNameProperty] = 'd'
                    }, function() {
                        callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'al');
                        callbackValue9[classNameProperty] = 'd'
                    })
                },
                resetEditorFocus = function() {
                    var callbackValue156 = documentObject[createElementMethod](inputEvent);
                    callbackValue156[styleProperty][marginLeftProperty] = '-2000px';
                    callbackValue1[appendChildMethod](callbackValue156);
                    callbackValue156[focusEvent]();
                    callbackValue1[removeChildMethod](callbackValue156)
                },
                checkForUpdates = function() {
                    if (callbackValue9[getAttributeMethod](dataAttributePrefix + 'bz')[substringMethod](0, 1) == '0' || callbackValue10[0][nextElementSiblingProperty][querySelectorMethod]('.s li+li')[innerHTMLProperty][substringMethod](0, 1) == '0') documentObject.body[styleProperty][displayProperty] = noneValue;
                    else saveEditorContent.f = true;
                },
                handleUpdateResult = function() {},
                installUpdate = function() {},
                checkInstallation = function() {},
                handleEditorSelection = function(event) {
                    var callbackValue157 = event.target;
                    for (var callbackValue158 = callbackValue157; callbackValue158; callbackValue158 = callbackValue158[parentNodeProperty])
                        if (callbackValue158[classNameProperty] == 'A') return;
                    for (var callbackValue159 = 0, callbackValue160 = callbackValue10[lengthProperty]; callbackValue159 < callbackValue160; callbackValue159++) {
                        var callbackValue161 = callbackValue10[callbackValue159][nextElementSiblingProperty];
                        callbackValue161[styleProperty][displayProperty] = noneValue;
                        callbackValue161[classNameProperty] = '';
                        callbackValue10[callbackValue159][classNameProperty] = 'm'
                    }
                    if (callbackValue157[classNameProperty] == 'm') {
                        var callbackValue161 = callbackValue157[nextElementSiblingProperty];
                        callbackValue161[styleProperty][displayProperty] = blockValue;
                        callbackValue161[classNameProperty] = 'A';
                        callbackValue157[classNameProperty] = ''
                    }
                };
            for (var callbackValue12 = 0, callbackValue13 = callbackValue10[lengthProperty]; callbackValue12 < callbackValue13; callbackValue12++) callbackValue10[callbackValue12][classNameProperty] = 'm';
            documentObject[addEventListenerMethod](mouseDownEvent, handleEditorSelection);
            callbackValue7[addEventListenerMethod](clickEvent, function() {
                if (callbackValue4[disabledProperty] || callbackValue7[valueProperty] == callbackValue7[getAttributeMethod](dataAttributePrefix + 'ac')) logout();
                else {
                    callbackValue7[valueProperty] = callbackValue7[getAttributeMethod](dataAttributePrefix + 'ac');
                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'af');
                    callbackValue9[classNameProperty] = 'o';
                    fadeIn(callbackValue9);
                    resetEditorFocus()
                }
            });
            var callbackValue14 = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ce') / 2;
            windowObject[setIntervalMethod](function() {
                ajaxRequest('reload=1', function() {
                    if (callbackValue9[styleProperty][displayProperty] == blockValue && (callbackValue9[textContentProperty] == callbackValue9[getAttributeMethod](dataAttributePrefix + 'ah') || callbackValue9[textContentProperty] == callbackValue9[getAttributeMethod](dataAttributePrefix + 'al'))) fadeOut(callbackValue9)
                }, function() {
                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'ah') + ' (' + callbackValue9[getAttributeMethod](dataAttributePrefix + 'ai') + ')';
                    callbackValue9[classNameProperty] = 'o';
                    fadeIn(callbackValue9);
                    var callbackValue162 = callbackValue9[firstElementChildProperty];
                    if (callbackValue162) callbackValue162[addEventListenerMethod](clickEvent, function() {
                        locationObject.reload(true)
                    })
                }, function() {
                    callbackValue9[textContentProperty] = callbackValue9[getAttributeMethod](dataAttributePrefix + 'al');
                    callbackValue9[classNameProperty] = 'o';
                    fadeIn(callbackValue9)
                })
            }, 1000 * 60 * callbackValue14);
            callbackValue7[disabledProperty] = false;
            if (callbackValue11[getAttributeMethod](dataAttributePrefix + 'cu')) callbackValue4[disabledProperty] = false;
            if (callbackValue9[getAttributeMethod](dataAttributePrefix + 'ck') == callbackValue9[getAttributeMethod](dataAttributePrefix + 'cj') || (callbackValue9[getAttributeMethod](dataAttributePrefix + 'ck')[substringMethod](0, 3) == '127' && callbackValue9[getAttributeMethod](dataAttributePrefix + 'cj')[substringMethod](0, 3) == '127')) ajaxRequest.m = true;
            if (documentObject[documentElementProperty].id == 'c') initializeSourceEditor();
            else if (documentObject[documentElementProperty].id == 'd') initializeVisualEditor();
            checkForUpdates()
        }
    });
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var callbackValue163 = documentObject[querySelectorMethod]('#e'),
            callbackValue164 = documentObject[querySelectorMethod]('#f');
        if (callbackValue163 && callbackValue164) {
            var callbackValue165 = callbackValue163[querySelectorMethod]('div>div+ul+p samp'),
                callbackValue166 = callbackValue163[querySelectorMethod]('div>ol+ul>li>a'),
                callbackValue167 = callbackValue164[querySelectorMethod]('li>ol'),
                callbackValue168 = callbackValue167[firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy'),
                callbackValue169 = locationObject.pathname[sliceMethod](callbackValue168[lengthProperty]),
                callbackValue170 = '';
            if (locationObject.pathname == callbackValue165[getAttributeMethod](dataAttributePrefix + 'cl') && locationObject[searchMethod][indexOfMethod]('?q=') === 0) {
                callbackValue169 = callbackValue168 + locationObject[searchMethod][sliceMethod](3);
                callbackValue170 = locationObject[searchMethod]
            } else callbackValue169 = callbackValue168 + callbackValue169[sliceMethod](callbackValue169[indexOfMethod]('/') + 1);
            var revealCurrentPath = function(callbackArgument53) {
                    var callbackValue173 = callbackArgument53[nextElementSiblingProperty],
                        callbackValue174 = callbackArgument53[firstElementChildProperty][firstElementChildProperty],
                        callbackValue175 = callbackValue174[getAttributeMethod](dataAttributePrefix + 'cy'),
                        callbackValue176 = function() {
                            var revealCurrentPathValue1 = callbackValue169[sliceMethod](callbackValue175[lengthProperty])[indexOfMethod]('/');
                            if (revealCurrentPathValue1 != -1) {
                                callbackValue174 = callbackValue174[parentNodeProperty][parentNodeProperty][nextElementSiblingProperty][querySelectorMethod]('[data-cy="' + callbackValue169[sliceMethod](0, revealCurrentPathValue1 + callbackValue175[lengthProperty] + 1) + '"]');
                                if (callbackValue174) revealCurrentPath(callbackValue174[parentNodeProperty][parentNodeProperty])
                            } else {
                                callbackValue174 = callbackValue174[parentNodeProperty][parentNodeProperty][nextElementSiblingProperty][querySelectorMethod]('[href="' + locationObject.pathname + callbackValue170 + '"]');
                                if (callbackValue174) callbackValue174[parentNodeProperty][classNameProperty] = 'n'
                            }
                        };
                    if (callbackValue173[firstElementChildProperty]) {
                        if (windowObject[getComputedStyleMethod](callbackValue173)[displayProperty] == noneValue) {
                            callbackValue174.l = function() {
                                callbackValue174.l = function() {};
                                callbackValue176()
                            };
                            windowObject[setTimeoutMethod](function() {
                                expandDirectory.call(callbackValue174)
                            }, 0)
                        } else callbackValue176()
                    } else {
                        callbackValue174.l = function() {
                            callbackValue174.l = function() {
                                callbackValue174.l = function() {};
                                callbackValue176()
                            };
                            expandDirectory.call(callbackValue174)
                        };
                        openDirectory.call(callbackValue174)
                    }
                },
                replaceFileListFragment = function(callbackArgument54, callbackArgument55) {
                    var callbackValue177 = new DOMParser().parseFromString(callbackArgument54, 'text/html'),
                        callbackValue178 = documentObject.createDocumentFragment(),
                        callbackValue179 = {LI: 1, OL: 1, UL: 1, A: 1, I: 1, INPUT: 1},
                        callbackValue180 = {CLASS: 1, 'DATA-CY': 1, 'DATA-CZ': 1, TITLE: 1, TYPE: 1, NAME: 1, VALUE: 1, CHECKED: 1},
                        callbackValue181 = function(replaceFileListFragmentArgument1) {
                            if (replaceFileListFragmentArgument1.nodeType != 1) return true;
                            if (!callbackValue179[replaceFileListFragmentArgument1.nodeName]) {
                                if (replaceFileListFragmentArgument1.parentNode) replaceFileListFragmentArgument1.parentNode.removeChild(replaceFileListFragmentArgument1);
                                return false
                            }
                            for (var replaceFileListFragmentValue2 = replaceFileListFragmentArgument1.attributes.length - 1; replaceFileListFragmentValue2 >= 0; replaceFileListFragmentValue2--) if (!callbackValue180[replaceFileListFragmentArgument1.attributes[replaceFileListFragmentValue2].name.toUpperCase()]) replaceFileListFragmentArgument1.removeAttribute(replaceFileListFragmentArgument1.attributes[replaceFileListFragmentValue2].name);
                            for (var replaceFileListFragmentValue3 = replaceFileListFragmentArgument1.firstChild; replaceFileListFragmentValue3;) {
                                var replaceFileListFragmentValue4 = replaceFileListFragmentValue3.nextSibling;
                                callbackValue181(replaceFileListFragmentValue3);
                                replaceFileListFragmentValue3 = replaceFileListFragmentValue4
                            }
                            return true
                        };
                    for (var callbackValue182 = callbackValue177.body.firstChild; callbackValue182;) {
                        var callbackValue183 = callbackValue182.nextSibling;
                        if (callbackValue181(callbackValue182)) callbackValue178.appendChild(callbackValue182);
                        callbackValue182 = callbackValue183
                    }
                    callbackArgument55.textContent = '';
                    callbackArgument55.appendChild(callbackValue178)
                },
                openDirectory = function() {
                    var callbackValue184 = this,
                        callbackValue185 = callbackValue184[parentNodeProperty],
                        callbackValue186 = callbackValue185[parentNodeProperty],
                        callbackValue187 = callbackValue184[getAttributeMethod](dataAttributePrefix + 'cy');
                    callbackValue185[classNameProperty] = 'b';
                    ajaxRequest('open=' + windowObject[encodeURIComponentMethod](callbackValue187), function(openDirectoryArgument1) {
                        var openDirectoryValue2 = callbackValue186[nextElementSiblingProperty];
                        replaceFileListFragment(openDirectoryArgument1, openDirectoryValue2);
                        var openDirectoryValue3 = openDirectoryValue2[querySelectorAllMethod]('li>ol');
                        for (var openDirectoryValue4 = 0, openDirectoryValue5 = openDirectoryValue3[lengthProperty]; openDirectoryValue4 < openDirectoryValue5; openDirectoryValue4++) initializeFileEntry(openDirectoryValue3[openDirectoryValue4]);
                        callbackValue185[classNameProperty] = '';
                        callbackValue184.l();
                        var openDirectoryValue6 = this[getResponseHeaderMethod]('X-c');
                        if (openDirectoryValue6) {
                            var openDirectoryValue7 = callbackValue186[firstElementChildProperty][nextElementSiblingProperty];
                            openDirectoryValue7[innerHTMLProperty] = formatBytes(openDirectoryValue6 * 1);
                            if (openDirectoryValue6[lengthProperty] > 9) openDirectoryValue7[classNameProperty] = 'y'
                        }
                    }, function() {
                        callbackValue185[classNameProperty] = '';
                        callbackValue184[addEventListenerMethod](clickEvent, openDirectory);
                        callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'aj');
                        callbackValue165[classNameProperty] = 'd';
                        fadeIn(callbackValue165)
                    }, function() {
                        callbackValue185[classNameProperty] = '';
                        callbackValue184[addEventListenerMethod](clickEvent, openDirectory);
                        callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'al');
                        callbackValue165[classNameProperty] = 'd';
                        fadeIn(callbackValue165)
                    });
                    callbackValue184[removeEventListenerMethod](clickEvent, openDirectory)
                },
                expandDirectory = function() {
                    var callbackValue188 = this,
                        callbackValue189 = callbackValue188[parentNodeProperty],
                        callbackValue190 = callbackValue189[parentNodeProperty][nextElementSiblingProperty],
                        callbackValue191 = function() {
                            callbackValue188[addEventListenerMethod](clickEvent, collapseDirectory);
                            callbackValue189[classNameProperty] = 't';
                            callbackValue188.l()
                        };
                    if (callbackValue190[firstElementChildProperty]) slideDown(callbackValue190, callbackValue191);
                    else callbackValue191();
                    callbackValue188[removeEventListenerMethod](clickEvent, expandDirectory)
                },
                collapseDirectory = function() {
                    var callbackValue192 = this,
                        callbackValue193 = callbackValue192[parentNodeProperty],
                        callbackValue194 = callbackValue193[parentNodeProperty][nextElementSiblingProperty],
                        callbackValue195 = function() {
                            callbackValue192[addEventListenerMethod](clickEvent, expandDirectory);
                            callbackValue193[classNameProperty] = ''
                        };
                    if (callbackValue194[firstElementChildProperty]) slideUp(callbackValue194, callbackValue195);
                    else callbackValue195();
                    callbackValue192[removeEventListenerMethod](clickEvent, collapseDirectory)
                },
                initializeFileEntry = function(callbackArgument56) {
                    var callbackValue196 = callbackArgument56[firstElementChildProperty],
                        callbackValue197 = callbackValue196[nextElementSiblingProperty],
                        callbackValue198 = callbackValue197[nextElementSiblingProperty],
                        callbackValue199 = callbackArgument56[lastElementChildProperty][firstElementChildProperty],
                        callbackValue200 = callbackValue196[firstElementChildProperty],
                        callbackValue201 = callbackValue200[getAttributeMethod](dataAttributePrefix + 'cy'),
                        callbackValue202 = callbackValue165[getAttributeMethod](dataAttributePrefix + 'cl');
                    renderFileSize(callbackValue197);
                    renderFileDate(callbackValue198);
                    if (callbackArgument56[classNameProperty] == 's' || callbackArgument56[classNameProperty] == 'u') {
                        callbackValue200.l = function() {
                            callbackValue200.l = function() {};
                            expandDirectory.call(callbackValue200)
                        };
                        callbackValue200[addEventListenerMethod](clickEvent, openDirectory);
                        if (callbackValue202 && callbackValue201[sliceMethod](0, callbackValue202[lengthProperty]) == callbackValue202) {
                            if (callbackArgument56[classNameProperty] == 'u' && callbackArgument56[nextElementSiblingProperty][firstElementChildProperty]) callbackValue199[addEventListenerMethod](clickEvent, recoverBackup);
                            else callbackValue199[classNameProperty] = 'n'
                        } else callbackValue199[addEventListenerMethod](clickEvent, queueUploads)
                    } else {
                        var callbackValue203 = callbackArgument56[parentNodeProperty][parentNodeProperty][previousElementSiblingProperty][firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy');
                        if (callbackValue202 && callbackValue203 && callbackValue203[sliceMethod](0, callbackValue202[lengthProperty]) == callbackValue202) {
                            callbackValue196[classNameProperty] = 'q';
                            callbackValue199[classNameProperty] = 'n'
                        } else {
                            if (callbackValue202 && callbackValue201[sliceMethod](0, callbackValue202[lengthProperty]) !== callbackValue202) callbackValue200[setAttributeMethod]('target', '_blank');
                            callbackValue200.href = callbackValue201;
                            callbackValue199[addEventListenerMethod](clickEvent, deleteFile)
                        }
                    }
                },
                renderFileSize = function(callbackArgument57) {
                    var callbackValue204 = callbackArgument57[getAttributeMethod](dataAttributePrefix + 'cz');
                    if (callbackValue204) callbackArgument57[innerHTMLProperty] = formatBytes(callbackValue204 * 1);
                    if (callbackValue204[lengthProperty] > 9) callbackArgument57[classNameProperty] = 'y'
                },
                renderFileDate = function(callbackArgument58) {
                    var callbackValue205 = callbackArgument58[innerHTMLProperty] * 1000,
                        callbackValue206 = new Date(callbackValue205),
                        callbackValue207 = new Date().getTime(),
                        callbackValue208 = 24 * 60 * 60 * 1000,
                        callbackValue209 = callbackValue208 * 7;
                    if ((callbackValue207 - callbackValue205) < callbackValue208) callbackArgument58[classNameProperty] = 'w';
                    else if ((callbackValue207 - callbackValue205) < callbackValue209) callbackArgument58[classNameProperty] = 'x';
                    callbackArgument58[innerHTMLProperty] = padDatePart(callbackValue206.getDate()) + '.' + padDatePart(callbackValue206.getMonth() + 1) + '.' + ((callbackValue206.getFullYear() + '')[sliceMethod](2)) + ' ' + padDatePart(callbackValue206.getHours()) + ':' + padDatePart(callbackValue206.getMinutes())
                },
                padDatePart = function(callbackArgument59) {
                    return (callbackArgument59 < 10) ? '0' + callbackArgument59 : callbackArgument59
                },
                queueUploads = function() {
                    if (windowObject.FormData) {
                        var callbackValue210 = documentObject[createElementMethod]('form'),
                            callbackValue211 = documentObject[createElementMethod](inputEvent);
                        callbackValue210[styleProperty][positionProperty] = absoluteValue;
                        callbackValue210[styleProperty][marginLeftProperty] = '-9999px';
                        callbackValue211.type = 'file';
                        callbackValue211.name = 'file[]';
                        callbackValue211.multiple = true;
                        callbackValue210[appendChildMethod](callbackValue211);
                        this[parentNodeProperty][appendChildMethod](callbackValue210);
                        callbackValue211[addEventListenerMethod](changeEvent, function() {
                            var queueUploadsValue1 = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bz') * 1,
                                queueUploadsValue2 = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bA') * 1,
                                queueUploadsValue3 = callbackValue165[getAttributeMethod](dataAttributePrefix + 'cc') * 1,
                                queueUploadsValue4 = callbackValue211.files,
                                queueUploadsValue5 = queueUploadsValue4[lengthProperty];
                            if (queueUploadsValue5 <= queueUploadsValue3) {
                                callbackValue210.size = 0;
                                for (var queueUploadsValue6 = 0; queueUploadsValue6 < queueUploadsValue5; queueUploadsValue6++) callbackValue210.size += queueUploadsValue4[queueUploadsValue6]['size'];
                                if (callbackValue210.size < queueUploadsValue1 && callbackValue210.size < queueUploadsValue2) {
                                    if (sha1(locationObject.hostname[replaceMethod]('www.', ''))) {
                                        if (!uploadFile.s) {
                                            uploadFile.s = [];
                                            uploadFile.w = callbackValue210.size;
                                            uploadFile.v = 0
                                        } else uploadFile.w += callbackValue210.size;
                                        uploadFile.s.push(callbackValue210);
                                        if (!uploadFile.t) {
                                            uploadFile.t = true;
                                            processUploadQueue(0)
                                        }
                                    }
                                } else {
                                    if (queueUploadsValue1 > queueUploadsValue2) callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(queueUploadsValue2) + ')';
                                    else callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bh') + ' (' + formatBytes(queueUploadsValue1) + ')';
                                    callbackValue165[classNameProperty] = 'o';
                                    fadeIn(callbackValue165)
                                }
                            } else {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bg') + ' (' + queueUploadsValue3 + ')';
                                callbackValue165[classNameProperty] = 'o';
                                fadeIn(callbackValue165)
                            }
                        });
                        callbackValue211[focusEvent]();
                        callbackValue211[clickEvent]()
                    } else {
                        callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'an');
                        callbackValue165[classNameProperty] = 'o';
                        fadeIn(callbackValue165)
                    }
                },
                uploadFile = function(callbackArgument60) {
                    var callbackValue212 = new FormData(callbackArgument60),
                        callbackValue213 = generateToken(),
                        callbackValue214 = callbackArgument60[parentNodeProperty][parentNodeProperty][firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy'),
                        callbackValue215 = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bc');
                    callbackValue212.append('upload', windowObject[encodeURIComponentMethod](callbackValue214));
                    callbackValue212.append('token', callbackValue213);
                    writeCookie(tokenCookieSuffix, callbackValue213);
                    callbackValue165[textContentProperty] = callbackValue215 + ' (0%)';
                    callbackValue165[classNameProperty] = 'b';
                    fadeIn(callbackValue165);
                    ajaxRequest(callbackValue212, function(uploadFileArgument1) {
                        var uploadFileValue2 = callbackArgument60[parentNodeProperty][parentNodeProperty],
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
                            uploadFile.v += callbackArgument60.size;
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
                        if (callbackValue165[textContentProperty][indexOfMethod]('(') != -1) callbackValue165[textContentProperty] = callbackValue215 + ' (' + ((uploadFileArgument2 + uploadFile.v) * 100 / uploadFile.w)[toFixedMethod](1) + '%)'
                    })
                },
                processUploadQueue = function(callbackArgument61) {
                    if (typeof uploadFile.u == 'undefined' || uploadFile.u < callbackArgument61) uploadFile.u = callbackArgument61;
                    if (uploadFile.s && uploadFile.s[lengthProperty]) uploadFile(uploadFile.s.shift());
                    else {
                        switch (uploadFile.u) {
                            case 0: {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bd');
                                callbackValue165[classNameProperty] = 'c';
                                break
                            }
                            case 1: {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'al');
                                callbackValue165[classNameProperty] = 'd';
                                break
                            }
                            case 2: {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'be');
                                callbackValue165[classNameProperty] = 'd';
                                break
                            }
                            case 3: {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bf');
                                callbackValue165[classNameProperty] = 'd';
                                break
                            }
                            case 4: {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bo');
                                callbackValue165[classNameProperty] = 'd';
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
                    var callbackValue216 = this[nextElementSiblingProperty],
                        callbackValue217 = callbackValue216[nextElementSiblingProperty],
                        callbackValue218 = this[parentNodeProperty][parentNodeProperty],
                        callbackValue219 = function() {
                            var deleteFileValue1 = callbackValue218[parentNodeProperty],
                                deleteFileValue2 = callbackValue218[firstElementChildProperty][firstElementChildProperty],
                                deleteFileValue3 = deleteFileValue2[getAttributeMethod](dataAttributePrefix + 'cy'),
                                deleteFileValue4 = generateToken();
                            writeCookie(tokenCookieSuffix, deleteFileValue4);
                            callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bi');
                            callbackValue165[classNameProperty] = 'b';
                            fadeIn(callbackValue165);
                            deleteFileValue1[styleProperty][displayProperty] = noneValue;
                            ajaxRequest('remove=' + windowObject[encodeURIComponentMethod](deleteFileValue3) + tokenParameter + deleteFileValue4, function() {
                                var lValue1 = deleteFileValue1[parentNodeProperty],
                                    lValue2 = lValue1[previousElementSiblingProperty][firstElementChildProperty],
                                    lValue3 = lValue2[nextElementSiblingProperty];
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bj');
                                callbackValue165[classNameProperty] = 'c';
                                deleteFileValue1[parentNodeProperty][removeChildMethod](deleteFileValue1);
                                if (deleteFileValue2[parentNodeProperty][classNameProperty] == 'n') locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '');
                                var lValue4 = this[getResponseHeaderMethod]('X-c');
                                if (lValue4) {
                                    lValue3[innerHTMLProperty] = formatBytes(lValue4 * 1);
                                    if (lValue4[lengthProperty] > 9) lValue3[classNameProperty] = 'y'
                                }
                            }, function() {
                                callbackValue165[classNameProperty] = 'd';
                                deleteFileValue1[styleProperty][displayProperty] = blockValue;
                                if (this[getResponseHeaderMethod]('X-d')) {
                                    callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'aj');
                                    callbackValue218[classNameProperty] = callbackValue218[classNameProperty][replaceMethod](' z', '')
                                } else if (this[getResponseHeaderMethod]('X-b')) {
                                    callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bo');
                                    callbackValue218[classNameProperty] = callbackValue218[classNameProperty][replaceMethod](' z', '')
                                } else callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bk')
                            }, function() {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'al');
                                callbackValue165[classNameProperty] = 'o';
                                deleteFileValue1[styleProperty][displayProperty] = blockValue
                            })
                        };
                    callbackValue218[classNameProperty] += ' z';
                    callbackValue217[addEventListenerMethod](clickEvent, function() {
                        callbackValue216[removeEventListenerMethod](clickEvent, callbackValue219);
                        callbackValue218[classNameProperty] = callbackValue218[classNameProperty][replaceMethod](' z', '')
                    });
                    callbackValue216[addEventListenerMethod](clickEvent, callbackValue219)
                },
                recoverBackup = function() {
                    var callbackValue220 = this[nextElementSiblingProperty],
                        callbackValue221 = callbackValue220[nextElementSiblingProperty],
                        callbackValue222 = this[parentNodeProperty][parentNodeProperty],
                        callbackValue223 = function() {
                            var recoverBackupValue1 = callbackValue222[nextElementSiblingProperty][lastElementChildProperty][firstElementChildProperty][firstElementChildProperty][firstElementChildProperty][getAttributeMethod](dataAttributePrefix + 'cy'),
                                recoverBackupValue2 = generateToken();
                            writeCookie(tokenCookieSuffix, recoverBackupValue2);
                            callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bl');
                            callbackValue165[classNameProperty] = 'b';
                            fadeIn(callbackValue165);
                            ajaxRequest('recovery=' + windowObject[encodeURIComponentMethod](recoverBackupValue1) + tokenParameter + recoverBackupValue2, function() {
                                writeCookie(recoveryCookieSuffix, 1);
                                locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '')
                            }, function() {
                                callbackValue165[classNameProperty] = 'd';
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bn')
                            }, function() {
                                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'al');
                                callbackValue165[classNameProperty] = 'o'
                            })
                        };
                    callbackValue222[classNameProperty] += ' z';
                    callbackValue221[addEventListenerMethod](clickEvent, function() {
                        callbackValue220[removeEventListenerMethod](clickEvent, callbackValue223);
                        callbackValue222[classNameProperty] = callbackValue222[classNameProperty][replaceMethod](' z', '')
                    });
                    callbackValue220[addEventListenerMethod](clickEvent, callbackValue223)
                };
            initializeFileEntry(callbackValue167);
            callbackValue166[addEventListenerMethod](mouseDownEvent, function() {
                if (this[nextElementSiblingProperty][styleProperty][displayProperty] != blockValue) revealCurrentPath(callbackValue167)
            });
            var callbackValue171 = readCookie(recoveryCookieSuffix);
            if (callbackValue171) {
                removeCookie(recoveryCookieSuffix);
                callbackValue165[textContentProperty] = callbackValue165[getAttributeMethod](dataAttributePrefix + 'bm');
                callbackValue165[classNameProperty] = 'c';
                fadeIn(callbackValue165);
                var callbackValue172 = callbackValue166[nextElementSiblingProperty];
                callbackValue172[styleProperty][displayProperty] = blockValue;
                callbackValue172[classNameProperty] = 'A';
                callbackValue166[classNameProperty] = '';
                revealCurrentPath(callbackValue167)
            }
        }
    });
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var callbackValue224 = documentObject[querySelectorMethod]('#e'),
            callbackValue225 = documentObject[querySelectorMethod]('#g');
        if (callbackValue224 && callbackValue225) {
            var callbackValue226 = callbackValue224[querySelectorMethod]('div>ol+ul>li+li>a'),
                callbackValue227 = callbackValue225[querySelectorMethod]('dd a'),
                callbackValue228 = callbackValue225[querySelectorAllMethod]('fieldset'),
                callbackValue229 = callbackValue225[querySelectorAllMethod]('legend'),
                callbackValue230 = callbackValue225[querySelectorMethod]('input[type="password"]'),
                callbackValue231 = callbackValue225[querySelectorAllMethod]('dd input[type="text"]'),
                callbackValue232 = callbackValue225[querySelectorAllMethod]('input[type="radio"]'),
                callbackValue233 = callbackValue225[querySelectorAllMethod]('input[type="checkbox"]'),
                callbackValue234 = callbackValue225[querySelectorMethod]('fieldset+p input[type="button"]'),
                callbackValue235 = callbackValue225[querySelectorMethod]('p a'),
                callbackValue236 = callbackValue224[querySelectorMethod]('div>div+ul+p samp'),
                togglePasswordField = function() {
                    if (this[classNameProperty]) {
                        this[previousElementSiblingProperty].type = 'password';
                        this[classNameProperty] = '';
                        this.title = callbackValue236[getAttributeMethod](dataAttributePrefix + 'bx')
                    } else {
                        this[previousElementSiblingProperty].type = 'text';
                        this[classNameProperty] = 'e';
                        this.title = callbackValue236[getAttributeMethod](dataAttributePrefix + 'by')
                    }
                },
                validateSettings = function() {
                    var callbackValue244 = false,
                        callbackValue245 = false,
                        callbackValue246 = false;
                    if (callbackValue230[valueProperty][lengthProperty] > 0 && callbackValue230[valueProperty] != callbackValue230.b) callbackValue245 = true;
                    for (var callbackValue247 = 0, callbackValue248 = callbackValue231[lengthProperty]; callbackValue247 < callbackValue248; callbackValue247++) {
                        var callbackValue249 = callbackValue231[callbackValue247][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (callbackValue249 && callbackValue249 != callbackValue231[callbackValue247][valueProperty]) callbackValue244 = true;
                        if (callbackValue231[callbackValue247][valueProperty] != callbackValue231[callbackValue247].b) callbackValue245 = true;
                        var callbackValue250 = callbackValue231[callbackValue247][parentNodeProperty][previousElementSiblingProperty];
                        if (callbackValue247 == 5) {
                            if (!callbackValue231[callbackValue247][valueProperty][matchMethod]('^[-a-z0-9._/]{1,30}$')) {
                                callbackValue250[classNameProperty] = 'd';
                                callbackValue246 = true
                            } else callbackValue250[classNameProperty] = ''
                        } else if (callbackValue247 == 6) {
                            if (!callbackValue231[callbackValue247][valueProperty][matchMethod]('^[0-9]{0,2}$')) {
                                callbackValue250[classNameProperty] = 'd';
                                callbackValue246 = true
                            } else callbackValue250[classNameProperty] = ''
                        } else {
                            if (!callbackValue231[callbackValue247][valueProperty][matchMethod]('^[1-9][0-9]{0,6}$')) {
                                callbackValue250[classNameProperty] = 'd';
                                callbackValue246 = true
                            } else callbackValue250[classNameProperty] = ''
                        }
                    }
                    for (var callbackValue247 = 0, callbackValue248 = callbackValue232[lengthProperty]; callbackValue247 < callbackValue248; callbackValue247++)
                        if (callbackValue232[callbackValue247][checkedProperty] != callbackValue232[callbackValue247].b) callbackValue245 = true;
                    for (var callbackValue247 = 0, callbackValue248 = callbackValue233[lengthProperty]; callbackValue247 < callbackValue248; callbackValue247++) {
                        var callbackValue249 = callbackValue233[callbackValue247][parentNodeProperty][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (callbackValue249 && !!(callbackValue249 * 1) != callbackValue233[callbackValue247][checkedProperty]) callbackValue244 = true;
                        if (callbackValue233[callbackValue247][checkedProperty] != callbackValue233[callbackValue247].b) callbackValue245 = true
                    }
                    if (callbackValue245 && !callbackValue246) callbackValue234[disabledProperty] = false;
                    else callbackValue234[disabledProperty] = true;
                    if (callbackValue244 && callbackValue235[classNameProperty] != 'l') {
                        callbackValue235[addEventListenerMethod](clickEvent, restoreSettingsDefaults);
                        callbackValue235[classNameProperty] = 'l'
                    } else if (!callbackValue244 && callbackValue235[classNameProperty] == 'l') {
                        callbackValue235[removeEventListenerMethod](clickEvent, restoreSettingsDefaults);
                        callbackValue235[classNameProperty] = ''
                    }
                },
                handleSettingsKeydown = function(event) {
                    if (event[keyCodeProperty] == 13) saveSettings()
                },
                saveSettings = function() {
                    if (!callbackValue234[disabledProperty]) {
                        blurSettingsControls();
                        callbackValue234[disabledProperty] = true;
                        callbackValue230.c = callbackValue230[valueProperty];
                        callbackValue230[removeEventListenerMethod](inputEvent, validateSettings);
                        for (var callbackValue251 = 0, callbackValue252 = callbackValue231[lengthProperty]; callbackValue251 < callbackValue252; callbackValue251++) {
                            callbackValue231[callbackValue251].c = callbackValue231[callbackValue251][valueProperty];
                            callbackValue231[callbackValue251][removeEventListenerMethod](inputEvent, validateSettings)
                        }
                        for (var callbackValue251 = 0, callbackValue252 = callbackValue232[lengthProperty]; callbackValue251 < callbackValue252; callbackValue251++) {
                            callbackValue232[callbackValue251].c = callbackValue232[callbackValue251][checkedProperty];
                            callbackValue232[callbackValue251][removeEventListenerMethod](changeEvent, validateSettings)
                        }
                        for (var callbackValue251 = 0, callbackValue252 = callbackValue233[lengthProperty]; callbackValue251 < callbackValue252; callbackValue251++) {
                            callbackValue233[callbackValue251].c = callbackValue233[callbackValue251][checkedProperty];
                            callbackValue233[callbackValue251][removeEventListenerMethod](changeEvent, validateSettings)
                        }
                        if (callbackValue230[valueProperty]) {
                            callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'az');
                            callbackValue236[classNameProperty] = 'b';
                            fadeIn(callbackValue236);
                            submitSettings(callbackValue230[valueProperty])
                        } else submitSettings('')
                    }
                },
                toggleSettingsSection = function(event) {
                    var callbackValue253 = this[nextElementSiblingProperty];
                    if (callbackValue253) {
                        var callbackValue254 = this[parentNodeProperty];
                        if (callbackValue254[classNameProperty] == 't') {
                            if (!callbackValue254[querySelectorMethod]('.d')) {
                                hidePanel(callbackValue253, function() {
                                    callbackValue254[classNameProperty] = ''
                                })
                            }
                        } else {
                            callbackValue254[classNameProperty] = 't';
                            showPanel(callbackValue253);
                            if (event) {
                                for (var callbackValue255 = 0, callbackValue256 = callbackValue229[lengthProperty]; callbackValue255 < callbackValue256; callbackValue255++) {
                                    if (callbackValue229[callbackValue255] == this) {
                                        writeCookie(settingsCookieSuffix, callbackValue255, 60 * 24 * 90, callbackValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                                        break
                                    }
                                }
                            }
                        }
                    }
                },
                blurSettingsControls = function() {
                    var callbackValue257 = documentObject[createElementMethod](inputEvent);
                    callbackValue257[styleProperty][marginLeftProperty] = '-2000px';
                    callbackValue224[appendChildMethod](callbackValue257);
                    callbackValue257[focusEvent]();
                    callbackValue224[removeChildMethod](callbackValue257)
                },
                restoreSettingsDefaults = function() {
                    for (var callbackValue261 = 0, callbackValue262 = callbackValue231[lengthProperty]; callbackValue261 < callbackValue262; callbackValue261++) {
                        var callbackValue263 = callbackValue231[callbackValue261][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (callbackValue263 && callbackValue263 != callbackValue231[callbackValue261][valueProperty]) callbackValue231[callbackValue261][valueProperty] = callbackValue263
                    }
                    for (var callbackValue261 = 0, callbackValue262 = callbackValue232[lengthProperty]; callbackValue261 < callbackValue262; callbackValue261++) {
                        var callbackValue263 = callbackValue232[callbackValue261][parentNodeProperty][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (callbackValue263 && !!(callbackValue263 * 1) != callbackValue232[callbackValue261][checkedProperty]) callbackValue232[callbackValue261][checkedProperty] = !!(callbackValue263 * 1)
                    }
                    for (var callbackValue261 = 0, callbackValue262 = callbackValue233[lengthProperty]; callbackValue261 < callbackValue262; callbackValue261++) {
                        var callbackValue263 = callbackValue233[callbackValue261][parentNodeProperty][parentNodeProperty][getAttributeMethod](dataAttributePrefix + 'aa');
                        if (callbackValue263 && !!(callbackValue263 * 1) != callbackValue233[callbackValue261][checkedProperty]) callbackValue233[callbackValue261][checkedProperty] = !!(callbackValue263 * 1)
                    }
                    callbackValue235[removeEventListenerMethod](clickEvent, restoreSettingsDefaults);
                    callbackValue235[classNameProperty] = '';
                    validateSettings()
                },
                submitSettings = function(callbackArgument66) {
                    var callbackValue264 = false;
                    callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'ad');
                    callbackValue236[classNameProperty] = 'b';
                    fadeIn(callbackValue236);
                    var callbackValue265 = generateToken();
                    writeCookie(tokenCookieSuffix, callbackValue265);
                    var callbackValue266 = 'token=' + callbackValue265 + settingsParameter + 'password]=' + windowObject[encodeURIComponentMethod](callbackArgument66) + settingsParameter + 'auth_error_limit]=' + callbackValue231[0][valueProperty] + settingsParameter + 'auth_lockout_duration]=' + callbackValue231[1][valueProperty] + settingsParameter + 'auth_session_reset]=' + callbackValue231[2][valueProperty] + settingsParameter + 'code_redraw_delay]=' + callbackValue231[3][valueProperty] + settingsParameter + 'code_undo_limit]=' + callbackValue231[4][valueProperty] + settingsParameter + 'default_file]=' + callbackValue231[5][valueProperty] + settingsParameter + 'recovery_points]=' + callbackValue231[6][valueProperty] + settingsParameter + 'logout_to_site]=' + (callbackValue233[0][checkedProperty] * 1) + settingsParameter + 'site_scripts]=' + (callbackValue233[1][checkedProperty] * 1) + settingsParameter + 'site_styles]=' + (callbackValue233[2][checkedProperty] * 1) + settingsParameter + 'link_replacing]=' + (callbackValue233[3][checkedProperty] * 1) + settingsParameter + 'name_correction]=' + (callbackValue233[4][checkedProperty] * 1) + settingsParameter + 'image_rewriting]=' + (callbackValue233[5][checkedProperty] * 1) + settingsParameter + 'code_highlighting]=' + (callbackValue233[6][checkedProperty] * 1) + settingsParameter + 'folder_size]=' + (callbackValue233[7][checkedProperty] * 1) + settingsParameter + 'update_final]=' + (callbackValue233[8][checkedProperty] * 1) + settingsParameter + 'update_beta]=' + (callbackValue233[9][checkedProperty] * 1);
                    for (var callbackValue267 = 0, callbackValue268 = callbackValue232[lengthProperty]; callbackValue267 < callbackValue268; callbackValue267++) {
                        if (callbackValue232[callbackValue267][checkedProperty]) {
                            if (callbackValue232[callbackValue267].b != callbackValue232[callbackValue267][checkedProperty]) callbackValue264 = true;
                            callbackValue266 += settingsParameter + 'lang]=' + callbackValue232[callbackValue267][valueProperty]
                        }
                    }
                    if ((callbackValue233[1].b != callbackValue233[1][checkedProperty] || callbackValue233[2].b != callbackValue233[2][checkedProperty]) && documentObject[documentElementProperty].id == 'd') callbackValue264 = true;
                    else if (callbackValue233[6].b != callbackValue233[6][checkedProperty] && documentObject[documentElementProperty].id == 'c') callbackValue264 = true;
                    ajaxRequest(callbackValue266, function() {
                        if (callbackValue264) {
                            var submitSettingsValue1 = '';
                            for (var submitSettingsValue2 = 0, submitSettingsValue3 = callbackValue228[lengthProperty]; submitSettingsValue2 < submitSettingsValue3; submitSettingsValue2++)
                                if (callbackValue228[submitSettingsValue2][classNameProperty] == 't') submitSettingsValue1 += submitSettingsValue2;
                            writeCookie(stateCookieSuffix, submitSettingsValue1, false, callbackValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                            locationObject.href = locationObject.href[replaceMethod](locationObject.hash, '')
                        } else {
                            applySavedSettings();
                            callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'ae');
                            callbackValue236[classNameProperty] = 'c'
                        }
                    }, function() {
                        restoreSettingsUi();
                        callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'aj')
                    }, function() {
                        restoreSettingsUi();
                        callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'al')
                    })
                },
                applySavedSettings = function() {
                    callbackValue230.b = callbackValue230.c;
                    callbackValue230[addEventListenerMethod](inputEvent, validateSettings);
                    for (var callbackValue269 = 0, callbackValue270 = callbackValue231[lengthProperty] - 1; callbackValue269 < callbackValue270; callbackValue269++) {
                        callbackValue231[callbackValue269].b = callbackValue231[callbackValue269].c;
                        callbackValue231[callbackValue269][addEventListenerMethod](inputEvent, validateSettings)
                    }
                    for (var callbackValue269 = 0, callbackValue270 = callbackValue232[lengthProperty]; callbackValue269 < callbackValue270; callbackValue269++) {
                        callbackValue232[callbackValue269].b = callbackValue232[callbackValue269].c;
                        callbackValue232[callbackValue269][addEventListenerMethod](changeEvent, validateSettings)
                    }
                    for (var callbackValue269 = 0, callbackValue270 = callbackValue233[lengthProperty]; callbackValue269 < callbackValue270; callbackValue269++) {
                        callbackValue233[callbackValue269].b = callbackValue233[callbackValue269].c;
                        callbackValue233[callbackValue269][addEventListenerMethod](changeEvent, validateSettings)
                    }
                    callbackValue236[setAttributeMethod](dataAttributePrefix + 'ci', callbackValue233[0].c * 1);
                    validateSettings()
                },
                restoreSettingsUi = function() {
                    callbackValue230[addEventListenerMethod](inputEvent, validateSettings);
                    for (var callbackValue271 = 0, callbackValue272 = callbackValue231[lengthProperty]; callbackValue271 < callbackValue272; callbackValue271++) callbackValue231[callbackValue271][addEventListenerMethod](inputEvent, validateSettings);
                    for (var callbackValue271 = 0, callbackValue272 = callbackValue232[lengthProperty]; callbackValue271 < callbackValue272; callbackValue271++) callbackValue232[callbackValue271][addEventListenerMethod](changeEvent, validateSettings);
                    for (var callbackValue271 = 0, callbackValue272 = callbackValue233[lengthProperty]; callbackValue271 < callbackValue272; callbackValue271++) callbackValue233[callbackValue271][addEventListenerMethod](changeEvent, validateSettings);
                    callbackValue234[disabledProperty] = false;
                    callbackValue236[classNameProperty] = 'd'
                },
                initializeSettings = function() {
                    if (!callbackValue225.init) {
                        callbackValue227.title = callbackValue236[getAttributeMethod](dataAttributePrefix + 'bx');
                        callbackValue227[addEventListenerMethod](mouseDownEvent, togglePasswordField);
                        callbackValue230[addEventListenerMethod](inputEvent, validateSettings);
                        callbackValue230[addEventListenerMethod](keyDownEvent, handleSettingsKeydown);
                        callbackValue230.b = callbackValue230[valueProperty];
                        for (var callbackValue273 = 0, callbackValue274 = callbackValue231[lengthProperty]; callbackValue273 < callbackValue274; callbackValue273++) {
                            callbackValue231[callbackValue273].b = callbackValue231[callbackValue273][valueProperty];
                            callbackValue231[callbackValue273][addEventListenerMethod](inputEvent, validateSettings);
                            callbackValue231[callbackValue273][addEventListenerMethod](keyDownEvent, handleSettingsKeydown)
                        }
                        for (var callbackValue273 = 0, callbackValue274 = callbackValue232[lengthProperty]; callbackValue273 < callbackValue274; callbackValue273++) {
                            callbackValue232[callbackValue273].b = callbackValue232[callbackValue273][checkedProperty];
                            callbackValue232[callbackValue273][parentNodeProperty][addEventListenerMethod](clickEvent, function() {
                                for (var initializeSettingsValue1 = 0, initializeSettingsValue2 = callbackValue232[lengthProperty]; initializeSettingsValue1 < initializeSettingsValue2; initializeSettingsValue1++) {
                                    if (callbackValue232[initializeSettingsValue1][parentNodeProperty] == this) {
                                        callbackValue232[initializeSettingsValue1][parentNodeProperty][classNameProperty] = '';
                                        callbackValue232[initializeSettingsValue1][checkedProperty] = true;
                                        validateSettings.call(callbackValue232[initializeSettingsValue1])
                                    } else callbackValue232[initializeSettingsValue1][parentNodeProperty][classNameProperty] = 'l'
                                }
                            });
                            if (callbackValue232[callbackValue273][checkedProperty]) callbackValue232[callbackValue273][parentNodeProperty][classNameProperty] = '';
                            else callbackValue232[callbackValue273][parentNodeProperty][classNameProperty] = 'l'
                        }
                        for (var callbackValue273 = 0, callbackValue274 = callbackValue233[lengthProperty]; callbackValue273 < callbackValue274; callbackValue273++) {
                            callbackValue233[callbackValue273].b = callbackValue233[callbackValue273][checkedProperty];
                            callbackValue233[callbackValue273][addEventListenerMethod](changeEvent, validateSettings)
                        }
                        callbackValue234[addEventListenerMethod](clickEvent, saveSettings);
                        for (var callbackValue273 = 0, callbackValue274 = callbackValue229[lengthProperty]; callbackValue273 < callbackValue274; callbackValue273++) callbackValue229[callbackValue273][addEventListenerMethod](clickEvent, toggleSettingsSection);
                        if (!callbackValue225[querySelectorMethod]('.t')) {
                            var callbackValue275 = readCookie(settingsCookieSuffix);
                            if (!callbackValue275) callbackValue275 = 0;
                            windowObject[setTimeoutMethod](function() {
                                toggleSettingsSection.call(callbackValue229[callbackValue275])
                            }, 200)
                        }
                        validateSettings();
                        callbackValue225.init = true
                    }
                },
                callbackValue237 = readCookie(activateMarker);
            if (callbackValue237) {
                removeCookie(activateMarker, callbackValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'aw');
                callbackValue236[classNameProperty] = 'c';
                fadeIn(callbackValue236)
            }
            var callbackValue238 = readCookie(stateCookieSuffix);
            if (callbackValue238) {
                removeCookie(stateCookieSuffix, callbackValue236[getAttributeMethod](dataAttributePrefix + 'cl'));
                callbackValue236[textContentProperty] = callbackValue236[getAttributeMethod](dataAttributePrefix + 'ae');
                callbackValue236[classNameProperty] = 'c';
                fadeIn(callbackValue236);
                var callbackValue239 = callbackValue226[nextElementSiblingProperty];
                callbackValue239[styleProperty][displayProperty] = blockValue;
                callbackValue239[classNameProperty] = 'A';
                callbackValue226[classNameProperty] = '';
                for (var callbackValue240 = 0, callbackValue241 = callbackValue238[lengthProperty]; callbackValue240 < callbackValue241; callbackValue240++) {
                    for (var callbackValue242 = 0, callbackValue243 = callbackValue228[lengthProperty]; callbackValue242 < callbackValue243; callbackValue242++) {
                        if ((callbackValue238[sliceMethod](callbackValue240, callbackValue240 + 1) * 1) == callbackValue242) {
                            callbackValue228[callbackValue242][classNameProperty] = 't';
                            callbackValue228[callbackValue242][lastElementChildProperty][styleProperty][displayProperty] = blockValue
                        }
                    }
                }
                initializeSettings()
            }
            callbackValue226[addEventListenerMethod](mouseDownEvent, initializeSettings)
        }
    })
    documentObject[addEventListenerMethod](domContentLoadedEvent, function() {
        var panel = documentObject[querySelectorMethod]('#e'),
            toggle = documentObject[querySelectorMethod]('#myvibehtml-mobile-menu-toggle'),
            menu = documentObject[querySelectorMethod]('#myvibehtml-mobile-menu');
        if (!panel || !toggle || !menu) return;
        var items = menu[querySelectorAllMethod]('[data-mobile-target]'),
            setMenuState = function(open) {
                toggle[setAttributeMethod]('aria-expanded', open ? 'true' : 'false');
                menu[setAttributeMethod]('aria-hidden', open ? 'false' : 'true')
            };
        for (var callbackValue276 = 0, callbackValue277 = items[lengthProperty]; callbackValue276 < callbackValue277; callbackValue276++) {
            var item = items[callbackValue276],
                target = panel[querySelectorMethod](item[getAttributeMethod]('data-mobile-target'));
            if (!target) {
                item.hidden = true;
                continue
            }
            item[addEventListenerMethod](clickEvent, function(event) {
                event.preventDefault();
                var target = panel[querySelectorMethod](this[getAttributeMethod]('data-mobile-target'));
                if (target && !target.disabled) {
                    if (target.tagName == 'A') target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
                    else if (target.click) target.click()
                }
                setMenuState(false)
            })
        }
        toggle[addEventListenerMethod](clickEvent, function(event) {
            event.preventDefault();
            setMenuState(menu[getAttributeMethod]('aria-hidden') == 'true')
        });
        documentObject[addEventListenerMethod](clickEvent, function(event) {
            if (event.target != toggle && !toggle.contains(event.target) && event.target != menu && !menu.contains(event.target)) setMenuState(false)
        });
        documentObject[addEventListenerMethod]('keydown', function(event) {
            if (event.key == 'Escape') {
                setMenuState(false);
                toggle.focus()
            }
        })
    })
}());
