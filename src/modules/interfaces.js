
/** @type {number} @private */

const _number = function(){};

/** @type {object} @private */

const _method = function(){};

/** @type {Array<>} @private */

const _array = [];

/**
Interface
* @interface
* @private
*/

 class _Interface {

    /**  @type {Method} */

    constructor() {};

}


/**
* Vector
* @interface
* @private
*/

 class _Vector extends _Interface {

    /**  @type {Number} */
    static _x = _number;

    /**  @type {Number} */
    static _y = _number;

    /**  @type {Method} */

    static position = _method;



    /**
    * This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y
    */

    constructor(x = 0,y = 0) {

        super();

        this.position = {x,y};

    };

}


export {_Vector};
