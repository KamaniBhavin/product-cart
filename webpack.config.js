const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = () => {
    return {
        mode: "development",
        devtool: "cheap-module-source-map",
        entry: {
            index: "/src/index.tsx"
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "[name].html",
                template: "/src/static/template.html",
            })
        ],
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    }
}