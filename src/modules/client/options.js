

export default {

    overridescroll:false,
    drag:0,
    targetfps:60,
    mute:false,

    paths:{

        data:"data/",
        images:"images/",
        url:""

    },

    target:{
        canvas:null,    // String - Id of the main canvas
        buffer:null,     // String - Id of the buffer canvas
        blitter:null,     // String - Id of the blitting canvas
    },

    global:{
		
		imageSmoothingEnabled:false,

        globalCompositeOperation:"destination-in", //or source-over //See list http://www.w3schools.com/tags/canvas_globalcompositeoperation.asp

    },

    flags:{

		webGL:false,


        canvas:true,
        mstouch:true,
        seamless:false,
        tight:true,
        touchprevent:false,
        opaque:true,

    },

    canvas:{

			opacity:0,
            override:false,                              //Toggle the use of options.canvas
            name:'canvas',                             //Use canvas.name
            buffername:'buffer',                  //Use canvas.buffer
            buffer:true,                                   //Toggle the use of double-buffering
            background:'#000000',            //Assign canvas element background colour

        //Assign canvas element position properties
        position:{
            //position:'absolute',
            //top:0,
            //left:window.innerWidth/2,
            //center:true,
            //z:1
            position:'absolute',
            top:"",
            left:window.innerWidth*2,
            //left:"",
            center:false,
            z:1
        },

        //Assign canvas size properties
        size:{

            width:window.innerWidth,
            height:window.innerHeight

        }

    },

    msFlags:{

        msZoom:false,

    },

    //Override Functions
    override:{

        keyboard:false,
        mouse:false,
        MSHoldVisual:false,
        SelectStart:false,
        ContextMenu:false,
        Drag:false

    },

    //Return Options Value
    get:function(attr){

        //If Attribute
        if (attr)
        {

            //Get list of apps
            var list = SpiceJS.controller.list();

            //list is object
            if (typeof list == "object")
            {
                //return window.apps.option.
                for (var attrname in this)
                    if (attrname==attr)
                        return eval("list.options." + attrname );
            }
            else
            {
                for(var i = window.apps.length-1;i>=0;i--)
                    for(var attrname in this)
                        if (attrname==attr)
                        {
                            var l = [];
                            l.push(eval("list["+i+"].options." + attrname ));
                        }
                return l;
            }

        return null;
        }
        else
        return this;
    },

    set:function(options){

        for (var attrname in options) { this[attrname] = options[attrname]; };

        return this;
    }

};
