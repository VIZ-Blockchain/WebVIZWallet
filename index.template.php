<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>wallet VIZ world</title>
	<meta name="description" content="Wallet VIZ world: accounts, services, DAO">
	<meta property="og:description" content="Wallet VIZ world: accounts, services, DAO">
	<meta name="twitter:description" content="Wallet VIZ world: accounts, services, DAO">
	<meta name="viewport" content="width=device-width">
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
	<!--
		<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	-->
	<link rel="stylesheet" href="/app.css?<?=filemtime('app.css')?>">
	<script type="text/javascript" src="/viz.min.js"></script>
	<script type="text/javascript" src="/jquery-3.7.1.min.js"></script>
	<script type="text/javascript" src="/progressbar.min.js"></script>
	<script type="text/javascript" src="/ltmp_ru.js?<?=filemtime('ltmp_ru.js')?>"></script>
	<script type="text/javascript" src="/ltmp_en.js?<?=filemtime('ltmp_en.js')?>"></script>
	<script type="text/javascript" src="/ltmp_zh.js?<?=filemtime('ltmp_zh.js')?>"></script>
	<script type="text/javascript" src="/app.js?<?=filemtime('app.js')?>"></script>
</head>
<body>
<div class="header shadow unselectable">
	<div class="horizontal-view">
		<div class="menu-button menu-button-action"><img class="menu-button-action" src="/icons/menu.svg"></div>
		<div class="logo">
			<a data-href="/" class="prefix">wallet</a><a href="https://promo.viz.world/"><img src="/icons/logo-viz-simple.svg" alt="VIZ World"></a>
		</div>
		<div class="user-menu">
			<div class="login">&hellip;</div>
			<div class="user-buttons">
				<img class="drop-down" src="/icons/drop-down.svg">
				<div class="users-drop-down"></div>
				<img class="add-account" src="/icons/circle-plus.svg">
				<img class="logout" src="/icons/logout.svg">
			</div>
		</div>
		<div class="menu-list captions">
			<div class="menu-bg"></div>
		</div>
	</div>
</div>

<div class="horizontal-view vertical-view">
	<div class="cards-view">
		<div class="cards-container">
			<div class="node-down-notice"><span class="node-down-text"></span> <a class="switch-node-btn select-api-node" rel="#">Switch</a></div>
			<div class="view view-index"></div>
			<div class="view view-portable"></div>
			<div class="view view-login"></div>
			<div class="view view-memo"></div>
			<div class="view view-settings"></div>
			<div class="view view-assets"></div>
			<div class="view view-dao"></div>
			<div class="view view-account"></div>
			<div class="view view-market"></div>
		</div>
	</div>
</div>
<div class="go-top adaptive-show-block">&uarr;</div>
<div class="absolute-view menu-list captions">
	<div class="menu-bg"></div>
</div>
</body>
</html>