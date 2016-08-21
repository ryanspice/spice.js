/* @flow */

import _IFace from '../interfaces/IFace';

interface ILegacyCore {

<<<<<<< HEAD
    create:Object;
=======
    create:object;
>>>>>>> origin/master
    getConnectionAttempts():mixed;
    client:mixed;
    ext:mixed;
    client:mixed;
    get:mixed;
    map:mixed;
    name:mixed;
    private:mixed;

}

export default class legacy_core<ILegacyCore> extends _IFace {


<<<<<<< HEAD
    constructor(map:WeakMap):void {
=======
	/** Pushes map to _IFace */

    constructor(map:weakmap):void {
>>>>>>> origin/master
        super(map);
    }

    /** Legacy functions.
    *       support for these functions is limited, and planned to be removed completely
    *        this space is primarally used for legacy funtionality
    *       dont use
    */

<<<<<<< HEAD
    create(a:Object ):Object {
=======
    create(a:object ):object {
>>>>>>> origin/master
        console.trace('	    create(a)');
        return this.Construct(a||{},this.client.room);
    }

<<<<<<< HEAD
    getCurrent():Object{
=======
    getCurrent():object{
>>>>>>> origin/master
    console.trace('SJS:legacy-core.js:	    getCurrent()');
    return this.client.update.state.current;
    }

    getConnection():string {
    console.trace('SJS:legacy-core.js:	    getConnection()');
    return this.ext.connect.offline;
    }

    getConnectionError():string {
    console.trace('SJS:legacy-core.js:	    getConnectionError()');
    return this.ext.connect.error;
    }

    getConnectionAttempts():string {
    console.trace('SJS:legacy-core.js:	    getConnectionAttempts()');
    return this.ext.connect.connectionAttempts;
    }

    getDelta():number {
    console.trace('SJS:legacy-core.js:	    getDelta()');
    return this.client.update.step.delta;
    }

    tracecount:number = 0;

    getScale():number {
        if (this.tracecount++<15)
            console.trace('SJS:legacy-core.js:	    getScale()');
    return this.client.scale;
    }

    getWidth():number {
    console.trace('SJS:legacy-core.js:	    getWidth()');
    return this.client.setWidth;
    }

    getHeight():number {
    console.trace('SJS:legacy-core.js:	    getHeight()');
    return this.client.setHeight;
    }

    getScaledWidth():number {
    console.trace('SJS:legacy-core.js:	    getScaledWidth()');
    return this.client.width;
    }

    getScaledHeight():number {
    console.trace('SJS:legacy-core.js:	    getScaledHeight()');
    return this.client.height;
    }

    setTitle(title:string ):string {
    console.trace('SJS:legacy-core.js:	     setTitle(title)');
    return (document.title==title?(document.title):(document.title=title));

    }

<<<<<<< HEAD
    setState(state:Object ):Object {
=======
    setState(state:object ):object {
>>>>>>> origin/master
    console.trace('SJS:legacy-core.js:	     setState(state)');
    return this.client.update.state.set(state,true);
    }

    toggleWidescreen():bool {
    console.trace('SJS:legacy-core.js:	    toggleWidescreen()');
     return this.client.update.fullscale = !this.client.update.fullscale;
    }

}
