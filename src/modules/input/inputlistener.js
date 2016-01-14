/**
*  Sets up input listeners.
* @access private
* @module
* @example
* SJSInputListener
*    [listener0,listener1,listener2,element,function]
*
*    let down = new SJSInputListener("pointerdown","MSPointerDown","mousedown",this.app.window,this.pointerdown);
*    let up = new SJSInputListener("pointerup","MSPointerUp","mouseup",this.app.window,this.pointerup);
*    let move = new SJSInputListener("pointermove","MSPointerMove","mousemove",this.app.window,this.pointermove);
*
*/

export default class InputListener {

    constructor(a,b,c,d,elm,evt){

        this.elm = elm;

        if(window.PointerEvent)
            this.msPointer(a,evt);
            else if (window.MSPointerEvent)
                this.Pointer(b,evt);
                else
                this.mousePointer(c,evt);

        if ( 'ontouchstart' in window || navigator.maxTouchPoints )
                this.touchPointer(d,evt);


    }

    /**
    * @method Microsoft Pointers
    */
    
    msPointer(e,evt){

        window.addEventListener(e,evt,false);

    }

    /**
    * @method Universal Pointers
    */
    
    Pointer(e,evt){

        window.addEventListener(e,evt,false);

    }

    /**
    * @method Touch Pointers
    */
    
    touchPointer(e,evt){

        window.addEventListener(e,evt,false);

    }

    /**
    * @method Mouse Pointers
    */
    
    mousePointer(e,evt){

        window.addEventListener(e,evt,false);

    }

}
