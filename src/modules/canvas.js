export default {

    prototype:{

        //Cache canvas vars
        canvas:{},
        buffer:{},
        head:document.getElementsByTagName('head')[0],
        rendering_style:document.createElement('style'),
        canvasList:document.getElementsByTagName('canvas'),
        doc:document,

        //Gets

        getCanvas:function(){return this.canvas;},

        getBuffer:function(){return this.buffer;},

        setCanvas:function(c){this.canvas = c;},

        setBuffer:function(b){this.buffer = b;},

        setBackground:function(value) {

            if (this.app.options.canvas.buffer)
                this.buffer.style.background = value;

            this.app.options.canvas.background = this.canvas.style.background = value;

        },

        getBackground:function() {

            return this.buffer.style.background;
        },

        createCanvas:function(){

            var c = this.doc.createElement("canvas");

            c.id = this.app.options.canvas.name;

            this.doc.body.appendChild(c);

            return this.doc.getElementById(this.app.options.canvas.name);
        },

        createBuffer:function(){

            var c = this.doc.createElement("canvas");

            c.id = this.app.options.canvas.buffername;

            this.doc.body.appendChild(c);

            return this.doc.getElementById(this.app.options.canvas.buffername);
        },

        //Style canvas

        styleCanvas:function(){

            this.getCanvas().style.position = this.app.options.canvas.position.position;

            this.getCanvas().style.zIndex = this.app.options.canvas.position.z;

            if (this.app.options.canvas.buffer)
            {
                this.getBuffer().style.position = this.app.options.canvas.position.position;

                this.getBuffer().style.zIndex = this.app.options.canvas.position.z-1;
            }

            if (this.app.options.canvas.override)
            {

                this.getCanvas().style.left = this.app.options.canvas.position.left+"px";

                this.getCanvas().style.top = this.app.options.canvas.position.top+"px";

                if (this.app.options.canvas.buffer)
                {
                    this.getBuffer().style.left = this.app.options.canvas.position.left+"px";

                    this.getBuffer().style.top = this.app.options.canvas.position.top+"px";
                }

            }

        },

    },
    constructor:function(app){return{
        app:{value:app},
        init:{writable: false,  configurable:false, enumerable:false, value:function(){
                var getcanvas = document.getElementById(this.app.options.canvas.name);
                if (getcanvas)
                    {
                    this.setCanvas(getcanvas);
                    if (app.options.canvas.buffer)
                        {
                        var getbuffer = document.getElementById(this.app.options.canvas.buffername);
                        if (getbuffer)
                            this.setBuffer(getbuffer);
                            else
                            {
                            this.createBuffer();
                            }
                        }
                    }
                    else
                    {
                    this.setCanvas(this.createCanvas());
                    if (this.app.options.canvas.buffer)
                        this.setBuffer(this.createBuffer());
                    }
                this.styleCanvas();
                this.rendering_style.innerHTML = this.rendering_style.innerText = '@-ms-viewport {width:100%;height:100%;} #Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;-ms-interpolation-mode: nearest-neighbor;}';
                this.head.appendChild(this.rendering_style);
                }
            }
        }
    }
};
