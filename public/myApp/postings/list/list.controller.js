angular.module('myApp.postings')
    .controller('PostingsListCtrl', PostingsListCtrl)

function PostingsListCtrl($http) {
    const ctrl = this

    $http({
        method: 'GET',
        url: 'https://api.smartrecruiters.com/v1/companies/PIQC/postings'
    })
        .then(response => {
            ctrl.postings = response.data.content
        }, response => {
        /* eslint-disable no-console */
            console.error(response)
        /* eslint-enable no-console */
        })
}
