/* @flow */

export default class Pace {

	adding:number = 1;

	targetfps:number = 60;

	timer:number =	0;

	rate:number =	0;

	offset:number =	0;

	delta:number = 1;

	Step:Function;

	constructor(rate:any,fps:any){
		//Debug.log('Pace: Init');
		this.targetfps = fps;
		this.timer = new Date().getTime();
		this.rate = rate/1000.0;
		this.offset = this.timer-1000.0/rate;
		this.delta = 0.0;
		return true;
	}

	Time(app:any):number {
		this.timer = new Date().getTime();
		return this.timer - this.offset;
	}

	Step(app:any):boolean {
		this.delta = this.Time(app);
		var step = this.rate*this.delta;
		if (step>1.0)
			this.offset+=Math.floor(step)/this.rate;
		return (step - 1.0)>0.0?true:false;
	}

	GetStepsPerSecond()	{
		return 1000.0/this.delta;
	}

}
