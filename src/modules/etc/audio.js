
	/*
	prototype:{
		mute:false,
		quality:0,
		current:0,
		audio: new Audio(),
		sound: new Array(new Audio()),
		length: new Array(),
		soundbyte:function(filename,callback){
			this.fname = new Audio(filename);
			this.play = function play() {
				this.fname.pause();
				this.fname.play();
			}
		},
		MultiChannelSound:function(filename,channelQ,callback){
			if (App.ext.useragent.ie)
				return;
			this.fname = filename;
			this.channel = new Array();
			for (var i = 0; i != channelQ; ++i)
			{
				this.channel[i] = new Audio(filename);
			}
			this.currentChannel = 0;
			this.play = function play()
			{
				try{
				this.channel[this.currentChannel].currentTime = 0;
				this.channel[this.currentChannel].play();
				++this.currentChannel;
				if (this.currentChannel == this.channel.length)
				{
					this.currentChannel = 0;
				}
				}catch(e){}
			}
			this.stop = function stop()
			{
				this.channel[this.currentChannel].pause();
				++this.currentChannel;
				if (this.currentChannel == this.channel.length)
				{
					this.currentChannel = 0;
				}
			}
		},
		toggle:function() {
			this.mute = true;
		},
		set:function(index,reset){
			if (!this.mute)
				{
					this.sound[this.current].pause()
					this.sound[this.current] = index;
					try{
						this.sound[this.current].currentTime = 0;
						}catch(e){}

					return;


/*
					for(var i=0;i>0;--i)
					if (App.ext.useragent.mobile){
						index.play();
						return;
					}
					else
					{
					index.play();
						return;
					}

						this.sound[this.current].pause();
						this.current = index;
						try{
						index.currentTime = 0;
						}catch(e){}
						index.play();
						*//*
			}
		},
		update:function() {
			if (typeof this.sound === 'object')
				if (this.sound[this.current].paused)
					this.sound[this.current].play();
			return

			/*

			this.mute;
			if (this.sound[this.current]==="undefined")
				return;
			if (this.sound[this.current].currentTime >= this.length)
			{
				if (++this.current == soundtrackQ)
				{
					this.current = 0;
				}

				this.sound[this.current].currentTime = 0;
				this.sound[this.current].play();
			}


			*/
			/*
		}
	},
	constructor:function(){return {
		init:{value:function(){
				return true;
			}}
		}
	}
	*/
