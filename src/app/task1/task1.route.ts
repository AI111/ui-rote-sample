/**
 * Created by sasha on 3/21/17.
 */
((): void => {
    'use strict';

    angular
        .module('app.task1')
        .config(configureStates);



    configureStates.$inject = ['$stateProvider'];
    function configureStates($stateProvider: ng.ui.IStateProvider) {
        const states = getStates();
        states.forEach(state => {
            $stateProvider.state(state);
        });
    }

    function getStates(): [any] {
        return [
            {
                name: 'task1',
                url: '/task1',
                cache: false,
                templateUrl: 'app/task1/templates/task1.tmpl.html',
                controller: 'app.task1.Task1Controller',
                controllerAs: 'vm',
            }
        ]
    };
})();