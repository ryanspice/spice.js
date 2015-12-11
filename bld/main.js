
var Application = SpiceJS.create();

//Application OnLoad
Application.OnLoad = function (self) {

    self.Init("Example SpiceJS", 320, 720);

    self.canvas.setBackground("#000000");

    window.Application = this;

    self.ext.metatag.metaFavicon("favicon.png");

};

Application.main= {

    name:"Example",

    init:function() {

    	this.particleController = new SJSParticleController(this.app);

        return true;
    },

    update:function() {

		this.particleController.update();

        return true;
    },

    draw:function() {

		this.particleController.draw();


        this.visuals.text("Position: "+this.app.input.position.x,this.app.getWidth()/2,20,"#FFFFFF");
        this.visuals.text("Last: "+this.app.input.last.x,this.app.getWidth()/2,40,"#FFFFFF");
        this.visuals.text("Start: "+this.app.input.start.x,this.app.getWidth()/2,60,"#FFFFFF");
        this.visuals.text("End: "+this.app.input.end.x,this.app.getWidth()/2,80,"#FFFFFF");
        this.visuals.text("Distance: "+this.app.input.dist.x,this.app.getWidth()/2,100,"#FFFFFF");

        var position = this.app.input.position;
        var start = this.app.input.start;
        var end = this.app.input.end;

        this.visuals.free = true;

        this.visuals.line2(position,start,"#FFFFFF",1)
        this.visuals.line2(start,end,"#FFFFFF",0.5)

        this.visuals.circle(this.app.input.position,this.app.input.duration,"#FFFFFF",1)

        this.visuals.free = false;

        //if (this.app.input.released)
        //    console.log(this.app.input.angleDelta);

        return true;
    }

};
