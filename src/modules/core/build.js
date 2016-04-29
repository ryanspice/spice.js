
/* @flow */

console.time('SJS:B:build.js');

/** Builds references, listeners and the app prototype.
*	@module
*	@private */

import _IFace from './interfaces/IFace';

import _App from '../app.js';

export default class _Build extends _IFace {

	id:number=0;
	document:object = document;

	/** Attaches a reference to the Statistics module.
	*	@type {_Interface}	*/

	constructor(map:weakmap):void {

		super(map);

		this.buildWindowReferences();

	}

	/** Attaches references to the global.window object.
	*	@type {void} */

	buildWindowReferences():void {

		let windowReference:window = window;

        if (typeof windowReference.scripts != typeof [])
            windowReference.scripts = [];

        windowReference.SpiceJS = windowReference.SJS = this;

        /* if no apps have been defined, create a new array */

        if (!windowReference.apps)
        	windowReference	.apps = new Array(1);

        /* if appsNextId isnt larger or equal to 0 assign it to 0 */

        if (!windowReference.appsNextId>=0)
        	windowReference.appsNextId = 0;

	}

	/** Generates the app prototype.
	*	@type {Object} */

    buildPrototype():_App {

        /* temp stores the app during the create process, it is then returned */

        var temp:_App = {};

        temp = new _App(this.app);

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

    buildListeners(temp:_Build):_Build {

		let state:string = this.document.readyState;

        if (state == "complete" || "loaded" || "interactive") {
             console.log('ready')
        }

        temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

        return temp;
    }

	/** Begins the app build promise.
	*	@return {_App} a temp reference */

	create():_App {

	    let time:number = new Date().getTime();

		let listReference:_App;

	    let tempReference:_App;

	    let tempReferenceId:number;

	    this.statistics.monitor(()=> {

	        //this.name = "scriptloadtime";

	        window.utils.loadExternalJS(window.scripts);

	        tempReference = this.buildPrototype();

	        tempReferenceId = tempReference.id;

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

console.timeEnd('SJS:B:build.js');
