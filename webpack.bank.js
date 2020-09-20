const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ProgressPlugin, HotModuleReplacementPlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

class Myplugin {
    apply(compiler){
        compiler.hooks.emit.tap('Myplugin', compilation=>{
            // console.log('------------------------');
            // console.log(compilation['assets']);
            for (const name in compilation.assets) {
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source()
                    const withoutComments = contents.replace(/\/\*\*+\*\//g, '')
                    compilation.assets[name]={
                        source:()=>withoutComments,
                        size:()=>withoutComments.length
                    }
                }
            }
        })
    }
}


module.exports={
    mode:'development',
    entry:path.resolve(__dirname,'./src/main.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
        // publicPath:'/'
    },
    devtool:'cheap-module-source-map',
    devServer:{
        // contentBase的路径是相对与webpack.config.js文件所在的目录的
        contentBase:'./public',
        // publicPath:'./aa',   
        // app.use(express.static('public',path.join(__dirname,'/static')));
        // publicPath 相当于public 
        // contentBase 相当于/static
        hot:true,
        open:true,
        overlay: true
    },
    // output的publicPath是用来给生成的静态资源路径添加前缀的；
    // devServer中的publicPath是用来本地服务拦截带publicPath开头的请求的；
    // contentBase是用来指定被访问html页面所在目录的；它唯一的作用就是指定服务器的根目录来引用静态文件。
    module:{
        rules:[
            {
                test:/.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            },
            {
                test:/.png$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit: 10 * 1024,  //10kb
                    }
                }
            },
            // {
            //     test:/.html$/,
            //     use:{
            //         loader:'html-loader',
            //         options:{
            //             attributes:{
            //                 list: [
            //                     // All default supported tags and attributes
            //                     {
            //                       tag: 'img',
            //                       attribute: 'src',
            //                       type: 'src',
            //                     },
            //                     {
            //                       tag: 'a',
            //                       attribute: 'href',
            //                       type: 'src',
            //                     },
            //                   ],
            //             }
            //         }
            //     }
            // }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            title:'penguin web',
            template:path.resolve(__dirname,'./public/template.html'),
            meta: {
                viewport: 'width=device-width'
            },
            filename:'index.html'
        }),
        new HotModuleReplacementPlugin()
        // new CopyWebpackPlugin({
        //     patterns: [path.resolve(__dirname,'./public')]
        // }),
        // new Myplugin()
    ]
}