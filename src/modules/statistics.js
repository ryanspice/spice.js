import utils from './utils.js';

import * as StatisticTypes from './statisticstypes.js';

class StatisticsController {

    static get logs() {

        return this.monitor.logs;

    }

    static set logs(value) {

        this.monitor = value;

    }

    static get monitor() {

        return this._monitor;

    }

    static set monitor(value) {

        this._monitor = value;

    }

    get count() {

        return this.monitor.count;

    }

    set count(value) {

        this.monitor.count = value;

    }

    get details() {

        return StatisticsController._details;

    }

    set details(value) {

        this._details = StatisticsController._details;

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

            case 'details':

            return Object.create(

              Object.getPrototypeOf(this.logs),

              Object.getOwnPropertyDescriptors(this.logs)

            );

            case 'entries':

            return Object.entries(this.logs);

            case 'values':

            return Object.values(this.logs);

        }

    }

    constructor(){

        this.logs = this.constructor.logs;

        this.count = 0;

    }

}

class Statistics extends StatisticsController {

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

            if (name=='compile')
                newLog = curLog[name] || new StatisticTypes.Compile(name);
            else
            if (name=='build')
                newLog = curLog[name] || new StatisticTypes.Build(name);
            else
            if (name=='loop')
                newLog = curLog[name] || new StatisticTypes.Loop(name);
            else
            if (name=='state')
                newLog = curLog[name] || new StatisticTypes.App(name);
            else
                newLog = curLog[name] || new StatisticTypes.Log(name);

            hashLog = newLog[ this.count + " " +arguments[0]] || new StatisticTypes.Log(name);

            hashLog = arguments[1];

            newLog[arguments[0]] = hashLog;

            curLog[name] = newLog;

        }
        else {

            name = arguments[0];

            if (name=='compile')
                newLog = curLog[name] || new StatisticTypes.Compile(name);
            else
            if (name=='build')
                newLog = curLog[name] || new StatisticTypes.Build(name);
            else
            if (name=='loop')
                newLog = curLog[name] || new StatisticTypes.Loop(name);
            else
            if (name=='state')
                newLog = curLog[name] || new StatisticTypes.App(name);
            else
                newLog = curLog[name] || new StatisticTypes.Log(name);

            hashLog = newLog[ this.count + " " +arguments[0]] || new StatisticTypes.Log(name);

            hashLog = arguments[1];

            newLog[arguments[0]] = hashLog;

            curLog[name] = newLog;

        }

        this.count++;

        this.logs = curLog;

    }

    async monitor(func,arg){

        let startTime = new Date().getTime();

        await func(arg);

        let endTime = new Date().getTime();

        this.log("time",(-startTime+endTime),func.name);

        return startTime - endTime;
    }

    convertArrayOfObjectsToCSV(args) {

        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;

        if (data == null || !data.length) {

            return null;

        }

        columnDelimiter = args.columnDelimiter || ',';

        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';

        result += keys.join(columnDelimiter);

        result += lineDelimiter;

        data.forEach(function(item) {

            ctr = 0;

            keys.forEach(function(key) {

                if (ctr > 0) result += columnDelimiter;

                result += item[key];

                ctr++;

            });

            result += lineDelimiter;

        });

        return result;
    }

    writeToCSV(name){

        var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

        logStream.write('Initial line...');

        logStream.end('this is the end line');

        let dataString = "";

        var data =this.convertArrayOfObjectsToCSV(SpiceJS.logs('values')[1]);

        //console.log(this.convertArrayOfObjectsToCSV({eh:'eh'}))

        var csvContent = "data:text/csv;charset=utf-8,";

        data.forEach(function(infoArray, index){

           dataString = infoArray.join(",");

           csvContent += index < data.length ? dataString+ "\n" : dataString;

        });

        var encodedUri = encodeURI(csvContent);

        var link = document.createElement("a");

        link.setAttribute("href", encodedUri);

        link.setAttribute("download", name+".csv");

        link.click();

    }

}

export default Statistics;
