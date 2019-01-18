angular.module('myApp.postings')
    .controller('PostingsListCtrl', PostingsListCtrl)

function PostingsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('https://api.smartrecruiters.com/v1/companies/PIQC/postings')

    resource.get().$promise
        .then(response => {
            ctrl.postings = response.content
        }, response => {
            /* eslint-disable no-console */
            console.error(response)
            /* eslint-enable no-console */
        })
}
