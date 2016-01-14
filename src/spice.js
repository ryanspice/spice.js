
import _controller from './modules/controller.js'

 /**
  * SpiceJS is the main corns and beans, here you can control all aspects of the framework. The main class will instanciate and manage app canveses.
  * @access public
  * @example var Application = SpiceJS.create();
  *
  *        Application.OnLoad = function (self) {
  *
  *            self.Init("Example SpiceJS", 320, 720);
  *
  *            window.Application = this;
  *
  *        };
  *
  *    Application.main= {
  *
  *        name:"Example",
  *
  *        init:function() {
  *
  *            return true;
  *        },
  *
  *        update:function() {
  *
  *            return true;
  *        },
  *
  *        draw:function() {
  *
  *            return true;
  *        }
  *
  *    };
  *
  */

class SpiceJS extends _controller { };

 /**
  * Catch the Windows variable from microsoft devices.
  * @access public
  * @const {pbject}
  */

const Windows = window.Windows =  (typeof Windows=='undefined'?window:Windows);

/**
 * Export SpiceJS
 * @emits {SpiceJS} Emit the application controller.
 */

export default new SpiceJS();
