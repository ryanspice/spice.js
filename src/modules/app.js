"strict mode"
/** @module app */


/** Name. */
export const name = 'core';

import _math from './math/math.js';

import _options from './options.js';

import _input from './input/input.js';

import _client from './client.js';

import _Core from './core.js';

import _canvas from './canvas.js';

import _user from './user.js';

import _ext from './ext.js';

import Loader from './loader.js'; // (unfinished) To be built into application (to override current)

import Particles from './particles.js'; // (unfinished) To be built into application

window.SJSParticleController = Particles; // Temporary for snowflakes

const date = new Date();

/**
* _Core_private
* @property
* @private
*/

//let _private = new WeakMap();

/**
* Core of the framework, initalizes client, input and listeners.
* @protected
* @module
*
*/

 class _App extends _Core {

    /** Builds the core modules of the Application. */

    constructor(){

        super();

		//_private.set(this,this.constructor.properties);

        this.time = 0;

        //this.main = {name:"Main",init:function() {},update:function() {},draw:function() {return true;}};

        this.options = _options;

        this.user = _user;

        this.ext = _ext;

        this.input = _input;

        this.canvas = _canvas;

        this.client = _client;

        this.math = new _math();

    }

	/**
	* This function starts the application.
	* @method
	* @protected
	*/

    start(w, h){

		var name = '';

       this.client = this.Construct(this.client.prototype,this.client.constructor);

       this.canvas =  new _canvas(this);

       this.loop(this);

       this.client.init(w||this.app.options.width,h||this.app.options.height);

       this.input = new this.input(this);

    }

	/**
	* The main loop for the application
	* @method
	* @private
	*/

	loop(self){

		//Use arrow function if available
		var usearrow = true;

		if (usearrow)
		{

			setTimeout(() => {

				function AppLoop(){
					self.client.loop();
				}

				function AppLoopData(){
					self.client.loopData();
				}

				this.client.initalize(AppLoop,AppLoopData,this.scale);

			}, this.time);

		}
		else
			{

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

	};

	/**
	* Triggers when the application first loops.
	* @method
    * @param {Object} [self] - Reference to the app.
	* @override
	*/

    OnLoad(self){

        self.start();

    }

	/**
	* Triggers on dom content load.
	* @method
    * @param {Event} [evt] - The passing event.
	* @override
	*/

    OnApplicationLoad(evt){

       //Run .OnLoad
       evt.target.app.OnLoad(evt.target.app);

       console.log(evt.target.app.getCurrent().name+': OnApplicationLoad');

    }

	/**
	* Event listener polyfill.
	* @method
    * @param {Element} [obj] - Element to trigger event on, fallback on window.
    * @param {Event} [evt] - The passing event.
    * @param {String} [listener] - The listener to build.
    * @param {Object} [param] - Paramater to pass.
	*/

    Listener(obj, evt, listener, param){

        /* Check obj param */

        if (typeof obj[0] === "object") {

		    obj = obj[0] || window;

		}

        /* If addEventListener exist, add it, otherwise attachEvent. */

        if (obj.addEventListener) {

            obj.addEventListener(evt, listener, false);

		}	else {

			obj.attachEvent("on" + evt, listener);

		}

		/* Assign App Reference */

        obj.app = window.apps[this.id] = this;

    };

	/**
	* Object constructor/factory polyfill.
	* @method
    * @param {Object} [prototype] - An object prototype.
    * @param {Object} [constructor] - An object constructor.
	*/

    Construct(prototype,constructor){

       let  isObj = false;
       let  obj = prototype;
       let  proto = prototype;
       let  construct = constructor;
       let  ret = {};
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
				console.log("Expected 'object' or 'function': Type is "+c);

       }

       if (isObj)
           prototype = ret;

       return ret;
    }

	/**
	* Artificial click
	* @method
    * @param {Event} [event] - Passing of the event.
    * @param {Element} [anchorObj] - Element to click.
	*/

    click(event, anchorObj){

		if (anchorObj.click){

			anchorObj.click();

		}	else
		if (document.createEvent){

			if(event.target !== anchorObj){

			var evt = document.createEvent("MouseEvents");

			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

			anchorObj.dispatchEvent(evt);

			}

		}

    };


}

export default _App;
