app.factory('AppService', function(){
	
	var players = [];
	var appService = {};
	var teamA = [];
	var teamB = [];
	var levelTeamA = 0;
	var levelTeamB = 0;

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
				players.splice(i, 1);
				persist()
			}
		}
	}

	appService.update = function(newPlayer){
		for (var i = 0; i < players.length; i++) {
			if (players[i].name === newPlayer.otherName) {
				players[i].name = newPlayer.name;
				players[i].level = newPlayer.level;
				players[i].position = newPlayer.position;
				persist()
			}
		}
	}


	appService.sortPlayers = function(){
		teamA = [];
		teamB = [];
		levelTeamA = 0;
		levelTeamB = 0;

		var sortList = players;
		//select goalkepper
			for (var i = 0; i < 2; i++) {
				for (var j = 0; j < sortList.length; j++){
					if (sortList[j].position === 'goalkeeper') {
						if (i == 0) {
							teamA.push(sortList[j]);
							levelTeamA += sortList[j].level;
							sortList.splice(j,1);
							break;
						} else{
							teamB.push(sortList[j]);
							levelTeamB += sortList[j].level;
							sortList.splice(j,1);
							break;	
						}
					}
				}
			}

		var len = sortList.length;
		while (len > 0)  {
			
			len = sortList.length;
			var sort = Math.floor(Math.random() * len);

			if (len % 2 == 0) {
				teamA.push(sortList[sort]);
				levelTeamA += sortList[sort].level;
			} else {
				teamB.push(sortList[sort]);
				levelTeamB += sortList[sort].level;
			}
			sortList.splice(sort,1);
			len = sortList.length;
		}
	}
	
	appService.getTeamA = function(){
		return teamA;
	}

	appService.getTeamB = function(){
		return teamB;
	}

	appService.getLevelTeamA = function(){
		return levelTeamA;
	}

	appService.getLevelTeamB = function(){
		return levelTeamB;
	}

	appService.getReport = function(){
		var report = {};
		report.qtyPlayers = players.length;
		return report;
	}

	return appService;
});