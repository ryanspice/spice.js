/*

Reverence Lost Html5
Written By: Ryan Spice

*/

var Reverence = Object.create({
    
    //Reverence Constructor
    constructor:{

        //Constructor state name
        name: "SplashScreen",

        //Constructor state initialize
        init:function() {

            //Initialize
            this.w = this.app.client.setWidth;
            this.h = this.app.client.setHeight;
            this.x = 0;
            this.y = 0;
            this.s = 1;
            this.v = 0.1;
            this.circleRadius = 25;
            this.circleRotation = 0;
            this.colorIndex = 0;
            this.color = new Array("#336633","#663333");
            this.StartPhase = 2;
            this.StartAlpha = 2;
            this.circleRotation = 0;
            this.loop = 1;
            this.start = false;
            this.change = false;
            this.gameon = false;
            
            //Initalize game
            (this.reverence = Reverence = Object.create(Reverence.prototype, this.app.client.room)).load();

        },

        //Constructor state loading circle
        circle:function(){

            //Check if errorrs
            var err = this.graphics.getErrors();
            
            //Set circle positions
            var x = -7+this.app.client.setWidth*0.5;
            var y = this.app.client.setHeight/1.5;
            var circleRotation = this.circleRotation/10;
            var si = (360*-(Math.sin(this.circleRotation/1080)*3)).toFixed(4);
            var s =2;
            
            //Circle colour based on err return
            this.colorIndex = this.app.client.Math.Clamp(err,0,1);

            if (this.reverence.state.name=='game')
            if (err==0)
                return err;
            ///Loop draw circle
            for(var i=8;i>=0;--i)
                this.visuals.circle(x+Math.cos((circleRotation+i)*7)*this.circleRadius,y+Math.sin((circleRotation+i)*7)*this.circleRadius,s,this.color[this.colorIndex],(0.5-Math.sin(((circleRotation+i)*(1*7))+si)*0.5));
            
            return err;
        },
    
        //Constructor state draw
        draw:function() {
            
            //Cache vars
            var tempWindow = window;
            var y = this.app.client.setHeight/2.5;
            var s = 0.75+0.75*(tempWindow.innerWidth/this.app.client.setHeight);
            var a = this.app.client.Math.Clamp(Math.sin(this.StartAlpha / 120), 0, 1);
            //Draw Game
            if (this.StartPhase == 0) 
                {
                
                //GameStarted if loading didnt draw
                this.gameon = !this.circle(this.app);
                
                //GamesStarted draw reverence
                if (this.gameon)
                    this.reverence.draw();
                
                //Hideoffscreen
                if (this.reverence.menu.switchx>1000)
                    return true;
                
                //Level hasnt started
                if (this.reverence.game.level_x == 0) 
                    {
                    
                    //Fade
                    this.visuals.screen_fill(1 - a, "#000000");
                    
                    //Logo
                    this.visuals.image_ext(this.reverence.ReverenceMain[this.StartPhase], -this.reverence.menu.switchx + this.app.client.setWidth / 2, y, s, a, true);
                    }
                }
                else //Draw Splash
                {
                    
                    //Fade
                    this.visuals.screen_fill(1 - a, "#000000");
                    
                    //Logo
                    this.visuals.image_ext(this.reverence.ReverenceMain[this.StartPhase], this.app.client.setWidth / 2, y, s+0.3, a, true);
                    
                    //Draw Loading
                    this.circle(this.app)
                }
            
            return true;
        },
        
        //ReverenceMain state update
        update:function() {
            
            //Cache vars
            var l = 0;
            var math = Math;
            
            ///Loop through stuff
            for (var i = this.loop; i >= 0; --i) {
                if ((this.StartPhase != 0) || (this.StartAlpha < 180))
                    this.StartAlpha += 1;
                else {
                    if ((this.StartAlpha < 90))
                        this.StartAlpha += 1;
                }
                this.ContinueAlpha = math.sin(this.xxx * 0.01);
                if ((this.app.ext.input.y > 100) && (this.app.ext.input.y < this.app.client.height - 100))
                    if (this.app.ext.input.released)
                        if ((this.StartPhase != 0)) {
                            this.loop = Math.round(15*this.app.delta);
                        }

                if ((this.StartPhase == 0)) {
                    this.loop = this.app.client.Math.Clamp((1*this.app.delta).toFixed(0),0,2);
                    if ((this.StartAlpha > 90) && (l == 1))
                        if (this.app.ext.input.checkList("space")) {
                            this.change = true;
                        }
                    l++;
                }

                if (this.StartAlpha == 359) {
                    this.StartAlpha = 1;
                    if (this.StartPhase == 0) {
                        this.start = true;
                        return true;
                    }

                    this.StartPhase--;
                }
            }

            //Increase rotation of circle
            this.circleRotation+=(this.s)*(this.v*this.app.client.delta);

            //If loading screen over, draw reverence scene
            if (this.StartPhase == 0)
                if (this.gameon)
                    this.reverence.update();

            return true;
        }

    },
    
    //Reverence Prototype
    prototype:{
        
        
        //Variable Initilization
	
        name:"Controller",
        
        DATA:{	

            //Global Highscore List (unused)
            HIGHSCORES:[],

            //Local Highscore
            HIGHSCORE:0,	

            //Local Stats
            STATS:{

                //Distance From Start To Death per round
                distance:0,	

                //Number of kills per round
                kills:0,	
            },

            //Updates stats and highscore
            pull:function(){

                //Grab current values
                var d = -Math.round(Reverence.game.level_x/1000);
                var k = Reverence.game.level_kills;
                var h = Reverence.game.level_score;
                var hs = [0,0,0,0];

                //Fill highscores list
                for(var i=hs.length-1;i>=0;--i)
                    this.HIGHSCORES = hs[i];

                //if current value larger than stored
                if (h>this.HIGHSCORE)
                    this.HIGHSCORE = h;

                //distane larger than stored distance
                if (d>this.STATS.distance)
                    this.STATS.distance = d;

                //kills larger than stored kills
                if (k>this.STATS.kills)
                    this.STATS.kills = k;

                //Assign cookies
                Cookies.set('highscore', h).set('distance', d).set('kills', k);

            return this;
            }
        },
        
        soundtracks:["sound/Track2Spiceroni_soundcloud_87604225.mp3",
						 "sound/LevelZero_Tutorial_FNL.mp3",
						 "sound/LevelTwo_Industrial-Area_FNL.mp3",
						 "sound/LevelThree_Desert_FNL.mp3"],
        
        
        state:null,
        
        paused:null,	
        
        menuAnimation:{
            speed:1.5,	
            speed2:0.5,	
        },
        
        
        //Loading ALL Variables + Images + Audio

        //Load All
        load:function(){
            
            //Load First
            this.load_start();
            this.load_menu();

            //Load audio
            this.load_audio();

            //Load data sets
            this.load_cookies();
            this.load_level();

            //Load UI graphics
            this.load_controls();
            this.load_hud();	

            //Load game graphics
            this.load_projectiles();
            this.load_desert();
            this.load_enemies();

            //Load state
            //Set, load and initialize menu
            //this.state = this.menu.init(this.app);
            this.state = this.menu = Object.create(this.menu,this.app.client.room);
            //Initialize, load game
            this.game = Object.create(this.game,this.app.client.room);
            
            this.menu.game = this;
            this.game.game = this;
            
            //(this.game.init(this.app)).load();
            this.game.load();
        },
        
    	//Load head-up-display
        load_hud:function(){

            this.hud_begin = this.graphics.load("hud/hud_begin");
            this.hud_retry = this.graphics.load("hud/hud_retry");
            this.hud_back = this.graphics.load("hud/hud_back");
            this.hud_arrow2 = this.graphics.load("hud/hud_selectcharacter");
            this.art_numbers = this.graphics.load("hud/art_numbers")

            this.hud_stats = this.graphics.load("hud/hud_stats");	
            this.hud_highscore = this.graphics.load("hud/hud_highscore");	
            this.hud_distance = this.graphics.load("hud/hud_distance");	
            this.hud_kills = this.graphics.load("hud/hud_kills");	
            this.hud_shoot = this.graphics.load("hud/transparentLight47");	
            this.hud_move = this.graphics.load("hud/transparentLight49");	
            this.hud_weapons_selector = this.graphics.load("hud/hud_weapons_selector");	
            this.hud_button_weapons = this.graphics.load("hud/hud_button_weapons");	
        },
        
        //Load start
        load_start:function(){
            
            //twitter
            this.twitter = this.graphics.load("twitter");	
            
            //Initialize ReverenceMain vars
            this.ReverenceMain = new Array();
            this.ReverenceMain[-1] =new Image();
            this.ReverenceMain[0] = new Image();
            this.ReverenceMain[3] = new Image();
            this.ReverenceMain[1] = new Image();
            this.ReverenceMain[2] = new Image();
            
            //Load ReverenceMain vars
            this.ReverenceMain[-1] = this.graphics.load('hud/hud_title');
            this.ReverenceMain[0] =  this.graphics.load('hud/hud_title');
            this.ReverenceMain[3] =  this.graphics.load('loading/splashsjs');
            this.ReverenceMain[1] =  this.graphics.load('loading/splasheternallightgames');
            this.ReverenceMain[2] =  this.graphics.load('loading/splashspice');
        },
        
        //Load level assets
        load_level:function(){
        
        this.effect_smoke0=new Image();
        this.art_pinup=new Image();
        this.art_reverence=new Image();
        this.art_portraits=new Image();
        this.art_emblums=new Image();
        this.art_backgrounds_stars=new Array(2);
        this.art_players_flip=new Array();
        this.art_players_portrait=new Array();
        this.art_players_portrait_side=new Array();
        this.art_players_portrait_name=new Array();
        this.art_thruster=new Image(2);
        this.art_CycronPlanet=new Image();
        this.art_explosions=new Array(12);
        this.art_enemies=new Array(3);
        this.art_players=new Image(7);
        this.img_backgrounds=new Array(6);
		
    //Interface
		this.hud_confirm	 = this.graphics.load("hud/hud_confirm");
		this.hud_dialogue	 = this.graphics.load("hud/hud_dialogue");
		this.hud_energy	 = this.graphics.load("hud/hud_energy");	
		this.hud_gameover = this.graphics.load("hud/hud_gameover");
		this.hud_health = this.graphics.load("hud/hud_health");
		this.hud_level = this.graphics.load("hud/hud_level");
		this.hud_lives = this.graphics.load("hud/hud_lives");
		this.hud_main = this.graphics.load("hud/hud_main");
		this.hud_meter = this.graphics.load("hud/hud_meter");
		this.hud_meter2 = this.graphics.load("hud/hud_meter2");
		this.hud_options = this.graphics.load("hud/hud_options");
		this.hud_pause = this.graphics.load("hud/hud_pause");
		this.hud_score = this.graphics.load("hud/hud_score");
		this.hud_score_highlight = this.graphics.load("hud/hud_score_highlight");
		this.hud_shield = this.graphics.load("hud/hud_shield");
		this.hud_warning = this.graphics.load("hud/hud_warning");
		
		//Gameplay
        this.effect_smoke0 = this.graphics.load("effect_smoke0");
        this.projectile_lred = this.graphics.load("projectile_lred");
        this.projectlie_lred_charge = this.graphics.load("projectlie_lred_charge");
        this.art_thruster[0] = App.client.graphics.load("effect_thruster0");
        this.art_thruster[1] = App.client.graphics.load("effect_thruster1");
        this.art_thruster[2] = App.client.graphics.load("effect_thruster2");
		
        for(var i = this.art_explosions.length-1;i>=0;--i)
            this.art_explosions[ this.art_explosions.length-1-i] =              this.graphics.load("explosions/explosion ("+i+")");
		
        for(var i = this.art_enemies.length-1;i>=0;--i)
            this.art_enemies[ this.art_enemies.length-1-i] = this.graphics.load("Ships/enemy_light"+i);
		
        this.art_asteroid = this.graphics.load("art_asteroid1");
		//Selection
        this.art_pinup = this.graphics.load("art_pinup");
        this.art_emblums = this.graphics.load("art_emblums");
        this.art_reverence = this.graphics.load("art_reverence");
        this.art_portraits = this.graphics.load("art_portraits");
		
		//Player
        this.art_players[0] = App.client.graphics.load("Ships/Eric");
        this.art_players[1] = App.client.graphics.load("Ships/Sammy");
        this.art_players[2] = App.client.graphics.load("Ships/Paul");
        this.art_players[3] = App.client.graphics.load("Ships/Shurly");
        this.art_players[4] = App.client.graphics.load("Ships/Reverence");
        this.art_players[5] = App.client.graphics.load("Ships/Tex");
        this.art_players[6] = App.client.graphics.load("Ships/Steve");
		
        this.art_players_portrait[0] = 17;
		this.art_players_portrait[1] = 5;
		this.art_players_portrait[2] = 11;
		this.art_players_portrait[3] = 13;
		this.art_players_portrait[4] = 15;
        this.art_players_portrait[5] = 2;
		this.art_players_portrait[6] = 12;
		
        this.art_players_portrait_side[0] = 1;
		this.art_players_portrait_side[1] = 0;
		this.art_players_portrait_side[2] = 0;
		this.art_players_portrait_side[3] = 1;
		this.art_players_portrait_side[4] = 0;
        this.art_players_portrait_side[5] = 1;
		this.art_players_portrait_side[6] = 1;
		
        this.art_players_flip[0] = 1;
		this.art_players_flip[1] = 0;
		this.art_players_flip[2] = 0;
		this.art_players_flip[3] = 1;
		this.art_players_flip[4] = 0;
        this.art_players_flip[5] = 1;
		this.art_players_flip[6] = 0;
		
        this.art_players_portrait_name[0] = "Eric";
		this.art_players_portrait_name[1] = "Sammy";
		this.art_players_portrait_name[2] = "Paul";
		this.art_players_portrait_name[3] = "Shurly";
		this.art_players_portrait_name[4] = "Sidious";
        this.art_players_portrait_name[5] = "Tex";
        this.art_players_portrait_name[6] = "Steve";
		
		//Level 1
        this.art_CycronPlanet = this.graphics.load("CycronPlanet-RSed");
		
        this.art_backgrounds_stars[0] = App.client.graphics.load("art_backgrounds_stars0");
        this.art_backgrounds_stars[1] = App.client.graphics.load("art_backgrounds_stars1");
        this.art_backgrounds_stars[2] = App.client.graphics.load("space/1");
        this.art_backgrounds_stars[3] = App.client.graphics.load("space/2");
        this.art_backgrounds_stars[4] = App.client.graphics.load("space/3");
        this.art_backgrounds_stars[5] = App.client.graphics.load("space/4");
		
        for(var i = this.img_backgrounds.length-1;i>=0;--i)
            this.img_backgrounds[ this.img_backgrounds.length-1-i] = this.graphics.load("reverenceBackground"+i+".min");    
        
    },
    
    	//Load menu assets
        load_menu:function(){
		 
            //Set array sizes
            this.img_text = new Array(4);
            this.img_backgrounds = new Array(6);
            this.fn_button = new Array(5);
            this.img_effects = new Array(0);

            //Get array lengths
            var bgl = this.img_backgrounds.length-1;
            var il = this.img_text.length-1;       

            //Loop through array length and load corrisponding image
            for(var i = bgl;i>0;--i)
                this.img_backgrounds[ bgl-i] = this.graphics.load("reverenceBackground"+i+".min");

            //Loop through array length and load corrisponding image
            for(var i = il;i>=0;--i)
                    this.img_text[ il-i] = this.graphics.load("text_"+i);


            this.img_text=new Array(4);
            this.img_backgrounds=new Array(6);
            this.fn_button=new Array(5);
            this.img_effects=new Array(0);


            this.text_title = this.graphics.load("hud/hud_title");
            this.text_start = this.graphics.load("hud/hud_start");

            this.img_effects[0] = this.graphics.load("effect_glow");

            this.fn_button[0] = function(){(Reverence.state = Reverence.game.init(App)).load();};
            this.fn_button[1] = function(){Reverence.menu.optionsFlag = -Reverence.menu.optionsFlag;};

        },
        
    	//Load Audio (!Audio3dSound.js) 
        load_audio:function(){
        
		//var audio = new Audio3DOutput();
		//if(audio.isAvailable)
		//	audio.loadFixedSoundCascadeSrcList(SoundTrack,true,function(op,file,numBytes){},function(snd)
		//		{
		//		SoundTrack = snd;
		//				   console.log(SoundTrack);
		//		setTimeout(function(){SoundTrack.source.start();},300*App.client.delta);
		//		});	
		this.snd_track_0 = new Audio(this.soundtracks[0]);
		this.snd_track_0.volume = 0.7;
		this.snd_track_1 = new Audio(this.soundtracks[1]);
		this.snd_track_1.volume = 0.7;
		this.snd_track_2 = new Audio(this.soundtracks[2]);
		this.snd_track_2.volume = 0.7;
		this.snd_track_3 = new Audio(this.soundtracks[3]);
		this.snd_track_3.volume = 0.7;
		
		this.app.client.audio.set(this.snd_track_0);
	},
	
    	//Load desert level assets
        load_desert:function(){
		
		this.bg_level2_planet = this.graphics.load("planet/bg_level2_planet");	
		
		this.bg_level2_rocks1 = this.graphics.load("planet/bg_level2_rocks1");	
		this.bg_level2_rocks2 = this.graphics.load("planet/bg_level2_rocks2");	
		this.bg_level2_rocks3 = this.graphics.load("planet/bg_level2_rocks3");	
		this.bg_level2_rocks4 = this.graphics.load("planet/bg_level2_rocks4");
		
		this.bg_level4_rocks01 = this.graphics.load("planet/bg_level4_rocks01");	
		this.bg_level4_rocks02 = this.graphics.load("planet/bg_level4_rocks02");	
		this.bg_level4_rocks03 = this.graphics.load("planet/bg_level4_rocks03");	
		this.bg_level4_rocks04 = this.graphics.load("planet/bg_level4_rocks04");	
		
		this.bg_level5_transition0 = this.graphics.load("planet/bg_level5_transition0");	
		this.bg_level5_background0 = this.graphics.load("planet/bg_level5_background0");	
		this.bg_level5_background1 = this.graphics.load("planet/bg_level5_background1");	
		this.bg_level5_overlay0 = this.graphics.load("planet/bg_level5_overlay0");	
		
		this.bg_level6_background0 = this.graphics.load("planet/bg_level6_background0");	
		this.bg_level6_transition0 = this.graphics.load("planet/bg_level6_transition0");	
		this.bg_level6_background1 = this.graphics.load("planet/bg_level6_background1");	
		
		this.bg_level3_ground0 = this.graphics.load("planet/bg_level3_ground0");	
		this.bg_level3_road0 = this.graphics.load("planet/bg_level3_road0");	
		this.bg_level3_buildings0 = this.graphics.load("planet/bg_level3_buildings0");	
		this.bg_level3_buildings1 = this.graphics.load("planet/bg_level3_buildings1");	
		this.bg_level3_buildings2 = this.graphics.load("planet/bg_level3_buildings2");	
		this.bg_level3_buildings3 = this.graphics.load("planet/bg_level3_buildings3");	
		this.bg_level3_buildings4 = this.graphics.load("planet/bg_level3_buildings4");	
		this.bg_level3_buildings4 = this.graphics.load("planet/bg_level3_buildings4");	
		this.bg_level4_ground0 = this.graphics.load("planet/bg_level4_ground0");	
		this.bg_level4_rocks0 = this.graphics.load("planet/bg_level4_rocks0");	
	},
	
    	//Load cookie.js
        load_cookies:function(){
            
            //Set Cookies defaults
            Cookies.defaults = {
            	expires:new Date(2112, 0, 1)
            };
            
            //Set current data to stored values or 0
            this.DATA.HIGHSCORE = Cookies.get('highscore')||0;
            this.DATA.STATS.distance = Cookies.get('distance')||0;
            this.DATA.STATS.kills = Cookies.get('kills')||0;
            
            //Refresh cookies
            Cookies.set('highscore', this.DATA.HIGHSCORE).set('distance', this.DATA.STATS.distance).set('kills', this.DATA.STATS.kills);
        },
        
    	//Load control assets
        load_controls:function(){
		
		//Load pause and mute buttons
		this.ui_pause	 = this.graphics.load("hud/hud_pausegame");	
		this.ui_play	 = this.graphics.load("hud/hud_play");	
		this.ui_audio_mute	 = this.graphics.load("hud/hud_mute");	
		this.ui_audio	 = this.graphics.load("hud/hud_unmute");	
	},
	
    	//Load enemies and projectile assets
        load_enemies:function(){



            this.enemy_giantcruiser = this.graphics.load("enemies/enemy_giantcruiser");	
            this.enemy_light3 = this.graphics.load("Ships/enemy_light3");	
        },
        
    	//Load enemies and projectile assets
        load_projectiles:function(){

            this.projectile_bomb0 = this.graphics.load("enemies/projectile_bomb0");	
            this.projectile_bomb1 = this.graphics.load("enemies/projectile_bomb1");	
            this.projectile_blue = this.graphics.load("enemies/projectile_blue");	
            this.projectile_blue0 = this.graphics.load("enemies/projectile_blue0");	
            this.projectile_shockwave = this.graphics.load("enemies/projectile_shockwave");	
            this.projectile_shockwave0 = this.graphics.load("enemies/projectile_shockwave0");	
            this.projectile_missile0 = this.graphics.load("enemies/projectile_missile0");	
            this.projectile_lazer_red = this.graphics.load("enemies/projectile_lazer_red");	
            this.projectile_mgs = this.graphics.load("enemies/projectile_mgs");	
            this.projectile_moon = this.graphics.load("enemies/projectile_moon");	

            this.effect_resplosion = this.graphics.load("explosions/effect_resplosion");	
            this.effect_ship_explosion = this.graphics.load("explosions/effect_ship_explosion");	
        },
	
        
        //Gameloop
        
        //Revernece draw
        draw:function(){
            
            this.state.draw();
        },
		
        //Reverence update
        update:function(){

            //Is paused?
            if (!this.paused)
                (this.state.update());
        },
        
        //Global Game Functions
        
        //Update pause
        pause:function(){

            this.paused = !this.paused;
        },
	
        //Game over
        gameover:function(){

            this.game.gameover = true;
        },
        
        //Draw Global Functions
        
        //Draw numbers(number,scale,alpha,x,y,fallBACK)
        draw_numbers:function(n,s,a,x,y,fallback) {
            
            //Saving Number Vars
            var ns = n.toString();
            var nss = ns.length;
            var w = 100;
            var ww = 0;
            
            //If Fallback increase Number X
            if (fallback)
                if (nss>10)
                    ww=w/2*nss;
            
            //for Number Length, draw Number
            for(var i=nss-1;i>=0;i--)
                App.client.visuals.image_part(this.art_numbers,100+ww+x-i*(w*0.75)*s,y,1*s,a,1,ns[nss-1 -i]*w,0,w,75);
        },
        
        //Draw controls
        draw_controls:function(){
		
             //If paused draw play, else draw pause
             if (false){
                 if (!this.paused)
                     this.visuals.button(this.ui_pause,this.ui_pause.width*1.3,this.ui_pause.height*1.5,function(){Reverence.pause();});
                     else
                     this.visuals.button(this.ui_play,this.ui_pause.width*1.3,this.ui_pause.height*1.5,function(){Reverence.pause();}),this.visuals.screen_fill(0.2,"#000000");
                 }

             //If mute draw unmute, else mute
             if (!this.app.client.audio.mute)
                 this.visuals.button(this.ui_audio_mute,this.app.client.setWidth-this.ui_audio_mute.width*1.3,this.ui_pause.height*1.5,function(){App.client.audio.mute=!App.client.audio.mute;});
                 else
                 this.visuals.button(this.ui_audio,this.app.client.setWidth-this.ui_audio_mute.width*1.3,this.ui_pause.height*1.5,function(){App.client.audio.mute=!App.client.audio.mute;});
         },

        //Draw Stars(Alpha)
        draw_stars:function(a) {
            
            //Call stars
            this.game.draw_stars(a);	
        },
        
        

	

    //Scene objects
    
	//State Menu
    menu:{
        
        //State cache vars
		name:"menu",
        background_dist:530,
        background_dist2:1230,
        options:0,
        optionsFlag:-1,
        highlight:0,
        select:2,
		switch:false,
		switchmaxx:0,
		switchx:0,
        
        //State Reset variables
		initialize:function(){
			
            //Reset vars
			this.background_dist=530;
			this.background_dist2=1230;
			this.options=0;
			this.optionsFlag=-1;
			this.highlight=0;
			this.select=2;
			this.switch=false;
			this.switchmaxx=0;
			this.switchx=0;
		},
        
        //State update
        update:function() {
            
            //Update background location offset
            this.background_dist -= 0.01*this.optionsFlag*10;
            this.background_dist2 = this.app.client.Math.Clamp(this.background_dist2-0.1*this.app.delta,0,10000);    
            
            //Clamp options fade
            this.options = this.app.client.Math.Clamp(this.options-((0.1*this.optionsFlag)*this.app.delta),-1,0);
            
            //Switch Maxx distance
			this.switchmaxx = window.innerWidth/this.app.client.scale;
            
            //Switching from menu to game intro
			if (this.switch){
			if (this.switchx<this.switchmaxx)
                {
                    //Move background
                    this.switchx*=this.game.menuAnimation.speed*this.app.delta;
                    this.switchx+=1*this.app.delta;
                }
                else
                {
                    //Set state
                    (this.game.state = this.game.game)
                    
                    //Start intro vars
                    this.game.game.intro_start();
                    
                    //Start select
                    this.game.game.select_start();
                }
            }
			else
            {
                //Move from game to menu
			    this.switchx*=this.game.menuAnimation.speed2/this.app.delta;	
			}
            
            //Fade in and clamp highlight
            if (this.highlight>1)
                this.highlight = 1;
            if (this.highlight>0)
                this.highlight -=0.1*this.app.delta;  
            
        },
        
        //State draw
        draw:function(){
			
			//Draw reverence stars
            this.game.draw_stars();
			
            //Drwaing background objects
            var l = this.game.img_backgrounds.length-1;
            var math = Math;
            
            for(var i = 1;i<l;++i)
            {
                this.visuals.image_ext(this.game.img_backgrounds[ i],math.sin( -this.background_dist/360/i)*1000-1200+0+(i*600),00,1,0.9);
            }
			
			//Hide buttons when paused (temp)
			if (!this.game.paused)
                this.visuals.image_button(this.game.text_start,-this.switchx+this.app.client.setWidth/2,this.app.client.setHeight*0.75,1,this.button,this.game.text_start,1,1,1,1);
			
			this.game.draw_controls();
        },
        
        //State reset switch
		switchReset:function(){
            
			this.switch=false;
		},
        
        //State reset button
        button:function(){
			Reverence.menu.switch = true;
        },
    },
	
	//Reverence screen game
    game:{
        
        //State name
		name:"game",
        window:window,
        //State Spice.js variables
        date:new Date().getMilliseconds(),
		player:null,thingy:null,enemy:null,
		projectile:Projectiles,
        projectileCount:0,
        rect:function(x,y,w,h){
            return {x:x,y:y,w:w,h:h};
        },
        
        
        ///GAME COLLISION
        
        
        collisionId:0,
        collisionList:new Array(),
        collisionAdd:function(obj){
            obj.id = this.collisionId++;
         this.collisionList.push(obj);
        },
		collisionCountActive:function(){
			var a =0;
			
            for(var i = this.collisionList.length-1;i>=0;--i)
                if (this.collisionList[i].active)
					a++;
			return a;
		},
		collisionCountByNameActive:function(n){
			var a =0;
			
            for(var i = this.collisionList.length-1;i>=0;--i)
                if (this.collisionList[i].active)
                if (this.collisionList[i].name==n)
					a++;
			return a;
		},
		collisionCountByTagsActive:function(n){
			var a = 0;
            for(var i = this.collisionList.length-1;i>=0;--i)
                if (this.collisionList[i].active)
                if (this.collisionList[i].tags.indexOf(n)>0)
					a++;
			return a;
		},
        collisionCheckForEmpty:function(){
            for(var i = this.collisionList.length-1;i>=0;--i)
                if (!this.collisionList[i].active)
					return i;
            return false;
        },
        collisionCheck:function(){
			var obj, obj2;
            for(var i = this.collisionList.length-1;i>=0;--i)
			{		
				var obj = this.collisionList[i];
                if (obj.active)
					{	
						obj.update();
						obj.collide(this.playerspeed);
					}
				else
					continue;
				
				
						
				var col = "#DDDDFF";
				
				obj.collision=false;
				obj.collisionDistance = 0;
				obj.collisionDistance2 = {x:0,y:0};
				obj.collisionObj = null;
				
				for(var ii = this.collisionList.length-1;ii>=0;--ii)
				{
					obj2 = this.collisionList[ii];
					if ((!obj2.active)||(obj.id==obj2.id))
						continue;
					var a = this.app.client.Math.Pythageon((obj.y+obj.collisionMask.y+obj.collisionMask.h/2)-(obj2.y+obj2.collisionMask.y+obj2.collisionMask.h/2),(obj.x+obj.collisionMask.x+obj.collisionMask.w/2)-(obj2.x+obj2.collisionMask.x+obj2.collisionMask.w/2));
					var b = this.app.client.Math.Pythageon(obj2.y+obj.collisionMask.y+obj2.collisionMask.h/2-obj.y+obj2.collisionMask.y+obj.collisionMask.h/2,obj2.x+obj2.collisionMask.x+obj2.collisionMask.w/2-obj.x+obj.collisionMask.x+obj.collisionMask.w/2);
					if (
						(
							(a<(obj.collisionMask.h+obj.collisionMask.w)/2.5)
						)
					)
						if (obj.id!==obj2.id)
						{
							col = "#FF0000";
							obj.collision=true;
							obj.collisionObj = obj2;
							obj.collisionName = obj2.name;
							obj.collisionDistance = (a+b)/2;
							
							obj.collisionDistance2.x = (obj.collisionObj.x+obj.collisionObj.collisionMask.w+obj.collisionObj.collisionMask.x) - (obj.x+obj.collisionMask.x+obj.collisionMask.w);
							obj.collisionDistance2.y = (obj.collisionObj.y+obj.collisionObj.collisionMask.h+obj.collisionObj.collisionMask.y) - (obj.y+obj.collisionMask.y+obj.collisionMask.h);
							
							
						}
					
					
				}
				
				
			}
        },
        collisionDraw:function(){
			
            //Initializing offset
            var xoff = 390*this.intro_scale;
            var yoff = -275*this.intro_scale;
			var obj, obj2;
			var col = "#DDDDFF";
			
            var list = this.collisionList;
            //Begin collisionList loop
			for(var i = list.length-1;i>=0;--i)
            {
                //Grab current obj
				obj = list[i];
                
				//Remember current object, if active draw object
				if (!obj.active)
					continue;
				else
					obj.draw(this.app,this.intro_scale,this.intro_fade,xoff,yoff);
		
				//Control key for visual collision boxes
                if (this.app.ext.input.checkList("ctrl"))
                    this.visuals.rect_ext(obj.x+obj.collisionMask.x,obj.y+obj.collisionMask.y,obj.collisionMask.w,obj.collisionMask.h,obj.scale,0.25,0,col);
            }
        },
        
        //END GAME COLLISION
        
        //Unused supposed to load array of images with same name
		loadArray:function(arr,str){
			
            // Length
            var length = arr.length;
            
            //Array
            for(var i = length-1;i>=0;--i)
                this.arr[ length-1-i] = this.graphics.load(str+i);
		}, 
        
        //Unused
		screencap:null,
		
		//Level and intro variables
        intro_scale:null,
        intro_fade:null,
        intro_state:null,
        intro_check:null, 
        intro_blur:0, 
		LEVEL_SPEED:10,
		LEVEL_FALL:0,
		LEVEL_FALL:100000,
		LEVEL_FALL_HEIGHT:800,
		LEVEL_FALL_FLAG:false,
		LEVEL_FALL_SPEED:0,
		level_start_fade:1,
		level_delay:100,
		level_score:0,
		level_kills:0,
		level_data:[],
        level_state:0,
        level_x:0,
        level_y:0,
        level_audio:false,
        select_weapon:false,
        
		//Gameover variables
		gameover:0,
		gamefade:0,
		score_highlight:0,
		song3:false,
		
		//Image variables
		asteroid0:{},
        
		//Re-Initialize
		initialize:function(){
			Reverence.DATA.pull();
			this.collisionList = new Array();
			this.gameover=0;
			this.song3=false;
			this.gamefade=0;
			this.projectileCount=0;
			this.intro_blur=0; 
			this.LEVEL_SPEED=15;
			this.LEVEL_FALL=0;
			this.LEVEL_FALL=100000;
			this.LEVEL_FALL_HEIGHT=800;
			this.LEVEL_FALL_FLAG=false;
			this.LEVEL_FALL_SPEED=0;
			this.level_start_fade=1;
			this.level_score=0;
			this.level_state=0;
			this.level_x=0;
			this.score_highlight = 0;
			this.level_kills=0;
			this.level_y=0;
            this.intro_start();
            
			this.selectx2 = 0;
			this.selectx = -this.window.innerWidth/this.app.client.scale;
			this.intro_fade = 1;
            this.select_update();
		},
		
		//Load images into graphics
        load:function(){
            
            //Build common game object
			(this.thingy = Thingy = Object.create(Thingy.prototype,this.app.client.room));
			
            //Build player
			(this.player = ReverencePlayer = Object.create(ReverencePlayer,this.app.client.room));
            
            //Build enemy
			(this.enemy = Object.create(this.thingy,ReverenceEnemy.prototype));
			
			//Build projectile
			(this.projectile = Object.create(this.thingy,this.projectile.prototype));
			
			//Allocate data
			this.level_data = this.load_data();
			
        },
		
		//Populate level_data
		load_data:function(){
			//Object construction
			
			//Asteroid 
			(this.asteroid0 = Object.create(this.enemy,Asteroid.prototype)).init();

			//Lightship and ship base
			(this.lightship = LightShip = Object.create(this.enemy,LightShip.prototype));

			//Ships based on lightship
			(this.fastship = FastShip = Object.create(this.lightship,FastShip.prototype));
			(this.fastbombship = FastBomberShip = Object.create(this.lightship,FastBomberShip.prototype));
			(this.heavyship = HeavyShip = Object.create(this.lightship,HeavyShip.prototype));
			(this.LightShooter = LightShooter = Object.create(this.lightship,LightShooter.prototype));
			(this.TopShooter = TopShooter = Object.create(this.lightship,TopShooter.prototype));

			
			//bossship based on lightship
			(this.GiantShip = GiantShip = Object.create(this.lightship,GiantShip.prototype));
			
			//Explosion
			(this.Explosion = Explosion = Object.create(this.thingy,Explosion.prototype));
			
			(this.Projectile_Bomb = Projectile_Bomb = Object.create(this.thingy,Projectile_Bomb.prototype));
			(this.Projectile_Gun = Projectile_Gun = Object.create(this.thingy,Projectile_Gun.prototype));
			
			//Level unit creation data [obj,interval,number]
			return [
				[//Level 0
					[Reverence.game.asteroid0,200,1],	
				],
				[
					[LightShip,0,1],
					[LightShip,200,2],
					[LightShip,800,2],
				],
				[
					[LightShip,0,1],
					[LightShip,200,2],
					[LightShip,800,3],
					
				],
				[
					[LightShooter,0,1],
					[LightShip,0,2],
					[LightShip,800,3],
				],
				[
					[HeavyShip,00,1],	
					[LightShooter,800,2],
					[HeavyShip,1300,2],	
					[LightShip,800,3],
				],
				[
					[LightShip,0,2],	
					[LightShip,500,2],	
					[HeavyShip,00,2],	
					[LightShip,800,3],
				],
				[
					[LightShip,0,1],	
					[LightShip,500,2],	
					[LightShip,2500,3],	
					[HeavyShip,00,1],	
					[HeavyShip,1000,3],	
				],
				[
					[LightShip,00,1],	
					[HeavyShip,200,3],	
					[LightShip,1000,2],	
					[LightShip,2000,3],	
					[TopShooter,3000,1],	
					[LightShip,4000,4],	
				],
				[	
					[HeavyShip,00,3],	
					[LightShooter,1000,2],	
					[HeavyShip,2000,3],	
					[LightShooter,3000,2],	
					[HeavyShip,4000,3],	
					[TopShooter,1500,1],	
				],
				[	
					[HeavyShip,00,2],	
					[LightShooter,200,2],	
					[HeavyShip,500,2],	
					[TopShooter,1500,1],	
				],
				[	//10
					[GiantShip,0,0],	
					[TopShooter,1200,0],	
					[FastBomberShip,2400,1],	
				],
				[	
					[FastShip,00,4],
				],
				[	
					[FastShip,00,4],	
					[LightShip,400,3],
					[LightShooter,800,3],
				],
				[	
					[FastShip,00,6],
					[HeavyShip,800,6],	
				],
				[	
					[FastBomberShip,00,1],	
					[HeavyShip,300,2],	
					[LightShooter,600,2],
					[Reverence.game.asteroid0,500,4],	
				],
				[	
					[FastShip,00,4],	
				],
				[	
					[FastShip,500,4],	
					[FastBomberShip,00,1],	
				],
				[	
					[FastShip,500,3],	
					[LightShooter,500,3],	
					[FastBomberShip,00,1],	
				],
				[	
					[FastBomberShip,00,2],	
				],
				[	
					[FastBomberShip,2500,2],
					[LightShooter,0,1],		
					[FastShip,200,2],	
				],
				[	//20
					[LightShooter,500,2],
					[TopShooter,1200,2],
					[GiantShip,0,1],	
				],
				[	
					[FastShip,00,8],
					[LightShooter,500,2],	
					[Reverence.game.asteroid0,500,1],
				],
				[		
					[FastShip,00,8],	
					[LightShooter,500,2],
					[Reverence.game.asteroid0,500,1],
				],
				[		
					[FastShip,00,8],
					[LightShooter,500,2],
					[Reverence.game.asteroid0,500,1],
				],
				[	
					[Reverence.game.asteroid0,500,4],	
				]
			];	
			
		},
					
		//Update game state post menu
        update:function(){
			
			//0 for select, 1 for intro, then proceed to level
            switch(this.level_state)
            {
                case 0:
                    this.select_update();
                break;
                case 1:
                    this.intro_update();
            		this.level_x-=this.LEVEL_SPEED*this.app.client.delta;
                break;
				default:
					this.level_update();
            }
					
        },
		
		//Draw game state post menu
        draw:function(){
					
			//0 for select, 1 for intro, then proceed to level
            switch(this.level_state) {
                case 0:
                    this.select_draw();
                break;
                    
                case 1:
                    this.intro_draw();
                break;
                    
				default:
					this.level_draw();
                    }
        },
					
		
		draw_bgs:function(image,x,y,x2,y2,s,a){
					//s = s/App.client.scale;
                var win = window;
                    
            var w = 2*(win.innerWidth/this.app.client.scale);
            var ww = (win.innerWidth/this.app.client.scale);
			x = x ;
			y = y ;
			var bx, by, by_first, iw, ih;
			iw = Math.round(image.width*s);
			ih = Math.round(image.height*s);
			by = Math.round((this.app.client.setHeight+(-y2-this.app.client.setHeight)*1*1) % ih - ih);
			by_first = by;
			for (bx = Math.round((w+(x2+w)*s) % iw - iw); bx < w+iw; bx += iw)
				for (by = by_first; by < this.app.client.setHeight+ih; by += ih)
								this.visuals.image_ext(image,bx-ww,by,s,a,1);
					
		},
                    
		draw_bgsX:function(image,x,y,x2,y2,s,a){
                var win = window;
					//s = s/App.client.scale;
					var w = 2*(win.innerWidth/this.app.client.scale);
					var ww = (win.innerWidth/this.app.client.scale);
			x = x ;
			y = y ;
			var bx, by, by_first, iw, ih;
			iw = Math.round(image.width*s);
			ih = Math.round(image.height*s);
			by = Math.round((this.app.client.setHeight+(-y2-this.app.client.setHeight)*1*1) % ih - ih);
			by_first = by;
			for (bx = Math.round((w+(x2+w)*s) % iw - iw); bx < w+iw; bx += iw)
								this.visuals.image_ext(image,bx-ww,y,s,a,1);
					
		},		
                    
		//Draw background object, [img:Image,x:Number,y:Number,sx:Float,sy:Float]
		draw_bg_obj:function(img,x,y,sx,sy,a) {
				
            var win = window;
			//Skip draw if outside window
			if (x+img.width*sx<-win.innerWidth/this.app.client.scale-(img.width/this.app.client.scale*sx))
			if (x>+win.innerWidth/this.app.client.scale+(img.width/this.app.client.scale*sx))
				return;
			
			//Draw img
			this.visuals.image_ext2(img,x,y,sx,sy,a||0.5,0);
				
		},
					
		//Draw stars object, [a:Float]
		draw_stars:function(a){
			
			this.playerspeed = (this.player.getX()/10000);
            var a = 0.75+Math.sin(-this.level_x/this.app.client.setWidth/2)*0.1;
			this.draw_bgs(Reverence.art_backgrounds_stars[2],0,0,this.playerspeed+this.level_x*0.001,this.level_y,2,a);
				
			this.draw_bgs(Reverence.art_backgrounds_stars[5],0,0,this.playerspeed+this.level_x*0.005,this.level_y,2,a);
			
			this.draw_bgs(Reverence.art_backgrounds_stars[3],0,0,this.playerspeed+this.level_x*0.01,this.level_y,2,a);
			this.draw_bgs(Reverence.art_backgrounds_stars[4],0,0,this.playerspeed+this.level_x*0.02,this.level_y,2,a);
			
			//this.visuals.image_ext(this.img_backgrounds[1],1100+this.level_x/5,00,2,0.5,0);
			
			var con = Math.cos(this.level_x/3600)*0.1;
			var son = Math.sin(this.level_x/3600)*0.1;
			
			this.draw_bg_obj(Reverence.img_backgrounds[1],5+this.level_x/5,0,
							 2-con,
							 2-son/2);
			
			this.draw_bg_obj(Reverence.img_backgrounds[1],1105+this.level_x/5,0,
							 1.6-son,
							 1.6-con/2);
			
			this.draw_bg_obj(Reverence.img_backgrounds[1],5+this.level_x/5,0,
							 2-con/2,
							 2-son/2);
			
			
			this.draw_bg_obj(Reverence.img_backgrounds[3],4100+this.level_x/5,0,
							 2.4-son,
							 2-con/2);
			
			this.draw_bg_obj(Reverence.img_backgrounds[3],4100+this.level_x/5,0,
							 2-con,
							 2-son);
			
			
			this.draw_bg_obj(Reverence.img_backgrounds[2],6000+this.level_x/6,100,
							 1.5-con,
							 1+son);
			this.draw_bg_obj(Reverence.img_backgrounds[2],6000+this.level_x/6,100,
							 1.25+con,
							 1-son);
			this.draw_bg_obj(Reverence.img_backgrounds[2],6000+this.level_x/6,100,
							 1.5+son,
							 1+con);
			
			this.draw_bg_obj(Reverence.img_backgrounds[2],6000+this.level_x/6,100,
							 2-son/2,
							 2-con/2);
							 
							 
			this.draw_bg_obj(Reverence.bg_level2_planet,10000+this.level_x/6,400,
							 2.25,
							 2.25,1);
							 
			//if (this.level_x<-this.LEVEL_FALL)
            //    {
                //Level 2 
                var x = this.LEVEL_FALL+this.level_x/7;
                var y = window.innerHeight/App.client.scale+this.LEVEL_FALL_HEIGHT-this.level_y-300;

                if (this.level_x< -(300000+x))
                    this.draw_bgsX(Reverence.bg_level4_ground0,x,y,this.level_x*0.02,0,2,1);	
                    else
                    this.draw_bgsX(Reverence.bg_level3_ground0,x,y,this.level_x*0.02,0,2,1);	

                this.draw_bg_obj(Reverence.bg_level2_rocks2, 8500+this.level_x/12,-00+y-25,1,1,1);
                this.draw_bg_obj(Reverence.bg_level2_rocks1, 3000+this.level_x/13,-00+y-75,1,1,1);
                this.draw_bg_obj(Reverence.bg_level2_rocks4, 12000+this.level_x/13,-00+y-25,1,1,1);
                this.draw_bg_obj(Reverence.bg_level2_rocks3, 8000+this.level_x/13,-00+y-25,1,1,1);


                this.draw_bg_obj(Reverence.bg_level3_buildings4, 23000+this.level_x/13,-00+y-755,2,2,1);

                this.draw_bg_obj(Reverence.bg_level3_buildings3,23000+this.level_x/11.75,-00+y-175,2,2,1);


                this.draw_bg_obj(Reverence.bg_level3_buildings2,25000+this.level_x/11.5,-00+y-115,2,2,1);
                this.draw_bg_obj(Reverence.bg_level3_buildings1,21000+this.level_x/11,-00+y-17,2,2,1);
                this.draw_bg_obj(Reverence.bg_level3_buildings0,20000+this.level_x/10,-00+y,2,2,1);

                this.draw_bg_obj(Reverence.bg_level3_buildings1,27000+this.level_x/11,-00+y+25,2,2,1);
                this.draw_bg_obj(Reverence.bg_level3_buildings1,30000+this.level_x/11,-00+y-55,2,2.1,1);


                this.draw_bg_obj(Reverence.bg_level4_rocks0,40000+this.level_x/11,-00+y+25,2,2,1);
                    y-=450;
              var brocks = Reverence.bg_level4_rocks0.width*4;
                this.draw_bg_obj(Reverence.bg_level4_rocks0,brocks+31000+this.level_x/14,-00+y+25,2,3,1);
                this.draw_bg_obj(Reverence.bg_level4_rocks0,brocks+brocks+30000+this.level_x/14,-00+y+25,2,3,1);
                this.draw_bg_obj(Reverence.bg_level4_rocks0,brocks+brocks+brocks+30000+this.level_x/14,-00+y+25,2,3,1);
                this.draw_bg_obj(Reverence.bg_level4_rocks0,brocks+brocks+brocks+brocks+30000+this.level_x/14,-00+y+25,2,3,1);
                this.draw_bg_obj(Reverence.bg_level4_rocks0,brocks+brocks+brocks+brocks+brocks+30000+this.level_x/14,-00+y+25,2,3,1);

                    y-=50;
                this.draw_bg_obj(Reverence.bg_level4_rocks01,brocks+40000+this.level_x/11,-00+y-125,2,2,1);

                brocks += Reverence.bg_level4_rocks01.width*4;
                this.draw_bg_obj(Reverence.bg_level4_rocks02,brocks+40000+this.level_x/11,-00+y-125,2,2,1);
                brocks += Reverence.bg_level4_rocks02.width*4;
                this.draw_bg_obj(Reverence.bg_level4_rocks03,brocks+40000+this.level_x/11,-00+y+125,2,2,1);
                brocks += Reverence.bg_level4_rocks03.width*4;
                this.draw_bg_obj(Reverence.bg_level4_rocks04,brocks+40000+this.level_x/11,-00+y-125,2,2,1);

                this.draw_bg_obj(Reverence.bg_level5_transition0,brocks+50000+this.level_x/11,0,1.85,1.85,1);
                            y+=300;
                if (this.level_x< -(1800000+x))
                        this.draw_bgsX(Reverence.bg_level6_background1,x,y-30,this.level_x*0.02,0,3,1);
                            else
                if (this.level_x< -(1300000+x))
                        this.draw_bgsX(Reverence.bg_level6_background0,x,y,this.level_x*0.02,0,1.5,1);
                            else
                if (this.level_x< -(1100000+x)) {
                            if (this.song3==false)
                            this.app.client.audio.set(Reverence.snd_track_2),this.song3=true;
                        this.draw_bgsX(Reverence.bg_level5_background0,x,y,this.level_x*0.02,0,3.5,1);
                        this.draw_bgsX(Reverence.bg_level5_overlay0,x,y,this.level_x*0.02,0,3.5,1);	}
          //      }
            this.draw_bg_obj(Reverence.bg_level6_transition0,brocks+63000+this.level_x/11,0,1.25,1.25,1);

            this.draw_bg_obj(Reverence.bg_level6_background1,brocks+108000+this.level_x/11,-2.5,1.75,1.75,1);
            this.draw_bg_obj(Reverence.bg_level6_transition0,brocks+98000+this.level_x/11,0,1.25,1.25,1);
			
			
				return;	
		},
		
		//Gameplay head-up-display
		draw_hud:function(){
            
                    
            //Fade out level numbers
            var a;
			if (this.level_state < 2)
                    a = 1-this.level_start_fade*0.25;
			else
                    a = 1;
                    
            //Score background highlight
			if (this.score_highlight-0.01*this.app.delta>0)
                    this.score_highlight -=0.01*this.app.delta;
                    
            //If game
			if (!this.gameover)
			{
                var xx = (2*(window.innerWidth/App.client.setWidth))*-Reverence.hud_health.width/3.5;
                var yy = -Reverence.hud_health.width/3.5;
                    
				this.visuals.image_part(Reverence.hud_health,xx+170,-Reverence.hud_health.height*0.25+21,0.55,a,0,0,0,this.app.client.Math.Clamp(Reverence.hud_health.width*this.player.health,0.01,Reverence.hud_health.width),Reverence.hud_health.height);
				this.visuals.image_part(Reverence.hud_shield,xx+172,-Reverence.hud_shield.height*0.25+21,0.55,a,0,0,0,this.app.client.Math.Clamp(Reverence.hud_shield.width*this.player.shield,0.01,Reverence.hud_shield.width),Reverence.hud_shield.height);
				this.visuals.image_part(Reverence.hud_energy,xx+170,-Reverence.hud_energy.height*0.25+46,0.55,a,0,0,0,this.app.client.Math.Clamp(Reverence.hud_energy.width*this.player.energy,0.01,Reverence.hud_energy.width),Reverence.hud_energy.height);

				this.visuals.image_ext(Reverence.hud_meter2,xx+250,75,0.5,a,1);
				this.visuals.image_part(Reverence.art_portraits,xx+150,82,0.85,a,1,Reverence.art_players_portrait[this.selectId]*124,0,124,134);
				this.visuals.image_ext(Reverence.hud_meter,xx+250,75,0.5,a,1);

                this.draw_mobilecontrols(xx);
                    
				if (this.level_start_fade>0)
					{
					this.app.client.visuals.image_ext(Reverence.hud_level,255,255,1,this.level_start_fade,1);
					this.level_start_fade-=0.015*this.app.client.delta;

					Reverence.draw_numbers(this.level_state-2,1,this.level_start_fade,450,248,true);
					}
                    
				//for(var i=this.player.lives-1;i>=0;--i)
				// 	this.app.client.visuals.image_ext(Reverence.hud_lives,150+85*i,100,0.5,a,1);
                var sx = this.app.client.setWidth-xx-250;
				this.app.client.visuals.image_ext(Reverence.hud_score,sx,25,0.55,a,1);
                    this.app.client.visuals.image_ext(Reverence.hud_score_highlight,sx,25,0.55,this.score_highlight*2,1);
			 
                //If selecting a weapon
                if (this.selectWeapon)
                    {
                    var wpnImg = [Reverence.projectile_lazer_red, Reverence.projectile_blue0, Reverence.projectile_bomb0,Reverence.projectile_shockwave0,Reverence.projectile_missile0,Reverence.projectile_moon];
                    var wpnImgSS = [1,0.5,1.5,0.5,1.5,1.5];
                    this.visuals.button_scaled(wpnImg[Reverence.game.player.getShootType()],this.app.client.setWidth/2,this.app.client.setHeight/2.255,1,function(){
                        Reverence.game.selectWeapon = !Reverence.game.selectWeapon;
                        });
                    
                    for(var iAngle = 0; iAngle<=5;iAngle++)
                        {
                        var a =260*Math.sin(iAngle*45);
                        var b=260*Math.cos(iAngle*45);
                        this.visuals.image_rotate(Reverence.hud_weapons_selector,a+this.app.client.setWidth/2,b+this.app.client.setHeight/2.25,0.7,180-iAngle*59,0.8,0,0);
                       
                     this.visuals.button_scaled(wpnImg[iAngle],a+this.app.client.setWidth/2,b+this.app.client.setHeight/2.25,0.25+wpnImgSS[iAngle],function(){
                        Reverence.game.player.setShootType(iAngle);
                        Reverence.game.selectWeapon = !Reverence.game.selectWeapon;
                        });
                        }
                        
                    }
                    
                    
                    
				Reverence.draw_numbers(this.level_score,0.5,1,sx-5,23,false);
			}
			else{
				
				this.draw_gameover();
			}
			if (Reverence.paused)
				App.client.visuals.image_ext(Reverence.hud_pause,App.client.setWidth/2,App.client.setHeight/2,0.5,a,1);
			
			if (this.confirm)
				App.client.visuals.image_ext(Reverence.hud_confirm,App.client.setWidth/2,App.client.setHeight/2,0.5,a,1);
                    
		},
		
        //Draw mobile controls overlay
        draw_mobilecontrols:function(xx){
                    
            //Check if mobile
            if (this.app.ext.useragent.mobile)
            {
            this.visuals.buttonH(Reverence.hud_move,xx+150-this.app.ext.input.touchH*25,this.app.client.setHeight-100+this.app.ext.input.touchV*25,2,function(){
            Reverence.game.player.mo = true;
            });
            this.visuals.button_scaled(Reverence.hud_button_weapons,App.client.setWidth/2,this.app.client.setHeight-100,1,function(){
            Reverence.game.selectWeapon = !Reverence.game.selectWeapon;
            });
            
            this.visuals.button_scaled(Reverence.hud_shoot,App.client.setWidth-xx-150,this.app.client.setHeight-100,2,function(){
            Reverence.game.player.sh = true;
            });
            }            
        },
                    
        // Draw gameover 
        draw_gameover:function(){
                    
                    //Fade
                    this.visuals.screen_fill(0.5, "#000000");
            //If lives is larger than 0, ad more lives, not gameover. 
            if (this.player.lives>0)
                this.player.lives--;
            if (this.player.lives>0)
                this.gameover = false, this.player.health = 1;		
            
            //Title
            this.app.client.visuals.image_ext(Reverence.hud_gameover,this.app.client.setWidth/2,100,1,1,1);
            
            //Level
            this.app.client.visuals.image_ext(Reverence.hud_level,-100+this.app.client.setWidth/2,255,1,1,1);
                    
            //Level State (number)
            Reverence.draw_numbers(this.level_state-2,1,1,100+this.app.client.setWidth/2,248,true);

            //Score Title
            this.app.client.visuals.image_ext(Reverence.hud_score,-100+this.app.client.setWidth/1.45,325,1,1,1);
                    
            //Score (number)
            Reverence.draw_numbers(this.level_score,1,this.level_start_fade,+this.app.client.setWidth/1.45,319,false);
                    
            //Twitter button
            this.app.client.visuals.image_button(Reverence.twitter,App.client.setWidth/2,575,0.8,this.open_twitter,1,1,1,1,1);

            //Retry button
            this.app.client.visuals.image_button(Reverence.hud_retry,this.app.client.setWidth/2,this.app.client.setHeight/2+175,1,function(){Reverence.state.initialize();},1,1,1,1,1);
                    
            //Back button
            this.app.client.visuals.image_button(Reverence.hud_back,this.app.client.setWidth/2,this.app.client.setHeight/2+350,1.5,function(){Reverence.state.initialize();(Reverence.state = Reverence.menu).initialize();},1,1,1,1,1);


        },
                    
        //Open Window Twitter
        open_twitter:function(){
            window.open("https://twitter.com/intent/tweet?text=I%20just%20got%20a%20score%20of%20"+Reverence.game.level_score+"%20on%20Reverence%20Lost!@ryanspice&hashtags=Html5,Canvas,GameDev&url=ryanspice.com&original_referer=RyanSpice");
        },
                    
                    
		//Selection screen
			
		//Selection start
		select_start:function(){
			this.selectId = 0;
			this.selectx2 = 0;
			this.selectx = -window.innerWidth/this.app.client.scale;
			this.intro_fade = 1;
		},
		
		//Selection update
		select_update:function(){
			
			//Select screen x positioning
			if (this.selectx2==0)
			this.selectx*=Reverence.menuAnimation.speed2/this.app.client.delta;
			else
			this.selectx*=(Reverence.menuAnimation.speed*this.selectx2)*this.app.client.delta;
			
			//If swipe left past window, set to menu
			if (this.selectx<-window.innerWidth/this.app.client.scale)
			{
				Reverence.menu.switchReset();
				Reverence.state = Reverence.menu;
			}
			
			//Clamp selectx
			this.selectx=this.app.client.Math.Clamp(this.selectx,-window.innerWidth/this.app.client.scale,window.innerWidth/this.app.client.scale);
			
			//Set art_reverence to accociated player sprite sheet
			 Reverence.art_reverence = Reverence.art_players[this.selectId];
			
			//Background positioning
            Reverence.menu.background_dist-=0.01;
            Reverence.menu.background_dist-=0.01*Reverence.menu.optionsFlag*10;
			
		},
		
		//Selection draw
		select_draw:function(){
			
			//Draw stars
			Reverence.draw_stars();
			
            //Drwaing background objects
            var l = this.game.img_backgrounds.length-1;
            var math = Math;
            
            for(var i = 1;i<l;++i)
            {
                this.visuals.image_ext(Reverence.img_backgrounds[ i],math.sin( -Reverence.menu.background_dist/360/i)*1000-1200+0+(i*600),00,1,0.9);
            }
                    
			
			//Scores
			this.visuals.button(Reverence.hud_begin,5-this.selectx+window.innerWidth/this.app.client.scale +this.app.client.setWidth/2,this.app.client.setHeight*0.75,function(){Reverence.game.level_state = 1; Reverence.game.player.init()});
			
			
			var statx = -140-this.selectx+window.innerWidth/this.app.client.scale +this.app.client.setWidth/2;
			var staty = 350;
			this.visuals.button(Reverence.hud_stats,statx,staty,function(){});
			
			this.visuals.button(Reverence.hud_highscore,75+statx,staty+200,function(){});
			
			this.visuals.image(Reverence.hud_kills,statx-40,staty+40);
			this.visuals.image(Reverence.hud_distance,statx-40,staty+120);
							   
							   
			Reverence.draw_numbers(Reverence.DATA.STATS.kills,0.7,this.level_start_fade,statx+275,staty+50,true);
			Reverence.draw_numbers(Reverence.DATA.STATS.distance,0.7,this.level_start_fade,statx+275,staty+125,true);
			Reverence.draw_numbers(Reverence.DATA.HIGHSCORE,0.7,this.level_start_fade,statx+275,staty+250,true);
			
			//Select
			var type = Reverence.art_players_portrait_side[this.selectId];
			
			//Current portrait
			
				//Background portrait
				this.visuals.image_part(Reverence.art_portraits, +224,150,1.5,1,1,type*124,0,124,134);

				//Portrait
				this.visuals.image_part(Reverence.art_portraits, +214,150,1.5,1,1,Reverence.art_players_portrait[this.selectId]*124,0,124,134);

				//Player ship
				 this.app.client.visuals.image_part(Reverence.art_players[this.selectId], +525,150,1.5,1,1,0,0,150,150);   
			
				//Emblum
				this.visuals.image_part(Reverence.art_emblums, +165,85,0.4,1,1,(1-type)*124,0,124,125);

			//Player portraits
			var i = 0;
			for(var j=Reverence.art_players_portrait.length-1;j>=0;--j)
			{
			i++;
				var PH = 350;
				if (this.visuals.touch_within2(
									-this.selectx +(j%4==0?-0:-50)+
									(j%4==1?75:-50)+
									(j%4==2?-70:-50)+
									(j%4==3?0:-50)+
									+150+(-40*5)+(j*80)+this.app.client.setWidth/3,
									(j%4==0?-0:0)+
									(j%4==1?0:0)+
									(j%4==2?160:0)+
									(j%4==3?160:0)+
									PH,125,134,0))
				//Set selectid to current loop position
				if(this.app.ext.input.released)
					this.selectId = j;
            	this.visuals.image_part(Reverence.art_portraits,
									10+-this.selectx +(j%4==0?-0:-50)+
									(j%4==1?75:-50)+
									(j%4==2?-70:-50)+
									(j%4==3?0:-50)+
									+150+(-40*5)+(j*80)+this.app.client.setWidth/3,
									(j%4==0?-0:0)+
									(j%4==1?0:0)+
									(j%4==2?160:0)+
									(j%4==3?160:0)+
				PH,1,1,0,Reverence.art_players_portrait_side[j]*124,0,124,134);
				
            	this.visuals.image_part(Reverence.art_portraits,
									-this.selectx +(j%4==0?-0:-50)+
									(j%4==1?75:-50)+
									(j%4==2?-70:-50)+
									(j%4==3?0:-50)+
									+150+(-40*5)+(j*80)+this.app.client.setWidth/3,
									(j%4==0?-0:0)+
									(j%4==1?0:0)+
									(j%4==2?160:0)+
									(j%4==3?160:0)+
				PH,1,1,0,Reverence.art_players_portrait[j]*124,0,124,134);
			}
			
			//Controls
			Reverence.draw_controls();
			
			//Arrows
			this.draw_nav();
			
			return true;
		},
		
		//Selection navigation
		draw_nav:function(){
			
			if (this.selectx<-100)
				return;
			
			//HIGHSCORES
			//Right Screen
			
			var b =+this.app.client.setWidth/2-15+ window.innerWidth/this.app.client.scale;
			if (this.visuals.touch_within2(-this.selectx +24+b,this.app.client.setHeight-105,Reverence.hud_back.width,Reverence.hud_back.height,1,1,1))
				{
           			this.visuals.image_part(Reverence.hud_back,-this.selectx +24+b,this.app.client.setHeight-100,(1.4+Math.sin(Reverence.menu.background_dist)*0.005),1,1,0,0,Reverence.hud_back.width,Reverence.hud_back.height);
					if(this.app.ext.input.released)
						{
							this.selectx2 = 0;
							//this.selectx = -10;
							return;
						}

				}
					else
            	this.visuals.image_part(Reverence.hud_back,-this.selectx +24+b,this.app.client.setHeight-100,(1.3+Math.sin(Reverence.menu.background_dist)*0.005),1,1,0,0,Reverence.hud_back.width,Reverence.hud_back.height);
			
			
			if (this.selectx>10)
				return;
			
			
			//Main Selection
			//Left Screen
			var s = 1+window.innerWidth/this.app.client.setHeight;
			if (this.visuals.touch_within2(+15+-this.selectx +this.app.client.setWidth/2-24,this.app.client.setHeight-175,Reverence.hud_arrow2.width,Reverence.hud_arrow2.height,1,1,1))
				{
					this.visuals.image_part(Reverence.hud_arrow2,+15+-this.selectx +this.app.client.setWidth/2-24,this.app.client.setHeight-175,(1.9+Math.sin(Reverence.menu.background_dist)*0.005),1,1,0,0,Reverence.hud_arrow2.width,Reverence.hud_arrow2.height);
					if(this.app.ext.input.released)
						{
							this.selectx2 = 1;
							this.selectx = 10;
							return;
							//this.level_state = 1;this.player.init();
						}

				}
				else
					this.visuals.image_part(Reverence.hud_arrow2,+15+-this.selectx +this.app.client.setWidth/2-24,this.app.client.setHeight-175,(1.8+Math.sin(Reverence.menu.background_dist)*0.005),1,1,0,0,Reverence.hud_arrow2.width,Reverence.hud_arrow2.height);
		},
		
		//Intro
			
		//Level intro init
        intro_start:function(){
			
			//Initialize player
            this.player.init();
			
			//Initalize intro
			this.level_start_fade = 4;
            this.intro_scale = 2;
            this.intro_fade = 0;
            this.intro_state = 0;
            this.intro_check = 0;	
			
        },
		
		//Level intro update
        intro_update:function(){
			
            switch(this.intro_state)
            {
             case 0:
                    this.intro_check-=1*this.app.client.delta;
                    if (this.intro_check<0)
                        this.intro_check = 0,this.intro_state = 1;
                    this.intro_fade+=0.01*this.app.client.delta;
					this.level_x-=this.intro_fade*this.LEVEL_SPEED*this.app.client.delta;
                    if((this.app.ext.input.codedown=="enter")||(this.app.ext.input.released))
                    {
                     this.intro_state= this.intro_fade = 1;
                     this.intro_check=0;
                    }
            break;  
             case 1:
                    this.intro_scale-=0.02*this.app.client.delta;
                    if (this.intro_scale<0.09)
                        this.intro_state = 2;
                    if((this.app.ext.input.codedown=="enter")||(this.app.ext.input.released))
                    {
                     this.intro_scale= 0.09;
                     this.intro_state=2;
                    }
            break;     
            case 2:
                this.level_start();
            break;        
					
            }
            this.intro_fade = this.app.client.Math.Clamp(this.intro_fade,0,1);
            this.intro_scale = this.app.client.Math.Clamp(this.intro_scale,0.08,2);
        },
		
		//Level intro draw
        intro_draw:function(){
			this.intro_blur = 1*this.intro_scale;
            
			this.draw_stars();
            
            var xoff = 390*this.intro_scale;
            var yoff = -275*this.intro_scale;
            var yflightoff = (Math.sin(this.level_x/360)*1);
            
            if (Reverence.art_players_flip[this.selectId]==1){
            this.app.client.visuals.image_flip(-(xoff+this.app.client.setWidth/2)*this.intro_scale,yflightoff+yoff+this.app.client.setHeight/2); this.app.client.visuals.image_part(Reverence.art_reverence,-(xoff+this.app.client.setWidth/2)*this.intro_scale,yflightoff+yoff+this.app.client.setHeight/2,1.3,1,1,0,0,Reverence.art_reverence.width/5,Reverence.art_reverence.height/5);   
				this.app.client.visuals.image_flip(-(xoff+this.app.client.setWidth/2)*this.intro_scale,yflightoff+yoff+this.app.client.setHeight/2);
		}
				else{
					
				
            this.visuals.image_part(Reverence.art_reverence,-(xoff+this.app.client.setWidth/2)*this.intro_scale,yflightoff+yoff+this.app.client.setHeight/2,1.3,this.intro_fade,1,0,0,Reverence.art_reverence.width/5,Reverence.art_reverence.height/5);	
				}
					
            
        },
		
			//Level
			
		//Add to score
		level_score_add:function(score){
			Reverence.game.score_highlight = score/200;
			Reverence.game.level_score+=score;
			Reverence.game.level_kills++;
		},
			
		//Gameplay level start, reset score
		level_start:function(){
			
			this.level_score = 0;	
			this.level_check(1,0,"asteroid0");
            this.intro_blur = 0;
			
			//Play track 1
            if (!this.level_audio)
                this.level_audio = true,this.app.client.audio.set(Reverence.snd_track_1);
			
		},
			
		//Level update
		level_update:function(level){
            
            //Adgust level speed
			this.LEVEL_SPEED = 15;
            
            //Debug Adjust level speed
			//this.LEVEL_SPEED = 15 + (this.app.ext.input.checkList("shift")*1500)- (this.app.ext.input.checkList("r")*1500);
            
			//Dont update if gameover
			if (this.gameover)
				{
				this.gamefade = this.app.client.Math.Clamp(this.gamefade+0.01*this.app.delta,0,1);
				return;
				}
			
			//Grab player x and use its proximity to be this.playerspeed 
			this.playerspeed = this.app.client.Math.Clamp((this.player.getX()/100),5,50);
			
			//Move level position
			var x = this.level_x/100000000000;
            this.level_x-=x+1 * this.LEVEL_SPEED*this.app.client.delta;
			
			//Move to planet
			if (this.level_x<-this.LEVEL_FALL)
				{
				//Move y untill this.LEVEL_FALL_HEIGHT
				if (this.level_y<this.LEVEL_FALL_HEIGHT)
					this.level_y+=1+this.LEVEL_FALL_SPEED*this.app.client.delta;
					
				//If not LEVEL_FALL_FLAG, set to true.
				if (this.LEVEL_FALL_FLAG==false)
					this.LEVEL_FALL_SPEED=this.LEVEL_SPEED*2.75,this.LEVEL_FALL_FLAG = true,this.app.client.audio.set(Reverence.snd_track_3);
				
				this.LEVEL_FALL_SPEED=this.app.client.Math.Clamp(this.LEVEL_FALL_SPEED+this.LEVEL_SPEED*8.75*this.app.client.delta,0,5);
				}
            this.collisionCheck();
            this.player.update();
			this.level_check(this.level_state-1,(this.level_state)*250);
			
			return;
		},
		
		//Level draw
		level_draw:function(){
			this.draw_stars();		
            this.collisionDraw();
			this.draw_hud();	
			return;
			
		},
			
		//Level next
		level_next:function(){
			this.level_state += 1;
			this.level_delay = 100;
			this.level_start_fade = 1;
		return;
		},
			
		//Gameplay level check 
		//	('l:Number' at distance 'x:-Number')
		level_check:function(l,x){
			
			//Get level data
			var d = this.level_data[this.level_state-1];
			
			//Check level state, and distance, and if there are enemies
			//if (this.level_state==l)
			if (this.level_x<=-x)
			if (this.collisionCountByTagsActive('enemy')==0)
			if (this.level_delay>0)
				this.level_delay--;
			if (this.level_delay==0)
			{
				
				//If data for this level exists
				if (d)
				{
					//Store data length
					var s = d.length;
					
					//Spawn data
					for (var i = s-1; i>=0;i--)
						this.level_spawn(d[i][0],d[i][1],d[i][2]);
					
					//Progress the level
					this.level_next();
					
				}
				else{
					var d = this.level_data[1];
					//Store data length
					var s = d.length;
					
					//Spawn data
					for (var i = s-1; i>=0;i--)
						this.level_spawn(d[i][0],d[i][1],d[i][2]);
					
					//Progress the level
					this.level_next();
					
				}
			}
			
		},
		
		//Gameplay level spawn 
		//	('obj:Thingy' at 'time:Number' intervals, repeat 'count:Number')
		level_spawn:function(obj,time,count,x,y){
			
			//Loop by count
			for (var i = 0;i<=count;i++)
				
				//Set timeout at time*count+1
				setTimeout(function(){
					
					//Spawn obj
					var objs = (Object.create(obj));
					objs.init();
					
					//Set coordinates
					if (x) objs.x = x;
					if (y) objs.y = y;
					
					//Add to collision
					Reverence.game.collisionAdd(objs);
					
					},time*(i+1));
			
			//Return paramaters
			return [obj,time,count,x,y];
		},
		
    }
}
                              
});


//Application main loop Object[init,update,draw]
App.main= Reverence.constructor;

//Application Load
App.OnLoad = function () {

    //App.Init(title,width,height)
    App.Init("Reverence Lost Html5", 720, 1024);

    //Set canvas background colour
    App.canvas.background_set("#000000");

    //Predefine options, set image path to the images/ folder
    App.options.paths.images = "images/";
    
    //Assign favicon
    App.ext.metatag.metaFavicon("images/favicon.png");
    
};