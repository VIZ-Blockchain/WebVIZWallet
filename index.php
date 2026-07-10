<?php
$path=$_SERVER['REQUEST_URI'];
$_GET=array();
$query_string='';
if(false!==strpos($path,'?')){
	$query_string=substr($path,1+strpos($path,'?'));
	$path=substr($path,0,strpos($path,'?'));
	$pairs=explode('&',$query_string);
	foreach($pairs as $pair){
		if(''===$pair){continue;}
		$kv=explode('=',$pair,2);            // split по ПЕРВОМУ '=' — значения с '=' (base64/подписи) не рвутся
		$name=urldecode($kv[0]);
		if(''===$name){continue;}
		$_GET[$name]=isset($kv[1])?urldecode($kv[1]):'';
	}
}
$path_ext=false;
if(false!==strrpos($path,'.')){
	$path_ext=substr($path,strrpos($path,'.'));
}
if(!$path_ext){
	if('/'!=substr($path,strlen($path)-1)){
		if($query_string){
			$query_string='?'.$query_string;
		}
		header('location:'.$path.'/'.$query_string);
		exit;
	}
}
$path_array=explode('/',trim($path));

if(isset($path_array[1]) && 'go'==$path_array[1]){
	// Внешний переход через /go?url=... . Ссылки на /go генерятся из ПОЛЬЗОВАТЕЛЬСКИХ метаданных
	// профиля (сайт/соцсети) → это open-redirect/фишинг-вектор на домене кошелька. Поэтому:
	//  - принимаем только http(s) (никаких javascript:/data:),
	//  - НЕ редиректим автоматически, а показываем страницу-предупреждение с подтверждением.
	$url=isset($_GET['url'])?trim($_GET['url']):'';
	if(''===$url || !preg_match('~^https?://~i',$url)){
		header('location:/');
		exit;
	}
	$host=parse_url($url,PHP_URL_HOST);
	$safe_url=htmlspecialchars($url,ENT_QUOTES,'UTF-8');
	$safe_host=htmlspecialchars((string)$host,ENT_QUOTES,'UTF-8');
	header('Content-Type: text/html; charset=UTF-8');
	print '<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta name="robots" content="noindex,nofollow">
	<title>Переход на внешний сайт — wallet VIZ world</title>
	<link rel="stylesheet" href="/app.css?'.filemtime('app.css').'">
</head>
<body>
<div class="horizontal-view vertical-view">
	<div class="cards-view">
		<div class="cards-container">
			<div class="card captions">
				<h3>Вы покидаете wallet.viz.world</h3>
				<p>Ссылка ведёт на внешний сайт, не связанный с VIZ. Проверьте адрес перед переходом:</p>
				<p><b>'.$safe_host.'</b></p>
				<p class="grey small" style="word-break:break-all">'.$safe_url.'</p>
				<p style="margin-top:15px">
					<a class="inline-button" rel="noopener noreferrer nofollow" href="'.$safe_url.'">Перейти</a>
					<a class="inline-button red" href="/">Отмена</a>
				</p>
			</div>
		</div>
	</div>
</div>
</body>
</html>';
	exit;
}
/*
$langs_arr=['rus','eng'];
$default_lang='rus';
$lang=$default_lang;
if(isset($_GET['lang'])){
	if(in_array($_GET['lang'],$langs_arr)){
		setcookie('lang',$_GET['lang'],time()+31536000,'/');//1 year
		header('location:/');
		exit;
	}
}
if(isset($_COOKIE['lang'])){
	if(!in_array($_COOKIE['lang'],$langs_arr)){
		setcookie('lang','',time()+31536000,'/');//clear if lang not exist
		header('location:/');
		exit;
	}
	else{
		$lang=$_COOKIE['lang'];
	}
}
if(!in_array($lang,$langs_arr)){
	$lang=$default_lang;
}
include('index.'.$lang.'.php');
*/
include('index.template.php');