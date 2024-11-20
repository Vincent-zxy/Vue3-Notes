// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"//引入

const app = createApp(App)
const pinia = createPinia()//创建
app.use(pinia)//使用 / 安装
app.mount('#app')
