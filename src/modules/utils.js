var utils = utils || {};

utils.FNV_OFFSET_32 = 0x811c9dc5;

utils.randomHash = function(){

    utils.FNV_OFFSET_32 = '#'+Math.floor(Math.random()*16777215).toString(16);

};

utils.hashFnv32a = function (input) {

    var hval = utils.FNV_OFFSET_32;

    // Strips unicode bits, only the lower 8 bits of the values are used

    for (var i = 0; i < input.length; i++) {

        hval = hval ^ (input.charCodeAt(i) & 0xFF);

        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);

    }

    return hval >>> 0;
};

utils.toHex = function (val) {


    return ("0000000" + (val >>> 0).toString(16)).substr(-8);

};

function wait(t){

    return new Promise((r) => setTimeout(r, t));

}

//Fill animation frame

utils.requestAnimationFrame = function(){

        if (!Date.now)
            Date.now = function() { return new Date().getTime(); };

        var vendors = ['webkit', 'moz'];

        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {

            var vp = vendors[i];

            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];

            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);

        };

        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {

            var lastTime = 0;

            window.requestAnimationFrame = function(callback) {

                var now = Date.now();

                var nextTime = Math.max(lastTime + 16, now);

                return setTimeout(function() { callback(lastTime = nextTime); },nextTime - now);
            };

            window.cancelAnimationFrame = clearTimeout;

        };

}

utils.loadExternalJS = function(scripts) {

    !function(e, t, r) {

        function n() {

            for (; d[0] && "loaded" == d[0][f];)
                c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i);

        };

        for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();)
            a = e.createElement(t), "" in i ? (a.async = !1, e.head.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s;

    }(document, "script", scripts);

}

/**
* Converts and array of objects to CSV.
* @module
* @access private
*/

utils.convertArrayOfObjectsToCSV = function(args) {

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

utils.writeToCSV = function(name){

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

window.wait = wait;

window.utils = utils;









export default window.utils;
