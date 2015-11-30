var path = require('path');

require("babel-core/register");
require("babel-polyfill");

var env = process.argv.indexOf('--env') === -1 ? false : true;

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

var webpackConfig = {

    entry: ["babel-polyfill", source.input.path + source.input.js],

    output: {

    path: __dirname+"/bld/vendor",

    filename: source.output.js

    },

    module: {

    loaders: [

    //    { test: path.join(__dirname, 'src/'), exclude: /node_modules/, loader: "babel-loader"}
        {
          loader: "babel-loader",

          // Skip any files outside of your project's `src` directory
          include: [
            path.resolve(__dirname, "src"),
          ],

          // Only run `.js` and `.jsx` files through Babel
          test: /\.jsx?$/,

          // Options to configure babel with
          query: {
            presets: ['es2015', 'stage-0']
          }
        }
    ]

    },

    plugins: webpackPlugins

};


module.exports = webpackConfig;
