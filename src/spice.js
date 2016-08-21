
/* @noflow - due to jszip and jszip-tils require not being defined
*
*	The Main Entrypoint for SpiceJS customized for Ryanspice.com
*	@module
*	Core components
*	Statistics - used to monitor the application
*	Build - controls instanciating App/Canvas instances
* 	setInnerHTML -	A polyfill based off react's core rendering
*/

//import Statistics from './modules/etc/statistics';

import utils from './modules/utils';

import Build from './modules/core/build';

import setInnerHTML from './modules/render/setInnerHTML.js';

import Twitter from './modules/render/twitter.js';

/* JSZip & JSZipUtils
* 		Library to read Zip files from the server.
*/

const JSZip:Object = window.JSZip = require("jszip");
const JSZipUtils:Object = window.JSZipUtils = require("jszip-utils");

/* Window & Windows
* 		Cache window into Window const. Query for Windows.
*/

const Window:Object = window;
const Windows:Object = window.Windows =  (typeof Windows=='undefined'?Window:Windows);

/**
* SpiceJS is the main corns and beans, this returns an app object which you can control all aspects of the  game. The main class will be instance specific alowing you to define multiple canvases. You can also view statistics and control group canvases through the object.
* @access public
* @emits {SpiceJS} Emit the application controller.
* @example
*
*	((SpiceJS.create()).OnLoad = function (self) {
*
*		self.main = {
*
*		    init:function() {
*
*		    },
*
*		    update:function() {
*
*		    },
*
*		    draw:function() {
*
*		        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
*
*		    }
*
*		};
*
*	    self.start( 320, 720);
*
*	    window.Application = this;
*
*	});
*
*/

export class SpiceJS extends Build  {

	static properties = {

		temp:{},

		//statistics:Statistics,

		controller:{

			/** List all of the instances of SpiceJS or
			* @type {method}
			* @param {number} id - Specify a specific instance to return.	*/

			list:function(id:number = 0):void|Object {

				if (id)
					return window.apps[id];
				else
				if (window.apps.length>1)
					return window.apps;
					else
					return window.apps[0];

			}

		}

	}

	/** Creates a new SpiceJS() to instanciate multiple configurations. Constructor builds references.
	* @private	*/

    constructor(map:WeakMap):void {

		super(map);

		//this.constructor.properties.statistics = new this.constructor.properties.statistics();

    }

	/** Reference the state object
	* @type {Element}	*/

	get aState():Object {
		return State;
	}

	/** Reference to the canvas/app global controller.
	* @type {Object}
	* @protected	*/

	get controller():Object {
		return this.constructor.map.get(this)['controller'];
	}

	/** Reference to the statistics object.
	* @type {Object}
	* @protected	*/

	get statistics():Object {
		return this.constructor.map.get(this)['statistics'];
	}

	/** Reference to the Window object.
	* @type {Element}	*/

	get window():Object {
		return Window;
	}

	/**
	* @type {Element}	*/

	time(str:string):void {
		console.timeEnd(str);
	}

	/**
	* @type {Element}	*/

	timeEnd(str:string):void {
		console.timeEnd(str);
	}

}

export default new SpiceJS(new WeakMap());
