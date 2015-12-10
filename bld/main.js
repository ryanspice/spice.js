

//import SpiceJS from './modules/spice.js';

//import SJSParticleController from './Particles.js';


//var Application = SpiceJS.create({});
var Application = SpiceJS.create();

//Application OnLoad
Application.OnLoad = function (self) {

    self.Init("Example SpiceJS", 320, 720);

    self.canvas.setBackground("transparent");

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

        return true;
    }

};

//SpiceJS.create(Application);
