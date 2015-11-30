var utils = utils || {};

utils.FNV_OFFSET_32 = 0x811c9dc5;

utils.randomHash = function(){

    utils.FNV_OFFSET_32 = '#'+Math.floor(Math.random()*16777215).toString(16);

}

utils.hashFnv32a = function (input) {

    var hval = utils.FNV_OFFSET_32;

    // Strips unicode bits, only the lower 8 bits of the values are used
    for (var i = 0; i < input.length; i++) {

        hval = hval ^ (input.charCodeAt(i) & 0xFF);

        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);

    }

    return hval >>> 0;
}

utils.toHex = function (val) {

    return ("0000000" + (val >>> 0).toString(16)).substr(-8);

}

function wait(t){

  return new Promise((r) => setTimeout(r, t));

}

window.wait = wait;

class Log { }

class Build {

    static build;

    static scriptloadtime;

    static uptime;

}

class StatisticsController {

    constructor(){

        this.logs = this.constructor.logs;

    }

    static _monitor = {

        count:0,

        logs:[]

    }

    static _details(type){

        type = type;

        switch (type)
        {

            default:

            return Object.keys(this.logs);

            break;

            case 'details':

            return Object.create(
              Object.getPrototypeOf(this.logs),
              Object.getOwnPropertyDescriptors(this.logs)
            );

            break;

            case 'entries':

            return Object.entries(this.logs);

            break;

            case 'values':

            return Object.values(this.logs);

            break;

        }

    }

    static get logs() { return this.monitor.logs; }

    static set logs(value) { this.monitor = value; }

    static get monitor() { return this._monitor; }

    static set monitor(value) { this._monitor = value; }

    get details() { return StatisticsController._details; }

    set details(value) { this._details = StatisticsController._details; }


}

export default class Statistics extends StatisticsController {

        constructor(){

            super();

        }

        async log(){

            let name = '';

            let curLog = this.logs;

            let newLog = {};

            let hashLog = {};

            let time = (new Date().getTime());

            let time2 = (new Date().getTime());

            let timeHash = this.count + time;

            timeHash = utils.hashFnv32a(timeHash.toString());

            if (typeof arguments[2] != 'undefined')
            {

                name = arguments[2];

                if (name=='build')
                    newLog = curLog[name] || new Build(name);
                else
                    newLog = curLog[name] || new Log(name);

                hashLog = newLog[ this.count + " " +arguments[0]] || new Log();

                hashLog = arguments[1];

                newLog[arguments[0]] = hashLog;

                curLog[name] = newLog;

            }
            else {

                name = arguments[0];

                if (name=='build')
                    newLog = curLog[name] || new Build(name);
                else
                    newLog = curLog[name] || new Log(name);

                hashLog = newLog[ this.count + " " +arguments[0]] || new Log();

                hashLog = arguments[1];

                newLog[arguments[0]] = hashLog;

                curLog[name] = newLog;

            }

            this.count++;

            this.logs = curLog;

        }

        async monitor(func,arg){

            let startTime = new Date().getTime();


            this.log("tStart",(startTime),func.name);

            await func(arg);

            let endTime = new Date().getTime();

            this.log("tEnd",(endTime),func.name);
            this.log("tDiff",(-startTime+endTime),func.name);

            return startTime - endTime;
        }

}
