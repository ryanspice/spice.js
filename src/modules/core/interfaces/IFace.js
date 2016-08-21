
/* @flow */

<<<<<<< HEAD
=======
console.time('SJS:B:IFace.js');

>>>>>>> origin/master
import ITypes from "./ITypes";

const Types:ITypes = new ITypes();

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/
<<<<<<< HEAD

const _IMap = new WeakMap();

 class _IFace  {

    static properties:object = { name:'interface', map:null, version:0 };
    static map:WeakMap = _IMap;

    map:WeakMap = _IMap;
=======
 class _IFace  {

    static properties:object = { name:'interface', map:null, version:0 };
    static map:weakmap;

    map:weakmap;
>>>>>>> origin/master
    private:bool;

    /**  @type {constructor} */

<<<<<<< HEAD
    constructor(x:any):void {

        //console.log(this.constructor.map.set(this,this.constructor.properties),this)
=======
    constructor(x:weakmap):void {
>>>>>>> origin/master

        if (typeof x != 'undefined'){

            this.constructor.map = x;
<<<<<<< HEAD
            //this.private = true;
            this.constructor.map.set(this,this.constructor.properties);

        } else {
            console.warn(x)

            x = new WeakMap();
            this.constructor.map = x;
            //this.private = false;
=======
            this.private = true;
            this.constructor.map.set(this,this.constructor.properties);

        } else {

            x = new _weakmap();
            this.constructor.map = x;
            this.private = false;
>>>>>>> origin/master
            this.constructor.map.set(this,this.constructor.properties);

        }

    }

<<<<<<< HEAD
    /**  @type {WeakMap} */

	set map(value){

		this.constructor.map = value;

	}

=======
>>>>>>> origin/master
    /**  @type {mixed} */

    get(value:string):mixed {
		return this.constructor.map.get(this)[value];
	}

    /**  @type {string} */
<<<<<<< HEAD
/*
    get name():mixed {
        return this.constructor.map.get(this)['name'];
    }
*/
=======

    get name():object {
        return this.constructor.map.get(this)['name'];
    }

>>>>>>> origin/master
};


export default _IFace;
<<<<<<< HEAD
=======

console.timeEnd('SJS:B:IFace.js');
>>>>>>> origin/master
