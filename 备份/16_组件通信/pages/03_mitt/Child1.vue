<template>
    <div class="box">
        子组件1
         <hr/>
        玩具：{{toy}}
        <button @click="handleFn">点击获取子组件传的值</button>
    </div>
</template>

<script setup name='Child'>
    import {ref} from 'vue'
    import emitter from '@/utils/emitter';
    let toy =ref('奥特曼')

    function handleFn(){
        // emitter.emit('send-toy',toy) 这样虽然也可以传过去 但是传的是整个ref对象 所以不推荐这么做
        emitter.emit('send-toy',toy.value)
    }
  
</script>

<style scoped>
.box{
    background: orange;
    padding: 20px;
}
</style>