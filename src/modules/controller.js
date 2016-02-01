import _statistics from './statistics.js';

import A_Core from './core.js';

/**
* Main game controller. Handles instanciating instances and tracking information.
* @access private
* @module
*
*/

export default class _controller {

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

            listReference = this.controller.list(tempReferenceId);

            this.initListeners(listReference);

            // ^ F

        }).then(() => {

                this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

                listReference = this.controller.list(tempReferenceId);

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

        temp = new A_Core(this.app);

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
