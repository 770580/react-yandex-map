var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './dist/src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: 'dist/public',
        filename: 'bundle.js'
    },
    rules: [
      {
        test: /\.js$/,
        include: [
            path.resolve(__dirname, "dist/src")
        ],
        exclude: [
            path.resolve(__dirname, "node_modules/")
        ],
        query: {
            plugins: ['transform-decorators-legacy',
                      'transform-runtime',
                      'transform-object-rest-spread',
                      'transform-react-constant-elements',
                      'transform-class-properties'],
            presets: [['es2015', {modules: false}], 'latest', 'react']
        },
        loader: 'babel-loader',
    },
    ]
}