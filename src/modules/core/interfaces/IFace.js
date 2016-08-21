
/* @flow */

import ITypes from "./ITypes";

const Types:ITypes = new ITypes();

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/

const _IMap = new WeakMap();

 class _IFace  {

    static properties:object = { name:'interface', map:null, version:0 };
    static map:WeakMap = _IMap;

    map:WeakMap = _IMap;
    private:bool;

    /**  @type {constructor} */

    constructor(x:any):void {

        //console.log(this.constructor.map.set(this,this.constructor.properties),this)

        if (typeof x != 'undefined'){

            this.constructor.map = x;
            //this.private = true;
            this.constructor.map.set(this,this.constructor.properties);

        } else {
            console.warn(x)

            x = new WeakMap();
            this.constructor.map = x;
            //this.private = false;
            this.constructor.map.set(this,this.constructor.properties);

        }

    }

    /**  @type {WeakMap} */

	set map(value){

		this.constructor.map = value;

	}

    /**  @type {mixed} */

    get(value:string):mixed {
		return this.constructor.map.get(this)[value];
	}

    /**  @type {string} */
/*
    get name():mixed {
        return this.constructor.map.get(this)['name'];
    }
*/
};


export default _IFace;
