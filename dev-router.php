<?php
// Router for PHP's built-in development server; Apache uses .htaccess instead.
$path = parse_url(isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/', PHP_URL_PATH);
$path = is_string($path) ? $path : '/';

if (preg_match('~(?:^|/)(?:backup(?:/|$)|[^/]+\.(?:ini|log)(?:\..*)?$)~i', $path) || preg_match('~(?:^|/)\.[^/]+(?:/|$)~', $path)) {
    http_response_code(403);
    print 'Forbidden';
    return true;
}

$root = realpath(isset($_SERVER['DOCUMENT_ROOT']) ? $_SERVER['DOCUMENT_ROOT'] : __DIR__);
$file = $root ? realpath($root . $path) : false;
if ($root && $file && is_file($file) && strpos($file, $root . DIRECTORY_SEPARATOR) === 0) return false;

require __DIR__ . '/myvibehtml.php';
