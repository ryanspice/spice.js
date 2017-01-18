
import {_SJSClass as SJSClass} from './core/sjs';

 import _test from './test.js'

window.test = _test;





export default class _loader extends SJSClass {

	constructor(app) {

		super(app);

		this.ImageCache = [];
		this.ImageMap = new Map();

		let self = this;
		this.ImageCache.push = function(){

			var A = Array.prototype.push.apply(this,arguments);

			self.ImageMap = self.ImageCache.map(function(a){return a.name;});

			return A;

		}

		this.ImageBuffer = [];

		this.ImageBufferTime = 3;
		this.asyncLoadCacheIndex = 0;

		window.Loader = this;

	}

	checkLoaded(name) {

		if (!this.getImageReference(name).complete) {

			setTimeout(()=> {

				this.checkLoaded(name);

			}, this.ImageBufferTime);

		} else {

			this.ImageBuffer.splice(this.ImageBuffer.indexOf(name));

		}

		return this.getImageReference(name);

	}

	getBufferLength() {

		return this.ImageBuffer.length;
	}

	getImageReference(string) {

		return this.ImageCache[this.ImageMap.indexOf(string)];

	}

	loadImage(string) {

		let name = string;

		let img = this.graphics.load(string);

		let cacheIndex = this.ImageCache.push(img);

		img.string = name;

		this.ImageBuffer.push(name);

		setTimeout(()=> {

			this.checkLoaded(name)

		}, this.ImageBufferTime + (0.1 * this.ImageBuffer.length));

		return this.ImageCache[cacheIndex - 1];
	}

    getBase64Image(img) {

        // Create an empty canvas element
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Get the data-URL formatted image
        // Firefox supports PNG and JPEG. You could check img.src to
        // guess the original format, but be aware the using "image/jpg"
        // will re-encode the image.
        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    createImageData(img) {

        // Create an empty canvas element
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");

		        canvas.width = img.width;
		        canvas.height = img.height;
								canvas.style.background = 'transparent';
								canvas.background = 'transparent';


        var canvas2 =this.app.canvas.buffer.getContext('2d');
		//var canvas2_data = canvas2.getImageData(0,0,img.width,img.height);
		var canvas2_data = canvas2.getImageData(0,0,100,100);

		//var canvas2_img = new Image();
		//canvas2_img.src = canvas2_data;

		var img = document.createElement("img");
		img.src = this.app.canvas.canvas.toDataURL("image/png");

        // Copy the image contents to the canvas
		//this.visuals.putData(canvas2_data,0,0);


		//var newData = canvas2.getImageData(0,0,img.width,img.height);

		//ctx.putImageData(canvas2_data,0,0);

        ctx.drawImage(img, 0, 0);
        //ctx.drawImage(canvas2_img, 0, 0);

		var newData2 = ctx.getImageData(0,0,img.width,img.height);

        return newData2;
    }



	async asyncLoadImage(string,suffex) {

		let name = string;

		let img = await this.app.client.graphics.load(name);

		img.string = name;

		let cacheIndex = await this.ImageCache.push(img);

		await this.ImageBuffer.push(name+suffex);

		await setTimeout(()=> {

			let _img = this.checkLoaded(name);

			//_img.base64 = this.getBase64Image(_img);
			//_img.imgdata = this.createImageData(_img);



			this.ImageCache[cacheIndex - 1] = _img;


			//console.log(this.getBase64Image(_img))
			//			console.log(this.ImageCache[cacheIndex - 1] );
			//this.ImageCache[cacheIndex - 1].src = this.getBase64Image(this.checkLoaded(name));

			//console.log(this.ImageCache[cacheIndex-1])

		}, this.ImageBufferTime + (0.1 * this.ImageBuffer.length))
		this.asyncLoadCacheIndex = cacheIndex;

		return this.ImageCache[cacheIndex - 1];
	}

	async asyncLoadZipImage(string,suffex) {

		let name = string;

		let img = await this.graphics.loadFromZip(name);

		img.string = name;

		let cacheIndex = await this.ImageCache.push(img);

		await this.ImageBuffer.push(name+suffex);

		await setTimeout(()=> {

			let _img = this.checkLoaded(name);

			//_img.base64 = this.getBase64Image(_img);
			//_img.imgdata = this.createImageData(_img);



			this.ImageCache[cacheIndex - 1] = _img;


			//console.log(this.getBase64Image(_img))
			//			console.log(this.ImageCache[cacheIndex - 1] );
			//this.ImageCache[cacheIndex - 1].src = this.getBase64Image(this.checkLoaded(name));

			//console.log(this.ImageCache[cacheIndex-1])

		}, this.ImageBufferTime + (0.1 * this.ImageBuffer.length))
		this.asyncLoadCacheIndex = cacheIndex;

		return this.ImageCache[cacheIndex - 1];
	}

	async asyncLoadImageData(string,string2,x,y) {

		let _index = this.asyncLoadCacheIndex;

		let _image = await this.asyncLoadImage(string,"_blit").then((img)=>{

				//let _cacheIndex =  this.ImageCache.push(img);

				//console.log( this.ImageCache[_cacheIndex-1]=img)

				let buffindex = this.ImageBuffer.push(string+"_blit");

                this[string2] = img;
                this[string2].addEventListener('load',()=>{

                        this[string2] = this.visuals.blit(this[string2],x,y)

		                this[string2].string = string2;

						this.ImageCache.push(this[string2]);

								this.ImageBuffer.splice(this.ImageBuffer.indexOf(string+"_blit2"),1);
                })

        });

		return _image;
	}

	async asyncLoadImageDataFromZip(string,string2,x,y) {

		let _index = this.asyncLoadCacheIndex;
		let _image = await this.asyncLoadZipImage(string,"_blit").then((img)=>{

				//let _cacheIndex =  this.ImageCache.push(img);
//				console.log( this.ImageCache[_cacheIndex-1]=img)
/*
				let buffindex = this.ImageBuffer.push(string+"_blit");

                this[string2] = img;
                this[string2].addEventListener('load',()=>{

                        this[string2] = this.visuals.blit(this[string2],x,y)

		                this[string2].string = string2;

						this.ImageCache.push(this[string2]);

								this.ImageBuffer.splice(this.ImageBuffer.indexOf(string+"_blit2"),1);
                })
*/
        });

		return _image || string;
	}

}
