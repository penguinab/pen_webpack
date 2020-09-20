import createHeading from './heading.js'
import style from './main.less'  //cssloader 配置了modules:true
import icon from './icon.png'
import './font/iconfont.css'

import background from './better.png'
import createEditor from './editor'

// import footerHtml from './footer.html'
// document.write(footerHtml)
let div = document.createElement('div')
div.classList.add('iconfont')
div.classList.add('icondraw')
document.body.appendChild(div)

console.log(API_BASE_URL);  //definePlugin注入全局变量
const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
img.classList.add(style.avatar) ////cssloader 配置了modules:true 实现css模块化
document.body.appendChild(img)

// const render = el => {
//     el.innerHTML = ''
  
//     const heading = createHeading()
//     el.append(heading)
  
//     const img = new Image()
//     img.src = icon
//     el.append(img)
// }

// render(document.querySelector('#root'))


let PromiseA=Promise.resolve(111)

const p = new Promise((resolve, reject) => {
    console.log(123);
    resolve(100);
});
const isHas = '666'.includes(2);

class foo{
    sayHI(){
        console.log('hi hi hi ~~~~');
    }
}
let ffff=new foo()
console.log(isHas,'-----',ffff.sayHI());

// if(module.hot){
//     module.hot.accept('./heading.js', () => {
//         console.log(1111);
//         // render(document.querySelector('#root'))
//     })
//     let hotEditor = editor
//     module.hot.accept('./editor.js',()=>{
//         console.log(22222);
//         // 当 editor.js 更新，自动执行此函数
//         // 临时记录编辑器内容
//         const value = hotEditor.innerHTML
//         // 移除更新前的元素
//         document.body.removeChild(hotEditor)
//         // 创建新的编辑器
//         // 此时 createEditor 已经是更新过后的函数了
//         hotEditor = createEditor()
//         // 还原编辑器内容
//         hotEditor.innerHTML = value
//         // 追加到页面
//         document.body.appendChild(hotEditor)
//     })
//     module.hot.accept('./better.png', () => {
//         console.log(3333);
//         // 当 better.png 更新后执行
//         // 重写设置 src 会触发图片元素重新加载，从而局部更新图片
//         img.src = background
//     })
//     // style-loader 内部自动处理更新样式，所以不需要手动处理样式模块
// }
