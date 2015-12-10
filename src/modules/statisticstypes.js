
class Log {

    constructor(id){

        this.id = id || 0;

    }

    static get time() {

        return (this._time);

    }

    static set time(value) {

        return (this._time = value);

    }

    static get id() {

        return (this._id);

    }

    static set id(value) {

        return (this._id = value);

    }

}

class Loop extends Log  {

    constructor(){

        super();

    }

}

class Compile extends Log  {

    constructor(){

        super();

    }

}

class App {

    static get fps() {

        return (this._fps);

    }

    static set fps(value) {

        return (this._fps = value);

    }

    static get scale() {

        return (this._scale);

    }

    static set scale(value) {

        return (this._scale = value);

    }

}

class Build {

    static get build() {

        return (this._build);

    }

    static set build(value) {

         return (this._build = value);

     }

    static get scriptloadtime() {

        return (this._scriptloadtime);

    }

    static set scriptloadtime(value) {

        return (this._scriptloadtime = value);

    }

    static get uptime() {

        return (this._uptime);

    }

    static set uptime(value) {

        return (this._uptime = value);

    }

}

export {Log, Loop, Compile, App, Build};
