import SJSClass from './sjsclass.js';
export default class Loader extends SJSClass {

	constructor(app) {

		super(app);

		this.ImageCache = [];

		this.ImageBuffer = [];

		this.ImageBufferTime = 3;

	}

	checkLoaded(name) {

		if (!this.getImageReference(name).complete) {

			var _this = this;
			//console.log('Failed:' + name + " : " + this.ImageBuffer);

			setTimeout(function() {
				_this.checkLoaded(name)
			}, this.ImageBufferTime);

		} else {


			//console.log('Loaded: ' + name + " : " + this.ImageBuffer.length);
			this.ImageBuffer.splice(this.ImageBuffer.indexOf(name));
		}
	}

	getBufferLength() {

		return this.ImageBuffer.length;
	}

	getImageReference(string) {

		let elementPos = this.ImageCache.map(function(img) {
			return img.string;
		}).indexOf(string);
		let objectFound = this.ImageCache[elementPos];

		return objectFound;
	}

	loadImage(string) {

		let name = string;
		let img = this.graphics.load(string);
		let cacheIndex = this.ImageCache.push(img);

		img.string = name;


		this.ImageBuffer.push(name);

		var _this = this;

		setTimeout(function() {
			_this.checkLoaded(name)
		}, this.ImageBufferTime + (0.1 * this.ImageBuffer.length));

		return this.ImageCache[cacheIndex - 1];
	}

}
