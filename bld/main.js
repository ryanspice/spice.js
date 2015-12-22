
var Application = SpiceJS.create();

//Application OnLoad
Application.OnLoad = function (self) {

    self.Init("Example SpiceJS", 320, 720);

    window.Application = this;

};

Application.main= {

    name:"Example",

    init:function() {

            //    this.visuals.setBleed(1);

    	this.particleController = new SJSParticleController(this.app);

        this.intro = new test(this.app);
        return true;
    },

    update:function() {
    //        console.log(Application.input.keyController.keyboardCheck('w'));

		this.particleController.update();
            //this.intro.update();

        return true;
    },

    draw:function() {
        //this.intro.draw();

		this.particleController.draw();

        this.visuals.text_ext(this.particleController.SJSParticleList.length,100,50,"#FFFFFF",1,1);
        //this.visuals.text_ext(this.app.getFps().toFixed(2),100,100,"#FFFFFF",1,1);

        return true;
    }

};
