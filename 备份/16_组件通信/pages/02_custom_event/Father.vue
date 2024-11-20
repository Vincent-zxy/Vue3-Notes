<template>
   <div>
        父组件
        <hr/>
        汽车：{{car}}
        <!-- event如何自定义位置的传参 -->
        <button @click="test('10',$event)">点击</button>
        <!-- 自定义事件 -->
        <Child :car="car" @send-toy="getToy"/>
   </div> 
</template>

<script setup name='Father'>
    import Child from './Child.vue'
    import {ref} from 'vue'
    
    let car =ref('奔驰')

    function test(value,e){
        console.log(value,e);
    }
    function getToy(value){
        console.log(value);
    }
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>