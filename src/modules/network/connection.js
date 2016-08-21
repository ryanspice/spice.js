
export default class Connection {

	DisableDefaultCallback:boolean = false;
	XMLHttpRequest:XMLHttpRequest = window.XMLHttpRequest || ActiveXObject("Microsoft.XMLHTTP");
	Error:string = '';
	ErrorAttempt:string = `SJS:XML:Request`;
	ErrorOffline:string = `SJS:Offline`;
	ConnectionAttempts:number = 0;

	offline:boolean = false;
	testurl:string = 'https://httpbin.org/get';
	window:window = window;

	constructor(url:string|void){

		this.offline = true;
		this.XML(url||this.testurl);

	}

    /**	Request a URL via XMLHttpRequest
    *   @callback {ready}  - Triggers on request success
    *   @param {address} string - URL
    *   @param {callback} function - Callback function
    *   @param {arg0} mixed|void - User defined argument
    *   @param {arg1} mixed|void - User defined argument  */

	async XML(address:string, callback:any|void, arg0:mixed|void, arg1:mixed|void ):void {

		if (this.offline == true) {

			this.Error = this.ErrorOffline;
			console.warn(this.Error);
			return;

		}

		this.Error = this.ErrorAttempt +''+this.ConnectionAttempts;
		console.time(this.Error);

		if (!this.XMLHttpRequest) {
			this.XMLHttpRequest = ActiveXObject("Microsoft.XMLHTTP");
		}

		let xmlhttp:XMLHttpRequest = new this.XMLHttpRequest();

		xmlhttp.onreadystatechange = ()=>{

			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				if (callback)
					callback(xmlhttp.response,arg0,arg1);

				this.ready(xmlhttp.response,arg0,arg1);

			}

		}

		// Open new request as a HEAD to the root hostname with a random param to bust the cache
		await xmlhttp.open( "HEAD", address+ "?h=" + Math.floor((1 + Math.random()) * 0x10000), false );

		//Original loading , to create a fallback function.
		//xmlhttp.open("GET",address,true);

		//Loading localhost, to seporate into own function.
		//xmlhttp.open( "HEAD", "//" + this.window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );

		await xmlhttp.send();

	}

	/**	Default callback function, use Connection.DisableDefaultCallback = false;
    *   @param {response} string - Response as string
    *   @param {arg0} mixed|void - User defined argument
    *   @param {arg1} mixed|void - User defined argument  */

	async ready(response:string, arg0:mixed|void, arg1:mixed|void):void {

		this.Error = this.ErrorAttempt +''+this.ConnectionAttempts;
		console.timeEnd(this.Error);
		this.ConnectionAttempts++;

	}

}
