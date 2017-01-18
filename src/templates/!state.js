
import {_SJSClass as SJSClass} from './sjs.js';

export default class State extends SJSClass {

   //State vars
//   name:string;
 //  current:object = {};
//   initalized:boolean = false;

/*
*/
      //State constructor
      constructor(app,state){

   	   super(app);
   	   //this.set(state,true);
   	   return;
   console.log(this.app)
   	   //State Set state

   	   //State Initilizaed
   	   this.initalized = true;
      }

	   //State init prototype
	   init(){
		   if (typeof this.current.init !=='undefined')
		   this.current.init();
	   }

	   //State update proto
	   update(){
		   if (typeof this.current.update !=='undefined')
			   this.current.update();
	   }

	   //State draw proto
	   draw(){
		   if (typeof this.current.draw !=='undefined')
			   this.current.draw();
	   }

	   //State set
	   set(state,start){
/*
		   //log(this.input);
		   //Set app input delay
		   //this.app.input.delay = 1;

		   //If state and not initialized, initalize via Object .create
		   if ((this.name=state.name)&&(this.initalized=!0))
			   {

				  // console.log(this.app.client)
			   if (!state.started)
				   this.current=Object.create(state,this.app.client.room);

					   console.log(state);
			   //if start, run init, current = started
			   if (start)
				   this.current.init(),this.current.started = true;

			   }
*/
		//	this.name = state.name;
			this.current = state;
			//if (start)
			//	this.current.init(),this.current.started = true;
	   }


}
