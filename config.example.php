<?php
// Скопируйте этот файл в config.php и укажите свои значения.
// config.php игнорируется git (.gitignore) и не должен попадать в репозиторий.

// Учётные записи для входа в admin.php (логин => пароль).
$users_arr=array('admin'=>'TEST_PASSWORD_123');

// Часовой пояс сервера (см. https://www.php.net/manual/timezones.php).
$config['server_timezone']='Etc/GMT';

// Доступ к базе данных MySQL (таблицы см. в tables.sql).
$config['db_host']='localhost';
$config['db_login']='login';
$config['db_password']='password';
$config['db_base']='database';

// Публичная JSON-RPC нода VIZ для запросов к блокчейну.
$config['jsonrpc_node']='https://vizrpc.lexa.host/';
