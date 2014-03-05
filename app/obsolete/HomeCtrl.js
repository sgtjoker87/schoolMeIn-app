

var app = angular.module('App', ['firebase']);


app.controller("HomeCtrl", function($scope, $http){

    $scope.apiKey = "HomeCtrl";
    $scope.results = [];
    $scope.orderFields = ["Posted Date", "Rating"];
$scope.orderDirections = ["Descending", "Ascending"];
$scope.orderField = "Posted Date"; //Default order field
$scope.orderReverse = false;
    $scope.setTagsFilter = function(Tags) {
    $scope.TagsFilter = Tags;

    $scope.customOrder = function(portal) {
    switch ($scope.orderField) {
        case "Air Date":
            return portal.question.first_aired;
            break;
        case "Rating":
            return portal.question.ratings.percentage;
            break;
    }
};
}
    $scope.init = function() {
        //API requires a start date
        var today = new Date();
        //Create the date string and ensure leading zeros if required
        var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
        $http.jsonp(/* insert the call back from firebase data*/ + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
            //As we are getting our data from an external source, we need to format the data so we can use it to our desired effect
            //For each day, get all the questions just like reddit and quora
            angular.forEach(data, function(value, index){
                //The API stores the full date separately from each question. Save it so we can use it later
                var date = value.date;
                //For each episodes, add it to the results array
                angular.forEach(value.question, function(portal, index){
                    //Create a date string from the timestamp so we can filter on it based on user text input
                    portal.date = date; //Attach the full date to each question in this portal
                    $scope.results.push(portal);
                    //Loop through each tags for this episode
                    angular.forEach(portal.show.Tags, function(Tags, index){
                        //Only add to the availableGenres array if it doesn't already exist
                        var exists = false;
                        angular.forEach($scope.availableTags, function(avTags, index){
                            if (avTags == Tags) {
                                exists = true;
                            }
                        });
                        if (exists === false) {
                            $scope.availableGenres.push(Tags);
                        }
                    });
                });
            });
        }).error(function(error) {
 
        });
    };
});

app.filter('isTags', function() {
    return function(input, Tags) {
        if (typeof Tags == 'undefined' || Tags == null) {
            return input;
        } else {
            var out = [];
            for (var a = 0; a < input.length; a++){
                for (var b = 0; b < input[a].show.Tags.length; b++){
                    if(input[a].show.Tags[b] == Tags) {
                        out.push(input[a]);
                    }
                }
            }
            return out;
        }
    };
});