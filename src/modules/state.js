/* @noflow - due to destructuring */

/** The state class which the main game state inherits
*	@module */

console.time('SJS:B:state.js');

import _IFace from './core/interfaces/IFace';

export default class _State extends _IFace {

	/** @private */

	static properties = {

		render:function(){},
		update:function(){},
		draw:function(){},
		init:function(){}

	};

	/** Construct and assign privates
	* @param [Object] obj - Pass an object with update, draw, init.
	* @method */

	constructor(obj:object){

		super(new _weakmap());

		if (typeof obj !='undefined') {

			[this.update,this.draw,this.init,this.name,this.html] = [obj.update,obj.draw,obj.init,obj.name,obj.html];

		}

	}

	/** Gets the update function
	* @type {function}	*/

	get update():object {
		return this._update;
	}

	/** Sets the update function
	* @param {function}	*/

	set update(func):void {
		this._update = func;
	}

	/** This method is overridden to draw the state.
	* @method
	* @override	*/

	draw():void {	}

	/** Method is overridden to name the state.
	* @method
	* @override	*/

	name():void {	}

	/** This method is overridden to initialize the state.
	* @method
	* @override	*/

	init():void {	}

};

console.timeEnd('SJS:B:state.js');
