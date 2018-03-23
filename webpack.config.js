/**
 * The webpack configuration
 * @author Andrew Jarombek
 * @since 3/20/2018
 */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const parts = require("./webpack.parts");

// Define paths for the entry point of the app and the output directory
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist/assets')
};

const commonConfig = merge([
    {
        entry: {
            bundle: PATHS.app
        },
        output: {
            path: PATHS.build,
            filename: "[name].js",
            sourceMapFilename: "[name].map"
        },
        devtool: "#source-map",
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
            })
        ]
    },
    parts.lintJavaScript({ options: {emitWarning: true}}),
    parts.loadSass()
]);

const productionConfig = merge([
    parts.extractCSS({ use: ["css-loader", "sass-loader"]})
]);

const developmentConfig = merge([
    {
        performance: {hints: false}
    },
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.hotModuleReplacement()
]);

module.exports = (env) => {
    if (env === "production") {
        return merge(commonConfig, productionConfig);
    } else {
        return merge(commonConfig, developmentConfig);
    }
};