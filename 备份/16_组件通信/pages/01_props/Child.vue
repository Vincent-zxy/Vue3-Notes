<template>
    <div class="box">
        子组件
         <hr/>
        玩具：{{toy}}
        父给的：{{car}}
        数量{{num}}
        <button @click="handleFn">阿牛</button>
    </div>
</template>

<script setup name='Child'>
    import {ref} from 'vue'
    let toy =ref('奥特曼')

    let props= defineProps(['car','num','sendToy'])
    function handleFn(){
        props.sendToy(toy.value,2)
    }
  
</script>

<style scoped>
.box{
    background: orange;
    padding: 20px;
}
</style>