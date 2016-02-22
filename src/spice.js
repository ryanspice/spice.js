/**
* @import
* @private
*/

import _Statistics from './modules/statistics.js';
import _Build from './modules/build.js';

/**
* Constants
* @private
*/

const _private = new WeakMap();
const Window = window;
const Windows = window.Windows =  (typeof Windows=='undefined'?Window:Windows);

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

export default class SpiceJS extends _Build  {

	/**
	* Private variables. Statistics and Controller are only accessable through reference.
	* @type {Object}
	*/

	static properties = {

		temp:{},

		controller:{

			/**
			* List all of the instances of SpiceJS or
			* @type {method}
			* @param {number} id - Specify a specific instance to return.
			*/

			list:function(id){

				if (id)
					return window.apps[id];
				else
				if (window.apps.length>1)
					return window.apps;
					else
					return window.apps[0];

			}

		},

		statistics:_Statistics

	};

	/**
    *  Creates a new SpiceJS() to instanciate multiple configurations. Constructor builds references.
	* @private
    */

    constructor(){

		super();

		_private.set(this,this.constructor.properties);

    }

	/**
	* Reference to the canvas/app global controller.
	* @type {Object}
	* @protected
	*/

	get controller(){

		return _private.get(this)['controller'];

	}

	/**
	* Reference to the statistics object.
	* @type {Object}
	* @protected
	*/

	get statistics() {

	    return _private.get(this)['statistics'];

	}

	/**
	* Reference to the Window object.
	* @type {Element}
	* @protected
	*/

	get window(){

		return Window;

	}

};

/**
 * Export SpiceJS
 */

export default new SpiceJS();
