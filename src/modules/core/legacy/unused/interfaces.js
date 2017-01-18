
console.time('Interface');

import ITypes from "./types";
const Types:ITypes = new ITypes();

import {_object, _vector, _weakmap, _string, _number, _method} from "./types";

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/

class _Interface<InfSClass>  {

    static properties:object = { name:'interface', map:null, version:0 };
    static map:weakmap;

    map:weakmap;
    private:bool;

    /**  @type {constructor} */

    constructor(x:weakmap):void {

        if (typeof x != 'undefined'){

            this.constructor.map = x;
            this.private = true;
            this.constructor.map.set(this,this.constructor.properties);

        } else {

            x = new _weakmap();
            this.constructor.map = x;
            this.private = false;
            this.constructor.map.set(this,this.constructor.properties);

        }
            //_IPrivateMap.set(this,this.constructor.properties);

    }

    /**  @type {mixed} */

    get(value:string):mixed {

        //if (this.private==false)
		//return _IPrivateMap.get(this)[value];
        //else
		return this.constructor.map.get(this)[value];

	}

    /**  @type {string} */

    get name():object {

        //if (this.private==false)
        //return _IPrivateMap.get(this)['name'];
        //else
        return this.constructor.map.get(this)['name'];

    }

};

//let _IPrivateMap:weakmap = new _weakmap();
//window.inf = (new _Interface(new _weakmap()):InfSClass);



/**
* Document
* @constant
* @private
*/

const doc = function doc(){

    return document;

}

/** @module
* @interface
* @protected */

class _Log {

     /** @type {Number} */

    static get time() {

        return (this._time);

    }


     /** @type {Number} */

    static set time(value) {

        return (this._time = value);

    }


     /** @type {Number} */

    static get id() {

        return (this._id);

    }


     /** @type {Number} */

    static set id(value) {

        return (this._id = value);

    }

    /**
    * Assigns an id or 0
    * @param {Number} [id] - instance of log
    */

    constructor(id){

        this.id = id || 0;

    }

}

/**
*
* @module
* @interface
* @private
*/

class _Loop extends _Log  {

    constructor(){

        super();

    }

}

/**
*
* @module
* @interface
* @private
*/

class _Compile extends _Log  {

    constructor(){

        super();

    }

}

/**
*
* @module
* @interface
* @private
*/

class App {

    static get fps() {
        console.trace(this);
        return (this._fps);

    }

    static set fps(value) {
        console.trace(this);
        return (this._fps = value);

    }

    static get scale() {
        console.trace(this);
        return (this._scale);

    }

    static set scale(value) {
        console.trace(this);
        return (this._scale = value);

    }

}

/**
*
* @module
* @interface
* @private

class _Build {

    static get build() {

        return (this._build);

    }

    static set build(value) {

         return (this._build = value);

     }

    static get scriptloadtime() {

        return (this._scriptloadtime);

    }

    static set scriptloadtime(value) {

        return (this._scriptloadtime = value);

    }

    static get uptime() {

        return (this._uptime);

    }

    static set uptime(value) {

        return (this._uptime = value);

    }

    constructor(){

        console.log("Interface - BUILD");

    }

}

*/
console.timeEnd('Interface');

export {_Interface,  _Log, _Loop, _Compile,  App, _Build, _Legacy};
