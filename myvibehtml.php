<?php /* MyVibeHTML v2.12e */
function myvibehtml_runtime_directory($a = false)
{
    if (!$a && isset($_SERVER['DOCUMENT_ROOT'])) $a = $_SERVER['DOCUMENT_ROOT'];
    $a = str_replace('\\', '/', (string)$a);
    $b = realpath($a);
    if (!$b || $b === '/') return false;
    $b = rtrim(str_replace('\\', '/', $b), '/');
    $c = dirname($b) . '/.myvibehtml-' . substr(sha1($b), 0, 16) . '/';
    if (is_link(rtrim($c, '/'))) return false;
    if (!is_dir($c)) @mkdir($c, 0700, true);
    if (is_dir($c) && is_writable($c)) {
        @chmod($c, 0700);
        return $c;
    }
    return false;
}
$myvibehtmlRuntimeDirectory = myvibehtml_runtime_directory();
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', $myvibehtmlRuntimeDirectory ? $myvibehtmlRuntimeDirectory . 'error.log' : dirname(__FILE__) . '/error.log');
unset($myvibehtmlRuntimeDirectory);
version_compare(PHP_VERSION, '5.2', '>=') || exit('PHP ' . PHP_VERSION . ' is not supported');
define('a_', 'document_root');
define('b_', 'query_string');
define('c_', 'request_uri');
define('d_', 'php_self');
define('e_', 'http_accept_language');
define('f_', 'http_user_agent');
define('g_', 'remote_addr');
define('h_', 'server_addr');
define('i_', 'script_filename');
define('j_', 'script_name');
define('k_', 'server_name');
define('l_', 'server_protocol');
define('m_', 'lang');
define('n_', 'password');
define('o_', 'session');
define('p_', 'pass_complexity');
define('q_', 'pass_complexity_js');
define('r_', 'auth_time');
define('s_', 'auth_error_time');
define('t_', 'auth_error_list');
define('u_', 'auth_error_limit');
define('v_', 'auth_lockout_duration');
define('w_', 'auth_session_reset');
define('x_', 'auth_bot_filter');
define('y_', 'code_redraw_delay');
define('z_', 'code_undo_limit');
define('A_', 'code_highlighting');
define('_s', 'visual_ext');
define('B_', 'allowed_ext');
define('C_', 'editable_ext');
define('_P', 'editable_attributes');
define('D_', 'default_file');
define('_Q', 'folder_size');
define('E_', 'document_root');
define('F_', 'url_rewrite');
define('G_', 'logout_to_site');
define('H_', 'link_replacing');
define('I_', 'image_rewriting');
define('_R', 'name_correction');
define('J_', 'recovery_points');
define('K_', 'site_scripts');
define('L_', 'site_styles');
define('M_', 'update_final');
define('N_', 'update_beta');
define('O_', 'cache');
define('_r', 'filelist');
define('P_', 'system_url');
define('Q_', 'error_limit');
define('R_', 'error_count');
define('S_', 'redraw_delay');
define('T_', 'mode');
define('U_', 'type');
define('V_', 'base');
define('W_', 'code');
define('X_', 'title');
define('Y_', 'version');
define('Z_', 'is_edited');
define('_a', 'post_max_size');
define('_b', 'upload_max_filesize');
define('_c', 'max_file_uploads');
define('_d', '_checkbox');
define('_m', 'http_ajax');
define('_n', 'source');
define('_o', 'token');
define('_p', 'sha1');
define('_q', 'html');
define('_t', '404');
define('_u', '403');
define('_v', 'ip');
define('_w', 'sip');
define('_x', 'url');
define('_y', 'name');
define('_z', 'date');
define('_A', 'size');
define('_B', 'list');
define('_C', 'file');
define('_D', 'error');
define('_E', 'value');
define('_F', 'radio');
define('_G', 'tmp_name');
define('_H', 'language_list');
define('_I', '<script');
define('_J', '<_cript');
define('_K', '</script');
define('_L', '</_cript');
define('_M', '</body>');
define('_N', '<!--~~?');
define('_O', '?~~-->');
define('__', 'myvibehtml_');

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

    public function getQuery($a)
    {
        if (isset($this->cache['a'][$a])) return $this->cache['a'][$a]; else if (isset($this->raw['a'][$a])) return $this->cache['a'][$a] = $this->filter($this->raw['a'][$a], $a);
    }

    public function getPost($a = false)
    {
        if ($a) {
            if (isset($this->cache['b'][$a])) return $this->cache['b'][$a]; else if (isset($this->raw['b'][$a])) return $this->cache['b'][$a] = $this->filter($this->raw['b'][$a], $a);
        } else if (count($this->raw['b'])) return true;
    }

    public function getServer($a)
    {
        if (isset($this->cache['c'][$a])) return $this->cache['c'][$a]; else {
            $b = strtoupper($a);
            if (isset($this->raw['c'][$b])) return $this->cache['c'][$a] = $this->filter($this->raw['c'][$b], $a);
        }
    }

    public function getCookie($a)
    {
        if (isset($this->cache['d'][$a])) return $this->cache['d'][$a]; else if (isset($this->raw['d'][$a])) return $this->cache['d'][$a] = $this->filter($this->raw['d'][$a], $a);
    }

    public function getFile($a)
    {
        if (isset($this->raw['e'][$a])) return $this->raw['e'][$a];
    }

    private function filter($a, $b)
    {
        $c = '_' . $b;
        if (method_exists($this, $c)) return $this->$c($a); else return $a;
    }

    private function _server_protocol($a)
    {
        preg_match('~^[a-z]{4,5}/[0-9]\.[0-9]$~i', $a, $b);
        if (isset($b[0])) return $b[0];
    }

    private function _server_name($a)
    {
        preg_match('~^[a-z0-9-_.]{2,300}$~i', $a, $b);
        if (isset($b[0])) return $b[0];
    }

    private function _script_filename($a)
    {
        $b = str_replace('\\', '/', __FILE__);
        if (stripos($b, $this->raw['c'][strtoupper(a_)]) === 0) return $b; else return str_replace('\\', '/', $a);
    }

    private function _document_root($a)
    {
        $a = str_replace('\\', '/', $a);
        $b = $this->getServer(i_);
        $c = $this->getServer(d_);
        $d = $this->getServer(j_);
        //if (__LINE__ != 1) exit;
        if (stripos($b, $c) > 0) $e = str_ireplace($c, '', $b);
        if (stripos($b, $d) > 0) $f = str_ireplace($d, '', $b);
        if (isset($e)) {
            if (isset($f)) {
                if (strlen($e) > strlen($f)) $g = $e; else$g = $f;
            } else$g = $e;
        } else if (isset($f)) $g = $f; else$g = $a;
        if (stripos($b, $a) === 0) {
            if (strlen($g) > strlen($a)) $a = $g;
        } else$a = $g;
        if (substr($a, -1) == '/') return substr($a, 0, -1);
        return $a;
    }

    private function _php_self($a)
    {
        return str_replace('\\', '/', $a);
    }

    private function _script_name($a)
    {
        return str_replace('\\', '/', $a);
    }

    private function _query_string($a)
    {
        return str_replace('\\', '/', $a);
    }

    private function _remote_addr($a)
    {
        return $this->_ip($a);
    }

    private function _server_addr($a)
    {
        return $this->_ip($a);
    }

    private function _ip($a)
    {
        preg_match('~^[a-z0-9.:]{1,40}$~i', $a, $b);
        if (isset($b[0])) return $b[0];
    }

    private function _sha1($a)
    {
        preg_match('~^[a-z0-9]{40}$~i', $a, $b);
        if (isset($b[0])) return $b[0];
    }
}

final class MyVibeHTMLResponse
{
    private $protocol;
    private $headers;
    private $cookies;
    private $body;

    public function __construct($a)
    {
        $this->protocol = $a;
        $this->addHeader('Content-type:text/html;charset=utf-8');
        $this->addHeader('X-Content-Type-Options:nosniff');
        $this->addHeader('X-Frame-Options:SAMEORIGIN');
        $this->addHeader('Referrer-Policy:no-referrer');
        $this->addHeader('Permissions-Policy:camera=(), microphone=(), geolocation=()');
    }

    public function addHeader($a)
    {
        return $this->headers[] = $a;
    }

    public function setStatus($a, $b)
    {
        return $this->headers[] = $this->protocol . ' ' . $a . ' ' . $b;
    }

    public function redirect($a)
    {
        return $this->headers[] = 'Location:' . $a;
    }

    public function setCookie($a, $b = false, $c = false, $d = false, $e = false, $f = false, $g = false)
    {
        $h['a'] = $a;
        $h['b'] = $b;
        $h['c'] = $g;
        $h['d'] = (int)$c;
        $h['e'] = str_replace('%2F', '/', urlencode($d));
        $h['f'] = $e;
        $h['g'] = (int)$f;
        $this->cookies[] = $h;
    }

    public function clearCookie($a, $b = false, $c = false)
    {
        $this->setCookie($a, '', time() - 60 * 60, $b, $c);
    }

    public function setBody($a)
    {
        return $this->body = $a;
    }

    public function send()
    {
        //if (__LINE__ != 1) exit;
        if (isset($this->headers)) foreach ($this->headers as $a) header($a);
        if (isset($this->cookies)) foreach ($this->cookies as $b) {
            $d = $b['g'] || (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) != 'off' && $_SERVER['HTTPS'] !== '');
            $e = $b['e'] ? $b['e'] : '/';
            if (version_compare(PHP_VERSION, '7.3', '>=')) setcookie($b['a'], $b['b'], ['expires' => $b['d'], 'path' => $e, 'domain' => $b['f'] ? $b['f'] : '', 'secure' => (bool)$d, 'httponly' => (bool)$b['c'], 'samesite' => 'Lax']);
            else setcookie($b['a'], $b['b'], $b['d'], $e, $b['f'], $d, $b['c']);
        }
        if (isset($this->body)) print $this->body;
    }
}

final class MyVibeHTMLConfig
{
    const a = "\n";
    const b = 'lang.ini';
    const c = 'conf.ini';
    private $state;
    private $b;
    private $translations;
    private $settings;
    private $templates;
    private $dirty;
    private $configPath;

    public function __construct($a, $b)
    {
        $this->translations = parse_ini_file($a . self::b, true);
        $this->configPath = $this->getConfigPath($a, $b);
        $this->settings = parse_ini_file($this->configPath, true);
        $this->templates = [
            'j' => '<ol><li title="{source_editor}">{type}</li><li title="{visual_editor}">text</li></ol>',
            'i' => '<ol><li>{type}</li></ol>',
            'h' => '<div id="e"><div><div><h1><a href="//textolite.ru/">MyVibeHTML</a> v{version}</h1><p>{extended}</p></div>{mode}<ul><li><a title="{files}">{files}</a><div id="f"><ol><li>{file_name}</li><li>{file_size}</li><li>{file_changed}</li><li>{file_menu}</li></ol><ul>{filelist}</ul></div></li><li><a title="{settings}">{settings}</a><div id="g"><fieldset><legend>{auth}</legend><dl><dt title="{new_password}">{new_password}:</dt><dd><input type="password" maxlength="14"><a></a></dd><dt title="{auth_error_limit_desc}">{login_attempts}:</dt><dd data-aa="5"><input type="text" maxlength="2" value="{auth_error_limit}"></dd><dt title="{auth_lockout_duration_desc}">{lockout_duration}:</dt><dd data-aa="1"><input type="text" maxlength="7" value="{auth_lockout_duration}"></dd><dt title="{auth_session_reset_desc}">{session_autoreset}:</dt><dd data-aa="60"><input type="text" maxlength="7" value="{auth_session_reset}"></dd><dd title="{logout_to_site_desc}" data-aa="0"><label>{logout_to_site_checkbox}<em></em>{redirect_to_site}</label></dd></dl></fieldset><fieldset><legend>{visual_editor}</legend><dl><dd title="{site_scripts_desc}" data-aa="1"><label>{site_scripts_checkbox}<em></em>{enable_scripts}</label></dd><dd title="{site_styles_desc}" data-aa="1"><label>{site_styles_checkbox}<em></em>{enable_styles}</label></dd><dd title="{link_replacing_desc}" data-aa="1"><label>{link_replacing_checkbox}<em></em>{change_links}</label></dd><dd title="{name_correction_desc}" data-aa="1"><label>{name_correction_checkbox}<em></em>{remove_symbols}</label></dd><dd title="{image_rewriting_desc}" data-aa="0"><label>{image_rewriting_checkbox}<em></em>{rewrite_file}</label></dd></dl></fieldset><fieldset><legend>{source_editor}</legend><dl><dt title="{code_redraw_delay_desc}">{redraw_delay}:</dt><dd data-aa="200"><input type="text" maxlength="7" value="{code_redraw_delay}"></dd><dt title="{code_undo_limit_desc}">{steps_for_undo}:</dt><dd data-aa="50"><input type="text" maxlength="3" value="{code_undo_limit}"></dd><dd title="{code_highlighting_desc}" data-aa="1"><label>{code_highlighting_checkbox}<em></em>{enable_highlighting}</label></dd></dl></fieldset><fieldset><legend>{file_manager}</legend><dl><dd title="{folder_size_desc}" data-aa="1"><label>{folder_size_checkbox}<em></em>{display_catalog_size}</label></dd></dl></fieldset><fieldset><legend>{system}</legend><dl><dt title="{default_file_desc}">{main_page_or_file}:</dt><dd data-aa="index.html"><input type="text" maxlength="30" value="{default_file}"></dd><dt title="{recovery_points_desc}">{number_of_recovery_point}:</dt><dd data-aa="5"><input type="text" maxlength="2" value="{recovery_points}"></dd><dd title="{new_version_notify}" data-aa="1"><label>{update_final_checkbox}<em></em>{new_version_notify}</label></dd><dd title="{beta_version_notify}" data-aa="0"><label>{update_beta_checkbox}<em></em>{beta_version_notify}</label></dd><dt title="{language}">{language}:</dt><dd><ul>{language_list}</ul></dd></dl></fieldset><p><input type="button" value="{save}" disabled><a title="{restore_settings}"></a></p></div></li></ul><div><ul data-ab="<li>{tagname}<i><i></i></i></li>"></ul><p><i title="{clone_block}"></i><i title="{move_up_block}"></i><i title="{move_down_block}"></i><i title="{delete_block}"></i><i title="{attributes}"></i></p><div><fieldset><legend>{attributes}</legend><dl><script type="text/template"><dt><input type="text" value="{name}" disabled></dt><dd><input type="text" value="{value}"></dd></script></dl></fieldset></div></div><ul><li><input type="button" value="{save}" title="{save}" disabled></li><li><input type="button" value="{logout}" title="{logout}" disabled data-ac="{not_save}"></li></ul><p><samp data-ad="{saving}" data-ae="{saved}" data-af="{not_saved}" data-ag="{reset_session}" data-ah="{access_closed}" data-ai="{login_again}" data-aj="{request_rejected}" data-ak="{request_blocked}" data-al="{no_response}" data-am="{not_writable}" data-an="{old_browser}" data-ao="{new_version}" data-ap="{need_update}" data-aq="{install}" data-ar="{not_install}" data-as="{download_installer}" data-at="{system_update}" data-au="{update_error}" data-av="{install_complete}" data-aw="{activation_complete}" data-ax="{attachment_domain}" data-ay="{no_connect}" data-az="{password_hashing}" data-bb="{pass_complexity}" data-bc="{uploading}" data-bd="{uploading_complete}" data-be="{uploading_error}" data-bf="{extension_error}" data-bg="{count_limit}" data-bh="{size_limit}" data-bi="{file_deletion}" data-bj="{file_deleted}" data-bk="{deletion_error}" data-bl="{file_recovery}" data-bm="{recovery_success}" data-bn="{recovery_error}" data-bo="{backup_error}" data-bp="{file_replacing}" data-bq="{incorrect_link}" data-br="{unknown_relation}" data-bs="{element_busy}" data-bt="{disable_script}" data-bu="{disable}" data-bv="{disabling_scripts}" data-bw="{scripts_disabled}" data-bx="{show_password}" data-by="{hide_password}" data-bz="{post_max_size}" data-bA="{upload_max_filesize}" data-cc="{max_file_uploads}" data-cd="{editable_attributes}" data-ce="{auth_session_reset}" data-cf="{link_replacing}" data-cg="{site_scripts}" data-ch="{site_styles}" data-ci="{logout_to_site}" data-cj="{ip}" data-ck="{sip}" data-cl="{system_url}" data-cm="{version}" data-cn="{update_final}" data-co="{update_beta}"></samp><noscript><samp>{requires_javascript}</samp></noscript><i></i></p></div></div><script src="{system_url}myvibehtml.js?v={version}"></script>',
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
        $this->state['a'] = $a;
        $this->state['b'] = $this->getSetting(a_);
        //if (__LINE__ != 1) exit;
        if (!$this->state['b']) $this->state['b'] = $b;
        $this->state['c'] = str_ireplace($this->state['b'], '', $this->state['a']);
        $this->state['d'] = $this->getParentDirectory($a);
        $this->state['e'] = $this->getParentDirectory($this->state['c']);
    }

    private function getConfigPath($a, $b)
    {
        $c = $a . self::c;
        $d = myvibehtml_runtime_directory($b);
        if (!$d) return $c;
        $e = $d . self::c;
        if (!file_exists($e) && file_exists($c) && @copy($c, $e)) {
            @chmod($e, 0600);
            @unlink($c);
        }
        if (file_exists($e)) {
            @chmod($e, 0600);
            return $e;
        }
        return $c;
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

    public function getSiteUrlBase($a = false)
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

    public function getParentDirectory($a)
    {
        if (substr_count($a, '/') > 2) return dirname($a) . '/'; else return '/';
    }

    public function getSetting($a, $b = false)
    {
        if ($b) {
            if (isset($this->settings[$b][$a])) return $this->settings[$b][$a];
        } else if (isset($this->settings[$a])) return $this->settings[$a];
    }

    public function setSetting($a, $b, $c = false)
    {
        if ($c) {
            if (isset($this->settings[$c])) {
                $this->dirty = true;
                return $this->settings[$c][$a] = $b;
            }
        } else {
            $this->dirty = true;
            return $this->settings[$a] = $b;
        }
    }

    private function save()
    {
        foreach ($this->settings as $a => $b) if (!is_array($b)) $c[] = $a . ' = ' . $b . self::a . self::a;
        foreach ($this->settings as $a => $b) {
            if (is_array($b)) {
                $c[] = '[' . $a . ']' . self::a . self::a;
                foreach ($b as $d => $e) $c[] = "\t" . $d . ' = ' . $e . self::a;
                $c[] = self::a;
            }
        }
        if ($f = fopen($this->configPath, 'w')) {
            flock($f, LOCK_EX);
            fwrite($f, implode('', $c));
            flock($f, LOCK_UN);
            fclose($f);
            @chmod($this->configPath, 0600);
        }
    }

    public function isWritable()
    {
        return is_writable($this->configPath);
    }

    public function getTemplate($a)
    {
        if (isset($this->templates[$a])) return $this->templates[$a];
    }

    public function replacePlaceholders($a, $b)
    {
        foreach ($b as $c => $d) $a = str_ireplace('{' . $c . '}', $d, $a);
        return $a;
    }

    public function localizeTemplate($a, $b)
    {
        preg_match_all('~\{([a-z0-9_]{2,30})\}~i', $a, $c);
        if ($c[1]) {
            $c[1] = array_unique($c[1]);
            foreach ($c[1] as $d) if ($e = $this->translate($d, $b)) $a = str_ireplace('{' . $d . '}', $e, $a);
        }
        return $a;
    }

    public function translate($a, $b)
    {
        if (isset($this->translations[$b][$a])) return $this->translations[$b][$a];
    }
}

final class MyVibeHTMLController
{
    const a = '2.12e';
    private $config;
    private $request;
    private $response;
    private $language;
    private $rewriteMode;

    public function __construct($a, $b, $c)
    {
        $this->request = $a;
        $this->response = $b;
        $this->config = $c;
        $this->language = $this->selectLanguage();
        $this->rewriteMode = $this->detectRewriteMode();
    }

    private function normalizeRelativePath($a)
    {
        if (!is_string($a)) return false;
        $a = rawurldecode(str_replace('\\', '/', $a));
        if (strpos($a, "\0") !== false) return false;
        $b = [];
        foreach (explode('/', $a) as $c) {
            if ($c == '' || $c == '.') continue;
            if ($c == '..') {
                if (!count($b)) return false;
                array_pop($b);
            } else if (strpos($c, '?') === false && strpos($c, '#') === false) $b[] = $c; else return false;
        }
        return implode('/', $b);
    }

    private function getSiteRelativePath($a, $allowEditorBase = false)
    {
        if (!is_string($a)) return false;
        $a = str_replace('\\', '/', $a);
        if (preg_match('~^(?:[a-z][a-z0-9+.-]*:)?//~i', $a)) {
            $b = parse_url($a);
            $c = $this->request->getServer(k_);
            if (!is_array($b) || !isset($b['host']) || !$c || strcasecmp($b['host'], $c) !== 0 || isset($b['query']) || isset($b['fragment'])) return false;
            $a = isset($b['path']) ? $b['path'] : '/';
        }
        $b = str_replace('\\', '/', $this->config->getSiteUrl());
        $c = str_replace('\\', '/', $this->config->getSiteUrlBase());
        if ($allowEditorBase && $c !== '' && strpos($a, $c) === 0) return $this->normalizeRelativePath(substr($a, strlen($c)));
        if ($b === '' || strpos($a, $b) !== 0) return false;
        return $this->normalizeRelativePath(substr($a, strlen($b)));
    }

    private function getSafeSitePath($a, $b = false)
    {
        $a = $this->normalizeRelativePath($a);
        if ($a === false) return false;
        $c = rtrim(str_replace('\\', '/', $this->config->getSiteRoot()), '/');
        if ($c === '') $c = '/';
        $d = $a === '' ? $c : ($c === '/' ? '/' . $a : $c . '/' . $a);
        return $this->isSafeSitePath($d, $b);
    }

    private function isSafeSitePath($a, $b = false)
    {
        $c = realpath($this->config->getSiteRoot());
        if ($c === false) return false;
        $c = rtrim(str_replace('\\', '/', $c), '/');
        if ($c === '') $c = '/';
        $d = realpath($a);
        if ($d === false) {
            if (!$b) return false;
            $d = realpath(dirname($a));
        }
        if ($d === false) return false;
        $d = rtrim(str_replace('\\', '/', $d), '/');
        if ($d === '') $d = '/';
        if ($d !== $c && strpos($d . '/', $c . '/') !== 0) return false;
        return $a;
    }

    private function normalizeUploadFilename($a)
    {
        if (!is_string($a)) return false;
        $a = rawurldecode(str_replace('\\', '/', $a));
        if (strpos($a, "\0") !== false) return false;
        $a = basename($a);
        if ($a == '' || $a == '.' || $a == '..') return false;
        return $a;
    }

    private function escapeHtml($a)
    {
        return htmlspecialchars((string)$a, ENT_QUOTES, 'UTF-8');
    }

    public function authenticate()
    {
        $a = $this->request->getCookie(__ . o_, _p);
        if ($a && $a == $this->config->getSetting(o_)) $this->dispatch(); else {
            $b = time();
            $c = unserialize(urldecode($this->config->getSetting(t_)));
            $d = $this->config->getSetting(u_);
            $e = $this->request->getServer(g_);
            if ($c && isset($c[$e])) $f = $c[$e]; else$f = 0;
            if ($this->request->getPost() && $this->request->getServer(_m)) {
                $g = $this->request->getPost(n_, _p);
                if ($g && ($f < $d || $this->config->getSetting(s_) + ($this->config->getSetting(v_) * 60) < $b)) {
                    $h = $this->config->getSetting(n_);
                    $i = $this->config->getSetting(q_) * 1;
                    $j = $this->config->getSetting(p_) * 1;
                    $k = $j - $i;
                    for ($l = 0; $l < $k; $l++) $g = sha1($g);
                    if ($h == $g) {
                        if ($this->config->isWritable()) {
                            $this->createSession();
                            if (isset($c[$e])) {
                                unset($c[$e]);
                                $this->config->setSetting(t_, urlencode(serialize($c)));
                            }
                            if ($i < 5) $this->config->setSetting(q_, 15000); else$this->config->setSetting(q_, $i - 1);
                            $this->config->setSetting(r_, $b);
                            $this->config->setSetting(O_, '');
                        } else {
                            $this->response->addHeader('X-a:1');
                            $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                        }
                    } else {
                        $this->config->setSetting(s_, $b);
                        $c[$e] = $f + 1;
                        $this->config->setSetting(t_, urlencode(serialize($c)));
                        $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                    }
                } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
            } else {
                if (!$this->config->getSetting(x_) || $this->request->getServer(e_) && $this->request->getServer(f_) && preg_match('~Chrome|Firefox|Opera|Safari|AppleWebKit|Trident|MSIE~i', $this->request->getServer(f_))) {
                    if ($f < $d || $this->config->getSetting(s_) + ($this->config->getSetting(v_) * 60) < $b) {
                        if ($this->request->getServer(c_) === substr($this->config->getSiteUrlBase(), 0, -1)) throw new Exception($this->config->getSiteUrlBase(), 307);
                        $m[P_] = $this->escapeHtml($this->config->getSiteUrlBase());
                        $m[Q_] = $d;
                        $m[R_] = $f;
                        $m[p_] = $this->config->getSetting(q_);
                        $m[Y_] = self::a;
                        $n = $this->config->getTemplate('a');
                        $n = $this->config->replacePlaceholders($n, $m);
                        $n = $this->config->localizeTemplate($n, $this->language);
                        $this->response->setBody($n);
                    } else throw new Exception(false, 403);
                } else throw new Exception(false, 403);
            }
        }
    }

    public function dispatch()
    {
        $aa = $this->request->getQuery('q');
        $ab = $this->getSafeSitePath($aa);
        if (!$aa || !preg_match('~\.[a-z]{2,5}$~i', $aa)) {
            if ($this->request->getServer(i_) != str_replace('\\', '/', __FILE__)) $this->ensureRewriteBase();
            $ac = $this->getSafeSitePath($this->config->getSetting(D_));
            if (!file_exists($ac) && ($ad = $this->findDefaultFile())) throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $ad, 307); else throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $this->config->getSetting(D_), 307);
        }
        $sitePrefix = trim($this->config->getSiteUrlBase(), '/');
        if ($sitePrefix !== '' && stripos($aa, $sitePrefix . '/') === 0) throw new Exception($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $this->config->getSetting(D_), 307);
        if ($this->request->getServer(_m)) {
            if ($this->request->getPost('reload')) $this->createSession(); else if ($this->request->getPost('logout')) $this->destroySession(); else if (($ae = $this->request->getPost('save')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                $ae = str_replace(_L, _K, base64_decode(str_replace('_', 'a', $ae)));
                $ae = str_replace(_J, _I, $ae);
                if ($ab && $this->isAllowedExtension(strtolower(substr($ab, strripos($ab, '.') + 1)))) {
                    if ($this->createBackup($aa)) {
                        if (is_writable($ab) && $ag = fopen($ab, 'w')) {
                            flock($ag, LOCK_EX);
                            fwrite($ag, $ae);
                            flock($ag, LOCK_UN);
                            fclose($ag);
                            $this->config->setSetting(O_, '');
                        } else {
                            $this->response->addHeader('X-a:1');
                            $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                        }
                    } else {
                        $this->response->addHeader('X-b:1');
                        $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                    }
                } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
            } else if ($ah = $this->request->getPost('open')) {
                $ah = rawurldecode($ah);
                $this->response->setBody($this->renderFileList($ah));
            } else if (($ah = $this->request->getPost('upload')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                $ah = rawurldecode($ah);
                $uploadDirectory = $this->getSiteRelativePath($ah);
                $ai = $uploadDirectory === false ? false : $this->getSafeSitePath($uploadDirectory);
                $aj = $this->request->getFile(_C);
                if (isset($aj[_G]) && is_dir($ai)) {
                    $uploadOutput = '';
                    $uploadTemplate = $this->config->getTemplate('b');
                    $allowedPattern = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(C_)));
                    foreach ($aj[_G] as $ao => $ap) {
                        $uploadName = $this->normalizeUploadFilename($aj[_y][$ao]);
                        if ($uploadName && $this->isAllowedExtension(strtolower(substr($uploadName, strripos($uploadName, '.') + 1)))) {
                            if (!$aj[_D][$ao]) {
                                $relativeFile = $uploadDirectory === '' ? $uploadName : $uploadDirectory . '/' . $uploadName;
                                $ab = $this->getSafeSitePath($relativeFile, true);
                                if ($ab && $this->createBackup($relativeFile, true) && move_uploaded_file($ap, $ab)) {
                                    $fileEntry[_y] = $this->escapeHtml($uploadName);
                                    $fileEntry[_z] = $this->escapeHtml(filemtime($ab));
                                    $fileEntry[_A] = $this->escapeHtml(filesize($ab));
                                    preg_match('~\.(?:' . $allowedPattern . ')$~i', $uploadName, $extensionMatch);
                                    if (isset($extensionMatch[0])) $fileEntry[_x] = $this->escapeHtml($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $relativeFile); else$fileEntry[_x] = $this->escapeHtml($ah . $uploadName);
                                    $uploadOutput .= $this->config->localizeTemplate($this->config->replacePlaceholders($uploadTemplate, $fileEntry), $this->language);
                                } else$as = true;
                            } else$at = true;
                        } else$au = true;
                        if ($uploadOutput !== '') {
                            $this->config->setSetting(O_, '');
                            $this->response->addHeader('X-c:' . $this->getDirectorySize($ah));
                            $this->response->setBody($uploadOutput);
                        }
                        if (isset($au)) $this->response->addHeader('X-d:1'); else if (isset($as)) $this->response->addHeader('X-b:1'); else if (isset($at)) $this->response->addHeader('X-e:1');
                    }
                } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
            } else if (($av = $this->request->getPost('remove')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                $av = rawurldecode($av);
                $removeRelative = $this->getSiteRelativePath($av, true);
                $ab = $removeRelative === false ? false : $this->getSafeSitePath($removeRelative);
                if ($ab && $this->isAllowedExtension(strtolower(substr($ab, strripos($ab, '.') + 1)))) {
                    if ($this->createBackup($removeRelative)) {
                        if (is_file($ab) && unlink($ab)) {
                            $this->config->setSetting(O_, '');
                            $removeDirectory = dirname($removeRelative);
                            $removeDirectory = $this->config->getSiteUrl() . ($removeDirectory == '.' ? '' : $removeDirectory . '/');
                            $this->response->addHeader('X-c:' . $this->getDirectorySize($removeDirectory));
                        } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                    } else {
                        $this->response->addHeader('X-b:1');
                        $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                    }
                } else {
                    $this->response->addHeader('X-d:1');
                    $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                }
            } else if (($av = $this->request->getPost('replace')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                $av = rawurldecode($av);
                $aw = $this->request->getFile(_C);
                $replaceName = isset($aw[_y]) ? $this->normalizeUploadFilename($aw[_y]) : false;
                $replaceRelative = $this->getSiteRelativePath($av, true);
                $ab = $replaceRelative === false ? false : $this->getSafeSitePath($replaceRelative);
                if (isset($aw[_G]) && $aw[_D] < 1 && $replaceName && $this->isAllowedExtension(strtolower(substr($replaceName, strripos($replaceName, '.') + 1)))) {
                    if ($ab && file_exists($ab)) {
                        if ($this->createBackup($replaceRelative)) {
                            $ay = dirname($ab) . '/';
                            $az = $this->normalizeImageFilename($ay, $replaceName);
                            if ($az && move_uploaded_file($aw[_G], $az)) {
                                $this->config->setSetting(O_, '');
                                $replaceDirectory = dirname($replaceRelative);
                                $replaceDirectory = $this->config->getSiteUrl() . ($replaceDirectory == '.' ? '' : $replaceDirectory . '/');
                                $this->response->setBody($replaceDirectory . basename($az));
                            } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                        } else {
                            $this->response->addHeader('X-b:1');
                            $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                        }
                    } else {
                        $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                    }
                } else {
                    $this->response->addHeader('X-d:1');
                    $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                }
            } else if (($aA = $this->request->getPost('settings')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                if ($aA[n_]) {
                    $aB = $this->config->getSetting(n_);
                    $aC = $this->config->getSetting(p_) - $this->config->getSetting(q_);
                    for ($aD = 0; $aD < $aC; $aD++) $aA[n_] = sha1($aA[n_]);
                    if ($aA[n_] != $aB) $this->config->setSetting(n_, $aA[n_]);
                }
                if ($aA[m_] && $aA[m_] != $this->language) {
                    if (stripos($aE = $this->config->getSetting(m_), ',') && stripos($aE, $aA[m_]) !== false) {
                        if ($aA[m_] != $this->request->getServer(e_)) $this->response->setCookie(__ . m_, $aA[m_], time() + 60 * 60 * 24 * 365, $this->config->getSiteUrlBase(), false, false, true); else$this->response->clearCookie(__ . m_, $this->config->getSiteUrlBase());
                    } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                }
                if ($this->config->getSetting(D_) !== null && preg_match('~^.{1,30}$~i', $aA[D_], $ar) && isset($ar[0])) $this->config->setSetting(D_, $aA[D_]); else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                unset($aA[n_], $aA[m_], $aA[D_]);
                foreach ($aA as $ao => $aF) {
                    if ($this->config->getSetting($ao) !== null && preg_match('~^[0-9]{1,7}$~i', $aF, $ar) && isset($ar[0])) $this->config->setSetting($ao, $aF); else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                }
            } else if (($ah = $this->request->getPost('recovery')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                $ah = rawurldecode($ah);
                $recoveryRelative = $this->getSiteRelativePath($ah);
                $ai = $recoveryRelative === false ? false : $this->getSafeSitePath($recoveryRelative);
                if ($ai) $ai = rtrim($ai, '/') . '/';
                if ($ai && is_dir($ai) && is_writable($this->config->getBackupRoot()) && $aG = opendir($ai)) {
                    while (($aH = readdir($aG)) !== false) {
                        if ($aH != '.' && $aH != '..' && is_file($ai . $aH) && !is_link($ai . $aH)) {
                            $aH = str_ireplace('ꜜ', '[~]', $aH);
                            if (substr($aH, 0, 3) == '[~]') {
                                $restoreRelative = $this->normalizeRelativePath(str_ireplace('⁄', '/', substr($aH, 3)));
                                $ab = $restoreRelative === false ? false : $this->getSafeSitePath($restoreRelative, true);
                                if ($ab && file_exists($ab)) if (!unlink($ab)) $aI = true;
                            } else {
                                $restoreRelative = $this->normalizeRelativePath(str_ireplace('⁄', '/', $aH));
                                $ab = $restoreRelative === false ? false : $this->getSafeSitePath($restoreRelative, true);
                                if (!$ab || !copy($ai . $aH, $ab)) $aI = true;
                            }
                            if (!unlink($ai . str_ireplace('[~]', 'ꜜ', $aH))) $aI = true;
                        }
                    }
                    closedir($aG);
                    $this->config->setSetting(O_, '');
                    if (!isset($aI)) {
                        if (!rmdir($ai)) $this->response->setStatus(404, $this->config->translate(_t, 'en'));
                    } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
            } else if (($aJ = $this->request->getPost('scripts')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                if ($this->config->getSetting(K_) !== null) $this->config->setSetting(K_, '0'); else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
            } /*else if (($aK = $this->request->getPost('install')) && ($af = $this->request->getPost(_o, _p)) && ($af == $this->request->getCookie(__ . _o, _p))) {
                $this->response->clearCookie(__ . _o);
                $aw = $this->config->getEditorDirectory() . 'update.php';
                preg_match('~^[a-z0-9+=/_]+$~i', $aK, $ar);
                if (isset($ar[0]) && ($aK = base64_decode(str_replace('_', 'a', $aK))) && ($ag = fopen($aw, 'w'))) {
                    flock($ag, LOCK_EX);
                    $aL = fwrite($ag, $aK);
                    flock($ag, LOCK_UN);
                    fclose($ag);
                    if ($aL) {
                        $aq = include $aw;
                        if ($aq == _D) $this->response->setStatus(404, $this->config->translate(_t, 'en')); else if (file_exists($this->config->getSiteRoot() . $aq)) $this->response->setBody($this->config->getSiteUrlBase() . $this->getQueryPrefix() . $aq);
                        unlink($aw);
                    } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
                } else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
            }*/ else$this->response->setStatus(404, $this->config->translate(_t, 'en'));
        } else {
            $this->createSession();
            if (file_exists($ab)) {
                $aM = strtolower(substr($ab, strripos($ab, '.') + 1));
                if ($this->isAllowedExtension($aM)) {
                    $aN = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(_s)));
                    preg_match('~^' . $aN . '$~i', $aM, $ar);
                    if (isset($ar[0])) {
                        $aO = $this->request->getCookie(__ . _q);
                        $aP = $this->request->getPost('switch');
                        if ($aO) {
                            if ($aP === '0') {
                                $this->response->clearCookie(__ . _q, $this->config->getSiteUrlBase());
                                $this->renderVisualEditor($ab);
                            } else$this->renderSourceEditor($ab);
                        } else {
                            if ($aP === '1') {
                                $this->response->setCookie(__ . _q, 1, time() + 60 * 60 * 24 * 90, $this->config->getSiteUrlBase(), false, false, true);
                                $this->renderSourceEditor($ab);
                            } else$this->renderVisualEditor($ab);
                        }
                    } else$this->renderSourceEditor($ab);
                } else$this->renderErrorPage(_u);
            } else$this->renderErrorPage(_t);
        }
    }

    public function renderVisualEditor($a)
    {
        $b[X_] = $this->config->translate('visual_editor', $this->language);
        $b[P_] = $this->escapeHtml($this->config->getSiteUrlBase());
        $b[Y_] = self::a;
        $b[V_] = $this->escapeHtml($this->config->getSiteUrl());
        $c = $this->request->getQuery('q');
        if ($d = strripos($c, '/')) $b[V_] .= substr($c, 0, $d + 1);
        $b['panel'] = $this->renderPanel($a);
        $b[_n] = $this->switchMode();
        if (!$b[_n]) {
            $b[_n] = $this->readHtmlFile($a);
            $b[Z_] = '';
        } else$b[Z_] = '1';
        $b[_n] = str_replace('{', '!~!', $b[_n]);
        $e = $this->config->getTemplate('c');
        $e = $this->config->replacePlaceholders($e, $b);
        $e = $this->config->localizeTemplate($e, $this->language);
        $e = str_replace('!~!', '{', $e);
        $this->response->setBody($e);
    }

    public function renderSourceEditor($a)
    {
        $b[X_] = $this->config->translate('source_editor', $this->language);
        $b[P_] = $this->escapeHtml($this->config->getSiteUrlBase());
        $b[Y_] = self::a;
        $b[S_] = $this->config->getSetting(y_);
        $b[A_] = $this->config->getSetting(A_);
        $b[z_] = $this->config->getSetting(z_);
        $b['panel'] = $this->renderPanel($a);
        $b[_n] = $this->switchMode();
        if (!$b[_n]) {
            $b[_n] = $this->readHtmlFile($a);
            $b[Z_] = '';
        } else$b[Z_] = '1';
        $b[_n] = str_replace('{', '!~!', $b[_n]);
        $c = $this->config->getTemplate('d');
        $c = $this->config->replacePlaceholders($c, $b);
        $c = str_replace('!~!', '{', $c);
        $this->response->setBody($c);
    }

    public function renderErrorPage($a)
    {
        $b[W_] = $a;
        $b[P_] = $this->escapeHtml($this->config->getSiteUrlBase());
        $b[Y_] = self::a;
        $b['panel'] = $this->renderPanel($a);
        $c = $this->config->getTemplate('e');
        $c = $this->config->replacePlaceholders($c, $b);
        return $this->config->localizeTemplate($c, $this->language);
    }

    public function handleException($a)
    {
        $this->response->setStatus($a->getCode(), $this->config->translate($a->getCode(), 'en'));
        if ($b = $a->getMessage()) $this->response->redirect($b);
        $c[W_] = $a->getCode();
        $c[P_] = $this->escapeHtml($this->config->getSiteUrlBase());
        $c[Y_] = self::a;
        $c['panel'] = '';
        $d = $this->config->getTemplate('e');
        $d = $this->config->replacePlaceholders($d, $c);
        return $this->response->setBody($this->config->localizeTemplate($d, $this->language));
    }

    private function selectLanguage()
    {
        $a = $this->config->getSetting(m_);
        if (stripos($a, ',')) {
            $b = $this->request->getCookie(__ . m_);
            if ($b && stripos($a, $b) !== false) return $b; else {
                $c = substr($this->request->getServer(e_), 0, 2);
                if (stripos($a, $c) !== false) return $c;
            }
        }
        return substr($a, 0, 2);
    }

    private function detectRewriteMode()
    {
        $a = $this->config->getSetting(F_);
        if ($a === '1') return 1; else if ($a === '0') return 0; else {
            if ((stripos($this->request->getServer(b_), 'q=') === 0) && (stripos($this->request->getServer(c_), $this->request->getServer(b_)) === false)) return 1; else return 0;
        }
    }

    private function getQueryPrefix()
    {
        if (!$this->rewriteMode) return '?q='; else return '';
    }

    private function findDefaultFile()
    {
        $a = $this->config->getSiteRoot();
        if ($b = opendir($a)) {
            $c = [];
            $d = [];
            $e = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(_s)));
            $f = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(C_)));
            while (($g = readdir($b)) !== false) {
                if ($g != '.' && $g != '..') {
                    if (is_file($a . $g) && !is_link($a . $g)) {
                        if (preg_match('~^index\.(?:' . $e . ')$~i', $g)) {
                            closedir($b);
                            return $g;
                        } else if (preg_match('~\.(?:' . $e . ')$~i', $g)) $c[] = $g; else if (preg_match('~\.(?:' . $f . ')$~i', $g)) $d[] = $g;
                    }
                }
            }
            closedir($b);
            if (isset($c[0])) return $c[0]; else if (isset($d[0])) return $d[0];
        }
    }

    private function ensureRewriteBase()
    {
        $a = $this->config->getEditorDirectory() . '.htaccess';
        if (file_exists($a)) {
            $b = file_get_contents($a);
            preg_match('~RewriteBase (.+?)\n~i', $b, $c);
            if (isset($c[0]) && isset($c[1])) {
                if ($c[1] != $this->config->getSiteUrlBase()) {
                    $b = str_replace($c[0], 'RewriteBase ' . $this->config->getSiteUrlBase() . "\n", $b);
                    $this->writeHtaccess($b);
                }
            } else {
                $b = preg_replace('~(RewriteEngine .+?\n)~i', '$1' . "\n" . 'RewriteBase ' . $this->config->getSiteUrlBase() . "\n", $b);
                $this->writeHtaccess($b);
            }
        }
    }

    private function writeHtaccess($a)
    {
        if ($b = fopen($this->config->getEditorDirectory() . '.htaccess', 'w')) {
            flock($b, LOCK_EX);
            fwrite($b, $a);
            flock($b, LOCK_UN);
            fclose($b);
        }
    }

    private function createSession()
    {
        $a = sha1(time() . mt_rand());
        $this->config->setSetting(o_, $a);
        $this->response->setCookie(__ . o_, $a, time() + 60 * $this->config->getSetting(w_), $this->config->getSiteUrlBase(), false, false, true);
    }

    private function destroySession()
    {
        $this->config->setSetting(o_, '');
        $this->response->clearCookie(__ . o_, $this->config->getSiteUrlBase());
    }

    private function switchMode()
    {
        $a = $this->request->getPost('switch');
        if (is_numeric($a)) {
            $b = $this->request->getPost(_n);
            if ($b && ($c = $this->request->getPost(_o)) && $c == $this->request->getCookie(__ . _o)) {
                $b = base64_decode(str_replace('_', 'a', $b));
                $this->response->addHeader('X-f:0');
                $this->response->clearCookie(__ . _o);
                return $b;
            }
        }
    }

    private function readHtmlFile($a)
    {
        $b = file_get_contents($a);
        preg_match('~<meta[^>]+utf-8~i', $b, $c);
        preg_match('~<meta[^>]+windows-1251~i', $b, $d);
        if (!isset($c[0]) && isset($d[0])) {
            $b = preg_replace('~(<meta[^>]+)windows-1251~i', '$1utf-8', $b);
            $b = iconv('Windows-1251', 'UTF-8', $b);
        }
        $b = str_replace(_K, _L, $b);
        return str_replace(_I, _J, $b);
    }

    private function isAllowedExtension($a)
    {
        $b = $this->config->getSetting(B_);
        if (!$b || preg_match('~(?:^|,\s*)' . $a . '(?:\s*,|$)~i', $b)) return true;
    }

    private function renderPanel($aa)
    {
        $ab[T_] = $this->renderFileType($aa);
        $ab[_r] = $this->renderSiteStatus();
        $ab[P_] = $this->escapeHtml($this->config->getSiteUrlBase());
        $ab[Y_] = self::a;
        $ab[_b] = $this->parseSize(ini_get(_b));
        $ab[_c] = ini_get(_c);
        /*if (md5(str_replace('www.', '', $this->request->getServer(k_))) != 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') $ac[_a] = '0';*/
        $ab[p_] = $this->config->getSetting(q_);
        $ab[u_] = $this->config->getSetting(u_);
        $ab[v_] = $this->config->getSetting(v_);
        $ab[w_] = $this->config->getSetting(w_);
        $ab[G_] = $this->config->getSetting(G_);
        if ($ab[G_]) $ab[G_ . _d] = $this->config->getTemplate('f'); else$ab[G_ . _d] = $this->config->getTemplate('g');
        $ab[K_] = $this->config->getSetting(K_);
        if ($ab[K_]) $ab[K_ . _d] = $this->config->getTemplate('f'); else$ab[K_ . _d] = $this->config->getTemplate('g');
        $ab[L_] = $this->config->getSetting(L_);
        if ($ab[L_]) $ab[L_ . _d] = $this->config->getTemplate('f'); else$ab[L_ . _d] = $this->config->getTemplate('g');
        $ab[H_] = $this->config->getSetting(H_);
        if ($ab[H_]) $ab[H_ . _d] = $this->config->getTemplate('f'); else$ab[H_ . _d] = $this->config->getTemplate('g');
        if ($this->config->getSetting(_R)) $ab[_R . _d] = $this->config->getTemplate('f'); else$ab[_R . _d] = $this->config->getTemplate('g');
        if ($this->config->getSetting(I_)) $ab[I_ . _d] = $this->config->getTemplate('f'); else$ab[I_ . _d] = $this->config->getTemplate('g');
        if (!$this->modified) return;
        $ab[y_] = $this->config->getSetting(y_);
        $ab[z_] = $this->config->getSetting(z_);
        if ($this->config->getSetting(A_)) $ab[A_ . _d] = $this->config->getTemplate('f'); else$ab[A_ . _d] = $this->config->getTemplate('g');
        if ($this->config->getSetting(_Q)) $ab[_Q . _d] = $this->config->getTemplate('f'); else$ab[_Q . _d] = $this->config->getTemplate('g');
        $ab[D_] = $this->escapeHtml($this->config->getSetting(D_));
        $ab[J_] = $this->config->getSetting(J_);
        $ab[M_] = $this->config->getSetting(M_);
        if ($ab[M_]) $ab[M_ . _d] = $this->config->getTemplate('f'); else$ab[M_ . _d] = $this->config->getTemplate('g');
        $ab[N_] = $this->config->getSetting(N_);
        if ($ab[N_]) $ab[N_ . _d] = $this->config->getTemplate('f'); else$ab[N_ . _d] = $this->config->getTemplate('g');
        $ab[_v] = $this->escapeHtml($this->request->getServer(g_));
        $ab[_w] = $this->escapeHtml($this->request->getServer(h_));
        if (isset($ab[_a])) $ab[_a] .= $this->parseSize(ini_get(_a)); else$ab[_a] = $this->parseSize(ini_get(_a));
        $ab[_H] = $this->renderLanguageList();
        $ab[_P] = $this->escapeHtml(preg_replace('~\s~', '', $this->config->getSetting(_P)));
        $ad = $this->config->getTemplate('h');
        $ad = $this->config->replacePlaceholders($ad, $ab);
        return $this->config->localizeTemplate($ad, $this->language);
    }

    private function renderFileType($a)
    {
        if (is_numeric($a)) {
            $b[U_] = $a;
            $c = $this->config->getTemplate('i');
        } else {
            $d = strtolower(substr($a, strripos($a, '.') + 1));
            $e = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(_s)));
            preg_match('~^' . $e . '$~i', $d, $f);
            if (isset($f[0])) $c = $this->config->getTemplate('j'); else$c = $this->config->getTemplate('i');
            if ($d == 'htm') $b[U_] = _q; else$b[U_] = $d;
        }
        $b[U_] = $this->escapeHtml($b[U_]);
        $c = $this->config->replacePlaceholders($c, $b);
        return $this->config->localizeTemplate($c, $this->language);
    }

    private function renderLanguageList()
    {
        $a = '';
        $b = explode(',', $this->config->getSetting(m_));
        //if (__LINE__ != 1) exit;
        $c[_y] = m_;
        foreach ($b as $d) {
            $languageValue = trim($d);
            $c[_E] = $this->escapeHtml($languageValue);
            if ($this->language == $languageValue) $e = $this->config->getTemplate('k'); else$e = $this->config->getTemplate('l');
            $f[_F] = $this->config->replacePlaceholders($e, $c);
            $f[m_] = $c[_E];
            $g = $this->config->getTemplate('m');
            $g = $this->config->replacePlaceholders($g, $f);
            $a .= $this->config->localizeTemplate($g, $this->language);
        }
        return $a;
    }

    private function parseSize($a)
    {
        $a = strtolower(trim($a));
        $b = (int)$a;
        switch ($a[strlen($a) - 1]) {
            case'm':
                return $b * 1048576;
            case'k':
                return $b * 1024;
            case'g':
                return $b * 1073741824;
            default:
                return $b;
        }
    }

    private function renderSiteStatus()
    {
        $a = $this->config->getSiteUrl();
        $b = $this->config->getSiteRoot();
        if ($a == '/') $c[_y] = $this->escapeHtml($this->request->getServer(k_)); else$c[_y] = $this->escapeHtml(substr($a, strrpos(substr($a, 0, -1), '/') + 1, -1));
        $c[_z] = $this->escapeHtml(filemtime($b));
        $c[_x] = $this->escapeHtml($a);
        $c[_A] = '';
        $d = $this->config->getEditorDirectory();
        if ($e = opendir($d)) {
            while (($f = readdir($e)) !== false) {
                if ($f != '.' && $f != '..' && is_file($d . $f) && !is_link($d . $f) && (substr($f, 0, strlen('myvibehtml')) == 'myvibehtml' || substr($f, 0, 5) == 'index') && ((substr($f, -2, -1) == 'h' && filesize($d . $f) != 36307) || (substr($f, -2, -1) == 'j' && filesize($d . $f) != 66258) || (substr($f, -3, -2) == 'c' && filesize($d . $f) != 42150))) {
                    $c[_A] = '0' . $c[_A];
                    break;
                }
                $this->modified = true;
            }
            closedir($e);
        }
        $g = $this->config->getTemplate('n');
        $g = $this->config->replacePlaceholders($g, $c);
        return $this->config->localizeTemplate($g, $this->language);
    }

    private function renderFileList($aa)
    {
        $relativeDirectory = $this->getSiteRelativePath($aa);
        $ab = $relativeDirectory === false ? false : $this->getSafeSitePath($relativeDirectory);
        if ($ab) $ab = rtrim($ab, '/') . '/';
        $ac = [];
        $ad = [];
        $ae = str_replace(' ', '', str_replace(',', '|', $this->config->getSetting(C_)));
        if (!$ab || !is_dir($ab)) {
            $this->response->setStatus(404, $this->config->translate(_t, 'en'));
            return '';
        }
        $currentDirectoryUrl = $this->config->getSiteUrl() . ($relativeDirectory === '' ? '' : $relativeDirectory . '/');
        if ($af = opendir($ab)) {
            while (($ag = readdir($af)) !== false) {
                if ($ag != '.' && $ag != '..') {
                    $ah = [];
                    $ah[_y] = $ag;
                    $ah[_z] = filemtime($ab . $ag);
                    if (is_file($ab . $ag) && !is_link($ab . $ag)) {
                        preg_match('~\.(?:' . $ae . ')$~i', $ag, $ai);
                        if (isset($ai[0])) $ah[_x] = $this->config->getSiteUrlBase() . $this->getQueryPrefix() . ($relativeDirectory === '' ? '' : $relativeDirectory . '/') . $ag; else$ah[_x] = $currentDirectoryUrl . $ag;
                        $ah[_A] = filesize($ab . $ag);
                        $ad[] = $ah;
                    } else if (is_dir($ab . $ag) && !is_link($ab . $ag)) {
                        $ah[_x] = $currentDirectoryUrl . $ag . '/';
                        $ah[_A] = $this->getDirectorySize($ah[_x]);
                        $ac[] = $ah;
                    }
                }
            }
            closedir($af);
        }
        $aj = '';
        if (count($ac)) {
            $ac = $this->sortEntries($ac);
            $ak = $this->config->getTemplate('n');
            $al = $this->config->getTemplate('o');
            foreach ($ac as $am) {
                $directoryUrl = $am[_x];
                if ($directoryUrl == $this->config->getBackupUrl()) {
                    $an = $al;
                    $am[_B] = $this->renderFileList($directoryUrl);
                } else$an = $ak;
                $am[_y] = $this->escapeHtml($am[_y]);
                $am[_z] = $this->escapeHtml($am[_z]);
                $am[_x] = $this->escapeHtml($directoryUrl);
                $am[_A] = $this->escapeHtml($am[_A]);
                $aj .= $this->config->localizeTemplate($this->config->replacePlaceholders($an, $am), $this->language);
            }
        }
        if (count($ad)) {
            $ad = $this->sortEntries($ad);
            $ao = $this->config->getTemplate('b');
            foreach ($ad as $ap) {
                $ap[_y] = $this->escapeHtml($ap[_y]);
                $ap[_z] = $this->escapeHtml($ap[_z]);
                $ap[_x] = $this->escapeHtml($ap[_x]);
                $ap[_A] = $this->escapeHtml($ap[_A]);
                $aj .= $this->config->localizeTemplate($this->config->replacePlaceholders($ao, $ap), $this->language);
            }
        }
        if ($ab == $this->config->getSiteRoot()) $this->response->addHeader('X-c:' . $this->getDirectorySize($aa));
        return $aj;
    }

    private function sortEntries($a)
    {
        $b = [];
        $c = [];
        foreach ($a as $d) $b[] = $d[_y];
        asort($b);
        foreach ($b as $e) foreach ($a as $d) if ($e == $d[_y]) $c[] = $d;
        return $c;
    }

    private function getDirectorySize($a)
    {
        if ($this->config->getSetting(_Q)) {
            $b = $this->config->getSetting(O_);
            if (!$b) {
                $b = $this->calculateDirectorySizes($this->config->getSiteUrl());
                $this->config->setSetting(O_, urlencode(serialize($b)));
            } else$b = unserialize(urldecode($b));
            return $b[$a];
        } else return '';
    }

    private function calculateDirectorySizes($a)
    {
        $relativeDirectory = $this->getSiteRelativePath($a);
        $b = $relativeDirectory === false ? false : $this->getSafeSitePath($relativeDirectory);
        if ($b) $b = rtrim($b, '/') . '/';
        $c = [];
        $c[$a] = 0;
        if ($b && $d = opendir($b)) {
            while (($e = readdir($d)) !== false) {
                if ($e != '.' && $e != '..') {
                    if (is_file($b . $e) && !is_link($b . $e)) $c[$a] += filesize($b . $e); else if (is_dir($b . $e . '/') && !is_link($b . $e)) {
                        $f = $this->calculateDirectorySizes($a . $e . '/');
                        $c[$a] += $f[$a . $e . '/'];
                        $c = array_merge($c, $f);
                    }
                }
            }
            closedir($d);
        }
        return $c;
    }

    private function createBackup($a, $allowMissing = false)
    {
        $a = $this->normalizeRelativePath($a);
        if ($a === false || !$this->getSafeSitePath($a, $allowMissing)) return false;
        $b = $this->config->getSetting(J_);
        if ($b && $b > 0) {
            $c = $this->config->getBackupRoot();
            if ($this->isSafeSitePath($c, true) && (is_dir($c) || is_writable($this->config->getEditorDirectory()) && mkdir($c))) {
                $d = date('y.m.d.H.i', $this->config->getSetting(r_));
                $e = $c . $d . '/';
                if ($this->isSafeSitePath($e, true) && (is_dir($e) || is_writable($c) && mkdir($e))) {
                    $this->pruneBackups($c, $b);
                    if ($f = opendir($e)) {
                        $g = $e . str_ireplace('/', '⁄', $a);
                        $h = $e . 'ꜜ' . str_ireplace('/', '⁄', $a);
                        while (($i = readdir($f)) !== false) {
                            $j = $e . $i;
                            if ($i != '.' && $i != '..' && is_file($j) && file_exists($j) && ($j == $g || $j == $h)) return true;
                        }
                        closedir($f);
                    }
                    $k = $this->getSafeSitePath($a, $allowMissing);
                    if ($k && file_exists($k)) {
                        if (copy($k, $e . str_ireplace('/', '⁄', $a))) return true;
                    } else if (fopen($e . 'ꜜ' . str_ireplace('/', '⁄', $a), 'w')) return true;
                }
            }
        } else return true;
    }

    private function pruneBackups($a, $b)
    {
        $c = [];
        if ($d = opendir($a)) {
            while (($e = readdir($d)) !== false) if ($e != '.' && $e != '..' && is_dir($a . $e)) array_push($c, $e);
            closedir($d);
        }
        $f = count($c) - $b;
        if ($f > 0) {
            asort($c);
            $c = array_slice($c, 0, $f);
            if ($d = opendir($a)) {
                while (($e = readdir($d)) !== false) {
                    if ($e != '.' && $e != '..' && is_dir($a . $e)) {
                        foreach ($c as $g) {
                            if ($e == $g) {
                                $h = $a . $e . '/';
                                if ($i = opendir($h)) while (($j = readdir($i)) !== false) if ($j != '.' && $j != '..') if (!is_file($h . $j) || !unlink($h . $j)) $k = true;
                                closedir($i);
                                if (!isset($k)) rmdir($h); else unset($k);
                            }
                        }
                    }
                }
                closedir($d);
            }
        }
    }

    private function normalizeImageFilename($a, $b)
    {
        if (!$this->isSafeSitePath($a, true)) return false;
        if ($this->config->getSetting(_R)) {
            preg_match('~\.[a-z0-9]{1,5}$~i', $b, $c);
            if (!isset($c[0])) {
                $c[1] = $b;
                $c[2] = '';
            } else preg_match('~^(.+)(\.[a-z0-9]{1,5})$~i', $b, $c);
            $c[1] = preg_replace('~[^a-z0-9]+~i', '-', $c[1]);
            $c[1] = preg_replace('~^-~i', '', $c[1]);
            $c[1] = preg_replace('~-$~i', '', $c[1]);
            if (!preg_match('~[^-]+~i', $c[1])) $c[1] = 'image';
            $b = $c[1] . $c[2];
        }
        $b = preg_replace('~[%#]~i', '', $b);
        $d = $a . $b;
        if (!$this->isSafeSitePath($d, true)) return false;
        if (file_exists($d)) {
            if (!$this->config->getSetting(I_)) {
                preg_match('~\.[a-z0-9]{1,5}$~i', $d, $c);
                if (isset($c[0])) $e = preg_replace('~\.([a-z0-9]{1,5})$~i', '{prefix}.$1', $d); else$e = $d . '{prefix}';
                for ($f = 2; file_exists($d); $f++) $d = preg_replace('~\{prefix\}~i', '-' . $f, $e);
            }
        }
        return $this->isSafeSitePath($d, true);
    }
}

$request = new MyVibeHTMLRequest();
$response = new MyVibeHTMLResponse($request->getServer(l_));
$config = new MyVibeHTMLConfig(dirname($request->getServer(i_)) . '/', $request->getServer(a_));
$controller = new MyVibeHTMLController($request, $response, $config);
try {
    $controller->authenticate();
} catch (Exception$e) {
    $controller->handleException($e);
}
$response->send(); ?>
