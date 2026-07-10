<?php
// Скопируйте этот файл в config.php и укажите свои значения.
// config.php игнорируется git (.gitignore) и не должен попадать в репозиторий.

// Учётные записи для входа в admin.php (логин => ХЕШ пароля, password_hash()).
// НЕ храните пароль в открытом виде. Сгенерировать хеш:
//   php -r "echo password_hash('ваш_пароль', PASSWORD_DEFAULT), PHP_EOL;"
// и вставьте полученную строку ($2y$...) ниже.
// Пример ниже — хеш пароля "change_me"; ОБЯЗАТЕЛЬНО замените на свой.
$users_arr=array('admin'=>'$2y$12$FrRMRE1z.RihgMvd9UxTt.lx/KgJMiyU3ulaY98bOOmCkqv6v59Ky');

// Часовой пояс сервера (см. https://www.php.net/manual/timezones.php).
$config['server_timezone']='Etc/GMT';

// Доступ к базе данных MySQL (таблицы см. в tables.sql).
$config['db_host']='localhost';
$config['db_login']='login';
$config['db_password']='password';
$config['db_base']='database';

// Публичная JSON-RPC нода VIZ для запросов к блокчейну.
$config['jsonrpc_node']='https://api.viz.world/';
