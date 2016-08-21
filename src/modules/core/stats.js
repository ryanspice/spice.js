
export default class StatsBuffer {

	x:number = 0;

	y:number = 0;

	w:number = 0;

	h:number = 0;

	s:number = 0;

	a:number = 0;

	c:number = 0;

	colour:string = "";

	oldcol:string = "";

	constructor(col:string|void, colold:string|void) {

		this.init();

	}

	set(obj:Object):void {

		this.x = obj.x;

		this.y = obj.y;

		this.w = obj.w;

		this.h = obj.h;

		this.s = obj.s;

		this.a = obj.a;

		this.c = obj.c;

		this.colour = obj.colour;

		this.oldcol = obj.oldcol;

	}

	init(col:string|void, colold:string|void):void {

		this.x = 0;

		this.y = 0;

		this.w = 0;

		this.h = 0;

		this.s = 0;

		this.a = 0;

		this.c = 0;

		this.colour = col || 0;

		this.oldcol = colold || 0;

	}

}
