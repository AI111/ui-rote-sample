import ITaskService = app.services.ITaskService;
/**
 * Created by sasha on 3/21/17.
 */
module app.services {
    export interface ITaskService {
        sendScrollData(event: models.IScrollData): angular.IPromise<any>;
        getLogData():  models.IScrollData[];
    }

    class Task1Service implements ITaskService {
        static $inject = [
            '$q',
        ];
        constructor(private $q: angular.IQService) {
        }

        private transportLog: models.IScrollData[] = [];

        sendScrollData(event: models.IScrollData): angular.IPromise<any> {
            this.transportLog.push(event);
            return this.$q.resolve({});
        }

        getLogData(): models.IScrollData[] {
            return this.transportLog;
        }
    }

    angular
        .module('app')
        .service('app.services.task1', Task1Service);
}