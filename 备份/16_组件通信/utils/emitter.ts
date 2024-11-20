// npm i mitt  工具
// 工具都放在 utils 
import mitt from 'mitt'
const emitter = mitt()

emitter.on('oneFn', (value) => {
    console.log("全局都可以传参",value);
})

setTimeout(() => {
    emitter.emit('oneFn','aaa')
}, 1000)


export default emitter