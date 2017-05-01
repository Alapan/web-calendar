var webpack = require('webpack');
var path = require('path');

var BundleTracker = require('webpack-bundle-tracker');

var DEST_DIR = path.resolve(__dirname, 'web_calendar_ui/static/build');
var SRC_DIR = path.resolve(__dirname, 'web_calendar_ui/static/js');

var config = {
    // bundles code
    entry: {
        index: SRC_DIR + '/index.js',
        event_details: SRC_DIR + '/event_details.js',
        vendor: [
            'bootstrap',
            'jquery',
            'react-masonry-component'
        ]
    },
    devtool: 'source-map',
    output: {
        path: DEST_DIR + '/js',
        filename: '[name].js',
        // place to deploy the dist folder on public server
        publicPath: '/build/'
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        // Minify assets.
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'node_modules'
        ]
    },
    // transpiling
    module: {
         loaders: [
             {
                 // test key tells webpack which files to look at regarding loader in source directory
                 test: /\.js?/,
                 include: SRC_DIR,
                 loader: 'babel-loader',
                 query: {
                     presets: ['react', 'es2015', 'stage-2']
                 }
             },
             {
                 test: /\.html$/,
                 loader: "html"
             },
             {
                 test: /\.css$/,
                 loader: "style-loader!css-loader"
             },
             {
                 test: /\.scss$/,
                 loaders: ['style', 'css', 'sass']
             },
             {
                 test: /\.json$/,
                 loader: 'json-loader'
             },
             {
                 test: /\.txt$/,
                 loader: 'raw-loader'
             },
             {
                 test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                 loader: 'url-loader?limit=10000'
             },
             {
                 test: /\.(eot|ttf|wav|mp3)$/,
                 loader: 'file-loader'
             },
             {
                 test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                 loader: 'imports?define=>false&this=>window'
             }
         ]
    }
};

module.exports = config;
