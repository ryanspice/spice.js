import {_Vector} from '../interfaces.js';

/**
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

export default class Vector extends _Vector {

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
