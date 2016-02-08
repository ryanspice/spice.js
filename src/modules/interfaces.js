
/** @type {Number} @private */

const _number = 0;

/** @type {Object} @private */

const _object = {};

/** @type {Method} @private */

const _method = function(){};

/** @type {Array<>} @private */

const _array = [];

/**
_private
* @private
*/

let _Interface_private = new WeakMap();

/**
Interface
* @interface
* @private
*/

class _Interface {

    /**  @type {Object} */

    static properties = { name:'interface'  };

    /**  @type {Constructor} */

    constructor() {

        _Interface_private.set(this,this.constructor.properties);

    }

    /**  @type {Multi} */

    get(value) {

        return _Interface_private.get(this)[value];

    }

    /**  @type {String} */

    get name() {

        return _Interface_private.get(this).name;

    }

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

    constructor(x,y) {

        super();

        this.position = {x ,y};

    };

}

/*





*/

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


class _Core extends _Interface {

    /**  @type {Number} */

    static _fps = _number;

    constructor() {

        super();

    };

}

/*  Extends SJSClass





*/

/**
* Document
* @constant
* @private
*/

const doc = function doc(){

    return document;

}

/**
* Canvas Controller
* @module
* @interface
* @private
*/

 class _Canvas extends _SJSClass {

     /**  @type {Object}
     /*     @private */

    // static _doc = this::doc();
////    static  _doc = this::doc();

     /**  @type {Element}
     /*     @private */

//     static _head = document.getElementsByTagName('head')[0];

     /**  @type {Element}
     /*     @private */

//     static _rendering_style = document.createElement('style');

     /**  @type {Element}
     /*     @private */

//     static canvasList = document.getElementsByTagName('canvas');

    /**
    * This is the constructor for the canvas controller
    * @param {Object} app[ - instance of spicejs]
    */

    constructor(app) {
        super(app);


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

export {_Vector,_SJSClass, _Log, _Loop, _Compile, _Canvas, _App, _Build, _Core};
