/* @flow */

import {_SJSClass as SJSClass} from './sjs.js';

import type {
	IApp,
	IRoom
} from "../interfaces/ITypes";

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

			let a:boolean = this.Started;

			//this.app.set_scale(); UNnecessary?

			this.Started = true;

			return a;
		};

	}

}
