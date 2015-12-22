
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

    canvas:{
        override:false,			//Toggle the use of options.canvas
        name:'canvas',			//Use canvas.name
        buffername:'buffer',	//Use canvas.buffer
        buffer:true,			//Toggle the use of double-buffering
        background:'#000000',		//Assign canvas element background colour
        position:{				//Assign canvas element position properties
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
        size:{					//Assign canvas size properties
            width:window.innerWidth,
            height:window.innerHeight
        }
    },

    msFlags:{

        msZoom:false,

    },

    flags:{						//Feature Flags
        canvas:true,
        mstouch:true,
        seamless:true,
        tight:true,
        touchprevent:true,
    },

    override:{					//Override Functions
        keyboard:true,
        mouse:true,
        MSHoldVisual:false,
        SelectStart:false,
        ContextMenu:true,
        Drag:true
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
