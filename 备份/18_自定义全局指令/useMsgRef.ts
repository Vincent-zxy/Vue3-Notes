import { customRef } from "vue";

export default function (initVal: string, delay: number) {
    let timer: NodeJS.Timeout | number
    // track 跟踪  trigger 触发
    let msg = customRef((track, trigger) => {
        return {
            get() {
                track()//告诉Vue 数据msg很重要 你要对msg进行持续关注 一旦msg变化就更新页面
                return initVal
            },
            set(value) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    initVal = value
                    trigger()//通知Vue数据msg变化了
                }, delay);
            }
        }
    })
    return { msg }
}