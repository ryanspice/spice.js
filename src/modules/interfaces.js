
/** @type {Number} @private */

const _number = 0;

/** @type {Object} @private */

const _object = {};

/** @type {Method} @private */

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
* @module
* @interface
* @private
*/

 class _Vector extends _Interface {

    /**  @type {Number} */

    static _x = _number;

    /**  @type {Number} */

    static _y = _number;

    /**  @type {Vector} */

    static position = _method;

    /**  @type {Method} */

    static multiply = _method;

    /**  @type {Method} */

    static offset = _method;


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

/**
* SJSClass
* @module
* @interface
* @private
*/

 class _SJSClass extends _Interface {

     /**  @type {Number} */

     static app = _object;

     /**  @type {Number} */

     static visuals = _object;

     /**  @type {Vector} */

     static graphics = _object;

    /**
    * This is the constructor for the vector
    * @param {Object} app[ - instance of spicejs]
    */

    constructor(app) {

        super();

        let appReference = app;

        if (typeof appReference == 'undefined') {

            appReference = SJS.controller.list();

            console.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

        }

        this.app = appReference;

        this.visuals = appReference.client.visuals;

        this.graphics = appReference.client.graphics;

    };

}

export {_Vector,_SJSClass};
