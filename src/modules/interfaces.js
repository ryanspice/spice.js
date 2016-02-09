
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

    static properties = { name:'interface'};

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
* Canvas Interface
* @module
* @interface
* @protected
*/

 class _Canvas_Core extends _SJSClass {

    /**
    * Get document element
    * @type {Element}
    * @protected
    */

    get doc(){

        return this.get('docs');

    }

    /**
    * Get header element
    * @type {Element}
    * @protected
    */

    get head(){

        return this.get('head');

    }

    /**
    * Get gendering element
    * @type {Element}
    * @protected
    */

    get rendering_style(){

        return this.get('_rendering_style');

    }

    /**
    * Set rendering element styles
    * @type {CSS}
    * @protected
    * @example
    * var Style = "canvas { position:fixed; z-index:25; }"
    * Application.canvas.rendering_style(Style)
    */

    set rendering_style(style){

        let customstyle = style || "";
        let viewport = '@-ms-viewport {width:100%;height:100%;}';
        let img_rendering = '#Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;-ms-interpolation-mode: nearest-neighbor;}';

        let rendering = this.get('_rendering_style');
        rendering.innerHTML = rendering.innerText =  viewport + img_rendering + customstyle;

    }

    /**
    * Get rendering canvas
    * @type {Element}
    * @protected
    */

    get canvas() {

        return this.get('canvas')[0];

    }

    /**
    * Set rendering canvas
    * @type {Element}
    * @protected
    */

    set canvas(canvas) {

        this.get('canvas')[0] = canvas;

    }

    /**
    * Get buffering canvas
    * @type {Element}
    * @protected
    */

    get buffer(){

        return this.get('canvas')[1];

    }

    /**
    * Set buffering canvas
    * @type {Element}
    * @protected
    */

    set buffer(canvas){

        this.get('canvas')[1] = canvas;

    }

    /**
    * Get blitting canvas
    * @type {Element}
    * @protected
    */

    get blitter(){

        return this.get('canvas')[2];

    }

    /**
    * Set blitting canvas
    * @type {Element}
    * @protected
    */

    set blitter(canvas){

        this.get('canvas')[2] = canvas;
     //this._blitter = canvas;

    }



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

export {_Vector,_SJSClass, _Log, _Loop, _Compile, _Canvas_Core, _App, _Build, _Core};
