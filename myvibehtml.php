<?php /* MyVibeHTML v0.20 */
function myvibehtml_runtime_directory($MyvibehtmlruntimedirectoryValue1 = false)
{
    if (!$MyvibehtmlruntimedirectoryValue1 && isset($_SERVER['DOCUMENT_ROOT'])) $MyvibehtmlruntimedirectoryValue1 = $_SERVER['DOCUMENT_ROOT'];
    $MyvibehtmlruntimedirectoryValue1 = str_replace('\\', '/', (string)$MyvibehtmlruntimedirectoryValue1);
    $MyvibehtmlruntimedirectoryValue2 = realpath($MyvibehtmlruntimedirectoryValue1);
    if (!$MyvibehtmlruntimedirectoryValue2 || $MyvibehtmlruntimedirectoryValue2 === '/') return false;
    $MyvibehtmlruntimedirectoryValue2 = rtrim(str_replace('\\', '/', $MyvibehtmlruntimedirectoryValue2), '/');
    $MyvibehtmlruntimedirectoryValue3 = dirname($MyvibehtmlruntimedirectoryValue2) . '/.myvibehtml-' . substr(sha1($MyvibehtmlruntimedirectoryValue2), 0, 16) . '/';
    if (is_link(rtrim($MyvibehtmlruntimedirectoryValue3, '/'))) return false;
    if (!is_dir($MyvibehtmlruntimedirectoryValue3)) @mkdir($MyvibehtmlruntimedirectoryValue3, 0700, true);
    if (is_dir($MyvibehtmlruntimedirectoryValue3) && is_writable($MyvibehtmlruntimedirectoryValue3)) {
        @chmod($MyvibehtmlruntimedirectoryValue3, 0700);
        return $MyvibehtmlruntimedirectoryValue3;
    }
    return false;
}

function myvibehtml_atomic_write($MyvibehtmlatomicwriteValue1, $MyvibehtmlatomicwriteValue2, $MyvibehtmlatomicwriteValue3, $MyvibehtmlatomicwriteValue4)
{
    $MyvibehtmlatomicwriteValue5 = dirname($MyvibehtmlatomicwriteValue1);
    if (!is_dir($MyvibehtmlatomicwriteValue5) || !is_writable($MyvibehtmlatomicwriteValue5) || is_link($MyvibehtmlatomicwriteValue1)) return false;
    $MyvibehtmlatomicwriteValue6 = @fopen($MyvibehtmlatomicwriteValue5 . '/' . $MyvibehtmlatomicwriteValue4, 'c');
    if (!$MyvibehtmlatomicwriteValue6 || !flock($MyvibehtmlatomicwriteValue6, LOCK_EX)) {
        if ($MyvibehtmlatomicwriteValue6) fclose($MyvibehtmlatomicwriteValue6);
        return false;
    }
    $MyvibehtmlatomicwriteValue7 = tempnam($MyvibehtmlatomicwriteValue5, '.myvibehtml-write-');
    $MyvibehtmlatomicwriteValue8 = $MyvibehtmlatomicwriteValue7 ? @fopen($MyvibehtmlatomicwriteValue7, 'wb') : false;
    $MyvibehtmlatomicwriteValue9 = false;
    if ($MyvibehtmlatomicwriteValue8) {
        $MyvibehtmlatomicwriteValue10 = 0;
        $MyvibehtmlatomicwriteValue11 = strlen($MyvibehtmlatomicwriteValue2);
        while ($MyvibehtmlatomicwriteValue10 < $MyvibehtmlatomicwriteValue11 && ($MyvibehtmlatomicwriteValue12 = fwrite($MyvibehtmlatomicwriteValue8, substr($MyvibehtmlatomicwriteValue2, $MyvibehtmlatomicwriteValue10))) !== false && $MyvibehtmlatomicwriteValue12 > 0) $MyvibehtmlatomicwriteValue10 += $MyvibehtmlatomicwriteValue12;
        $MyvibehtmlatomicwriteValue9 = $MyvibehtmlatomicwriteValue10 === $MyvibehtmlatomicwriteValue11 && fflush($MyvibehtmlatomicwriteValue8);
        fclose($MyvibehtmlatomicwriteValue8);
    }
    if ($MyvibehtmlatomicwriteValue9) {
        @chmod($MyvibehtmlatomicwriteValue7, $MyvibehtmlatomicwriteValue3);
        $MyvibehtmlatomicwriteValue9 = @rename($MyvibehtmlatomicwriteValue7, $MyvibehtmlatomicwriteValue1);
        if ($MyvibehtmlatomicwriteValue9) @chmod($MyvibehtmlatomicwriteValue1, $MyvibehtmlatomicwriteValue3);
    }
    if ($MyvibehtmlatomicwriteValue7 && file_exists($MyvibehtmlatomicwriteValue7)) @unlink($MyvibehtmlatomicwriteValue7);
    flock($MyvibehtmlatomicwriteValue6, LOCK_UN);
    fclose($MyvibehtmlatomicwriteValue6);
    return $MyvibehtmlatomicwriteValue9;
}

function myvibehtml_unserialize_array($MyvibehtmlunserializearrayValue1)
{
    if (version_compare(PHP_VERSION, '7.0', '>=')) return @unserialize($MyvibehtmlunserializearrayValue1, ['allowed_classes' => false]);
    return @unserialize($MyvibehtmlunserializearrayValue1);
}

$myvibehtmlRuntimeDirectory = myvibehtml_runtime_directory();
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', $myvibehtmlRuntimeDirectory ? $myvibehtmlRuntimeDirectory . 'error.log' : dirname(__FILE__) . '/error.log');
unset($myvibehtmlRuntimeDirectory);
version_compare(PHP_VERSION, '5.2', '>=') || exit('PHP ' . PHP_VERSION . ' is not supported');
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
define('SETTING_UPDATE_FINAL', 'update_final');
define('SETTING_UPDATE_BETA', 'update_beta');
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
define('HASH_ALGORITHM', 'sha1');
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
define('SCRIPT_TAG', '<script');
define('SAFE_SCRIPT_TAG', '<_cript');
define('CLOSING_SCRIPT_TAG', '</script');
define('SAFE_CLOSING_SCRIPT_TAG', '</_cript');
define('CLOSING_BODY_TAG', '</body>');
define('UPDATE_MARKER_OPEN', '<!--~~?');
define('UPDATE_MARKER_CLOSE', '?~~-->');
define('COOKIE_PREFIX', 'myvibehtml_');

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

    public function getQuery($GetQueryValue1)
    {
        if (isset($this->cache['a'][$GetQueryValue1])) return $this->cache['a'][$GetQueryValue1]; else if (isset($this->raw['a'][$GetQueryValue1])) return $this->cache['a'][$GetQueryValue1] = $this->filter($this->raw['a'][$GetQueryValue1], $GetQueryValue1);
    }

    public function getPost($GetPostValue1 = false)
    {
        if ($GetPostValue1) {
            if (isset($this->cache['b'][$GetPostValue1])) return $this->cache['b'][$GetPostValue1]; else if (isset($this->raw['b'][$GetPostValue1])) return $this->cache['b'][$GetPostValue1] = $this->filter($this->raw['b'][$GetPostValue1], $GetPostValue1);
        } else if (count($this->raw['b'])) return true;
    }

    public function getServer($GetServerValue1)
    {
        if (isset($this->cache['c'][$GetServerValue1])) return $this->cache['c'][$GetServerValue1]; else {
            $GetServerValue2 = strtoupper($GetServerValue1);
            if (isset($this->raw['c'][$GetServerValue2])) return $this->cache['c'][$GetServerValue1] = $this->filter($this->raw['c'][$GetServerValue2], $GetServerValue1);
        }
    }

    public function getCookie($GetCookieValue1)
    {
        if (isset($this->cache['d'][$GetCookieValue1])) return $this->cache['d'][$GetCookieValue1]; else if (isset($this->raw['d'][$GetCookieValue1])) return $this->cache['d'][$GetCookieValue1] = $this->filter($this->raw['d'][$GetCookieValue1], $GetCookieValue1);
    }

    public function getFile($GetFileValue1)
    {
        if (isset($this->raw['e'][$GetFileValue1])) return $this->raw['e'][$GetFileValue1];
    }

    private function filter($FilterValue1, $FilterValue2)
    {
        $filterMethods = [
            REQUEST_SERVER_PROTOCOL => 'filterServerProtocol', REQUEST_SERVER_NAME => 'filterServerName',
            REQUEST_SCRIPT_FILENAME => 'filterScriptFilename', REQUEST_DOCUMENT_ROOT => 'filterDocumentRoot',
            REQUEST_PHP_SELF => 'filterPhpSelf', REQUEST_SCRIPT_NAME => 'filterScriptName',
            REQUEST_QUERY_STRING => 'filterQueryString', REQUEST_REMOTE_ADDR => 'filterRemoteAddress',
            REQUEST_SERVER_ADDR => 'filterServerAddress', 'ip' => 'filterIpAddress', HASH_ALGORITHM => 'filterSha1'
        ];
        if (isset($filterMethods[$FilterValue2]) && method_exists($this, $filterMethods[$FilterValue2])) {
            $filterMethod = $filterMethods[$FilterValue2];
            return $this->$filterMethod($FilterValue1);
        }
        return $FilterValue1;
    }

    private function filterServerProtocol($FilterServerProtocolValue1)
    {
        preg_match('~^[a-z]{4,5}/[0-9]\.[0-9]$~i', $FilterServerProtocolValue1, $FilterServerProtocolValue2);
        if (isset($FilterServerProtocolValue2[0])) return $FilterServerProtocolValue2[0];
    }

    private function filterServerName($FilterServerNameValue1)
    {
        preg_match('~^[a-z0-9-_.]{2,300}$~i', $FilterServerNameValue1, $FilterServerNameValue2);
        if (isset($FilterServerNameValue2[0])) return $FilterServerNameValue2[0];
    }

    private function filterScriptFilename($FilterScriptFilenameValue1)
    {
        $FilterScriptFilenameValue2 = str_replace('\\', '/', __FILE__);
        if (stripos($FilterScriptFilenameValue2, $this->raw['c'][strtoupper(REQUEST_DOCUMENT_ROOT)]) === 0) return $FilterScriptFilenameValue2; else return str_replace('\\', '/', $FilterScriptFilenameValue1);
    }

    private function filterDocumentRoot($FilterDocumentRootValue1)
    {
        $FilterDocumentRootValue1 = str_replace('\\', '/', $FilterDocumentRootValue1);
        $FilterDocumentRootValue2 = $this->getServer(REQUEST_SCRIPT_FILENAME);
        $FilterDocumentRootValue3 = $this->getServer(REQUEST_PHP_SELF);
        $FilterDocumentRootValue4 = $this->getServer(REQUEST_SCRIPT_NAME);
        //if (__LINE__ != 1) exit;
        if (stripos($FilterDocumentRootValue2, $FilterDocumentRootValue3) > 0) $FilterDocumentRootValue5 = str_ireplace($FilterDocumentRootValue3, '', $FilterDocumentRootValue2);
        if (stripos($FilterDocumentRootValue2, $FilterDocumentRootValue4) > 0) $FilterDocumentRootValue6 = str_ireplace($FilterDocumentRootValue4, '', $FilterDocumentRootValue2);
        if (isset($FilterDocumentRootValue5)) {
            if (isset($FilterDocumentRootValue6)) {
                if (strlen($FilterDocumentRootValue5) > strlen($FilterDocumentRootValue6)) $FilterDocumentRootValue7 = $FilterDocumentRootValue5; else$FilterDocumentRootValue7 = $FilterDocumentRootValue6;
            } else$FilterDocumentRootValue7 = $FilterDocumentRootValue5;
        } else if (isset($FilterDocumentRootValue6)) $FilterDocumentRootValue7 = $FilterDocumentRootValue6; else$FilterDocumentRootValue7 = $FilterDocumentRootValue1;
        if (stripos($FilterDocumentRootValue2, $FilterDocumentRootValue1) === 0) {
            if (strlen($FilterDocumentRootValue7) > strlen($FilterDocumentRootValue1)) $FilterDocumentRootValue1 = $FilterDocumentRootValue7;
        } else$FilterDocumentRootValue1 = $FilterDocumentRootValue7;
        if (substr($FilterDocumentRootValue1, -1) == '/') return substr($FilterDocumentRootValue1, 0, -1);
        return $FilterDocumentRootValue1;
    }

    private function filterPhpSelf($FilterPhpSelfValue1)
    {
        return str_replace('\\', '/', $FilterPhpSelfValue1);
    }

    private function filterScriptName($FilterScriptNameValue1)
    {
        return str_replace('\\', '/', $FilterScriptNameValue1);
    }

    private function filterQueryString($FilterQueryStringValue1)
    {
        return str_replace('\\', '/', $FilterQueryStringValue1);
    }

    private function filterRemoteAddress($FilterRemoteAddressValue1)
    {
        return $this->filterIpAddress($FilterRemoteAddressValue1);
    }

    private function filterServerAddress($FilterServerAddressValue1)
    {
        return $this->filterIpAddress($FilterServerAddressValue1);
    }

    private function filterIpAddress($FilterIpAddressValue1)
    {
        preg_match('~^[a-z0-9.:]{1,40}$~i', $FilterIpAddressValue1, $FilterIpAddressValue2);
        if (isset($FilterIpAddressValue2[0])) return $FilterIpAddressValue2[0];
    }

    private function filterSha1($FilterSha1Value1)
    {
        preg_match('~^[a-z0-9]{40}$~i', $FilterSha1Value1, $FilterSha1Value2);
        if (isset($FilterSha1Value2[0])) return $FilterSha1Value2[0];
    }
}

final class MyVibeHTMLResponse
{
    private $protocol;
    private $headers;
    private $cookies;
    private $body;

    public function __construct($ConstructValue1)
    {
        $this->protocol = $ConstructValue1;
        $this->addHeader('Content-type:text/html;charset=utf-8');
        $this->addHeader('X-Content-Type-Options:nosniff');
        $this->addHeader('X-Frame-Options:SAMEORIGIN');
        $this->addHeader('Referrer-Policy:no-referrer');
        $this->addHeader('Permissions-Policy:camera=(), microphone=(), geolocation=()');
        $this->addHeader('X-Permitted-Cross-Domain-Policies:none');
        $this->addHeader('Cache-Control:no-store, max-age=0');
        $this->addHeader("Content-Security-Policy-Report-Only:default-src 'self';base-uri 'self';connect-src 'self';font-src 'self' data:;img-src 'self' data: blob:;object-src 'none';script-src 'self';style-src 'self';frame-src 'self' data: blob:;form-action 'self';frame-ancestors 'self'");
    }

    public function addHeader($AddHeaderValue1)
    {
        return $this->headers[] = $AddHeaderValue1;
    }

    public function setStatus($SetStatusValue1, $SetStatusValue2)
    {
        return $this->headers[] = $this->protocol . ' ' . $SetStatusValue1 . ' ' . $SetStatusValue2;
    }

    public function redirect($RedirectValue1)
    {
        return $this->headers[] = 'Location:' . $RedirectValue1;
    }

    public function setCookie($SetCookieValue1, $SetCookieValue2 = false, $SetCookieValue3 = false, $SetCookieValue4 = false, $SetCookieValue5 = false, $SetCookieValue6 = false, $SetCookieValue7 = false)
    {
        $SetCookieValue8['a'] = $SetCookieValue1;
        $SetCookieValue8['b'] = $SetCookieValue2;
        $SetCookieValue8['c'] = $SetCookieValue7;
        $SetCookieValue8['d'] = (int)$SetCookieValue3;
        $SetCookieValue8['e'] = str_replace('%2F', '/', urlencode($SetCookieValue4));
        $SetCookieValue8['f'] = $SetCookieValue5;
        $SetCookieValue8['g'] = (int)$SetCookieValue6;
        $this->cookies[] = $SetCookieValue8;
    }

    public function clearCookie($ClearCookieValue1, $ClearCookieValue2 = false, $ClearCookieValue3 = false)
    {
        $this->setCookie($ClearCookieValue1, '', time() - 60 * 60, $ClearCookieValue2, $ClearCookieValue3);
    }

    public function setBody($SetBodyValue1)
    {
        return $this->body = $SetBodyValue1;
    }

    public function send()
    {
        //if (__LINE__ != 1) exit;
        if (isset($this->headers)) foreach ($this->headers as $SendValue1) header($SendValue1);
        if (isset($this->cookies)) foreach ($this->cookies as $SendValue2) {
            $SendValue3 = $SendValue2['g'] || (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) != 'off' && $_SERVER['HTTPS'] !== '');
            $SendValue4 = $SendValue2['e'] ? $SendValue2['e'] : '/';
            if (version_compare(PHP_VERSION, '7.3', '>=')) setcookie($SendValue2['a'], $SendValue2['b'], ['expires' => $SendValue2['d'], 'path' => $SendValue4, 'domain' => $SendValue2['f'] ? $SendValue2['f'] : '', 'secure' => (bool)$SendValue3, 'httponly' => (bool)$SendValue2['c'], 'samesite' => 'Lax']);
            else setcookie($SendValue2['a'], $SendValue2['b'], $SendValue2['d'], $SendValue4, $SendValue2['f'], $SendValue3, $SendValue2['c']);
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

    public function __construct($ConstructValue1, $ConstructValue2)
    {
        $this->translations = parse_ini_file($ConstructValue1 . self::LANGUAGE_FILE, true);
        $this->configPath = $this->getConfigPath($ConstructValue1, $ConstructValue2);
        $this->settings = parse_ini_file($this->configPath, true);
        $this->templates = [
            'j' => '<ol><li title="{source_editor}">{type}</li><li title="{visual_editor}">text</li></ol>',
            'i' => '<ol><li>{type}</li></ol>',
            'h' => '<div id="e"><div><div><h1><a href="{site_preview_url}">MyVibeHTML</a> v{version}</h1><p>{extended}</p></div>{mode}<ul><li><a title="{files}">{files}</a><div id="f"><ol><li>{file_name}</li><li>{file_size}</li><li>{file_changed}</li><li>{file_menu}</li></ol><ul>{filelist}</ul></div></li><li><a title="{settings}">{settings}</a><div id="g"><fieldset><legend>{auth}</legend><dl><dt title="{new_password}">{new_password}:</dt><dd><input type="password" maxlength="14"><a></a></dd><dt title="{auth_error_limit_desc}">{login_attempts}:</dt><dd data-aa="5"><input type="text" maxlength="2" value="{auth_error_limit}"></dd><dt title="{auth_lockout_duration_desc}">{lockout_duration}:</dt><dd data-aa="1"><input type="text" maxlength="7" value="{auth_lockout_duration}"></dd><dt title="{auth_session_reset_desc}">{session_autoreset}:</dt><dd data-aa="60"><input type="text" maxlength="7" value="{auth_session_reset}"></dd><dd title="{logout_to_site_desc}" data-aa="0"><label>{logout_to_site_checkbox}<em></em>{redirect_to_site}</label></dd></dl></fieldset><fieldset><legend>{visual_editor}</legend><dl><dd title="{site_scripts_desc}" data-aa="1"><label>{site_scripts_checkbox}<em></em>{enable_scripts}</label></dd><dd title="{site_styles_desc}" data-aa="1"><label>{site_styles_checkbox}<em></em>{enable_styles}</label></dd><dd title="{link_replacing_desc}" data-aa="1"><label>{link_replacing_checkbox}<em></em>{change_links}</label></dd><dd title="{name_correction_desc}" data-aa="1"><label>{name_correction_checkbox}<em></em>{remove_symbols}</label></dd><dd title="{image_rewriting_desc}" data-aa="0"><label>{image_rewriting_checkbox}<em></em>{rewrite_file}</label></dd></dl></fieldset><fieldset><legend>{source_editor}</legend><dl><dt title="{code_redraw_delay_desc}">{redraw_delay}:</dt><dd data-aa="200"><input type="text" maxlength="7" value="{code_redraw_delay}"></dd><dt title="{code_undo_limit_desc}">{steps_for_undo}:</dt><dd data-aa="50"><input type="text" maxlength="3" value="{code_undo_limit}"></dd><dd title="{code_highlighting_desc}" data-aa="1"><label>{code_highlighting_checkbox}<em></em>{enable_highlighting}</label></dd></dl></fieldset><fieldset><legend>{file_manager}</legend><dl><dd title="{folder_size_desc}" data-aa="1"><label>{folder_size_checkbox}<em></em>{display_catalog_size}</label></dd></dl></fieldset><fieldset><legend>{system}</legend><dl><dt title="{default_file_desc}">{main_page_or_file}:</dt><dd data-aa="index.html"><input type="text" maxlength="30" value="{default_file}"></dd><dt title="{recovery_points_desc}">{number_of_recovery_point}:</dt><dd data-aa="5"><input type="text" maxlength="2" value="{recovery_points}"></dd><dd title="{new_version_notify}" data-aa="1" data-myvibehtml-local-only="1"><label>{update_final_checkbox}<em></em>{new_version_notify}</label></dd><dd title="{beta_version_notify}" data-aa="0" data-myvibehtml-local-only="1"><label>{update_beta_checkbox}<em></em>{beta_version_notify}</label></dd><dt title="{language}">{language}:</dt><dd><ul>{language_list}</ul></dd></dl></fieldset><p><input type="button" value="{save}" disabled><a title="{restore_settings}"></a></p></div></li></ul><div><ul data-ab="<li>{tagname}<i><i></i></i></li>"></ul><p><i title="{clone_block}"></i><i title="{move_up_block}"></i><i title="{move_down_block}"></i><i title="{delete_block}"></i><i title="{attributes}"></i></p><div><fieldset><legend>{attributes}</legend><dl><script type="text/template"><dt><input type="text" value="{name}" disabled></dt><dd><input type="text" value="{value}"></dd></script></dl></fieldset></div></div><ul><li><input type="button" value="{save}" title="{save}" disabled></li><li><input type="button" value="{logout}" title="{logout}" disabled data-ac="{not_save}"></li></ul><p><samp data-ad="{saving}" data-ae="{saved}" data-af="{not_saved}" data-ag="{reset_session}" data-ah="{access_closed}" data-ai="{login_again}" data-aj="{request_rejected}" data-ak="{request_blocked}" data-al="{no_response}" data-am="{not_writable}" data-an="{old_browser}" data-ao="{new_version}" data-ap="{need_update}" data-aq="{install}" data-ar="{not_install}" data-as="{download_installer}" data-at="{system_update}" data-au="{update_error}" data-av="{install_complete}" data-aw="{activation_complete}" data-ax="{attachment_domain}" data-ay="{no_connect}" data-az="{password_hashing}" data-bb="{pass_complexity}" data-bc="{uploading}" data-bd="{uploading_complete}" data-be="{uploading_error}" data-bf="{extension_error}" data-bg="{count_limit}" data-bh="{size_limit}" data-bi="{file_deletion}" data-bj="{file_deleted}" data-bk="{deletion_error}" data-bl="{file_recovery}" data-bm="{recovery_success}" data-bn="{recovery_error}" data-bo="{backup_error}" data-bp="{file_replacing}" data-bq="{incorrect_link}" data-br="{unknown_relation}" data-bs="{element_busy}" data-bt="{disable_script}" data-bu="{disable}" data-bv="{disabling_scripts}" data-bw="{scripts_disabled}" data-bx="{show_password}" data-by="{hide_password}" data-bz="{post_max_size}" data-bA="{upload_max_filesize}" data-cc="{max_file_uploads}" data-cd="{editable_attributes}" data-ce="{auth_session_reset}" data-cf="{link_replacing}" data-cg="{site_scripts}" data-ch="{site_styles}" data-ci="{logout_to_site}" data-cj="{ip}" data-ck="{sip}" data-cl="{system_url}" data-cm="{version}" data-cn="{update_final}" data-co="{update_beta}"></samp><noscript><samp>{requires_javascript}</samp></noscript><i></i></p></div></div><script src="{system_url}myvibehtml.js?v={version}"></script>',
            'a' => '<!doctype html><html id="a"><head><title>{auth} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><fieldset><legend>{auth}</legend><ol data-cp="{error_limit}" data-cq="{error_count}"><li></li></ol><p><samp data-az="{password_hashing}" data-cr="{password_checking}" data-cs="{access_granted}" data-ct="{access_denied}" data-al="{no_response}" data-am="{not_writable}" data-cl="{system_url}">{document_root_error}</samp><noscript><samp>{requires_javascript}</samp></noscript><i></i></p><p><span>{password}:</span><input type="password" data-bb="{pass_complexity}" maxlength="14"><a data-bx="{show_password}" data-by="{hide_password}"></a></p><p><input type="button" value="{login}" disabled></p></fieldset><script src="{system_url}myvibehtml.js?v={version}"></script></body></html>',
            'e' => '<!doctype html><html id="b"><head><title>{code} - {{code}} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><samp><span>{code}</span>{{code}}</samp>{panel}</body></html>',
            'c' => '<!doctype html><html id="d"><head><title>{title} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><iframe>{no_frames}</iframe>{panel}<script type="text/template" id="h"><base href="{base}"></script><script type="text/template" id="i">@keyframes myvibehtml-drop{0%{opacity:0.6;}49%{opacity:0.6;}50%{opacity:1;}99%{opacity:1;}}[data-myvibehtml-string]{outline:none;font-style:inherit;cursor:text}[data-myvibehtml-focus]{outline:4px solid #f2ca00 !important;outline-offset:8px}[data-myvibehtml-disabled]{outline-color:#f00 !important}[data-myvibehtml-dragover]{outline:4px solid #adc8fe;outline-offset:-4px}[data-myvibehtml-drop]{animation:myvibehtml-drop 70ms infinite linear}[data-myvibehtml-object]{display:block;position:relative;background-color:#fff;opacity:0;z-index:1}</script><script type="text/template" id="j" data-cu="{is_edited}">{source}</script></body></html>',
            'd' => '<!doctype html><html id="c"><head><title>{title} - MyVibeHTML</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="{system_url}myvibehtml.css?v={version}"></head><body><div><ol data-ab="<li style=height:0px></li>"></ol><pre contenteditable data-cv="{redraw_delay}" data-cw="{code_highlighting}" data-cx="{code_undo_limit}"></pre></div>{panel}<script type="text/template" id="j" data-cu="{is_edited}">{source}</script></body></html>',
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
            '</span></a></div>',
            '</span></a><button id="myvibehtml-mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="myvibehtml-mobile-menu" title="{mobile_menu}" aria-label="{mobile_menu}"><span class="myvibehtml-local-icon myvibehtml-icon-menu" aria-hidden="true"></span></button><div id="myvibehtml-mobile-menu" role="menu" aria-hidden="true"><button type="button" role="menuitem" data-mobile-target="div>div+ol li:first-child">html</button><button type="button" role="menuitem" data-mobile-target="div>div+ol li+li">text</button><button type="button" role="menuitem" data-mobile-target="div>ol+ul>li:first-child>a">{files}</button><button type="button" role="menuitem" data-mobile-target="div>ol+ul>li+li>a">{settings}</button><button type="button" role="menuitem" data-mobile-target="div>div+ul li:first-child input">{save}</button><button type="button" role="menuitem" data-mobile-target="div>div+ul li:last-child input">{logout}</button></div></div>',
            $this->templates['h']
        );
        $this->templates['h'] = str_replace(
            'data-co="{update_beta}"',
            'data-co="{update_beta}" data-context-menu="{context_menu}" data-select-element="{select_element}" data-select-section="{select_section}" data-select-block="{select_block}" data-context-copy="{context_copy}" data-context-up="{context_up}" data-context-down="{context_down}" data-context-delete="{context_delete}"',
            $this->templates['h']
        );
        $this->templates['a'] = str_replace(
            '<body><fieldset><legend>{auth}</legend>',
            '<body><div class="myvibehtml-auth-brand"><div class="myvibehtml-auth-mark" aria-hidden="true"><span class="myvibehtml-local-icon myvibehtml-icon-code"></span></div><div><strong>MyVibeHTML</strong><span>{auth_intro}</span></div></div><fieldset class="myvibehtml-auth-card"><legend id="myvibehtml-auth-title">{auth}</legend>',
            $this->templates['a']
        );
        $this->templates['a'] = str_replace(
            '<p><samp data-az=',
            '<p class="myvibehtml-auth-status"><samp id="myvibehtml-auth-status" aria-live="polite" data-az=',
            $this->templates['a']
        );
        $this->templates['a'] = str_replace(
            '<p><span>{password}:</span><input type="password" data-bb=',
            '<p class="myvibehtml-password-row"><label for="myvibehtml-password">{password}</label><input id="myvibehtml-password" type="password" autocomplete="current-password" aria-describedby="myvibehtml-auth-status" data-bb=',
            $this->templates['a']
        );
        $this->templates['a'] = str_replace(
            '<p><input type="button" value="{login}" disabled></p>',
            '<p class="myvibehtml-login-row"><input type="button" value="{login}" aria-label="{login}" disabled></p><p class="myvibehtml-auth-hint">{auth_hint}</p>',
            $this->templates['a']
        );
        foreach (['a', 'c', 'd', 'e'] as $templateName) $this->templates[$templateName] = str_replace('</head>', '<link rel="stylesheet" href="{system_url}myvibehtml-theme.css?v={version}"><link rel="stylesheet" href="{system_url}myvibehtml-fallback.css?v={version}"></head>', $this->templates[$templateName]);
        $this->templates['h'] = str_replace('<p><i title="{clone_block}"></i><i title="{move_up_block}"></i><i title="{move_down_block}"></i><i title="{delete_block}"></i><i title="{attributes}"></i></p>', '<p><i title="{clone_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-copy" aria-hidden="true"></span></i><i title="{move_up_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-up" aria-hidden="true"></span></i><i title="{move_down_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-down" aria-hidden="true"></span></i><i title="{delete_block}"><span class="myvibehtml-action-icon myvibehtml-action-icon-close" aria-hidden="true"></span></i><i title="{attributes}"></i></p>', $this->templates['h']);
        $this->state['a'] = $ConstructValue1;
        $this->state['b'] = $this->getSetting(REQUEST_DOCUMENT_ROOT);
        //if (__LINE__ != 1) exit;
        if (!$this->state['b']) $this->state['b'] = $ConstructValue2;
        $this->state['c'] = str_ireplace($this->state['b'], '', $this->state['a']);
        $this->state['d'] = $this->getParentDirectory($ConstructValue1);
        $this->state['e'] = $this->getParentDirectory($this->state['c']);
    }

    private function getConfigPath($GetConfigPathValue1, $GetConfigPathValue2)
    {
        $GetConfigPathValue3 = $GetConfigPathValue1 . self::CONFIG_FILE;
        $GetConfigPathValue4 = myvibehtml_runtime_directory($GetConfigPathValue2);
        if (!$GetConfigPathValue4) return $GetConfigPathValue3;
        $GetConfigPathValue5 = $GetConfigPathValue4 . self::CONFIG_FILE;
        if (!file_exists($GetConfigPathValue5) && !is_link($GetConfigPathValue3) && file_exists($GetConfigPathValue3) && @copy($GetConfigPathValue3, $GetConfigPathValue5)) {
            @chmod($GetConfigPathValue5, 0600);
            @unlink($GetConfigPathValue3);
        }
        if (file_exists($GetConfigPathValue5)) {
            @chmod($GetConfigPathValue5, 0600);
            return $GetConfigPathValue5;
        }
        return $GetConfigPathValue3;
    }

    public function __destruct()
    {
        if ($this->dirty) $this->save();
    }

    public function getLanguage()
    {
        return $this->state['b'];
    }

    public function getEditorDirectory()
    {
        return $this->state['a'];
    }

    public function getSiteUrlBase($GetSiteUrlBaseValue1 = false)
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

    public function getBackupRoot()
    {
        return $this->state['a'] . 'backup/';
    }

    public function getBackupUrl()
    {
        return $this->state['c'] . 'backup/';
    }

    public function getParentDirectory($GetParentDirectoryValue1)
    {
        if (substr_count($GetParentDirectoryValue1, '/') > 2) return dirname($GetParentDirectoryValue1) . '/'; else return '/';
    }

    public function getSetting($GetSettingValue1, $GetSettingValue2 = false)
    {
        if ($GetSettingValue2) {
            if (isset($this->settings[$GetSettingValue2][$GetSettingValue1])) return $this->settings[$GetSettingValue2][$GetSettingValue1];
        } else if (isset($this->settings[$GetSettingValue1])) return $this->settings[$GetSettingValue1];
    }

    public function setSetting($SetSettingValue1, $SetSettingValue2, $SetSettingValue3 = false)
    {
        if ($SetSettingValue3) {
            if (isset($this->settings[$SetSettingValue3])) {
                $this->dirty = true;
                return $this->settings[$SetSettingValue3][$SetSettingValue1] = $SetSettingValue2;
            }
        } else {
            $this->dirty = true;
            return $this->settings[$SetSettingValue1] = $SetSettingValue2;
        }
    }

    private function save()
    {
        $SaveValue1 = [];
        foreach ($this->settings as $SaveValue2 => $SaveValue3) if (!is_array($SaveValue3)) $SaveValue1[] = $SaveValue2 . ' = ' . $SaveValue3 . self::LINE_SEPARATOR . self::LINE_SEPARATOR;
        foreach ($this->settings as $SaveValue2 => $SaveValue3) {
            if (is_array($SaveValue3)) {
                $SaveValue1[] = '[' . $SaveValue2 . ']' . self::LINE_SEPARATOR . self::LINE_SEPARATOR;
                foreach ($SaveValue3 as $SaveValue4 => $SaveValue5) $SaveValue1[] = "\t" . $SaveValue4 . ' = ' . $SaveValue5 . self::LINE_SEPARATOR;
                $SaveValue1[] = self::LINE_SEPARATOR;
            }
        }
        $this->writeFileAtomically($this->configPath, implode('', $SaveValue1), 0600);
    }

    private function writeFileAtomically($WriteFileAtomicallyValue1, $WriteFileAtomicallyValue2, $WriteFileAtomicallyValue3 = 0600)
    {
        return myvibehtml_atomic_write($WriteFileAtomicallyValue1, $WriteFileAtomicallyValue2, $WriteFileAtomicallyValue3, '.myvibehtml-config.lock');
    }

    public function isWritable()
    {
        return is_writable($this->configPath);
    }

    public function getTemplate($GetTemplateValue1)
    {
        if (isset($this->templates[$GetTemplateValue1])) return $this->templates[$GetTemplateValue1];
    }

    public function replacePlaceholders($ReplacePlaceholdersValue1, $ReplacePlaceholdersValue2)
    {
        foreach ($ReplacePlaceholdersValue2 as $ReplacePlaceholdersValue3 => $ReplacePlaceholdersValue4) $ReplacePlaceholdersValue1 = str_ireplace('{' . $ReplacePlaceholdersValue3 . '}', $ReplacePlaceholdersValue4, $ReplacePlaceholdersValue1);
        return $ReplacePlaceholdersValue1;
    }

    public function localizeTemplate($LocalizeTemplateValue1, $LocalizeTemplateValue2)
    {
        preg_match_all('~\{([a-z0-9_]{2,30})\}~i', $LocalizeTemplateValue1, $LocalizeTemplateValue3);
        if ($LocalizeTemplateValue3[1]) {
            $LocalizeTemplateValue3[1] = array_unique($LocalizeTemplateValue3[1]);
            foreach ($LocalizeTemplateValue3[1] as $LocalizeTemplateValue4) if ($LocalizeTemplateValue5 = $this->translate($LocalizeTemplateValue4, $LocalizeTemplateValue2)) $LocalizeTemplateValue1 = str_ireplace('{' . $LocalizeTemplateValue4 . '}', $LocalizeTemplateValue5, $LocalizeTemplateValue1);
        }
        return $LocalizeTemplateValue1;
    }

    public function translate($TranslateValue1, $TranslateValue2)
    {
        if (isset($this->translations[$TranslateValue2][$TranslateValue1])) return $this->translations[$TranslateValue2][$TranslateValue1];
    }
}

final class MyVibeHTMLController
{
    const VERSION = '0.20';
    private $config;
    private $request;
    private $response;
    private $language;
    private $rewriteMode;

    public function __construct($ConstructValue1, $ConstructValue2, $ConstructValue3)
    {
        $this->request = $ConstructValue1;
        $this->response = $ConstructValue2;
        $this->config = $ConstructValue3;
        $this->language = $this->selectLanguage();
        $this->rewriteMode = $this->detectRewriteMode();
    }

    private function normalizeRelativePath($NormalizeRelativePathValue1)
    {
        if (!is_string($NormalizeRelativePathValue1)) return false;
        $NormalizeRelativePathValue1 = rawurldecode(str_replace('\\', '/', $NormalizeRelativePathValue1));
        if (strpos($NormalizeRelativePathValue1, "\0") !== false) return false;
        $NormalizeRelativePathValue2 = [];
        foreach (explode('/', $NormalizeRelativePathValue1) as $NormalizeRelativePathValue3) {
            if ($NormalizeRelativePathValue3 == '' || $NormalizeRelativePathValue3 == '.') continue;
            if ($NormalizeRelativePathValue3 == '..') {
                if (!count($NormalizeRelativePathValue2)) return false;
                array_pop($NormalizeRelativePathValue2);
            } else if (strpos($NormalizeRelativePathValue3, '?') === false && strpos($NormalizeRelativePathValue3, '#') === false) $NormalizeRelativePathValue2[] = $NormalizeRelativePathValue3; else return false;
        }
        return implode('/', $NormalizeRelativePathValue2);
    }

    private function getPublicFileUrl($GetPublicFileUrlValue1)
    {
        $GetPublicFileUrlValue2 = isset($_SERVER['DOCUMENT_ROOT']) ? realpath($_SERVER['DOCUMENT_ROOT']) : false;
        $GetPublicFileUrlValue3 = realpath($GetPublicFileUrlValue1);
        if (!$GetPublicFileUrlValue2 || !$GetPublicFileUrlValue3) {
            $GetPublicFileUrlValue2 = realpath($this->config->getSiteRoot());
            $GetPublicFileUrlValue3 = realpath($GetPublicFileUrlValue1);
        }
        if (!$GetPublicFileUrlValue2 || !$GetPublicFileUrlValue3) return $this->config->getSiteUrl();
        $GetPublicFileUrlValue2 = str_replace('\\', '/', $GetPublicFileUrlValue2);
        $GetPublicFileUrlValue3 = str_replace('\\', '/', $GetPublicFileUrlValue3);
        $GetPublicFileUrlValue4 = rtrim($GetPublicFileUrlValue2, '/') . '/';
        if (strpos($GetPublicFileUrlValue3, $GetPublicFileUrlValue4) !== 0) {
            $GetPublicFileUrlValue2 = str_replace('\\', '/', realpath($this->config->getSiteRoot()));
            $GetPublicFileUrlValue4 = rtrim($GetPublicFileUrlValue2, '/') . '/';
            if (strpos($GetPublicFileUrlValue3, $GetPublicFileUrlValue4) !== 0) return $this->config->getSiteUrl();
        }
        $GetPublicFileUrlValue5 = $this->normalizeRelativePath(substr($GetPublicFileUrlValue3, strlen($GetPublicFileUrlValue4)));
        if ($GetPublicFileUrlValue5 === false || $GetPublicFileUrlValue5 === '') return $this->config->getSiteUrl();
        $GetPublicFileUrlValue6 = array_map('rawurlencode', explode('/', $GetPublicFileUrlValue5));
        return rtrim($this->config->getSiteUrl(), '/') . '/' . implode('/', $GetPublicFileUrlValue6);
    }

    private function getSiteRelativePath($GetSiteRelativePathValue1, $allowEditorBase = false)
    {
        if (!is_string($GetSiteRelativePathValue1)) return false;
        $GetSiteRelativePathValue1 = str_replace('\\', '/', $GetSiteRelativePathValue1);
        if (preg_match('~^(?:[a-z][a-z0-9+.-]*:)?//~i', $GetSiteRelativePathValue1)) {
            $GetSiteRelativePathValue2 = parse_url($GetSiteRelativePathValue1);
            $GetSiteRelativePathValue3 = $this->request->getServer(REQUEST_SERVER_NAME);
            if (!is_array($GetSiteRelativePathValue2) || !isset($GetSiteRelativePathValue2['host']) || !$GetSiteRelativePathValue3 || strcasecmp($GetSiteRelativePathValue2['host'], $GetSiteRelativePathValue3) !== 0 || isset($GetSiteRelativePathValue2['query']) || isset($GetSiteRelativePathValue2['fragment'])) return false;
            $GetSiteRelativePathValue1 = isset($GetSiteRelativePathValue2['path']) ? $GetSiteRelativePathValue2['path'] : '/';
        }
        $GetSiteRelativePathValue2 = str_replace('\\', '/', $this->config->getSiteUrl());
        $GetSiteRelativePathValue3 = str_replace('\\', '/', $this->config->getSiteUrlBase());
        if ($allowEditorBase && $GetSiteRelativePathValue3 !== '' && strpos($GetSiteRelativePathValue1, $GetSiteRelativePathValue3) === 0) return $this->normalizeRelativePath(substr($GetSiteRelativePathValue1, strlen($GetSiteRelativePathValue3)));
        if ($GetSiteRelativePathValue2 === '' || strpos($GetSiteRelativePathValue1, $GetSiteRelativePathValue2) !== 0) return false;
        return $this->normalizeRelativePath(substr($GetSiteRelativePathValue1, strlen($GetSiteRelativePathValue2)));
    }

    private function getSafeSitePath($GetSafeSitePathValue1, $GetSafeSitePathValue2 = false)
    {
        $GetSafeSitePathValue1 = $this->normalizeRelativePath($GetSafeSitePathValue1);
        if ($GetSafeSitePathValue1 === false) return false;
        $GetSafeSitePathValue3 = rtrim(str_replace('\\', '/', $this->config->getSiteRoot()), '/');
        if ($GetSafeSitePathValue3 === '') $GetSafeSitePathValue3 = '/';
        $GetSafeSitePathValue4 = $GetSafeSitePathValue1 === '' ? $GetSafeSitePathValue3 : ($GetSafeSitePathValue3 === '/' ? '/' . $GetSafeSitePathValue1 : $GetSafeSitePathValue3 . '/' . $GetSafeSitePathValue1);
        return $this->isSafeSitePath($GetSafeSitePathValue4, $GetSafeSitePathValue2);
    }

    private function isSafeSitePath($IsSafeSitePathValue1, $IsSafeSitePathValue2 = false)
    {
        $IsSafeSitePathValue3 = realpath($this->config->getSiteRoot());
        if ($IsSafeSitePathValue3 === false) return false;
        $IsSafeSitePathValue3 = rtrim(str_replace('\\', '/', $IsSafeSitePathValue3), '/');
        if ($IsSafeSitePathValue3 === '') $IsSafeSitePathValue3 = '/';
        $IsSafeSitePathValue4 = realpath($IsSafeSitePathValue1);
        if ($IsSafeSitePathValue4 === false) {
            if (!$IsSafeSitePathValue2) return false;
            $IsSafeSitePathValue4 = realpath(dirname($IsSafeSitePathValue1));
        }
        if ($IsSafeSitePathValue4 === false) return false;
        $IsSafeSitePathValue4 = rtrim(str_replace('\\', '/', $IsSafeSitePathValue4), '/');
        if ($IsSafeSitePathValue4 === '') $IsSafeSitePathValue4 = '/';
        if ($IsSafeSitePathValue4 !== $IsSafeSitePathValue3 && strpos($IsSafeSitePathValue4 . '/', $IsSafeSitePathValue3 . '/') !== 0) return false;
        return $IsSafeSitePathValue1;
    }

    private function normalizeUploadFilename($NormalizeUploadFilenameValue1)
    {
        if (!is_string($NormalizeUploadFilenameValue1)) return false;
        $NormalizeUploadFilenameValue1 = rawurldecode(str_replace('\\', '/', $NormalizeUploadFilenameValue1));
        if (strpos($NormalizeUploadFilenameValue1, "\0") !== false) return false;
        $NormalizeUploadFilenameValue1 = basename($NormalizeUploadFilenameValue1);
        if ($NormalizeUploadFilenameValue1 == '' || $NormalizeUploadFilenameValue1 == '.' || $NormalizeUploadFilenameValue1 == '..') return false;
        return $NormalizeUploadFilenameValue1;
    }

    private function escapeHtml($EscapeHtmlValue1)
    {
        return htmlspecialchars((string)$EscapeHtmlValue1, ENT_QUOTES, 'UTF-8');
    }

    public function authenticate()
    {
        $AuthenticateValue1 = $this->request->getCookie(COOKIE_PREFIX . SETTING_SESSION, HASH_ALGORITHM);
        if ($AuthenticateValue1 && $AuthenticateValue1 == $this->config->getSetting(SETTING_SESSION)) $this->dispatch(); else {
            $AuthenticateValue2 = time();
            $AuthenticateValue3 = myvibehtml_unserialize_array(urldecode($this->config->getSetting(SETTING_AUTH_ERROR_LIST)));
            $AuthenticateValue4 = $this->config->getSetting(SETTING_AUTH_ERROR_LIMIT);
            $AuthenticateValue5 = $this->request->getServer(REQUEST_REMOTE_ADDR);
            if ($AuthenticateValue3 && isset($AuthenticateValue3[$AuthenticateValue5])) $AuthenticateValue6 = $AuthenticateValue3[$AuthenticateValue5]; else$AuthenticateValue6 = 0;
            if ($this->request->getPost() && $this->request->getServer(REQUEST_AJAX_HEADER)) {
                $AuthenticateValue7 = $this->request->getPost(SETTING_PASSWORD, HASH_ALGORITHM);
                if ($AuthenticateValue7 && ($AuthenticateValue6 < $AuthenticateValue4 || $this->config->getSetting(SETTING_AUTH_ERROR_TIME) + ($this->config->getSetting(SETTING_AUTH_LOCKOUT_DURATION) * 60) < $AuthenticateValue2)) {
                    $AuthenticateValue8 = $this->config->getSetting(SETTING_PASSWORD);
                    $AuthenticateValue9 = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS) * 1;
                    $AuthenticateValue10 = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY) * 1;
                    $AuthenticateValue11 = $AuthenticateValue10 - $AuthenticateValue9;
                    for ($AuthenticateValue12 = 0; $AuthenticateValue12 < $AuthenticateValue11; $AuthenticateValue12++) $AuthenticateValue7 = sha1($AuthenticateValue7);
                    if ($AuthenticateValue8 == $AuthenticateValue7) {
                        if ($this->config->isWritable()) {
                            $this->createSession();
                            if (isset($AuthenticateValue3[$AuthenticateValue5])) {
                                unset($AuthenticateValue3[$AuthenticateValue5]);
                                $this->config->setSetting(SETTING_AUTH_ERROR_LIST, urlencode(serialize($AuthenticateValue3)));
                            }
                            if ($AuthenticateValue9 < 5) $this->config->setSetting(SETTING_PASSWORD_COMPLEXITY_JS, 15000); else$this->config->setSetting(SETTING_PASSWORD_COMPLEXITY_JS, $AuthenticateValue9 - 1);
                            $this->config->setSetting(SETTING_AUTH_TIME, $AuthenticateValue2);
                            $this->config->setSetting(SETTING_CACHE, '');
                        } else {
                            $this->response->addHeader('X-a:1');
                            $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                        }
                    } else {
                        $this->config->setSetting(SETTING_AUTH_ERROR_TIME, $AuthenticateValue2);
                        $AuthenticateValue3[$AuthenticateValue5] = $AuthenticateValue6 + 1;
                        $this->config->setSetting(SETTING_AUTH_ERROR_LIST, urlencode(serialize($AuthenticateValue3)));
                        $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    }
                } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else {
                if (!$this->config->getSetting(SETTING_AUTH_BOT_FILTER) || $this->request->getServer(REQUEST_ACCEPT_LANGUAGE) && $this->request->getServer(REQUEST_USER_AGENT) && preg_match('~Chrome|Firefox|Opera|Safari|AppleWebKit|Trident|MSIE~i', $this->request->getServer(REQUEST_USER_AGENT))) {
                    if ($AuthenticateValue6 < $AuthenticateValue4 || $this->config->getSetting(SETTING_AUTH_ERROR_TIME) + ($this->config->getSetting(SETTING_AUTH_LOCKOUT_DURATION) * 60) < $AuthenticateValue2) {
                        if ($this->request->getServer(REQUEST_URI) === substr($this->config->getSiteUrlBase(), 0, -1)) throw new Exception($this->config->getSiteUrlBase(), 307);
                        $AuthenticateValue13[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
                        $AuthenticateValue13[PLACEHOLDER_ERROR_LIMIT] = $AuthenticateValue4;
                        $AuthenticateValue13[PLACEHOLDER_ERROR_COUNT] = $AuthenticateValue6;
                        $AuthenticateValue13[SETTING_PASSWORD_COMPLEXITY] = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS);
                        $AuthenticateValue13[PLACEHOLDER_VERSION] = self::VERSION;
                        $AuthenticateValue14 = $this->config->getTemplate('a');
                        $AuthenticateValue14 = $this->config->replacePlaceholders($AuthenticateValue14, $AuthenticateValue13);
                        $AuthenticateValue14 = $this->config->localizeTemplate($AuthenticateValue14, $this->language);
                        $this->response->setBody($AuthenticateValue14);
                    } else throw new Exception(false, 403);
                } else throw new Exception(false, 403);
            }
        }
    }

    public function dispatch()
    {
        $DispatchValue1 = $this->request->getQuery('q');
        $DispatchValue2 = $this->getSafeSitePath($DispatchValue1);
        if (!$DispatchValue1 || !preg_match('~\.[a-z]{2,5}$~i', $DispatchValue1)) {
            if ($this->request->getServer(REQUEST_SCRIPT_FILENAME) != str_replace('\\', '/', __FILE__)) $this->ensureRewriteBase();
            $DispatchValue3 = $this->getSafeSitePath($this->config->getSetting(SETTING_DEFAULT_FILE));
            if (!file_exists($DispatchValue3) && ($DispatchValue4 = $this->findDefaultFile())) throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $DispatchValue4, 307); else throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $this->config->getSetting(SETTING_DEFAULT_FILE), 307);
        }
        $sitePrefix = trim($this->config->getSiteUrlBase(), '/');
        if ($sitePrefix !== '' && stripos($DispatchValue1, $sitePrefix . '/') === 0) throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $this->config->getSetting(SETTING_DEFAULT_FILE), 307);
        if ($this->request->getServer(REQUEST_AJAX_HEADER)) {
            if ($this->request->getPost('reload')) $this->createSession(); else if ($this->request->getPost('logout')) $this->destroySession(); else if (($DispatchValue5 = $this->request->getPost('save')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $DispatchValue5 = str_replace(SAFE_CLOSING_SCRIPT_TAG, CLOSING_SCRIPT_TAG, base64_decode(str_replace('_', 'a', $DispatchValue5)));
                $DispatchValue5 = str_replace(SAFE_SCRIPT_TAG, SCRIPT_TAG, $DispatchValue5);
                if ($DispatchValue2 && $this->isAllowedExtension(strtolower(substr($DispatchValue2, strripos($DispatchValue2, '.') + 1)))) {
                    if ($this->createBackup($DispatchValue1)) {
                        if ($this->writeFileAtomically($DispatchValue2, $DispatchValue5)) {
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
            } else if ($DispatchValue7 = $this->request->getPost('open')) {
                $DispatchValue7 = rawurldecode($DispatchValue7);
                $this->response->setBody($this->renderFileList($DispatchValue7));
            } else if (($DispatchValue7 = $this->request->getPost('upload')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $DispatchValue7 = rawurldecode($DispatchValue7);
                $uploadDirectory = $this->getSiteRelativePath($DispatchValue7);
                $DispatchValue8 = $uploadDirectory === false ? false : $this->getSafeSitePath($uploadDirectory);
                $DispatchValue9 = $this->request->getFile(FILE_CONTENT);
                if (isset($DispatchValue9[FILE_TMP_NAME]) && is_dir($DispatchValue8)) {
                    $uploadOutput = '';
                    $uploadTemplate = $this->config->getTemplate('b');
                    $allowedPattern = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_EDITABLE_EXTENSIONS)));
                    foreach ($DispatchValue9[FILE_TMP_NAME] as $DispatchValue10 => $DispatchValue11) {
                        $uploadName = $this->normalizeUploadFilename($DispatchValue9[FILE_NAME][$DispatchValue10]);
                        if ($uploadName && $this->isAllowedExtension(strtolower(substr($uploadName, strripos($uploadName, '.') + 1)))) {
                            if (!$DispatchValue9[FILE_ERROR][$DispatchValue10]) {
                                $relativeFile = $uploadDirectory === '' ? $uploadName : $uploadDirectory . '/' . $uploadName;
                                $DispatchValue2 = $this->getSafeSitePath($relativeFile, true);
                                if ($DispatchValue2 && $this->createBackup($relativeFile, true) && move_uploaded_file($DispatchValue11, $DispatchValue2)) {
                                    $fileEntry[FILE_NAME] = $this->escapeHtml($uploadName);
                                    $fileEntry[FILE_DATE] = $this->escapeHtml(filemtime($DispatchValue2));
                                    $fileEntry[FILE_SIZE] = $this->escapeHtml(filesize($DispatchValue2));
                                    preg_match('~\.(?:' . $allowedPattern . ')$~i', $uploadName, $extensionMatch);
                                    if (isset($extensionMatch[0])) $fileEntry[FILE_URL] = $this->escapeHtml($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $relativeFile); else$fileEntry[FILE_URL] = $this->escapeHtml($DispatchValue7 . $uploadName);
                                    $uploadOutput .= $this->config->localizeTemplate($this->config->replacePlaceholders($uploadTemplate, $fileEntry), $this->language);
                                } else$DispatchValue12 = true;
                            } else$DispatchValue13 = true;
                        } else$DispatchValue14 = true;
                        if ($uploadOutput !== '') {
                            $this->config->setSetting(SETTING_CACHE, '');
                            $this->response->addHeader('X-c:' . $this->getDirectorySize($DispatchValue7));
                            $this->response->setBody($uploadOutput);
                        }
                        if (isset($DispatchValue14)) $this->response->addHeader('X-d:1'); else if (isset($DispatchValue12)) $this->response->addHeader('X-b:1'); else if (isset($DispatchValue13)) $this->response->addHeader('X-e:1');
                    }
                } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else if (($DispatchValue15 = $this->request->getPost('remove')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $DispatchValue15 = rawurldecode($DispatchValue15);
                $removeRelative = $this->getSiteRelativePath($DispatchValue15, true);
                $DispatchValue2 = $removeRelative === false ? false : $this->getSafeSitePath($removeRelative);
                if ($DispatchValue2 && $this->isAllowedExtension(strtolower(substr($DispatchValue2, strripos($DispatchValue2, '.') + 1)))) {
                    if ($this->createBackup($removeRelative)) {
                        if (is_file($DispatchValue2) && unlink($DispatchValue2)) {
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
            } else if (($DispatchValue15 = $this->request->getPost('replace')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $DispatchValue15 = rawurldecode($DispatchValue15);
                $DispatchValue16 = $this->request->getFile(FILE_CONTENT);
                $replaceName = isset($DispatchValue16[FILE_NAME]) ? $this->normalizeUploadFilename($DispatchValue16[FILE_NAME]) : false;
                $replaceRelative = $this->getSiteRelativePath($DispatchValue15, true);
                $DispatchValue2 = $replaceRelative === false ? false : $this->getSafeSitePath($replaceRelative);
                if (isset($DispatchValue16[FILE_TMP_NAME]) && $DispatchValue16[FILE_ERROR] < 1 && $replaceName && $this->isAllowedExtension(strtolower(substr($replaceName, strripos($replaceName, '.') + 1)))) {
                    if ($DispatchValue2 && file_exists($DispatchValue2)) {
                        if ($this->createBackup($replaceRelative)) {
                            $DispatchValue17 = dirname($DispatchValue2) . '/';
                            $DispatchValue18 = $this->normalizeImageFilename($DispatchValue17, $replaceName);
                            if ($DispatchValue18 && move_uploaded_file($DispatchValue16[FILE_TMP_NAME], $DispatchValue18)) {
                                $this->config->setSetting(SETTING_CACHE, '');
                                $replaceDirectory = dirname($replaceRelative);
                                $replaceDirectory = $this->config->getSiteUrl() . ($replaceDirectory == '.' ? '' : $replaceDirectory . '/');
                                $this->response->setBody($replaceDirectory . basename($DispatchValue18));
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
            } else if (($DispatchValue19 = $this->request->getPost('settings')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                if ($DispatchValue19[SETTING_PASSWORD]) {
                    $DispatchValue20 = $this->config->getSetting(SETTING_PASSWORD);
                    $DispatchValue21 = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY) - $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS);
                    for ($DispatchValue22 = 0; $DispatchValue22 < $DispatchValue21; $DispatchValue22++) $DispatchValue19[SETTING_PASSWORD] = sha1($DispatchValue19[SETTING_PASSWORD]);
                    if ($DispatchValue19[SETTING_PASSWORD] != $DispatchValue20) $this->config->setSetting(SETTING_PASSWORD, $DispatchValue19[SETTING_PASSWORD]);
                }
                if ($DispatchValue19[SETTING_LANGUAGE] && $DispatchValue19[SETTING_LANGUAGE] != $this->language) {
                    if (stripos($DispatchValue23 = $this->config->getSetting(SETTING_LANGUAGE), ',') && stripos($DispatchValue23, $DispatchValue19[SETTING_LANGUAGE]) !== false) {
                        if ($DispatchValue19[SETTING_LANGUAGE] != $this->request->getServer(REQUEST_ACCEPT_LANGUAGE)) $this->response->setCookie(COOKIE_PREFIX . SETTING_LANGUAGE, $DispatchValue19[SETTING_LANGUAGE], time() + 60 * 60 * 24 * 365, $this->config->getSiteUrlBase(), false, false, true); else$this->response->clearCookie(COOKIE_PREFIX . SETTING_LANGUAGE, $this->config->getSiteUrlBase());
                    } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                }
                if ($this->config->getSetting(SETTING_DEFAULT_FILE) !== null && preg_match('~^.{1,30}$~i', $DispatchValue19[SETTING_DEFAULT_FILE], $DispatchValue24) && isset($DispatchValue24[0])) $this->config->setSetting(SETTING_DEFAULT_FILE, $DispatchValue19[SETTING_DEFAULT_FILE]); else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                unset($DispatchValue19[SETTING_PASSWORD], $DispatchValue19[SETTING_LANGUAGE], $DispatchValue19[SETTING_DEFAULT_FILE]);
                foreach ($DispatchValue19 as $DispatchValue10 => $DispatchValue25) {
                    if ($this->config->getSetting($DispatchValue10) !== null && preg_match('~^[0-9]{1,7}$~i', $DispatchValue25, $DispatchValue24) && isset($DispatchValue24[0])) $this->config->setSetting($DispatchValue10, $DispatchValue25); else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                }
            } else if (($DispatchValue7 = $this->request->getPost('recovery')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                $DispatchValue7 = rawurldecode($DispatchValue7);
                $recoveryRelative = $this->getSiteRelativePath($DispatchValue7);
                $DispatchValue8 = $recoveryRelative === false ? false : $this->getSafeSitePath($recoveryRelative);
                if ($DispatchValue8) $DispatchValue8 = rtrim($DispatchValue8, '/') . '/';
                if ($DispatchValue8 && is_dir($DispatchValue8) && is_writable($this->config->getBackupRoot()) && $DispatchValue26 = opendir($DispatchValue8)) {
                    while (($DispatchValue27 = readdir($DispatchValue26)) !== false) {
                        if ($DispatchValue27 != '.' && $DispatchValue27 != '..' && is_file($DispatchValue8 . $DispatchValue27) && !is_link($DispatchValue8 . $DispatchValue27)) {
                            $DispatchValue27 = str_ireplace('ꜜ', '[~]', $DispatchValue27);
                            if (substr($DispatchValue27, 0, 3) == '[~]') {
                                $restoreRelative = $this->normalizeRelativePath(str_ireplace('⁄', '/', substr($DispatchValue27, 3)));
                                $DispatchValue2 = $restoreRelative === false ? false : $this->getSafeSitePath($restoreRelative, true);
                                if ($DispatchValue2 && file_exists($DispatchValue2)) if (!unlink($DispatchValue2)) $DispatchValue28 = true;
                            } else {
                                $restoreRelative = $this->normalizeRelativePath(str_ireplace('⁄', '/', $DispatchValue27));
                                $DispatchValue2 = $restoreRelative === false ? false : $this->getSafeSitePath($restoreRelative, true);
                                if (!$DispatchValue2 || !copy($DispatchValue8 . $DispatchValue27, $DispatchValue2)) $DispatchValue28 = true;
                            }
                            if (!unlink($DispatchValue8 . str_ireplace('[~]', 'ꜜ', $DispatchValue27))) $DispatchValue28 = true;
                        }
                    }
                    closedir($DispatchValue26);
                    $this->config->setSetting(SETTING_CACHE, '');
                    if (!isset($DispatchValue28)) {
                        if (!rmdir($DispatchValue8)) $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                    } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
                } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else if (($DispatchValue29 = $this->request->getPost('scripts')) && ($DispatchValue6 = $this->request->getPost(POST_TOKEN, HASH_ALGORITHM)) && ($DispatchValue6 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN, HASH_ALGORITHM))) {
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                if ($this->config->getSetting(SETTING_SITE_SCRIPTS) !== null) $this->config->setSetting(SETTING_SITE_SCRIPTS, '0'); else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            } else$this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
        } else {
            $this->createSession();
            if (file_exists($DispatchValue2)) {
                $DispatchValue30 = strtolower(substr($DispatchValue2, strripos($DispatchValue2, '.') + 1));
                if ($this->isAllowedExtension($DispatchValue30)) {
                    $DispatchValue31 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_VISUAL_EXTENSIONS)));
                    preg_match('~^' . $DispatchValue31 . '$~i', $DispatchValue30, $DispatchValue24);
                    if (isset($DispatchValue24[0])) {
                        $DispatchValue32 = $this->request->getCookie(COOKIE_PREFIX . QUERY_HTML);
                        $DispatchValue33 = $this->request->getPost('switch');
                        if ($DispatchValue32) {
                            if ($DispatchValue33 === '0') {
                                $this->response->clearCookie(COOKIE_PREFIX . QUERY_HTML, $this->config->getSiteUrlBase());
                                $this->renderVisualEditor($DispatchValue2);
                            } else$this->renderSourceEditor($DispatchValue2);
                        } else {
                            if ($DispatchValue33 === '1') {
                                $this->response->setCookie(COOKIE_PREFIX . QUERY_HTML, 1, time() + 60 * 60 * 24 * 90, $this->config->getSiteUrlBase(), false, false, true);
                                $this->renderSourceEditor($DispatchValue2);
                            } else$this->renderVisualEditor($DispatchValue2);
                        }
                    } else$this->renderSourceEditor($DispatchValue2);
                } else$this->renderErrorPage(HTTP_STATUS_FORBIDDEN);
            } else$this->renderErrorPage(HTTP_STATUS_NOT_FOUND);
        }
    }

    public function renderVisualEditor($RenderVisualEditorValue1)
    {
        $RenderVisualEditorValue2[PLACEHOLDER_TITLE] = $this->config->translate('visual_editor', $this->language);
        $RenderVisualEditorValue2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $RenderVisualEditorValue2[PLACEHOLDER_VERSION] = self::VERSION;
        $RenderVisualEditorValue2[PLACEHOLDER_BASE] = $this->escapeHtml($this->config->getSiteUrl());
        $RenderVisualEditorValue3 = $this->request->getQuery('q');
        if ($RenderVisualEditorValue4 = strripos($RenderVisualEditorValue3, '/')) $RenderVisualEditorValue2[PLACEHOLDER_BASE] .= substr($RenderVisualEditorValue3, 0, $RenderVisualEditorValue4 + 1);
        $RenderVisualEditorValue2['panel'] = $this->renderPanel($RenderVisualEditorValue1);
        $RenderVisualEditorValue2[POST_SOURCE] = $this->switchMode();
        if (!$RenderVisualEditorValue2[POST_SOURCE]) {
            $RenderVisualEditorValue2[POST_SOURCE] = $this->readHtmlFile($RenderVisualEditorValue1);
            $RenderVisualEditorValue2[PLACEHOLDER_IS_EDITED] = '';
        } else$RenderVisualEditorValue2[PLACEHOLDER_IS_EDITED] = '1';
        $RenderVisualEditorValue2[POST_SOURCE] = str_replace('{', '!~!', $RenderVisualEditorValue2[POST_SOURCE]);
        $RenderVisualEditorValue5 = $this->config->getTemplate('c');
        $RenderVisualEditorValue5 = $this->config->replacePlaceholders($RenderVisualEditorValue5, $RenderVisualEditorValue2);
        $RenderVisualEditorValue5 = $this->config->localizeTemplate($RenderVisualEditorValue5, $this->language);
        $RenderVisualEditorValue5 = str_replace('!~!', '{', $RenderVisualEditorValue5);
        $this->response->setBody($RenderVisualEditorValue5);
    }

    public function renderSourceEditor($RenderSourceEditorValue1)
    {
        $RenderSourceEditorValue2[PLACEHOLDER_TITLE] = $this->config->translate('source_editor', $this->language);
        $RenderSourceEditorValue2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $RenderSourceEditorValue2[PLACEHOLDER_VERSION] = self::VERSION;
        $RenderSourceEditorValue2[PLACEHOLDER_REDRAW_DELAY] = $this->config->getSetting(SETTING_CODE_REDRAW_DELAY);
        $RenderSourceEditorValue2[SETTING_CODE_HIGHLIGHTING] = $this->config->getSetting(SETTING_CODE_HIGHLIGHTING);
        $RenderSourceEditorValue2[SETTING_CODE_UNDO_LIMIT] = $this->config->getSetting(SETTING_CODE_UNDO_LIMIT);
        $RenderSourceEditorValue2['panel'] = $this->renderPanel($RenderSourceEditorValue1);
        $RenderSourceEditorValue2[POST_SOURCE] = $this->switchMode();
        if (!$RenderSourceEditorValue2[POST_SOURCE]) {
            $RenderSourceEditorValue2[POST_SOURCE] = $this->readHtmlFile($RenderSourceEditorValue1);
            $RenderSourceEditorValue2[PLACEHOLDER_IS_EDITED] = '';
        } else$RenderSourceEditorValue2[PLACEHOLDER_IS_EDITED] = '1';
        $RenderSourceEditorValue2[POST_SOURCE] = str_replace('{', '!~!', $RenderSourceEditorValue2[POST_SOURCE]);
        $RenderSourceEditorValue3 = $this->config->getTemplate('d');
        $RenderSourceEditorValue3 = $this->config->replacePlaceholders($RenderSourceEditorValue3, $RenderSourceEditorValue2);
        $RenderSourceEditorValue3 = str_replace('!~!', '{', $RenderSourceEditorValue3);
        $this->response->setBody($RenderSourceEditorValue3);
    }

    public function renderErrorPage($RenderErrorPageValue1)
    {
        $RenderErrorPageValue2[PLACEHOLDER_CODE] = $RenderErrorPageValue1;
        $RenderErrorPageValue2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $RenderErrorPageValue2[PLACEHOLDER_VERSION] = self::VERSION;
        $RenderErrorPageValue2['panel'] = $this->renderPanel($RenderErrorPageValue1);
        $RenderErrorPageValue3 = $this->config->getTemplate('e');
        $RenderErrorPageValue3 = $this->config->replacePlaceholders($RenderErrorPageValue3, $RenderErrorPageValue2);
        return $this->config->localizeTemplate($RenderErrorPageValue3, $this->language);
    }

    public function handleException($HandleExceptionValue1)
    {
        $this->response->setStatus($HandleExceptionValue1->getCode(), $this->config->translate($HandleExceptionValue1->getCode(), 'en'));
        if ($HandleExceptionValue2 = $HandleExceptionValue1->getMessage()) $this->response->redirect($HandleExceptionValue2);
        $HandleExceptionValue3[PLACEHOLDER_CODE] = $HandleExceptionValue1->getCode();
        $HandleExceptionValue3[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $HandleExceptionValue3[PLACEHOLDER_VERSION] = self::VERSION;
        $HandleExceptionValue3['panel'] = '';
        $HandleExceptionValue4 = $this->config->getTemplate('e');
        $HandleExceptionValue4 = $this->config->replacePlaceholders($HandleExceptionValue4, $HandleExceptionValue3);
        return $this->response->setBody($this->config->localizeTemplate($HandleExceptionValue4, $this->language));
    }

    private function selectLanguage()
    {
        $SelectLanguageValue1 = $this->config->getSetting(SETTING_LANGUAGE);
        if (stripos($SelectLanguageValue1, ',')) {
            $SelectLanguageValue2 = $this->request->getCookie(COOKIE_PREFIX . SETTING_LANGUAGE);
            if ($SelectLanguageValue2 && stripos($SelectLanguageValue1, $SelectLanguageValue2) !== false) return $SelectLanguageValue2; else {
                $SelectLanguageValue3 = substr((string)$this->request->getServer(REQUEST_ACCEPT_LANGUAGE), 0, 2);
                if ($SelectLanguageValue3 !== '' && stripos($SelectLanguageValue1, $SelectLanguageValue3) !== false) return $SelectLanguageValue3;
            }
        }
        return substr($SelectLanguageValue1, 0, 2);
    }

    private function detectRewriteMode()
    {
        $DetectRewriteModeValue1 = $this->config->getSetting(SETTING_URL_REWRITE);
        if ($DetectRewriteModeValue1 === '1') return 1; else if ($DetectRewriteModeValue1 === '0') return 0; else {
            if ((stripos($this->request->getServer(REQUEST_QUERY_STRING), 'q=') === 0) && (stripos($this->request->getServer(REQUEST_URI), $this->request->getServer(REQUEST_QUERY_STRING)) === false)) return 1; else return 0;
        }
    }

    private function getQueryPrefix()
    {
        if (!$this->rewriteMode) return '?q='; else return '';
    }

    private function findDefaultFile()
    {
        $FindDefaultFileValue1 = $this->config->getSiteRoot();
        if ($FindDefaultFileValue2 = opendir($FindDefaultFileValue1)) {
            $FindDefaultFileValue3 = [];
            $FindDefaultFileValue4 = [];
            $FindDefaultFileValue5 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_VISUAL_EXTENSIONS)));
            $FindDefaultFileValue6 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_EDITABLE_EXTENSIONS)));
            while (($FindDefaultFileValue7 = readdir($FindDefaultFileValue2)) !== false) {
                if ($FindDefaultFileValue7 != '.' && $FindDefaultFileValue7 != '..') {
                    if (is_file($FindDefaultFileValue1 . $FindDefaultFileValue7) && !is_link($FindDefaultFileValue1 . $FindDefaultFileValue7)) {
                        if (preg_match('~^index\.(?:' . $FindDefaultFileValue5 . ')$~i', $FindDefaultFileValue7)) {
                            closedir($FindDefaultFileValue2);
                            return $FindDefaultFileValue7;
                        } else if (preg_match('~\.(?:' . $FindDefaultFileValue5 . ')$~i', $FindDefaultFileValue7)) $FindDefaultFileValue3[] = $FindDefaultFileValue7; else if (preg_match('~\.(?:' . $FindDefaultFileValue6 . ')$~i', $FindDefaultFileValue7)) $FindDefaultFileValue4[] = $FindDefaultFileValue7;
                    }
                }
            }
            closedir($FindDefaultFileValue2);
            if (isset($FindDefaultFileValue3[0])) return $FindDefaultFileValue3[0]; else if (isset($FindDefaultFileValue4[0])) return $FindDefaultFileValue4[0];
        }
    }

    private function ensureRewriteBase()
    {
        $EnsureRewriteBaseValue1 = $this->config->getEditorDirectory() . '.htaccess';
        if (file_exists($EnsureRewriteBaseValue1)) {
            $EnsureRewriteBaseValue2 = file_get_contents($EnsureRewriteBaseValue1);
            preg_match('~RewriteBase (.+?)\n~i', $EnsureRewriteBaseValue2, $EnsureRewriteBaseValue3);
            if (isset($EnsureRewriteBaseValue3[0]) && isset($EnsureRewriteBaseValue3[1])) {
                if ($EnsureRewriteBaseValue3[1] != $this->config->getSiteUrlBase()) {
                    $EnsureRewriteBaseValue2 = str_replace($EnsureRewriteBaseValue3[0], 'RewriteBase ' . $this->config->getSiteUrlBase() . "\n", $EnsureRewriteBaseValue2);
                    $this->writeHtaccess($EnsureRewriteBaseValue2);
                }
            } else {
                $EnsureRewriteBaseValue2 = preg_replace('~(RewriteEngine .+?\n)~i', '$1' . "\n" . 'RewriteBase ' . $this->config->getSiteUrlBase() . "\n", $EnsureRewriteBaseValue2);
                $this->writeHtaccess($EnsureRewriteBaseValue2);
            }
        }
    }

    private function writeHtaccess($WriteHtaccessValue1)
    {
        $this->writeFileAtomically($this->config->getEditorDirectory() . '.htaccess', $WriteHtaccessValue1, 0644);
    }

    private function writeFileAtomically($WriteFileAtomicallyValue1, $WriteFileAtomicallyValue2, $WriteFileAtomicallyValue3 = 0644)
    {
        return myvibehtml_atomic_write($WriteFileAtomicallyValue1, $WriteFileAtomicallyValue2, $WriteFileAtomicallyValue3, '.' . basename($WriteFileAtomicallyValue1) . '.myvibehtml.lock');
    }

    private function copyFileAtomically($CopyFileAtomicallyValue1, $CopyFileAtomicallyValue2)
    {
        if (is_link($CopyFileAtomicallyValue1) || !is_file($CopyFileAtomicallyValue1)) return false;
        $CopyFileAtomicallyValue3 = @fopen($CopyFileAtomicallyValue1, 'rb');
        if (!$CopyFileAtomicallyValue3) return false;
        $CopyFileAtomicallyValue4 = dirname($CopyFileAtomicallyValue2);
        if (!is_dir($CopyFileAtomicallyValue4) || !is_writable($CopyFileAtomicallyValue4)) {
            fclose($CopyFileAtomicallyValue3);
            return false;
        }
        $CopyFileAtomicallyValue5 = tempnam($CopyFileAtomicallyValue4, '.myvibehtml-backup-');
        $CopyFileAtomicallyValue6 = $CopyFileAtomicallyValue5 ? @fopen($CopyFileAtomicallyValue5, 'wb') : false;
        $CopyFileAtomicallyValue7 = false;
        if ($CopyFileAtomicallyValue6) {
            $CopyFileAtomicallyValue8 = true;
            while (!feof($CopyFileAtomicallyValue3) && ($CopyFileAtomicallyValue8 = fread($CopyFileAtomicallyValue3, 8192)) !== false) {
                if ($CopyFileAtomicallyValue8 !== '' && fwrite($CopyFileAtomicallyValue6, $CopyFileAtomicallyValue8) !== strlen($CopyFileAtomicallyValue8)) {
                    $CopyFileAtomicallyValue8 = false;
                    break;
                }
            }
            $CopyFileAtomicallyValue7 = $CopyFileAtomicallyValue8 !== false && feof($CopyFileAtomicallyValue3) && fflush($CopyFileAtomicallyValue6);
            fclose($CopyFileAtomicallyValue6);
        }
        fclose($CopyFileAtomicallyValue3);
        if ($CopyFileAtomicallyValue7) $CopyFileAtomicallyValue7 = @rename($CopyFileAtomicallyValue5, $CopyFileAtomicallyValue2);
        if ($CopyFileAtomicallyValue5 && file_exists($CopyFileAtomicallyValue5)) @unlink($CopyFileAtomicallyValue5);
        return $CopyFileAtomicallyValue7;
    }

    private function createSession()
    {
        $CreateSessionValue1 = sha1(time() . mt_rand());
        $this->config->setSetting(SETTING_SESSION, $CreateSessionValue1);
        $this->response->setCookie(COOKIE_PREFIX . SETTING_SESSION, $CreateSessionValue1, time() + 60 * $this->config->getSetting(SETTING_AUTH_SESSION_RESET), $this->config->getSiteUrlBase(), false, false, true);
    }

    private function destroySession()
    {
        $this->config->setSetting(SETTING_SESSION, '');
        $this->response->clearCookie(COOKIE_PREFIX . SETTING_SESSION, $this->config->getSiteUrlBase());
    }

    private function switchMode()
    {
        $SwitchModeValue1 = $this->request->getPost('switch');
        if (is_numeric($SwitchModeValue1)) {
            $SwitchModeValue2 = $this->request->getPost(POST_SOURCE);
            if ($SwitchModeValue2 && ($SwitchModeValue3 = $this->request->getPost(POST_TOKEN)) && $SwitchModeValue3 == $this->request->getCookie(COOKIE_PREFIX . POST_TOKEN)) {
                $SwitchModeValue2 = base64_decode(str_replace('_', 'a', $SwitchModeValue2));
                $this->response->addHeader('X-f:0');
                $this->response->clearCookie(COOKIE_PREFIX . POST_TOKEN);
                return $SwitchModeValue2;
            }
        }
    }

    private function readHtmlFile($ReadHtmlFileValue1)
    {
        $ReadHtmlFileValue2 = file_get_contents($ReadHtmlFileValue1);
        preg_match('~<meta[^>]+utf-8~i', $ReadHtmlFileValue2, $ReadHtmlFileValue3);
        preg_match('~<meta[^>]+windows-1251~i', $ReadHtmlFileValue2, $ReadHtmlFileValue4);
        if (!isset($ReadHtmlFileValue3[0]) && isset($ReadHtmlFileValue4[0])) {
            $ReadHtmlFileValue2 = preg_replace('~(<meta[^>]+)windows-1251~i', '$1utf-8', $ReadHtmlFileValue2);
            $ReadHtmlFileValue2 = iconv('Windows-1251', 'UTF-8', $ReadHtmlFileValue2);
        }
        $ReadHtmlFileValue2 = str_replace(CLOSING_SCRIPT_TAG, SAFE_CLOSING_SCRIPT_TAG, $ReadHtmlFileValue2);
        return str_replace(SCRIPT_TAG, SAFE_SCRIPT_TAG, $ReadHtmlFileValue2);
    }

    private function isAllowedExtension($IsAllowedExtensionValue1)
    {
        $IsAllowedExtensionValue2 = $this->config->getSetting(SETTING_ALLOWED_EXTENSIONS);
        if (!$IsAllowedExtensionValue2 || preg_match('~(?:^|,\s*)' . $IsAllowedExtensionValue1 . '(?:\s*,|$)~i', $IsAllowedExtensionValue2)) return true;
    }

    private function renderPanel($RenderPanelValue1)
    {
        $RenderPanelValue2[PLACEHOLDER_MODE] = $this->renderFileType($RenderPanelValue1);
        $RenderPanelValue2[PLACEHOLDER_FILE_LIST] = $this->renderSiteStatus();
        $RenderPanelValue2[PLACEHOLDER_SYSTEM_URL] = $this->escapeHtml($this->config->getSiteUrlBase());
        $RenderPanelValue2['site_preview_url'] = $this->escapeHtml($this->getPublicFileUrl($RenderPanelValue1));
        $RenderPanelValue2[PLACEHOLDER_VERSION] = self::VERSION;
        $RenderPanelValue2[REQUEST_UPLOAD_MAX_FILESIZE] = $this->parseSize(ini_get(REQUEST_UPLOAD_MAX_FILESIZE));
        $RenderPanelValue2[REQUEST_MAX_FILE_UPLOADS] = ini_get(REQUEST_MAX_FILE_UPLOADS);
        $RenderPanelValue2[SETTING_PASSWORD_COMPLEXITY] = $this->config->getSetting(SETTING_PASSWORD_COMPLEXITY_JS);
        $RenderPanelValue2[SETTING_AUTH_ERROR_LIMIT] = $this->config->getSetting(SETTING_AUTH_ERROR_LIMIT);
        $RenderPanelValue2[SETTING_AUTH_LOCKOUT_DURATION] = $this->config->getSetting(SETTING_AUTH_LOCKOUT_DURATION);
        $RenderPanelValue2[SETTING_AUTH_SESSION_RESET] = $this->config->getSetting(SETTING_AUTH_SESSION_RESET);
        $RenderPanelValue2[SETTING_LOGOUT_TO_SITE] = $this->config->getSetting(SETTING_LOGOUT_TO_SITE);
        if ($RenderPanelValue2[SETTING_LOGOUT_TO_SITE]) $RenderPanelValue2[SETTING_LOGOUT_TO_SITE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_LOGOUT_TO_SITE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $RenderPanelValue2[SETTING_SITE_SCRIPTS] = $this->config->getSetting(SETTING_SITE_SCRIPTS);
        if ($RenderPanelValue2[SETTING_SITE_SCRIPTS]) $RenderPanelValue2[SETTING_SITE_SCRIPTS . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_SITE_SCRIPTS . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $RenderPanelValue2[SETTING_SITE_STYLES] = $this->config->getSetting(SETTING_SITE_STYLES);
        if ($RenderPanelValue2[SETTING_SITE_STYLES]) $RenderPanelValue2[SETTING_SITE_STYLES . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_SITE_STYLES . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $RenderPanelValue2[SETTING_LINK_REPLACING] = $this->config->getSetting(SETTING_LINK_REPLACING);
        if ($RenderPanelValue2[SETTING_LINK_REPLACING]) $RenderPanelValue2[SETTING_LINK_REPLACING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_LINK_REPLACING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if ($this->config->getSetting(SETTING_NAME_CORRECTION)) $RenderPanelValue2[SETTING_NAME_CORRECTION . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_NAME_CORRECTION . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if ($this->config->getSetting(SETTING_IMAGE_REWRITING)) $RenderPanelValue2[SETTING_IMAGE_REWRITING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_IMAGE_REWRITING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if (!$this->modified) return;
        $RenderPanelValue2[SETTING_CODE_REDRAW_DELAY] = $this->config->getSetting(SETTING_CODE_REDRAW_DELAY);
        $RenderPanelValue2[SETTING_CODE_UNDO_LIMIT] = $this->config->getSetting(SETTING_CODE_UNDO_LIMIT);
        if ($this->config->getSetting(SETTING_CODE_HIGHLIGHTING)) $RenderPanelValue2[SETTING_CODE_HIGHLIGHTING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_CODE_HIGHLIGHTING . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        if ($this->config->getSetting(SETTING_FOLDER_SIZE)) $RenderPanelValue2[SETTING_FOLDER_SIZE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_FOLDER_SIZE . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $RenderPanelValue2[SETTING_DEFAULT_FILE] = $this->escapeHtml($this->config->getSetting(SETTING_DEFAULT_FILE));
        $RenderPanelValue2[SETTING_RECOVERY_POINTS] = $this->config->getSetting(SETTING_RECOVERY_POINTS);
        $RenderPanelValue2[SETTING_UPDATE_FINAL] = $this->config->getSetting(SETTING_UPDATE_FINAL);
        if ($RenderPanelValue2[SETTING_UPDATE_FINAL]) $RenderPanelValue2[SETTING_UPDATE_FINAL . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_UPDATE_FINAL . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $RenderPanelValue2[SETTING_UPDATE_BETA] = $this->config->getSetting(SETTING_UPDATE_BETA);
        if ($RenderPanelValue2[SETTING_UPDATE_BETA]) $RenderPanelValue2[SETTING_UPDATE_BETA . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('f'); else$RenderPanelValue2[SETTING_UPDATE_BETA . TEMPLATE_CHECKBOX_SUFFIX] = $this->config->getTemplate('g');
        $RenderPanelValue2[REQUEST_IP] = $this->escapeHtml($this->request->getServer(REQUEST_REMOTE_ADDR));
        $RenderPanelValue2[REQUEST_SIP] = $this->escapeHtml($this->request->getServer(REQUEST_SERVER_ADDR));
        if (isset($RenderPanelValue2[REQUEST_POST_MAX_SIZE])) $RenderPanelValue2[REQUEST_POST_MAX_SIZE] .= $this->parseSize(ini_get(REQUEST_POST_MAX_SIZE)); else$RenderPanelValue2[REQUEST_POST_MAX_SIZE] = $this->parseSize(ini_get(REQUEST_POST_MAX_SIZE));
        $RenderPanelValue2[LANGUAGE_LIST] = $this->renderLanguageList();
        $RenderPanelValue2[SETTING_EDITABLE_ATTRIBUTES] = $this->escapeHtml(preg_replace('~\s~', '', $this->config->getSetting(SETTING_EDITABLE_ATTRIBUTES)));
        $RenderPanelValue3 = $this->config->getTemplate('h');
        $RenderPanelValue3 = $this->config->replacePlaceholders($RenderPanelValue3, $RenderPanelValue2);
        return $this->config->localizeTemplate($RenderPanelValue3, $this->language);
    }

    private function renderFileType($RenderFileTypeValue1)
    {
        if (is_numeric($RenderFileTypeValue1)) {
            $RenderFileTypeValue2[PLACEHOLDER_TYPE] = $RenderFileTypeValue1;
            $RenderFileTypeValue3 = $this->config->getTemplate('i');
        } else {
            $RenderFileTypeValue4 = strtolower(substr($RenderFileTypeValue1, strripos($RenderFileTypeValue1, '.') + 1));
            $RenderFileTypeValue5 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_VISUAL_EXTENSIONS)));
            preg_match('~^' . $RenderFileTypeValue5 . '$~i', $RenderFileTypeValue4, $RenderFileTypeValue6);
            if (isset($RenderFileTypeValue6[0])) $RenderFileTypeValue3 = $this->config->getTemplate('j'); else$RenderFileTypeValue3 = $this->config->getTemplate('i');
            if ($RenderFileTypeValue4 == 'htm') $RenderFileTypeValue2[PLACEHOLDER_TYPE] = QUERY_HTML; else$RenderFileTypeValue2[PLACEHOLDER_TYPE] = $RenderFileTypeValue4;
        }
        $RenderFileTypeValue2[PLACEHOLDER_TYPE] = $this->escapeHtml($RenderFileTypeValue2[PLACEHOLDER_TYPE]);
        $RenderFileTypeValue3 = $this->config->replacePlaceholders($RenderFileTypeValue3, $RenderFileTypeValue2);
        return $this->config->localizeTemplate($RenderFileTypeValue3, $this->language);
    }

    private function renderLanguageList()
    {
        $RenderLanguageListValue1 = '';
        $RenderLanguageListValue2 = explode(',', $this->config->getSetting(SETTING_LANGUAGE));
        //if (__LINE__ != 1) exit;
        $RenderLanguageListValue3[FILE_NAME] = SETTING_LANGUAGE;
        foreach ($RenderLanguageListValue2 as $RenderLanguageListValue4) {
            $languageValue = trim($RenderLanguageListValue4);
            $RenderLanguageListValue3[FILE_VALUE] = $this->escapeHtml($languageValue);
            if ($this->language == $languageValue) $RenderLanguageListValue5 = $this->config->getTemplate('k'); else$RenderLanguageListValue5 = $this->config->getTemplate('l');
            $RenderLanguageListValue6[FILE_RADIO] = $this->config->replacePlaceholders($RenderLanguageListValue5, $RenderLanguageListValue3);
            $RenderLanguageListValue6[SETTING_LANGUAGE] = $RenderLanguageListValue3[FILE_VALUE];
            $RenderLanguageListValue7 = $this->config->getTemplate('m');
            $RenderLanguageListValue7 = $this->config->replacePlaceholders($RenderLanguageListValue7, $RenderLanguageListValue6);
            $RenderLanguageListValue1 .= $this->config->localizeTemplate($RenderLanguageListValue7, $this->language);
        }
        return $RenderLanguageListValue1;
    }

    private function parseSize($ParseSizeValue1)
    {
        $ParseSizeValue1 = strtolower(trim($ParseSizeValue1));
        $ParseSizeValue2 = (int)$ParseSizeValue1;
        switch ($ParseSizeValue1[strlen($ParseSizeValue1) - 1]) {
            case'm':
                return $ParseSizeValue2 * 1048576;
            case'k':
                return $ParseSizeValue2 * 1024;
            case'g':
                return $ParseSizeValue2 * 1073741824;
            default:
                return $ParseSizeValue2;
        }
    }

    private function renderSiteStatus()
    {
        $RenderSiteStatusValue1 = $this->config->getSiteUrl();
        $RenderSiteStatusValue2 = $this->config->getSiteRoot();
        if ($RenderSiteStatusValue1 == '/') $RenderSiteStatusValue3[FILE_NAME] = $this->escapeHtml($this->request->getServer(REQUEST_SERVER_NAME)); else$RenderSiteStatusValue3[FILE_NAME] = $this->escapeHtml(substr($RenderSiteStatusValue1, strrpos(substr($RenderSiteStatusValue1, 0, -1), '/') + 1, -1));
        $RenderSiteStatusValue3[FILE_DATE] = $this->escapeHtml(filemtime($RenderSiteStatusValue2));
        $RenderSiteStatusValue3[FILE_URL] = $this->escapeHtml($RenderSiteStatusValue1);
        $RenderSiteStatusValue3[FILE_SIZE] = '';
        $RenderSiteStatusValue4 = $this->config->getEditorDirectory();
        if ($RenderSiteStatusValue5 = opendir($RenderSiteStatusValue4)) {
            while (($RenderSiteStatusValue6 = readdir($RenderSiteStatusValue5)) !== false) {
                if ($RenderSiteStatusValue6 != '.' && $RenderSiteStatusValue6 != '..' && is_file($RenderSiteStatusValue4 . $RenderSiteStatusValue6) && !is_link($RenderSiteStatusValue4 . $RenderSiteStatusValue6) && (substr($RenderSiteStatusValue6, 0, strlen('myvibehtml')) == 'myvibehtml' || substr($RenderSiteStatusValue6, 0, 5) == 'index') && ((substr($RenderSiteStatusValue6, -2, -1) == 'h' && filesize($RenderSiteStatusValue4 . $RenderSiteStatusValue6) != 36307) || (substr($RenderSiteStatusValue6, -2, -1) == 'j' && filesize($RenderSiteStatusValue4 . $RenderSiteStatusValue6) != 66258) || (substr($RenderSiteStatusValue6, -3, -2) == 'c' && filesize($RenderSiteStatusValue4 . $RenderSiteStatusValue6) != 42150))) {
                    $RenderSiteStatusValue3[FILE_SIZE] = '0' . $RenderSiteStatusValue3[FILE_SIZE];
                    break;
                }
                $this->modified = true;
            }
            closedir($RenderSiteStatusValue5);
        }
        $RenderSiteStatusValue7 = $this->config->getTemplate('n');
        $RenderSiteStatusValue7 = $this->config->replacePlaceholders($RenderSiteStatusValue7, $RenderSiteStatusValue3);
        return $this->config->localizeTemplate($RenderSiteStatusValue7, $this->language);
    }

    private function renderFileList($RenderFileListValue1)
    {
        $relativeDirectory = $this->getSiteRelativePath($RenderFileListValue1);
        $RenderFileListValue2 = $relativeDirectory === false ? false : $this->getSafeSitePath($relativeDirectory);
        if ($RenderFileListValue2) $RenderFileListValue2 = rtrim($RenderFileListValue2, '/') . '/';
        $RenderFileListValue3 = [];
        $RenderFileListValue4 = [];
        $RenderFileListValue5 = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(SETTING_EDITABLE_EXTENSIONS)));
        if (!$RenderFileListValue2 || !is_dir($RenderFileListValue2)) {
            $this->response->setStatus(404, $this->config->translate(HTTP_STATUS_NOT_FOUND, 'en'));
            return '';
        }
        $currentDirectoryUrl = $this->config->getSiteUrl() . ($relativeDirectory === '' ? '' : $relativeDirectory . '/');
        if ($RenderFileListValue6 = opendir($RenderFileListValue2)) {
            while (($RenderFileListValue7 = readdir($RenderFileListValue6)) !== false) {
                if ($RenderFileListValue7 != '.' && $RenderFileListValue7 != '..') {
                    $RenderFileListValue8 = [];
                    $RenderFileListValue8[FILE_NAME] = $RenderFileListValue7;
                    $RenderFileListValue8[FILE_DATE] = filemtime($RenderFileListValue2 . $RenderFileListValue7);
                    if (is_file($RenderFileListValue2 . $RenderFileListValue7) && !is_link($RenderFileListValue2 . $RenderFileListValue7)) {
                        preg_match('~\.(?:' . $RenderFileListValue5 . ')$~i', $RenderFileListValue7, $RenderFileListValue9);
                        if (isset($RenderFileListValue9[0])) $RenderFileListValue8[FILE_URL] = $this->config->getSiteUrlBase() . $this->getQueryPrefix() . ($relativeDirectory === '' ? '' : $relativeDirectory . '/') . $RenderFileListValue7; else$RenderFileListValue8[FILE_URL] = $currentDirectoryUrl . $RenderFileListValue7;
                        $RenderFileListValue8[FILE_SIZE] = filesize($RenderFileListValue2 . $RenderFileListValue7);
                        $RenderFileListValue4[] = $RenderFileListValue8;
                    } else if (is_dir($RenderFileListValue2 . $RenderFileListValue7) && !is_link($RenderFileListValue2 . $RenderFileListValue7)) {
                        $RenderFileListValue8[FILE_URL] = $currentDirectoryUrl . $RenderFileListValue7 . '/';
                        $RenderFileListValue8[FILE_SIZE] = $this->getDirectorySize($RenderFileListValue8[FILE_URL]);
                        $RenderFileListValue3[] = $RenderFileListValue8;
                    }
                }
            }
            closedir($RenderFileListValue6);
        }
        $RenderFileListValue10 = '';
        if (count($RenderFileListValue3)) {
            $RenderFileListValue3 = $this->sortEntries($RenderFileListValue3);
            $RenderFileListValue11 = $this->config->getTemplate('n');
            $RenderFileListValue12 = $this->config->getTemplate('o');
            foreach ($RenderFileListValue3 as $RenderFileListValue13) {
                $directoryUrl = $RenderFileListValue13[FILE_URL];
                if ($directoryUrl == $this->config->getBackupUrl()) {
                    $RenderFileListValue14 = $RenderFileListValue12;
                    $RenderFileListValue13[FILE_LIST] = $this->renderFileList($directoryUrl);
                } else$RenderFileListValue14 = $RenderFileListValue11;
                $RenderFileListValue13[FILE_NAME] = $this->escapeHtml($RenderFileListValue13[FILE_NAME]);
                $RenderFileListValue13[FILE_DATE] = $this->escapeHtml($RenderFileListValue13[FILE_DATE]);
                $RenderFileListValue13[FILE_URL] = $this->escapeHtml($directoryUrl);
                $RenderFileListValue13[FILE_SIZE] = $this->escapeHtml($RenderFileListValue13[FILE_SIZE]);
                $RenderFileListValue10 .= $this->config->localizeTemplate($this->config->replacePlaceholders($RenderFileListValue14, $RenderFileListValue13), $this->language);
            }
        }
        if (count($RenderFileListValue4)) {
            $RenderFileListValue4 = $this->sortEntries($RenderFileListValue4);
            $RenderFileListValue15 = $this->config->getTemplate('b');
            foreach ($RenderFileListValue4 as $RenderFileListValue16) {
                $RenderFileListValue16[FILE_NAME] = $this->escapeHtml($RenderFileListValue16[FILE_NAME]);
                $RenderFileListValue16[FILE_DATE] = $this->escapeHtml($RenderFileListValue16[FILE_DATE]);
                $RenderFileListValue16[FILE_URL] = $this->escapeHtml($RenderFileListValue16[FILE_URL]);
                $RenderFileListValue16[FILE_SIZE] = $this->escapeHtml($RenderFileListValue16[FILE_SIZE]);
                $RenderFileListValue10 .= $this->config->localizeTemplate($this->config->replacePlaceholders($RenderFileListValue15, $RenderFileListValue16), $this->language);
            }
        }
        if ($RenderFileListValue2 == $this->config->getSiteRoot()) $this->response->addHeader('X-c:' . $this->getDirectorySize($RenderFileListValue1));
        return $RenderFileListValue10;
    }

    private function sortEntries($SortEntriesValue1)
    {
        $SortEntriesValue2 = [];
        $SortEntriesValue3 = [];
        foreach ($SortEntriesValue1 as $SortEntriesValue4) $SortEntriesValue2[] = $SortEntriesValue4[FILE_NAME];
        asort($SortEntriesValue2);
        foreach ($SortEntriesValue2 as $SortEntriesValue5) foreach ($SortEntriesValue1 as $SortEntriesValue4) if ($SortEntriesValue5 == $SortEntriesValue4[FILE_NAME]) $SortEntriesValue3[] = $SortEntriesValue4;
        return $SortEntriesValue3;
    }

    private function getDirectorySize($GetDirectorySizeValue1)
    {
        if ($this->config->getSetting(SETTING_FOLDER_SIZE)) {
            $GetDirectorySizeValue2 = $this->config->getSetting(SETTING_CACHE);
            if (!$GetDirectorySizeValue2) {
                $GetDirectorySizeValue2 = $this->calculateDirectorySizes($this->config->getSiteUrl());
                $this->config->setSetting(SETTING_CACHE, urlencode(serialize($GetDirectorySizeValue2)));
            } else$GetDirectorySizeValue2 = myvibehtml_unserialize_array(urldecode($GetDirectorySizeValue2));
            return $GetDirectorySizeValue2[$GetDirectorySizeValue1];
        } else return '';
    }

    private function calculateDirectorySizes($CalculateDirectorySizesValue1)
    {
        $relativeDirectory = $this->getSiteRelativePath($CalculateDirectorySizesValue1);
        $CalculateDirectorySizesValue2 = $relativeDirectory === false ? false : $this->getSafeSitePath($relativeDirectory);
        if ($CalculateDirectorySizesValue2) $CalculateDirectorySizesValue2 = rtrim($CalculateDirectorySizesValue2, '/') . '/';
        $CalculateDirectorySizesValue3 = [];
        $CalculateDirectorySizesValue3[$CalculateDirectorySizesValue1] = 0;
        if ($CalculateDirectorySizesValue2 && $CalculateDirectorySizesValue4 = opendir($CalculateDirectorySizesValue2)) {
            while (($CalculateDirectorySizesValue5 = readdir($CalculateDirectorySizesValue4)) !== false) {
                if ($CalculateDirectorySizesValue5 != '.' && $CalculateDirectorySizesValue5 != '..') {
                    if (is_file($CalculateDirectorySizesValue2 . $CalculateDirectorySizesValue5) && !is_link($CalculateDirectorySizesValue2 . $CalculateDirectorySizesValue5)) $CalculateDirectorySizesValue3[$CalculateDirectorySizesValue1] += filesize($CalculateDirectorySizesValue2 . $CalculateDirectorySizesValue5); else if (is_dir($CalculateDirectorySizesValue2 . $CalculateDirectorySizesValue5 . '/') && !is_link($CalculateDirectorySizesValue2 . $CalculateDirectorySizesValue5)) {
                        $CalculateDirectorySizesValue6 = $this->calculateDirectorySizes($CalculateDirectorySizesValue1 . $CalculateDirectorySizesValue5 . '/');
                        $CalculateDirectorySizesValue3[$CalculateDirectorySizesValue1] += $CalculateDirectorySizesValue6[$CalculateDirectorySizesValue1 . $CalculateDirectorySizesValue5 . '/'];
                        $CalculateDirectorySizesValue3 = array_merge($CalculateDirectorySizesValue3, $CalculateDirectorySizesValue6);
                    }
                }
            }
            closedir($CalculateDirectorySizesValue4);
        }
        return $CalculateDirectorySizesValue3;
    }

    private function createBackup($CreateBackupValue1, $allowMissing = false)
    {
        $CreateBackupValue1 = $this->normalizeRelativePath($CreateBackupValue1);
        if ($CreateBackupValue1 === false || !$this->getSafeSitePath($CreateBackupValue1, $allowMissing)) return false;
        $CreateBackupValue2 = $this->config->getSetting(SETTING_RECOVERY_POINTS);
        if ($CreateBackupValue2 && $CreateBackupValue2 > 0) {
            $CreateBackupValue3 = $this->config->getBackupRoot();
            if ($this->isSafeSitePath($CreateBackupValue3, true) && (is_dir($CreateBackupValue3) || is_writable($this->config->getEditorDirectory()) && mkdir($CreateBackupValue3))) {
                $CreateBackupValue4 = date('y.m.d.H.i', $this->config->getSetting(SETTING_AUTH_TIME));
                $CreateBackupValue5 = $CreateBackupValue3 . $CreateBackupValue4 . '/';
                if ($this->isSafeSitePath($CreateBackupValue5, true) && (is_dir($CreateBackupValue5) || is_writable($CreateBackupValue3) && mkdir($CreateBackupValue5))) {
                    $this->pruneBackups($CreateBackupValue3, $CreateBackupValue2);
                    if ($CreateBackupValue6 = opendir($CreateBackupValue5)) {
                        $CreateBackupValue7 = $CreateBackupValue5 . str_ireplace('/', '⁄', $CreateBackupValue1);
                        $CreateBackupValue8 = $CreateBackupValue5 . 'ꜜ' . str_ireplace('/', '⁄', $CreateBackupValue1);
                        while (($CreateBackupValue9 = readdir($CreateBackupValue6)) !== false) {
                            $CreateBackupValue10 = $CreateBackupValue5 . $CreateBackupValue9;
                            if ($CreateBackupValue9 != '.' && $CreateBackupValue9 != '..' && !is_link($CreateBackupValue10) && is_file($CreateBackupValue10) && file_exists($CreateBackupValue10) && ($CreateBackupValue10 == $CreateBackupValue7 || $CreateBackupValue10 == $CreateBackupValue8)) return true;
                        }
                        closedir($CreateBackupValue6);
                    }
                    $CreateBackupValue11 = $this->getSafeSitePath($CreateBackupValue1, $allowMissing);
                    if ($CreateBackupValue11 && !is_link($CreateBackupValue11) && file_exists($CreateBackupValue11)) {
                        if ($this->copyFileAtomically($CreateBackupValue11, $CreateBackupValue5 . str_ireplace('/', '⁄', $CreateBackupValue1))) return true;
                    } else if ($this->writeFileAtomically($CreateBackupValue5 . 'ꜜ' . str_ireplace('/', '⁄', $CreateBackupValue1), '', 0600)) return true;
                }
            }
        } else return true;
    }

    private function pruneBackups($PruneBackupsValue1, $PruneBackupsValue2)
    {
        $PruneBackupsValue3 = [];
        if ($PruneBackupsValue4 = opendir($PruneBackupsValue1)) {
            while (($PruneBackupsValue5 = readdir($PruneBackupsValue4)) !== false) if ($PruneBackupsValue5 != '.' && $PruneBackupsValue5 != '..' && is_dir($PruneBackupsValue1 . $PruneBackupsValue5)) array_push($PruneBackupsValue3, $PruneBackupsValue5);
            closedir($PruneBackupsValue4);
        }
        $PruneBackupsValue6 = count($PruneBackupsValue3) - $PruneBackupsValue2;
        if ($PruneBackupsValue6 > 0) {
            asort($PruneBackupsValue3);
            $PruneBackupsValue3 = array_slice($PruneBackupsValue3, 0, $PruneBackupsValue6);
            if ($PruneBackupsValue4 = opendir($PruneBackupsValue1)) {
                while (($PruneBackupsValue5 = readdir($PruneBackupsValue4)) !== false) {
                    if ($PruneBackupsValue5 != '.' && $PruneBackupsValue5 != '..' && is_dir($PruneBackupsValue1 . $PruneBackupsValue5)) {
                        foreach ($PruneBackupsValue3 as $PruneBackupsValue7) {
                            if ($PruneBackupsValue5 == $PruneBackupsValue7) {
                                $PruneBackupsValue8 = $PruneBackupsValue1 . $PruneBackupsValue5 . '/';
                                if ($PruneBackupsValue9 = opendir($PruneBackupsValue8)) while (($PruneBackupsValue10 = readdir($PruneBackupsValue9)) !== false) if ($PruneBackupsValue10 != '.' && $PruneBackupsValue10 != '..') if (!is_file($PruneBackupsValue8 . $PruneBackupsValue10) || !unlink($PruneBackupsValue8 . $PruneBackupsValue10)) $PruneBackupsValue11 = true;
                                closedir($PruneBackupsValue9);
                                if (!isset($PruneBackupsValue11)) rmdir($PruneBackupsValue8); else unset($PruneBackupsValue11);
                            }
                        }
                    }
                }
                closedir($PruneBackupsValue4);
            }
        }
    }

    private function normalizeImageFilename($NormalizeImageFilenameValue1, $NormalizeImageFilenameValue2)
    {
        if (!$this->isSafeSitePath($NormalizeImageFilenameValue1, true)) return false;
        if ($this->config->getSetting(SETTING_NAME_CORRECTION)) {
            preg_match('~\.[a-z0-9]{1,5}$~i', $NormalizeImageFilenameValue2, $NormalizeImageFilenameValue3);
            if (!isset($NormalizeImageFilenameValue3[0])) {
                $NormalizeImageFilenameValue3[1] = $NormalizeImageFilenameValue2;
                $NormalizeImageFilenameValue3[2] = '';
            } else preg_match('~^(.+)(\.[a-z0-9]{1,5})$~i', $NormalizeImageFilenameValue2, $NormalizeImageFilenameValue3);
            $NormalizeImageFilenameValue3[1] = preg_replace('~[^a-z0-9]+~i', '-', $NormalizeImageFilenameValue3[1]);
            $NormalizeImageFilenameValue3[1] = preg_replace('~^-~i', '', $NormalizeImageFilenameValue3[1]);
            $NormalizeImageFilenameValue3[1] = preg_replace('~-$~i', '', $NormalizeImageFilenameValue3[1]);
            if (!preg_match('~[^-]+~i', $NormalizeImageFilenameValue3[1])) $NormalizeImageFilenameValue3[1] = 'image';
            $NormalizeImageFilenameValue2 = $NormalizeImageFilenameValue3[1] . $NormalizeImageFilenameValue3[2];
        }
        $NormalizeImageFilenameValue2 = preg_replace('~[%#]~i', '', $NormalizeImageFilenameValue2);
        $NormalizeImageFilenameValue4 = $NormalizeImageFilenameValue1 . $NormalizeImageFilenameValue2;
        if (!$this->isSafeSitePath($NormalizeImageFilenameValue4, true)) return false;
        if (file_exists($NormalizeImageFilenameValue4)) {
            if (!$this->config->getSetting(SETTING_IMAGE_REWRITING)) {
                preg_match('~\.[a-z0-9]{1,5}$~i', $NormalizeImageFilenameValue4, $NormalizeImageFilenameValue3);
                if (isset($NormalizeImageFilenameValue3[0])) $NormalizeImageFilenameValue5 = preg_replace('~\.([a-z0-9]{1,5})$~i', '{prefix}.$1', $NormalizeImageFilenameValue4); else$NormalizeImageFilenameValue5 = $NormalizeImageFilenameValue4 . '{prefix}';
                for ($NormalizeImageFilenameValue6 = 2; file_exists($NormalizeImageFilenameValue4); $NormalizeImageFilenameValue6++) $NormalizeImageFilenameValue4 = preg_replace('~\{prefix\}~i', '-' . $NormalizeImageFilenameValue6, $NormalizeImageFilenameValue5);
            }
        }
        return $this->isSafeSitePath($NormalizeImageFilenameValue4, true);
    }
}

$request = new MyVibeHTMLRequest();
$response = new MyVibeHTMLResponse($request->getServer(REQUEST_SERVER_PROTOCOL));
$config = new MyVibeHTMLConfig(dirname($request->getServer(REQUEST_SCRIPT_FILENAME)) . '/', $request->getServer(REQUEST_DOCUMENT_ROOT));
$controller = new MyVibeHTMLController($request, $response, $config);
try {
    $controller->authenticate();
} catch (Exception$GlobalValue1) {
    $controller->handleException($GlobalValue1);
}
$response->send(); ?>
