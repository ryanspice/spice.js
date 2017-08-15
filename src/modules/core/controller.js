/* @flow */

let Window = window;

import type {
	IController,
} from './interfaces/ITypes';

class controller {

	window:Window = Window;

	constructor(){

		return (this:IController);
	}

	/** List all of the instances of SpiceJS or
	* @type {method}
	* @param {number} id - Specify a specific instance to return.	*/

	list(id:number = 0):void|Object {

		if (id)
			return this.window.apps[id];
		else
		if (this.window.apps.length>1)
			return this.window.apps;
			else
			return this.window.apps[0];

	}

}

export default new controller();
