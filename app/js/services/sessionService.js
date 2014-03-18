'use strict';

schoolmeinApp.service('SessionService', function() {
	var ref = new Firebase("https://schoolmein.firebaseIO.com");

	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
      	if (error) {
      		// an error occured while attempting login
      		console.log('LOGINDENIED');
      		console.log(error);
      	} else if (user) {
      		// user authenticated with Firebase
      		console.log('LOGGEDIN User ID: ' + user.id + ", Provider: " + user.provider);
      	} else {
      		// user is logged out
      	}
  	});

  	return {
  		getAuth: function() {
  			return auth;
  		}
  	};
})