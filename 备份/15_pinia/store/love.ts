import { defineStore } from "pinia";
import { nanoid } from 'nanoid'
import axios from 'axios'
// 选项式
export const useLoveStore = defineStore('love', {
    actions: {

    },
    state() {
        return {
            list: [
                { id: 1, title: "卡世界爱看的教案上刊登" },
                { id: 2, title: "的萨达十大撒旦" },
                { id: 3, title: "第三个第四个的父亲问我驱散" },
            ]
        }
    }
})
// 组合式  只是演示并不生效
// import { reactive } from "vue";
// export const useLoveStore = defineStore('love', () => {
//     const list = reactive([
//         { id: 1, title: "卡世界爱看的教案上刊登" },
//         { id: 2, title: "的萨达十大撒旦" },
//         { id: 3, title: "第三个第四个的父亲问我驱散" },
//     ])
//     async function get() {
//         // 连续解构赋值 + 重命名
//         let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//         list.push({  // 这样写是不行的  因为list如果是基本数据是可以直接更改的，但是方法是不行的
//             id: 1,//number  这里应该是nanoid（）只是ts报错所以暂且  演示一下
//             title
//         })
//     }
// })