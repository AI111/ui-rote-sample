/**
 * Created by sasha on 3/21/17.
 */
module app.services {
    export interface ITask2Service {
        getModulesData(): angular.IPromise<models.IModuleConfig[]>
    }

    class Task2Service implements ITask2Service {
        data: any[] = [
            {
                "moduleId": "15",
                "moduleName": "module5",
                "modulePosition": "top",
                "activeFrom": "2015-08-01 08:22:22",
                "activeTo": "2015-10-02 00:00:00",
                "moduleAccessLevel": "1",
                "moduleOrder": "0",
                "moduleStatus": "1",
                "moduleTitle": "Module13",
                "languageCode": "en",
                "moduleParameters": "ssssssssssssssssss"

            }, {
                "moduleId": "16",
                "moduleName": "module5",
                "modulePosition": "left",
                "activeFrom": "2015-08-01 08:22:22",
                "activeTo": "2015-10-02 00:00:00",
                "moduleAccessLevel": "1",
                "moduleOrder": "1",
                "moduleStatus": "1",
                "moduleTitle": "Module13",
                "languageCode": "en",
                "moduleParameters": "ssssssssssssssssss"
            },
            {
                "moduleId": "18",
                "moduleName": "module5",
                "modulePosition": "right",
                "activeFrom": "2015-08-01 08:22:22",
                "activeTo": "2015-10-02 00:00:00",
                "moduleAccessLevel": "1",
                "moduleOrder": "3",
                "moduleStatus": "1",
                "moduleTitle": "Module13",
                "languageCode": "en",
                "moduleParameters": "ssssssssssssssssss"
            },
            {
                "moduleId": "17",
                "moduleName": "module5",
                "modulePosition": "bottom",
                "activeFrom": "2015-08-01 08:22:22",
                "activeTo": "2015-10-02 00:00:00",
                "moduleAccessLevel": "1",
                "moduleOrder": "4",
                "moduleStatus": "1",
                "moduleTitle": "Module13",
                "languageCode": "en",
                "moduleParameters": "ssssssssssssssssss"
            }
        ];


        static $inject = [
            '$q',
        ];

        constructor(private $q: angular.IQService) {
        }

        getModulesData(): angular.IPromise<models.IModuleConfig[]> {
            return this.$q.resolve(this.data as models.IModuleConfig[]);
        }
    }

    angular
        .module('app')
        .service('app.services.task2', Task2Service);
}