app.factory('AppService', function(){
	
	var players = [];
	var appService = {};

	var persist = function(){
		localStorage.setItem('players', JSON.stringify(players));
	}

	var remove = function(index){

	}
	
	appService.addPlayer = function(player){
		players.push(player);
		persist();
	}

	appService.getPlayers = function(){
		var retrivePlayers = JSON.parse(localStorage.getItem('players'));
		if(retrivePlayers && retrivePlayers.length > 0){
			players = retrivePlayers;
		}
		return players
	}

	appService.removePlayer = function(player){
		
		for (var i = 0; i < players.length; i++) {
			if (players[i].name === player) {
				console.log('Entrou no if: ' + i);
				players.splice(i, 1);
				persist()
			}
		}
	}

	appService.update = function(newPlayer){
		console.log('update');
		for (var i = 0; i < players.length; i++) {
			console.log('for: ' + i);
			if (players[i].name === newPlayer.otherName) {
				console.log('Entrou no if: ' + i);
				players[i].name = newPlayer.name;
				players[i].level = newPlayer.level;
				players[i].position = newPlayer.position;
				persist()
			}
		}
	}

	appService.sortPlayers = function(){
		var sortList = players;
		console.log(sortList.length);
	}
	return appService;
});