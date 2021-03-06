/* @flow */

import WeakMapThingy from './thingy';

import type {
	IApp,
	IVisuals,
	IGraphics,
	ISJSClass
} from "../interfaces/ITypes";

import {
	log
} from './debugger';

/*
* SJSClass - Used to create objects which inherit the Application.
*/

export class _SJSClass extends WeakMapThingy {

	app:IApp;

	log:Function = log;

	window:window;

	windowSafe:boolean;

	visuals:IVisuals|Function;

	graphics:IGraphics|Function;

    constructor(app:IApp) {

        super(new WeakMap());

        let appReference:IApp = app;

        if (typeof appReference == 'undefined') {

            appReference = window.SJS.controller.list();

            this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

        }

		if (this.constructor.name == "Client"){
			//return; handle visuals and graphics being null
		}

		if (typeof appReference != 'undefined') {

			this.app = appReference;

			if ((appReference.client) &&(appReference.client.visuals)) {

				this.visuals = appReference.client.visuals;

			} else {

				//this.visuals = null;
				this.warn('Unable to find app visuals reference.', 'Using ', appReference, ' for ', this);

			}

			if ((appReference.client) &&(appReference.client.graphics)) {

				this.graphics = appReference.client.graphics;

			} else {

				//this.graphics = null;
				console.trace('Unable to find app loader reference.', 'Using ', appReference, ' for ', this);

			}

		} else {

			//this.graphics = null;
			//this.visuals = null;
			this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

		}

		return (this:ISJSClass);
    }

	/**
	*
	*/

	windowDoesntExist():void {

		this.window = {app:this};

		this.windowSafe = false;

	}

	/**
	* Check wither or not the window object exists.
	*/

	windowExists():void {

		if (window) {

			this.window = window;

		} else {

			this.windowDoesntExist();

		}

	}

    /**
    *
	*/

	warn(a0:any,a1:any,a2:any,a3:any,a4:any){

		//console.trace(a0,this);
		//console.log(this);
		console.warn(a1,a2,a3,a4);

	}



};
