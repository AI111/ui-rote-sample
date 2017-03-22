/**
 * Created by sasha on 3/21/17.
 */
module app.task2 {

    export class Task2Controller {
        static $inject = [];

        constructor(
        ) {
            console.log('TASK2');
        }

    }

    angular
        .module('app.task2')
        .controller('app.task2.Task2Controller', Task2Controller);
}
