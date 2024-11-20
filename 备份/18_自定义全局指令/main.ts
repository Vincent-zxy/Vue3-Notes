// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'
// 引入路由器

const app = createApp(App)
app.component('Hello', Hello)//定义全局组件

// 全局属性
app.config.globalProperties.a = 999 //其他文件使用 会被ts检测飘红  官方表明globalProperties !==  V2的 Vue.protypes.x=999
declare module 'vue' {
    interface ComponentCustomProperties {
        a: number
    }
}
// 自定义 全局指令
app.directive('beauty', (element, { value }) => {
    element.innerText += value
    element.style.color = 'green'
    element.style.backgroundColor = 'yellow'
})
app.mount('#app')
