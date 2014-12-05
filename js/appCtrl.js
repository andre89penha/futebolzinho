app.controller('AppCtrl',function($scope,$location, AppService){
	
	$scope.listPlayers = AppService.getPlayers();
	$scope.countConvene = $scope.listPlayers.length;
	$scope.playerLevel = 1;
	$scope.playerPosition = 'player';
	//Função para convocar um jogador.
	$scope.convene = function(){

		if (!isNaN($scope.playerName) || $scope.playerName.length > 3) {
			var player = new Object();
			player.name = $scope.playerName;
			player.level = $scope.playerLevel;
			player.position = $scope.playerPosition;
			AppService.addPlayer(player);
			//$scope.listPlayers.push(player);
			$scope.countConvene = $scope.listPlayers.length;
			$scope.playerName = "";
		} 
	}
	$scope.sortPlayers = function(){
		$location.path('/list');
	}

	$scope.remove = function(player){
		if (confirm('Deseja remover' + player + ' da lista?')) {
			AppService.removePlayer(player);
			$scope.countConvene = $scope.listPlayers.length;
		}
	}
	
});