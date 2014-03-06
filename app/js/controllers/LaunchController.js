'use strict';

schoolmeinApp.controller('LaunchController',
	function LaunchController($scope) {
		$scope.createNewUser = function(newUser, signupForm) {
			if (signupForm.$valid) {
				window.alert('new user ' + newUser.emailaddress + ' saved!');
			}
		};
	}
);