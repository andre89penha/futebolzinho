app.controller('ListCtrl', function($scope, $location, AppService){
		if (AppService.getPlayers().length >= 4) {
			AppService.sortPlayers();
			$scope.listTeamA = AppService.getTeamA();
			$scope.listTeamB = AppService.getTeamB();
		} else {
			alert("É necessário ter mais de 4 jogadores para sortear os times");
			$location.path('/');
		}
		

		$scope.back = function(){
			$location.path('/');
		}
});