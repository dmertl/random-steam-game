<?php

/**
 * @author David Mertl <dmertl@gmail.com>
 */
require_once('config.php');

require_once('bootstrap.php');

require_once('lib/random_game_chooser.php');

if(isset($_GET['steam_id'])) {
	try {
		$game = RandomGameChooser::choose($_GET['steam_id']);
		$game_data = array(
			'appId' => $game->getAppId(),
			'id' => $game->getId(),
			'logoThumbnailUrl' => $game->getLogoThumbnailUrl(),
			'logoUrl' => $game->getLogoUrl(),
			'name' => $game->getName(),
			'shortName' => $game->getShortName()
		);
		jsonResponse($game_data);
	} catch(Exception $e) {
		jsonErrorResponse($e->getMessage());
	}
} else {
	jsonErrorResponse('Must send steam_id', 400);
}

function jsonResponse($data, $status=200) {
	$data = json_encode($data);
	header('HTTP/1.1 ' . $status);
	header('Content-Type: text/json');
	header('Content-Length: ' . strlen($data));
	echo $data;
}

function jsonErrorResponse($message, $status=500) {
	jsonResponse(array('error' => $message), $status);
}
