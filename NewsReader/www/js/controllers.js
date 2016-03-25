angular.module('starter.controllers', ['ngResource'])
    .factory("news", function($resource) {
        return $resource('http://newsapicodemotion2016.azurewebsites.net/api/news/:newsId', { newsId: "@newsId" });
    })
    .controller("newsController", function ($scope, news) {

        $scope.getNews = function () {
            var connection = navigator.connection.type;
            if (connection !== 'none') {
                $scope.posts = news.query();
                $scope.error = "";
            } else {
                $scope.error = "No Internet connection available";
            }
        }

        $scope.getNews();
    })
    .controller("newsDetailController", function($scope, $stateParams, news) {
        var id = $stateParams.newsId;
        $scope.post = news.get({ newsId: id });
    }); 