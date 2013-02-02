/**
 * TODO: ability to select new random game
 * TODO: pass back steam user info for header
 * TODO: ability to switch steam ids
 * TODO: ability to refresh game cache
 */
$(document).ready(function() {
	$('#user-form').on('submit', function(e) {
		e.preventDefault();
		HomeUi.getRandomGameForSteamId($('#user-steam-id').val());
	});
});

var HomeUi = {
	getRandomGameForSteamId: function(steam_id) {
		console.log('getRandomGameForSteamId ' + steam_id);
		$.ajax('app/ajax.php', {
			data: { 'steam_id': steam_id },
			success: HomeUi.updateUiWithRandomGame,
			error: HomeUi.logAjaxError
		});
	},
	updateUiWithRandomGame: function(game) {
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