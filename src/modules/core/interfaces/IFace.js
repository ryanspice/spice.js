
/* @flow */

console.time('SJS:B:IFace.js');

import ITypes from "./ITypes";

const Types:ITypes = new ITypes();

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/
 class _IFace  {

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

    }

    /**  @type {mixed} */

    get(value:string):mixed {
		return this.constructor.map.get(this)[value];
	}

    /**  @type {string} */

    get name():object {
        return this.constructor.map.get(this)['name'];
    }

};


export default _IFace;

console.timeEnd('SJS:B:IFace.js');
