/* @flow */

console.time('SJS:B:sjs.js');
import type {
	IApp
} from "./interfaces/ITypes";

import App from '../app.js';

import WeakMapThingy from './thingy.js';

/** SJSClass - Used to create objects which inherit the Application.
* @module */

export class _SJSClass extends WeakMapThingy {

    /** This is the constructor for the class
    * @param {Object} app[ - instance of spicejs] */
	app:IApp;
	visuals:any;
	graphics:any;

    constructor(app:IApp):void {

        super(new WeakMap());

        let appReference:IApp = app;

        if (typeof appReference == 'undefined') {

            appReference = window.SJS.controller.list();

            this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

        }

		if (this.constructor.name == "Client"){
			//return;
		}

		if (typeof appReference != 'undefined') {

			this.app = appReference;

			if ((appReference.client) &&(appReference.client.visuals)) {

				this.visuals = appReference.client.visuals;

			} else {

				this.visuals = null;
				this.warn('Unable to find app visuals reference.', 'Using ', appReference, ' for ', this);

			}

			if ((appReference.client) &&(appReference.client.graphics)) {

				this.graphics = appReference.client.graphics;

			} else {

				this.graphics = null;
				console.trace('Unable to find app loader reference.', 'Using ', appReference, ' for ', this);

			}

		} else {

			this.graphics = null;
			this.visuals = null;
			this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

		}

    }

    /**
    * @param */

	warn(a0:any,a1:any,a2:any,a3:any,a4:any){

		//console.trace(a0,this);
		//console.log(this);
		console.warn(a1,a2,a3,a4);

	}

    /**
    * @param */

	log(a0:any){

		console.trace(a0, '\n'  ,this);

	}

};

console.timeEnd('SJS:B:sjs.js');
