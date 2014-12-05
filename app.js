/**
* App Module
*
* module app
*/
var app = angular.module('App', ['ngRoute']);

//configure route

app.config(
	function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:'pages/home.html',
		controller: 'AppCtrl'
	})
	.when('/edit/:player', {
		templateUrl: 'pages/edit.html',
		controller:  'EditCtrl'
	})
	.when('/list', {
		templateUrl: 'pages/list.html',
		controller:  'ListCtrl'
	})
	.otherwise({redirectTo:'/'})
});