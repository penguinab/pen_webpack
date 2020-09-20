const isHas = '666'.includes(2);

const p = new Promise((resolve, reject) => {
    console.log111(123);
    resolve(100);
});

class foo{
    sayHI(){
        console.log('hi hi hi ~~~~');
    }
}
let ffff=new foo()
console.log(isHas,'-----',ffff.sayHI());

const as= async()=>{
    await Promise.resolve(333)
}