import { createRouter, createWebHistory } from "vue-router";//引入

import Home from "@/components/Home.vue";
import New from "@/components/New.vue";
import About from "@/components/About.vue";
import Detail from "@/components/Detail.vue";

const router = createRouter({
    history: createWebHistory(),//路由器工作模式
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/new",
            component: New,
            children: [
                {
                    name: 'xiang',
                    path: "detail",
                    // path: "detail/:id/:title/:content?",//子级不需要 /   /:content?  ?代表必要性 可传可不传
                    component: Detail,
                    // props: true,//只能将路由收到的params参数 作为props 传给组件  query不行的
                    props(route) { return route.query } //这样就可以支持 query传值方式了
                },
            ]
        },
        {
            path: "/about",
            component: About
        },
        {
            path: '/',
            redirect: "/home"//重定向
        }
    ]
})
export default router
