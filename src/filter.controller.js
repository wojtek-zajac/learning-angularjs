myApp.controller('FilterCtrl', ['$scope', function ($scope) {
    
    $scope.numbers = [1, 2, 3, 6, 10, 22, 33, 44, 55, 66, 67, 68, 88, 100, 101];
    $scope.lowerBound = null;

    $scope.greaterThanNum = function (i) {
        return i > $scope.lowerBound;
    };
}]);
