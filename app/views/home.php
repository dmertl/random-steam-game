<?php
$test_game = '{"appId":11280,"id":"penguinsarena","logoThumbnailUrl":"http:\/\/media.steampowered.com\/steamcommunity\/public\/images\/apps\/11280\/7da031d76b55984403a020a0db3225d4b6659395_thumb.jpg","logoUrl":"http:\/\/media.steampowered.com\/steamcommunity\/public\/images\/apps\/11280\/7da031d76b55984403a020a0db3225d4b6659395.jpg","name":"Penguins Arena: Sedna\'s World","shortName":"penguinsarena"}';
?>
<html>
<head>
	<title>Random Steam Game</title>
	<link rel="stylesheet" type="text/css" href="app/css/style.css" media="all">
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script type="text/javascript" src="app/js/home.js"></script>
</head>
<body>
<div id="main">
	<div id="main-header">
		<h2>Random Game</h2>
		<h1 id="steam-name">Steam Name Goes Here</h1>
		<form action="" method="post" id="user-form">
			<input type="text" name="steam_id" id="user-steam-id" placeholder="Steam ID"/>
			<input type="submit" name="submit" value="Submit"/>
		</form>
	</div>
	<div id="main-content">
		<div class="games-list"></div>
	</div>
</div>
</body>
</html>