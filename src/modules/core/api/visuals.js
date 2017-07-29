/* @flow because toFixedNumber bug */

import API from './api';

import type {
	IApp,
	ICanvas,
	IVector
} from '../interfaces/ITypes';

interface FixedNumber extends Number {


}

interface IVisualsAttrib {

	alpha:boolean

}

export default class Visuals extends API {

	attribs:IVisualsAttrib = {alpha:true};
	canvas:HTMLCanvasElement;
	buffer:HTMLCanvasElement;
	blitter:HTMLCanvasElement;

	/**
    *
    */

    constructor(app:IApp){

        super(app);

		this.buffering = this._buffering;

		let canvas:ICanvas = this.app.canvas;

		this.scale = this.app.scale;

		this.canvas = canvas.canvas;

		this.buffer = canvas.buffer;

		this.blitter = canvas.blitter;

		this.attribs.alpha = true;

		this.blitter_context = this.blitter.getContext("2d",this.attribs);

		this.attribs.alpha = false;

		this.canvas_context = this.canvas.getContext("2d",this.attribs);

		let globalCompositeOperation = this.app.options.global.globalCompositeOperation;

		if (this.canvas_context)
			this.canvas_context.globalCompositeOperation = globalCompositeOperation;
		this.blitter_context.globalCompositeOperation = globalCompositeOperation;

		if (this.buffer_context)
			this.buffer_context.globalCompositeOperation = globalCompositeOperation;

		if (this.app.options.canvas.buffer)
			this.buffer_context = this.buffer.getContext("2d",this.attribs);
			else
			this.buffer_context = this.canvas.getContext("2d",this.attribs);

		this.linearSampling = false;
		/*
		if ((this.buffer_context["imageSmoothingEnabled"] != this.linearSampling)&&
			(this.buffer_context["mozImageSmoothingEnabled"] != this.linearSampling)&&
			(this.buffer_context["msImageSmoothingEnabled"] != this.linearSampling)&&
			(this.buffer_context["webkitImageSmoothingEnabled"] != this.linearSampling))
			this.buffer_context["webkitImageSmoothingEnabled"] = this.linearSampling;
		*/
    }

	/**
    * @property
    */

	/*
	get position():IVector {

		let x = (this.app.input.x-(-this.app.getWidth()/2+this.window.innerWidth/2)+this.app.options.canvas.position.left/3).toFixedNumber(2);
		let y = (this.app.input.y-this.app.options.canvas.position.top).toFixedNumber(2);

		return new Vector(x,y);

	return {x:0,y:0};
	}
	*/

	buffering:boolean = false;

	get _buffering():boolean {
		return this.app.options.canvas.buffer;
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

		/*
		if (this.debug)
			if (this.app.client.fps)
				this.text(this.app.client.fps,this.app.client.setWidth-125,25,"#FFFFFF");*/

		//If double buffering
		if (this.buffering)
		{
			//If initalized, draw state
			if (this.app.client.update.state.initalized)
				this.app.client.update.state.draw();

			this.drawBufferedSprites();

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

	/*
	setBleed(threshold:number):void {
		this.bleed = threshold;
	}
	*/

}
