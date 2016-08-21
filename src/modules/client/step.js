/* @flow */

import _IFace from '../core/interfaces/IFace';

import type {
	Pace
} from "../core/interfaces/ITypes";

/** The state class which the main game state inherits
*	@module */

const FPS = 0;

export default class Step extends _IFace {

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

	/**
    * @protected
    */

	set fps(value){

    	this.get('data')[0] = 1 * (this.clean() / value * 1E3);

	}

	/**
    * @protected
    */

	get fps(){

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

	/* Reset Frames, Return Frames ( Pass F*/

    clean():number|void {

        let f = this.frames;

        this.frames = 0;

        return f;
    }

	/* Game Loop, Increment Frames */

    tick(a:Pace,b:Pace,app:Object):number {

        this.first(a,app);

        this.second(b,app);

        return this.fps;
    }

	/* */

	second(step:Pace,app:Object):boolean {

		if ((typeof step == 'undefined')||(!step.Step(app)))
			return false;

		this.frames++;

		for(var s =this.padding;s>=0;--s)
			if (app.client.update.state.initalized)
				(this.focus())?app.client.update.state.update():null;

		this.padding = 0;

		return true;
	}

	/* */

    first(step:Pace,app:Object):boolean {

        if ((typeof step == 'undefined')||(!step.Step(app)))
            return false;

        this.fps = step.delta;

		let n = (step.targetfps / this.fps)*100000;
        this.delta = this.ceil(n)/100000;

        if ((this.delta>2.5))
            this.delta = 2.5;

        if (this.delta!==this.delta+1)
            app.client.delta = this.delta_speed = this.delta;
        else
            app.client.delta = this.delta_speed = 1;

        this.app = app;

        if (this.fps==0)
            return false;

        this.increment = -step.targetfps+ (step.targetfps*(step.targetfps / this.fps));

        this.pending+=this.increment;

        if (this.pending>step.targetfps) {

			this.pending-=(this.adding/step.targetfps)*step.targetfps;

			this.padding++;

		}

        return true;
    }

}
