const myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', 'Math', 'Server', function ($scope, Math, Server) {

    $scope.text = 'Hello, Angular fanatic.';

    const a = 12;
    const b = 24;
    const result = Math.multiply(a, b);
    console.log(result);

    const jsonGet = 'https://api.smartrecruiters.com/v1/companies/PIQC/postings';
    Server.get(jsonGet);

}]);

myApp.controller('UserCtrl', ['$scope', function ($scope) {

    // Let's namespace the user details
    // Also great for DOM visual aids too
    $scope.user = {};
    $scope.user.details = {
        "username": "Wojciech Zając",
        "id": "553312"
    };

}]);

myApp.directive('customButton', function () {
    return {
        // restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: 'templates/customButton.html',
        link: function (scope, element, attrs) {
            // DOM manipulation/events here! 
        }
    };
});

myApp.service('Math', function () {
    this.multiply = function (x, y) {
        return x * y;
    };
});

myApp.factory('Server', ['$http', function ($http) {
    return {
        get: function(url) {
            return $http.get(url);
        },
        post: function(url) {
            return $http.post(url);
        }
    };
}]);