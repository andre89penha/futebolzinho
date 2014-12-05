app.controller('EditCtrl', function($scope, $routeParams, $location, AppService){

	$scope.levels = [
		{name:'Level 1', value:1},
		{name:'Level 2', value:2},
		{name:'Level 3', value:3},
	];

	$scope.positions = ['player', 'goalkeeper'];
	$scope.playerName = $routeParams.player;
	console.log($routeParams.player);
	//$scope.playersIndex = $scope.listPlayers.indexOf($scope.playerName);
	
	$scope.save = function(){
		console.log($scope.playerName);
		console.log($scope.playerPosition);
		console.log($scope.playerLevel.value);

		if (confirm('Deseja realmente alterar o jogador ' + $routeParams.player)) {
			var player = new Object();
			player.otherName = $routeParams.player;
			player.name = $scope.playerName;
			player.level = $scope.playerLevel.value;
			player.position = $scope.playerPosition;
			AppService.update(player);
			$scope.countConvene = player.length;
			$location.path('/');
		}
	} 

	$scope.back = function(){
		$location.path('/');
	}
});