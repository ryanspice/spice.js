
<<<<<<< HEAD
import {
	_SJSClass
} from './core/sjs';
=======
import Cookies from './cookies.js';

export default {

    constructor:function(app){

        return{

            app:{writable:false, configurable:false, enumerable:false, value:app},

            init:{writable:false, configurable:false, enumerable:false,value:function(name){

                //Set app/document title

                //this.app.setTitle(document.title+"."+this.app.main.name);

                //Construct App.ext components

                this.app.Construct(this.useragent).init();

                this.app.Construct(this.metatag).init();

                //this.app.Construct(this.cookies).init();

                this.cookies = new Cookies(this.app);

                this.app.Construct(this.cursor).init();

                this.app.Construct(this.connect).init();

                }
            }
        }
    },
    prototype:{

        //UserAgent Information
        //	Assists in detecting the platform that you are running on.

        useragent:{

            //	Use useragent lightly as some would assume that sniffing the useragent is unreliable. I digress.

            prototype:{

                //Cached Navigator.userAgent
                agent:navigator.userAgent,

                //
                mouse:false,
                touch:false,
                keyboard:false,
                windows:false,
                chrome:false,
                safari:false,
                iemobile:false,
                nokia:false,
                ie:false,
                ios:false,
                blackberry:false,
                playbook:false,
                bb10:false,
                mobile:false,

                //Match user agent for IE
                IE: function(){

                    return  this.agent.match(/Trident/i) ? true : false;
                },

                //Match user agent for iOS
                iOS:function(){

                    return this.agent.match(/iPhone|iPad|iPod/i) ? true : false;
                },

                //Match user agent for Nokia
                Nokia: function(){

                    return  this.agent.match(/Nokia/i) ? true : false;
                },

                //Determine mobile or windows based on useragent
                Mobile: function(){

                    return this.mobile = this.IEMobile() || this.BlackBerry() || this.iOS() || this.Android() || this.Nokia();
                },

                //Match user agent for Chrome
                Chrome: function(){

                    return this.chrome = this.agent.match(/Chrome/i) ? true : false;
                },

                //Match user agent for Safari
                Safari: function(){

                    return (this.agent.match(/Safari/i) || this.agent.match(/AppleWebKit/i)) && !this.agent.match(/Chrome/i) ? true : false;
                },

                Desktop: function(){

                    return this.windows = this.IEMobile() || this.IE() || !this.Mobile();
                },

                //Match user agent for Android
                Android: function(){
                    return this.agent.match(/Android/i) ? true : false;
                },

                //Match user agent for IEMobile
                IEMobile: function(){

                    var trident = this.agent.match(/IEMobile/i);
                    var windowsphone = this.agent.match(/Windows Phone/i);
                    var touch = this.agent.match(/touch/i);

                    return  trident || windowsphone || touch ? true : false;
                },

                //Match user agent for Blackberry
                BlackBerry:function(){
                    this.playbook = this.agent.match(/PlayBook/i) || false;
                    this.bb10 = this.agent.match(/BB10/i) || false;
                    return this.agent.match(/BlackBerry/i)||this.playbook||this.bb10 ? true : false;
                },

            },

            constructor:function(app){

                //Return constructed useragent object
                return {
                    app:{writable:false, configurable:false, enumerable:false, value:app},

                    init:{writable:false, configurable:false, enumerable:false, value:function(){

                            //Query Browser
                            this.chrome = this.Chrome();
                            this.safari = this.Safari();
                            this.iemobile = this.IEMobile();
                            this.nokia = this.Nokia();
                            this.ie = this.trident = this.IE();

                            this.blackberry = this.BlackBerry();
                            this.ios = this.iOS();
                            this.android = this.Android();

                            this.touch = this.Mobile();
                            this.mouse = !this.Mobile() || this.BlackBerry();

                            this.keyboard = this.Desktop() ||  this.BlackBerry();


                            this.Mobile();
                            this.Desktop();

                            this.app.ext.useragent = this;
                            //return this;
                        }
                    }
                }
            }

        },
>>>>>>> origin/master

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
