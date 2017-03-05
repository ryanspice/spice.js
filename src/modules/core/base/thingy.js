/* @flow WIP clean redundant codes */

import ITypes from "../interfaces/ITypes";

const Types:Object = new ITypes();


import type {

	IThingy

} from '../interfaces/ITypes';

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/

 class WeakMapThingy  {

    static properties:Object = { name:'sjsclass', map:null, version:0 };

    static map:WeakMap<*,*> = new WeakMap();

	map:WeakMap<*,*> = new WeakMap();

    private:bool;

    constructor(map:WeakMap<*,*>) {


        if (typeof map != 'undefined'){

            this.constructor.map = map;

            this.private = true;

            this.constructor.map.set(this,this.constructor.properties);

        } else {

            console.warn(map);

            map = new WeakMap();

            this.constructor.map = map;

            this.private = false;

            this.constructor.map.set(this,this.constructor.properties);

        }

		return (this:IThingy);
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
