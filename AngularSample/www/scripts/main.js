var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.person = {
        name : "Matteo Pagani"
    };
});