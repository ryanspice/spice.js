
import State from './core/state.js';

/**
* _private
* @protected
*/

const _private = new WeakMap();

/**
* Renderer
* @module
* @protected
*/

export default class Renderer extends State {

	/**
	* private variables
	* @type {Object}
	* @protected
	*/

	static properties = {

		name:'Renderer',
		buffer:[],
		version:'0.0.1'

	};

	/**
	*	Constructor
	*	@type {Object}
	*/


	constructor(str, l){

		super();

		window.Renderer = this;

		_private.set(this,this.constructor.properties);

		let a = str;
		let i = l;

		console.trace(this)

		for(i; i>=0; i--){

			this.buffer = (str[i]);

		}

	}

	get buffer() {

		return this.get('buffer');

	}
	set buffer(value) {

		 this.get('buffer').push(value);

	}

	rRender (node,html){

		setInnerHTML(node,html);

	}

	aRender (node,html){

		if ((typeof node == 'undefined')||(typeof node == 'null'))
			node = document.getElementsByTagName('body')[0];

		if (html!='undefined')
		if (html!='undefinedundefined')
			node.insertAdjacentHTML('beforeend',html);

		//console.log(node.innerHtml);
		//var htmlNew = node.innerHTML+" "+html;
		//setInnerHTML(node,htmlNew);

	}

	/*

	*/

	queueMarkup(func){

		var markup = func();
		markup = markup.replace(/>\s+</g,'><');
		markup = markup.trim();

		return markup;

	}

	/*

	*/


	async renderMarkup(){

		let arr = this.buffer
			,	is = arr.length
			,	node = node
			,	 i = is-1;

		for (i; i>=0; i--) {

			let markup = arr[i];
			await this.aRender(node,markup);

		}

	}



}

new Renderer();

window.MarkupBuffer = [];
window.MarkupRecall = function(func){


	var markup = func();
	markup = markup.replace(/>\s+</g,'><');


	//window.MarkupBuffer.push(markup);
	Renderer.buffer.push(markup);

	//return func();

};

window.MarkupRender = function(){

		var node = document.getElementsByTagName('body')[0];

		var time = 10;


	for (var i = 0; i<Renderer.buffer.length; i++) {
		var markup = Renderer.buffer[i];
		var node = node;
		//setTimeout(()=>{
			Renderer.aRender(node,markup);
		//},50*i+1)
	}

};

window.rRender = Renderer.rRender;
window.aRender = Renderer.aRender;
