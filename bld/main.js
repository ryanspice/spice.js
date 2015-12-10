
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

        this.visuals.free = true;

        this.visuals.text("p"+this.app.input.position.x,20,20,"#FFFFFF");
        this.visuals.text("l"+this.app.input.last.x,20,40,"#FFFFFF");
        this.visuals.text("s"+this.app.input.start.x,20,60,"#FFFFFF");
        this.visuals.text("e"+this.app.input.end.x,20,80,"#FFFFFF");
        this.visuals.text("d"+this.app.input.dist.x,20,100,"#FFFFFF");

        this.visuals.line2(this.app.input.position,{x:0,y:0},"#FFFFFF",1)

        this.visuals.circle(this.app.input.position,this.app.input.duration,"#FFFFFF",1)

        this.visuals.free = false;


        if (this.app.input.released)
            console.log(this.app.input.angleDelta);

        return true;
    }

};
