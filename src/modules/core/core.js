/* @flow */

import Options from './base/options';

import facebook from '../dto/facebook-user';

import _math from './math/math';

import legacy_core from './legacy/legacy-core';

import {
	prototype
	} from '../client';

/* Remove? */
const _BUILD_OFFICIAL_:string = '0.8.2';
const _BUILD_RENDERER_:string = '0.0.1';
const _BUILD_CANVAS_:string = '0.8.1';
const _BUILD_LAST_:string = '11-2017';
const _BUILD_FIRST_:string = '12-2013';

import type {
	IApp,
	IExt,
	IOptions,
	IState,
	IClient,
	ICore,
	IVisuals,
	IInput,
	IMath
	} from "./interfaces/ITypes.js";

import type {
	dtoFacebook
	} from '../dto/dtoTypes';

import type {
	IoVersion
	} from "../../shared/version";

/** core component to the application, including version info, the main reference, and other details
* @module
* @protected */

export default class Core extends legacy_core {

	app:IApp;

    ext:IExt;

    options:IOptions = Options; /* See if we can move */

	client:IClient|Object = prototype;

    visuals:IVisuals; /* WIP */

    input:IInput; /* WIP */

    user:dtoFacebook = facebook; /* WIP */

    math:IMath = new _math(); /* WIP */

    time:number = 0;

	scale:number;

	id:number=0;

	static properties:IoVersion = {
		main:{init:()=>{},update:()=>{},draw:()=>{}},
		version:_BUILD_OFFICIAL_ + _BUILD_LAST_,
		version_details:{
			_official_:_BUILD_OFFICIAL_,
			_renderer_:_BUILD_RENDERER_,
			_canvas_:_BUILD_CANVAS_,
			_firstbuild_:_BUILD_LAST_,
			_lastbuild_:_BUILD_FIRST_,
		}
	};

	/* */

	constructor(
		app:any
		) {

		super(app);

		return (this:ICore);
	}

    /**  @type {number} */

	get width():number {
		return this.client.setWidth;
	}

    /**  @type {number} */

	get height():number {
		return this.client.setHeight;
	}

    /**  @type {number} */

	get scale():number {

		let scale = 1;

		if (this.client.scale) {
			scale = this.client.scale;
		}

		return scale;
	}

    /**  @type {String} */

	get version():String {
		return this.get('version');
	}

    /**  @type {number} */

	get fps():number {

		let fps:any = 1;

		//If's for flowtype, issue: var is in a weakmap

		if((this.client.update)&&(this.client.update.step)&&(this.client.update.step.fps)) {

			fps = this.client.update.step.fps;

		}

		return fps.toFixedNumber(2);
	}

    /**  @type {IState} */

	get main():IState {

		return this.get('main');
	}

    /**  @type {IState} New Object Assign Method	*/

	set main(newState:IState):IState {

		let currentState:IState = this.main;

		return currentState = Object.assign(currentState,newState);
	}

}
