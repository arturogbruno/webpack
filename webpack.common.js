const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Injects styles into DOM
                    "css-loader",   // 2. Turns css into JS
                    "sass-loader"   // 1. Turns sass into css
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })]
};
