const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".vue"]
    },
    entry: {
        //app = combined js file name
        app: path.join(__dirname, "main.js")
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                loader: ["vue-style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
        publicPath: "/dist"
    }
};