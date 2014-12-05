/**
* app Module
*
* module app.
*/
var app = angular.module('app', ['ngRoute']);

//configure route

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:'pages/home.html',
		controller: 'appCtrl'
	})
	.when('/about', {
		templateUrl:'pages/about.html',
		controller: 'aboutCtrl'
	})
	.when('/contact', {
		templateUrl:'pages/contact.html',
		controller: 'contactCtrl'
	})
});
app.controller('appCtrl', function($scope){
	$scope.message = 'Home';
});

app.controller('aboutCtrl', function($scope){
	$scope.message = 'about';
});

app.controller('contactCtrl', function($scope){
	$scope.message = 'contact';
});