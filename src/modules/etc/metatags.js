
/* @flow */

console.time('SJS:B:metatags.js');

/** Assign metatags via Metatags global object
*	@module
*	@public */

import _IFace from '../core/interfaces/IFace';

import type {
    metatag
} from "../core/interfaces/ITypes";

export default class Metatags {

	//Default injected tags
	ms_taphighlight:string = "no";
	apple_webapp:string = "yes";
	apple_statusbar:string = "black";
	devicedpi:boolean = true;
	devicewidth:boolean = true;

	//
	head:any = document.getElementsByTagName('head')[0];
	link:any = null;
	meta:any = null;
	count:any = 0;

	width:number = 0;

	cache:boolean = false;
	cacheage:number = 3;

	//

	constructor(url:string|void) {

		this.width = window.innerWidth;

		//Touch

		this.append(this.new("msapplication-tap-highlight",this.ms_taphighlight));

		this.append(this.new("apple-mobile-web-app-capable",this.apple_webapp));

		this.append(this.new("apple-mobile-web-app-status-bar-style",this.apple_statusbar));

		this.append(this.new("cursor-event-mode","native"));

		this.append(this.new("touch-event-mode","native"));

		this.append(this.new("HandheldFriendly","True"));

		//Dpi/View

		if (this.devicewidth){

			this.append(this.new("viewport","width=device-width, user-scalable=no"));

		}

		if (this.devicedpi) {

			this.append(this.new("viewport","target-densitydpi="+this.width+",-webkit-min-device-pixel-ratio=1,min-resolution:="+this.width+",-moz-device-pixel-ratio=1"));

		}

		this.append(this.new("viewport","user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"));

		//Cache

		if (!this.cache) {

			this.append(this.new("cache-control","max-age=0"));

			this.append(this.new("cache-control","no-cache"));

			this.append(this.new("pragma","no-cache"));

		} else {

			this.append(this.new("cache-control","max-age="+this.cacheage));

		}

		this.append(this.new("expires","Tue, 01 Jan 1980 1:00:00 GMT"));

	}

	//Favicon. Automatically fills a standard metaAppend while needing only one argument, sets favicon

	metaFavicon(img):void {

		this.append(this.metaLink(img,"shortcut icon","image/png"));

	}

	//Construct a standard metaLink element
	metaLink(href,rel,type):object {

		//Create link element
		this.link = document.createElement('link');

		//Assign element values
		this.link.href = href;
		this.link.rel = rel;
		this.link.type = type;

		//Return link
		return this.link;
	}

	/* Construct a standard metaTag element
	*
	*
	*/

	new(name:string = '',content:string = ''):Object {

		this.meta = document.createElement('meta');

		this.meta.content = content;

		this.meta.name = name;

		return this.meta;
	}

	/* Append a meta object to the <head>
	*
	*
	*/

	append(meta:any):boolean {

		let result = false;

		if (this.head.appendChild(meta)) {

			this.count++;
			result = true;

		} else {

			result = false;

		}

		return result;

	}

}


console.timeEnd('SJS:B:metatags.js');

//	window.Metatags = Metatags;
