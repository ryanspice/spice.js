
import {_Canvas} from './interfaces.js';

const _private = new WeakMap();

/**
* Initalizes canvas elements or attaches to existing elements at options.target.canvas
* @protected
* @module
*
*/

export default class Canvas extends _Canvas {

    /**
    * Set documents private variables
    * @type {Object}
    * @private
    */

    static properties = {
        name:'canvas' ,
        canvas:null,
        docs:document,
        head:document.getElementsByTagName('head')[0],
        _rendering_style:document.createElement('style')
    };

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
    * @type {Element}
    * @param {CSS}
    * @protected
    */

    set rendering_style(style){

        let customstyle = style;
        let viewport = '@-ms-viewport {width:100%;height:100%;}';
        let img_rendering = '#Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;-ms-interpolation-mode: nearest-neighbor;}';

        let rendering = this.get('_rendering_style');
        rendering.innerHTML = rendering.innerText =  viewport + img_rendering + customstyle;

    }

    get canvas() {

        return this._canvas;

    }

    set canvas(canvas) {

        this._canvas = canvas;

    }

    get buffer(){

        return this._buffer;

    }

    set buffer(canvas){

        this._buffer = canvas;

    }

    get blitter(){

        return this._blitter;

    }

    set blitter(canvas){

        this._blitter = canvas;

    }

    style() {

        this.canvas.style.position = this.app.options.canvas.position.position;

        this.canvas.style.zIndex = this.app.options.canvas.position.z;

        if (this.app.options.canvas.buffer)
        {
            this.buffer.style.position = this.app.options.canvas.position.position;

            this.buffer.style.zIndex = this.app.options.canvas.position.z-1;
        }

        if (this.app.options.canvas.override)
        {

            this.canvas.style.left = this.app.options.canvas.position.left+"px";

            this.canvas.style.top = this.app.options.canvas.position.top+"px";

            if (this.app.options.canvas.buffer)
            {
                this.buffer.style.left = this.app.options.canvas.position.left+"px";

                this.buffer.style.top = this.app.options.canvas.position.top+"px";
            }

        }

    }

    construct_canvas(id){

        let  c = this.doc.createElement("canvas");

        let c_id = id+"_"+this.app.id;

        c.id = c_id;

        this.doc.body.appendChild(c);

        return this.doc.getElementById(c_id);

    }

    constructor(app) {

        super(app);

        _private.set(this,this.constructor.properties);

        //Change property assignment
        let temp_canvas = document.getElementById(this.app.options.target.canvas);

        //Change property assignment
        let temp_buffer = document.getElementById(this.app.options.target.buffer);

        if (temp_canvas)    {

            this.canvas = temp_canvas;

            if (temp_buffer) {

                this.buffer  = temp_buffer;

            }

        } else  {

            this.canvas = this.construct_canvas(this.app.options.canvas.name);

            if (this.app.options.canvas.buffer)
                this.buffer = this.construct_canvas(this.app.options.canvas.buffername);

        }

        this.blitter = this.construct_canvas('blitter');

        this.style();

        this.rendering_style = this.app.options.canvas.style;

        this.head.appendChild(this.rendering_style);

    }

};
