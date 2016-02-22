/**
*	@import
*/

//import _controller from './modules/controller.js';

import _statistics from './modules/statistics.js';

import _App from './modules/app.js';

/**
* _private
* @protected
*/

const _private = new WeakMap();

/**
* Main game controller. Handles instanciating instances and tracking information.
* @access private
* @module
*
*/

export default class SpiceJS {

    /** @type {Object} */

    static properties = {

		window:window,
		temp:{}

	};

    /** @type {Object} */

    static _statistics = _statistics;

    /** @type {Object} */

    static _controller =  {

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

	};

    /** @type {Object} */

    get() {

        return this.proto;

    }

    /** @type {Object} */

    create(target){

        let tempReference = {};

        let tempReferenceId = null;

        let listReference = null;

        let time = new Date().getTime();

        this.statistics.monitor(()=> {

            this.name = "scriptloadtime";

            window.utils.loadExternalJS(window.scripts);

            tempReference = this.generatePrototype();

            tempReferenceId = (tempReference.id);

            ///Temporary Fix for Safari and IE
            //      document

            listReference = this.controller.list(tempReferenceId);

            this.initListeners(listReference);

            // ^ F

        }).then(() => {

                this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

                listReference = this.controller.list(tempReferenceId);

                /// New for After Loaded
                this.statistics.monitor(() => {

                    this.name = "loadtime";

                    //this.initListeners(listReference);

                }).then(() => {

                    this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');

                    this.statistics.log("build",time);

                });

        })

        return tempReference;

    }

    /** @type {Object} */

    temp = {};

    generatePrototype(){

        this.window = window;

        //temp stores the app during the create process, it is then returned
        var temp = {};

        temp = new _App(this.app);

        temp.window = this.window;

        temp.document = document;

        temp.id = this.window.appsNextId;

        this.window.apps[temp.id] = temp;

        this.window.appsNextId++;

        return this.window.apps[temp.id];

    }

    /**
    *   @param {temp} temp - pass a reference to attach listeners
    *   @return {Method} returns self
    */

    initListeners(temp){

        if (document.readyState == "complete" || document.readyState == "loaded") {
             // document is already ready to go

             console.log('ready')
        }

            temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

        return temp;
    }

        /** @type {Method} */

    constructor(){

        this.window = window;

        if (typeof this.window.scripts != 'array')
            this.window.scripts = [];

        this.window.SpiceJS = this;

        this.window.SJS = this;

        //if no apps have been defined, create a new array
        if (!this.window.apps)
        	this.window	.apps = new Array(1);

        //if appsNextId isnt larger or equal to 0 assign it to 0
        if (!this.window.appsNextId>=0)
        	this.window	.appsNextId = 0;

        //Setup Statistics and Monitoring
        this.statistics = new this.constructor._statistics(this);

        //Reference static controller
        this.controller = this.constructor._controller;

    }

}







/*
*
*
*
*
*
*
*
*
*
*
*
*
*/



/**
* SpiceJS is the main corns and beans, here you can control all aspects of the framework. The main class will instanciate and manage app canveses.
* @access public
* @example
*
*	((SpiceJS.create()).OnLoad = function (self) {
*
*		self.main = {
*
*		    name:"Example",
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


 /**
  * Catch the Windows variable from microsoft devices.
  * @access public
  * @const {pbject}
  */

const Windows = window.Windows =  (typeof Windows=='undefined'?window:Windows);

/**
 * Export SpiceJS
 * @emits {SpiceJS} Emit the application controller.
 */

export default new SpiceJS();
