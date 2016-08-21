/* @flow */

/** App is the main app controller, here you can access input, math, data and graphics controllers.
*	@module */

import Core from './core/core';

import State from './core/state.js';

import Canvas from './canvas';

/** WIP Modules
*	@module */

import Client from './client';

import _input from './input/input';

//import Particles from './particles.js'; // (unfinished) To be built into application

//window.SJSParticleController = Particles; // Temporary for snowflakes

/** Core of the framework, initalizes client, input and listeners.
* @module
* @protected */

 export default class App extends Core {

     canvas:Canvas = Canvas;
     client:Client;

	/** The main loop for the application, use arrow functions, if arrows exist
	* @method
	* @private */

	loop(self:App):void {

		//Use arrow function if available

		var usearrow = true;
		if (usearrow) {

			setTimeout(() => {

				function AppLoop(){
					self.client.loop();
					self.client.loopData();
				}

				function AppLoopData(){

					///For loops that dont need to be run at 60fps

				}

				this.client.initalize(AppLoop,AppLoopData,this.scale);

			}, this.time);

		} else {

			setTimeout(	(function(){

						function AppLoop(){
							self.client.loop();
							self.client.loopData();
						}

						function AppLoopData(){

							///For loops that dont need to be run at 60fps

						}

						self.client.initalize(AppLoop,AppLoopData,self.scale);

			}),this.time);

		}

	}

	/** This function starts the application.
	* @method
	* @override */

    start(w:number|null=0, h:number|null=0):void {

		let clientProposedWidth = w || this.app.options.width;

		let clientProposedHeight = h || this.app.options.height;

		this.main = Object.create(this.main);

		this.canvas =  new this.canvas(this);

		this.client = new Client(this,clientProposedWidth,clientProposedHeight);

		this.client.update.inital(this);

		this.input = new _input(this);

		this.loop(this);

    }

	/** Triggers when the application first loops.
	* @method
    * @param {Object} [self] - Reference to the app.
	* @override	*/

    OnLoad(self):void {

        self.start();

    }

	/** Triggers on dom content load.
	* @method
    * @param {Event} [evt] - The passing event.
	* @override	*/

    OnApplicationLoad(evt:any):void {

       evt.target.app.OnLoad(evt.target.app);

    }

	/** Event listener polyfill.
	* @method
    * @param {Element} [obj] - Element to trigger event on, fallback on window.
    * @param {Event} [evt] - The passing event.
    * @param {String} [listener] - The listener to build.
    * @param {Object} [param] - Paramater to pass.
	* @example
	* Application.Listener(window,'click',function(){////console.log('eh');},'');
	* Application.Click(new Event,window);	*/

    Listener(obj:Object, evt:any, listener:any, param:any):void {

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

	/** Object constructor/factory polyfill. MAY be unnecessary.
	* @method
    * @param {Object} [prototype] - An object prototype.
    * @param {Object} [constructor] - An object constructor. */

    Construct(prototype:Object,constructor:Object|void ):App|Object  {

        let  isObj:bool = false;
        let  obj:Object = prototype;
        let  proto:Object = prototype;
        let  construct:Object|void = constructor;
        let  ret:Object = {};
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

        console.warn(ret,typeof ret);

       return ret;

    }

}
