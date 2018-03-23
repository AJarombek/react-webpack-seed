/**
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

const webpack = require("webpack");

exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        stats: "errors-only", // reduce the logging when running the dev server
        host,
        port,
        open: true,
        overlay: true, // Displays an error overlay in the browser when the code is broken
        hotOnly: true // Don't perform the refresh in browser if hot loading fails
    }
});

exports.hotModuleReplacement = () => ({
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,
                enforce: "pre",

                loader: "eslint-loader",
                options
            }
        ]
    }
});