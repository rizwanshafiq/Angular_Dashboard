var app = angular.module('dashboardApp',['ngRoute','chart.js']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'app/views/home.html',
		controller:'homeController'
	})
	.otherwise({
		templateUrl:'app/views/error.html'
	})
	
}])
