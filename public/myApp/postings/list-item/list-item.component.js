angular.module('myApp.postings')
    .component('listItem', {
        bindings: {
            posting: '<'
        },
        template:
            '<p>{{ $ctrl.posting.name }}</p>'
    })
