angular.module('myApp.PostingsList')
    .component('postingsList', {
        controller: 'PostingsListCtrl',
        template:
            `<ul>
                <li ng-repeat="posting in postings">
                    <p>{{ posting.name }}</p>
            </ul>`
    })
