const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = webpackMerge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                exclude:path.join(__dirname,"../node_modules"),
                use:ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback: 'style-loader',
                })

            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})

module.exports = config;