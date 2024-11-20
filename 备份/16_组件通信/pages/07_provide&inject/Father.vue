<template>
   <div>
        父组件
        <hr/>
        <h4>钱:{{ money }}</h4>
        <h4>car:{{ car.brand }}——{{ car.price }}</h4>
        <Child />
   </div>
</template>

<script setup name='Father'>
    import Child from './Child.vue'
    import {reactive, ref,provide} from 'vue'
    let money=ref(100)
    let car=reactive({
        brand:"奔驰",
        price:200
    })
    function updateMoney(val){
        money.value+=val
    }
    // provide('money',{money:money.value,updateMoney})// .value就代表取值 那么也就会丢失响应式
    provide('money',{money,updateMoney})
    provide('car',car)
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>