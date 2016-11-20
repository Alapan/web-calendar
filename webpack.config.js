var webpack = require('webpack');
var path = require('path');

var DEST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    // bundles code
    entry: {
        app: SRC_DIR + '/app/index.js',
        vendor: [
            'bootstrap',
            'jquery'
        ]
    },
    output: {
        path: DEST_DIR + '/app',
        filename: 'bundle.js',
        // place to deploy the dist folder on public server
        publicPath: '/app/'
    },
    plugins: [
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
                 test: /\.json$/,
                 loader: 'json-loader'
             }, {
                 test: /\.txt$/,
                 loader: 'raw-loader'
             }, {
                 test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                 loader: 'url-loader?limit=10000'
             }, {
                 test: /\.(eot|ttf|wav|mp3)$/,
                 loader: 'file-loader'
             }
         ]
    }
};

module.exports = config;
