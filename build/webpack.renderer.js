"use strict"

process.env.BABEL_ENV = "renderer";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: "electron-renderer",
    entry: {
        main: path.join(__dirname, "../src/renderer/index.js")
    },
    output: {
        filename: "index.js",
        libraryTarget: "commonjs2",
        path: path.join(__dirname, "../dist/electron")
    },
    resolve: {
    extensions: ['.js', '.json']
  },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },                
            },
            {
                test: /.json$/,
                use: "json-loader"
            },
            {
                test: /.html$/,
                use: "vue-html-loader"
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../src/renderer/index.html"),
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            },
        })
    ]
}