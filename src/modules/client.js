/* @flow */

import {_SJSClass} from './core/sjs';

import Vector from './core/math/vector';

import ClientExperamental from './client-experamental';

export default class Client extends ClientExperamental {

    discription:string = "Instanciates an object to hold data pertaining to a single instanciated app"
    app:Object;

	/**
	*	The client, or base of an app.
	*/

    constructor(app:Object, size:Vector|number, h:number|void ):void {

        super(app);

        let name:string = ''; //Unused ?

		this.verifySize(size,h);

		//Build Extensions

		this.visuals = new this.visuals(this.app);

		this.graphics = new this.graphics(this.app);

		this.ext = new this.ext(this.app);

		this.room = new this.room(this.app);

		this.audio = {};

		/* Timing Solution A */

		this.mainLoop = new this.pace(app.options.targetfps,app.options.targetfps);

		this.second = new this.pace(1.0,app.options.targetfps);

		/* Load Main */

		this.loader = window.Loader = new this.loader(this.app);

		this.update = new this.update(this.app);

		this.renderer = new this.renderer();

		this.loadZip();

		this.renderer.renderMarkup();



		return;

    }

}
