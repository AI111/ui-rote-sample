/**
 * Created by sasha on 3/21/17.
 */
module app.models {
    export interface IScrollData{
        scrollTop: number;
        timeStamp: Date;
    }
    export class ScrollData implements IScrollData{
        constructor( public scrollTop: number,
                     public timeStamp : Date = new Date()
        ) {
        }
    }
}