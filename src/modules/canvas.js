
import IFace from './core/interfaces/IFace';

/**
* Canvas Interface
* @module
* @interface
* @protected
* Initalizes canvas elements or attaches to existing elements at options.target.canvas. Handles creation of header and style elements.
* @protected
* @module
*
*/

export default class Canvas extends IFace {

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

	options:Object;

	/**
    * Get document element
    * @type {Element}
    * @protected
    */

    get doc():Object {

        return this.get('docs');

    }

    /**
    * Get header element
    * @type {Element}
    * @protected
    */

    get head():Object {

        return this.get('head');

    }

    /**
    * Get gendering element
    * @type {Element}
    * @protected
    */

    get rendering_style():Object {

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

    set rendering_style(style):void {

        let customstyle = style || "";

        let viewport = '@-ms-viewport {width:100%;height:100%;}';

        let img_rendering = '#Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;}';

        let rendering = this.get('_rendering_style');

        rendering.innerHTML = rendering.innerText =  viewport + img_rendering + customstyle;

    }

    /**
    * Get rendering canvas
    * @type {Element}
    * @protected
    */

    get canvas():Object {

        return this.get('canvas')[0];

    }

    /**
    * Set rendering canvas
    * @type {Element}
    * @protected
    */

    set canvas(canvas:Object):void {

        this.get('canvas')[0] = canvas;

    }

    /**
    * Get buffering canvas
    * @type {Element}
    * @protected
    */

    get buffer():Object {

        return this.get('canvas')[1];

    }

    /**
    * Set buffering canvas
    * @type {Element}
    * @protected
    */

    set buffer(canvas:Object):void {

        this.get('canvas')[1] = canvas;

    }

    /**
    * Get blitting canvas
    * @type {Element}
    */

    get blitter():Object {

        return this.get('canvas')[2];

    }

    /**
    * Set blitting canvas
    * @type {Element}
    */

    set blitter(canvas:Object ):void {

        this.get('canvas')[2] = canvas;
    	//this._blitter = canvas;

    }

    /**
    * This is the constructor for the canvas module.
    * @param {number} x - position.x
    * @param {number} y - position.y
    */

    constructor(app) {

        super(new WeakMap());

		this.options = app.options;

		this.id = app.id;

		//SGL.start();

        //Cache canvases
        let temp_canvas:Object|null = this.doc.getElementById(this.options.target.canvas);

        let temp_buffer:Object|null = this.doc.getElementById(this.options.target.buffer);

        let temp_blitter:Object = this.doc.getElementById(this.options.target.blitter) || this.construct_canvas('blitter');

		temp_blitter.style.position = "fixed";

        //Check canvas variables
        if (temp_canvas)    {

            //    if (temp_buffer)
            //        temp_buffer;

        } else  {

            temp_canvas = this.construct_canvas(this.options.canvas.name);

            if (this.options.canvas.buffer) {

			    temp_buffer = this.construct_canvas(this.options.canvas.buffername);

			}

        }

        temp_canvas.mozOpaque = this.options.flags.opaque;

        //Assign canvas elements
        [this.canvas,this.buffer,this.blitter,this.rendering_style] = this.style(temp_canvas,temp_buffer,temp_blitter,this.options.canvas.style);

        this.head.appendChild(this.rendering_style);

        return true;

    }

    /**
    * Style provided canvases
    * @type {null}
    * @param {Element, Element, Element} a - Pass 3 canvases: main, buffer and blitting canvas
    */

    style(temp_canvas:Object,temp_buffer:Object,temp_blitter:Object):Array {

        temp_canvas.style.position = this.options.canvas.position.position;

        temp_canvas.style.zIndex = this.options.canvas.position.z;

        if (this.options.canvas.buffer)
        {
            temp_buffer.style.position = this.options.canvas.position.position;

            temp_buffer.style.zIndex = this.options.canvas.position.z-1;
        }

        if (this.options.canvas.override)
        {

            temp_canvas.style.left = this.options.canvas.position.left+"px";

            temp_canvas.style.top = this.options.canvas.position.top+"px";

            if (this.options.canvas.buffer)
            {
                temp_buffer.style.left = this.options.canvas.position.left+"px";

                temp_buffer.style.top = this.options.canvas.position.top+"px";
            }

        }

        return [temp_canvas,temp_buffer,temp_blitter];

    }

    /**
    * Construct a canvas element.
    * @type {Id}
    * @param {Element} a - Creates a canvas element and attaches it to the body.
    */

    construct_canvas(id:string = "0"):Object {

        let canvas = this.doc.createElement("canvas");

        let canvas_id = id+"_"+this.id;

        canvas.id = canvas_id;

        this.doc.body.appendChild(canvas);

        return this.doc.getElementById(canvas_id);

    }

};
