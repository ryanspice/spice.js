/* @flow */

const _MAP_DATA_ = `{
	"name":"tim",
	"options":{

		"canvas":{
			"size":{
				"width":400,
				"height":300
			}
		}

	},
	"init":[
		"this.velocity=new Vector(-0.1,0);this.app.client.loader.graphics=this.graphics;this.items=[];let s=16;let i=16;let t=i;this.app.client.loader.asyncLoadImage('../tiles_packed','s').then((sprite)=>{this.snow=sprite;while(i-->=0)this.items.push(this.visuals.createMapObject('Tile',this.snow,0+t*i,100,1,1,1,0,0,16,16));this.visuals.createMapObject('Tile',this.snow,0+t*i,100,1,1,1,0,0,16,16);this.visuals.Tile(this.snow,100+t*i,125,1,1,1,0,0,16,16);this.visuals.push(new Ground(this.snow,50+t*i,150,1,1,1,0,0,16,16));new Ground(this.snow,50+t*i,200,1,1,1,0,0,16,16,this.visuals)});this.items.push(this.visuals.createMapObject('Circle',200,200,5,'#FF00FF',0.5));this.items.push(this.visuals.Circle(100,100,10,'#FFFFFF',1));this.items.push(this.visuals.push(new Circle(150,150,10,'#FFFFFF',1)));this.items.push(new Circle(100,150,10,'#FFFFFF',1,this.visuals));this.player=new Circle(0,0,25,'#FF0000',1,this.visuals);this.player.priority=3;"
	],
	"draw":[
		"this.visuals.circle : 25,25,2.5,'#FFFFFF' "
	],
	"update":[

		"if(this.app.input.duration)this.velocity.x+=0.1;for(let i=0;i<=this.items.length-1;i++){let y=this.items[i].y=this.items[i].y+Math.sin(new Date().getTime()/300+this.items[i].x/100)*1;let x=this.items[i].x;if(y-20<this.player.y)if(x-25<this.player.x)if(x+25>this.player.x){if(this.velocity.y>0)this.velocity.y=0;this.velocity.y-=0.025}}if(this.velocity.y<1)this.velocity.y+=0.025;this.velocity.x*=0.9;this.player.Move(this.velocity);this.player.r=20-this.velocity.y;"

	],
	"objects":[

		{"name":"a",
					"draw":[	"this.visuals.circle : 125,125,2.5,'#FFFFFF' "
					],
					"update":[],
					"init":[]
				}
			]
}`;

let _DATA_ =  {update:function(){},draw:function(){this.visuals.circle(25,25,2.5,"#FFFFFF");},init:function(){}};

class MDATA {

	data:any;

	constructor(){

		this.data = this.parse(JSON.parse(_MAP_DATA_))

	}

	parse(data:any){

		let upString = "";

		upString = this.parseArrayofStringFunctions(data.draw);
		data.draw = new Function(
			'return function draw(){'+	upString +'}'
		)();

		upString = this.parseArrayofStringFunctions(data.update);
		data.update = new Function(
			'return function update(){'+	upString +'}'
		)();

		upString = this.parseArrayofStringFunctions(data.init);
		data.init = new Function(
			'return function init(){'+	upString +'}'
		)();

		return data;
	}

	parseArrayofStringFunctions(data:Array<string>):string {

		let up = data;
		let upString = "";

		for(var i = 0; i<up.length; i++){

			//console.log(r,up[i],upString,up[i].split(" : ").length,i)
			//console.log(up[i].split(" : ").length, up[i])

			if (up[i].split(" : ").length == 1) {

				upString += up[i];

			} else {

				let r = up[i].split(" : ")[0] + "(" + up[i].split(" : ")[1] + ")";
				upString+=r;

			}

		}

		return upString;
	}

}



window._MAP_DATA_ = _MAP_DATA_;
window.MDATA = MDATA;
window.DATA = _DATA_;


import State from './state';

import Core from './core/core';

import type {
	IApp,
	IClient,
	IOptions
} from './core/interfaces/ITypes';

declare interface Event {
	target:AppEventTarget;
}

interface AppEventTarget extends EventTarget {
	result:any;
    app:IApp|Object;
}

interface AppEvent extends Event {
    target: AppEventTarget;
}

/** Core of the framework, initalizes client, input and listeners.
* @module
* @protected */

export default class App extends Core {

	constructor(map:WeakMap<*,*>) {

		super(map);

		return (this:IApp);
	}

	/**
	*  This function Starts the application by running InitalizeComponents and then InitalizeLoop
	* @method
	* @override */

    Start(w:?number = 0, h:?number = 0):void {

		//console.log(this.options);

		this.InitalizeComponents(
			w || this.options.canvas.size.width,
			h || this.options.canvas.size.height
		).then(this.InitalizeLoop);

    }

	/** Triggers when the application first loops.
	* @method
    * @param {Object} [self] - Reference to the app.
	* @override	*/

    OnLoad(self:App):void {

		self.main = new MDATA().data;

        self.Start(
			self.main.options.canvas.size.width||this.options.canvas.size.width,
			self.main.options.canvas.size.height||this.options.canvas.size.height);

    }

	/** Triggers on dom content load.
	* @method
    * @param {Event} [evt] - The passing event.
	* @override	*/

    OnApplicationLoad(evt:AppEvent):void {

       evt.target.app.OnLoad(evt.target.app);

    }

	/** Event listener polyfill.
	* @method
    * @param {Element} [obj] - Element to trigger event on, fallback on window.
    * @param {Event} [evt] - The passing event.
    * @param {String} [listener] - The listener to build.
    * @param {Object} [param] - Paramater to pass.
	* @example
	* Application.Listener(window,'click',function(){////console.log('eh');},'');
	* Application.Click(new Event,window);	*/

    Listener(obj:Object, evt:string, listener:Function, param?:string):void {

		/* Legacy Unused?
        if (typeof obj[0] === "object") {
		    obj = obj[0] || window;
        }
		*/

        if (obj.addEventListener) {

            obj.addEventListener(evt, listener, false);

		}	else {

			console.warn('Using attachEvent');

			obj.attachEvent("on" + evt, listener);

		}

        obj.app = window.apps[this.id] = this;

    }

	/** Object constructor/factory polyfill. MAY be unnecessary.
	* @method
    * @param {Object} [prototype] - An object prototype.
    * @param {Object} [constructor] - An object constructor. */

    Construct(prototype:Object,constructor:Function ):IApp|Object  {

        let  isObj:bool = false;
        let  obj:Object = prototype;
        let  proto:Object = prototype;
        let  construct:Function = constructor;
        let  ret:Object = {};
        let type;

        /* if prototype contains a prototype and constructor. */

        if (typeof obj.prototype !== 'undefined')
        	if (typeof obj.constructor !== 'undefined')	{
        		construct = obj.constructor;
        		proto = obj.prototype;
        		isObj = true;
        	}

        /* Grab type of constructor */

        type = typeof construct;

        /* Return & Create object based on constructor */
        switch(type)	{

           /* Use only the prototype */
           case 'undefined':
               ret = Object.create(proto);
           break;

           /* Use constructor as object */
           case 'object':
               ret = Object.create(proto,construct);
           break;

           /* Use constructor as function */
           case 'function':
               ret = Object.create(proto,construct(this));
           break;

           /* Expected a type */
           default:
        		console.warn("Expected 'object' or 'function': Type is "+type);

        }

        if (isObj)
            prototype = ret;

        //console.warn(ret,typeof ret);

       return ret;

    }

}

/* LEGACY import Particles from './particles.js'; // (unfinished) To be built into application */
/* LEGACY window.SJSParticleController = Particles; // Temporary for snowflakes */
