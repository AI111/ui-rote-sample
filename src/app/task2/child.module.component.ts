/**
 * Created by sasha on 3/21/17.
 */

    module app.task2 {
        class ChildModuleComponent {
            config: app.models.IModuleConfig;

            constructor() {
                console.log(this.config);
            }

            getClass(): string {
                return 'module-' + this.config.modulePosition;
            }
        }

        angular
            .module('app.task2')
            .component('childModule', {
                templateUrl: 'app/task2/templates/child.module.component.html',
                controller: ChildModuleComponent,
                controllerAs: "cm",
                bindings: {
                    config: '=',
                }
            });
    }
