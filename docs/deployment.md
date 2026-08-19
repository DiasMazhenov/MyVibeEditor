# Развёртывание MyVibeHTML

## Перед установкой

MyVibeHTML должен видеть настоящий document root сайта. Каталог редактора может находиться внутри него, но не заменяет его. В production используйте HTTPS и отдельную учётную запись PHP-FPM с минимальными правами.

Проверьте:

```sh
php -v
php -r 'echo $_SERVER["DOCUMENT_ROOT"] ?? "cli-no-document-root", PHP_EOL;'
```

CLI-команда не показывает web `DOCUMENT_ROOT`; это нормально. Проверка должна выполняться через web-сервер.

## Apache

1. Скопируйте файлы проекта в каталог сайта.
2. Включите `mod_rewrite` и разрешите `AllowOverride FileInfo,Limit,Options` для каталога редактора.
3. Оставьте `.htaccess` из проекта рядом с `myvibehtml.php`.
4. Убедитесь, что PHP-процесс может создать runtime-каталог `.myvibehtml-<hash>` рядом с document root.
5. Откройте `https://example.test/myvibehtml.php?q=index.html`.

Минимальная проверка конфигурации:

```sh
apachectl -t
curl -I https://example.test/myvibehtml.js?v=0.22
curl -I https://example.test/index.html
```

`conf.ini`, `backup/`, dotfiles, `*.ini` и `*.log` должны отвечать `403` или быть недоступны другим правилом сервера.

## Nginx + PHP-FPM

Используйте [`nginx.conf.example`](../nginx.conf.example). Обязательно замените:

- `root` на реальный document root сайта;
- `fastcgi_pass` на сокет или адрес вашего PHP-FPM;
- `fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name` оставьте без изменений, если root не переопределяется внутри location;
- лимит `client_max_body_size` под размер разрешённых загрузок.

Проверка:

```sh
nginx -t
curl -I https://example.test/myvibehtml.js?v=0.22
curl -I https://example.test/myvibehtml.php
```

Если PHP-FPM сообщает о `DOCUMENT_ROOT`, сначала проверьте `root`, `SCRIPT_FILENAME` и фактический путь `myvibehtml.php`. Не исправляйте это сменой корня на каталог плагина: так ломается доступ к редактируемым HTML-файлам.

## Локальный PHP-сервер

Для проекта с тестовой страницей запускайте сервер с router-файлом:

```sh
php -S 127.0.0.1:8080 -t /path/to/myvibe /path/to/myvibe/dev-router.php
```

Проверка:

```sh
MYVIBEHTML_BASE_URL=http://127.0.0.1:8080 sh tests/regression.sh
```

Без `dev-router.php` PHP built-in server не выполняет `.htaccess`, и маршрут `/?q=index.html` может вернуть `Not Found`.

## Права и runtime

PHP должен иметь запись в document root только там, где это необходимо для сохранения HTML и создания backup. Runtime-конфигурация по умолчанию изолируется в соседнем каталоге `.myvibehtml-<hash>` и не должна попадать в git или web-поставку.

После установки:

1. войдите через `myvibehtml.php`;
2. задайте собственный пароль;
3. проверьте вкладки `html` и `text`;
4. откройте глаз — он должен вести напрямую на HTML-файл без `?q=`;
5. откройте `Файлы` и `Настройки`, затем по очереди раскройте все разделы;
6. выполните резервную копию перед первой правкой.

## Диагностика `Проблема с DOCUMENT_ROOT`

Проверяйте по порядку:

1. URL редактора и `SCRIPT_FILENAME` указывают на один и тот же файл.
2. `DOCUMENT_ROOT` — корень сайта, а не `/myvibe`.
3. HTML-файл существует внутри этого корня.
4. PHP может записать runtime-каталог и файл конфигурации.
5. Для Nginx совпадают `root` и `$document_root` в PHP location.
6. Для локального запуска используется `dev-router.php`.

Не удаляйте `conf.ini` и runtime-каталог без резервной копии: это сбросит пароль и состояние сессий.
