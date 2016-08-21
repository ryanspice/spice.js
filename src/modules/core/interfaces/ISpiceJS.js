/* @flow */

import {_object, _vector, _weakmap, _string, _number, _method} from "../../types";

import type {vector, string, object, weakmap, number, array, method, app} from "../../types";
export type {vector, string, object, weakmap, number, array, method, app};

declare interface InfSClass {
    get(value:string):mixed;
    name():object;
    constructor(x:weakmap):void;
}


declare interface InfBuild {
    id:number;
}

declare interface mouseEvents {

    initMouseEvents():void;

}

declare interface IVector {
    name:string;
    x:number;
    y:number;
}

declare module "_IFace" {
  declare function exports(args: any): any;
}

declare module "IFace" {
  declare function exports(args: any): any;
}

declare class _IFace {


}
