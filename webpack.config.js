const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src-vanilla-js/index.ts", // bundle"s entry point
    output: {
        path: path.resolve(__dirname, "webpack-dist"), // output directory
        filename: "[name].js", // name of the generated bundle
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.webpack.json"
                }
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src-vanilla-js/index.html",
            inject: "body",
        }),
        new webpack.DefinePlugin({
            'process.env.HELLO_WORLD_CONTRACT_ADDRESS': JSON.stringify(process.env.HELLO_WORLD_CONTRACT_ADDRESS),
            'process.env.COUNTER_CONTRACT_ADDRESS': JSON.stringify(process.env.COUNTER_CONTRACT_ADDRESS),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
        }),
    ],

    watch: true,

    devServer: {
        historyApiFallback: true,
        port: 9000,
    }
};