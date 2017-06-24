/* @flow */

import type {
	IVector
} from "../interfaces/ITypes";

import WeakMapThingy from '../base/thingy';

/** Vector2
* @module
* @access public
* @example let vector = new Math.Vector2(1,1); */
/*
export class Vector2 extends WeakMapThingy<IVector> {

    static properties:object = { name:'Vector2',x:0, y:0 };

    constructor(x:number = 0, y:number = 0){
        super(new weakmap());
        this.position = {x ,y};
    };

}
*/
/** Vector
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

export default class Vector extends WeakMapThingy {

    position:IVector;
	_x:number;
	_y:number;
	_position:Array<any> = [0,0];


	 /** Set Vector private variables
     * @type {Object}
     * @protected */

    static properties:Object = {
        name:"Vector",
        x:null,
        y:null
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

        //return this._x;
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

        //this._x = value;
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
	* @method
	*/

    //toString() { return `Point<${ this.#x },${ this.#y }>` }

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

        this._x *= a;
        this._y *= b;

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

        this._x += a;
        this._y += b;

        return this;
    }

}
