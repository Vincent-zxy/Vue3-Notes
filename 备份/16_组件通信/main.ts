// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"//引入
import emitter from './utils/emitter'

const app = createApp(App)
const pinia = createPinia()//创建

app.config.globalProperties.$emitter = emitter//挂载

app.use(pinia)//使用 / 安装
app.mount('#app')


