/* @flow WIP clean redundant codes */

import ITypes from "../interfaces/ITypes";

const Types:Object = new ITypes();

const _IMap = new WeakMap();

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/

 class WeakMapThingy  {

    static properties:Object = { name:'sjsclass', map:null, version:0 };

    static map:WeakMap<*,*> = _IMap;

	map:WeakMap<*,*> = _IMap;

    private:bool;

    constructor(x:WeakMap<*,*>):void {

        if (typeof x != 'undefined'){

            this.constructor.map = x;

            this.private = true;

            this.constructor.map.set(this,this.constructor.properties);

        } else {

            console.warn(x);

            x = new WeakMap();

            this.constructor.map = x;

            this.private = false;

            this.constructor.map.set(this,this.constructor.properties);

        }

    }

    /*
	*/

	set map(value:WeakMap<*,*>){

		this.constructor.map = value;

	}

    /*
	*/

    get(value:string):Object {

		return this.constructor.map.get(this)[value];
	}

};

export default WeakMapThingy;
