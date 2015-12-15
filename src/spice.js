/*	SpiceJS by Ryan Spice	*/

const Windows = window.Windows =  (typeof Windows=='undefined'?window:Windows);

import _statistics from './modules/statistics.js';

import _application from './modules/application.js'

class SJSController {

    static _statistics = _statistics;

    static _controller =  {

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

    get() {

        return this.proto;

    }

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

        }).then(() => {

                this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

                listReference = this.controller.list(tempReferenceId);

                this.statistics.monitor(() => {

                this.name = "loadtime";

                this.initListeners(listReference);

                }).then(() => {

                    this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');

                    this.statistics.log("build",time);

                });

        })

        return tempReference;

    }

    generatePrototype(){

        this.window = window;

        //temp stores the app during the create process, it is then returned
        var temp = {};

        temp = _application;

        temp = Object.create(temp.prototype,temp.constructor);

        temp.window = this.window;

        temp.document = document;

        temp.id = this.window.appsNextId;

        this.window.apps[temp.id] = temp;

        this.window.appsNextId++;

        return this.window.apps[temp.id];

    }

    initListeners(temp){

        temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

        return temp;
    }

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

export default SpiceJS = new SJSController();


//To be built into application (to override current)
import Loader from './modules/loader.js';

//To be built into application
import Particles from './modules/particles.js';

// Temporary for snowflakes
window.SJSParticleController = Particles;
