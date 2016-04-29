/* @flow */

console.time('SJS:B:core.js');

import legacy_core from './legacy/legacy-core';

/** core component to the application, including version info, the main reference, and other details
* @module
* @protected */

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

    /**  @type {number} */

	get version():number {
		return this.get('version');
	}

    /**  @type {number} */

	get fps():number {
		return this.client.update.step.fps.toFixed(2);
	}

    /**  @type {object} */

	get main():object {
		return this.get('main');
	}

    /**  @type {object} */

	set main(newmain:object):object {

		let state:object = this.get('main');
		let newstate:object = newmain;
		state.name = newstate.name;
		state.init = newstate.init;
		state.update = newstate.update;
		state.draw = newstate.draw;

		return state;
	}

}

console.timeEnd('SJS:B:core.js');
