angular.module('myApp.postings')
    .component('postingsList', {
        controller: 'PostingsListCtrl',
        template:
            `<list-item ng-repeat="posting in $ctrl.postings" posting="posting"></list-item>`
    })
