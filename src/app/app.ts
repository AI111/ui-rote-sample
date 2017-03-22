module app {

    angular.module('app', [
        'ui.router',
        'app.task1',
        'app.task2'
    ])
        .config(( $urlRouterProvider:angular.ui.IUrlRouterProvider,$locationProvider) => {
            $urlRouterProvider.otherwise('/state1');
            // $locationProvider.html5Mode(true);

        })

}
