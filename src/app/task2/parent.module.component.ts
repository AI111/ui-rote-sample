/**
 * Created by sasha on 3/21/17.
 */

    module app.widgets {
        class ParentModuleComponent {
            modules: models.IModuleConfig[];
            static $inject = ['app.services.task2'];
            exclude: [models.ModulePosition];

            constructor(private service: services.ITask2Service) {
                this.onInit();
            }

            onInit(): void {
                this.service.getModulesData()
                    .then((data: models.IModuleConfig[]) => {
                            this.modules = this.exclude ?
                                data.filter((module) => this.exclude.indexOf(module.modulePosition) === -1) : data;
                        },
                        err => {

                        })
            }
        }
        angular
            .module('app.task2')
            .component('parentModule', {
                templateUrl: 'app/task2/templates/parent.module.component.html',
                controller: ParentModuleComponent,
                controllerAs: "pm",
                bindings: {
                    exclude: '=',
                }
            });
    }
