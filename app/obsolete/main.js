'use strict';

/* Controllers */

var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider', 
	function ($routeProvider) {
		.when('/', {
			templateUrl: 'views/Index.html',
			controller: 'IndexCtrl'
		})
		.when('/home', {
			templateUrl: 'views/main.html',
			controller: 'HomeCtrl'
		})
		.when('/portals', {
			templateUrl: 'views/Portals.html'
			controller: 'PortalsCtrl'
		})
		.when('/askscholar', {
			templateUrl: 'views/AskScholar.html'
			controller: 'AskScholarCtrl'
		})
		.when('/submit', {
			templateUrl: 'views/Submit.html'
			controller: 'SubmitCtrl'
		})
		.otherwise{(
			redirectTo: 'views/main.html')}
	}])

App.factory("DataService, function() {


	")


