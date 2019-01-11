myApp.controller('UserCtrl', ['$scope', function ($scope) {

    // Namespace the user details first
    $scope.user = {};
    $scope.user.details = {
        "username": "Wojciech Zając",
        "id": "553312"
    };
}]);
