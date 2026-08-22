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
$workspaceRoot = realpath(__DIR__ . '/..');
if ($root && $workspaceRoot && $root !== $workspaceRoot && strpos($path, '/myvibe/') === 0) {
    $mappedFile = realpath($workspaceRoot . $path);
    if ($mappedFile && is_file($mappedFile) && strpos($mappedFile, rtrim($workspaceRoot, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR) === 0) {
        $mime = function_exists('mime_content_type') ? mime_content_type($mappedFile) : false;
        $extension = strtolower(pathinfo($mappedFile, PATHINFO_EXTENSION));
        if ($extension === 'css') $mime = 'text/css; charset=UTF-8';
        else if ($extension === 'js') $mime = 'application/javascript; charset=UTF-8';
        if ($mime) header('Content-Type: ' . $mime);
        readfile($mappedFile);
        return true;
    }
}
$file = $root ? realpath($root . $path) : false;
if ($root && $file && is_file($file) && strpos($file, $root . DIRECTORY_SEPARATOR) === 0) return false;

require __DIR__ . '/myvibehtml.php';
