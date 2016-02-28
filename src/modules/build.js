
import _App from './app.js';

/**
* Contains functions necessary to build the application.
* @private
*/

export default class _Build {

		/**
		*	Attaches a reference to the Statistics module.
		*	@type {Object}
		*/

		constructor(){

			this.buildWindowReferences();

		}

		/**
		*	Generates the app prototype.
		*	@type {Object}
		*/

	    buildPrototype(){

	        /* temp stores the app during the create process, it is then returned */

	        var temp = {};

	        temp = new _App(this.app);

	        temp.window = this.window;

	        temp.document = document;

	        temp.controller = this;

	        temp.id = this.window.appsNextId;

	        this.window.apps[temp.id] = temp;

	        this.window.appsNextId++;

	        return this.window.apps[temp.id];

	    }

	    /**
		*	Initalize the listeners for the application.
	    *   @param {temp} temp - pass a reference to attach listeners
	    *   @return {Method} returns self
	    */

	    buildListeners(temp){

	        if (document.readyState == "complete" || document.readyState == "loaded") {
	             // document is already ready to go

	             console.log('ready')
	        }

	            temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

	        return temp;
	    }

		/**
		*	Attaches references to the global.window object.
		*	@type {Object}
		*/

		buildWindowReferences(){

			let windowReference = window;

	        if (typeof windowReference.scripts != 'array')
	            windowReference.scripts = [];

	        windowReference.SpiceJS = windowReference.SJS = this;

	        /* if no apps have been defined, create a new array */

	        if (!windowReference.apps)
	        	windowReference	.apps = new Array(1);

	        /* if appsNextId isnt larger or equal to 0 assign it to 0 */

	        if (!windowReference.appsNextId>=0)
	        	windowReference	.appsNextId = 0;

		}

		/**
		*	Begins the app build promise.
		*	@return {Object} a - b
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
