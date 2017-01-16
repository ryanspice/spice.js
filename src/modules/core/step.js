/* @flow */

import WeakMapThingy from './thingy';

import type {
	IPace,
	IStep
} from "../core/interfaces/ITypes";

/** The state class which the main game state inherits
*	@module */

const FPS = 0;

export default class Step extends WeakMapThingy {

	/** @public */

	app:Object;

	delta:number =1;

    frames:number = 0;

    pending:number = 0;

    padding:number = 0;

    increment:number = 0;

    delta_speed:number = 1;

	static properties = {

		data:[
			FPS
		]

	};

	constructor(map:any) {

		super(map);
		return (this:IStep);
	}

	/**
    * @protected
    */

	set fps(val:number ):void {

    	this.get('data')[0] = 1 * (this.clean() / val * 1E3);

	}

	/**
    * @protected
    */

	get fps():number {

		return this.get('data')[0];

	}


	/* */

	ceil(n:number):number {

		return (n + (n < 0 ? 0 : 1) >> 0);

	}

	/* */

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

    tick(a:IPace,b:IPace,app:Object):number {

        this.first(a,app);

        this.second(b,app);

        return this.fps;
    }

	/*
	*
	*/

	second(step:IPace,app:Object):boolean {

		/*
		Legacy Code: See if works without first check
		if ((typeof step == 'undefined')||(!step.Step(app)))
			return false;
		*/

		//To Remove
		try{
			if (!step.Step(app))
				return false;
		} catch(e){ console.trace("Step: Second: step undefined"); };

		this.frames++;

		let s = this.padding;

		for(s;s>=0;--s) {

			if (app.client.update.state.initalized) {

					(this.focus())?app.client.update.state.update():null;

			}

		}

		this.padding = 0;

		return true;
	}

	/*
	*
	*/

    first(step:IPace,app:Object):boolean {

		/*
		Legacy Code: See if works without first check
		if ((typeof step == 'undefined')||(!step.Step(app)))
            return false;
		*/

		//To Remove
		try{
			if (!step.Step(app))
				return false;
		} catch(e){ console.trace("Step: First: step undefined"); };

        this.fps = step.delta;

		let n = (step.targetfps / this.fps)*100000;

        this.delta = this.ceil(n)/100000;

		// Limit FPS Catchup
        if (this.delta>2.5) {

            this.delta = 2.5;

		}

        if (this.delta!==this.delta+1) {

			app.client.delta = this.delta_speed = this.delta;

		} else {

            app.client.delta = this.delta_speed = 1;

		}

        this.app = app;

        if (this.fps==0) {
            return false;
		}

        this.increment = -step.targetfps + (step.targetfps * (step.targetfps / this.fps));

        this.pending+=this.increment;

        if (this.pending > step.targetfps) {

			this.pending -= (this.padding / step.targetfps) * step.targetfps;

			this.padding++;

		}

        return true;
    }

}
