<?php /* MyVibeHTML v0.39 runtime module */

function myvibehtml_runtime_directory($documentRoot = false)
{
    if (!$documentRoot && isset($_SERVER['DOCUMENT_ROOT'])) $documentRoot = $_SERVER['DOCUMENT_ROOT'];
    $documentRoot = str_replace('\\', '/', (string)$documentRoot);
    $resolvedRoot = realpath($documentRoot);
    if (!$resolvedRoot || $resolvedRoot === '/') return false;
    $resolvedRoot = rtrim(str_replace('\\', '/', $resolvedRoot), '/');
    $runtimeDirectory = dirname($resolvedRoot) . '/.myvibehtml-' . substr(sha1($resolvedRoot), 0, 16) . '/';
    if (is_link(rtrim($runtimeDirectory, '/'))) return false;
    if (!is_dir($runtimeDirectory)) @mkdir($runtimeDirectory, 0700, true);
    if (is_dir($runtimeDirectory) && is_writable($runtimeDirectory)) {
        @chmod($runtimeDirectory, 0700);
        return $runtimeDirectory;
    }
    return false;
}

function myvibehtml_atomic_write($targetPath, $contents, $mode, $lockName)
{
    $targetDirectory = dirname($targetPath);
    if (!is_dir($targetDirectory) || !is_writable($targetDirectory) || is_link($targetPath)) return false;
    $lockHandle = @fopen($targetDirectory . '/' . $lockName, 'c');
    if (!$lockHandle || !flock($lockHandle, LOCK_EX)) {
        if ($lockHandle) fclose($lockHandle);
        return false;
    }
    $temporaryPath = tempnam($targetDirectory, '.myvibehtml-write-');
    $temporaryHandle = $temporaryPath ? @fopen($temporaryPath, 'wb') : false;
    $written = false;
    if ($temporaryHandle) {
        $offset = 0;
        $length = strlen($contents);
        while ($offset < $length && ($bytes = fwrite($temporaryHandle, substr($contents, $offset))) !== false && $bytes > 0) $offset += $bytes;
        $written = $offset === $length && fflush($temporaryHandle);
        fclose($temporaryHandle);
    }
    if ($written) {
        @chmod($temporaryPath, $mode);
        $written = @rename($temporaryPath, $targetPath);
        if ($written) @chmod($targetPath, $mode);
    }
    if ($temporaryPath && file_exists($temporaryPath)) @unlink($temporaryPath);
    flock($lockHandle, LOCK_UN);
    fclose($lockHandle);
    return $written;
}

function myvibehtml_unserialize_array($serializedValue)
{
    return @unserialize($serializedValue, ['allowed_classes' => false]);
}

function myvibehtml_base64_decode($value)
{
    if (!is_string($value) || !preg_match('~^[A-Za-z0-9+/_-]*={0,2}$~', $value)) return false;
    $value = strtr($value, '-_', '+/');
    $padding = strlen($value) % 4;
    if ($padding) $value .= str_repeat('=', 4 - $padding);
    return base64_decode($value, true);
}
