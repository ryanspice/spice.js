
import {_SJSClass as SJSClass} from './core/sjs';
/**
* Test Module for running tyhe game
* @module
* @private
*/

export default class test extends SJSClass {

    constructor(app) {

		super(app);

        //this.Loader = this.app.getCurrent().Loader;
/*
        this.SplashScreen = [];

		this.SplashScreen[0] = this.Loader.loadImage('intro/SplashScreen');

		this.SplashScreen[1] = this.Loader.loadImage('intro/spicejsicon');

		this.SplashScreen[2] = this.Loader.loadImage('intro/ryanspice');

        this.Background = this.Loader.loadImage('intro/background');

        this.begin = this.Loader.loadImage('intro/begin');

		this.ScoreNumber = [];

		this.ScoreNumber[0] = this.Loader.loadImage('interface/score/score_0');
		this.ScoreNumber[1] = this.Loader.loadImage('interface/score/score_1');
		this.ScoreNumber[2] = this.Loader.loadImage('interface/score/score_2');
		this.ScoreNumber[3] = this.Loader.loadImage('interface/score/score_3');
		this.ScoreNumber[4] = this.Loader.loadImage('interface/score/score_4');
		this.ScoreNumber[5] = this.Loader.loadImage('interface/score/score_5');
		this.ScoreNumber[6] = this.Loader.loadImage('interface/score/score_6');
		this.ScoreNumber[7] = this.Loader.loadImage('interface/score/score_7');
		this.ScoreNumber[8] = this.Loader.loadImage('interface/score/score_8');
		this.ScoreNumber[9] = this.Loader.loadImage('interface/score/score_9');

        this.Loader.loadImage('interface/iconoffline');

        this.Loader.loadImage('interface/iconp');

        this.Loader.loadImage('interface/iconvolume');

        this.Loader.loadImage('interface/iconx');
*/
        this.StartPhase = 2;
        this.StartAlpha = 2;

        this.xxx=0;
		this.start = false;

//		(this.particles = this.app.create(SB_.prototype)).init();

		//(this.loading = this.app.create(Loading.prototype)).init();
        //(this.statusicons = this.app.create(StatusIco.prototype)).init();
        		//(this.characterselect = this.app.create(Characterselect.prototype)).init();

    //    this.particles = new SB_(this.app);

//        this.loading = new Loading(this.app);

//        this.statusicons = new StatusIco(this.app);

//        this.characterselect = new Characterselect(this.app);

		this.continue = false;

        this.sceneX = -190;
        this.scenePhase = 0;
        this.sceneEndX = 1;

        this.sceneStartSpeed = 3;
        this.sceneEndSpeed = 4;

        this.sceneSpeed = this.sceneStartSpeed;
    }

	draw() {

    //    if (this.Loader.getBufferLength()>0)
    //        return;

        let sw = this.app.getScaledWidth();
        let sh = this.app.getScaledHeight();
        let h = this.app.getHeight();
        let w = this.app.getWidth();
        let alpha = 0.5+Math.sin(this.sceneX/120)*0.5;

        if (this.scenePhase==2)
            if (this.sceneX>320)
            alpha =  0.5+Math.sin(320/120)*0.5;


            this.Background = {};
            this.Background.width = sw;

        let alpha2 = 0.25+Math.sin(this.sceneX/120)*0.55 - this.sceneEndX;

        if (this.scenePhase==2)
            alpha2 = this.sceneEndX,this.sceneSpeed = this.sceneEndSpeed;
/*
        this.visuals.image_ext(this.Background,this.app.getWidth()/2,this.app.getHeight()/2, 1,alpha,true);

        if (this.scenePhase==2)
            this.visuals.rect_ext(this.app.getWidth()/2,this.app.getHeight()/2,this.app.getScaledWidth()*2,this.app.getHeight(), 1,alpha2,true,"#FFFFFF");
        else
            this.visuals.rect_ext(-sw,0,sw*3,h,1,1,0,"#000000");
*/
        this.visuals.rect_gradient(w/2,h/2,this.Background.width,h,1,alpha*0.9,1,"transparent","#5e5fdf");
/*
        if (this.continue == true)
			this.characterselect.draw();
        else
            this.visuals.image_ext(this.SplashScreen[2-this.scenePhase],this.app.getWidth()/2,300, 1,alpha,true);
*/

        this.visuals.rect_gradient(w/2,h*0,this.Background.width,h*2,1,alpha*0.9,1,"transparent","#5e5fdf");

        if (this.scenePhase==2)
		{
             if(this.sceneEndX>0)
             this.sceneEndX-=0.1;
             else
             this.sceneEndX=0;
/*
			this.particles._draw();

			if (this.graphics.getErrors())
				this.loading.draw();
			else	{
				var a = this.app.client.Math.Clamp(Math.cos(this.sceneX/25),0,1);
				if (this.continue==false)
				this.visuals.image_ext(this.begin,this.app.getWidth()/2,500, 1,a,1);

				this.app.ext.cursor.set('pointer');

			}
            */
		}
			else	{

				//	this.loading.draw();
			}

	//	this.statusicons.draw(0.29);


	}

	update() {

    //    this.loading.update();
	//	this.statusicons.update();

    //    if (this.Loader.getBufferLength()>0)
    //        return;

        let tick = this.sceneSpeed;

        if (this.scenePhase>2)
        this.scenePhase = 2;
        else
        if (this.scenePhase==2)
        {
        //    this.particles._update();
		//	this.characterselect.update();
            this.sceneX+=tick;

        }
        else
        if (this.scenePhase<2)
        {

    		if (this.scenePhase==2)
    				if (this.app.input.released)
    					if (this.continue==false)
    						this.continue = true;

            if (this.app.input.released)
                this.sceneSpeed = 10;


            this.sceneX+=tick;

            if (this.sceneX>520)
                this.sceneX = -190,this.scenePhase++;

            if (this.scenePhase>2)
                this.scenePhase = 2;

        }

	}

}
