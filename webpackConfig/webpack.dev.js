const {HotModuleReplacementPlugin} = require('webpack')
const merge = require('webpack-merge').default
const commonConfig= require('./webpack.common.js')

module.exports=(env,argv)=>{
    return merge(commonConfig,{
        mode:'development',
        // devtool:'cheap-eval-module-source-map',
        devtool:'cheap-source-map',
        output:{
            //前面添加路径，最后js生成在dist/js文件夹下
            filename:'js/[name].js',
        },
        devServer:{
            // contentBase的路径是相对与webpack.config.js文件所在的目录的
            contentBase:'./public',
            // publicPath:'./aa',   
            // app.use(express.static('public',path.join(__dirname,'/static')));
            // publicPath 相当于public 
            // contentBase 相当于/static
            hot:true,
            hotOnly:true,    //不会以刷新页面作为热更新失败回退，一般开了好
            open:true,
            overlay: true
        },
        module:{
            rules:[
                {
                    test:/\.css$/i,
                    use:[
                        'style-loader','css-loader'
                    ]
                },
                {
                    test:/\.less$/i,
                    // use:[MiniExtractCssPlugin.loader,'css-loader','less-loader','postcss-loader']
                    use:[
                        'style-loader',
                        {
                            loader:'css-loader',
                            options:{
                                importLoaders:2, //确保在less文件里引用less文件还会走less-loader和postcss-loader
                                modules:true
                            }
                        },
                        {
                            loader:'less-loader',
                        }
                    ]
                }
            ]
        },
        // output的publicPath是用来给生成的静态资源路径添加前缀的；
        // devServer中的publicPath是用来本地服务拦截带publicPath开头的请求的；
        // contentBase是用来指定被访问html页面所在目录的；它唯一的作用就是指定服务器的根目录来引用静态文件。
        plugins:[
            new HotModuleReplacementPlugin()
        ]
    })
}

