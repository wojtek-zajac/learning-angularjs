const myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.text = 'Hello, Angular fanatic.';

}]);