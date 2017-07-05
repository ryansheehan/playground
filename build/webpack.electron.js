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
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
}