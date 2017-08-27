/* @flow */

import * as config from "../../../config";

import type {
	IVector
} from "../interfaces/ITypes";

import WeakMapThingy from '../base/thingy';

/** Vector
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

export default class Vector extends WeakMapThingy {

	_s:number;
	_position:Array<number> = [0,0];

	 /** Set Vector private variables
     * @type {Object}
     * @protected */

    static properties:Object = {
        name:"Vector",
        x:null,
        y:null
    };

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y */

    constructor(x: number = 0,y: number = 0) {

        super(new WeakMap());

		this.position.x = x;

		this.position.y = y;

		return (this:IVector);
    };

    /**
    * Get vector position
    * @type {Object}
    */

    get position():Object {

        return this;
    }

    /**
    * Set vector position
    * @type {Object}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.position = new Vector(5,5);
    * PointA.position = {x:0,y:0};
    */

    set position(value:IVector):void {

        this.x = value.x;

        this.y = value.y;

    }

    /**
    * Get x position
    * @type {Number}
    */

    get x():number {

        return this._position[0];

    }

    /**
    * Set x position
    * @type {Number}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.position.x = {x:0,y:0};
    * PointA.x = 2;
    */

    set x(value:number):void {

        this._position[0] = value;

    }

    /**
    * Get y position
    * @type {Number}
    */

    get y():number {

        //return this._y;
        return this._position[1];

    }

    /**
    * Set y position
    * @type {Number}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.y = 2;
    */

    set y(value:number):void {

        //this._y = value;
        this._position[1] = value;

    }

    /**
    * Get s scale
    * @type {Number}
    */

    get s():number {

        //return this._y;
        return this._s;

    }

    /**
    * Set s scale
    * @type {Number}
    * @example
    */

    set s(value:number):void {

        //this._y = value;
        this._s = value;

    }

	/**
	* @method
	*/

    //toString() { return `Point<${ this.#x },${ this.#y }>` }


	/**
	* @method
	*/

	static Combine(a:IVector,b:IVector):IVector {

		let x = a.x + b.x;
		let y = a.y + b.y;

		return new Vector(x,y);
	}


	/**
	* @method
	*/

	Difference(a:IVector,b:IVector):IVector {

		let x = a.x - b.x;
		let y = a.y - b.y;

		return new Vector(x,y);
	}

	/**
	* @method
	*/

    equals(p:IVector):boolean {

		return this.x === p.x && this.y === p.y;
	}

	/**
	* @method
	*/

    sum():number {

		return this.x + this.y;
	}

    /**
    * Multiply vector position
    * @method
    * @param {Number} a - multiply X
    * @param {Number} b - multiply Y
    * @return {IVector}
    */

    multiply(a:number, b:number):IVector {

        this._position[0] *= a;
        this._position[1] *= b;

        return this;
    }

    /**
    * Offset vector position
    * @method
    * @param {Number} a - multiply X
    * @param {Number} b - multiply Y
    * @return {IVector}
    */

    offset(a:number, b:number):IVector {

        this._position[0] += a;
        this._position[1] += b;

        return this;
    }

}

if ((config._EXPOSURE_)&& (config._IS_PROD_ == false)){

	window.Vector = Vector;

}
