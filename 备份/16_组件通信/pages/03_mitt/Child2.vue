<template>
    <div class="box">
        子组件2
         <hr/>
        玩具：{{computer}}
        子组件1：{{toy}}
        <button @click="changeFn">点击传过来的值</button>
    </div>
</template>

<script setup name='Child'>
    import {onUnmounted, ref} from 'vue'
    import emitter from '@/utils/emitter';
    let computer =ref('电脑')
    let toy =ref('低配乐高')

    emitter.on('send-toy',(value)=>{
        console.log('send-toy',value);
        toy.value=value
    })
    
    // 组件卸载时解绑 算是一个小优化
    onUnmounted(()=>{
        emitter.off('send-toy')
    })
</script>

<style scoped>
.box{
    background: #11ad0ce8;
    padding: 20px;
}
</style>