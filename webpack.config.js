var path = require('path');

require("babel-core/register");
require("babel-polyfill");

var env = process.argv.indexOf('--env') === -1 ? false : true;

/*
var spawn = require('child_process').spawn;

function run_cmd(cmd, args, callBack ) {

    var child = spawn(cmd, args);

    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });

    child.stdout.on('end', function() { callBack (resp) });

} // ()

run_cmd( "C:/Git/spice.js/logs/loggins.bat", ["a","b","c","d"], function(text) { console.log (text) });
*/
var source = {
    input:{

        js:'spice.js',

        html:'./src/index.html',

        path:'./src/',

    },

    output:{

        js:"spice.js",

        html:"../index.html"

    }

}

var webpack = require('webpack');

var webpackPlugins = [];

if (env===true)
{
    source.output.js = "spice.min.js";

    var webpackUglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

    var webpackHtmlPlugin = require('html-webpack-plugin');

    webpackPlugins.push(new webpackUglifyJsPlugin({ minimize: true }));

    webpackPlugins.push(new webpackHtmlPlugin({ filename: source.output.html, template:'./src/index.html' }));
}

module.exports = {

    entry: ["babel-polyfill", source.input.path + source.input.js],

    output: {

    path: __dirname+"/bld/vendor",

    filename: source.output.js

    },

    module: {

        loaders: [

            {

              loader: "babel-loader",

              include: [path.resolve(__dirname, "src")],

              test: /\.jsx?$/

          },

          {

            test: /\.scss$/,

            loaders: ["style", "css", "sass"]

          }

        ],

        sassLoader: {

          includePaths: [path.resolve(__dirname, "./css")]

        }

    },

    plugins: webpackPlugins

};
