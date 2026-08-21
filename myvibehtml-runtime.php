<?php /* MyVibeHTML v0.80 runtime module */

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

function myvibehtml_decode_array($encodedValue)
{
    $decodedValue = json_decode(urldecode((string)$encodedValue), true);
    if (is_array($decodedValue)) return $decodedValue;
    $legacyValue = myvibehtml_unserialize_array(urldecode((string)$encodedValue));
    return is_array($legacyValue) ? $legacyValue : [];
}

function myvibehtml_encode_array($value)
{
    $encodedValue = json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return urlencode($encodedValue === false ? '[]' : $encodedValue);
}

function myvibehtml_base64_decode($value)
{
    if (!is_string($value) || !preg_match('~^[A-Za-z0-9+/_-]*={0,2}$~', $value)) return false;
    $value = strtr($value, '-_', '+/');
    $padding = strlen($value) % 4;
    if ($padding) $value .= str_repeat('=', 4 - $padding);
    return base64_decode($value, true);
}

function myvibehtml_record_csp_report($payload)
{
    if (!is_string($payload) || $payload === '' || strlen($payload) > 16384) return false;
    $decoded = json_decode($payload, true);
    if (!is_array($decoded)) return false;
    $report = isset($decoded['csp-report']) && is_array($decoded['csp-report']) ? $decoded['csp-report'] : (isset($decoded['body']) && is_array($decoded['body']) ? $decoded['body'] : $decoded);
    $safeReport = [];
    foreach (['effective-directive', 'violated-directive', 'blocked-uri', 'document-uri', 'source-file', 'disposition'] as $field) {
        if (isset($report[$field]) && is_scalar($report[$field])) $safeReport[$field] = substr((string)$report[$field], 0, 300);
    }
    foreach (['line-number', 'column-number'] as $field) if (isset($report[$field]) && is_numeric($report[$field])) $safeReport[$field] = (int)$report[$field];
    if (!$safeReport) return false;
    $encoded = json_encode($safeReport, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    return $encoded !== false && error_log('[MyVibeHTML CSP] ' . $encoded);
}
