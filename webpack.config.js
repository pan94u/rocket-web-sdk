const path = require('path')//引入内置path方便得到绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin')//引入模板组件
const WebpackDevServer = require('webpack-dev-server');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = false;

module.exports = {
    mode: isDev?'development':'production',//开发模式
    entry: {
        index: './src/index.ts'
    },//入口文件地址
    output: {
        path: path.resolve(__dirname, "./dist"),//出口文件，即打包后的文件存放地址
        filename: "[name].js",
        chunkFilename: "[name].[hash:8].js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'demo'),
            publicPath: '/'
        },
        compress: true,
        port: 9000,
        open: true,
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src/")
        },
        extensions: [".ts", ".js"] //配置文件引入时省略后缀名
    },
    module: {
        rules: [
            {
                test: /\.ts$/, //匹配规则 以ts结尾的文件
                loader: 'ts-loader', //对应文件采用ts-loader进行编译
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false
        })
    ],
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
    },
    target: ['web', 'es5'],
}