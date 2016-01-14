
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

 class _Core extends _Interface {

    /**  @type {Method} */

    constructor() {

        super();

    };

}

/*





*/

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

/*





*/

/**
*
* @module
* @interface
* @protected
*/

class _Log {

     /** @type {Number} */

    static get time() {

        return (this._time);

    }


     /** @type {Number} */

    static set time(value) {

        return (this._time = value);

    }


     /** @type {Number} */

    static get id() {

        return (this._id);

    }


     /** @type {Number} */

    static set id(value) {

        return (this._id = value);

    }

    /**
    * Assigns an id or 0
    * @param {Number} [id] - instance of log
    */

    constructor(id){

        this.id = id || 0;

    }

}

/**
*
* @module
* @interface
* @private
*/

class _Loop extends _Log  {

    constructor(){

        super();

    }

}

/**
*
* @module
* @interface
* @private
*/

class _Compile extends _Log  {

    constructor(){

        super();

    }

}

/**
*
* @module
* @interface
* @private
*/

class _App {

    static get fps() {

        return (this._fps);

    }

    static set fps(value) {

        return (this._fps = value);

    }

    static get scale() {

        return (this._scale);

    }

    static set scale(value) {

        return (this._scale = value);

    }

}

/**
*
* @module
* @interface
* @private
*/

class _Build {

    static get build() {

        return (this._build);

    }

    static set build(value) {

         return (this._build = value);

     }

    static get scriptloadtime() {

        return (this._scriptloadtime);

    }

    static set scriptloadtime(value) {

        return (this._scriptloadtime = value);

    }

    static get uptime() {

        return (this._uptime);

    }

    static set uptime(value) {

        return (this._uptime = value);

    }

}

export {_Vector,_SJSClass, _Log, _Loop, _Compile, _App, _Build};
