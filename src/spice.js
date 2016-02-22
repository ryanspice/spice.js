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
* SpiceJS is the main corns and beans, this returns an app object which you can control all aspects of the framework. The main class will be instance specific alowing you to define multiple canvases. You can also view statistics and control group canvases through the object.
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
*		        this.intro = new test(this.app);
*
*		    	this.particleController = new SJSParticleController(this.app);
*
*		        return true;
*		    },
*
*		    update:function() {
*
*				//this.intro.update();
*
*				this.particleController.update();
*
*		        return true;
*		    },
*
*		    draw:function() {
*
*		        //this.intro.draw();
*
*				this.particleController.draw();
*
*		        this.visuals.text_ext(this.particleController.SJSParticleList.length,100,50,"#FFFFFF",1,1);
*
*		        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
*
*		        this.visuals.text_ext(this.app.version,100,150,"#FFFFFF",1,1);
*
*		        return true;
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
	* Private variables.
	* @type {Object}
	* @protected
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
    */

    constructor(){

		super();

		_private.set(this,this.constructor.properties);

    }

	/**
	* Return the controller object
	* @type {Element}
	* @protected
	*/

	get window(){

		return Window;

	}

	/**
	* Return the controller object
	* @type {Element}
	* @protected
	*/

	get controller(){

		return _private.get(this)['controller'];

	}

	/**
	* Return the statistics object
	* @type {Element}
	* @protected
	*/

	get statistics() {

	    return _private.get(this)['statistics'];

	}

	/**
	*	Returns app prototype.
	*	@type {Object}
	*/

    proto() {

		console.warn('Warning this function is depreciated: SpiceJS.proto');

        return this.proto;

    }

	/**
	*	Begins the app build promise.
	*	@type {Object}
	*/

	create(){

	    let tempReference = {};

	    let tempReferenceId = null;

	    let listReference = null;

	    let time = new Date().getTime();

	    this.statistics.monitor(()=> {

	        //this.name = "scriptloadtime";

	        window.utils.loadExternalJS(window.scripts);

	        tempReference = this.buildPrototype();

	        tempReferenceId = (tempReference.id);

	        ///Temporary Fix for Safari and IE
	        //      document

	        listReference = this.controller.list(tempReferenceId);

	        this.buildListeners(listReference);

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

	    })

	    return tempReference;

	}

};

/**
 * Export SpiceJS
 */

export default new SpiceJS();
