// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 引入路由器
import router from "./router"

const app = createApp(App)
app.use(router)//需要注意顺序
app.mount('#app')
