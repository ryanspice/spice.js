
((SpiceJS.create()).OnLoad = function (self) {

	self.main = {

	    name:"Example",

	    init:function() {

	        this.intro = new test(this.app);

	    	this.particleController = new SJSParticleController(this.app);

	        return true;
	    },

	    update:function() {

			//this.intro.update();

			this.particleController.update();

	        return true;
	    },

	    draw:function() {

	        //this.intro.draw();

			this.particleController.draw();

	        this.visuals.text_ext(this.particleController.SJSParticleList.length,100,50,"#FFFFFF",1,1);

	        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
	        this.visuals.text_ext(this.app.version,100,150,"#FFFFFF",1,1);

	        return true;
	    }

	};

    self.start( 320, 720);

    window.Application = this;

});
