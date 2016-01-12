/**
 * Created by soraping on 15/12/31.
 */
var webpack = require('webpack');
var assetsViews = require('./assets-views');

var entrySet = {
    index:'./app/index.js'
};

//production config
module.exports = {
    target: 'web',
    entry: entrySet,
    output: {
        path: './bundle/js/apps/',
        filename: 'bundle.[name].js',
        chunkFilename:'chunk.[id].[name].[chunkhash].js',
        publicPath: "./bundle/js/apps/"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
        }]
    },
    resolve: {
        modulesDirectories: ['', 'node_modules','web_modules']
    },
    plugins: [
        assetsViews()
    ]
};
