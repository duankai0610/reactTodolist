const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const PATH = {
    app:path.join(__dirname,"../src/main.js"),
    build:path.join(__dirname,"../dist")
}

module.exports = {
    //入口文件
    entry:{
        app:PATH.app
    },
    //出口文件
    output:{
        filename:"[name].js",
        path:PATH.build
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./public/index.html",
            title:"React"
        }),
        //重新生成dist文件目录
        new CleanWebpackPlugin()
    ],
    resolve:{
        //文件引入的优先级
        extensions:[".js",".jsx",".json",".css"],
        //别名的配置
        alias:{}
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)/,
                loader:"babel-loader",
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:/\.(jpg|gif|png|svg)$/,
                exclude:path.join(__dirname,"../node_modules"),
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048,
                        name:"img/[name].[hash:8].[ext]"
                    }
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                exclude:path.join(__dirname,"../node_modules"),
                use:{
                    loader:"url-loader",
                    options:{
                        name:"iconfont/[name]:[hash:8].[ext]"
                    }
                }
            }
        ]
    }

}



