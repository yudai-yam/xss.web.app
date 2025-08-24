<?php
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$file = __DIR__ . $path;

if (is_file($file)) {
    return false;
}

if (is_dir($file)) {
    if (file_exists($file . '/index.html')) {
        readfile($file . '/index.html');
        exit;
    }
    if (file_exists($file . '/index.php')) {
        require $file . '/index.php';
        exit;
    }
}

http_response_code(404);
header("Content-Type: text/plain");
echo "404 Not Found";
