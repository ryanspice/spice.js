/* @flow */

import _IFace from '../interfaces/IFace';

/** Vector2
* @module
* @access public
* @example let vector = new Math.Vector2(1,1); */

export class Vector2 extends _IFace<IVector> {

    static properties:object = { name:'Vector2',x:0, y:0 };

    constructor(x:number = 0, y:number = 0){
        super(new weakmap());
        this.position = {x ,y};
    };

}

/** Vector
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

export default class Vector extends _IFace<_Inf> {

    position:vector;

	 /** Set Vector private variables
     * @type {Object}
     * @protected */

    static properties:object = {
        name:"Vector",
        x:_number,
        y:_number
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

    set position(value:Vector):void {

        this.x = value.x;

        this.y = value.y;

    }

    /**
    * Get x position
    * @type {Number}
    */

    get x():number {

        return this._x;

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

        this._x = value;

    }

    /**
    * Get y position
    * @type {Number}
    */

    get y():number {

        return this._y;

    }

    /**
    * Set y position
    * @type {Number}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.y = 2;
    */

    set y(value:number):void {

        this._y = value;

    }

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y */

    constructor(x: number = 0,y: number = 0):void {

            super(new WeakMap());
			this.position.x = x;
			this.position.y = y;

    };

	/**
	* @method
	*/

    //toString() { return `Point<${ this.#x },${ this.#y }>` }

	/**
	* @method
	*/

	Difference(a:Vector,b:Vector):Vector {

		let x = a.x - b.x;
		let y = a.y - b.y;

		return new Vector(x,y);
	}

	/**
	* @method
	*/

    equals(p:Vector):boolean {

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
    * @return {Vector}
    */

    multiply(a:number, b:number):Vector {

        this._x *= a;
        this._y *= b;

        return this;

    }

    /**
    * Offset vector position
    * @method
    * @param {Number} a - multiply X
    * @param {Number} b - multiply Y
    * @return {Vector}
    */

    offset(a:number, b:number):Vector {

        this._x += a;
        this._y += b;

        return this;

    }

}
