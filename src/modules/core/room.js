/* @flow */

import {_SJSClass as SJSClass} from './sjs.js';

import type {
	IApp,
	IRoom
} from "./interfaces/ITypes";

/**
*
*/

export default class Room extends SJSClass {

	started:boolean = false;

	constructor(app:IApp) {

		super(app);

		return (this:IRoom);
	}

	/**
	*
	*/

	Started():Function {

		return function() {
			var a = this.Started;
			//this.app.set_scale();
			this.Started = true;
			return a;
		};

	}

}
