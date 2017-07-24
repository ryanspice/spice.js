/* @flow */

import Pace from './timing/pace';

import Update from './update.js';

import ClientExperamental from './client-experamental';

import type {
	IApp,
	IUpdate,
	IClient,
	IPace,
	IVector
} from './interfaces/ITypes';

export default class Client extends ClientExperamental {

    discription:string = "Instanciates an object to hold data pertaining to a single instanciated app";

    app:IApp;

	pace:IPace;

	update:any;

	static main_prototype:Object = {app:{},update:{inital:{}},visuals:()=>{},graphics:()=>{}};

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

		requestAnimationFrame(()=>{

			this.update.inital(app);

		});

		this.renderer = new this.renderer();

		this.loadZip();

		this.renderer.renderMarkup();

		return (this:IClient);

    }

}

export const prototype = Client.main_prototype;
