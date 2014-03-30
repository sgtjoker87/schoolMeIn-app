'use strict';

var schoolmeinApp = angular.module('schoolmeinApp', ['firebase']);

/*
schoolmeinApp.controller('SampleController', ['$scope', '$firebase', '$firebaseSimpleLogin',
    function($scope, $firebase, $firebaseSimpleLogin) {
      var ref = new Firebase("https://schoolmeinApp.firebaseio.com/");
      
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

    }]);
*/
