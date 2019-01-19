angular.module('myApp.postings')
    .controller('PostingsListCtrl', PostingsListCtrl)

function PostingsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('https://api.smartrecruiters.com/v1/companies/PIQC/postings')

    resource.get().$promise
        .then(response => {
            ctrl.postings = response.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Something went wrong...')
            /* eslint-enable no-undef */
        })
}
