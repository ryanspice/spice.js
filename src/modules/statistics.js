import utils from './utils.js';

import * as StatisticTypes from './statisticstypes.js';


/** This module is designed to monitor functions.
* @module
* @public
* @example
*   Statistics.monitor(function () {
*
*       _this.name = "scriptloadtime";
*
*   }).then(function () {
*
*           _this.name = "scriptloadtime";
*           _this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

*           _this.statistics.monitor(function () {
*
*                   _this.name = "scriptloadtime2";
*
*               }).then(function () {
*
*                       _this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');
*
*                   });
*       });
*/

class Statistics extends StatisticTypes.    StatisticsController {

  /** Async Monitor of a function, returns duration.
   * @type {Promise}
   * @param {Function} func - Function to monitor
   * @param {Arguments} arg - Arguments to pass
   * @return {Number} as duration.
   */

    async monitor(func,arg){

        let startTime = new Date().getTime();

        await func(arg);

        let endTime = new Date().getTime();

        this.log("time",(-startTime+endTime),func.name);

        return startTime - endTime;
    }

    /** Async
     * @private
     */

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

    /** watch //to come
     * @private
     */

     static watch(v){

         let w = v;

     }

    /**
    * Converts and array of objects to CSV.
    * @module
    * @access private
    */

    static convertArrayOfObjectsToCSV(args) {

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

    /**
    * Converts and array of objects to CSV.
    * @module
    * @access private
    */

    static writeToCSV(name){

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
