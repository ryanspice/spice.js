window.position = {x:0,y:0};
window.vel = {x:0,y:0};
window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
	e.gamepad.index, e.gamepad.id,
	e.gamepad.buttons.length, e.gamepad.axes.length);
});
function buttonPressed(b) {
  if (typeof(b) == "object") {
	return b.pressed;
  }
  return b == 1.0;
}

export default ()=>{

	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	if (!gamepads) {
	  return;
	}

	var gp = gamepads[0];

	var trigger_left = false;
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var a = false;
	var y = false;
	var x = false;
	var b = false;
	if (gp)
	for(var i = gp.buttons.length; i>0; i--) {

		if (buttonPressed(gp.buttons[i])){

			//console.log(i,gp.buttons[i]);
			/*
			if (new Date().getTime()%2 == 0){
			xhttp.onreadystatechange = function() {
			  if (xhttp.readyState == 4 && xhttp.status == 200) {
				//window.position.x = Math.round(xhttp.responseText) + 25;
				eval(xhttp.responseText);
			  }
			};
			var request = "file.php?x="+Math.round(this.position.x);
			request += "&y=" + Math.round(this.position.y);
			request += "&velx=" + Math.round(this.vel.x);
			request += "&vely=" + Math.round(this.vel.y);
			xhttp.open("GET", request, true);
			xhttp.send();

		}*/

			switch(i){

				case 1:
					a = true;
				break;
				case 2:
					y = true;
				break;
				case 3:
					x = true;
				break;
				case 6:
					b = true;
				break;


				case 4:
					trigger_left= true;
				break;


				case 14:
					left = true;
				break;
				case 15:
					right = true;
				break;
				case 12:
					up = true;
				break;
				case 13:
					down = true;
				break;

			}

		}

	}
	return {
		gp:gp,
		trigger_left:trigger_left,
		left:left,
		right:right,
		up:up,
		down:down,
		a:a,
		y:y,
		x:x,
		b:b
	};

	/*
	if (buttonPressed(gp.buttons[0])) {
	  console.log(gp.buttons[0]);
	} else if (buttonPressed(gp.buttons[2])) {
	  console.log(gp.buttons[2]);
	}
	if (buttonPressed(gp.buttons[1])) {
	  console.log(gp.buttons[1]);
	} else if (buttonPressed(gp.buttons[3])) {
	  console.log(gp.buttons[3]);
	  console.log(gp);
	}

	if (buttonPressed(gp.axes[0])) {
	  console.log(gp.axes[0]);
	} else if (buttonPressed(gp.axes[2])) {
	  console.log(gp.axes[2]);
	}
	if (buttonPressed(gp.axes[1])) {
	  console.log(gp.axes[1]);
	} else if (buttonPressed(gp.axes[3])) {
	  console.log(gp.axes[3]);

	}

*/


};
