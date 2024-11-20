<template>
    <div class="Person_box">
        <h1>{{ person.name }}</h1>
        <h1>{{ person.age }}</h1>
        <h1>{{ person.car.c1 }}、{{ person.car.c2 }}</h1>
        <button @click="changeName">名字</button>
        <button @click="changeAge">年龄</button>
        <button @click="changeC1">第一台</button>
        <button @click="changeC2">第二台</button>
        <button @click="changeCar">整个车</button>
        <hr>
    </div>
</template>
<script lang="ts" setup name="Person2">
    // watch 只能监视4种数据 官方4种  网上是5种
    // ref基本类型一种、 ref对象类型一种、 reactive 、函数返回一个值（可以监视一个getter函数）、一个包含上述内容的数组

    // 5 一个包含上述内容的数组
    import { reactive,watch } from 'vue'// 跟vue2的ref没有任何关系
    let person= reactive({
        name:"张三",
        age:18,
        car:{
            c1:"奔驰",
            c2:"宝马",
        }
    })
    function changeName(){
        person.name+="~"
    }
    function changeAge(){
        person.age+=1
    }
    function changeC1(){
        person.car.c1="奥迪"
    }
    function changeC2(){
        person.car.c2="大众"
    }
    function changeCar(){
        person.car={c1:"雅迪",c2:"艾玛"}
    }

    watch([()=>person.name,()=>person.car.c1],(newVal,oldVal)=>{
        console.log("sum",newVal,oldVal)
    },{deep:true})//反手就箭头函数  当然也可以这么写  看具体情况应用 [()=>person.name,person.car]

    // 下面的两个监听结合一下就是 上面这种
    // watch(()=>person.name,(newVal,oldVal)=>{
    //     console.log("sum",newVal,oldVal)
    // })
    // watch(()=>person.car,(newVal,oldVal)=>{
    //     console.log("sum",newVal,oldVal)
    // },{deep:true})
    
</script>
<style > 
    *{
        font-size: 20px;
    }
    .Person_box{
        background: skyblue;
    }
    input{
        padding: 10px;
    }
    button{
        padding: 20px;
        margin: 5px;
    }
</style>