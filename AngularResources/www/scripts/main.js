var app = angular.module('myApp', []);


app.controller('myController', function ($scope, $http) {
    $scope.getData = function () {
        $http.get('http://samplerestapi.azurewebsites.net/api/values')
            .success(function (data) {
                $scope.characters = data;
            });
    }
});