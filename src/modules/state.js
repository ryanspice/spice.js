/* @noflow - no flow due to destructuring */


import * as config from "../config";

import WeakMapThingy from './core/base/thingy';

import type {
	IState
} from "./core/interfaces/ITypes";

/** The state class which the main game state inherits
*	@module */

export default class State extends WeakMapThingy {

	/** @private */

	static properties = {

		render:function(){},

		update:function(){},

		draw:function(){},

		init:function(){}

	};

	/** @public */

	app:Object;

	visuals:Object;

	graphics:Object;

	initalized:boolean = false;

	/** Construct and assign privates
	* @param [Object] obj - Pass an object with update, draw, init.
	* @method */

	constructor(obj:any, app:Object|void) {

		super(new WeakMap());

		console.trace("#",obj);

		this.initalize(obj:any);

		return (this:IState);

	}

	/** Construct and assign privates
	* @param [Object] obj - Pass an object with update, draw, init.
	* @method */

	async initalize(obj:IState|void){

		if (typeof app == 'object') {

			this.app = app;
			this.visuals = this.app.client.visuals;
			this.graphics = this.app.client.graphics;

		}

		if (typeof obj !='undefined') {

			[this.update,this.draw,this.init,this.name,this.html] = [obj.update,obj.draw,obj.init,obj.name,obj.html];

		}

	}

	/** This method is overridden to draw the state.
	* @method
	* @override	*/

	update():void {}

	/** This method is overridden to draw the state.
	* @method
	* @override	*/

	draw():void {}

	/** Method is overridden to name the state.
	* @method
	* @override	*/

	name():void {}

	/** This method is overridden to initialize the state.
	* @method
	* @override	*/

	init():void {}

};

if ((config._EXPOSURE_)&& (config._IS_PROD_ == false)){

	window.State = State;

}
