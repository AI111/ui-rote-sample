/**
 * Created by sasha on 3/21/17.
 */
module app.task1 {

    export class Task1Controller {

        static $inject = [
            'app.services.task1'
        ];
        constructor(
            private task1Service: services.ITaskService
        ) {

            console.log('task 1');
        }
        get logData(): app.models.ScrollData[] {
            return this.task1Service.getLogData();
        }
        onScroll(event):void{
            console.log('event',event.timeStamp,event.target.scrollTop);
            this.task1Service.sendScrollData(new models.ScrollData(event.target.scrollTop));
        }

    }

    angular
        .module('app.task1')
        .controller('app.task1.Task1Controller', Task1Controller);
}
