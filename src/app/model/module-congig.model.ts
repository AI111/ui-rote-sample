/**
 * Created by sasha on 3/21/17.
 */
module app.models{
    export type ModulePosition = "left" | "top" | "rigth" | "bottom";
    export interface IModuleConfig {
        moduleId: number,
        moduleName: number,
        modulePosition: ModulePosition,
        activeFrom: Date,
        activeTo: Date,
        moduleAccessLevel: number,
        moduleOrder: number
        moduleStatus: number,
        moduleTitle: string,
        languageCode: string,
        moduleParameters: string
    }
}