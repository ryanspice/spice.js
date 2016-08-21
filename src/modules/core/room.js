
import {_SJSClass as SJSClass} from './sjs.js';

export default class Room extends SJSClass {


//			init:Object = {};

			started:Boolean = false;

			Started(){

				return function() {
					var a = this.Started;
					//this.app.set_scale();
					this.Started = true;
					return a;
				};

			}

			constructor(app){

				super(app);

				console.log(this.app)

			}

	};
