<<<<<<< HEAD
// @typecheck: production, some
/* @flow */


//console.time('Types2');
=======
/* @flow */

console.time('Types2');
>>>>>>> origin/master

type _NodeCallback_<E, V> = (err: ?E, value: ?V) => void;

export type object = Object;
//export type string = string;

<<<<<<< HEAD

export type Pace = {
  timer: number;
  rate: number;
  offset: number;
  delta: number;
  targetfps: number;
};

export type TClient = {
	discription:string;
	projectSize:vector;
	app:object;
	Math:object;
	particles:object;
	visuals:object;
	graphics:object;
	ext:object;
	room:object;
	audio:object;
	mainLoop:object;
	second:object;
	loader:object;
	update:object;
	renderer:object;
	data:object;
};

export type vector<X=0,Y=0> = {x:0,y:0};


export type app<APP,VISUALS,GRAPHICS> = {app:APP,visuals:VISUALS, graphics: GRAPHICS};

export type _weakmap = WeakMap;

export type weakmap = WeakMap;
export type object = Object;

//var weakmap:weakmap;
=======
export type vector<X,Y> = {x:X,y:Y};

export type app<APP,VISUALS,GRAPHICS> = {app:APP,visuals:VISUALS, graphics: GRAPHICS};

export type weakmap = any;
>>>>>>> origin/master

//export type number = number;
export type method = Function;

<<<<<<< HEAD
const _metatag = document.createElement('meta');

export type metatag = _metatag;

=======
>>>>>>> origin/master
export type element = object;


export type array = Array<any>;
export type array_string = Array<string>;
export type array_number = Array<number>;

const _object:object = {};
const _string:string = "";
const _vector:vector = {x:0,y:0};
<<<<<<< HEAD





//window.t = weakmap;

//const _weakmap:WeakMap;

//console.log(_weakmap,weakmap);


=======
const _weakmap:weakmap = WeakMap;
>>>>>>> origin/master

const _number:number = 0;
const _method:method = ()=>{};

const _array:array = [];
const _array_number:array_number = [0];
const _array_string:array_string = [""];

const types:array = [
    ['_object',_object],
    ['_vector',_vector],
    ['_string',_string],
<<<<<<< HEAD
/*    ['_weakmap',_weakmap],*/
=======
    ['_weakmap',_weakmap],
>>>>>>> origin/master
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

<<<<<<< HEAD
//console.timeEnd('Types2');
=======
console.timeEnd('Types2');
>>>>>>> origin/master

export {_vector, _weakmap, _number, _string, _method, _object, _array, _array_string, _array_number};

export default ITypes;
