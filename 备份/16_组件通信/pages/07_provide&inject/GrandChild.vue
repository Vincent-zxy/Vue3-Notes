<template>
    <div class="boxs">
        孙子组件
         <hr/>
        <h4>父组件给的钱 {{ money }}</h4>
        <h4>父组件给的车 {{ car.brand }}——{{ car.price }}</h4>
        <button @click="updateMoney(5)">点击</button>
    </div>
</template>

<script setup lang="ts" name='GrandChild'>
    import {reactive, ref,inject} from 'vue'
    // let money=inject('money',999)//999是当inject获取不到money时用的 默认值
    let {money,updateMoney}=inject('money',{money:0,updateMoney:(param:number)=>{}})//999是当inject获取不到money时用的 默认值
    let car=inject('car',{brand:"未知",price:0})//这里给默认值是告诉TS car里面有brand和price防止TS飘红报错
</script>

<style scoped>
.boxs{
    background: pink;
    padding: 20px;
}
</style>