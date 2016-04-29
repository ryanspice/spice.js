/* @flow */

console.time('SJS:B:app.js');

import _Core from './core/core';

import Twitter from './render/twitter.js';

/** App is the main app controller, here you can access input, math, data and graphics controllers.
*	@module
*	@private */

import _math from './core/math/math';
import _options from './options';
import _input from './input/input';
import _client from './client';
import _canvas from './canvas';
import {SGL} from './canvas';
import _user from './user';
import _ext from './ext';

//import {Vector} from './math/vector.js';
import Particles from './particles.js'; // (unfinished) To be built into application

window.SJSParticleController = Particles; // Temporary for snowflakes

const date = new Date();

/** Core of the framework, initalizes client, input and listeners.
* @module
* @protected */

 export default class _App extends _Core {

    time:number = 0;
    options:_options = _options;
    user:_user = _user;
    ext:_ext = _ext;
    input:_input = _input;
    canvas:_canvas = _canvas;
    client:_client = _client;
    math:_math = new _math();

    /** Builds the core modules of the Application. */

    constructor():void {
        super(new _weakmap());
    }

	/** The main loop for the application, use arrow functions, if arrows exist
	* @method
	* @private */

	loop(self:_App):void {

		//Use arrow function if available
		var usearrow = true;

		if (usearrow) {

			setTimeout(() => {

				function AppLoop(){
					self.client.loop();
				}

				function AppLoopData(){
					self.client.loopData();
				}

				this.client.initalize(AppLoop,AppLoopData,this.scale);

			}, this.time);

		} else {

			setTimeout(	(function(){

						function AppLoop(){
							self.client.loop();
						}

						function AppLoopData(){
							self.client.loopData();
						}

						self.client.initalize(AppLoop,AppLoopData,self.scale);

			}),this.time);

		}

	}

	/** This function starts the application.
	* @method
	* @override */

    start(w:number|null=0, h:number|null=0):void {

       this.client = this.Construct(this.client.prototype,this.client.constructor);

       this.canvas =  new _canvas(this);

       this.loop(this);

       this.client.init(w||this.app.options.width,h||this.app.options.height);

       this.input = new this.input(this);

    }

	/** Triggers when the application first loops.
	* @method
    * @param {Object} [self] - Reference to the app.
	* @override	*/

    OnLoad(self:_App):void {
        self.start();
    }

	/** Triggers on dom content load.
	* @method
    * @param {Event} [evt] - The passing event.
	* @override	*/

    OnApplicationLoad(evt:any):void {

       evt.target.app.OnLoad(evt.target.app);
       console.log("SJS:B:"+evt.target.app.client.main.name+': OnApplicationLoad');

    }

	/** Event listener polyfill.
	* @method
    * @param {Element} [obj] - Element to trigger event on, fallback on window.
    * @param {Event} [evt] - The passing event.
    * @param {String} [listener] - The listener to build.
    * @param {Object} [param] - Paramater to pass.
	* @example
	* Application.Listener(window,'click',function(){console.log('eh');},'');
	* Application.Click(new Event,window);	*/

    Listener(obj:object, evt:any, listener:any, param:any):void {

        if (typeof obj[0] === "object") {
		    obj = obj[0] || window;
        }

        if (obj.addEventListener) {
            obj.addEventListener(evt, listener, false);
		}	else {
			obj.attachEvent("on" + evt, listener);
		}

        obj.app = window.apps[this.id] = this;

    }

	/** Object constructor/factory polyfill.
	* @method
    * @param {Object} [prototype] - An object prototype.
    * @param {Object} [constructor] - An object constructor. */

    Construct(prototype:object,constructor:object):_App  {

        let  isObj:bool = false;
        let  obj:object = prototype;
        let  proto:object = prototype;
        let  construct:object = constructor;
        let  ret:object = {};
        let type;

        /* if prototype contains a prototype and constructor. */

        if (typeof obj.prototype !== 'undefined')
        	if (typeof obj.constructor !== 'undefined')	{
        		construct = obj.constructor;
        		proto = obj.prototype;
        		isObj = true;
        	}

        /* Grab type of constructor */

        type = typeof construct;

        /* Return & Create object based on constructor */
        switch(type)	{

           /* Use only the prototype */
           case 'undefined':
               ret = Object.create(proto);
           break;

           /* Use constructor as object */
           case 'object':
               ret = Object.create(proto,construct);
           break;

           /* Use constructor as function */
           case 'function':
               ret = Object.create(proto,construct(this));
           break;

           /* Expected a type */
           default:
        		console.warn("Expected 'object' or 'function': Type is "+type);

        }

        if (isObj)
            prototype = ret;

       return ret;
    }

    /* Too refractor this below code into the input ? /**/

	/** Artificial click CASE 1
	* @method
    * @param {Event} [event] - Passing of the event.
    * @param {Element} [anchorObj] - Element to click. */

    click(event:object, anchorObj:object):void {
		this.Click(event,anchorObj);
    }

	/** Artificial Click CASE 2
	* @method
    * @param {Event} [event] - Passing of the event.
    * @param {Element} [anchorObj] - Element to click.	*/

    Click(event:object, anchorObj:object):void {

		if (typeof anchorObj != 'undefined')
		if (anchorObj.click){

			anchorObj.click();

		}	else
		if (document.createEvent){

			if(event.target !== anchorObj){

			let evt:any = document.createEvent("MouseEvents");

			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

			anchorObj.dispatchEvent(evt);

			}

		}

    }

};

// _App;

/** Name. */
export const name = 'core';

console.timeEnd('SJS:B:app.js');
