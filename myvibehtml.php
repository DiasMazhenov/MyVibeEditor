<?php /* MyVibeHTML v0.54 */
require_once __DIR__ . '/myvibehtml-runtime.php';

$myvibehtmlRuntimeDirectory = myvibehtml_runtime_directory();
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', $myvibehtmlRuntimeDirectory ? $myvibehtmlRuntimeDirectory . 'error.log' : dirname(__FILE__) . '/error.log');
unset($myvibehtmlRuntimeDirectory);
version_compare(PHP_VERSION, '7.4', '>=') || exit('PHP ' . PHP_VERSION . ' is not supported');
define('REQUEST_DOCUMENT_ROOT', 'document_root');
define('REQUEST_QUERY_STRING', 'query_string');
define('REQUEST_URI', 'request_uri');
define('REQUEST_PHP_SELF', 'php_self');
define('REQUEST_ACCEPT_LANGUAGE', 'http_accept_language');
define('REQUEST_USER_AGENT', 'http_user_agent');
define('REQUEST_REMOTE_ADDR', 'remote_addr');
define('REQUEST_SERVER_ADDR', 'server_addr');
define('REQUEST_SCRIPT_FILENAME', 'script_filename');
define('REQUEST_SCRIPT_NAME', 'script_name');
define('REQUEST_SERVER_NAME', 'server_name');
define('REQUEST_SERVER_PROTOCOL', 'server_protocol');
define('SETTING_LANGUAGE', 'lang');
define('SETTING_PASSWORD', 'password');
define('SETTING_SESSION', 'session');
define('SETTING_PASSWORD_COMPLEXITY', 'pass_complexity');
define('SETTING_PASSWORD_COMPLEXITY_JS', 'pass_complexity_js');
define('SETTING_AUTH_TIME', 'auth_time');
define('SETTING_AUTH_ERROR_TIME', 'auth_error_time');
define('SETTING_AUTH_ERROR_LIST', 'auth_error_list');
define('SETTING_AUTH_ERROR_LIMIT', 'auth_error_limit');
define('SETTING_AUTH_LOCKOUT_DURATION', 'auth_lockout_duration');
define('SETTING_AUTH_SESSION_RESET', 'auth_session_reset');
define('SETTING_AUTH_BOT_FILTER', 'auth_bot_filter');
define('SETTING_CODE_REDRAW_DELAY', 'code_redraw_delay');
define('SETTING_CODE_UNDO_LIMIT', 'code_undo_limit');
define('SETTING_CODE_HIGHLIGHTING', 'code_highlighting');
define('SETTING_VISUAL_EXTENSIONS', 'visual_ext');
define('SETTING_ALLOWED_EXTENSIONS', 'allowed_ext');
define('SETTING_EDITABLE_EXTENSIONS', 'editable_ext');
define('SETTING_EDITABLE_ATTRIBUTES', 'editable_attributes');
define('SETTING_DEFAULT_FILE', 'default_file');
define('SETTING_FOLDER_SIZE', 'folder_size');
define('SETTING_DOCUMENT_ROOT', 'document_root');
define('SETTING_URL_REWRITE', 'url_rewrite');
define('SETTING_LOGOUT_TO_SITE', 'logout_to_site');
define('SETTING_LINK_REPLACING', 'link_replacing');
define('SETTING_IMAGE_REWRITING', 'image_rewriting');
define('SETTING_NAME_CORRECTION', 'name_correction');
define('SETTING_RECOVERY_POINTS', 'recovery_points');
define('SETTING_SITE_SCRIPTS', 'site_scripts');
define('SETTING_SITE_STYLES', 'site_styles');
define('SETTING_CACHE', 'cache');
define('PLACEHOLDER_FILE_LIST', 'filelist');
define('PLACEHOLDER_SYSTEM_URL', 'system_url');
define('PLACEHOLDER_ERROR_LIMIT', 'error_limit');
define('PLACEHOLDER_ERROR_COUNT', 'error_count');
define('PLACEHOLDER_REDRAW_DELAY', 'redraw_delay');
define('PLACEHOLDER_MODE', 'mode');
define('PLACEHOLDER_TYPE', 'type');
define('PLACEHOLDER_BASE', 'base');
define('PLACEHOLDER_CODE', 'code');
define('PLACEHOLDER_TITLE', 'title');
define('PLACEHOLDER_VERSION', 'version');
define('PLACEHOLDER_IS_EDITED', 'is_edited');
define('REQUEST_POST_MAX_SIZE', 'post_max_size');
define('REQUEST_UPLOAD_MAX_FILESIZE', 'upload_max_filesize');
define('REQUEST_MAX_FILE_UPLOADS', 'max_file_uploads');
define('TEMPLATE_CHECKBOX_SUFFIX', '_checkbox');
define('REQUEST_AJAX_HEADER', 'http_ajax');
define('POST_SOURCE', 'source');
define('POST_TOKEN', 'token');
define('QUERY_HTML', 'html');
define('HTTP_STATUS_NOT_FOUND', '404');
define('HTTP_STATUS_FORBIDDEN', '403');
define('REQUEST_IP', 'ip');
define('REQUEST_SIP', 'sip');
define('FILE_URL', 'url');
define('FILE_NAME', 'name');
define('FILE_DATE', 'date');
define('FILE_SIZE', 'size');
define('FILE_LIST', 'list');
define('FILE_CONTENT', 'file');
define('FILE_ERROR', 'error');
define('FILE_VALUE', 'value');
define('FILE_RADIO', 'radio');
define('FILE_TMP_NAME', 'tmp_name');
define('LANGUAGE_LIST', 'language_list');
define('CLOSING_BODY_TAG', '</body>');
define('COOKIE_PREFIX', 'myvibehtml_');
define('BACKUP_URL_PREFIX', 'myvibehtml://backup/');

final class MyVibeHTMLRequest
{
    private $raw;
    private $cache;

    public function __construct()
    {
        $this->raw['a'] = $_GET;
        $this->raw['b'] = $_POST;
        $this->raw['c'] = $_SERVER;
        $this->raw['d'] = $_COOKIE;
        $this->raw['e'] = $_FILES;
    }

    public function getQuery($getquery1)
    {
        if (isset($this->cache['a'][$getquery1])) return $this->cache['a'][$getquery1]; else if (isset($this->raw['a'][$getquery1])) return $this->cache['a'][$getquery1] = $this->filter($this->raw['a'][$getquery1], $getquery1);
    }

    public function getPost($getpost1 = false)
    {
        if ($getpost1) {
            if (isset($this->cache['b'][$getpost1])) return $this->cache['b'][$getpost1]; else if (isset($this->raw['b'][$getpost1])) return $this->cache['b'][$getpost1] = $this->filter($this->raw['b'][$getpost1], $getpost1);
        } else if (count($this->raw['b'])) return true;
    }

    public function getServer($getserver1)
    {
        if (isset($this->cache['c'][$getserver1])) return $this->cache['c'][$getserver1]; else {
            $getserver2 = strtoupper($getserver1);
            if (isset($this->raw['c'][$getserver2])) return $this->cache['c'][$getserver1] = $this->filter($this->raw['c'][$getserver2], $getserver1);
        }
    }

    public function getCookie($getcookie1)
    {
        if (isset($this->cache['d'][$getcookie1])) return $this->cache['d'][$getcookie1]; else if (isset($this->raw['d'][$getcookie1])) return $this->cache['d'][$getcookie1] = $this->filter($this->raw['d'][$getcookie1], $getcookie1);
    }

    public function getFile($getfile1)
    {
        if (isset($this->raw['e'][$getfile1])) return $this->raw['e'][$getfile1];
    }

    private function filter($filter1, $filter2)
    {
        $filterMethods = [
            REQUEST_SERVER_PROTOCOL => 'filterServerProtocol', REQUEST_SERVER_NAME => 'filterServerName',
            REQUEST_SCRIPT_FILENAME => 'filterScriptFilename', REQUEST_DOCUMENT_ROOT => 'filterDocumentRoot',
            REQUEST_PHP_SELF => 'filterPhpSelf', REQUEST_SCRIPT_NAME => 'filterScriptName',
            REQUEST_QUERY_STRING => 'filterQueryString', REQUEST_REMOTE_ADDR => 'filterRemoteAddress',
            REQUEST_SERVER_ADDR => 'filterServerAddress', 'ip' => 'filterIpAddress'
        ];
        if (isset($filterMethods[$filter2]) && method_exists($this, $filterMethods[$filter2])) {
            $filterMethod = $filterMethods[$filter2];
            return $this->$filterMethod($filter1);
        }
        return $filter1;
    }

    private function filterServerProtocol($filterserverprotocol1)
    {
        preg_match('~^[a-z]{4,5}/[0-9]\.[0-9]$~i', $filterserverprotocol1, $filterserverprotocol2);
        if (isset($filterserverprotocol2[0])) return $filterserverprotocol2[0];
    }

    private function filterServerName($filterservername1)
    {
        preg_match('~^[a-z0-9-_.]{2,300}$~i', $filterservername1, $filterservername2);
        if (isset($filterservername2[0])) return $filterservername2[0];
    }

    private function filterScriptFilename($filterscriptfilename1)
    {
        $filterscriptfilename2 = str_replace('\\', '/', __FILE__);
        if (stripos($filterscriptfilename2, $this->raw['c'][strtoupper(REQUEST_DOCUMENT_ROOT)]) === 0) return $filterscriptfilename2; else return str_replace('\\', '/', $filterscriptfilename1);
    }

    private function filterDocumentRoot($filterdocumentroot1)
    {
        $filterdocumentroot1 = str_replace('\\', '/', $filterdocumentroot1);
        $filterdocumentroot2 = $this->getServer(REQUEST_SCRIPT_FILENAME);
        $filterdocumentroot3 = $this->getServer(REQUEST_PHP_SELF);
        $filterdocumentroot4 = $this->getServer(REQUEST_SCRIPT_NAME);
        //if (__LINE__ != 1) exit;
        if (stripos($filterdocumentroot2, $filterdocumentroot3) > 0) $filterdocumentroot5 = str_ireplace($filterdocumentroot3, '', $filterdocumentroot2);
        if (stripos($filterdocumentroot2, $filterdocumentroot4) > 0) $filterdocumentroot6 = str_ireplace($filterdocumentroot4, '', $filterdocumentroot2);
        if (isset($filterdocumentroot5)) {
            if (isset($filterdocumentroot6)) {
                if (strlen($filterdocumentroot5) > strlen($filterdocumentroot6)) $filterdocumentroot7 = $filterdocumentroot5; else$filterdocumentroot7 = $filterdocumentroot6;
            } else$filterdocumentroot7 = $filterdocumentroot5;
        } else if (isset($filterdocumentroot6)) $filterdocumentroot7 = $filterdocumentroot6; else$filterdocumentroot7 = $filterdocumentroot1;
        if (stripos($filterdocumentroot2, $filterdocumentroot1) === 0) {
            if (strlen($filterdocumentroot7) > strlen($filterdocumentroot1)) $filterdocumentroot1 = $filterdocumentroot7;
        } else$filterdocumentroot1 = $filterdocumentroot7;
        if (substr($filterdocumentroot1, -1) == '/') return substr($filterdocumentroot1, 0, -1);
        return $filterdocumentroot1;
    }

    private function filterPhpSelf($filterphpself1)
    {
        return str_replace('\\', '/', $filterphpself1);
    }

    private function filterScriptName($filterscriptname1)
    {
        return str_replace('\\', '/', $filterscriptname1);
    }

    private function filterQueryString($filterquerystring1)
    {
        return str_replace('\\', '/', $filterquerystring1);
    }

    private function filterRemoteAddress($filterremoteaddress1)
    {
        return $this->filterIpAddress($filterremoteaddress1);
    }

    private function filterServerAddress($filterserveraddress1)
    {
        return $this->filterIpAddress($filterserveraddress1);
    }

    private function filterIpAddress($filteripaddress1)
    {
        preg_match('~^[a-z0-9.:]{1,40}$~i', $filteripaddress1, $filteripaddress2);
        if (isset($filteripaddress2[0])) return $filteripaddress2[0];
    }

}

final class MyVibeHTMLResponse
{
    private $protocol;
    private $headers;
    private $cookies;
    private $body;

    public function __construct($construct1)
    {
        $this->protocol = $construct1;
        $this->addHeader('Content-type:text/html;charset=utf-8');
        $this->addHeader('X-Content-Type-Options:nosniff');
        $this->addHeader('X-Frame-Options:SAMEORIGIN');
        $this->addHeader('Referrer-Policy:no-referrer');
        $this->addHeader('Permissions-Policy:camera=(), microphone=(), geolocation=()');
        $this->addHeader('X-Permitted-Cross-Domain-Policies:none');
        $this->addHeader('Cache-Control:no-store, max-age=0');
        $this->addHeader("Content-Security-Policy-Report-Only:default-src 'self';base-uri 'self';connect-src 'self';font-src 'self' data:;img-src 'self' data: blob:;object-src 'none';script-src 'self';style-src 'self';frame-src 'self' data: blob:;form-action 'self';frame-ancestors 'self'");
    }

    public function addHeader($addheader1)
    {
        return $this->headers[] = $addheader1;
    }

    public function setStatus($setstatus1, $setstatus2)
    {
        return $this->headers[] = $this->protocol . ' ' . $setstatus1 . ' ' . $setstatus2;
    }

    public function redirect($redirect1)
    {
        return $this->headers[] = 'Location:' . $redirect1;
    }

    public function setCookie($setcookie1, $setcookie2 = false, $setcookie3 = false, $setcookie4 = false, $setcookie5 = false, $setcookie6 = false, $setcookie7 = false)
    {
        $setcookie8['a'] = $setcookie1;
        $setcookie8['b'] = $setcookie2;
        $setcookie8['c'] = $setcookie7;
        $setcookie8['d'] = (int)$setcookie3;
        $setcookie8['e'] = str_replace('%2F', '/', urlencode($setcookie4));
        $setcookie8['f'] = $setcookie5;
        $setcookie8['g'] = (int)$setcookie6;
        $this->cookies[] = $setcookie8;
    }

    public function clearCookie($clearcookie1, $clearcookie2 = false, $clearcookie3 = false)
    {
        $this->setCookie($clearcookie1, '', time() - 60 * 60, $clearcookie2, $clearcookie3);
    }

    public function setBody($setbody1)
    {
        return $this->body = $setbody1;
    }

    public function send()
    {
        //if (__LINE__ != 1) exit;
        if (isset($this->headers)) foreach ($this->headers as $send1) header($send1);
        if (isset($this->cookies)) foreach ($this->cookies as $send2) {
            $send3 = $send2['g'] || (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) != 'off' && $_SERVER['HTTPS'] !== '');
            $send4 = $send2['e'] ? $send2['e'] : '/';
            setcookie($send2['a'], $send2['b'], ['expires' => $send2['d'], 'path' => $send4, 'domain' => $send2['f'] ? $send2['f'] : '', 'secure' => (bool)$send3, 'httponly' => (bool)$send2['c'], 'samesite' => 'Lax']);
        }
        if (isset($this->body)) print $this->body;
    }
}

final class MyVibeHTMLConfig
{
    const LINE_SEPARATOR = "\n";
    const LANGUAGE_FILE = 'lang.ini';
    const CONFIG_FILE = 'conf.ini';
    private $state;
    private $legacyState;
    private $translations;
    private $settings;
    private $templates;
    private $dirty;
    private $configPath;
    private $lockHandle;

    public function __construct($construct1, $construct2)
    {
        $this->dirty = false;
        $this->state['f'] = myvibehtml_runtime_directory($construct2);
        $configLockPath = $this->state['f'] ? $this->state['f'] . 'config-state.lock' : $construct1 . self::CONFIG_FILE . '.state-lock';
        $this->lockHandle = @fopen($configLockPath, 'c');
        if (!$this->lockHandle || !flock($this->lockHandle, LOCK_EX)) throw new RuntimeException('Unable to lock MyVibeHTML configuration');
        $this->translations = parse_ini_file($construct1 . self::LANGUAGE_FILE, true);
        $this->configPath = $this->getConfigPath($construct1, $construct2);
        $this->settings = parse_ini_file($this->configPath, true);
        if (!is_array($this->settings)) $this->settings = [];
        if (!array_key_exists(SETTING_SITE_SCRIPTS, $this->settings)) {
            $this->settings[SETTING_SITE_SCRIPTS] = '0';
            $this->dirty = true;
        }
        $this->templates = [
            'j' => '<ol><li title="{source_editor}">{type}</li><li title="{visual_editor}">text</li></ol>',
            'i' => '<ol><li>{type}</li></ol>',
            'h' => '<div id="e"><div><div><h1><a href="{site_preview_url}">MyVibeHTML</a> v{version}</h1><p>{extended}</p></div>{mode}<ul><li><a title="{files}">{files}</a><div id="f"><ol><li>{file_name}</li><li>{file_size}</li><li>{file_changed}</li><li>{file_menu}</li></ol><ul>{filelist}</ul></div></li><li><a title="{settings}">{settings}</a><div id="g"><fieldset><legend>{auth}</legend><dl><dt title="{new_password}">{new_password}:</dt><dd><input type="password" maxlength="14"><a></a></dd><dt title="{auth_error_limit_desc}">{login_attempts}:</dt><dd data-aa="5"><input type="text" maxlength="2" value="{auth_error_limit}"></dd><dt title="{auth_lockout_duration_desc}">{lockout_duration}:</dt><dd data-aa="1"><input type="text" maxlength="7" value="{auth_lockout_duration}"></dd><dt title="{auth_session_reset_desc}">{session_autoreset}:</dt><dd data-aa="60"><input type="text" maxlength="7" value="{auth_session_reset}"></dd><dd title="{logout_to_site_desc}" data-aa="0"><label>{logout_to_site_checkbox}<em></em>{redirect_to_site}</label></dd></dl></fieldset><fieldset><legend>{visual_editor}</legend><dl><dd title="{site_scripts_desc}" data-aa="1"><label>{site_scripts_checkbox}<em></em>{enable_scripts}</label></dd><dd title="{site_styles_desc}" data-aa="1"><label>{site_styles_checkbox}<em></em>{enable_styles}</label></dd><dd title="{link_replacing_desc}" data-aa="1"><label>{link_replacing_checkbox}<em></em>{change_links}</label></dd><dd title="{name_correction_desc}" data-aa="1"><label>{name_correction_checkbox}<em></em>{remove_symbols}</label></dd><dd title="{image_rewriting_desc}" data-aa="0"><label>{image_rewriting_checkbox}<em></em>{rewrite_file}</label></dd></dl></fieldset><fieldset><legend>{source_editor}</legend><dl><dt title="{code_redraw_delay_desc}">{redraw_delay}:</dt><dd data-aa="200"><input type="text" maxlength="7" value="{code_redraw_delay}"></dd><dt title="{code_undo_limit_desc}">{steps_for_undo}:</dt><dd data-aa="50"><input type="text" maxlength="3" value="{code_undo_limit}"></dd><dd title="{code_highlighting_desc}" data-aa="1"><label>{code_highlighting_checkbox}<em></em>{enable_highlighting}</label></dd></dl></fieldset><fieldset><legend>{file_manager}</legend><dl><dd title="{folder_size_desc}" data-aa="1"><label>{folder_size_checkbox}<em></em>{display_catalog_size}</label></dd></dl></fieldset><fieldset><legend>{system}</legend><dl><dt title="{default_file_desc}">{main_page_or_file}:</dt><dd data-aa="index.html"><input type="text" maxlength="30" value="{default_file}"></dd><dt title="{recovery_points_desc}">{number_of_recovery_point}:</dt><dd data-aa="5"><input type="text" maxlength="2" value="{recovery_points}"></dd><dt title="{language}">{language}:</dt><dd><ul>{language_list}</ul></dd></dl></fieldset><p><input type="button" value="{save}" disabled><a title="{restore_settings}"></a></p></div></li></ul><div><ul data-ab="<li>{tagname}<i><i></i></i></li>"></ul><p><i title="{clone_block}"></i><i title="{move_up_block}"></i><i title="{move_down_block}"></i><i title="{delete_block}"></i><i title="{attributes}"></i></p><div><fieldset><legend>{attributes}</legend><dl><script type="text/template"><dt><input type="text" value="{name}" disabled></dt><dd><input type="text" value="{value}"></dd></script></dl></fieldset></div></div><ul><li><input type="button" value="{save}" title="{save}" disabled></li><li><input type="button" value="{logout}" title="{logout}" disabled data-ac="{not_save}"></li></ul><p><samp data-ad="{saving}" data-ae="{saved}" data-af="{not_saved}" data-ag="{reset_session}" data-ah="{access_closed}" data-ai="{login_again}" data-aj="{request_rejected}" data-ak="{request_blocked}" data-al="{no_response}" data-am="{not_writable}" data-an="{old_browser}" data-ao="{new_version}" data-ap="{need_update}" data-aq="{install}" data-ar="{not_install}" data-as="{download_installer}" data-at="{system_update}" data-au="{update_error}" data-av="{install_complete}" data-aw="{activation_complete}" data-ax="{attachment_domain}" data-ay="{no_connect}" data-az="{password_hashing}" data-bb="{pass_complexity}" data-bc="{uploading}" data-bd="{uploading_complete}" data-be="{uploading_error}" data-bf="{extension_error}" data-bg="{count_limit}" data-bh="{size_limit}" data-bi="{file_deletion}" data-bj="{file_deleted}" data-bk="{deletion_error}" data-bl="{file_recovery}" data-bm="{recovery_success}" data-bn="{recovery_error}" data-bo="{backup_error}" data-bp="{file_replacing}" data-bq="{incorrect_link}" data-br="{unknown_relation}" data-bs="{element_busy}" data-bt="{disable_script}" data-bu="{disable}" data-bv="{disabling_scripts}" data-bw="{scripts_disabled}" data-bx="{show_password}" data-by="{hide_password}" data-bz="{post_max_size}" data-bA="{upload_max_filesize}" data-cc="{max_file_uploads}" data-cd="{editable_attributes}" data-ce="{auth_session_reset}" data-cf="{link_replacing}" data-cg="{site_scripts}" data-ch="{site_styles}" data-ci="{logout_to_site}" data-cj="{ip}" data-ck="{sip}" data-cl="{system_url}" data-cm="{version}"></samp><noscript><samp>{requires_javascript}</samp></noscript><i></i></p></div></div><script src="{system_url}myvibehtml.js?v={version}"></script>',
            'a' => '<!doctype html><html id="a" lang="{language}"><head><title>{auth} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><fieldset><legend>{auth}</legend><ol data-cp="{error_limit}" data-cq="{error_count}"><li></li></ol><p><samp data-az="{password_hashing}" data-cr="{password_checking}" data-cs="{access_granted}" data-ct="{access_denied}" data-al="{no_response}" data-am="{not_writable}" data-cl="{system_url}">{document_root_error}</samp><noscript><samp>{requires_javascript}</samp></noscript><i></i></p><p><span>{password}:</span><input type="password" data-bb="{pass_complexity}" maxlength="14"><a data-bx="{show_password}" data-by="{hide_password}"></a></p><p><input type="button" value="{login}" disabled></p></fieldset><script src="{system_url}myvibehtml.js?v={version}"></script></body></html>',
            'e' => '<!doctype html><html id="b" lang="{language}"><head><title>{code} - {{code}} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><samp><span>{code}</span>{{code}}</samp>{panel}</body></html>',
            'c' => '<!doctype html><html id="d" lang="{language}"><head><title>{title} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><iframe title="{title}">{no_frames}</iframe>{panel}<script type="text/template" id="h"><base href="{base}"></script><script type="text/template" id="i">@keyframes myvibehtml-drop{0%{opacity:0.6;}49%{opacity:0.6;}50%{opacity:1;}99%{opacity:1;}}[data-myvibehtml-string]{outline:none;font-style:inherit;cursor:text}[data-myvibehtml-focus]{outline:4px solid #f2ca00 !important;outline-offset:8px}[data-myvibehtml-disabled]{outline-color:#f00 !important}[data-myvibehtml-dragover]{outline:4px solid #adc8fe;outline-offset:-4px}[data-myvibehtml-drop]{animation:myvibehtml-drop 70ms infinite linear}[data-myvibehtml-object]{display:block;position:relative;background-color:#fff;opacity:0;z-index:1}</script><script type="text/template" id="j" data-cu="{is_edited}" data-encoding="base64">{source}</script></body></html>',
            'd' => '<!doctype html><html id="c" lang="{language}"><head><title>{title} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><div><ol data-ab="<li style=height:0px></li>"></ol><pre contenteditable data-cv="{redraw_delay}" data-cw="{code_highlighting}" data-cx="{code_undo_limit}"></pre></div>{panel}<script type="text/template" id="j" data-cu="{is_edited}" data-encoding="base64">{source}</script></body></html>',
            'o' => '<li><ol class="u"><li><a data-cy="{url}">{name}</a></li><li data-cz="{size}"></li><li>{date}</li><li><i title="{recover_backup}"></i><i title="{recovery_confirm}"></i><i title="{recovery_cancel}"></i></li></ol><ul>{list}</ul></li>',
            'n' => '<li><ol class="s"><li><a data-cy="{url}">{name}</a></li><li data-cz="{size}"></li><li>{date}</li><li><i title="{add_file}"></i></li></ol><ul></ul></li>',
            'b' => '<li><ol class="v"><li><a data-cy="{url}">{name}</a></li><li data-cz="{size}"></li><li>{date}</li><li><i title="{delete_file}"></i><i title="{deletion_confirm}"></i><i title="{deletion_cancel}"></i></li></ol></li>',
            'm' => '<li title="{{lang}}">{radio}{lang}</li>',
            'l' => '<input type="radio" name="{name}" value="{value}">',
            'k' => '<input type="radio" name="{name}" value="{value}" checked>',
            'g' => '<input type="checkbox">',
            'f' => '<input type="checkbox" checked>'
        ];
        $this->templates['h'] = str_replace(
            '<div><h1><a href="{site_preview_url}">MyVibeHTML</a> v{version}</h1><p>{extended}</p></div>',
            '<div class="myvibehtml-panel-brand"><h1><a href="{site_preview_url}">MyVibeHTML</a> <span>v{version}</span></h1><p>{extended}</p><a id="myvibehtml-site-preview" href="{site_preview_url}" target="_blank" rel="noopener" title="{view_site}" aria-label="{view_site}"><span class="myvibehtml-local-icon myvibehtml-icon-eye" aria-hidden="true"></span></a></div>',
            $this->templates['h']
        );
        $this->templates['h'] = str_replace(
            '<div id="f">',
            '<div id="f"><div class="myvibehtml-file-tools" data-file-tools data-replace-preview="{replace_preview}" data-replace-apply="{replace_apply}" data-replace-rollback="{replace_rollback}" data-replace-success="{replace_success}" data-replace-error="{replace_error}" data-replace-stale="{replace_stale}" data-replace-rollback-success="{replace_rollback_success}" data-replace-no-changes="{replace_no_changes}"><input type="search" data-file-search data-file-prompt="{file_name_prompt}" data-content-prompt="{search_content}" data-search-prompt="{search_files}" placeholder="{search_files}" aria-label="{search_files}"><input type="text" data-file-replacement data-replace-prompt="{replace_text}" placeholder="{replace_text}" aria-label="{replace_text}" hidden><button type="button" data-file-action="new-file">{new_file}</button><button type="button" data-file-action="new-folder">{new_folder}</button><button type="button" data-file-action="media" aria-pressed="false">{media_manager}</button><button type="button" data-file-action="content" aria-pressed="false">{content_search}</button><button type="button" data-file-action="replace" hidden>{replace_content}</button><button type="button" data-file-action="rollback" hidden>{replace_rollback}</button></div><ul data-file-search-results hidden></ul>',
            $this->templates['h']
        );
        $this->templates['n'] = str_replace('<i title="{add_file}"></i></li>', '<i title="{add_file}"></i><i title="{rename_file}"></i></li>', $this->templates['n']);
        $this->templates['b'] = str_replace('<i title="{delete_file}"></i><i title="{deletion_confirm}"></i><i title="{deletion_cancel}"></i>', '<i title="{delete_file}"></i><i title="{deletion_confirm}"></i><i title="{deletion_cancel}"></i><i title="{rename_file}"></i>', $this->templates['b']);
        $this->templates['h'] = str_replace('<a title="{files}">', '<a role="button" tabindex="0" aria-expanded="false" title="{files}">', $this->templates['h']);
        $this->templates['h'] = str_replace('<a title="{settings}">', '<a role="button" tabindex="0" aria-expanded="false" title="{settings}">', $this->templates['h']);
        $this->templates['h'] = str_replace('<a></a>', '<a role="button" tabindex="0" aria-label="{show_password}"></a>', $this->templates['h']);
        $this->templates['h'] = str_replace('<input type="password" maxlength="14">', '<input type="password" aria-label="{new_password}" maxlength="14">', $this->templates['h']);
        $this->templates['h'] = str_replace('<a title="{restore_settings}"></a>', '<a role="button" tabindex="0" aria-label="{restore_settings}" title="{restore_settings}"></a>', $this->templates['h']);
        $this->templates['h'] = str_replace('</div>{mode}<ul>', '<div class="myvibehtml-preview-controls" data-preview-controls role="group" aria-label="{preview_size}"><button type="button" data-preview-size="desktop" aria-pressed="true">{preview_desktop}</button><button type="button" data-preview-size="tablet" aria-pressed="false">{preview_tablet}</button><button type="button" data-preview-size="mobile" aria-pressed="false">{preview_mobile}</button><button type="button" data-block-library aria-label="{block_library}" title="{block_library}">{blocks}</button></div></div>{mode}<ul>', $this->templates['h']);
        $this->templates['h'] = str_replace(
            '<button type="button" data-preview-size="desktop" aria-pressed="true">{preview_desktop}</button><button type="button" data-preview-size="tablet" aria-pressed="false">{preview_tablet}</button><button type="button" data-preview-size="mobile" aria-pressed="false">{preview_mobile}</button><button type="button" data-block-library aria-label="{block_library}" title="{block_library}">{blocks}</button>',
            '<button type="button" data-preview-size="desktop" data-preview-label="{preview_desktop}" aria-pressed="true" aria-label="{preview_desktop}" title="{preview_desktop}"><span class="myvibehtml-local-icon myvibehtml-icon-desktop" aria-hidden="true"></span></button><button type="button" data-preview-size="tablet" data-preview-label="{preview_tablet}" aria-pressed="false" aria-label="{preview_tablet}" title="{preview_tablet}"><span class="myvibehtml-local-icon myvibehtml-icon-tablet" aria-hidden="true"></span></button><button type="button" data-preview-size="mobile" data-preview-label="{preview_mobile}" aria-pressed="false" aria-label="{preview_mobile}" title="{preview_mobile}"><span class="myvibehtml-local-icon myvibehtml-icon-mobile" aria-hidden="true"></span></button><button type="button" data-block-library data-block-label="{blocks}" aria-label="{block_library}" title="{block_library}"><span class="myvibehtml-local-icon myvibehtml-icon-blocks" aria-hidden="true"></span></button>',
            $this->templates['h']
        );
        $this->templates['h'] = str_replace(
            '</span></a></div>',
            '</span></a><button id="myvibehtml-mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="myvibehtml-mobile-menu" title="{mobile_menu}" aria-label="{mobile_menu}"><span class="myvibehtml-local-icon myvibehtml-icon-menu" aria-hidden="true"></span></button><div id="myvibehtml-mobile-menu" role="menu" aria-hidden="true"><button type="button" role="menuitem" data-mobile-target="div>div+ol li:first-child">html</button><button type="button" role="menuitem" data-mobile-target="div>div+ol li+li">text</button><button type="button" role="menuitem" data-mobile-target="div>ol+ul>li:first-child>a">{files}</button><button type="button" role="menuitem" data-mobile-target="div>ol+ul>li+li>a">{settings}</button><button type="button" role="menuitem" data-mobile-target="div>div+ul li:first-child input">{save}</button><button type="button" role="menuitem" data-mobile-target="div>div+ul li:last-child input">{logout}</button></div></div>',
            $this->templates['h']
        );
        $this->templates['h'] = str_replace(
            'data-cm="{version}"',
            'data-cm="{version}" data-context-menu="{context_menu}" data-select-element="{select_element}" data-select-section="{select_section}" data-select-block="{select_block}" data-context-media="{context_media}" data-context-copy="{context_copy}" data-context-up="{context_up}" data-context-down="{context_down}" data-context-delete="{context_delete}" data-context-add-child="{context_add_child}" data-context-add-after="{context_add_after}" data-struct-tag-prompt="{struct_tag_prompt}" data-struct-text-prompt="{struct_text_prompt}" data-struct-invalid-tag="{struct_invalid_tag}"',
            $this->templates['h']
        );
        $this->templates['a'] = str_replace(
            '<body><fieldset><legend>{auth}</legend>',
            '<body><div class="myvibehtml-auth-brand"><div class="myvibehtml-auth-mark" aria-hidden="true"><span class="myvibehtml-local-icon myvibehtml-icon-code"></span></div><div><strong>MyVibeHTML <em>v{version}</em></strong><span>{auth_intro}</span></div></div><fieldset class="myvibehtml-auth-card"><legend id="myvibehtml-auth-title">{auth}</legend>',
            $this->templates['a']
        );
        $this->templates['a'] = str_replace(
            '<p><samp data-az=',
            '<p class="myvibehtml-auth-status"><samp id="myvibehtml-auth-status" aria-live="polite" data-az=',
            $this->templates['a']
        );
        $this->templates['a'] = str_replace(
            '<p><span>{password}:</span><input type="password" data-bb=',
            '<p class="myvibehtml-password-row"><label for="myvibehtml-password">{password}</label><input id="myvibehtml-password" type="password" aria-label="{password}" autocomplete="current-password" maxlength="128" aria-describedby="myvibehtml-auth-status" data-bb=',
            $this->templates['a']
        );
        $this->templates['a'] = str_replace('<a data-bx="{show_password}" data-by="{hide_password}"></a>', '<a role="button" tabindex="0" aria-label="{show_password}" data-bx="{show_password}" data-by="{hide_password}"></a>', $this->templates['a']);
        $this->templates['a'] = str_replace(
            '<p><input type="button" value="{login}" disabled></p>',
            '<p class="myvibehtml-login-row"><input type="button" value="{login}" aria-label="{login}" disabled></p><p class="myvibehtml-auth-hint">{auth_hint}</p>',
            $this->templates['a']
        );
        foreach (['a', 'c', 'd', 'e'] as $templateName) $this->templates[$templateName] = str_replace('</head>', '<link rel="stylesheet" href="{system_url}myvibehtml-theme.css?v={version}"><link rel="stylesheet" href="{system_url}myvibehtml-fallback.css?v={version}"></head>', $this->templates[$templateName]);
        $this->templates['h'] = str_replace('type="password" maxlength="14"', 'type="password" maxlength="128"', $this->templates['h']);
        $this->templates['a'] = str_replace('data-bb="{pass_complexity}" maxlength="14"', 'data-bb="{pass_complexity}" maxlength="128"', $this->templates['a']);
        $this->templates['h'] = str_replace('<script src="{system_url}myvibehtml.js?v={version}"></script>', '<script src="{system_url}myvibehtml-source-map.js?v={version}"></script><script src="{system_url}myvibehtml-ui-contracts.js?v={version}"></script><script src="{system_url}myvibehtml-transport.js?v={version}"></script><script src="{system_url}myvibehtml.js?v={version}"></script><script src="{system_url}myvibehtml-shell-controls.js?v={version}"></script>', $this->templates['h']);
        $this->templates['a'] = str_replace('<script src="{system_url}myvibehtml.js?v={version}"></script>', '<script src="{system_url}myvibehtml-ui-contracts.js?v={version}"></script><script src="{system_url}myvibehtml-transport.js?v={version}"></script><script src="{system_url}myvibehtml.js?v={version}"></script>', $this->templates['a']);
        $this->templates['h'] = str_replace('<p><i title="{clone_block}"></i><i title="{move_up_block}"></i><i title="{move_down_block}"></i><i title="{delete_block}"></i><i title="{attributes}"></i></p>', '<p><i role="button" tabindex="0" aria-label="{clone_block}" title="{clone_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-copy" aria-hidden="true"></span></i><i role="button" tabindex="0" aria-label="{move_up_block}" title="{move_up_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-up" aria-hidden="true"></span></i><i role="button" tabindex="0" aria-label="{move_down_block}" title="{move_down_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-down" aria-hidden="true"></span></i><i role="button" tabindex="0" aria-label="{delete_block}" title="{delete_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-close" aria-hidden="true"></span></i><i role="button" tabindex="0" aria-label="{attributes}" title="{attributes}"></i></p>', $this->templates['h']);
        $this->templates['h'] = str_replace(
            '<ul><li><input type="button" value="{save}" title="{save}" disabled>',
            '<div class="myvibehtml-source-history" data-source-history role="toolbar" aria-label="{source_history}" data-clean="{no_unsaved_changes}" data-dirty="{unsaved_changes}" data-draft="{draft_available}"><button type="button" data-source-action="undo" aria-label="{undo}" title="{undo}" disabled>{undo}</button><button type="button" data-source-action="redo" aria-label="{redo}" title="{redo}" disabled>{redo}</button><button type="button" data-source-action="restore" aria-label="{restore_draft}" title="{restore_draft}" disabled>{restore_draft}</button><span data-source-draft-status aria-live="polite">{no_unsaved_changes}</span></div><ul><li><button type="button" data-page-validate data-command-palette="{command_palette}" data-command-search="{search_commands}" data-command-hint="{command_hint}" data-command-empty="{no_commands_found}" data-validation-title="{validate_page}" data-validation-dialog="{validation_dialog}" data-validation-close="{close}" data-validation-save="{save_anyway}" data-validation-issues="{validation_issues}" data-validation-clean="{validation_clean}" data-validation-no-changes="{no_changes}" data-validation-added="{diff_added}" data-validation-removed="{diff_removed}" aria-label="{validate_page}" title="{validate_page}">{validate_page}</button><input type="button" value="{save}" title="{save}" disabled>',
            $this->templates['h']
        );
        $this->templates['o'] = str_replace('<i title=', '<i role="button" tabindex="0" aria-label="', $this->templates['o']);
        $this->templates['n'] = str_replace('<i title=', '<i role="button" tabindex="0" aria-label="', $this->templates['n']);
        $this->templates['b'] = str_replace('<i title=', '<i role="button" tabindex="0" aria-label="', $this->templates['b']);
        $this->templates['j'] = str_replace('<li title=', '<li role="tab" tabindex="0" aria-selected="false" title=', $this->templates['j']);
        $this->templates['i'] = str_replace('<li title=', '<li role="tab" tabindex="0" aria-selected="false" title=', $this->templates['i']);
        $this->state['a'] = $construct1;
        $this->state['b'] = $this->getSetting(REQUEST_DOCUMENT_ROOT);
        //if (__LINE__ != 1) exit;
        if (!$this->state['b']) $this->state['b'] = $construct2;
        $this->state['c'] = str_ireplace($this->state['b'], '', $this->state['a']);
        $this->state['d'] = $this->getParentDirectory($construct1);
        $this->state['e'] = $this->getParentDirectory($this->state['c']);
    }

    private function getConfigPath($getconfigpath1, $getconfigpath2)
    {
        $getconfigpath3 = $getconfigpath1 . self::CONFIG_FILE;
        $getconfigpath4 = myvibehtml_runtime_directory($getconfigpath2);
        if (!$getconfigpath4) return $getconfigpath3;
        $getconfigpath5 = $getconfigpath4 . self::CONFIG_FILE;
        if (!file_exists($getconfigpath5) && !is_link($getconfigpath3) && file_exists($getconfigpath3) && @copy($getconfigpath3, $getconfigpath5)) {
            @chmod($getconfigpath5, 0600);
            @unlink($getconfigpath3);
        }
        if (file_exists($getconfigpath5)) {
            @chmod($getconfigpath5, 0600);
            return $getconfigpath5;
        }
        return $getconfigpath3;
    }

    public function __destruct()
    {
        $this->commit();
        if ($this->lockHandle) {
            flock($this->lockHandle, LOCK_UN);
            fclose($this->lockHandle);
        }
    }

    public function getLanguage()
    {
        return $this->state['b'];
    }

    public function getEditorDirectory()
    {
        return $this->state['a'];
    }

    public function getSiteUrlBase($getsiteurlbase1 = false)
    {
        return $this->state['c'];
    }

    public function getSiteRoot()
    {
        return $this->state['d'];
    }

    public function getSiteUrl()
    {
        return $this->state['e'];
    }

    public function getRuntimeDirectory()
    {
        return $this->state['f'];
    }

    public function getBackupRoot()
    {
        return $this->state['f'] ? $this->state['f'] . 'backup/' : false;
    }

    public function getBackupUrl()
    {
        return BACKUP_URL_PREFIX;
    }

    public function getParentDirectory($getparentdirectory1)
    {
        if (substr_count($getparentdirectory1, '/') > 2) return dirname($getparentdirectory1) . '/'; else return '/';
    }

    public function getBackupRelativePath($getbackuprelativepath1)
    {
        if (!is_string($getbackuprelativepath1) || strpos($getbackuprelativepath1, BACKUP_URL_PREFIX) !== 0) return false;
        $getbackuprelativepath2 = substr($getbackuprelativepath1, strlen(BACKUP_URL_PREFIX));
        if ($getbackuprelativepath2 === '') return '';
        $getbackuprelativepath3 = [];
        foreach (explode('/', $getbackuprelativepath2) as $getbackuprelativepath4) {
            $getbackuprelativepath4 = rawurldecode($getbackuprelativepath4);
            if ($getbackuprelativepath4 === '' || $getbackuprelativepath4 === '.' || $getbackuprelativepath4 === '..' || strpos($getbackuprelativepath4, "\0") !== false || strpos($getbackuprelativepath4, '/') !== false || strpos($getbackuprelativepath4, '\\') !== false) return false;
            $getbackuprelativepath3[] = $getbackuprelativepath4;
        }
        return implode('/', $getbackuprelativepath3);
    }

    public function getBackupUrlForPath($getbackupurlforpath1)
    {
        if (!is_string($getbackupurlforpath1) || $getbackupurlforpath1 === '') return BACKUP_URL_PREFIX;
        return BACKUP_URL_PREFIX . implode('/', array_map('rawurlencode', explode('/', trim($getbackupurlforpath1, '/'))));
    }

    public function getSetting($getsetting1, $getsetting2 = false)
    {
        if ($getsetting2) {
            if (isset($this->settings[$getsetting2][$getsetting1])) return $this->settings[$getsetting2][$getsetting1];
        } else if (isset($this->settings[$getsetting1])) return $this->settings[$getsetting1];
    }

    public function setSetting($setsetting1, $setsetting2, $setsetting3 = false)
    {
        if ($setsetting3) {
            if (isset($this->settings[$setsetting3])) {
                $this->dirty = true;
                return $this->settings[$setsetting3][$setsetting1] = $setsetting2;
            }
        } else {
            $this->dirty = true;
            return $this->settings[$setsetting1] = $setsetting2;
        }
    }

    private function encodeIniValue($value)
    {
        return '"' . str_replace(['\\', '"', "\r", "\n"], ['\\\\', '\\"', '\\r', '\\n'], (string)$value) . '"';
    }

    public function commit()
    {
        if (!$this->dirty) return true;
        return $this->save();
    }

    private function save()
    {
        $save1 = [];
        foreach ($this->settings as $save2 => $save3) if (!is_array($save3)) $save1[] = $save2 . ' = ' . $this->encodeIniValue($save3) . self::LINE_SEPARATOR . self::LINE_SEPARATOR;
        foreach ($this->settings as $save2 => $save3) {
            if (is_array($save3)) {
                $save1[] = '[' . $save2 . ']' . self::LINE_SEPARATOR . self::LINE_SEPARATOR;
                foreach ($save3 as $save4 => $save5) $save1[] = "\t" . $save4 . ' = ' . $this->encodeIniValue($save5) . self::LINE_SEPARATOR;
                $save1[] = self::LINE_SEPARATOR;
            }
        }
        $saved = $this->writeFileAtomically($this->configPath, implode('', $save1), 0600);
        if ($saved) $this->dirty = false;
        return $saved;
    }

    private function writeFileAtomically($writefileatomically1, $writefileatomically2, $writefileatomically3 = 0600)
    {
        return myvibehtml_atomic_write($writefileatomically1, $writefileatomically2, $writefileatomically3, '.myvibehtml-config.lock');
    }

    public function isWritable()
    {
        return is_writable($this->configPath);
    }

    public function getTemplate($gettemplate1)
    {
        if (isset($this->templates[$gettemplate1])) return $this->templates[$gettemplate1];
    }

    public function replacePlaceholders($replaceplaceholders1, $replaceplaceholders2)
    {
        foreach ($replaceplaceholders2 as $replaceplaceholders3 => $replaceplaceholders4) $replaceplaceholders1 = str_ireplace('{' . $replaceplaceholders3 . '}', $replaceplaceholders4, $replaceplaceholders1);
        return $replaceplaceholders1;
    }

    public function localizeTemplate($localizetemplate1, $localizetemplate2)
    {
        preg_match_all('~\{([a-z0-9_]{2,30})\}~i', $localizetemplate1, $localizetemplate3);
        if ($localizetemplate3[1]) {
            $localizetemplate3[1] = array_unique($localizetemplate3[1]);
            foreach ($localizetemplate3[1] as $localizetemplate4) if ($localizetemplate5 = $this->translate($localizetemplate4, $localizetemplate2)) $localizetemplate1 = str_ireplace('{' . $localizetemplate4 . '}', $localizetemplate5, $localizetemplate1);
        }
        return $localizetemplate1;
    }

    public function translate($translate1, $translate2)
    {
        if (isset($this->translations[$translate2][$translate1])) return $this->translations[$translate2][$translate1];
    }
}

final class MyVibeHTMLController
{
    const VERSION = '0.54';
    private $config;
    private $request;
    private $response;
    private $language;
    private $rewriteMode;

    public function __construct($construct1, $construct2, $construct3)
    {
        $this->request = $construct1;
        $this->response = $construct2;
        $this->config = $construct3;
        $this->language = $this->selectLanguage();
        $this->rewriteMode = $this->detectRewriteMode();
    }

    public function commit()
    {
        return $this->config->commit();
    }

    private function normalizeRelativePath($normalizerelativepath1)
    {
        if (!is_string($normalizerelativepath1)) return false;
        $normalizerelativepath1 = rawurldecode(str_replace('\\', '/', $normalizerelativepath1));
        if (strpos($normalizerelativepath1, "\0") !== false) return false;
        $normalizerelativepath2 = [];
        foreach (explode('/', $normalizerelativepath1) as $normalizerelativepath3) {
            if ($normalizerelativepath3 == '' || $normalizerelativepath3 == '.') continue;
            if ($normalizerelativepath3 == '..') {
                if (!count($normalizerelativepath2)) return false;
                array_pop($normalizerelativepath2);
            } else if (strpos($normalizerelativepath3, '?') === false && strpos($normalizerelativepath3, '#') === false) $normalizerelativepath2[] = $normalizerelativepath3; else return false;
        }
        return implode('/', $normalizerelativepath2);
    }

    private function getPublicFileUrl($getpublicfileurl1)
    {
        $getpublicfileurl2 = isset($_SERVER['DOCUMENT_ROOT']) ? realpath($_SERVER['DOCUMENT_ROOT']) : false;
        $getpublicfileurl3 = realpath($getpublicfileurl1);
        if (!$getpublicfileurl2 || !$getpublicfileurl3) {
            $getpublicfileurl2 = realpath($this->config->getSiteRoot());
            $getpublicfileurl3 = realpath($getpublicfileurl1);
        }
        if (!$getpublicfileurl2 || !$getpublicfileurl3) return $this->config->getSiteUrl();
        $getpublicfileurl2 = str_replace('\\', '/', $getpublicfileurl2);
        $getpublicfileurl3 = str_replace('\\', '/', $getpublicfileurl3);
        $getpublicfileurl4 = rtrim($getpublicfileurl2, '/') . '/';
        if (strpos($getpublicfileurl3, $getpublicfileurl4) !== 0) {
            $getpublicfileurl2 = str_replace('\\', '/', realpath($this->config->getSiteRoot()));
            $getpublicfileurl4 = rtrim($getpublicfileurl2, '/') . '/';
            if (strpos($getpublicfileurl3, $getpublicfileurl4) !== 0) return $this->config->getSiteUrl();
        }
        $getpublicfileurl5 = $this->normalizeRelativePath(substr($getpublicfileurl3, strlen($getpublicfileurl4)));
        if ($getpublicfileurl5 === false || $getpublicfileurl5 === '') return $this->config->getSiteUrl();
        $getpublicfileurl6 = array_map('rawurlencode', explode('/', $getpublicfileurl5));
        return rtrim($this->config->getSiteUrl(), '/') . '/' . implode('/', $getpublicfileurl6);
    }

    private function getSiteRelativePath($getsiterelativepath1, $allowEditorBase = false)
    {
        if (!is_string($getsiterelativepath1)) return false;
        $getsiterelativepath1 = str_replace('\\', '/', $getsiterelativepath1);
        if (preg_match('~^(?:[a-z][a-z0-9+.-]*:)?//~i', $getsiterelativepath1)) {
            $getsiterelativepath2 = parse_url($getsiterelativepath1);
            $getsiterelativepath3 = $this->request->getServer(REQUEST_SERVER_NAME);
            if (!is_array($getsiterelativepath2) || !isset($getsiterelativepath2['host']) || !$getsiterelativepath3 || strcasecmp($getsiterelativepath2['host'], $getsiterelativepath3) !== 0 || isset($getsiterelativepath2['fragment'])) return false;
            $getsiterelativepath1 = isset($getsiterelativepath2['path']) ? $getsiterelativepath2['path'] : '/';
            if (isset($getsiterelativepath2['query'])) {
                parse_str($getsiterelativepath2['query'], $editorQuery);
                if (count($editorQuery) !== 1 || !isset($editorQuery['q']) || !is_string($editorQuery['q'])) return false;
                $getsiterelativepath1 = rtrim($getsiterelativepath1, '/') . '/' . ltrim(rawurldecode($editorQuery['q']), '/');
            }
        }
        $getsiterelativepath2 = str_replace('\\', '/', $this->config->getSiteUrl());
        $getsiterelativepath3 = str_replace('\\', '/', $this->config->getSiteUrlBase());
        if ($allowEditorBase && $getsiterelativepath3 !== '' && strpos($getsiterelativepath1, $getsiterelativepath3) === 0) return $this->normalizeRelativePath(substr($getsiterelativepath1, strlen($getsiterelativepath3)));
        if ($getsiterelativepath2 === '' || strpos($getsiterelativepath1, $getsiterelativepath2) !== 0) return false;
        return $this->normalizeRelativePath(substr($getsiterelativepath1, strlen($getsiterelativepath2)));
    }

    private function getSafeSitePath($getsafesitepath1, $getsafesitepath2 = false)
    {
        $getsafesitepath1 = $this->normalizeRelativePath($getsafesitepath1);
        if ($getsafesitepath1 === false) return false;
        $getsafesitepath3 = rtrim(str_replace('\\', '/', $this->config->getSiteRoot()), '/');
        if ($getsafesitepath3 === '') $getsafesitepath3 = '/';
        $getsafesitepath4 = $getsafesitepath1 === '' ? $getsafesitepath3 : ($getsafesitepath3 === '/' ? '/' . $getsafesitepath1 : $getsafesitepath3 . '/' . $getsafesitepath1);
        return $this->isSafeSitePath($getsafesitepath4, $getsafesitepath2);
    }

    private function isSafeSitePath($issafesitepath1, $issafesitepath2 = false)
    {
        $issafesitepath3 = realpath($this->config->getSiteRoot());
        if ($issafesitepath3 === false) return false;
        $issafesitepath3 = rtrim(str_replace('\\', '/', $issafesitepath3), '/');
        if ($issafesitepath3 === '') $issafesitepath3 = '/';
        $issafesitepath4 = realpath($issafesitepath1);
        if ($issafesitepath4 === false) {
            if (!$issafesitepath2) return false;
            $issafesitepath4 = realpath(dirname($issafesitepath1));
        }
        if ($issafesitepath4 === false) return false;
        $issafesitepath4 = rtrim(str_replace('\\', '/', $issafesitepath4), '/');
        if ($issafesitepath4 === '') $issafesitepath4 = '/';
        if ($issafesitepath4 !== $issafesitepath3 && strpos($issafesitepath4 . '/', $issafesitepath3 . '/') !== 0) return false;
        return $issafesitepath1;
    }

    private function isSafeRuntimePath($issaferuntimepath1, $issaferuntimepath2 = false)
    {
        $issaferuntimepath3 = $this->config->getRuntimeDirectory();
        if (!$issaferuntimepath3 || is_link($issaferuntimepath1)) return false;
        $issaferuntimepath3 = rtrim(str_replace('\\', '/', realpath($issaferuntimepath3)), '/');
        $issaferuntimepath4 = realpath($issaferuntimepath1);
        if ($issaferuntimepath4 === false) {
            if (!$issaferuntimepath2) return false;
            $issaferuntimepath4 = realpath(dirname($issaferuntimepath1));
        }
        if ($issaferuntimepath4 === false) return false;
        $issaferuntimepath4 = rtrim(str_replace('\\', '/', $issaferuntimepath4), '/');
        if ($issaferuntimepath4 !== $issaferuntimepath3 && strpos($issaferuntimepath4 . '/', $issaferuntimepath3 . '/') !== 0) return false;
        return $issaferuntimepath1;
    }

    private function normalizeUploadFilename($normalizeuploadfilename1)
    {
        if (!is_string($normalizeuploadfilename1)) return false;
        $normalizeuploadfilename1 = rawurldecode(str_replace('\\', '/', $normalizeuploadfilename1));
        if (strpos($normalizeuploadfilename1, "\0") !== false) return false;
        $normalizeuploadfilename1 = basename($normalizeuploadfilename1);
        if ($normalizeuploadfilename1 == '' || $normalizeuploadfilename1 == '.' || $normalizeuploadfilename1 == '..') return false;
        return $normalizeuploadfilename1;
    }

    private function escapeHtml($escapehtml1)
    {
        return htmlspecialchars((string)$escapehtml1, ENT_QUOTES, 'UTF-8');
    }

    private function verifyPassword($plainPassword, $storedPassword)
    {
        if (!is_string($plainPassword) || $plainPassword === '' || !is_string($storedPassword) || $storedPassword === '') return false;
        $passwordInfo = password_get_info($storedPassword);
        if ($passwordInfo['algo']) return password_verify($plainPassword, $storedPassword);
        $legacyPassword = sha1(substr(sha1($plainPassword), 0, 22) . $plainPassword);
        $legacyIterations = max(0, (int)$this->config->getSetting(SETTING_PASSWORD_COMPLEXITY) - (int)$this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS));
        for ($legacyIteration = 0; $legacyIteration < $legacyIterations; $legacyIteration++) $legacyPassword = sha1($legacyPassword);
        return hash_equals($storedPassword, $legacyPassword);
    }

    private function isValidPostToken()
    {
        $postToken = $this->request->getPost(POST_TOKEN);
        $cookieToken = $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN);
        return is_string($postToken) && $postToken !== '' && is_string($cookieToken) && hash_equals($cookieToken, $postToken);
    }

    public function authenticate()
    {
        $authenticate1 = $this->request->getCookie(COOKIE_PREFIX . SETTING_SESSION);
        $storedSession = $this->config->getSetting(SETTING_SESSION);
        if (is_string($authenticate1) && $authenticate1 !== '' && is_string($storedSession) && $storedSession !== '' && hash_equals($storedSession, $authenticate1)) $this->dispatch(); else {
            $authenticate2 = time();
            $authenticate3 = myvibehtml_unserialize_array(urldecode($this->config->getSetting(SETTING_AUTH_ERROR_LIST)));
            $authenticate4 = $this->config->getSetting(SETTING_AUTH_ERROR_LIMIT);
            $authenticate5 = $this->request->getServer(REQUEST_REMOTE_ADDR);
            if ($authenticate3 && isset($authenticate3[$authenticate5])) $authenticate6 = $authenticate3[$authenticate5]; else$authenticate6 = 0;
            if ($this->request->getPost() && $this->request->getServer(REQUEST_AJAX_HEADER)) {
                $authenticate7 = $this->request->getPost(SETTING_PASSWORD);
                if ($authenticate7 && ($authenticate6 < $authenticate4 || $this->config->getSetting(SETTING_AUTH_ERROR_TIME) + ($this->config->getSetting(SETTING_AUTH_LOCKOUT_DURATION) * 60) < $authenticate2)) {
                    $authenticate8 = $this->config->getSetting(SETTING_PASSWORD);
                    $legacyPassword = password_get_info($authenticate8)['algo'] ? false : true;
                    if ($this->verifyPassword($authenticate7, $authenticate8)) {
                        if ($this->config->isWritable()) {
                            if ($legacyPassword) $this->config->setSetting(SETTING_PASSWORD, password_hash($authenticate7, PASSWORD_DEFAULT));
                            $this->createSession();
                            if (isset($authenticate3[$authenticate5])) {
                                unset($authenticate3[$authenticate5]);
                                $this->config->setSetting(SETTING_AUTH_ERROR_LIST, urlencode(serialize($authenticate3)));
                            }
                            if ($authenticate9 < 5) $this->config->setSetting(SETTING_PASSWORD_COMPLEXITY_JS, 15000); else$this->config->setSetting(SETTING_PASSWORD_COMPLEXITY_JS, $authenticate9 - 1);
                            $this->config->setSetting(SETTING_AUTH_TIME, $authenticate2);
                            $this->config->setSetting(SETTING_CACHE, '');
                        } else {
                            $this->response->addHeader('X-a:1');
                            $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                        }
                    } else {
                        $this->config->setSetting(SETTING_AUTH_ERROR_TIME, $authenticate2);
                        $authenticate3[$authenticate5] = $authenticate6 + 1;
                        $this->config->setSetting(SETTING_AUTH_ERROR_LIST, urlencode(serialize($authenticate3)));
                        $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    }
                } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else {
                if (!$this->config->getSetting(SETTING_AUTH_BOT_FILTER) || $this->request->getServer(REQUEST_ACCEPT_LANGUAGE) && $this->request->getServer(REQUEST_USER_AGENT) && preg_match('~Chrome|Firefox|Opera|Safari|AppleWebKit|Trident|MSIE~i', $this->request->getServer(REQUEST_USER_AGENT))) {
                    if ($authenticate6 < $authenticate4 || $this->config->getSetting(SETTING_AUTH_ERROR_TIME) + ($this->config->getSetting(SETTING_AUTH_LOCKOUT_DURATION) * 60) < $authenticate2) {
                        if ($this->request->getServer(REQUEST_URI) === substr($this->config->getSiteUrlBase(), 0, -1)) throw new Exception($this->config->getSiteUrlBase(), 307);
                        $authenticate13[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
                        $authenticate13[PLACEHOLDER_ERROR_LIMIT] = $authenticate4;
                        $authenticate13[PLACEHOLDER_ERROR_COUNT] = $authenticate6;
                        $authenticate13[SETTING_PASSWORD_COMPLEXITY] = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS);
                        $authenticate13['language'] = $this->language;
                        $authenticate13[PLACEHOLDER_VERSION] = self::VERSION;
                        $authenticate14 = $this->config->getTemplate('a');
                        $authenticate14 = $this->config->replacePlaceholders($authenticate14, $authenticate13);
                        $authenticate14 = $this->config->localizeTemplate($authenticate14, $this->language);
                        $this->response->setBody($authenticate14);
                    } else throw new Exception(false, 403);
                } else throw new Exception(false, 403);
            }
        }
    }

    public function dispatch()
    {
        $dispatch1 = $this->request->getQuery('q');
        $dispatch2 = $this->getSafeSitePath($dispatch1);
        if (!$dispatch1 || !preg_match('~\.[a-z]{2,5}$~i', $dispatch1)) {
            if ($this->request->getServer(REQUEST_SCRIPT_FILENAME) != str_replace('\\', '/', __FILE__)) $this->ensureRewriteBase();
            $dispatch3 = $this->getSafeSitePath($this->config->getSetting(SETTING_DEFAULT_FILE));
            if (!file_exists($dispatch3) && ($dispatch4 = $this->findDefaultFile())) throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $dispatch4, 307); else throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $this->config->getSetting(SETTING_DEFAULT_FILE), 307);
        }
        $sitePrefix = trim($this->config->getSiteUrlBase(), '/');
        if ($sitePrefix !== '' && stripos($dispatch1, $sitePrefix . '/') === 0) throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $this->config->getSetting(SETTING_DEFAULT_FILE), 307);
        if ($this->request->getServer(REQUEST_AJAX_HEADER)) {
            if ($this->request->getPost('reload')) $this->createSession(); else if ($this->request->getPost('logout')) $this->destroySession(); else if (($dispatch5 = $this->request->getPost('save')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $dispatch5 = myvibehtml_base64_decode($dispatch5);
                if ($dispatch2 && $this->isAllowedExtension(strtolower(substr($dispatch2, strripos($dispatch2, '.') + 1)))) {
                    if ($this->createBackup($dispatch1)) {
                        if ($this->writeFileAtomically($dispatch2, $dispatch5)) {
                            $this->config->setSetting(SETTING_CACHE, '');
                        } else {
                            $this->response->addHeader('X-a:1');
                            $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                        }
                    } else {
                        $this->response->addHeader('X-b:1');
                        $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    }
                } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else if ($dispatch7 = $this->request->getPost('open')) {
                $dispatch7 = rawurldecode($dispatch7);
                $this->response->setBody($this->renderFileList($dispatch7));
            } else if (($dispatch30 = $this->request->getPost('new_file')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $newFileDirectory = rawurldecode($dispatch30);
                $newFileName = $this->normalizeManagerName($this->request->getPost('name'));
                $newFileRelative = $this->getSiteRelativePath($newFileDirectory);
                $newFilePath = $newFileName && $newFileRelative !== false ? ($newFileRelative === '' ? $newFileName : $newFileRelative . '/' . $newFileName) : false;
                $newFileSafePath = $newFilePath === false ? false : $this->getSafeSitePath($newFilePath, true);
                if ($newFileSafePath && !file_exists($newFileSafePath) && $this->isAllowedExtension(strtolower(pathinfo($newFileName, PATHINFO_EXTENSION))) && $this->writeFileAtomically($newFileSafePath, '')) {
                    $this->config->setSetting(SETTING_CACHE, '');
                } else $this->response->setStatus(422, 'Unprocessable Entity');
            } else if (($dispatch30 = $this->request->getPost('new_folder')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $newFolderDirectory = rawurldecode($dispatch30);
                $newFolderName = $this->normalizeManagerName($this->request->getPost('name'));
                $newFolderRelative = $this->getSiteRelativePath($newFolderDirectory);
                $newFolderPath = $newFolderName && $newFolderRelative !== false ? ($newFolderRelative === '' ? $newFolderName : $newFolderRelative . '/' . $newFolderName) : false;
                $newFolderSafePath = $newFolderPath === false ? false : $this->getSafeSitePath($newFolderPath, true);
                if ($newFolderSafePath && !file_exists($newFolderSafePath) && @mkdir($newFolderSafePath, 0755)) $this->config->setSetting(SETTING_CACHE, ''); else $this->response->setStatus(422, 'Unprocessable Entity');
            } else if (($dispatch30 = $this->request->getPost('rename')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $renameSourceRelative = $this->getSiteRelativePath(rawurldecode($dispatch30), true);
                $renameName = $this->normalizeManagerName($this->request->getPost('name'));
                $renameSourcePath = $renameSourceRelative === false ? false : $this->getSafeSitePath($renameSourceRelative);
                $renameTargetRelative = $renameSourceRelative !== false && $renameName ? (dirname($renameSourceRelative) === '.' ? $renameName : dirname($renameSourceRelative) . '/' . $renameName) : false;
                $renameTargetPath = $renameTargetRelative === false ? false : $this->getSafeSitePath($renameTargetRelative, true);
                $renameExtension = strtolower(pathinfo($renameName, PATHINFO_EXTENSION));
                if ($renameSourcePath && $renameTargetPath && !file_exists($renameTargetPath) && is_dir(dirname($renameTargetPath)) && (is_dir($renameSourcePath) || $this->isAllowedExtension($renameExtension)) && (!is_file($renameSourcePath) || $this->createBackup($renameSourceRelative)) && @rename($renameSourcePath, $renameTargetPath)) $this->config->setSetting(SETTING_CACHE, ''); else $this->response->setStatus(422, 'Unprocessable Entity');
            } else if (($dispatch31 = $this->request->getPost('search')) !== false && $dispatch31 !== '' && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $this->response->setBody($this->renderFileSearchResults(rawurldecode($dispatch31)));
            } else if (($dispatch32 = $this->request->getPost('content_search')) !== false && $dispatch32 !== '' && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $this->response->setBody($this->renderContentSearchResults(rawurldecode($dispatch32)));
            } else if (($dispatch33 = $this->request->getPost('content_replace_preview')) !== false && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $replacePreview = $this->renderContentReplacementPreview($this->decodeContentReplacementValue($dispatch33), $this->decodeContentReplacementValue($this->request->getPost('replacement')));
                if ($replacePreview === false) $this->response->setStatus(422, 'Unprocessable Entity'); else $this->response->setBody($replacePreview);
            } else if (($dispatch34 = $this->request->getPost('content_replace_apply')) !== false && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $replaceResult = $this->applyContentReplacement($this->decodeContentReplacementValue($dispatch34), $this->decodeContentReplacementValue($this->request->getPost('replacement')), $this->decodeContentReplacementValue($this->request->getPost('snapshot')));
                $this->response->setStatus($replaceResult['status'], $replaceResult['status'] >= 400 ? 'Content replacement failed' : 'OK');
                $this->response->setBody($replaceResult['body']);
            } else if (($dispatch35 = $this->request->getPost('content_replace_rollback')) !== false && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                if ($this->rollbackContentReplacement($this->decodeContentReplacementValue($dispatch35))) {
                    $this->config->setSetting(SETTING_CACHE, '');
                    $this->response->setBody('replace:rollback');
                } else $this->response->setStatus(409, 'Content replacement rollback failed');
            } else if (($dispatch7 = $this->request->getPost('upload')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $dispatch7 = rawurldecode($dispatch7);
                $uploadDirectory = $this->getSiteRelativePath($dispatch7);
                $dispatch8 = $uploadDirectory === false ? false : $this->getSafeSitePath($uploadDirectory);
                $dispatch9 = $this->request->getFile(FILE_CONTENT);
                if (isset($dispatch9[FILE_TMP_NAME]) && is_dir($dispatch8)) {
                    $uploadOutput = '';
                    $uploadTemplate = $this->config->getTemplate('b');
                    $allowedPattern = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_EDITABLE_EXTENSIONS)));
                    foreach ($dispatch9[FILE_TMP_NAME] as $dispatch10 => $dispatch11) {
                        $uploadName = $this->normalizeUploadFilename($dispatch9[FILE_NAME][$dispatch10]);
                        if ($uploadName && $this->isAllowedExtension(strtolower(substr($uploadName, strripos($uploadName, '.') + 1)))) {
                            if (!$dispatch9[FILE_ERROR][$dispatch10]) {
                                $relativeFile = $uploadDirectory === '' ? $uploadName : $uploadDirectory . '/' . $uploadName;
                                $dispatch2 = $this->getSafeSitePath($relativeFile, true);
                                if ($dispatch2 && $this->createBackup($relativeFile, true) && move_uploaded_file($dispatch11, $dispatch2)) {
                                    $fileEntry[FILE_NAME] = $this->escapeHtml($uploadName);
                                    $fileEntry[FILE_DATE] = $this->escapeHtml(filemtime($dispatch2));
                                    $fileEntry[FILE_SIZE] = $this->escapeHtml(filesize($dispatch2));
                                    preg_match('~\.(?:' . $allowedPattern . ')$~i', $uploadName, $extensionMatch);
                                    if (isset($extensionMatch[0])) $fileEntry[FILE_URL] = $this->escapeHtml($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $relativeFile); else$fileEntry[FILE_URL] = $this->escapeHtml($dispatch7 . $uploadName);
                                    $uploadOutput .= $this->config->localizeTemplate($this->config->replacePlaceholders($uploadTemplate, $fileEntry), $this->language);
                                } else$dispatch12 = true;
                            } else$dispatch13 = true;
                        } else$dispatch14 = true;
                        if ($uploadOutput !== '') {
                            $this->config->setSetting(SETTING_CACHE, '');
                            $this->response->addHeader('X-c:' . $this->getDirectorySize($dispatch7));
                            $this->response->setBody($uploadOutput);
                        }
                        if (isset($dispatch14)) $this->response->addHeader('X-d:1'); else if (isset($dispatch12)) $this->response->addHeader('X-b:1'); else if (isset($dispatch13)) $this->response->addHeader('X-e:1');
                    }
                } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else if (($dispatch15 = $this->request->getPost('remove')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $dispatch15 = rawurldecode($dispatch15);
                $removeRelative = $this->getSiteRelativePath($dispatch15, true);
                $dispatch2 = $removeRelative === false ? false : $this->getSafeSitePath($removeRelative);
                if ($dispatch2 && $this->isAllowedExtension(strtolower(substr($dispatch2, strripos($dispatch2, '.') + 1)))) {
                    if ($this->createBackup($removeRelative)) {
                        if (is_file($dispatch2) && unlink($dispatch2)) {
                            $this->config->setSetting(SETTING_CACHE, '');
                            $removeDirectory = dirname($removeRelative);
                            $removeDirectory = $this->config->getSiteUrl() . ($removeDirectory == '.' ? '' : $removeDirectory . '/');
                            $this->response->addHeader('X-c:' . $this->getDirectorySize($removeDirectory));
                        } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    } else {
                        $this->response->addHeader('X-b:1');
                        $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    }
                } else {
                    $this->response->addHeader('X-d:1');
                    $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                }
            } else if (($dispatch15 = $this->request->getPost('replace')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $dispatch15 = rawurldecode($dispatch15);
                $dispatch16 = $this->request->getFile(FILE_CONTENT);
                $replaceName = isset($dispatch16[FILE_NAME]) ? $this->normalizeUploadFilename($dispatch16[FILE_NAME]) : false;
                $replaceRelative = $this->getSiteRelativePath($dispatch15, true);
                $dispatch2 = $replaceRelative === false ? false : $this->getSafeSitePath($replaceRelative);
                if (isset($dispatch16[FILE_TMP_NAME]) && $dispatch16[FILE_ERROR] < 1 && $replaceName && $this->isAllowedExtension(strtolower(substr($replaceName, strripos($replaceName, '.') + 1)))) {
                    if ($dispatch2 && file_exists($dispatch2)) {
                        if ($this->createBackup($replaceRelative)) {
                            $dispatch17 = dirname($dispatch2) . '/';
                            $dispatch18 = $this->normalizeImageFilename($dispatch17, $replaceName);
                            if ($dispatch18 && move_uploaded_file($dispatch16[FILE_TMP_NAME], $dispatch18)) {
                                $this->config->setSetting(SETTING_CACHE, '');
                                $replaceDirectory = dirname($replaceRelative);
                                $replaceDirectory = $this->config->getSiteUrl() . ($replaceDirectory == '.' ? '' : $replaceDirectory . '/');
                                $this->response->setBody($replaceDirectory . basename($dispatch18));
                            } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                        } else {
                            $this->response->addHeader('X-b:1');
                            $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                        }
                    } else {
                        $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    }
                } else {
                    $this->response->addHeader('X-d:1');
                    $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                }
            } else if (($dispatch19 = $this->request->getPost('settings')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                if (isset($dispatch19[SETTING_PASSWORD]) && $dispatch19[SETTING_PASSWORD] !== '') $this->config->setSetting(SETTING_PASSWORD, password_hash($dispatch19[SETTING_PASSWORD], PASSWORD_DEFAULT));
                if ($dispatch19[SETTING_LANGUAGE] && $dispatch19[SETTING_LANGUAGE] != $this->language) {
                    if (stripos($dispatch23 = $this->config->getSetting(SETTING_LANGUAGE), ',') && stripos($dispatch23, $dispatch19[SETTING_LANGUAGE]) !== false) {
                        if ($dispatch19[SETTING_LANGUAGE] != $this->request->getServer(REQUEST_ACCEPT_LANGUAGE)) $this->response->setCookie(COOKIE_PREFIX . SETTING_LANGUAGE, $dispatch19[SETTING_LANGUAGE], time() + 60 * 60 * 24 * 365, $this->config->getSiteUrlBase(), false, false, true); else$this->response->clearCookie(COOKIE_PREFIX . SETTING_LANGUAGE, $this->config->getSiteUrlBase());
                    } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                }
                if ($this->config->getSetting(SETTING_DEFAULT_FILE) !== null && preg_match('~^.{1,30}$~i', $dispatch19[SETTING_DEFAULT_FILE], $dispatch24) && isset($dispatch24[0])) $this->config->setSetting(SETTING_DEFAULT_FILE, $dispatch19[SETTING_DEFAULT_FILE]); else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                unset($dispatch19[SETTING_PASSWORD], $dispatch19[SETTING_LANGUAGE], $dispatch19[SETTING_DEFAULT_FILE]);
                foreach ($dispatch19 as $dispatch10 => $dispatch25) {
                    if ($this->config->getSetting($dispatch10) !== null && preg_match('~^[0-9]{1,7}$~i', $dispatch25, $dispatch24) && isset($dispatch24[0])) $this->config->setSetting($dispatch10, $dispatch25); else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                }
            } else if (($dispatch7 = $this->request->getPost('recovery')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $dispatch7 = rawurldecode($dispatch7);
                $backupRelative = $this->config->getBackupRelativePath($dispatch7);
                $dispatch8 = $backupRelative === false || !$this->config->getBackupRoot() ? false : rtrim($this->config->getBackupRoot() . ($backupRelative === '' ? '' : $backupRelative . '/'), '/') . '/';
                if ($dispatch8 && $this->restoreBackupDirectory($dispatch8)) $this->config->setSetting(SETTING_CACHE, '');
                else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else if (($dispatch29 = $this->request->getPost('scripts')) && $this->isValidPostToken()) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                if ($this->config->getSetting(SETTING_SITE_SCRIPTS) !== null) $this->config->setSetting(SETTING_SITE_SCRIPTS, '0'); else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
        } else {
            $this->createSession();
            if (file_exists($dispatch2)) {
                $dispatch30 = strtolower(substr($dispatch2, strripos($dispatch2, '.') + 1));
                if ($this->isAllowedExtension($dispatch30)) {
                    $dispatch31 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_VISUAL_EXTENSIONS)));
                    preg_match('~^' . $dispatch31 . '$~i', $dispatch30, $dispatch24);
                    if (isset($dispatch24[0])) {
                        $dispatch32 = $this->request->getCookie(COOKIE_PREFIX . QUERY_HTML);
                        $dispatch33 = $this->request->getPost('switch');
                        if ($dispatch32) {
                            if ($dispatch33 === '0') {
                                $this->response->clearCookie(COOKIE_PREFIX . QUERY_HTML, $this->config->getSiteUrlBase());
                                $this->renderVisualEditor($dispatch2);
                            } else$this->renderSourceEditor($dispatch2);
                        } else {
                            if ($dispatch33 === '1') {
                                $this->response->setCookie(COOKIE_PREFIX . QUERY_HTML, 1, time() + 60 * 60 * 24 * 90, $this->config->getSiteUrlBase(), false, false, true);
                                $this->renderSourceEditor($dispatch2);
                            } else$this->renderVisualEditor($dispatch2);
                        }
                    } else$this->renderSourceEditor($dispatch2);
                } else$this->renderErrorPage(HTTP_STATUS_FORBIDDEN);
            } else$this->renderErrorPage(HTTP_STATUS_NOT_FOUND);
        }
    }

    public function renderVisualEditor($rendervisualeditor1)
    {
        $rendervisualeditor2[PLACEHOLDER_TITLE] = $this->config->translate('visual_editor', $this->language);
        $rendervisualeditor2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $rendervisualeditor2[PLACEHOLDER_VERSION] = self::VERSION;
        $rendervisualeditor2['language'] = $this->language;
        $rendervisualeditor2[PLACEHOLDER_BASE] = $this->escapeHtml($this->config->getSiteUrl());
        $rendervisualeditor3 = $this->request->getQuery('q');
        if ($rendervisualeditor4 = strripos($rendervisualeditor3, '/')) $rendervisualeditor2[PLACEHOLDER_BASE] .= substr($rendervisualeditor3, 0, $rendervisualeditor4 + 1);
        $rendervisualeditor2['panel'] = $this->renderPanel($rendervisualeditor1);
        $rendervisualeditor2[POST_SOURCE] = $this->switchMode();
        if (!$rendervisualeditor2[POST_SOURCE]) {
            $rendervisualeditor2[POST_SOURCE] = $this->readHtmlFile($rendervisualeditor1);
            $rendervisualeditor2[PLACEHOLDER_IS_EDITED] = '';
        } else$rendervisualeditor2[PLACEHOLDER_IS_EDITED] = '1';
        $rendervisualeditor2[POST_SOURCE] = base64_encode($rendervisualeditor2[POST_SOURCE]);
        $rendervisualeditor5 = $this->config->getTemplate('c');
        $rendervisualeditor5 = $this->config->replacePlaceholders($rendervisualeditor5, $rendervisualeditor2);
        $rendervisualeditor5 = $this->config->localizeTemplate($rendervisualeditor5, $this->language);
        $rendervisualeditor5 = str_replace('!~!', '{', $rendervisualeditor5);
        $this->response->setBody($rendervisualeditor5);
    }

    public function renderSourceEditor($rendersourceeditor1)
    {
        $rendersourceeditor2[PLACEHOLDER_TITLE] = $this->config->translate('source_editor', $this->language);
        $rendersourceeditor2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $rendersourceeditor2[PLACEHOLDER_VERSION] = self::VERSION;
        $rendersourceeditor2['language'] = $this->language;
        $rendersourceeditor2[PLACEHOLDER_REDRAW_DELAY] = $this->config->getSetting(SETTING_CODE_REDRAW_DELAY);
        $rendersourceeditor2[SETTING_CODE_HIGHLIGHTING] = $this->config->getSetting(SETTING_CODE_HIGHLIGHTING);
        $rendersourceeditor2[SETTING_CODE_UNDO_LIMIT] = $this->config->getSetting(SETTING_CODE_UNDO_LIMIT);
        $rendersourceeditor2['panel'] = $this->renderPanel($rendersourceeditor1);
        $rendersourceeditor2[POST_SOURCE] = $this->switchMode();
        if (!$rendersourceeditor2[POST_SOURCE]) {
            $rendersourceeditor2[POST_SOURCE] = $this->readHtmlFile($rendersourceeditor1);
            $rendersourceeditor2[PLACEHOLDER_IS_EDITED] = '';
        } else$rendersourceeditor2[PLACEHOLDER_IS_EDITED] = '1';
        $rendersourceeditor2[POST_SOURCE] = base64_encode($rendersourceeditor2[POST_SOURCE]);
        $rendersourceeditor3 = $this->config->getTemplate('d');
        $rendersourceeditor3 = $this->config->replacePlaceholders($rendersourceeditor3, $rendersourceeditor2);
        $rendersourceeditor3 = str_replace('!~!', '{', $rendersourceeditor3);
        $this->response->setBody($rendersourceeditor3);
    }

    public function renderErrorPage($rendererrorpage1)
    {
        $rendererrorpage2[PLACEHOLDER_CODE] = $rendererrorpage1;
        $rendererrorpage2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $rendererrorpage2[PLACEHOLDER_VERSION] = self::VERSION;
        $rendererrorpage2['language'] = $this->language;
        $rendererrorpage2['panel'] = $this->renderPanel($rendererrorpage1);
        $rendererrorpage3 = $this->config->getTemplate('e');
        $rendererrorpage3 = $this->config->replacePlaceholders($rendererrorpage3, $rendererrorpage2);
        return $this->config->localizeTemplate($rendererrorpage3, $this->language);
    }

    public function handleException($handleexception1)
    {
        $this->response->setStatus($handleexception1->getCode(), $this->config->translate($handleexception1->getCode(), 'en'));
        if ($handleexception2 = $handleexception1->getMessage()) $this->response->redirect($handleexception2);
        $handleexception3[PLACEHOLDER_CODE] = $handleexception1->getCode();
        $handleexception3[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $handleexception3[PLACEHOLDER_VERSION] = self::VERSION;
        $handleexception3['language'] = $this->language;
        $handleexception3['panel'] = '';
        $handleexception4 = $this->config->getTemplate('e');
        $handleexception4 = $this->config->replacePlaceholders($handleexception4, $handleexception3);
        return $this->response->setBody($this->config->localizeTemplate($handleexception4, $this->language));
    }

    private function selectLanguage()
    {
        $selectlanguage1 = $this->config->getSetting(SETTING_LANGUAGE);
        if (stripos($selectlanguage1, ',')) {
            $selectlanguage2 = $this->request->getCookie(COOKIE_PREFIX . SETTING_LANGUAGE);
            if ($selectlanguage2 && stripos($selectlanguage1, $selectlanguage2) !== false) return $selectlanguage2; else {
                $selectlanguage3 = substr((string)$this->request->getServer(REQUEST_ACCEPT_LANGUAGE), 0, 2);
                if ($selectlanguage3 !== '' && stripos($selectlanguage1, $selectlanguage3) !== false) return $selectlanguage3;
            }
        }
        return substr($selectlanguage1, 0, 2);
    }

    private function detectRewriteMode()
    {
        $detectrewritemode1 = $this->config->getSetting(SETTING_URL_REWRITE);
        if ($detectrewritemode1 === '1') return 1; else if ($detectrewritemode1 === '0') return 0; else {
            if ((stripos($this->request->getServer(REQUEST_QUERY_STRING), 'q=') === 0) && (stripos($this->request->getServer(REQUEST_URI), $this->request->getServer(REQUEST_QUERY_STRING)) === false)) return 1; else return 0;
        }
    }

    private function getQueryPrefix()
    {
        if (!$this->rewriteMode) return '?q='; else return '';
    }

    private function findDefaultFile()
    {
        $finddefaultfile1 = $this->config->getSiteRoot();
        if ($finddefaultfile2 = opendir($finddefaultfile1)) {
            $finddefaultfile3 = [];
            $finddefaultfile4 = [];
            $finddefaultfile5 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_VISUAL_EXTENSIONS)));
            $finddefaultfile6 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_EDITABLE_EXTENSIONS)));
            while (($finddefaultfile7 = readdir($finddefaultfile2)) !== false) {
                if ($finddefaultfile7 != '.' && $finddefaultfile7 != '..') {
                    if (is_file($finddefaultfile1 . $finddefaultfile7) && !is_link($finddefaultfile1 . $finddefaultfile7)) {
                        if (preg_match('~^index\.(?:' . $finddefaultfile5 . ')$~i', $finddefaultfile7)) {
                            closedir($finddefaultfile2);
                            return $finddefaultfile7;
                        } else if (preg_match('~\.(?:' . $finddefaultfile5 . ')$~i', $finddefaultfile7)) $finddefaultfile3[] = $finddefaultfile7; else if (preg_match('~\.(?:' . $finddefaultfile6 . ')$~i', $finddefaultfile7)) $finddefaultfile4[] = $finddefaultfile7;
                    }
                }
            }
            closedir($finddefaultfile2);
            if (isset($finddefaultfile3[0])) return $finddefaultfile3[0]; else if (isset($finddefaultfile4[0])) return $finddefaultfile4[0];
        }
    }

    private function ensureRewriteBase()
    {
        $ensurerewritebase1 = $this->config->getEditorDirectory() . '.htaccess';
        if (file_exists($ensurerewritebase1)) {
            $ensurerewritebase2 = file_get_contents($ensurerewritebase1);
            preg_match('~RewriteBase (.+?)\n~i', $ensurerewritebase2, $ensurerewritebase3);
            if (isset($ensurerewritebase3[0]) && isset($ensurerewritebase3[1])) {
                if ($ensurerewritebase3[1] != $this->config->getSiteUrlBase()) {
                    $ensurerewritebase2 = str_replace($ensurerewritebase3[0], 'RewriteBase ' . $this->config->getSiteUrlBase() . "\n", $ensurerewritebase2);
                    $this->writeHtaccess($ensurerewritebase2);
                }
            } else {
                $ensurerewritebase2 = preg_replace('~(RewriteEngine .+?\n)~i', '$1' . "\n" . 'RewriteBase ' . $this->config->getSiteUrlBase() . "\n", $ensurerewritebase2);
                $this->writeHtaccess($ensurerewritebase2);
            }
        }
    }

    private function writeHtaccess($writehtaccess1)
    {
        $this->writeFileAtomically($this->config->getEditorDirectory() . '.htaccess', $writehtaccess1, 0644);
    }

    private function writeFileAtomically($writefileatomically1, $writefileatomically2, $writefileatomically3 = 0644)
    {
        return myvibehtml_atomic_write($writefileatomically1, $writefileatomically2, $writefileatomically3, '.' . basename($writefileatomically1) . '.myvibehtml.lock');
    }

    private function restoreBackupDirectory($backupDirectory)
    {
        if (!$this->isSafeRuntimePath($backupDirectory) || !is_dir($backupDirectory) || !($directoryHandle = @opendir($backupDirectory))) return false;
        $entries = [];
        $targets = [];
        while (($backupName = readdir($directoryHandle)) !== false) {
            if ($backupName === '.' || $backupName === '..') continue;
            $backupSource = $backupDirectory . $backupName;
            if (!is_file($backupSource) || is_link($backupSource)) {
                closedir($directoryHandle);
                return false;
            }
            $isDeletion = substr($backupName, 0, 3) === 'ꜜ';
            $encodedName = $isDeletion ? substr($backupName, 3) : $backupName;
            $restoreRelative = $this->normalizeRelativePath(str_replace('⁄', '/', $encodedName));
            $restoreTarget = $restoreRelative === false ? false : $this->getSafeSitePath($restoreRelative, true);
            if (!$restoreTarget || isset($targets[$restoreRelative]) || is_link($restoreTarget) || (file_exists($restoreTarget) && !is_file($restoreTarget))) {
                closedir($directoryHandle);
                return false;
            }
            $targets[$restoreRelative] = true;
            $entry = ['source' => $backupSource, 'target' => $restoreTarget, 'stage' => false, 'rollback' => false, 'delete' => $isDeletion];
            if (!$isDeletion) {
                $entry['stage'] = tempnam(dirname($restoreTarget), '.myvibehtml-restore-');
                if (!$entry['stage'] || !$this->copyFileAtomically($backupSource, $entry['stage'])) {
                    if ($entry['stage']) @unlink($entry['stage']);
                    closedir($directoryHandle);
                    foreach ($entries as $stagedEntry) if ($stagedEntry['stage']) @unlink($stagedEntry['stage']);
                    return false;
                }
            }
            if (file_exists($restoreTarget)) {
                $entry['rollback'] = tempnam(dirname($restoreTarget), '.myvibehtml-rollback-');
                if (!$entry['rollback'] || !$this->copyFileAtomically($restoreTarget, $entry['rollback'])) {
                    if ($entry['stage']) @unlink($entry['stage']);
                    if ($entry['rollback']) @unlink($entry['rollback']);
                    closedir($directoryHandle);
                    foreach ($entries as $stagedEntry) {
                        if ($stagedEntry['stage']) @unlink($stagedEntry['stage']);
                        if ($stagedEntry['rollback']) @unlink($stagedEntry['rollback']);
                    }
                    return false;
                }
            }
            $entries[] = $entry;
        }
        closedir($directoryHandle);
        if (!count($entries)) return false;
        $appliedEntries = [];
        foreach ($entries as $entry) {
            if ($entry['delete']) {
                $appliedEntries[] = $entry;
                if (file_exists($entry['target']) && !@unlink($entry['target'])) $restoreFailed = true;
            } else if (@rename($entry['stage'], $entry['target'])) {
                $appliedEntries[] = $entry;
            } else $restoreFailed = true;
            if (isset($restoreFailed)) break;
        }
        if (isset($restoreFailed)) {
            foreach (array_reverse($appliedEntries) as $appliedEntry) {
                if ($appliedEntry['rollback']) {
                    @unlink($appliedEntry['target']);
                    @rename($appliedEntry['rollback'], $appliedEntry['target']);
                } else if (file_exists($appliedEntry['target'])) @unlink($appliedEntry['target']);
            }
            foreach ($entries as $entry) {
                if ($entry['stage']) @unlink($entry['stage']);
                if ($entry['rollback']) @unlink($entry['rollback']);
            }
            return false;
        }
        foreach ($entries as $entry) {
            if ($entry['rollback']) @unlink($entry['rollback']);
            @unlink($entry['source']);
        }
        @rmdir($backupDirectory);
        return true;
    }

    private function copyFileAtomically($copyfileatomically1, $copyfileatomically2)
    {
        if (is_link($copyfileatomically1) || !is_file($copyfileatomically1)) return false;
        $copyfileatomically3 = @fopen($copyfileatomically1, 'rb');
        if (!$copyfileatomically3) return false;
        $copyfileatomically4 = dirname($copyfileatomically2);
        if (!is_dir($copyfileatomically4) || !is_writable($copyfileatomically4)) {
            fclose($copyfileatomically3);
            return false;
        }
        $copyfileatomically5 = tempnam($copyfileatomically4, '.myvibehtml-backup-');
        $copyfileatomically6 = $copyfileatomically5 ? @fopen($copyfileatomically5, 'wb') : false;
        $copyfileatomically7 = false;
        if ($copyfileatomically6) {
            $copyfileatomically8 = true;
            while (!feof($copyfileatomically3) && ($copyfileatomically8 = fread($copyfileatomically3, 8192)) !== false) {
                if ($copyfileatomically8 !== '' && fwrite($copyfileatomically6, $copyfileatomically8) !== strlen($copyfileatomically8)) {
                    $copyfileatomically8 = false;
                    break;
                }
            }
            $copyfileatomically7 = $copyfileatomically8 !== false && feof($copyfileatomically3) && fflush($copyfileatomically6);
            fclose($copyfileatomically6);
        }
        fclose($copyfileatomically3);
        if ($copyfileatomically7) $copyfileatomically7 = @rename($copyfileatomically5, $copyfileatomically2);
        if ($copyfileatomically5 && file_exists($copyfileatomically5)) @unlink($copyfileatomically5);
        return $copyfileatomically7;
    }

    private function createSession()
    {
        $createsession1 = bin2hex(random_bytes(32));
        $this->config->setSetting(SETTING_SESSION, $createsession1);
        $this->response->setCookie(COOKIE_PREFIX . SETTING_SESSION, $createsession1, time() + 60 * $this->config->getSetting(SETTING_AUTH_SESSION_RESET), $this->config->getSiteUrlBase(), false, false, true);
    }

    private function destroySession()
    {
        $this->config->setSetting(SETTING_SESSION, '');
        $this->response->clearCookie(COOKIE_PREFIX . SETTING_SESSION, $this->config->getSiteUrlBase());
    }

    private function switchMode()
    {
        $switchmode1 = $this->request->getPost('switch');
        if (is_numeric($switchmode1)) {
            $switchmode2 = $this->request->getPost(POST_SOURCE);
            if ($switchmode2 && $this->isValidPostToken()) {
                $switchmode2 = myvibehtml_base64_decode($switchmode2);
                $this->response->addHeader('X-f:0');
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                return $switchmode2;
            }
        }
    }

    private function readHtmlFile($readhtmlfile1)
    {
        $readhtmlfile2 = file_get_contents($readhtmlfile1);
        preg_match('~<meta[^>]+utf-8~i', $readhtmlfile2, $readhtmlfile3);
        preg_match('~<meta[^>]+windows-1251~i', $readhtmlfile2, $readhtmlfile4);
        if (!isset($readhtmlfile3[0]) && isset($readhtmlfile4[0])) {
            $readhtmlfile2 = preg_replace('~(<meta[^>]+)windows-1251~i', '$1utf-8', $readhtmlfile2);
            $readhtmlfile2 = iconv('Windows-1251', 'UTF-8', $readhtmlfile2);
        }
        return $readhtmlfile2;
    }

    private function isAllowedExtension($isallowedextension1)
    {
        $isallowedextension2 = $this->config->getSetting(SETTING_ALLOWED_EXTENSIONS);
        if (!$isallowedextension2 || preg_match('~(?:^|,\s*)' . $isallowedextension1 . '(?:\s*,|$)~i', $isallowedextension2)) return true;
    }

    private function normalizeManagerName($managerName)
    {
        if (!is_string($managerName)) return false;
        $managerName = rawurldecode($managerName);
        if ($managerName === '' || $managerName === '.' || $managerName === '..' || $managerName[0] === '.' || strpos($managerName, "\0") !== false || preg_match('~[\\\\/]~', $managerName) || basename($managerName) !== $managerName) return false;
        return $managerName;
    }

    private function collectFileSearch($searchDirectory, $relativeDirectory, $searchTerm, &$searchEntries, $searchDepth = 0)
    {
        if ($searchDepth > 32 || count($searchEntries) >= 200 || !($searchHandle = @opendir($searchDirectory))) return;
        while (($searchName = readdir($searchHandle)) !== false && count($searchEntries) < 200) {
            if ($searchName === '.' || $searchName === '..' || $searchName[0] === '.') continue;
            $searchPath = $searchDirectory . $searchName;
            $searchRelative = $relativeDirectory === '' ? $searchName : $relativeDirectory . '/' . $searchName;
            if (is_link($searchPath)) continue;
            if (is_dir($searchPath . '/')) $this->collectFileSearch($searchPath . '/', $searchRelative, $searchTerm, $searchEntries, $searchDepth + 1);
            else if (is_file($searchPath) && stripos($searchRelative, $searchTerm) !== false) $searchEntries[] = [$searchRelative, $searchPath];
        }
        closedir($searchHandle);
    }

    private function renderFileSearchResults($searchTerm)
    {
        $searchTerm = trim((string)$searchTerm);
        if ($searchTerm === '') return '';
        $searchEntries = [];
        $this->collectFileSearch(rtrim($this->config->getSiteRoot(), '/\\') . '/', '', $searchTerm, $searchEntries);
        $searchOutput = '';
        foreach ($searchEntries as $searchEntry) {
            $searchRelative = $searchEntry[0];
            $searchPath = $searchEntry[1];
            $searchExtension = strtolower(pathinfo($searchRelative, PATHINFO_EXTENSION));
            $searchUrl = $this->isAllowedExtension($searchExtension) ? $this->config->getSiteUrlBase() . $this->getQueryPrefix() . implode('/', array_map('rawurlencode', explode('/', $searchRelative))) : $this->getPublicFileUrl($searchPath);
            $searchOutput .= '<li><a data-cy="' . $this->escapeHtml($searchUrl) . '" title="' . $this->escapeHtml($searchRelative) . '">' . $this->escapeHtml($searchRelative) . '</a><span>' . $this->escapeHtml(filesize($searchPath)) . '</span></li>';
        }
        return $searchOutput;
    }

    private function collectContentSearch($searchDirectory, $relativeDirectory, $searchTerm, &$searchEntries, $searchDepth = 0)
    {
        if ($searchDepth > 32 || count($searchEntries) >= 100 || !($searchHandle = @opendir($searchDirectory))) return;
        while (($searchName = readdir($searchHandle)) !== false && count($searchEntries) < 100) {
            if ($searchName === '.' || $searchName === '..' || $searchName[0] === '.') continue;
            $searchPath = $searchDirectory . $searchName;
            $searchRelative = $relativeDirectory === '' ? $searchName : $relativeDirectory . '/' . $searchName;
            if (is_link($searchPath)) continue;
            if (is_dir($searchPath . '/')) {
                $this->collectContentSearch($searchPath . '/', $searchRelative, $searchTerm, $searchEntries, $searchDepth + 1);
            } else if (is_file($searchPath) && $this->isAllowedExtension(strtolower(pathinfo($searchName, PATHINFO_EXTENSION)))) {
                $searchSize = @filesize($searchPath);
                if ($searchSize === false || $searchSize > 2097152) continue;
                $searchContent = @file_get_contents($searchPath);
                if ($searchContent === false || strpos($searchContent, "\0") !== false) continue;
                $searchLines = explode("\n", str_replace("\r\n", "\n", $searchContent));
                foreach ($searchLines as $searchLineNumber => $searchLine) {
                    if (stripos($searchLine, $searchTerm) === false) continue;
                    $searchEntries[] = [$searchRelative, $searchPath, $searchLineNumber + 1, trim($searchLine)];
                    if (count($searchEntries) >= 100) break;
                }
            }
        }
        closedir($searchHandle);
    }

    private function renderContentSearchResults($searchTerm)
    {
        $searchTerm = trim((string)$searchTerm);
        if ($searchTerm === '') return '';
        $searchEntries = [];
        $this->collectContentSearch(rtrim($this->config->getSiteRoot(), '/\\') . '/', '', $searchTerm, $searchEntries);
        $searchOutput = '';
        foreach ($searchEntries as $searchEntry) {
            $searchRelative = $searchEntry[0];
            $searchPath = $searchEntry[1];
            $searchUrl = $this->isAllowedExtension(strtolower(pathinfo($searchRelative, PATHINFO_EXTENSION))) ? $this->config->getSiteUrlBase() . $this->getQueryPrefix() . implode('/', array_map('rawurlencode', explode('/', $searchRelative))) : $this->getPublicFileUrl($searchPath);
            $searchOutput .= '<li><a data-cy="' . $this->escapeHtml($searchUrl) . '" title="' . $this->escapeHtml($searchRelative) . '">' . $this->escapeHtml($searchRelative) . '</a><span>line ' . $this->escapeHtml($searchEntry[2]) . '</span><code>' . $this->escapeHtml($searchEntry[3]) . '</code></li>';
        }
        return $searchOutput;
    }

    private function isValidContentReplacementInput($searchTerm, $replacement)
    {
        return is_string($searchTerm) && is_string($replacement) && trim($searchTerm) !== '' && strpos($searchTerm, "\0") === false && strpos($replacement, "\0") === false && strlen($searchTerm) <= 2000 && strlen($replacement) <= 2000;
    }

    private function decodeContentReplacementValue($replaceValue)
    {
        return is_string($replaceValue) ? rawurldecode($replaceValue) : false;
    }

    private function collectContentReplacementFiles($searchDirectory, $relativeDirectory, $searchTerm, $replacement, &$replaceFiles, &$replaceMatches, &$replaceOverflow, $replaceDepth = 0)
    {
        if ($replaceDepth > 32 || count($replaceFiles) >= 100 || $replaceOverflow || !($replaceHandle = @opendir($searchDirectory))) return;
        while (($replaceName = readdir($replaceHandle)) !== false && count($replaceFiles) < 100 && !$replaceOverflow) {
            if ($replaceName === '.' || $replaceName === '..' || $replaceName[0] === '.') continue;
            $replacePath = $searchDirectory . $replaceName;
            $replaceRelative = $relativeDirectory === '' ? $replaceName : $relativeDirectory . '/' . $replaceName;
            if (is_link($replacePath)) continue;
            if (is_dir($replacePath . '/')) {
                $this->collectContentReplacementFiles($replacePath . '/', $replaceRelative, $searchTerm, $replacement, $replaceFiles, $replaceMatches, $replaceOverflow, $replaceDepth + 1);
            } else if (is_file($replacePath) && $this->isAllowedExtension(strtolower(pathinfo($replaceName, PATHINFO_EXTENSION)))) {
                $replaceSize = @filesize($replacePath);
                if ($replaceSize === false || $replaceSize > 2097152) continue;
                $replaceBefore = @file_get_contents($replacePath);
                if ($replaceBefore === false || strpos($replaceBefore, "\0") !== false) continue;
                $replaceCount = 0;
                $replaceAfter = str_ireplace($searchTerm, $replacement, $replaceBefore, $replaceCount);
                if ($replaceCount < 1 || $replaceAfter === $replaceBefore) continue;
                if ($replaceMatches + $replaceCount > 100) {
                    $replaceOverflow = true;
                    break;
                }
                $replaceFiles[$replaceRelative] = ['path' => $replacePath, 'before' => $replaceBefore, 'after' => $replaceAfter, 'matches' => $replaceCount];
                $replaceMatches += $replaceCount;
            }
        }
        closedir($replaceHandle);
    }

    private function contentReplacementSnapshot($replaceFiles)
    {
        ksort($replaceFiles, SORT_STRING);
        $replaceSnapshot = [];
        foreach ($replaceFiles as $replaceRelative => $replaceFile) $replaceSnapshot[] = $replaceRelative . "\0" . hash('sha256', $replaceFile['before']);
        return hash('sha256', implode("\0", $replaceSnapshot));
    }

    private function shortenContentReplacementLine($replaceLine)
    {
        $replaceLine = trim((string)$replaceLine);
        return strlen($replaceLine) > 400 ? substr($replaceLine, 0, 397) . '...' : $replaceLine;
    }

    private function renderContentReplacementDiff($replaceFiles)
    {
        $replaceDiff = [];
        foreach ($replaceFiles as $replaceRelative => $replaceFile) {
            $replaceDiff[] = 'FILE ' . $replaceRelative . ' (' . $replaceFile['matches'] . ' matches)';
            $replaceBeforeLines = explode("\n", str_replace("\r\n", "\n", $replaceFile['before']));
            $replaceAfterLines = explode("\n", str_replace("\r\n", "\n", $replaceFile['after']));
            $replaceLineCount = max(count($replaceBeforeLines), count($replaceAfterLines));
            for ($replaceLineIndex = 0; $replaceLineIndex < $replaceLineCount; $replaceLineIndex++) {
                $replaceOldLine = isset($replaceBeforeLines[$replaceLineIndex]) ? $replaceBeforeLines[$replaceLineIndex] : false;
                $replaceNewLine = isset($replaceAfterLines[$replaceLineIndex]) ? $replaceAfterLines[$replaceLineIndex] : false;
                if ($replaceOldLine === $replaceNewLine) continue;
                if ($replaceOldLine !== false) $replaceDiff[] = '- ' . $this->shortenContentReplacementLine($replaceOldLine);
                if ($replaceNewLine !== false) $replaceDiff[] = '+ ' . $this->shortenContentReplacementLine($replaceNewLine);
                if (count($replaceDiff) >= 120) {
                    $replaceDiff[] = '...';
                    return implode("\n", $replaceDiff);
                }
            }
        }
        return implode("\n", $replaceDiff);
    }

    private function renderContentReplacementPreview($searchTerm, $replacement)
    {
        $searchTerm = trim((string)$searchTerm);
        $replacement = (string)$replacement;
        if (!$this->isValidContentReplacementInput($searchTerm, $replacement)) return false;
        $replaceFiles = [];
        $replaceMatches = 0;
        $replaceOverflow = false;
        $this->collectContentReplacementFiles(rtrim($this->config->getSiteRoot(), '/\\') . '/', '', $searchTerm, $replacement, $replaceFiles, $replaceMatches, $replaceOverflow);
        if ($replaceOverflow) return false;
        $replaceSnapshot = $this->contentReplacementSnapshot($replaceFiles);
        $replaceDiff = count($replaceFiles) ? $this->renderContentReplacementDiff($replaceFiles) : 'NO_CHANGES';
        return "replace:preview\nsnapshot=" . $replaceSnapshot . "\nfiles=" . count($replaceFiles) . "\nmatches=" . $replaceMatches . "\ndiff\n" . $replaceDiff;
    }

    private function getContentReplacementTransactionDirectory($replaceId, $replaceCreate = false)
    {
        if (!preg_match('~^[a-f0-9]{32}$~i', $replaceId) || !$this->config->getRuntimeDirectory()) return false;
        $replaceDirectory = rtrim($this->config->getRuntimeDirectory(), '/\\') . '/content-replace-' . strtolower($replaceId) . '/';
        if ($replaceCreate && !is_dir($replaceDirectory) && !@mkdir($replaceDirectory, 0700, true)) return false;
        return $this->isSafeRuntimePath($replaceDirectory, $replaceCreate) ? $replaceDirectory : false;
    }

    private function removeContentReplacementTree($replaceDirectory)
    {
        if (!$this->isSafeRuntimePath($replaceDirectory) || !is_dir($replaceDirectory) || is_link($replaceDirectory) || !($replaceHandle = @opendir($replaceDirectory))) return false;
        $replaceSuccess = true;
        while (($replaceName = readdir($replaceHandle)) !== false) {
            if ($replaceName === '.' || $replaceName === '..') continue;
            $replacePath = $replaceDirectory . $replaceName;
            if (is_link($replacePath)) $replaceSuccess = false; else if (is_dir($replacePath)) {
                if (!$this->removeContentReplacementTree($replacePath . '/')) $replaceSuccess = false;
            } else if (!@unlink($replacePath)) $replaceSuccess = false;
        }
        closedir($replaceHandle);
        return $replaceSuccess && @rmdir($replaceDirectory);
    }

    private function getLastContentReplacementId()
    {
        $replaceRuntime = $this->config->getRuntimeDirectory();
        $replacePointer = $replaceRuntime ? rtrim($replaceRuntime, '/\\') . '/content-replace-last' : false;
        if (!$replacePointer || !is_file($replacePointer) || is_link($replacePointer)) return false;
        $replaceId = trim((string)@file_get_contents($replacePointer));
        return preg_match('~^[a-f0-9]{32}$~i', $replaceId) ? strtolower($replaceId) : false;
    }

    private function setLastContentReplacementId($replaceId)
    {
        $replaceRuntime = $this->config->getRuntimeDirectory();
        return $replaceRuntime && myvibehtml_atomic_write(rtrim($replaceRuntime, '/\\') . '/content-replace-last', $replaceId, 0600, '.content-replace-last.lock');
    }

    private function createContentReplacementTransaction($replaceFiles)
    {
        $replaceId = bin2hex(random_bytes(16));
        $replaceDirectory = $this->getContentReplacementTransactionDirectory($replaceId, true);
        $replaceFilesDirectory = $replaceDirectory ? $replaceDirectory . 'files/' : false;
        if (!$replaceFilesDirectory || !@mkdir($replaceFilesDirectory, 0700)) {
            if ($replaceDirectory) $this->removeContentReplacementTree($replaceDirectory);
            return false;
        }
        foreach ($replaceFiles as $replaceRelative => $replaceFile) {
            $replaceBackupPath = $replaceFilesDirectory . str_ireplace('/', '⁄', $replaceRelative);
            if (!$this->copyFileAtomically($replaceFile['path'], $replaceBackupPath)) {
                $this->removeContentReplacementTree($replaceDirectory);
                return false;
            }
        }
        return ['id' => $replaceId, 'directory' => $replaceDirectory, 'files' => $replaceFilesDirectory];
    }

    private function applyContentReplacement($searchTerm, $replacement, $snapshot)
    {
        $searchTerm = trim((string)$searchTerm);
        $replacement = (string)$replacement;
        if (!$this->isValidContentReplacementInput($searchTerm, $replacement)) return ['status' => 422, 'body' => 'replace:no-changes'];
        $replaceFiles = [];
        $replaceMatches = 0;
        $replaceOverflow = false;
        $this->collectContentReplacementFiles(rtrim($this->config->getSiteRoot(), '/\\') . '/', '', $searchTerm, $replacement, $replaceFiles, $replaceMatches, $replaceOverflow);
        if ($replaceOverflow || !count($replaceFiles)) return ['status' => 422, 'body' => 'replace:no-changes'];
        $replaceSnapshot = $this->contentReplacementSnapshot($replaceFiles);
        if (!is_string($snapshot) || !preg_match('~^[a-f0-9]{64}$~i', $snapshot) || !hash_equals(strtolower($snapshot), $replaceSnapshot)) return ['status' => 409, 'body' => 'replace:stale'];
        foreach ($replaceFiles as $replaceFile) if (is_link($replaceFile['path']) || @file_get_contents($replaceFile['path']) !== $replaceFile['before']) return ['status' => 409, 'body' => 'replace:stale'];
        $replaceTransaction = $this->createContentReplacementTransaction($replaceFiles);
        if (!$replaceTransaction) return ['status' => 500, 'body' => 'replace:error'];
        $replacePreviousId = $this->getLastContentReplacementId();
        foreach ($replaceFiles as $replaceFile) if (!$this->writeFileAtomically($replaceFile['path'], $replaceFile['after'])) {
            if ($this->restoreBackupDirectory($replaceTransaction['files'])) $this->removeContentReplacementTree($replaceTransaction['directory']);
            return ['status' => 500, 'body' => 'replace:error'];
        }
        if (!$this->setLastContentReplacementId($replaceTransaction['id'])) {
            $replaceRestored = $this->restoreBackupDirectory($replaceTransaction['files']);
            if ($replaceRestored) $this->removeContentReplacementTree($replaceTransaction['directory']);
            return ['status' => 500, 'body' => 'replace:error'];
        }
        if ($replacePreviousId && $replacePreviousId !== $replaceTransaction['id']) {
            $replacePreviousDirectory = $this->getContentReplacementTransactionDirectory($replacePreviousId);
            if ($replacePreviousDirectory) $this->removeContentReplacementTree($replacePreviousDirectory);
        }
        return ['status' => 200, 'body' => "replace:applied\nid=" . $replaceTransaction['id'] . "\nfiles=" . count($replaceFiles) . "\nmatches=" . $replaceMatches];
    }

    private function rollbackContentReplacement($replaceId)
    {
        $replaceId = strtolower(trim((string)$replaceId));
        if (!$replaceId || $this->getLastContentReplacementId() !== $replaceId) return false;
        $replaceDirectory = $this->getContentReplacementTransactionDirectory($replaceId);
        if (!$replaceDirectory || !$this->restoreBackupDirectory($replaceDirectory . 'files/')) return false;
        @unlink(rtrim($this->config->getRuntimeDirectory(), '/\\') . '/content-replace-last');
        return $this->removeContentReplacementTree($replaceDirectory);
    }

    private function renderPanel($renderpanel1)
    {
        $renderpanel2[PLACEHOLDER_MODE] = $this->renderFileType($renderpanel1);
        $renderpanel2[PLACEHOLDER_FILE_LIST] = $this->renderSiteStatus();
        $renderpanel2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $renderpanel2['site_preview_url'] = $this->escapeHtml($this->getPublicFileUrl($renderpanel1));
        $renderpanel2[PLACEHOLDER_VERSION] = self::VERSION;
        $renderpanel2[REQUEST_UPLOAD_MAX_FILESIZE] = $this->parseSize(ini_get(REQUEST_UPLOAD_MAX_FILESIZE));
        $renderpanel2[REQUEST_MAX_FILE_UPLOADS] = ini_get(REQUEST_MAX_FILE_UPLOADS);
        $renderpanel2[SETTING_PASSWORD_COMPLEXITY] = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS);
        $renderpanel2[SETTING_AUTH_ERROR_LIMIT] = $this->config->getSetting(SETTING_AUTH_ERROR_LIMIT);
        $renderpanel2[SETTING_AUTH_LOCKOUT_DURATION] = $this->config->getSetting(SETTING_AUTH_LOCKOUT_DURATION);
        $renderpanel2[SETTING_AUTH_SESSION_RESET] = $this->config->getSetting(SETTING_AUTH_SESSION_RESET);
        $renderpanel2[SETTING_LOGOUT_TO_SITE] = $this->config->getSetting(SETTING_LOGOUT_TO_SITE);
        if ($renderpanel2[SETTING_LOGOUT_TO_SITE]) $renderpanel2[SETTING_LOGOUT_TO_SITE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_LOGOUT_TO_SITE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $renderpanel2[SETTING_SITE_SCRIPTS] = $this->config->getSetting(SETTING_SITE_SCRIPTS);
        if ($renderpanel2[SETTING_SITE_SCRIPTS]) $renderpanel2[SETTING_SITE_SCRIPTS . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_SITE_SCRIPTS . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $renderpanel2[SETTING_SITE_STYLES] = $this->config->getSetting(SETTING_SITE_STYLES);
        if ($renderpanel2[SETTING_SITE_STYLES]) $renderpanel2[SETTING_SITE_STYLES . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_SITE_STYLES . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $renderpanel2[SETTING_LINK_REPLACING] = $this->config->getSetting(SETTING_LINK_REPLACING);
        if ($renderpanel2[SETTING_LINK_REPLACING]) $renderpanel2[SETTING_LINK_REPLACING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_LINK_REPLACING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if ($this->config->getSetting(SETTING_NAME_CORRECTION)) $renderpanel2[SETTING_NAME_CORRECTION . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_NAME_CORRECTION . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if ($this->config->getSetting(SETTING_IMAGE_REWRITING)) $renderpanel2[SETTING_IMAGE_REWRITING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_IMAGE_REWRITING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if (!$this->modified) return;
        $renderpanel2[SETTING_CODE_REDRAW_DELAY] = $this->config->getSetting(SETTING_CODE_REDRAW_DELAY);
        $renderpanel2[SETTING_CODE_UNDO_LIMIT] = $this->config->getSetting(SETTING_CODE_UNDO_LIMIT);
        if ($this->config->getSetting(SETTING_CODE_HIGHLIGHTING)) $renderpanel2[SETTING_CODE_HIGHLIGHTING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_CODE_HIGHLIGHTING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if ($this->config->getSetting(SETTING_FOLDER_SIZE)) $renderpanel2[SETTING_FOLDER_SIZE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$renderpanel2[SETTING_FOLDER_SIZE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $renderpanel2[SETTING_DEFAULT_FILE] = $this->escapeHtml($this->config->getSetting(SETTING_DEFAULT_FILE));
        $renderpanel2[SETTING_RECOVERY_POINTS] = $this->config->getSetting(SETTING_RECOVERY_POINTS);
        $renderpanel2[REQUEST_IP] = $this->escapeHtml($this->request->getServer(REQUEST_REMOTE_ADDR));
        $renderpanel2[REQUEST_SIP] = $this->escapeHtml($this->request->getServer(REQUEST_SERVER_ADDR));
        if (isset($renderpanel2[REQUEST_POST_MAX_SIZE])) $renderpanel2[REQUEST_POST_MAX_SIZE] .= $this->parseSize(ini_get(REQUEST_POST_MAX_SIZE)); else$renderpanel2[REQUEST_POST_MAX_SIZE] = $this->parseSize(ini_get(REQUEST_POST_MAX_SIZE));
        $renderpanel2[LANGUAGE_LIST] = $this->renderLanguageList();
        $renderpanel2[SETTING_EDITABLE_ATTRIBUTES] = $this->escapeHtml(preg_replace('~\s~', '', $this->config->getSetting(SETTING_EDITABLE_ATTRIBUTES)));
        $renderpanel3 = $this->config->getTemplate('h');
        $renderpanel3 = $this->config->replacePlaceholders($renderpanel3, $renderpanel2);
        return $this->config->localizeTemplate($renderpanel3, $this->language);
    }

    private function renderFileType($renderfiletype1)
    {
        if (is_numeric($renderfiletype1)) {
            $renderfiletype2[PLACEHOLDER_TYPE] = $renderfiletype1;
            $renderfiletype3 = $this->config->getTemplate('i');
        } else {
            $renderfiletype4 = strtolower(substr($renderfiletype1, strripos($renderfiletype1, '.') + 1));
            $renderfiletype5 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_VISUAL_EXTENSIONS)));
            preg_match('~^' . $renderfiletype5 . '$~i', $renderfiletype4, $renderfiletype6);
            if (isset($renderfiletype6[0])) $renderfiletype3 = $this->config->getTemplate('j'); else$renderfiletype3 = $this->config->getTemplate('i');
            if ($renderfiletype4 == 'htm') $renderfiletype2[PLACEHOLDER_TYPE] = QUERY_HTML; else$renderfiletype2[PLACEHOLDER_TYPE] = $renderfiletype4;
        }
        $renderfiletype2[PLACEHOLDER_TYPE] = $this->escapeHtml($renderfiletype2[PLACEHOLDER_TYPE]);
        $renderfiletype3 = $this->config->replacePlaceholders($renderfiletype3, $renderfiletype2);
        return $this->config->localizeTemplate($renderfiletype3, $this->language);
    }

    private function renderLanguageList()
    {
        $renderlanguagelist1 = '';
        $renderlanguagelist2 = explode(',', $this->config->getSetting(SETTING_LANGUAGE));
        //if (__LINE__ != 1) exit;
        $renderlanguagelist3[FILE_NAME] = SETTING_LANGUAGE;
        foreach ($renderlanguagelist2 as $renderlanguagelist4) {
            $languageValue = trim($renderlanguagelist4);
            $renderlanguagelist3[FILE_VALUE] = $this->escapeHtml($languageValue);
            if ($this->language == $languageValue) $renderlanguagelist5 = $this->config->getTemplate('k'); else$renderlanguagelist5 = $this->config->getTemplate('l');
            $renderlanguagelist6[FILE_RADIO] = $this->config->replacePlaceholders($renderlanguagelist5, $renderlanguagelist3);
            $renderlanguagelist6[SETTING_LANGUAGE] = $renderlanguagelist3[FILE_VALUE];
            $renderlanguagelist7 = $this->config->getTemplate('m');
            $renderlanguagelist7 = $this->config->replacePlaceholders($renderlanguagelist7, $renderlanguagelist6);
            $renderlanguagelist1 .= $this->config->localizeTemplate($renderlanguagelist7, $this->language);
        }
        return $renderlanguagelist1;
    }

    private function parseSize($parsesize1)
    {
        $parsesize1 = strtolower(trim($parsesize1));
        $parsesize2 = (int)$parsesize1;
        switch ($parsesize1[strlen($parsesize1) - 1]) {
            case'm':
                return $parsesize2 * 1048576;
            case'k':
                return $parsesize2 * 1024;
            case'g':
                return $parsesize2 * 1073741824;
            default:
                return $parsesize2;
        }
    }

    private function renderSiteStatus()
    {
        $rendersitestatus1 = $this->config->getSiteUrl();
        $rendersitestatus2 = $this->config->getSiteRoot();
        if ($rendersitestatus1 == '/') $rendersitestatus3[FILE_NAME] = $this->escapeHtml($this->request->getServer(REQUEST_SERVER_NAME)); else$rendersitestatus3[FILE_NAME] = $this->escapeHtml(substr($rendersitestatus1, strrpos(substr($rendersitestatus1, 0, -1), '/') + 1, -1));
        $rendersitestatus3[FILE_DATE] = $this->escapeHtml(filemtime($rendersitestatus2));
        $rendersitestatus3[FILE_URL] = $this->escapeHtml($rendersitestatus1);
        $rendersitestatus3[FILE_SIZE] = '';
        $rendersitestatus4 = $this->config->getEditorDirectory();
        if ($rendersitestatus5 = opendir($rendersitestatus4)) {
            while (($rendersitestatus6 = readdir($rendersitestatus5)) !== false) {
                if ($rendersitestatus6 != '.' && $rendersitestatus6 != '..' && is_file($rendersitestatus4 . $rendersitestatus6) && !is_link($rendersitestatus4 . $rendersitestatus6) && (substr($rendersitestatus6, 0, strlen('myvibehtml')) == 'myvibehtml' || substr($rendersitestatus6, 0, 5) == 'index') && ((substr($rendersitestatus6, -2, -1) == 'h' && filesize($rendersitestatus4 . $rendersitestatus6) != 36307) || (substr($rendersitestatus6, -2, -1) == 'j' && filesize($rendersitestatus4 . $rendersitestatus6) != 66258) || (substr($rendersitestatus6, -3, -2) == 'c' && filesize($rendersitestatus4 . $rendersitestatus6) != 42150))) {
                    $rendersitestatus3[FILE_SIZE] = '0' . $rendersitestatus3[FILE_SIZE];
                    break;
                }
                $this->modified = true;
            }
            closedir($rendersitestatus5);
        }
        $rendersitestatus7 = $this->config->getTemplate('n');
        $rendersitestatus7 = $this->config->replacePlaceholders($rendersitestatus7, $rendersitestatus3);
        return $this->config->localizeTemplate($rendersitestatus7, $this->language);
    }

    private function renderFileList($renderfilelist1)
    {
        $relativeDirectory = $this->getSiteRelativePath($renderfilelist1);
        $renderfilelist2 = $relativeDirectory === false ? false : $this->getSafeSitePath($relativeDirectory);
        if ($renderfilelist2) $renderfilelist2 = rtrim($renderfilelist2, '/') . '/';
        $renderfilelist3 = [];
        $renderfilelist4 = [];
        $renderfilelist5 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_EDITABLE_EXTENSIONS)));
        if (!$renderfilelist2 || !is_dir($renderfilelist2)) {
            $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            return '';
        }
        $currentDirectoryUrl = $this->config->getSiteUrl() . ($relativeDirectory === '' ? '' : $relativeDirectory . '/');
        if ($renderfilelist6 = opendir($renderfilelist2)) {
            while (($renderfilelist7 = readdir($renderfilelist6)) !== false) {
                if ($renderfilelist7 != '.' && $renderfilelist7 != '..') {
                    $renderfilelist8 = [];
                    $renderfilelist8[FILE_NAME] = $renderfilelist7;
                    $renderfilelist8[FILE_DATE] = filemtime($renderfilelist2 . $renderfilelist7);
                    if (is_file($renderfilelist2 . $renderfilelist7) && !is_link($renderfilelist2 . $renderfilelist7)) {
                        preg_match('~\.(?:' . $renderfilelist5 . ')$~i', $renderfilelist7, $renderfilelist9);
                        if (isset($renderfilelist9[0])) $renderfilelist8[FILE_URL] = $this->config->getSiteUrlBase() . $this->getQueryPrefix() . ($relativeDirectory === '' ? '' : $relativeDirectory . '/') . $renderfilelist7; else$renderfilelist8[FILE_URL] = $currentDirectoryUrl . $renderfilelist7;
                        $renderfilelist8[FILE_SIZE] = filesize($renderfilelist2 . $renderfilelist7);
                        $renderfilelist4[] = $renderfilelist8;
                    } else if (is_dir($renderfilelist2 . $renderfilelist7) && !is_link($renderfilelist2 . $renderfilelist7)) {
                        $renderfilelist8[FILE_URL] = $currentDirectoryUrl . $renderfilelist7 . '/';
                        $renderfilelist8[FILE_SIZE] = $this->getDirectorySize($renderfilelist8[FILE_URL]);
                        $renderfilelist3[] = $renderfilelist8;
                    }
                }
            }
            closedir($renderfilelist6);
        }
        $renderfilelist10 = '';
        if (count($renderfilelist3)) {
            $renderfilelist3 = $this->sortEntries($renderfilelist3);
            $renderfilelist11 = $this->config->getTemplate('n');
            $renderfilelist12 = $this->config->getTemplate('o');
            foreach ($renderfilelist3 as $renderfilelist13) {
                $directoryUrl = $renderfilelist13[FILE_URL];
                if ($directoryUrl == $this->config->getBackupUrl()) {
                    $renderfilelist14 = $renderfilelist12;
                    $renderfilelist13[FILE_LIST] = $this->renderFileList($directoryUrl);
                } else$renderfilelist14 = $renderfilelist11;
                $renderfilelist13[FILE_NAME] = $this->escapeHtml($renderfilelist13[FILE_NAME]);
                $renderfilelist13[FILE_DATE] = $this->escapeHtml($renderfilelist13[FILE_DATE]);
                $renderfilelist13[FILE_URL] = $this->escapeHtml($directoryUrl);
                $renderfilelist13[FILE_SIZE] = $this->escapeHtml($renderfilelist13[FILE_SIZE]);
                $renderfilelist10 .= $this->config->localizeTemplate($this->config->replacePlaceholders($renderfilelist14, $renderfilelist13), $this->language);
            }
        }
        if (count($renderfilelist4)) {
            $renderfilelist4 = $this->sortEntries($renderfilelist4);
            $renderfilelist15 = $this->config->getTemplate('b');
            foreach ($renderfilelist4 as $renderfilelist16) {
                $renderfilelist16[FILE_NAME] = $this->escapeHtml($renderfilelist16[FILE_NAME]);
                $renderfilelist16[FILE_DATE] = $this->escapeHtml($renderfilelist16[FILE_DATE]);
                $renderfilelist16[FILE_URL] = $this->escapeHtml($renderfilelist16[FILE_URL]);
                $renderfilelist16[FILE_SIZE] = $this->escapeHtml($renderfilelist16[FILE_SIZE]);
                $renderfilelist10 .= $this->config->localizeTemplate($this->config->replacePlaceholders($renderfilelist15, $renderfilelist16), $this->language);
            }
        }
        if ($renderfilelist2 == $this->config->getSiteRoot()) $this->response->addHeader('X-c:' . $this->getDirectorySize($renderfilelist1));
        return $renderfilelist10;
    }

    private function sortEntries($sortentries1)
    {
        usort($sortentries1, function ($leftEntry, $rightEntry) {
            return strnatcasecmp((string)$leftEntry[FILE_NAME], (string)$rightEntry[FILE_NAME]);
        });
        return $sortentries1;
    }

    private function getDirectorySize($getdirectorysize1)
    {
        if ($this->config->getSetting(SETTING_FOLDER_SIZE)) {
            $getdirectorysize2 = $this->config->getSetting(SETTING_CACHE);
            if (!$getdirectorysize2) {
                $getdirectorysize2 = $this->calculateDirectorySizes($this->config->getSiteUrl());
                $this->config->setSetting(SETTING_CACHE, urlencode(serialize($getdirectorysize2)));
            } else$getdirectorysize2 = myvibehtml_unserialize_array(urldecode($getdirectorysize2));
            return $getdirectorysize2[$getdirectorysize1];
        } else return '';
    }

    private function calculateDirectorySizes($calculatedirectorysizes1)
    {
        $relativeDirectory = $this->getSiteRelativePath($calculatedirectorysizes1);
        $calculatedirectorysizes2 = $relativeDirectory === false ? false : $this->getSafeSitePath($relativeDirectory);
        if ($calculatedirectorysizes2) $calculatedirectorysizes2 = rtrim($calculatedirectorysizes2, '/') . '/';
        $calculatedirectorysizes3 = [];
        $calculatedirectorysizes3[$calculatedirectorysizes1] = 0;
        if ($calculatedirectorysizes2 && $calculatedirectorysizes4 = opendir($calculatedirectorysizes2)) {
            while (($calculatedirectorysizes5 = readdir($calculatedirectorysizes4)) !== false) {
                if ($calculatedirectorysizes5 != '.' && $calculatedirectorysizes5 != '..') {
                    if (is_file($calculatedirectorysizes2 . $calculatedirectorysizes5) && !is_link($calculatedirectorysizes2 . $calculatedirectorysizes5)) $calculatedirectorysizes3[$calculatedirectorysizes1] += filesize($calculatedirectorysizes2 . $calculatedirectorysizes5); else if (is_dir($calculatedirectorysizes2 . $calculatedirectorysizes5 . '/') && !is_link($calculatedirectorysizes2 . $calculatedirectorysizes5)) {
                        $calculatedirectorysizes6 = $this->calculateDirectorySizes($calculatedirectorysizes1 . $calculatedirectorysizes5 . '/');
                        $calculatedirectorysizes3[$calculatedirectorysizes1] += $calculatedirectorysizes6[$calculatedirectorysizes1 . $calculatedirectorysizes5 . '/'];
                        $calculatedirectorysizes3 = array_merge($calculatedirectorysizes3, $calculatedirectorysizes6);
                    }
                }
            }
            closedir($calculatedirectorysizes4);
        }
        return $calculatedirectorysizes3;
    }

    private function createBackup($createbackup1, $allowMissing = false)
    {
        $createbackup1 = $this->normalizeRelativePath($createbackup1);
        if ($createbackup1 === false || !$this->getSafeSitePath($createbackup1, $allowMissing)) return false;
        $createbackup2 = $this->config->getSetting(SETTING_RECOVERY_POINTS);
        if ($createbackup2 && $createbackup2 > 0) {
            $createbackup3 = $this->config->getBackupRoot();
            if ($createbackup3 && ($this->isSafeRuntimePath($createbackup3, true) || (!file_exists($createbackup3) && is_dir($this->config->getRuntimeDirectory()) && is_writable($this->config->getRuntimeDirectory()) && @mkdir($createbackup3, 0700, true)))) {
                $createbackup4 = date('y.m.d.H.i', $this->config->getSetting(SETTING_AUTH_TIME));
                $createbackup5 = $createbackup3 . $createbackup4 . '/';
                if (($this->isSafeRuntimePath($createbackup5, true) || (!file_exists($createbackup5) && is_dir($createbackup3) && is_writable($createbackup3) && @mkdir($createbackup5, 0700, true)))) {
                    $this->pruneBackups($createbackup3, $createbackup2);
                    if ($createbackup6 = opendir($createbackup5)) {
                        $createbackup7 = $createbackup5 . str_ireplace('/', '⁄', $createbackup1);
                        $createbackup8 = $createbackup5 . 'ꜜ' . str_ireplace('/', '⁄', $createbackup1);
                        while (($createbackup9 = readdir($createbackup6)) !== false) {
                            $createbackup10 = $createbackup5 . $createbackup9;
                            if ($createbackup9 != '.' && $createbackup9 != '..' && !is_link($createbackup10) && is_file($createbackup10) && file_exists($createbackup10) && ($createbackup10 == $createbackup7 || $createbackup10 == $createbackup8)) return true;
                        }
                        closedir($createbackup6);
                    }
                    $createbackup11 = $this->getSafeSitePath($createbackup1, $allowMissing);
                    if ($createbackup11 && !is_link($createbackup11) && file_exists($createbackup11)) {
                        if ($this->copyFileAtomically($createbackup11, $createbackup5 . str_ireplace('/', '⁄', $createbackup1))) return true;
                    } else if ($this->writeFileAtomically($createbackup5 . 'ꜜ' . str_ireplace('/', '⁄', $createbackup1), '', 0600)) return true;
                }
            }
        } else return true;
    }

    private function pruneBackups($prunebackups1, $prunebackups2)
    {
        $prunebackups3 = [];
        if ($prunebackups4 = opendir($prunebackups1)) {
            while (($prunebackups5 = readdir($prunebackups4)) !== false) if ($prunebackups5 != '.' && $prunebackups5 != '..' && is_dir($prunebackups1 . $prunebackups5)) array_push($prunebackups3, $prunebackups5);
            closedir($prunebackups4);
        }
        $prunebackups6 = count($prunebackups3) - $prunebackups2;
        if ($prunebackups6 > 0) {
            asort($prunebackups3);
            $prunebackups3 = array_slice($prunebackups3, 0, $prunebackups6);
            if ($prunebackups4 = opendir($prunebackups1)) {
                while (($prunebackups5 = readdir($prunebackups4)) !== false) {
                    if ($prunebackups5 != '.' && $prunebackups5 != '..' && is_dir($prunebackups1 . $prunebackups5)) {
                        foreach ($prunebackups3 as $prunebackups7) {
                            if ($prunebackups5 == $prunebackups7) {
                                $prunebackups8 = $prunebackups1 . $prunebackups5 . '/';
                                if ($prunebackups9 = opendir($prunebackups8)) while (($prunebackups10 = readdir($prunebackups9)) !== false) if ($prunebackups10 != '.' && $prunebackups10 != '..') if (!is_file($prunebackups8 . $prunebackups10) || !unlink($prunebackups8 . $prunebackups10)) $prunebackups11 = true;
                                closedir($prunebackups9);
                                if (!isset($prunebackups11)) rmdir($prunebackups8); else unset($prunebackups11);
                            }
                        }
                    }
                }
                closedir($prunebackups4);
            }
        }
    }

    private function normalizeImageFilename($normalizeimagefilename1, $normalizeimagefilename2)
    {
        if (!$this->isSafeSitePath($normalizeimagefilename1, true)) return false;
        if ($this->config->getSetting(SETTING_NAME_CORRECTION)) {
            preg_match('~\.[a-z0-9]{1,5}$~i', $normalizeimagefilename2, $normalizeimagefilename3);
            if (!isset($normalizeimagefilename3[0])) {
                $normalizeimagefilename3[1] = $normalizeimagefilename2;
                $normalizeimagefilename3[2] = '';
            } else preg_match('~^(.+)(\.[a-z0-9]{1,5})$~i', $normalizeimagefilename2, $normalizeimagefilename3);
            $normalizeimagefilename3[1] = preg_replace('~[^a-z0-9]+~i', '-', $normalizeimagefilename3[1]);
            $normalizeimagefilename3[1] = preg_replace('~^-~i', '', $normalizeimagefilename3[1]);
            $normalizeimagefilename3[1] = preg_replace('~-$~i', '', $normalizeimagefilename3[1]);
            if (!preg_match('~[^-]+~i', $normalizeimagefilename3[1])) $normalizeimagefilename3[1] = 'image';
            $normalizeimagefilename2 = $normalizeimagefilename3[1] . $normalizeimagefilename3[2];
        }
        $normalizeimagefilename2 = preg_replace('~[%#]~i', '', $normalizeimagefilename2);
        $normalizeimagefilename4 = $normalizeimagefilename1 . $normalizeimagefilename2;
        if (!$this->isSafeSitePath($normalizeimagefilename4, true)) return false;
        if (file_exists($normalizeimagefilename4)) {
            if (!$this->config->getSetting(SETTING_IMAGE_REWRITING)) {
                preg_match('~\.[a-z0-9]{1,5}$~i', $normalizeimagefilename4, $normalizeimagefilename3);
                if (isset($normalizeimagefilename3[0])) $normalizeimagefilename5 = preg_replace('~\.([a-z0-9]{1,5})$~i', '{prefix}.$1', $normalizeimagefilename4); else$normalizeimagefilename5 = $normalizeimagefilename4 . '{prefix}';
                for ($normalizeimagefilename6 = 2; file_exists($normalizeimagefilename4); $normalizeimagefilename6++) $normalizeimagefilename4 = preg_replace('~\{prefix\}~i', '-' . $normalizeimagefilename6, $normalizeimagefilename5);
            }
        }
        return $this->isSafeSitePath($normalizeimagefilename4, true);
    }
}

$request = new MyVibeHTMLRequest();
$response = new MyVibeHTMLResponse($request->getServer(REQUEST_SERVER_PROTOCOL));
$config = new MyVibeHTMLConfig(dirname($request->getServer(REQUEST_SCRIPT_FILENAME)) . '/', $request->getServer(REQUEST_DOCUMENT_ROOT));
$controller = new MyVibeHTMLController($request, $response, $config);
try {
    $controller->authenticate();
} catch (Exception$global1) {
    $controller->handleException($global1);
}
if (!$controller->commit()) $response->setStatus(500, 'Internal Server Error');
$response->send(); ?>
