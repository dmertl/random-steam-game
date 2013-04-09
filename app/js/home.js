/**
 * TODO: pass back steam user info for header
 * TODO: ability to switch steam ids
 * TODO: ability to refresh game cache
 * TODO: add play link with steam://run/<appId>
 * TODO: error handling
 * TODO: save last steam id used in cookie
 * TODO: Display total count of games
 * TODO: When coming in with saved steam id do not pick game automatically
 * TODO: spinning animation when picking random game
 */
$(document).ready(function() {
	$('#user-form').on('submit', function(e) {
		e.preventDefault();
		HomeUi.getSteamProfile($('#user-steam-id').val());
		HomeUi.getRandomGameForSteamId($('#user-steam-id').val());
	});
	$('#new-random-game').on('click', function(e) {
		e.preventDefault();
		HomeUi.getRandomGameForSteamId($('#user-steam-id').val());
	});
});

var HomeUi = {
	getSteamProfile: function(steam_id) {
		console.log('getSteamProfile ' + steam_id);
		$.ajax('app/ajax.php', {
			data: { 'action': 'get_steam_profile', 'steam_id': steam_id },
			success: HomeUi.updateUiWithSteamProfile,
			error: HomeUi.logAjaxError
		});
	},
	updateUiWithSteamProfile: function(profile) {
		console.log('updateUiWithSteamProfile');
		console.log(profile);
		$('#steam-name').html(profile.nickname);
	},
	getRandomGameForSteamId: function(steam_id) {
		console.log('getRandomGameForSteamId ' + steam_id);
		$.ajax('app/ajax.php', {
			data: { 'action': 'choose_random_game', 'steam_id': steam_id },
			success: HomeUi.updateUiWithRandomGame,
			error: HomeUi.logAjaxError
		});
	},
	updateUiWithRandomGame: function(game) {
		console.log('updateUiWithRandomGame');
		console.log(game);
		$('#user-form').hide();
		$('#steam-name').show();
		$('#main-content').find('.games-list').empty()
				.append(HomeUi.createRandomGameUi(game));
	},
	createRandomGameUi: function(game) {
		return $('<div class="game-row">' +
					'<div class="game-logo">' +
						'<a href="http://steamcommunity.com/app/' + game.appId + '" target="_blank">' +
							'<img src="' + game.logoUrl + '" />' +
						'</a>' +
					'</div>' +
					'<div class="game-item">' +
						'<div class="name">' + game.name + '</div>' +
					'</div>' +
				'</div>');
	},
	logAjaxError: function(jqXHR, textStatus, errorThrown) {
		console.log('AJAX error');
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	}
};