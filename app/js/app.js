'use strict';

var schoolmeinApp = angular.module('schoolmeinApp', ['ngSanitize'], ['firebase']);

schoolmeinApp.controller('SampleController', ['$scope', '$firebase', '$firebaseSimpleLogin',
    function($scope, $firebase, $firebaseSimpleLogin) {
      var ref = new Firebase("https://schoolmeinApp.firebaseio.com/");
      $scope.auth = $firebaseSimpleLogin(ref);
    }]);
