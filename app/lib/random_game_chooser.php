<?php

/**
 * @author David Mertl <dmertl@gmail.com>
 */
class RandomGameChooser {

	/**
	 * @param $steam_id
	 * @return SteamGame
	 * @throws Exception
	 */
	public static function choose($steam_id) {
		$games = self::_getSteamIdGames($steam_id);
		if(count($games) > 0) {
			$choice = rand(0, count($games));
			$chosen_game = current(array_slice($games, $choice, 1));
			return $chosen_game;
		} else {
			throw new Exception('No games found');
		}
	}

	protected static function _getSteamId($steam_id) {
		if($id = apc_fetch('SteamId:'.$steam_id)) {
			return $id;
		}
		$id = SteamId::create($steam_id);
		apc_store('SteamId:'.$steam_id, $id);
		return $id;
	}

	protected static function _getSteamIdGames($steam_id) {
		if($games = apc_fetch('SteamId::games:'.$steam_id)) {
			return $games;
		}
		$id = self::_getSteamId($steam_id);
		$games = $id->getGames();
		apc_store('SteamId::games:'.$steam_id, $games);
		return $games;
	}

}
