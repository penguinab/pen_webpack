const path = require('path')
const fs = require('fs')
const merge = require('webpack-merge').default
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniExtractCssPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const commonConfig= require('./webpack.common.js')
const { Template } = require('webpack')

module.exports=merge(commonConfig,{
    mode:'production',
    // mode:'development',
    devtool:'source-map',  //线上不保存源代码，但是有原始源代码map 错误栈
    output:{
        //前面添加路径，最后js生成在dist/js文件夹下
        filename:'js/[name]_[chunkhash:8].js'
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        },
        minimize:true,
        minimizer:[new TerserWebpackPlugin(),new OptimizeCssAssetsWebpackPlugin()]
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniExtractCssPlugin.loader,'css-loader']
            },
            {
                test:/\.less$/i,
                use:[
                    MiniExtractCssPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2, //确保在less文件里引用less文件还会走less-loader和postcss-loader
                            modules:true
                        }
                    },
                    {
                        loader:'less-loader',
                        // options:{
                        //     importLoaders:1  //确保在less文件里引用less文件还会走postcss-loader
                                                //上面css-loader用了这个就不能设置
                        // }
                    },
                    "postcss-loader"   //在postcss.config.js 配置并且记得.browserslistrc要配置
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            // patterns: [path.resolve(__dirname,'../public')]
            patterns: [
                {
                    from:path.resolve(__dirname,'../public'),
                    to:'public',
                    // to: '[path][name].[contenthash].[ext]',
                    // filter: async (resourcePath) => {
                    //     // const data = await fs.promises.readFile(resourcePath);
                    //     // const content = data.toString();
                    //     if (resourcePath.includes('template.html')) {
                    //       return false;
                    //     }
                    //     return true;
                    // },
                    // transformPath(targetPath, absolutePath) {
                    //     return targetPath;
                    // },
                }
            ],
        }),
        new MiniExtractCssPlugin({
            sourceMap:false,
            filename:'css/[name]_[contenthash].css',
            chunkFilename:'css/[name]_chunk_[contenthash].css',
        })
    ]
})