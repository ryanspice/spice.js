
import renderer from '../modules/renderer.js';

class page extends renderer {

	constructor(str){

		super();

		this.name = "Home Page";

		this.html = str;

	}

	init() {

		return true;

	}

	update() {

		return true;

	}

	draw() {

		return true;

	}

};

let Markup = "";

Markup += MarkupRecall(function(){

	let string = '';

	return string;

});

export default new page(Markup);
