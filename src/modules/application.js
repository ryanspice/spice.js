
import _options from './options.js';

import _input from './input/input.js';

import _client from './client.js';

import _canvas from './canvas.js';

import _user from './user.js';

import _ext from './ext.js';

export default Object.create({

constructor:{
//Version Number
VN:{
//Config
writable: false,
configurable:false,
enumerable:true,

//VN
value:'0.7.0.15.12.11'
},

//Build Client, Instantiate Loop, Build Canvas, Initalize Client
Init:{

//Config
writable: false,
configurable:false,
enumerable:false,

//Function
value:function(name,w,h){

   //Store self
   var self = this;

   //Build client from prototype
   this.client = this.Construct(this.client.prototype,this.client.constructor);

   //Build canvas from prototype
   (this.canvas = this.Construct(this.canvas.prototype,this.canvas.constructor)).init();

   setTimeout(() => {

       function AppLoop(){
           self.client.loop();
       }

       function AppLoopData(){
           self.client.loopData();
       }

       this.client.initalize(AppLoop,AppLoopData,this.scale);

   }, this.time);

   //Delay start the loop
   /*

       OLD NON PROMISE BASED LOOP, build fallback

   setTimeout(	(function(){

               function AppLoop(){
                   self.client.loop();
               }

               function AppLoopData(){
                   self.client.loopData();
               }

               self.client.initalize(AppLoop,AppLoopData,self.scale);

   }),this.time);
   */
   //Initalize client
   this.client.init(name,w,h);


   // INIT INPUT


   this.input = new this.input(this);

}

},

//Run by OnApplicationLoad, App.OnLoad to be overwritten.
OnLoad:{

   //Config
   writable:true,
   configurable:false,
   enumerable:false,

   //Function
   value:function(self){

       //Default to App.
       self.Init("",480,320);

   }

},

//Runs on DOMContentLoaded
OnApplicationLoad:{

   //Config
   writable:false,
   configurable:false,
   enumerable:false,

   //Function
   value:function(evt){

       //Run .OnLoad
       evt.target.app.OnLoad(evt.target.app);
   console.log(evt.target.app.getCurrent().name+': OnApplicationLoad');

   }

},

//AddEvent Listener
Listener:{

   //Config
   writable:false,
   configurable:false,
   enumerable:false,

   //Function
   value:function (obj, evt, listener, param) {

       //If addEventListener exist, add it, otherwise attachEvent
       if (obj.addEventListener)
           obj.addEventListener(evt, listener, false);
       else
           obj.attachEvent("on" + evt, listener);

       obj.app = window.apps[this.id] = this;
   }

},

//Construct Objects from this.Construct(prototype,[constructor])
Construct:{

   //Config
   writable:false,
   configurable:false,
   enumerable:false,

   //Function
   value:function(prototype,constructor){

       //Cache vars
       var isObj = false;
       var obj = prototype;
       var proto = prototype;
       var construct = constructor;
       var ret = {};

       //if prototype contains a prototype and constructor
       if (typeof obj.prototype !== 'undefined')
       if (typeof obj.constructor !== 'undefined')
           {
               construct = obj.constructor;
               proto = obj.prototype;
               isObj = true;
           }

       //Grab type of constructor
       var c = typeof construct;

       //Return & Create object based on constructor
       switch(c)
       {
       case 'undefined':

           //Use only the prototype
           ret = Object.create(proto);

       break;
       case 'object':

           //Use constructor as object
           ret = Object.create(proto,construct);

       break;
       case 'function':

           //Use constructor as function
           ret = Object.create(proto,construct(this));

       break;
       default:

           //Expected a type
       console.log("Expected 'object' or 'function': Type is "+c);
       }
       if (isObj)
           prototype = ret;


       return ret;
   }

},

//Allows artificial clicking of elements
click:{writable:false, configurable:false, enumerable:false, value:function(event, anchorObj) {

       //If .click
       if (anchorObj.click)
           anchorObj.click();
           else
       if(document.createEvent)
       {

           if(event.target !== anchorObj)
           {

               var evt = document.createEvent("MouseEvents");

               evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

               anchorObj.dispatchEvent(evt);

           }

       }

   }

},

//App.create for creating objects with app, visuals and graphics inherited
create:{writable:true, configurable:false, enumerable:false, value:function(a){ return this.Construct(a||{},this.client.room); } },

//Getters for Common Data
getFps:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.step.fps; } },

getCurrent:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.state.current; } },

getConnection:{writable:false, configurable:false, enumerable:false, value:function(){ return this.ext.connect.offline; } },

getConnectionError:{writable:false, configurable:false, enumerable:false, value:function(){ return this.ext.connect.error; } },

getConnectionAttempts:{writable:false, configurable:false, enumerable:false, value:function(){ return this.ext.connect.connectionAttempts; } },

getDelta:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.step.delta; } },

getScale:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.scale; } },

getWidth:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.setWidth; } },

getHeight:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.setHeight; } },

getScaledWidth:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.width; } },

getScaledHeight:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.height; } },

setTitle:{writable:false, configurable:false, enumerable:false, value:function(title){ return (document.title==title?(document.title):(document.title=title)); } },

setState:{writable:false, configurable:false, enumerable:false, value:function(state){ return this.client.update.state.set(state,true); } },

toggleWidescreen:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.fullscale = !this.client.update.fullscale; } },

time:{writable:true, configurable:false, enumerable:false, value:0 },

main:{writable:true, configurable:false, enumerable:false, value:{name:"Main",init:function() {},update:function() {},draw:function() {return true;}} }
},

prototype:{

   options:_options,

   user:_user,

   ext:_ext,

   input:_input,

   canvas:_canvas,

   client:_client

},

});
