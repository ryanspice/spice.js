
//import {Vector} from './math/vector.js';
import {_SJSClass as SJSClass} from './core/sjs';


import StatsBuffer from './core/stats';

import API from './core/api'

//import IFace from './core/interfaces/IFace';

/*
class _Pipe {

    executeNext(){



    }
}
*/

export default class Visuals extends API {

	/**
    *
    */

    constructor(app){

        super(app);

		this.stat = new this.stat();

		let canvas = this.app.canvas;

		window.utils.requestAnimationFrame(name,0,0);

		this.scale = this.app.scale;

		this.canvas = canvas.canvas;

		this.buffer = canvas.buffer;

		this.blitter = canvas.blitter;

		let attribs = {alpha:true};

		this.blitter_context = this.blitter.getContext("2d",attribs);

		attribs = {alpha:false};

		this.canvas_context = this.canvas.getContext("2d",attribs);

		let globalCompositeOperation = this.app.options.global.globalCompositeOperation;

		this.canvas_context.globalCompositeOperation = globalCompositeOperation;
		this.blitter_context.globalCompositeOperation = globalCompositeOperation;
		this.buffer_context.globalCompositeOperation = globalCompositeOperation;

		if (this.app.options.canvas.buffer)
			this.buffer_context = this.buffer.getContext("2d",attribs);
			else
			this.buffer_context = this.canvas.getContext("2d",attribs);

		this.linearSampling = false;

		if (this.buffer_context["imageSmoothingEnabled"] != this.linearSampling)
		if (this.buffer_context["mozImageSmoothingEnabled"] != this.linearSampling)
		if (this.buffer_context["msImageSmoothingEnabled"] != this.linearSampling)
		if (this.buffer_context["webkitImageSmoothingEnabled"] != this.linearSampling)
			this.buffer_context["webkitImageSmoothingEnabled"] = this.linearSampling;

    }

	/**
    * @property
    */

	get position():Vector {

		let x = (this.app.input.x-(-this.app.getWidth()/2+this.window.innerWidth/2)+this.app.options.canvas.position.left/3).toFixedNumber(2);
		let y = (this.app.input.y-this.app.options.canvas.position.top).toFixedNumber(2);

		return new Vector(x,y);

	}

	/**
    * @method
    */

	fixX(x:number):number {

		return ((x*this.scale)+(this.app.client.width/2)-(this.app.client.setWidth/2)*this.scale).toFixedNumber(2);
	}

	/**
    * @method
    */

	fixY(y:number):number {

		return ((y*this.scale)+(this.app.client.height/2)-(this.app.client.setHeight/2)*this.scale).toFixedNumber(2);
	}

	/**
    * @method
    */

	fixW(w:number):number {

		return (w*this.scale).toFixedNumber(2);
	}

	/**
    * @method
    */

	fixH(h:number):number {

		return (h*this.scale).toFixedNumber(2);
	}

	/**
	* @method
    */

	flip():void {

		this.scale = this.app.client.scale;

		let style = String(this.app.canvas.canvas.style.background=="transparent");

		this.fillStyle = style = "false";

		if (style!=this.laststyle) {

			this.fillStyle = style;

		} else {

			this.fillStyle = "false";

			this.screen_fill(this.app.client.visuals.bleed,this.app.options.canvas.background);
		}

		if (this.debug)
			if (this.app.client.fps)
				this.text(this.app.client.fps,this.app.client.setWidth-125,25,"#FFFFFF");

		//If double buffering
		if (this.app.options.canvas.buffer)
		{
			//If initalized, draw state
			if (this.app.client.update.state.initalized)
				this.app.client.update.state.draw();


			//Draw buffer to canvs
			this.canvas_context.drawImage(this.buffer,0,0);

			//Clear buffer
			if (this.fillStyle===true)
				this.buffer_context.clearRect(0,0,this.window.innerWidth,this.window.innerHeight);
		}
		else {

			//If not double buffering, clear canvas
			if (this.fillStyle===true)
				this.buffer_context.clearRect(0,0,this.window.innerWidth,this.window.innerHeight);

			//If initalized, draw state
			if (this.app.client.update.state.initalized)
				this.app.client.update.state.draw();

		}



	}

	setBleed(threshold:number):void {

		this.bleed = threshold;

	}
}
