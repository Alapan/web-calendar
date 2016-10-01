var webpack = require('webpack');
var path = require('path');

var DEST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    // bundles code
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DEST_DIR + '/app',
        filename: 'bundle.js',
        // place to deploy the dist folder on public server
        publicPath: '/app/'
    },
    // transpiling
    modules: {
         loaders: [
             {
                 // test key tells webpack which files to look at regarding loader in source directory
                 test: /\.js?/,
                 include: SRC_DIR,
                 loader: 'babel-loader',
                 query: {
                     presets: ['react', 'es2015', 'stage-2']
                 }
             }
         ]
    }
};

module.exports = config;
