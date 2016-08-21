<<<<<<< HEAD

require("babel-core/register");

const webpack = require('webpack');
const path = require('path');
=======
>>>>>>> origin/master

const HtmlWebpackPlugin = require('html-webpack-plugin');
// html = new HtmlWebpackPlugin({ title: 'Webpack App' });

<<<<<<< HEAD
const env = process.argv.indexOf('--env') === -1 ? false : true;
=======
function run_cmd(cmd, args, callBack ) {

    var child = spawn(cmd, args);

    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });

    child.stdout.on('end', function() { callBack (resp) });

} // ()

run_cmd( "C:/Git/spice.js/logs/loggins.bat", ["a","b","c","d"], function(text) { console.log (text) });
*/

require("babel-core/register");

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// html = new HtmlWebpackPlugin({ title: 'Webpack App' });

const env = process.argv.indexOf('--env') === -1 ? false : true;

>>>>>>> origin/master
const source = {
    input:{
        js:'./spice.js',
        html:'./src/index.html',
        path:'./src/',
    },

    output:{
        js:"spice.js",
        html:"../index.html",
        html404:"../404.html"
    },
	plugins:[
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      minChunks: Infinity,
	      filename: 'vendor.js'
	    }),
	    new webpack.LoaderOptionsPlugin({
	      minimize: true,
	      debug: false
	    })
	]

}

if (env===true)
{
<<<<<<< HEAD

    source.output.js = "app.min.js";

    source.plugins.push(new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: true
	      },
	      output: {
	        comments: false
	      },
	      sourceMap: false
	    })
	);

    source.plugins.push(new webpack.optimize.DedupePlugin() );

    //webpackPlugins.push(new webpackHtmlPlugin({ filename: source.output.html404, template:'./src/404.html' }));
}




=======

    source.output.js = "spice.min.js";

    source.plugins.push(new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: true
	      },
	      output: {
	        comments: false
	      },
	      sourceMap: false
	    })
	);

    source.plugins.push(new webpack.optimize.DedupePlugin() );
//    webpackPlugins.push(new webpackHtmlPlugin({ filename: source.output.html, template:'./src/index.html' }));
    //webpackPlugins.push(new webpackHtmlPlugin({ filename: source.output.html404, template:'./src/404.html' }));
}

>>>>>>> origin/master
module.exports = {
  context: '',
  entry: {
	js:['babel-polyfill', './src/spice.js']
  },
  output: {
<<<<<<< HEAD
    path: "./bld/",
    filename: source.output.js
  },
  module: {

    loaders: [


=======
    path: "./bld/vendor",
    filename: source.output.js
  },
  module: {
    loaders: [
>>>>>>> origin/master
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
<<<<<<< HEAD


=======
>>>>>>> origin/master
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
<<<<<<< HEAD


=======
>>>>>>> origin/master
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          // 'react-hot',
          'babel-loader'
        ]
      },
<<<<<<< HEAD



=======
>>>>>>> origin/master
    ],
  },
  resolve: {
    extensions: ['.js'],
	  plugins: [],
	  modules: [
	     './src',
	     'node_modules'
     ]
  },
  plugins:source.plugins,
  devServer: {
<<<<<<< HEAD
    contentBase: './bld',
      hot: true
=======
    contentBase: './bld'
     // hot: true
>>>>>>> origin/master
   }
}
