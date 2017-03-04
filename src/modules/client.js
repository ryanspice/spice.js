/* @flow */

import type {
	IApp,
	IUpdate,
	IClient,
	IPace,
	IVector
} from './core/interfaces/ITypes';

import Update from './core/update.js';

import Pace from './core/timing/pace';

import {_SJSClass} from './core/base/sjs';

import ClientExperamental from './client-experamental';

export default class Client extends ClientExperamental {

    discription:string = "Instanciates an object to hold data pertaining to a single instanciated app";

    app:IApp;

	pace:IPace;

	update:any;


	/**
	*	The client, or base of an app.
	*/

    constructor(app:Object, size:IVector|number, h:number|void ) {

        super(app);

		this.verifySize(size,h);

		//Build Extensions
		this.audio = {};

		/* Timing Solution A */

		this.mainLoop = new Pace(app.options.targetfps,app.options.targetfps);

		this.second = new Pace(1.0,app.options.targetfps);

		/* Load Main */

		this.loader = window.Loader = new this.loader(this.app);

		this.update = new Update(this.app);

		//Temp? running update.inital here instead of in client.update

		window.requestAnimationFrame(()=>{

			this.update.inital(app);

		});

		this.renderer = new this.renderer();

		this.loadZip();

		this.renderer.renderMarkup();

		return (this:IClient);

    }

}
