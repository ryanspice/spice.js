
/**
* _private
* @protected
*/

			var canvas;
			var gl;

			//
			// start
			//
			// Called when the canvas is created to get the ball rolling.
			// Figuratively, that is. There's nothing moving in this demo.
			//
			function start(canvas) {

			  canvas = document.getElementById("glcanvas");

			  initWebGL(canvas);      // Initialize the GL context

			  // Only continue if WebGL is available and working

			  if (gl) {

				  console.log(gl);

			    gl.clearColor(0.0, 0.0, 0.0, 0.0);  // Set clear color to black, fully opaque
			    gl.clearDepth(1.0);                 // Clear everything
			    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
			    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

				gl.clear(gl.COLOR_BUFFER_BIT);
				gl.viewport(0, 0, 159, 159);

			  }
			}

			//
			// initWebGL
			//
			// Initialize WebGL, returning the GL context or null if
			// WebGL isn't available or could not be initialized.
			//
			function initWebGL() {
			  gl = null;

			  try {
			    gl = canvas.getContext("experimental-webgl");
			  }
			  catch(e) {
			  }

			  // If we don't have a GL context, give up now

			  if (!gl) {
			    alert("Unable to initialize WebGL. Your browser may not support it.");
			  }
			}



			function webgl_detect(return_context)
			{
			    if (!!window.WebGLRenderingContext) {
			        var canvas = document.createElement("canvas"),
			             names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
			           context = false;

			        for(var i=0;i<4;i++) {
			            try {
			                context = canvas.getContext(names[i]);
			                if (context && typeof context.getParameter == "function") {
			                    // WebGL is enabled
			                    if (return_context) {
			                        // return WebGL object if the function's argument is present
			                        return {name:names[i], gl:context};
			                    }
			                    // else, return just true
			                    return true;
			                }
			            } catch(e) {}
			        }

			        // WebGL is supported, but disabled
			        return false;
			    }

			    // WebGL not supported
			    return false;
			}

const SGL = {};
SGL.start = window.start = start;
SGL.initWebGL = initWebGL;
SGL.webgl_detect = webgl_detect;
webgl_detect();
window.SGL = SGL;
