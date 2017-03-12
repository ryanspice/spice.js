/* @flow */

import type {

	IApp,
	IBuild

} from './interfaces/ITypes';

/** Builds references, listeners and the app prototype.
*	@module
*	@private */

import WeakMapThingy from './base/thingy';

/* utils - universal helper functions */

import utils from '../utils';

import App from '../app.js';

/* Window & Windows - Cache window into Window const. Query for Windows. */

const Window:Object = window;

const Windows:Object = Window.Windows =  (typeof Window=='undefined'?Window:Window);

/* Console - cache console var */

const Console:Object = console;

const stats:Object = {

	windowcount:0

}

export default class Build extends WeakMapThingy {

	app:Function;

	id:number=0;

	document:Object = document;

	stats:Object;

	/** Common Functions
	 * 	@private
	 */

	static properties = {

		temp:{},

		/* WIP - temp removed
		statistics:Statistics,
		*/

		controller:{

			/** List all of the instances of SpiceJS or
			* @type {method}
			* @param {number} id - Specify a specific instance to return.	*/

			list:function(id:number = 0):void|Object {

				if (id)
					return Window.apps[id];
				else
				if (Window.apps.length>1)
					return Window.apps;
					else
					return Window.apps[0];

			}

		}

	}

	/** Attaches a reference to the Statistics module.
	*	@constructor	*/

	constructor(map:WeakMap<>) {

		super(map);

        this.app = App;

		this.buildWindowReferences();

		return (this:IBuild);
	}

	/** Reference to the Window object.
	* @type {Element}	*/

	get window():Object {

		Window.stats = stats;

		Window.stats.windowcount++;

		return Window;
	}

	/** Reference UTILS
	* @type {Element}	*/

	get utils():Object {

		return utils;
	}

	/** Reference the state object
	* @type {Element}	*/

	get aState():Object {

		return this.app.main;
	}

	/** Reference to the canvas/app global controller.
	* @type {Object}
	* @protected	*/

	get controller():Object {

		return Build.properties.controller;
	}

	/** Reference to the statistics object.
	* @type {Object}
	* @protected	*/

	/* Unused ATM
	get statistics():Object {
		return this.constructor.map.get(this)['statistics'];
	}
	*/

	/** Attaches references to the global.window object.
	*	@type {void} */

	buildWindowReferences():void {

        if (typeof this.window.scripts != typeof []) {
            this.window.scripts = [];
		}

        this.window.SpiceJS = this.window.SJS = this;

        /* if no apps have been defined, create a new array */

        if (!this.window.apps) {
        	this.window.apps = new Array(1);
		}

        /* if appsNextId isnt larger or equal to 0 assign it to 0 */

        if (!this.window.appsNextId>=0) {
        	this.window.appsNextId = 0;
		}

	}

	/** Generates the app prototype.
	*	@type {Object} */

    buildPrototype():Object {

        /* temp stores the app during the create process, it is then returned */
        let temp = {};

        temp = new this.app(new WeakMap());

        temp.window = this.window;

        temp.document = document;

        temp.controller = this;

        temp.id = this.window.appsNextId;

        this.window.apps[temp.id] = temp;

        this.window.appsNextId++;

        return this.window.apps[temp.id];
    }


	/*											*/
	/*											*/
	/*											*/
	/* Below needs Refator */
	/*											*/
	/*											*/
	/*											*/
	/*											*/

    /**	Initalize the listeners for the application.  * WIP *
    *   @param {temp} temp - pass a reference to attach listeners
    *   @return {Method} returns self */

    buildListeners(temp:App):App {

        if (this.document.readyState == "complete" || "loaded" || "interactive") {
             Console.log('ready'); //Refactor to use system log
        }

        temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

        return temp;
    }

	/** Begins the app build promise. *Old code needs refactor*
	*	@return {App} a temp reference */

	create():Object {

	    let time:number = new Date().getTime();

		let listReference:any;

	    let tempReference:any;

	    let tempReferenceId:any;

			//this.statistics.monitor(()=> {

	        //this.name = "scriptloadtime";

			// Load External JS files.

	        this.utils.loadExternalJS(window.scripts);

	        tempReference = this.buildPrototype();

	        tempReferenceId = tempReference.id;

	        ///Temporary Fix for Safari and IE
	        //      document

	        listReference = this.controller.list(tempReferenceId);

	        this.buildListeners(listReference);
			/*
	        // ^ F

	    }).then(() => {

	            this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

	            listReference = this.controller.list(tempReferenceId);

	            /// New for After Loaded
	            this.statistics.monitor(() => {

	                //this.name = "loadtime";

	                //this.initListeners(listReference);

	            }).then(() => {

	                this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');

	                this.statistics.log("build",time);

	            });

	    })*/

	    return tempReference;

	}

	/** Refactor
	* @type {Element}	*/

	time(str:string):void {
		Console.timeEnd(str);
	}

	/** Refactor
	* @type {Element}	*/

	timeEnd(str:string):void {
		Console.timeEnd(str);
	}

};
