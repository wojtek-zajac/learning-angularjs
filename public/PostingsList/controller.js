angular.module('myApp.PostingsList')
    .controller('PostingsListCtrl', PostingsListCtrl)

function PostingsListCtrl($http, $scope) {

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
