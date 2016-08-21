
import {
	_SJSClass
} from './core/sjs';

import type {
    weakmap,
    object,
    array_string
} from "./core/interfaces/ITypes";

import Cookies from './cookies.js';

import Connection from './network/connection';

import Cursor from './input/cursor';

import Metatags from './etc/metatags';

import Useragent from './etc/useragent';

export default class Ext extends _SJSClass {

	/*	UserAgent Information
	/*	Assists in detecting the platform that you are running on.
	/*	*/

	useragent:Useragent;

	/*	Cookie Storage
	/*	Polyfill provided by ScottHamper
	/*	https://github.com/ScottHamper/Cookies#api-reference
	/*	*/

	cookies:Cookies;

	/*	MetaTag Handler
	/*	Assists in dynamically applying metatags.
	/*	Automatically applies Microsoft, Apple and common metatags.
	/*	*/

	metatag:Metatags;

	/*	Cursor Handler
	/*	Logs last cursor and allows to easily change the cursor on the fly
	/*	*/
	cursor:Cursor;

	/*	Connection Controller
	/*	Assists in making ajax calls and allows you to test your connection.
	/*	hostReachable by jpsilvashy - https://gist.github.com/jpsilvashy/5725579
	/*	*/

	connect:Connection;

	/*	Constructor
	/*	*/

    constructor(app:object ){
		super(app);

		this.useragent = new Useragent();
		this.cookies = new Cookies();
		this.metatag = new Metatags();
		this.cursor = new Cursor();
		this.connect = new Connection();

		//Checks for If node?

		//	window.m1 = this.metatags;
		//	this.metatags = new this.metatags;
		//this.app = app;

    }


}
