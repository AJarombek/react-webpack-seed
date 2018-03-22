/**
 * The webpack configuration
 * @author Andrew Jarombek
 * @since 3/20/2018
 */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// Define paths for the entry point of the app and the output directory
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist/assets')
};

module.exports = {
    entry: {
        bundle: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    devtool: "#source-map",
    devServer: {
        stats: "errors-only", // reduce the logging when running the dev server
        host: process.env.HOST,
        port: process.env.PORT,
        open: true,
        overlay: true, // Displays an error overlay in the browser when the code is broken
        hotOnly: true // Don't perform the refresh in browser if hot loading fails
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};