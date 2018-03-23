/**
 * Webpack parts to be included in the main webpack.config.js file
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Configure the devServer to be run in the development environment
 * @param host - the hostname to run the dev server on - defaults to localhost
 * @param port - the part number to run the dev server on - defaults to 8080
 * @returns {{devServer: {stats: string, host, port, open: boolean, overlay: boolean, hotOnly: boolean}}}
 */
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

/**
 * Use HotModuleReplacement in a development environment
 * @returns {{plugins: *[]}}
 */
exports.hotModuleReplacement = () => ({
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

/**
 * Lint JavaScript files with ESLint
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @param options - additional options to pass to the ESLint loader
 * @returns {{module: {rules: *[]}}}
 */
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

/**
 * Load a Sass stylesheet and compile it to CSS
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @returns {{module: {rules: *[]}}}
 */
exports.loadSass = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});

/**
 * Extract the CSS from being inlined with the JavaScript.  This Webpack config is used in production environments
 * to generate a separate CSS bundle
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @param use - specify which loaders to use
 * @returns {{module: {rules: *[]}, plugins: *}}
 */
exports.extractCSS = ({ include, exclude, use }) => {

    const plugin = new ExtractTextPlugin({
        filename: '[name].css'
    });

    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include,
                    exclude,
                    use: plugin.extract({
                        use,
                        fallback: "style-loader"
                    })
                }
            ]
        },
        plugins: plugin
    }
};