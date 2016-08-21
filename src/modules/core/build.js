/* @flow */

/** Builds references, listeners and the app prototype.
*	@module
*	@private */

import IFace from './interfaces/IFace';

import App from '../app.js';

export default class Build extends IFace {

	id:number=0;

	document:Object = document;

	/** Attaches a reference to the Statistics module.
	*	@constructor	*/

	constructor(map:WeakMap):void {

		super(map);

        this.app = App;

		this.buildWindowReferences();

	}

	/** Attaches references to the global.window object.
	*	@type {void} */

	buildWindowReferences():void {

        if (typeof this.window.scripts != typeof [])
            this.window.scripts = [];

        this.window.SpiceJS = this.window.SJS = this;

        /* if no apps have been defined, create a new array */

        if (!this.window.apps)
        	this.window	.apps = new Array(1);

        /* if appsNextId isnt larger or equal to 0 assign it to 0 */

        if (!this.window.appsNextId>=0)
        	this.window.appsNextId = 0;

	}

	/** Generates the app prototype.
	*	@type {Object} */

    buildPrototype():Object {

        /* temp stores the app during the create process, it is then returned */
        var temp = {};

        temp = new this.app(new WeakMap());

        temp.window = this.window;

        temp.document = document;

        temp.controller = this;

        temp.id = this.window.appsNextId;

        this.window.apps[temp.id] = temp;

        this.window.appsNextId++;

        return this.window.apps[temp.id];
    }

    /**	Initalize the listeners for the application.
    *   @param {temp} temp - pass a reference to attach listeners
    *   @return {Method} returns self */

    buildListeners(temp:App):App {

        if (this.document.readyState == "complete" || "loaded" || "interactive") {
             console.log('ready')
        }

        temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

        return temp;
    }

	/** Begins the app build promise.
	*	@return {App} a temp reference */

	create() {

	    let time:number = new Date().getTime();

		let listReference:any;

	    let tempReference:any;

	    let tempReferenceId:any;

			//this.statistics.monitor(()=> {

	        //this.name = "scriptloadtime";

	        window.utils.loadExternalJS(window.scripts);

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

};
