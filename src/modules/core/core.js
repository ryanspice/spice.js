/* @flow */

import Options from './options';

import facebook from '../dto/facebook-user';

import _math from './math/math';

import legacy_core from './legacy/legacy-core';

const _BUILD_OFFICIAL_ = '0.8.2';
const _BUILD_RENDERER_ = '0.0.1';
const _BUILD_CANVAS_ = '0.8.1';
const _BUILD_LAST_ = '08-2016';
const _BUILD_FIRST_ = '12-2013';

import type {
	IApp,
	IExt,
	IOptions,
	IState
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

    options:IOptions = Options;

    ext:IExt;

    visuals:Object;

    input:Object;

    user:dtoFacebook = facebook;

    client:Object = {visuals:()=>{},graphics:()=>{}};

    math:_math = new _math();

    time:number = 0;

	scale:number;

	app:IApp;

	id:number=0;

	static properties:IoVersion = {
		main:{},
		version:_BUILD_OFFICIAL_ + _BUILD_LAST_,
		version_details:{
			_official_:_BUILD_OFFICIAL_,
			_renderer_:_BUILD_RENDERER_,
			_canvas_:_BUILD_CANVAS_,
			_firstbuild_:_BUILD_LAST_,
			_lastbuild_:_BUILD_FIRST_,
		}
	};

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

    /**  @type {number} */

	get version():String {
		return this.get('version');
	}

    /**  @type {number} */

	get fps():number {

		return this.client.update.step.fps.toFixedNumber(2);
	}

    /**  @type {object} */

	get main():Object {
		return this.get('main');
	}

    /**  @type {object} TEMPORARY, use Object.Assign */

	set main(newmain:Object):Object {

		let state:Object = this.get('main');

		let newstate:Object = newmain;

		state.name = newstate.name;
		state.init = newstate.init;
		state.update = newstate.update;
		state.draw = newstate.draw;
		state.app = this;
		state.visuals = this.client.visuals;
		state.graphics = this.client.graphics;

		return state;
	}

}
