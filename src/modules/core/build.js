/* @flow */

import App from '../app.js';

import WeakMapThingy from './base/thingy';

import utils from '../utils';

import controller from './controller';

import type {
	IController,
	IApp,
	IStatsBuffer,
	IBuild,
	IState,
	IUtils

} from './interfaces/ITypes';

//const Window:Object = window;
//const Windows:Object = Window.Windows =  (typeof Window=='undefined'?Window:Window); /* ? */

const Console:Object = console;

const stats:Object = {

	windowcount:0

}

/** Builds references, listeners and the app prototype.
*	@module
*	@private */

export default class Build extends WeakMapThingy {

	app:Function;
	stats:IStatsBuffer;
	document:Document = document;
	id:number=0;

	/** Common Functions
	 * 	@private
	 */

	static properties = {

		temp:{},

		/* WIP - temp removed
		statistics:Statistics,
		*/

		controller

	}

	/** Attaches a reference to the Statistics module.
	*	@constructor	*/

	constructor(map:WeakMap<*,*>) {

		super(map);

        this.app = App;

		this.buildWindowReferences();

		return (this:IBuild);
	}

	/** Reference to the Window object.
	* @type {Element}	*/

	get window():any {

		Build.properties.controller.window.stats = stats;
		Build.properties.controller.window.stats.windowcount++;

		return Build.properties.controller.window;
	}

	/** Reference UTILS
	* @type {Element}	*/

	get utils():IUtils {

		return utils;
	}

	/** Reference the state object
	* @type {Element}	*/

	get aState():IState {

		return this.app.main;
	}

	/** Reference to the canvas/app global controller.
	* @type {Object}
	* @protected	*/

	get controller():IController {

		return Build.properties.controller;
	}

	/** Reference to the statistics object.
	* @type {Object}
	* @protected	*/

	/* DEFERRED for the moment
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

	/** Generates the app prototype. //APp or iAPP?
	*	@type {Object} */

    buildPrototype():App {

        /* temp stores the app during the create process, it is then returned */
        //let temp:App;// = {};
        let temp:App = new this.app(new WeakMap());

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

    /**	Initalize the listeners for the application.  * WIP *                      * IApp Seems to make default load
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

	create():App {

	    let time:number = new Date().getTime();

		//this.statistics.monitor(()=> {

        //this.name = "scriptloadtime";

		// Load External JS files.

        this.utils.loadExternalJS(window.scripts);

		let tempReference:App = this.buildPrototype();

		let tempReferenceId:number = tempReference.id;

        ///Temporary Fix for Safari and IE
        //      document

		let listReference:any = this.controller.list(tempReferenceId);

		if (listReference.length)
			console.warn("listReference > 0", listReference);

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

	//region remove

	/** Refactor time (statistics)
	* @type {Element}	*/

	time(str:string):void {
		console.warn('dnt');
		Console.timeEnd(str);
	}

	/** Refactor
	* @type {Element}	*/

	timeEnd(str:string):void {
		console.warn('dnt');
		Console.timeEnd(str);
	}


	//endregion
};
