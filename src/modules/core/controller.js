/* @flow */

let Window = window;

class controller {

	constructor(){


	}

	window:Window = Window;

	/** List all of the instances of SpiceJS or
	* @type {method}
	* @param {number} id - Specify a specific instance to return.	*/

	list(id:number = 0):void|Object {

		if (id)
			return Window.apps[id];
		else
		if (Window.apps.length>1)
			return Window.apps;
			else
			return Window.apps[0];

	}

}

export default new controller();
