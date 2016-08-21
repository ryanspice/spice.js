
console.time('Types');

type _NodeCallback_<E, V> = (err: ?E, value: ?V) => void;

export type object = Object;
//export type string = string;
let X:Number,y:Number = 0;
export type vector<X,Y> = {x:X,y:Y};

export type app<APP,VISUALS,GRAPHICS> = {app:APP,visuals:VISUALS, graphics: GRAPHICS};

import type App from "./core/interfaces/IApp";
//export type App;

export type weakmap = any;

//export type number = number;
export type method = Function;

export type array = Array<any>;
export type array_string = Array<string>;
export type array_number = Array<number>;

const _object:object = {};
const _string:string = "";
const _vector:vector = {x:0,y:0};
const _weakmap:weakmap = WeakMap;

const _number:number = 0;
const _method:method = ()=>{};

const _array:array = [];
const _array_number:array_number = [0];
const _array_string:array_string = [""];

const types:array = [
    ['_object',_object],
    ['_vector',_vector],
    ['_string',_string],
    ['_weakmap',_weakmap],
    ['_number',_number],
    ['_method',_method],
    ['_array',_array],
    ['_array_number',_array_number],
    ['_array_string',_array_string]
];

interface _ITypes {
    list:array;
    get:method;
};

class ITypes<T:number> {

    constructor():void {

        this.get().forEach((entry,e)=>{

            (window[entry[0]] = entry[1]);

        });

    }

    get ():array {

        return types;

    }

};

console.timeEnd('Types');

export {_vector, _weakmap, _number, _string, _method, _object, _array, _array_string, _array_number};

export default ITypes;
