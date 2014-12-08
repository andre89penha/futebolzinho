app.controller('ListCtrl', function($scope, $location, AppService){
		AppService.sortPlayers();
		$scope.listTeamA = AppService.getTeamA();
		$scope.listTeamB = AppService.getTeamB();
});