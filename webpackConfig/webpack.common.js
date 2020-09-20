const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ProgressPlugin,DefinePlugin} = require('webpack')

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


module.exports=
     {
        entry:{
            'index':path.resolve(__dirname,'../src/main.js'),
            // 'index':path.resolve(__dirname,'../src/main.js')
        },
        output:{
            // filename:!isDev?'[name]_[chunkhash:8].js':'[name].js',
            path:path.resolve(__dirname,'../dist'),
        },
        module:{
            rules:[
                {
                    test:/\.js$/i,
                    exclude:'/node_modules/',
                    use:{
                        loader:'babel-loader',
                    }
                },
                {
                    test:/\.(png|jpg|gif)$/i,
                    use:{
                        loader:'url-loader',
                        options:{
                            limit: 10 * 1024,  //10kb
                            outputPath:'images/',
                            name:'[name]_[hash:8].[ext]'
                            // fallback: require.resolve('responsive-loader'), //压缩图片
                            // quality: 70
                        }
                    }
                },
                {
                    test:/\.[svg|ttf|woff|eot]/i,
                    use:[{
                        loader:'file-loader',
                        options:{
                            outputPath:'font/'
                        }
                    }]
                }
            ]
        },
        plugins:[
            new ProgressPlugin(),
            new HtmlWebpackPlugin({
                title:'penguin web',
                template:path.resolve(__dirname,'../template.html'),
                meta: {
                    viewport: 'width=device-width'
                },
                filename:'index.html',
                //生成的文件名称 page文件夹下的index.html 最终生成dist/page/index.html
			    // filename: 'page/index.html',
                // chunks:['index2']   //引入的js文件，在入口文件中配置好
                //hash == true 时，打包编译后的HTML文件引入的js、css文件带有hash
			    // hash: true
            }),
            new DefinePlugin({
                // 值要求的是一个代码片段
                'API_BASE_URL':JSON.stringify('https://api.example.com')
            })
            // new Myplugin()
        ]
    }

