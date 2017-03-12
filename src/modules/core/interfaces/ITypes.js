// @typecheck: production, some
/* @flow */

import type {

	dtoFacebook

} from './dto/dtoTypes';
//console.time('Types2');

//type _NodeCallback_<E, V> = (err: ?E, value: ?V) => void;

export type object = Object;

//export type string = string;


//DUPLICATE IN app.js
interface AppEventTarget extends EventTarget {
	result:any;
    app:IApp|Object;
}

interface AppEvent extends Event {
    target: AppEventTarget;
}

declare interface Event {
	target:AppEventTarget;
}
//END DUPLICATE IN app.js


/**
 * @interface App
 */

 export type ISJS = {

	 controller:object;

 }

/**
 * @interface App
 */

 export type IApp = {

	id:number;

	OnLoad(self: object):void;
	OnApplicationLoad(evt:AppEvent):void;
	Loop(self:IApp):void;
	Start(w:any,h:any):void;
	start(w:any,h:any):void;

	client:IClient|Object;
	canvas:ICanvas;
	options:IOptions;


	main?:IState;

	+scale:number;
 };

export type ICanvas = {

	canvas:any;
	buffer:any;

}

export type IInput = {



}


export type IUtils = {

	loadExternalJS(scripts:Array<string>):void;


}



/*



scale:number;
width:number;
height:number;

*/

export type IMath = {


}

export type IBuild = {

	app:Function;
	id:number;
	document:Object;
	stats:Object;
	+utils:Object;
	+aState:Object;
	+controller:Object;
	+window:Object;
	+time:Function;
	+timeEnd:Function;
	+buildWindowReferences:Function;
	+buildPrototype:Function;
	+create:Function;

}

/**
* @interface App
*/

export type ICore = {

	app:IApp;
	ext:IExt;
	options:IOptions;

	client:IClient|Object;
	visuals:IVisuals;

	input:IInput;

	user:dtoFacebook;

	math:IMath;

	time:number;
	+scale:number;
	id:number;

	+width:number;
	+height:number;
	+scale:number;
	+version:String;
	+fps:number;
	main:IState;

/*
	width():number;
	height():number;
	scale():number;
	//version():string;
	fps():number;
	main:IState;
*/
};

/**
* @interface
*/

export type IExt = {

	useragent:Object;
	cookies:Object;
	metatag:IMetatags;
	cursor:Object;
	connect:Object;

}

/**
* @interface
*/

export type IVisuals = {
	a?:number;



	flip(s:number):void;
}

/**
* @interface
*/

export type IGraphics = {

}

export type IClientCore = {

	projectSize:IVector;

	ext:IExt;
	room:IRoom;
	visuals:IVisuals;
	graphics:Object;
	loader:Object;
	//update:IUpdate;
	renderer:Object;

	width:number;
	height:number;
	scale:number;

	setWidth:number;
	setHeight:number;

	client_f:any;
	client_data:any;
	resized:boolean;
	update:any;
	fps:number;
	second:any;
	mainLoop:any;

    loop():void;
	initalize(loop:Object, loopdata:Object, scale:number):void;
	verifySize(size:number|IVector, h:number):void;

	+initalize:Function;
	+loop:Function;

}


/**
* @interface
*/

export type ICookies = {

}

/**
* @interface
*/

export type IUseragent = {
	agent:any;
	mouse:boolean;
	touch:boolean;
	keyboard:boolean;
	windows:boolean;
	chrome:boolean;
	safari:boolean;
	iemobile:boolean;
	nokia:boolean;
	ie:boolean;
	ios:boolean;
	blackberry:boolean;
	playbook:boolean;
	bb10:boolean;
	mobile:boolean;
	+IE:Function;
	+iOS:Function;
	+Nokia:Function;
	+Mobile:Function;
	+Chrome:Function;
	+Safari:Function;
	+Desktop:Function;
	+Android:Function;
	+IEMobile:Function;
	+BlackBerry:Function;
}

/**
* @interface
*/

export type IMetatags = {

	ms_taphighlight:string;
	apple_webapp:string;
	apple_statusbar:string;
	devicedpi:boolean;
	devicewidth:boolean;

	head:any;
	link:any;
	meta:any;
	count:any;

	width:number;

	cache:boolean;
	cacheage:number;

	+metaFavicon:Function;
	+metaLink:Function;
	+new:Function;
	+append:Function;

}

/**
* @interface
*/

export type ICursor = {
	current:string;
	last:string;

	changed:boolean;
	count:number;
	lock:number;
	delay:number;
	+set:Function;
}

/**
* @interface
*/

export type IConnect = {

	DisableDefaultCallback:boolean;
	XMLHttpRequest:XMLHttpRequest;
	Error:string;
	ErrorAttempt:string;
	ErrorOffline:string;
	ConnectionAttempts:number;

	offline:boolean;
	testurl:string;
	window:window;

	+XML:Function;
	+ready:Function;
}


/**
* @interface Options
*/

export type IOptions = {
	/*

		width:number;
		height:number;
		*/
		overridescroll:boolean;
		drag:number;
		targetfps:number;
		mute:boolean;
		paths:Object;
		target:Object;
		global:Object;
		flags:Object;
		canvas:Object;
		msFlags:Object;
		override:Object;

		canvas:Object;


		+get:Function;
		+set:Function;

};

/**
 * @interface Pace
 */

export type IPace = {

	delta: number;
	offset: number;
	rate: number;
	targetFPS: number;
	currentTime: number;
	+Step:Function;
	+CalculateDelta:Function;

};

/**
 * @interface Step
 */

 export type IStep = {

	app:IApp;

	delta:number;
	frames:number;
	pending:number;
	padding:number;
	increment:number;
	delta_speed:number;
	fps:number;
	+focus:Function;
	+clean:Function;
	+tick:Function;
	+second:Function;
	+first:Function;

 }





/**
 * @interface State
 */

export type IState = {

	name?:string;

	app?:Object;
	visuals?:Object;
	graphics?:Object;
	initalized?:boolean;

	update:Function;
	draw:Function;
	init:Function;

}

/**
 * @interface Room
 */

export type IRoom = {
	started:boolean;
	Started():Function;
}

/**
 * @interface StatsBuffer
 */

export type IStatsBuffer = {
	x:number;
	y:number;
	w:number;
	h:number;
	s:number;
	a:number;
	c:number;
	colour:string;
	oldcol:string;
	+set:Function;
}

export type ISJSClass = {

	app:IApp;
	visuals:Object;
	graphics:Object;

}

export type TClient = {
	discription:string;
	projectSize:IVector;


	app:Object;
	ext:IExt;

	Math?:Object;
	particles?:Object;
	visuals?:Object;
	graphics?:Object;

	room?:Object;
	audio?:Object;
	mainLoop?:Object;
	second?:Object;
	loader?:Object;
	update?:Object;
	renderer?:Object;
	data?:Object;

	width:number;
	height:number;
	setWidth:number;
	setHeight:number;
};

//export type IClient = TClient;

export type IClient = {

	discription:string;
	projectSize:IVector;


	app:Object;
	ext:IExt;

	Math?:Object;
	particles?:Object;
	visuals?:Object;
	graphics?:Object;

	room?:Object;
	audio?:Object;
	mainLoop?:Object;
	second?:Object;
	loader?:Object;
	update?:Object;
	renderer?:Object;
	data?:Object;

	width:number;
	height:number;
	setWidth:number;
	setHeight:number;

	scale?:number;

	initalize:Function;
	loop:Function;
	loopData:Function;

	log(string:string):void;

};

export type IUpdate = {

	fullscale:boolean;
	last:IVector;
	difference:IVector;
	scaler:IScaler;
	scalediff:number;

	lastscale:number;
	frames:number;
	pause:number;
	set:number;

	step:IStep;
	state:IState;

	inital(app:IApp):void;
	scale(client:IClient):number;
	size(client:IClient):boolean;
	sizedelta(client:IClient):boolean;

	scrollto():void;

}

export type IVector = {

	x:number;
	y:number;
	position:any;
	+Difference:Function;
	+equals:Function;
	+sum:Function;
	+multiply:Function;
	+offset:Function;

}

export type IScaler = {
	x:number;
	y:number;
	s:number;
}

export type IThingy = {

	map:WeakMap<*,*>;
	private:boolean;
	-map:Function;
	+get:Function;

}

export type vector<X=0,Y=0> = {x:0,y:0};


export type app<APP,VISUALS,GRAPHICS> = {app:APP,visuals:VISUALS, graphics: GRAPHICS};

type _weakmap = WeakMap;

export type weakmap = WeakMap;

//var weakmap:weakmap;

//export type number = number;
export type method = Function;

const _metatag = document.createElement('meta');

export type metatag = _metatag;

export type element = object;


export type array = Array<any>;
export type array_string = Array<string>;
export type array_number = Array<number>;

const _object:object = {};
const _string:string = "";
const _vector:vector = {x:0,y:0};





//window.t = weakmap;

//const _weakmap:WeakMap;

//console.log(_weakmap,weakmap);



const _number:number = 0;
const _method:method = ()=>{};

const _array:array = [];
const _array_number:array_number = [0];
const _array_string:array_string = [""];

const types:array = [
    ['_object',_object],
    ['_vector',_vector],
    ['_string',_string],
/*    ['_weakmap',_weakmap],*/
    ['_number',_number],
    ['_method',_method],
    ['_array',_array],
    ['_array_number',_array_number],
    ['_array_string',_array_string]
];

interface _ITypes {
    list:array;
    get:method;
};

class ITypes<T:number> {

    constructor():void {

        this.get().forEach((entry,e)=>{

            (window[entry[0]] = entry[1]);

        });

    }

    get ():array {

        return types;

    }

};

//console.timeEnd('Types2');

export {_vector, _weakmap, _number, _string, _method, _object, _array, _array_string, _array_number};

export default ITypes;
