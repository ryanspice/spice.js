/* @flow */

<<<<<<< HEAD
import Options from '../client/options';

import _user from '../user';

import _math from './math/math';

import legacy_core from './legacy/legacy-core';

const _BUILD_OFFICIAL_ = '0.8.2';

const _BUILD_RENDERER_ = '0.0.1';

const _BUILD_CANVAS_ = '0.8.1';

const _BUILD_LAST_ = '08-2016';

const _BUILD_FIRST_ = '12-2013';

=======
console.time('SJS:B:core.js');

import legacy_core from './legacy/legacy-core';

>>>>>>> origin/master
/** core component to the application, including version info, the main reference, and other details
* @module
* @protected */

<<<<<<< HEAD
export default class Core extends legacy_core {

    options:Options = Options;

    ext:Object;

    visuals:Object;

    input:Object;

    user:_user = _user;

    client:Object = {visuals:()=>{},graphics:()=>{}};

    math:_math = new _math();

    time:number = 0;

	scale:number;

	app:object;

	id:number=0;

	static properties = {
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

		if (this.client.scale)
			scale = this.client.scale;

		return scale;
	}
=======
export default class _Core extends legacy_core {

	static properties = {
		main:{},
		version:"0.8.1",
		version_details:{
			_official_:'0.8.2',
			_renderer_:'0.0.1',
			_canvas_:'0.8.0',

			_firstbuild_:'12-2013',
		}
	};

    constructor(map:weakmap):void {
        super(map);
    }
>>>>>>> origin/master

    /**  @type {number} */

	get version():number {
		return this.get('version');
	}

    /**  @type {number} */

	get fps():number {
<<<<<<< HEAD

		return this.client.update.step.fps.toFixedNumber(2);
=======
		return this.client.update.step.fps.toFixed(2);
>>>>>>> origin/master
	}

    /**  @type {object} */

<<<<<<< HEAD
	get main():Object {
=======
	get main():object {
>>>>>>> origin/master
		return this.get('main');
	}

    /**  @type {object} */

<<<<<<< HEAD
	set main(newmain:Object):Object {

		let state:Object = this.get('main');
		//console.log(newmain,this);
		let newstate:Object = newmain;
=======
	set main(newmain:object):object {

		let state:object = this.get('main');
		let newstate:object = newmain;
>>>>>>> origin/master
		state.name = newstate.name;
		state.init = newstate.init;
		state.update = newstate.update;
		state.draw = newstate.draw;
<<<<<<< HEAD
		state.app = this;
		state.visuals = this.client.visuals;
		state.graphics = this.client.graphics;
=======
>>>>>>> origin/master

		return state;
	}

}
<<<<<<< HEAD
=======

console.timeEnd('SJS:B:core.js');
>>>>>>> origin/master
