import { _Vector  as _VectorInterface} from '../interfaces.js';

/**
* @module
* @access public
* @extends {_VectorInterface}
* @example
* let vector = new Vector(x,y);
* let vector = new Vector(1,1);
* vector.position = new Vector(2,2);
* // Vector { x: 1, y:1}
*/


export default class Vector extends _VectorInterface {

        /**
        * Set vector position
        * @type {Object}
        * @param {Vector} value - this is value's description.
        */

        set position(value) {

            this.x = value.x;
            this.y = value.y;

        }

        /**
        * Get vector position
        * @type {Vector}
        * @return {object} Returns position as a Vector.
        */

        get position() {

            return this;

        }

        /**
        * Set x position
        * @type {Number}
        * @param {Number} Set position x
        */

        set x(value) {

            this._x = value;

        }

        /**
        * Get x position
        * @type {Number}
        * @return {Number} position - Returns position as a Vector.
        */

        get x() {

            return this._x;

        }

        /**
        * Set y position
        * @type {Number}
        * @param {Number} y - Returns position as a Vector.
        */

        set y(value) {

            this._y = value;

        }

        /**
        * Get y position
        * @type {Number}
        * @return {Number} Returns position as a Vector.
        */

        get y() {

            return this._y;

        }













}

console.log(Vector)
console.log(window.v = new Vector(1,1))
