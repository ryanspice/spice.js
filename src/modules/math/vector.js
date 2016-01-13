import {_Vector} from '../interfaces.js';

/**
* @module
* @access public
* @extends {_VectorInterface}
* @example
* let vector = new Vector(1,1);
* vector.position = new Vector(2,2);
* vector.x = 1;
* vector.y = 1;
* // Vector { x: 1, y:1}
*/

export default class Vector extends _Vector {

    /**
    * Set vector position
    * @type {Object}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.position = new Vector(5,5);
    */

    set position(value) {

        this.x = value.x;
        this.y = value.y;

    }

    /**
    * Get vector position
    * @type {Object}
    */

    get position() {

        return this;

    }

    /**
    * Set x position
    * @type {Number}
    * @example
    * var PointA = new Vector(2,1);
    * PointA.x = 2;
    */

    set x(value) {

        this._x = value;

    }

    /**
    * Get x position
    * @type {Number} 
    */

    get x() {

        return this._x;

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

    /**
    * Get y position
    * @type {Number}
    */

    get y() {

        return this._y;

    }

}
