<template>
   <div>
        父组件
        <hr/>
        汽车：{{car}}
        数量：{{num}}
        <button @click="test">点击</button>
        <Child :car="car" :num="num" :sendToy="getToy"/>
   </div>
</template>

<script setup name='Father'>
    import Child from './Child.vue'
    import {ref} from 'vue'
    
    let car =ref('奔驰')
    let num =ref(10)
    function getToy(value,n){
        console.log(value,n);
        car.value=value
        num.value+=n
    }
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>