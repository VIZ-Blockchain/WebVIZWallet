<!DOCTYPE html>
<html lang="en">
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
	<script type="text/javascript" src="/cash.min.js"></script>
	<script type="text/javascript" src="/progressbar.min.js"></script>
	<script type="text/javascript" src="/ltmp_ru.js?<?=filemtime('ltmp_ru.js')?>"></script>
	<script type="text/javascript" src="/ltmp_en.js?<?=filemtime('ltmp_en.js')?>"></script>
	<script type="text/javascript" src="/ltmp_zh.js?<?=filemtime('ltmp_zh.js')?>"></script>
	<script type="text/javascript" src="/app.js?<?=filemtime('app.js')?>"></script>
</head>
<body>
<a class="skip-link captions" href="#main-content">Skip to main content</a>
<header class="header shadow unselectable" role="banner">
	<div class="horizontal-view">
		<button type="button" class="menu-button menu-button-action" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-navigation"><img class="menu-button-action" src="/icons/menu.svg" alt=""></button>
		<div class="logo">
			<a data-href="/" class="prefix">wallet</a><a href="https://promo.viz.world/"><img src="/icons/logo-viz-simple.svg" alt="VIZ World"></a><span class="testnet-badge" style="display:none">testnet</span>
		</div>
		<div class="user-menu">
			<div class="login">&hellip;</div>
			<div class="user-buttons">
				<button type="button" class="icon-button add-account" aria-label="Add account"><img src="/icons/circle-plus.svg" alt=""></button>
				<button type="button" class="icon-button drop-down" aria-label="Switch account" aria-expanded="false"><img src="/icons/drop-down.svg" alt=""></button>
				<div class="users-drop-down" role="menu"></div>
				<button type="button" class="icon-button logout" aria-label="Log out"><img src="/icons/logout.svg" alt=""></button>
				<button type="button" class="icon-button wallet-lock-btn" style="display:none" aria-label="Lock wallet">&#128274;</button>
			</div>
		</div>
		<nav class="menu-list captions" aria-label="Primary navigation">
			<div class="menu-bg"></div>
		</nav>
	</div>
</header>

<main id="main-content" class="horizontal-view vertical-view" tabindex="-1">
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
			<div class="view view-pm"></div>
			<div class="view view-multisig"></div>
		</div>
	</div>
</main>
<button type="button" class="go-top adaptive-show-block" aria-label="Back to top">&uarr;</button>
<nav id="mobile-navigation" class="absolute-view menu-list captions" aria-label="Mobile navigation" aria-hidden="true">
	<div class="menu-bg"></div>
</nav>
</body>
</html>