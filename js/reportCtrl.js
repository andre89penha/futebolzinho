app.controller('ReportCtrl', function($scope, $location, AppService){
	$scope.report = AppService.getReport();		

	$scope.back = function(){
		$location.path('/');
	}
});