const myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.text = 'Hello, Angular fanatic.';

}]);

myApp.controller('UserCtrl', ['$scope', function ($scope) {

    // Let's namespace the user details
    // Also great for DOM visual aids too
    $scope.user = {};
    $scope.user.details = {
        "username": "Wojciech Zając",
        "id": "553312"
    };

}])