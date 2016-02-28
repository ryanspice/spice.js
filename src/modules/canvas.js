
import { _Canvas_Core } from './interfaces.js';
//import SGL from './sgl.js';

/**
* _private
* @protected
*/

const _private = new WeakMap();

/**
* Initalizes canvas elements or attaches to existing elements at options.target.canvas. Handles creation of header and style elements.
* @protected
* @module
*
*/

export default class Canvas extends _Canvas_Core {

    /**
    * Set documents private variables
    * @type {Object}
    * @protected
    */

    static properties = {
        name:'canvas' ,
        canvas:[],
        docs:document,
        head:document.getElementsByTagName('head')[0],
        _rendering_style:document.createElement('style')
    };

    /**
    * This is the constructor for the canvas module.
    * @param {number} x - position.x
    * @param {number} y - position.y
    */

    constructor(app) {

        super(app);

        //Assign private properties
        _private.set(this,this.constructor.properties);

		//SGL.start();

        //Cache canvases
        let temp_canvas = document.getElementById(this.app.options.target.canvas);
        let temp_buffer = document.getElementById(this.app.options.target.buffer);
        let temp_blitter = document.getElementById(this.app.options.target.blitter);
        let options = this.app.options;

        //Check canvas variables
        if (temp_canvas)    {

            //    if (temp_buffer)
            //        temp_buffer;

        } else  {

            temp_canvas = this.construct_canvas(this.app.options.canvas.name);

            if (this.app.options.canvas.buffer)
                temp_buffer = this.construct_canvas(this.app.options.canvas.buffername);

        }
        temp_canvas.mozOpaque = options.flags.opaque;
        //Assign canvas elements
        [this.canvas,this.buffer,this.blitter,this.rendering_style] = this.style(temp_canvas,temp_buffer,this.construct_canvas('blitter'),this.app.options.canvas.style);

        this.head.appendChild(this.rendering_style);

        return true;

    }


    /**
    * Style provided canvases
    * @type {null}
    * @param {Element, Element, Element} a - Pass 3 canvases: main, buffer and blitting canvas
    * @protected
    */

    style(temp_canvas,temp_buffer,temp_blitter) {

        temp_canvas.style.position = this.app.options.canvas.position.position;

        temp_canvas.style.zIndex = this.app.options.canvas.position.z;

        if (this.app.options.canvas.buffer)
        {
            temp_buffer.style.position = this.app.options.canvas.position.position;

            temp_buffer.style.zIndex = this.app.options.canvas.position.z-1;
        }

        if (this.app.options.canvas.override)
        {

            temp_canvas.style.left = this.app.options.canvas.position.left+"px";

            temp_canvas.style.top = this.app.options.canvas.position.top+"px";

            if (this.app.options.canvas.buffer)
            {
                temp_buffer.style.left = this.app.options.canvas.position.left+"px";

                temp_buffer.style.top = this.app.options.canvas.position.top+"px";
            }

        }

        return [temp_canvas,temp_buffer,temp_blitter];

    }

    /**
    * Construct a canvas element.
    * @type {Id}
    * @param {Element} a - Creates a canvas element and attaches it to the body.
    * @protected
    */

    construct_canvas(id){

        let  c = this.doc.createElement("canvas");

        let c_id = id+"_"+this.app.id;

        c.id = c_id;

        this.doc.body.appendChild(c);

        return this.doc.getElementById(c_id);

    }

};
