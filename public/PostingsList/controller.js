(function() {
    'use strict'

    angular.module('myApp.PostingsList')
        .controller('PostingsListCtrl', PostingsListCtrl)

    PostingsListCtrl.$inject = ['$scope', '$http']

    function PostingsListCtrl($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://api.smartrecruiters.com/v1/companies/PIQC/postings'
        })
        .then(response => {
            $scope.postings = response.data.content
        }, response => {
            /* eslint-disable no-console */
            console.error(response)
            /* eslint-enable no-console */
        })
    }
})()
