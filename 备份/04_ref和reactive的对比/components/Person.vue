<template>
    <div class="Person_box">
        <h1>{{ reactCar.brand }}{{ reactCar.price }}  reactive 对象类型的响应式数据 </h1>
        <h1>{{ refCar.brand }}{{ refCar.price }}  ref  </h1>
        <button  @click="changePrice">修改reactCar 汽车价格</button>
        <button  @click="changeCar">修改reactCar 名称</button>
        <button  @click="changeCarRef">修改carRef</button>
        <hr>
        <h1>当前求和：{{sum}}</h1>
        <button  @click="changeSum">sum+1</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    // ref和reactive更新响应式数据时的不同  
    // reactive必须更改属性值，而不是更改整个对象的引用

    import { ref ,reactive } from 'vue'// 跟vue2的ref没有任何关系
    let sum=ref(0)
    let reactCar=reactive({brand:"reactCar",price:100})//用reactive包裹一下 原对象=> 响应式对象
    let refCar=ref({brand:"refCar",price:222})//用reactive包裹一下 原对象=> 响应式对象

    function changePrice(){
        reactCar.price +=10
    }
    // Vue - Official 插件 ->  dot Value 勾选 就自动显示  .value了 
    function changeCar(){
        // reactCar={brand:"奔驰",price:100}//会导致原始响应式引用丢失
        // reactCar=reactive({brand:"奔驰",price:100})//会导致原始响应式引用丢失
        // reactCar.brand='奔驰' //这个写法可以更新 因为只是替换属性值
        Object.assign(reactCar, {brand:"奔驰",price:1000})//这个写法可以更新 因为只是替换属性值 在不改变对象引用的情况下更新对象的属性
    }
    function changeCarRef(){
        refCar.value={brand:"兰博基尼",price:1000}//由于 .value 是它的内部值的代理，所以可以直接替换
    }
    function changeSum(){
        sum.value+=1
    }
</script>

<style >
    .Person_box{
        background: skyblue;
    }
    button{
        padding: 20px;
        margin: 5px;
        font-size: 20px;
    }
</style>