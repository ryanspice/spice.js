
import Cookies from './cookies.js';

export default {

    constructor:function(app){

        return{

            app:{writable:false, configurable:false, enumerable:false, value:app},

            init:{writable:false, configurable:false, enumerable:false,value:function(name){

                //Set app/document title

                this.app.setTitle(document.title+"."+this.app.main.name);

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

        //Cookie Storage
        //	Polyfill provided by ScottHamper
        //	https://github.com/ScottHamper/Cookies#api-reference

        cookies:Cookies,

        //MetaTag Handler
        //	Assists in dynamically applying metatags.
        //	Automatically applies Microsoft, Apple and common metatags.

        metatag:{

            constructor:function(app){

                //Return constructed metatag object.
                return {
                    app:{writable:false, configurable:false, enumerable:false, value:app},

                    init:{value:function(){

                            //execute polyfill
                            this.metaAppend(this.metaTag("msapplication-tap-highlight",this.ms_taphighlight));
                            this.metaAppend(this.metaTag("apple-mobile-web-app-capable",this.apple_webapp));
                            this.metaAppend(this.metaTag("apple-mobile-web-app-status-bar-style",this.apple_statusbar));
                            this.metaAppend(this.metaTag("cursor-event-mode","native"));
                            this.metaAppend(this.metaTag("touch-event-mode","native"));
                            this.metaAppend(this.metaTag("HandheldFriendly","True"));

                            if (this.devicewidth)
                            this.metaAppend(this.metaTag("viewport","width=device-width, user-scalable=no"));
                            if (this.devicedpi)
                            this.metaAppend(this.metaTag("viewport","target-densitydpi="+this.app.client.setWidth+",-webkit-min-device-pixel-ratio=1,min-resolution:="+this.app.client.setWidth+",-moz-device-pixel-ratio=1"));

                            this.metaAppend(this.metaTag("viewport","user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"));

                            //Cache Control
                            this.metaAppend(this.metaTag("cache-control","max-age=0"));
                            this.metaAppend(this.metaTag("cache-control","no-cache"));
                            this.metaAppend(this.metaTag("expires","Tue, 01 Jan 1980 1:00:00 GMT"));
                            this.metaAppend(this.metaTag("pragma","no-cache"));

                            this.app.ext.metatag = this;

                            //Return this
                            return this;
                        }
                    }
                }
            },

            prototype:{

                //Default injected tags
                ms_taphighlight:"no",
                apple_webapp:"yes",
                apple_statusbar:"black",
                devicedpi:true,
                devicewidth:true,

                //Favicon. Automatically fills a standard metaAppend while needing only one argument, sets favicon
                metaFavicon: function(img) {

                    this.metaAppend(this.metaLink(img,"shortcut icon","image/png"));
                },

                //Construct a standard metaLink element
                metaLink: function(href,rel,type) {

                    //Create link element
                    this.link = document.createElement('link');

                    //Assign element values
                    this.link.href = href;
                    this.link.rel = rel;
                    this.link.type = type;

                    //Return link
                    return this.link;
                },

                //Construct a standard metaTag element
                metaTag: function(name,content) {

                    //Create link element
                    this.meta = document.createElement('meta');

                    //Assign element values
                    this.meta.content = content;
                    this.meta.name = name;

                    //Return tag
                    return this.meta;
                },

                //Append a meta object to the <head>
                metaAppend: function(meta) {

                    //Append child to header
                    if (this.head.appendChild(meta))
                        {
                        //Count number of headers
                        this.count++;

                        //Return success
                        return true;
                        }
                    else
                        return false;

                },

                //Cached data
                head:document.getElementsByTagName('head')[0],
                link:null,
                meta:null,
                count:0

            }

        },

        //Cursor Handler
        //	Logs last cursor and allows to easily change the cursor on the fly

        cursor:{

            constructor:function(app){

                //Return constructed metatag object.
                return {
                    app:{writable:false, configurable:false, enumerable:false, value:app},
                    init:{value:function(){

                            this.set(this.wait);

                            this.app.ext.cursor = this;
                        },
                    }
                }
            },

            prototype:{

                //Cached cursor types
                auto		: "auto",
                inherit		: "inherit",
                crosshair	: "crosshair",
                def			: "default",
                help		: "help",
                move		: "move",
                pointer		: "pointer",
                progress	: "progress",
                text		: "text",
                wait		: "wait",
                eresize		: "e-resize",
                neresize	: "ne-resize",
                nwresize	: "nw-resize",
                nresize		: "n-resize",
                seresize	: "se-resize",
                swresize	: "sw-resize",
                sresize		: "s-resize",
                wresize		: "w-resize",

                //Properties
                current 	: "auto",
                last 		: "auto",
                changed		:false,
                count		:0,
                lock		:0,
                delay		:4,

                set:function(cursor,lock){

                    if	((this.last==cursor)||(this.lock))
                        return;

                    this.last = this.current;

                    this.current = cursor;

                    /*
                    if (this.app.options.target.buffer)
                        this.app.canvas.buffer.style.cursor=this.current;
                        this.app.canvas.canvas.style.cursor=this.current;

                    document.body.style.cursor=this.current;
                    */
                    this.changed = true;
                    this.count++;
                },

            },



        },

        //Connection Controller
        //	Assists in making ajax calls and allows you to test your connection.
        //	hostReachable by jpsilvashy - https://gist.github.com/jpsilvashy/5725579

        connect:{

            constructor:function(app){

                //Return constructed metatag object.
                return {
                    app:{writable:false, configurable:false, enumerable:false, value:app},
                    init:{value:function(){

                            //Execute a test on the connection
                            this.test();

                            this.app.ext.connect = this;
                        }
                    }
                }
            },

            prototype:{

                //Properties
                offline:false,
                connectionAttempts:0,
                error:null,
                window:window,

                //An aJax request for a file of your choosing. runs callback once finished (response,arg0,arg1)
                load:function(address,callback,arg0,arg1){

                    var xmlhttp;
                    if (window.XMLHttpRequest)
                      {// code for IE7+, Firefox, Chrome, Opera, Safari
                      xmlhttp=new XMLHttpRequest();
                      }
                    else
                      {// code for IE6, IE5
                      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                      }
                    xmlhttp.onreadystatechange=function()
                      {
                      if (xmlhttp.readyState==4 && xmlhttp.status==200)
                        {
                            callback(xmlhttp.response,arg0,arg1);
                        }
                      }
                    xmlhttp.open("GET",address,true);
                    xmlhttp.send();

                },

                //An aJax request to check wither or not you are connected to the internet
                // jpsilvashy / hostReachable.js - https://gist.github.com/jpsilvashy/5725579
                hostReachable:function(){
return;
/*
                    //if local host return offline
                    if ((this.window.location.hostname).toString()=="127.0.0.1")
                        return false;

                    // Handle IE and more capable browsers
                    var xhr = new ( this.window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
                    var status;


                    // Open new request as a HEAD to the root hostname with a random param to bust the cache
                    xhr.open( "HEAD", "//" + this.window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );

                    // Issue request and handle response
                    try {
                        xhr.send();
                        return ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 );

                    } catch (error) {

                        if (this.connectionAttempts<1)
                            this.connectionAttempts++,this.hostReachable();
                        this.error = error;
                        return false;
                    }
*/
                },

                test:function(app){

                    return this.offline = this.hostReachable();
                }

            },


}

}
};
