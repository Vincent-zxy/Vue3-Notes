<template>
    <div class="box">
        子组件1
         <hr/>
        <h4>玩具:{{toy}}</h4>
        <h4>书籍:{{book}}</h4>
        <button @click="delHouse($parent)">点击干掉父组件房产</button>
    </div>
</template>

<script setup name='Child'>
    import {ref,getCurrentInstance } from 'vue'
    let toy=ref('奥特曼')
    let book=ref(3)

    // 需要把数据抛出
    defineExpose({toy,book})

    function delHouse(p){
        console.log(p);//proxy
        p.house-=1
    }
</script>

<style scoped>
.box{
    background: orange;
    padding: 20px;
}
</style>