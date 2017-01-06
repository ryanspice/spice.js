
require("babel-core/register");

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

// html = new HtmlWebpackPlugin({ title: 'Webpack App' });

const env = process.argv.indexOf('--env') === -1 ? false : true;
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

    source.output.js = "spice.min.js";
/*
    source.plugins.push(new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: true
	      },
	      output: {
	        comments: false
	      },
	      sourceMap: true
	    })
	);
*/

	source.plugins.push(new ClosureCompilerPlugin({
          compiler: {
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            compilation_level: 'SIMPLE'
		},
          concurrency: 3,
	  }));

    //webpackPlugins.push(new webpackHtmlPlugin({ filename: source.output.html404, template:'./src/404.html' }));
}




module.exports = {
  context: '',
  entry: {
	js:['babel-polyfill', './src/spice.js']
  },
  output: {
    path: "./bld/",
    filename: source.output.js
  },
  module: {

    loaders: [


      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },


      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },


      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          // 'react-hot',
          'babel-loader'
        ]
      },




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
    contentBase: './bld',
      hot: true
   }
}
