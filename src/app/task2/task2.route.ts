/**
 * Created by sasha on 3/21/17.
 */
((): void => {
    'use strict';

    angular
        .module('app.task2')
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
                name: 'state1',
                url: '/state1',
                template: `<parent-module></parent-module>`
            },
            {
                name: 'state2',
                url: '/state2',
                template: `<parent-module  exclude="['right']"></parent-module>`,
            }
        ]
    };
})();