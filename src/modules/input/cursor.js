
export default class Cursor {

	static Types:object = {

		//Cached cursor types
		auto		: "auto",
		inherit		: "inherit",
		crosshair	: "crosshair",
		def			: "default",
		help		: "help",
		move		: "move",
		pointer		: "pointer",
		progress	: "progress",
		text		: "text",
		wait		: "wait",
		eresize		: "e-resize",
		neresize	: "ne-resize",
		nwresize	: "nw-resize",
		nresize		: "n-resize",
		seresize	: "se-resize",
		swresize	: "sw-resize",
		sresize		: "s-resize",
		wresize		: "w-resize",

	}

	//Properties
	current:string = "auto";
	last:string = "auto";

	changed:boolean = false;
	count:number =0;
	lock:number =0;
	delay:number =4;

	constructor(url:string|void) {
/*
		this.set(this.wait);
		this.app.ext.cursor = this;*/
	}
/*
	set(cursor,lock) {

			if	((this.last==cursor)||(this.lock))
				return;

			this.last = this.current;

			this.current = cursor;

			/*
			if (this.app.options.target.buffer)
				this.app.canvas.buffer.style.cursor=this.current;
				this.app.canvas.canvas.style.cursor=this.current;

			document.body.style.cursor=this.current;
			*/
			/*
			this.changed = true;
			this.count++;
	}
*/
}

window.Cursor = Cursor;
