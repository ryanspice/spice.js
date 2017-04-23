/* @flow */

/** App is the main app controller, here you can access input, math, data and graphics controllers.
*	@module */

import Core from './core/core';

import State from './state';

import Client from './core/client';

import Canvas from './core/canvas';

import _input from './input/input';

import type {

	IApp,
	IClient,
	ICanvas,
	IOptions

} from './core/interfaces/ITypes';

// Duplicate in ITYPES
interface AppEventTarget extends EventTarget {
	result:any;
    app:IApp|Object;
}

interface AppEvent extends Event {
    target: AppEventTarget;
}

declare interface Event {
	target:AppEventTarget;
}
//END DUPLICATE IN ITYPES

/* LEGACY import Particles from './particles.js'; // (unfinished) To be built into application */
/* LEGACY window.SJSParticleController = Particles; // Temporary for snowflakes */

/** Core of the framework, initalizes client, input and listeners.
* @module
* @protected */

export default class App extends Core {

	client:IClient;

	canvas:ICanvas;

	constructor(map:WeakMap<*,*>) {

		super(map);

		return (this:IApp);
	}

	/** DEPRECIATED : This function starts the application.
	* @method
	* @override */

    start(w:?number = 0, h:?number = 0):void {

		console.warn('The key "start" is depreciated use "Start" instead.');

		this.Start(w,h);

	}

	/** This function Starts the application.
	* @method
	* @override */

    Start(w:?number = 0, h:?number = 0):void {

		this.main = Object.create(this.main);

		this.canvas =  new Canvas(this);

		this.client = new Client(this, w || this.app.options.canvas.size.width, h || this.app.options.canvas.size.height);

		//See clientJS for new implementiation with setTimeout (temporary)
		//this.client.update.inital(this);

		this.input = new _input(this);

		this.Loop(this);

    }

	/** Loop of the Program
	* @method
	* @private */

	Loop(self:IApp):void {

		this.client.log('Before First Loop');

		window.requestUserIdle(() => {

			this.client.log('First Loop');

			this.client.initalize((time)=>{

				this.client.loop();

				this.client.loopData();

				//this.time = time;

			},(secondary)=>{

				//Execute Teritary Loop Stuffs

			},this.scale);

		}, { timeout: this.time });

		return;
	}

	/** Triggers when the application first loops.
	* @method
    * @param {Object} [self] - Reference to the app.
	* @override	*/

    OnLoad(self:IApp):void {

        self.start();

    }

	/** Triggers on dom content load.
	* @method
    * @param {Event} [evt] - The passing event.
	* @override	*/

    OnApplicationLoad(evt:AppEvent):void {

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

    Listener(obj:Object, evt:string, listener:Function, param?:string):void {

		/* Legacy Unused?
        if (typeof obj[0] === "object") {
		    obj = obj[0] || window;
        }
		*/

        if (obj.addEventListener) {

            obj.addEventListener(evt, listener, false);

		}	else {

			console.warn('Using attachEvent');

			obj.attachEvent("on" + evt, listener);

		}

        obj.app = window.apps[this.id] = this;

    }

	/** Object constructor/factory polyfill. MAY be unnecessary.
	* @method
    * @param {Object} [prototype] - An object prototype.
    * @param {Object} [constructor] - An object constructor. */

    Construct(prototype:Object,constructor:Function ):IApp|Object  {

        let  isObj:bool = false;
        let  obj:Object = prototype;
        let  proto:Object = prototype;
        let  construct:Function = constructor;
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

        //console.warn(ret,typeof ret);

       return ret;

    }

}
