
/* @flow - due to jszip and jszip-tils require not being defined
*
*	The Main Entrypoint for SpiceJS customized for Ryanspice.com
*	@module
*	Core components
*	Statistics - used to monitor the application
*	Build - controls instanciating App/Canvas instances
* 	setInnerHTML -	A polyfill based off react's core rendering
*/

/* WIP - extras */
import setInnerHTML from './modules/render/setInnerHTML.js';
import Twitter from './modules/render/twitter.js';
//import Statistics from './modules/etc/statistics';

/* Build - the core canvas framework */

import Build from './modules/core/build';

/**
* SpiceJS is the main corns and beans, this returns an app object which you can control all aspects of the  game. The main class will be instance specific alowing you to define multiple canvases. You can also view statistics and control group canvases through the object.
* @public
* @emits {SpiceJS} Emit the application controller.
* @example
*
*	((SpiceJS.create()).OnLoad = function (self) {
*
*		self.main = {
*
*		    init:function() {
*
*		    },
*
*		    update:function() {
*
*		    },
*
*		    draw:function() {
*
*		        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
*
*		    }
*
*		};
*
*	    self.start( 320, 720);
*
*	    window.Application = this;
*
*	});
*
*/

export class SpiceJS extends Build  {

    constructor(map:Object) {

		super(map);

		/*	Temp - Disabled not ready for testing
		*		this.constructor.properties.statistics = new this.constructor.properties.statistics();
		*/
    }

}

export default new SpiceJS(new WeakMap());
