const myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', 'Math', 'Server', function ($scope, Math, Server) {

    $scope.text = 'Hello, Angular fanatic.';
    $scope.greeting = "Wojtek Zając";

    const a = 12;
    const b = 24;
    const result = Math.multiply(a, b);
    console.log(result);

    const jsonGet = 'https://api.smartrecruiters.com/v1/companies/PIQC/postings';
    Server.get(jsonGet);

}]);

myApp.controller('FilterCtrl', ['$scope', function ($scope) {
    
    $scope.numbers = [1, 2, 3, 6, 10, 22, 33, 44, 55, 66, 67, 68, 88, 100, 101];
    $scope.lowerBound = null;

    $scope.greaterThanNum = function (i) {
        return i > $scope.lowerBound;
    };
}]);

myApp.directive('customButton', function () {
    return {
        restrict: 'AE',
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

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        let out = '';
        for (let i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});
