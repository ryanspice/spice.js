

export class ScrollControl  {

	constructor(app) {


		window.onresize = this.resize;

		window.onscroll = this.scroll;

		this.mapInView = false;

		window.ScrollControl = this;

		setTimeout(this.resize, 30)

	}

	gMaps() {

		let t = document.getElementById('maps');
		if (t)
		if (window.ScrollControl.elementInViewport(t))
		{

			if (window.ScrollControl.mapInView == false)
				{
					window.ScrollControl.mapInView = true;
					var mapsHtml="";
					mapsHtml += "				<iframe style=\"float:left;border-radius: 7px;margin:0px auto;width:100%;\" height=\"200\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https:\/\/maps.google.ca\/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Toronto,+ON,+Canada&amp;aq=0&amp;oq=Toronto+Cana&amp;sll=43.656877,-79.32085&amp;sspn=0.873329,2.113495&amp;ie=UTF8&amp;hq=&amp;hnear=Toronto,+Toronto+Division,+Ontario&amp;ll=43.653226,-79.383184&amp;spn=61.734526,135.263672&amp;t=m&amp;z=4&amp;output=embed\"><\/iframe>";
					mapsHtml += "				<br>";
					mapsHtml += "				<a href=\"https:\/\/maps.google.ca\/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Toronto,+ON,+Canada&amp;aq=0&amp;oq=Toronto+Cana&amp;sll=43.656877,-79.32085&amp;sspn=0.873329,2.113495&amp;ie=UTF8&amp;hq=&amp;hnear=Toronto,+Toronto+Division,+Ontario&amp;ll=43.653226,-79.383184&amp;spn=61.734526,135.263672&amp;t=m&amp;z=4\"><\/a>";
					mapsHtml += "				<br>";
					setInnerHTML(t,mapsHtml);
					//t.innerHTML = mapsHtml;
				}
		}

	}

	elementInViewport(el) {

	  var top = el.offsetTop;
	  var left = el.offsetLeft;
	  var width = el.offsetWidth;
	  var height = el.offsetHeight;

	  while(el.offsetParent) {
	    el = el.offsetParent;
	    top += el.offsetTop;
	    left += el.offsetLeft;
	  }

	  return (
	    top >= window.pageYOffset &&
	    left >= window.pageXOffset &&
	    (top + height) <= (window.pageYOffset + window.innerHeight) &&
	    (left + width) <= (window.pageXOffset + window.innerWidth)
	  );

	}

	resize(e) {

		window.ScrollControl.gMaps();

		var App = window.ScrollControl.app;
		var w = window.innerWidth - 20;
		var h = window.innerHeight / 1.15;

		if (typeof App == 'undefined')
			return;

		App.client.setWidth = App.w = App.width = App.setWidth = w;
		App.client.setHeight = App.h = App.height = App.setHeight = h;

		if (window.innerWidth < 370) {

			document.body.style.marginTop = "5%";

		} else
		if (window.innerWidth < 440) {

			document.getElementById('movedown').style.paddingTop = "135px";
			//document.body.style.marginTop = "15%";

		} else {

			document.body.style.marginTop = "0";

		}
	}

	scroll(e) {

		window.ScrollControl.gMaps();

		if (window.pageYOffset != undefined) {

			this.x = pageXOffset;
			this.y = pageYOffset;

			return [pageXOffset, pageYOffset];
		} else {

			let sx, sy, d = document,
				r = d.documentElement,
				b = d.body;
			sx = r.scrollLeft || b.scrollLeft || 0;

			sy = r.scrollTop || b.scrollTop || 0;

			this.x = sx;
			this.y = sy;

			return [sx, sy];

		}

	}

}




export {ScrollControl};
