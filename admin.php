<?php
include('autoloader.php');

// Сессия админа (Q1): серверная сессия вместо cookie = md5(пароль). Куки — HttpOnly/Secure/SameSite.
session_set_cookie_params([
	'lifetime' => 0,
	'path'     => '/',
	'httponly' => true,
	'secure'   => !empty($_SERVER['HTTPS']),
	'samesite' => 'Strict',
]);
session_start();

ob_start();

$esc = function ($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); };

$admin = isset($_SESSION['admin_user']);
$user  = $admin ? $_SESSION['admin_user'] : '';
$menu_addon = $admin ? '<a class="menu-el color1" href="/admin.php?action=logout">Выход</a>' : '';

// CSRF-токен (Q3): на сессию; обязателен для изменяющих действий (hide/show).
if (empty($_SESSION['csrf'])) {
	$_SESSION['csrf'] = bin2hex(random_bytes(16));
}
$csrf = $_SESSION['csrf'];
function csrf_ok($csrf) {
	return isset($_GET['token']) && is_string($_GET['token']) && hash_equals($csrf, $_GET['token']);
}

// $ip уже вычислен в autoloader (X-Forwarded-For / REMOTE_ADDR); выводим только экранированным.

$title  = 'Администрирование';
$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($admin) {
	// Карта таблиц маркетплейсов: action => [таблица, ключевое поле].
	$tables = [
		'paid_subscriptions'  => ['paid_subscriptions',  'creator'],
		'accounts_on_sale'    => ['accounts_on_sale',    'account'],
		'subaccounts_on_sale' => ['subaccounts_on_sale', 'account'],
	];

	if (isset($tables[$action])) {
		list($table, $keyfield) = $tables[$action];
		$titles = [
			'paid_subscriptions'  => 'Записи в таблице «Платные подписки»',
			'accounts_on_sale'    => 'Записи в таблице «Аккаунты на продаже»',
			'subaccounts_on_sale' => 'Записи в таблице «Субаккаунты на продаже»',
		];
		$title = $titles[$action];

		// Мутации hide/show — только с валидным CSRF-токеном.
		if (isset($_GET['hide']) && '' !== $_GET['hide']) {
			if (!csrf_ok($csrf)) { header('location:/admin.php?action=' . rawurlencode($action)); exit; }
			$db->sql('UPDATE `' . $table . '` SET `status`=1 WHERE `' . $keyfield . '`=\'' . $db->prepare($_GET['hide']) . '\' LIMIT 1');
			header('location:/admin.php?action=' . rawurlencode($action) . '&caption=ok');
			exit;
		}
		if (isset($_GET['show']) && '' !== $_GET['show']) {
			if (!csrf_ok($csrf)) { header('location:/admin.php?action=' . rawurlencode($action)); exit; }
			$db->sql('UPDATE `' . $table . '` SET `status`=0 WHERE `' . $keyfield . '`=\'' . $db->prepare($_GET['show']) . '\' LIMIT 1');
			header('location:/admin.php?action=' . rawurlencode($action) . '&caption=ok');
			exit;
		}

		print '<a class="right" href="/admin.php">&larr; вернуться</a>';
		if ('ok' == ($_GET['caption'] ?? '')) {
			print '<p class="green">Операция успешно выполнена</p>';
		}

		$is_subs = ('paid_subscriptions' == $action);
		$noun    = $is_subs ? 'подписок' : ('accounts_on_sale' == $action ? 'аккаунтов' : 'субаккаунтов');

		// helper: строка списка с кнопкой (hide/show), всё экранировано + CSRF-токен в ссылке.
		$render = function ($m) use ($esc, $csrf, $action, $keyfield, $is_subs) {
			$key    = $m[$keyfield];
			$hidden = (1 == $m['status']);
			$verb   = $hidden ? 'show' : 'hide';
			$label  = $hidden ? 'показывать' : 'скрыть';
			$cls    = $hidden ? '' : ' red';
			$note   = '';
			if ($is_subs) {
				if (!empty($m['sub_count'])) $note = '<span class="green"> &mdash; подписчиков: ' . (int)$m['sub_count'] . '</span>';
			} else {
				$len = (int)$m['length'];
				if ($hidden ? $len < 8 : $len > 8) {
					$ccls = $hidden ? 'green' : 'red';
					$note = '<span class="' . $ccls . '"> &mdash; длина ' . $len . ' символов</span>';
				}
			}
			return '<div style="margin-top:5px;line-height:25px;">'
				. '<a href="/admin.php?action=' . rawurlencode($action) . '&' . $verb . '=' . rawurlencode($key) . '&token=' . $esc($csrf) . '"'
				. ' class="inline-button small no-margin' . $cls . '" style="font-size:14px;margin-right:10px !important;">' . $label . '</a> '
				. $esc($key) . $note . '</div>';
		};

		print 'Список скрытых ' . $noun . ':';
		$order = $is_subs ? '`creator` ASC' : '`account` ASC';
		$q = $db->sql('SELECT * FROM `' . $table . '` WHERE `status`=1 ORDER BY ' . $order);
		while ($m = $db->row($q)) { print $render($m); }

		print '<hr>Список отображаемых ' . $noun . ':';
		$q = $db->sql('SELECT * FROM `' . $table . '` WHERE `status`=0 ORDER BY ' . $order);
		while ($m = $db->row($q)) { print $render($m); }
	}
	else if ('logout' == $action) {
		$_SESSION = [];
		if (ini_get('session.use_cookies')) {
			$p = session_get_cookie_params();
			setcookie(session_name(), '', time() - 42000, $p['path'], $p['domain'], $p['secure'], $p['httponly']);
		}
		session_destroy();
		header('location:/admin.php');
		exit;
	}
	else {
		print '<p>Привет, ' . $esc($user) . ', ваш IP: ' . $esc($ip) . '</p>';
		print '<p><a href="/admin.php?action=paid_subscriptions">Записи в таблице «Платные подписки»</a></p>';
		print '<p><a href="/admin.php?action=accounts_on_sale">Записи в таблице «Аккаунты на продаже»</a></p>';
		print '<p><a href="/admin.php?action=subaccounts_on_sale">Записи в таблице «Субаккаунты на продаже»</a></p>';
	}
}
else {
	$error = false;
	if (isset($_POST['my_login'])) {
		$login = (string)$_POST['my_login'];
		$pass  = isset($_POST['my_password']) ? (string)$_POST['my_password'] : '';
		// password_verify против ХЕША из config (password_hash). Единое сообщение — не раскрываем, есть ли логин.
		if (isset($users_arr[$login]) && is_string($users_arr[$login]) && password_verify($pass, $users_arr[$login])) {
			session_regenerate_id(true);
			$_SESSION['admin_user'] = $login;
			header('location:/admin.php');
			exit;
		}
		$error = 'Неверный логин или пароль';
	}
	$title = 'Вход';
	print '<form action="/admin.php" method="POST">';
	if ($error) print '<p class="red">Ошибка: ' . $esc($error) . '</p>';
	print '<p><input type="text" name="my_login"> &mdash; логин</p>';
	print '<p><input type="password" name="my_password"> &mdash; пароль</p>';
	print '<p><input type="submit" value="Выполнить вход"></p>';
	print '</form>';
}

$content = ob_get_contents();
ob_end_clean();

print '<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>' . $esc($title) . ' — VIZ World</title>
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="/app.css?' . filemtime('app.css') . '">
</head>
<body>
<div class="header shadow unselectable">
	<div class="horizontal-view">
		<div class="menu-button menu-button-action"><img class="menu-button-action" src="/icons/menu.svg"></div>
		<div class="logo">
		<a data-href="/" class="prefix">wallet</a><a href="https://promo.viz.world/"><img src="https://viz.world/logo-viz-simple.svg" alt="VIZ World"></a>
		</div>
		<div class="menu-list captions">
			<div class="menu-bg">
				<a class="menu-el color1 selected" href="/admin.php">Администрирование</a>
				' . $menu_addon . '
			</div>
		</div>
	</div>
</div>

<div class="horizontal-view vertical-view">
	<div class="cards-view">
		<div class="cards-container">
			<div class="card captions">
				<h3>' . $esc($title) . '</h3>';
print $content;
print '
			</div>
		</div>
	</div>
</div>
';
