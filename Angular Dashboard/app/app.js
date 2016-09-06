var app = angular.module('dashboardApp',['ngRoute','chart.js']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('home',{
		templateUrl:'app/views/home.html',
		controller:'homeController'
	})
	.when('/',{
		templateUrl:'app/views/userProfile.html',
		controller:'profileController'
	})
	.otherwise({
		templateUrl:'app/views/error.html'
	})
	
}])
