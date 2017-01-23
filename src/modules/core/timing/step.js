/* @flow */

import WeakMapThingy from '../thingy';

import type {
	IApp,
	IPace,
	IStep
} from "../../core/interfaces/ITypes";

/*
*	The state class which the main game state inherits
*/

export default class Step extends WeakMapThingy {

	app:IApp;

	delta:number =1;

    frames:number = 0;

    pending:number = 0;

    padding:number = 0;

    increment:number = 0;

    delta_speed:number = 1;

	static properties = {

		data:[
			0
		]

	};

	constructor(
		app:IApp
		) {

		super(new WeakMap());

		this.app = app;

		return (this:IStep);
	}

	/*
    *
    */

	set fps(val:number ):void {

    	this.get('data')[0] = (1 * (this.clean() / val * 1E3));

	}

	get fps():number {

		return this.get('data')[0];

	}

	/* UNUSED? */

	focus():boolean {
        //if (this.app.ext.freezeonfocus)
        //    return document.hasFocus();
        return true;
    }

	/*
	*	Reset Frames
	*/

    clean():number {

        let f = this.frames || 1;

        this.frames = 0;

        return f;
    }

	/*
	*	Game Loop, Increment Frames
	*/

    tick(a:IPace,b:IPace):number {

        this.first(a);

        this.second(b);

        return this.fps;
    }

	/*
	*
	*/

	second(step:IPace):boolean {

		if (!step.Step())
			return false;

		this.frames++;

		let stepPadding:number = this.padding;

		for(stepPadding;stepPadding>=0;--stepPadding) {

			if (this.app.client.update.state.initalized) {

					(this.focus())?this.app.client.update.state.update():null;

			}

		}

		this.padding = 0;

		return true;
	}

	/*
	*
	*/

    first(step:IPace):boolean {

		if (!step.Step())
			return false;

        this.fps = step.delta;

		let n:number = (step.targetFPS / this.fps)*100000;

        this.delta = (n + (n < 0 ? 0 : 1) >> 0);

		// Limit FPS Catchup
        if (this.delta>2.5) {

            this.delta = 2.5;

		}

        if (this.delta!==this.delta+1) {

			this.app.client.delta = this.delta_speed = this.delta;

		} else {

            this.app.client.delta = this.delta_speed = 1;

		}

        if (this.fps==0) {
            return false;
		}

        this.increment = -step.targetFPS + (step.targetFPS * (step.targetFPS / this.fps));

        this.pending += this.increment;

        if (this.pending > step.targetFPS) {

			this.pending -= (this.padding / step.targetFPS) * step.targetFPS;

			this.padding++;

		}

        return true;
    }

}
