
		let loadlist = function(imageArray){

			let len = imageArray.length;
		    for(var i = 0; i<=len-1; i++)
			{
				let ii = i;
				let str = imageArray[i];

				window.Loader.asyncLoadImageDataFromZip(str,str+"EH").then((st)=>{

					let elm:object = document.getElementById(str);

					self[st] = window.Loader.getImageReference(st);

					if (elm)
					elm.src = self[st].src;

				});

			}

		}

		/*
				let len = this.backgrounds.length;
			    for(var i = 0; i<=len-1; i++)
				{
					let ii = i;
					let str = this.backgrounds[i];

					this.loader.asyncLoadImageDataFromZip(str,str+"EH").then((st)=>{

						self[st] = Loader.getImageReference(st);

					});

				}
		*/


	//	loadlist(IMAGE_DATA.space.images);
	//	loadlist(IMAGE_DATA.reverence.images);
		/*
				let str = "ryanTitleSnowboarding.min.png";

				this.loader.asyncLoadImageDataFromZip(str,str+"EH").then((st)=>{

					self[st] = Loader.getImageReference(st);
					document.getElementById('reverence-title').src = self[st].src;
				});
		*/













		/*
						img = this.spritelist['bg1'];

						this.visuals.image_ext(img,x + img.width / 2,y + this.sy * 3,1,1,1);

						img = this.spritelist['bg2'];

						this.visuals.image_ext(img,x + img.width / 2,y + this.sy * 3,1,1,1);

						img = this.spritelist['bg3'];

						this.visuals.image_ext(img,x + img.width / 2,y + this.sy * 3,1,1,1);

						*/
												/*
						this.visuals.image(imgRef2,0 - imgRef0.width / 2 + this.backgroundPos * 200 + this.revAngle / 1000, y + this.revAngle / 1000 + this.sy * 3, 0.1, this.revAngle / 100 + this.sy / 10, 0.1, 0);
				//this.visuals.image_ext(imgRef0, -2000 + this.sy * 22 + this.app.client.width * 0.5 - imgRef0.width / 4 - this.backgroundPos * 600, -300 + this.sy * 120, 2, 1, 0);
				this.visuals.image(imgRef0,this.app.client.width/2 - imgRef0.width / 2 + this.backgroundPos * 200 + this.revAngle / 1000, 1 + this.revAngle / 1000 + this.sy * 3, 1, this.revAngle / 100 + this.sy / 10, 0.6, 0);


				this.visuals.image(imgRef1,0 - imgRef0.width / 2 - this.backgroundPos * 200 + this.revAngle / 1000, y + this.revAngle / 1000 + this.sy * 3, 1, this.revAngle / 100 + this.sy / 10, 0.1, 0);




				this.visuals.free = false;

				*/
