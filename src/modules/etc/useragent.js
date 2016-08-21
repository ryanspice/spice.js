export default class Useragent {

	//Cached Navigator.userAgent
	agent:Any = navigator.userAgent;

	mouse:boolean = false;

	touch:boolean = false;

	keyboard:boolean = false;

	windows:boolean = false;

	chrome:boolean = false;

	safari:boolean = false;

	iemobile:boolean = false;

	nokia:boolean = false;

	ie:boolean = false;

	ios:boolean = false;

	blackberry:boolean = false;

	playbook:boolean = false;

	bb10:boolean = false;

	mobile:boolean = false;

	constructor(){

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

        //this.app.ext.useragent = this;

	}

	//Match user agent for IE
	IE ():boolean {

		return  this.agent.match(/Trident/i) ? true : false;
	}

	//Match user agent for iOS
	iOS():boolean {

		return this.agent.match(/iPhone|iPad|iPod/i) ? true : false;
	}

	//Match user agent for Nokia
	Nokia ():boolean {

		return  this.agent.match(/Nokia/i) ? true : false;
	}

	//Determine mobile or windows based on useragent
	Mobile ():boolean {

		return this.mobile = this.IEMobile() || this.BlackBerry() || this.iOS() || this.Android() || this.Nokia();
	}

	//Match user agent for Chrome
	Chrome ():boolean {

		return this.chrome = this.agent.match(/Chrome/i) ? true : false;
	}

	//Match user agent for Safari
	Safari ():boolean {

		return (this.agent.match(/Safari/i) || this.agent.match(/AppleWebKit/i)) && !this.agent.match(/Chrome/i) ? true : false;
	}

	Desktop ():boolean {

		return this.windows = this.IEMobile() || this.IE() || !this.Mobile();
	}

	//Match user agent for Android
	Android ():boolean {
		return this.agent.match(/Android/i) ? true : false;
	}

	//Match user agent for IEMobile
	IEMobile ():boolean {

		var trident = this.agent.match(/IEMobile/i);
		var windowsphone = this.agent.match(/Windows Phone/i);
		var touch = this.agent.match(/touch/i);

		return  trident || windowsphone || touch ? true : false;
	}

	//Match user agent for Blackberry
	BlackBerry():boolean {
		this.playbook = this.agent.match(/PlayBook/i) || false;
		this.bb10 = this.agent.match(/BB10/i) || false;
		return this.agent.match(/BlackBerry/i)||this.playbook||this.bb10 ? true : false;
	}
}
