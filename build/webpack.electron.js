"use strict"

process.env.BABEL_ENV = "electron";
process.env.NODE_ENV = "production";

const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: "electron-main",
    entry: {
        main: path.join(__dirname, "../src/electron/main.js")
    },
    output: {
        filename: "[name].js",
        libraryTarget: "commonjs2",
        path: path.join(__dirname, "../dist/electron")
    },
    resolve: {
        extensions: ['js']
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        forceEnv: "electron"
                    }
                },
            }
        ]
    },
    node: {
        __dirname: process.env.NODE_ENV !== 'production',
        __filename: process.env.NODE_ENV !== 'production'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
}