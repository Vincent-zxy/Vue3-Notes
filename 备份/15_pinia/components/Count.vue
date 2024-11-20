<template>
    <div class="Count">
        <h2>当前求和为： {{ sum }}</h2>
        <h2>当前地址： {{ address }}</h2>
        <h2>数据处理后： {{ bigSum }}</h2>
        相加的数：
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup name='Count'>
    import {ref,toRefs,reactive} from 'vue'
    import { useCountStore } from '@/store/count';
    import { storeToRefs } from 'pinia';
    const countStore=useCountStore()
    // const {sum,address}=toRefs(countStore)//代价大  不好
    const {sum,address,bigSum}=storeToRefs(countStore)//以后从store里解构 就用这个  只有数据行 方法不行

    let n = ref(1)
    function add(){
        // 第一种  pinia直接可以改 符合直觉的状态管理工具  vuex这么写不可以的
        // countStore.sum+=n.value  

        // 第二种  用于改多种数据 （devtool插件开启时间线 里只会走一次patch  而不是像上面那样走多个 mutation，所以就是一种优化）
        // countStore.$patch({
        //     sum:20,
        //     address:"吉林"
        // })

        // 第三种  定义action方法  add
        countStore.add(n.value)
    }
    function minus(){
        countStore.sum-=n.value
    }

    // let obj=reactive({
    //     a:1,
    //     b:2,
    //     c:ref(3)
    // })
    // console.log("@@@",obj.a,obj.b,obj.c);//reactive 会 自动解析 ref  所以打印c 不需要 obj.c.value

</script>

<style scoped>
.Count{
    background: skyblue;
    padding: 10px;
    border-radius: 20px;
}
select,button{
    padding: 10px;
    margin: 10px;
}
</style>