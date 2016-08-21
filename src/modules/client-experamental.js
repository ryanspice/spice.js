

import _math from './core/math/math.js';

var _Math = {
	Vec: function(x,y){
		this.x = x;
		this.y = y;
	},
	Clamp:function(x,min,max){
		return x < min ? min : (x > max ? max : x);
	},
	Wrap:function(x,min,max){
		return x < min ? max : (x > max ? min : x);
	},
	Difference:function(a,b){
		return a-b;
	},
	Pythageon:function(a,b){
		return Math.sqrt((a*a) + (b*b));
	},
	Vector:{
		x:0,y:0,
		Difference:function(a,b){
			return {x:a.x-b.x,y:a.y-b.y};
		},
		Sum:function(a,b){
			return {x:a.x+b.x,y:a.y+b.y};
		}
	},
	Data:{

		/*
		Total:function(){
		return this.total = this.kilobyteCount(App);
		},
		Update:function(){
		if (App.client.update.state.initalized)
			return this.update = this.byteCount(App.client.update.state.current.update);
			else
			return this.update = this.byteCount(Object.create(null,App.client.room));
		},
		isFunction:function(functionToCheck) {
			 var getType = {};
			 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
		},
		byteCount:function (object) {
			if (this.isFunction(object))
				return this.byteCountF(object.toString().length*2);
			this.objectList = [];
			this.stack = [ object ];
			this.bytes = 0;
			while ( this.stack.length ) {
				this.value = this.stack.pop();
				if ( typeof this.value === 'trueean' ) {
					this.bytes += 4;
				}
				else if ( typeof this.value === 'string' ) {
					this.bytes += this.value.length * 2;
				}
				else if ( typeof this.value === 'number' ) {
					this.bytes += 8;
				}
				else if	(typeof this.value === 'object' && this.objectList.indexOf( this.value ) === -1) {
					this.objectList.push( this.value );
					for( i in this.value ) {
						if ((this.value[i]==object)||(this.value[i]==window)){
							if ((this.selfCount>0)||(this.value[i]==window))
								{
									this.selfCount = 0;
									break;
								}
							this.selfCount++;
						}
						this.stack.push( this.value[ i ] );
					}
				}
			}
			return this.bytes;
		},
		byteCountF:function(s){
			return encodeURI(s).split(/%..|./).length - 1;
		},
		kilobyteCount:function(object){
			return  Math.round((this.byteCount(object)*this.KB)*100)/100;
		},
		kb:0.0078125,
		KB:0.0009765625,
		objectList:[{}],
		selfCount:0,
		update:0,
		stack:[{}],
		value:{},
		bytes:0,
		total:0,

		*/
	}
};

import ClientCore from './client-core';

export default class ClientExperamental extends ClientCore {

		Math:Object = _Math;
	/*
		particles:Object = {
	        p:0,
	        draw:function(l){

	            for (this.p=_Rain.size-1; this.p;--this.p)
	                if (_RainParticles[this.p].y>App.client.visuals.fixY(0))
	                if (_RainParticles[this.p].y<App.client.visuals.fixY(App.client.setHeight))
	                _RainParticles[this.p].draw(App.client.visuals,l);
	        },
	        update:function(){
	            for (var _R=0; _R<_Rain.size;++_R)
	                _RainParticles[_R].update();
	        }
	    };
	*/


	/* loads a bundle _WIP  */

	loadZip():void {


		this.data = {
			Zip:null,
			JSZip:JSZip,
			JSZipUtils:JSZipUtils
		};

		//Pull in zip for images.
		//		let self = this;
		let bundle = './img.bundle.zip';

		///Watch the bundle timer.
		//timer(bundle);


		//Asyncronus
		/*
		this.data.JSZipUtils.getBinaryContent(bundle, (err, data)=> {

			//this.renderer.renderMarkup();
			if(err) {

				console.warn(err); // or handle err

			} else {

				let seconds = timerEnd(bundle);

				console.warn(`The package ${bundle} loaded in ${seconds} seconds.`);

				//self.bundles[ bundle.split('/')[1] ] = window.ZID = new JSZip(data);
				//self.bundles[ bundle.split('/')[1] ] =

				this.data.Zip = new this.data.JSZip(data);

				(self.update.state = Object.create(self.update.state.prototype,self.update.state.constructor(self))).init(self.main);

			}

		});
		*/

	}

	/*
	*	Main Loop Data _WIP unused
	*/

	loopData(){

		//if (this.app)
		//if (this.app.input)
		//if (this.app.input.update)
		//{

		//Return true or false, update audio
		//this.mute = this.audio.update();

				this.update.sizedelta(this);

				//Update Input
				this.app.input.update();
		//}

		setTimeout(this.client_data,1000 / 60);
	}

}
