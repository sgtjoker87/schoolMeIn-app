'use strict';

schoolmeinApp.controller('LaunchController',
	function LaunchController($scope) {
		var ref = new Firebase("https://schoolmein.firebaseIO.com");

		var auth = new FirebaseSimpleLogin(ref, function(error, user) {
	      	if (error) {
	      		// an error occured while attempting login
	      		console.log(error);
	      	} else if (user) {
	      		// user authenticated with Firebase
	      		console.log('User ID: ' + user.id + ", Provider: " + user.provider);
	      	} else {
	      		// user is logged out
	      	}
      	});

		$scope.createNewUser = function(newUser, signupForm) {
			if (signupForm.$valid) {
				/* window.alert('new user ' + newUser.emailaddress + ' saved!'); */
				auth.createUser(newUser.emailaddress, newUser.password, function(error, user) {
					if (!error) {
						console.log('User ID: ' + user.id + ', Email: ' + user.email);
					}
				});
			}
		};
	}
);