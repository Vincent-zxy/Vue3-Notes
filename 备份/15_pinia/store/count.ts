import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    actions: {//写action的用处是为了实现逻辑复用
        add(val: number) {
            console.log(this); //或者$state 都可以
            this.sum += val
        }
    },
    state() {
        return {
            sum: 1,
            address: "北京"
        }
    },
    getters: {
        // 做一些数据 简单处理
        bigSum(state) {
            return state.sum * 10
        }
    }
})