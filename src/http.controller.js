myApp.controller('HttpCtrl', ['$scope', '$http', function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'https://api.smartrecruiters.com/v1/companies/PIQC/postings'
    })
    .then(function successCallback(response) {
        
        console.log(response.data.content);
        $scope.postings = response.data.content;

    }, function errorCallback(response) {
        
        alert('Something went wrong...');
        console.log(response);
    });

    $scope.deletePosting = function (i) {
        $scope.postings.splice(i, 1);
    };
}]);
