
import {_SJSClass as SJSClass} from './core/sjs.js';

/**
BASE iamge class  _WIP
*/

class Base {

	/**
	Get an image  _WIP
	*/

	get():Object {

		var img = new Image();
		img.src = this.src;
		img.file = this.file;
		img.name = this.name;
		img.number = 1+ window.apps[0].client.graphics.SpriteLoadErrors++;

		img.onload = function() {

			window.apps[0].client.graphics.SpriteLoadErrors--;

		};

		return img;

	}

	/**
	Retrieve Zip _WIP
	*/

	retrieveZipFile(file:string ){

		file = String(file);

		let t = Application.client.data.Zip.file(file).asUint8Array();

		let strings:Array = [], chunksize = 0xffff;

		let len:number = t.length;

		// There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want

		for (let i = 0; i * chunksize < len; i++){

			strings.push(String.fromCharCode.apply(null, t.subarray(i * chunksize, (i + 1) * chunksize)));

		}

		var content = btoa(strings.join(''));

		return "data:image/png;base64," + String(content).trim();

	}

	/**
	Get from retrieved Zip _WIP
	*/

	getFromZip():Object {

		let img:Object = new Image();

		let file:string = String(this.src);


		img.src = this.retrieveZipFile(this.src);

		img.file = this.file;

		img.name = this.name;

		img.number = 1+ window.apps[0].client.graphics.SpriteLoadErrors++;

		img.onload = function() {

			window.apps[0].client.graphics.SpriteLoadErrors--;

		};

		return img;
	}

	/**
	Unload graphics
	*/

	unload():void {

		this.Sources.unload(this.name);

	}

};

class Library extends SJSClass {

	path:String = "";

	SpriteWebItems:Array = new Array(0);

	SpriteLoadNumber:number = 0;

	SpriteLoadErrors:number = 0;

	SpriteLoadTime:number = 0;

	Sources:Object;

	Sprite:Object;

	sprite:Object;

	img:Object;


	/**
	* Loads objects used for loadng images _WIP to refractor
	* @param name - internal file name.
	* @param address - http link.
	*/

	graphicsLibrary(){

		this.Sprite = {};

		this.Sources = {};

		this.Sources.prototype = {

			get:function get(){return this.index;},

			getByName:function getByName(name){return this.index[name];},

			getName:function getName(name){return this.index[name].name;},

		}

		this.Sprite = Object.create(this.Base,
			{
				constructor:function Sprite(path,filename){this.path=path;this.filename=filename;return path;},

				src:	{value:"S:undefined"},

				file:	{value:"S:undefined"},

				name:	{value:"S:undefined"}

			});

		this.Sources = Object.create(this.Sources.prototype,
		{
			count:{writable: true,  configurable:true,value:0},
			index:{value:new Array()},
			append:{value:function append(image)
			{
				if (this.index[image.name]==image)
					return;
				this.index[image.name]=image;
				this.count++;
			}},
			unload:{value:function unload(name)
			{
				this.index[name]=null;
				return this.index[name];
			}},
		});
		return true;
	}


}


export default class Graphics extends Library {

		constructor(app) {

			super(app);

			this.graphicsLibrary();

		}

		/** Load a PNG
	    * @method
	    * @param name - client's reference name of the image, also filename if file is void
	    * @param file - name of the file to load,optional
	    * @method
	    */

		load(name:string ,file:string|void ):Object {

			if (typeof file==="undefined")
				file =  this.app.options.get("paths").images+""+name;

			this.Sources.append(this.SpriteAppend(name,file));

			return this.Sources.getByName(name);

		}

		/** Load a PNG from a Zip _ WIP uses global zip name
	    * @method
	    * @param name - client's reference name of the image, also filename
	    * @method
	    */

		loadFromZip(name:string):Object {

			let file:string =  name;

			this.Sources.append(this.SpriteAppendZip(name,file));

			return this.Sources.getByName(name);

		}

		/** Creates a sprite object and logs it.
	    * @method
	    * @param file - client's reference name of the image
	    * @param src - source path
	    * @param name - internal name of the sprite
	    * @method
	    */

		SpriteCreate(file:string, src:string, name:string):Object {

			this.SpriteLoadNumber++;

			this.SpriteLoadTime += (10*this.app.delta_speed)*this.SpriteLoadNumber;

			return this.sprite = Object.create(this.Sprite,{file:{value:file},src:{value:src},name:{value:name}});

		}

		/** Creates a sprite object and logs it.
	    * @method
	    * @param name - internal name of the sprite
	    * @param file - source filename
	    * @method
	    */

		SpriteAppend(name:string, file:string):Object {

			let image = (this.img = this.SpriteCreate(file,this.path + file + ".png",name)).get();

			return image;

		}

		/**
		* Create Sprite and Append @method
		* @param name - File Name
		* @param file - Zip file to look in
		*/

		SpriteAppendZip(name:string, file:string):Object {

			// KEEP let image;

			let image = (this.img = this.SpriteCreate(file,file ,name)).getFromZip();

			return image;

		}

		/**
		* Unloads an image _WIP
		* @param name - File Name
		*/

		SpriteUnload(name:string):void {

			delete this.Sources.getByName(name);

		}

		/**
		* Loads an image from the web
		* @param name - internal file name.
		* @param address - http link.
		*/

		webLoad(name:string, address:string):Object {

			this.SpriteWebItems[name] = new Image();

			this.SpriteWebItems[name].src = address;

			return this.SpriteWebItems[name];

		}


		Base:Base = new Base();


		getErrors(){

			return this.SpriteLoadErrors;

		}

		getImage(name){

			return this.Sources.getByName(name);

		}

}
