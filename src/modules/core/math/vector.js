/* @flow */

console.time('SJS:B:vector.js');

import _IFace from '../interfaces/IFace';
<<<<<<< HEAD:src/modules/core/math/vector.js
var t = 0;
=======
>>>>>>> origin/master:src/modules/core/math/vector.js

/** Vector2
* @module
* @access public
* @example let vector = new Math.Vector2(1,1); */

export class Vector2 extends _IFace<IVector> {

    static properties:object = { name:'Vector2',x:0, y:0 };

    constructor(x:number = 0, y:number = 0){
<<<<<<< HEAD:src/modules/core/math/vector.js
        super(new weakmap());
=======
        super(new _weakmap());
>>>>>>> origin/master:src/modules/core/math/vector.js
        this.position = {x ,y};
    };

}

<<<<<<< HEAD:src/modules/core/math/vector.js
//window.Vector2 = (new Vector2(0,0):_Inf);
=======
window.Vector2 = (new Vector2(new _weakmap()):_Inf);
>>>>>>> origin/master:src/modules/core/math/vector.js

/** Vector
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

export default class Vector extends _IFace<_Inf> {
<<<<<<< HEAD:src/modules/core/math/vector.js
=======

    position:vector;

	 /** Set Vector private variables
     * @type {Object}
     * @protected */

    static properties:object = {
        name:"Vector",
        x:_number,
        y:_number
    };

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y */

    constructor(x: number = 0,y: number = 0):void {

            super(new _weakmap());
			this.position = {x ,y};

    };

>>>>>>> origin/master:src/modules/core/math/vector.js

    position:vector;

	 /** Set Vector private variables
     * @type {Object}
     * @protected */

    static properties:object = {
        name:"Vector",
        x:_number,
        y:_number
    };

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y */

    constructor(x: number = 0,y: number = 0):void {

            super(new WeakMap());
			this.position.x = x;
			this.position.y = y;

    };

	Difference(a:Vector,b:Vector):Vector {

		let x = a.x - b.x;
		let y = a.y - b.y;

		return new Vector(x,y);
	}

    equals(p) { return this.x === p.x && this.y === p.y; }
    sum() { return this.x + this.y; }

    //toString() { return `Point<${ this.#x },${ this.#y }>` }
    /**
    * Multiply vector position
    * @method
    * @param {Number} a - multiply X
    * @param {Number} b - multiply Y
    * @return {Vector}
    */

    multiply(a, b) {

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

    offset(a, b) {

        this._x += a;
        this._y += b;

        return this;

    }

    /**
    * Get vector position
    * @type {Object}
    */

    get position() {

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

    set position(value) {

        this.x = value.x;
        this.y = value.y;

    }

    /**
    * Get x position
    * @type {Number}
    */

    get x() {

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

    set x(value) {

        this._x = value;

    }

    /**
    * Get y position
    * @type {Number}
    */

    get y() {

        return this._y;

    }

    /**
    * Set y position
    * @type {Number}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.y = 2;
    */

    set y(value) {

        this._y = value;

    }

}

console.timeEnd('SJS:B:vector.js');
