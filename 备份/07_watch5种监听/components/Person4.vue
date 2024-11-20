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

    // 4 函数返回一个值（可以监视一个getter函数
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
        // Object.assign(person.car,{c1:"雅迪",c2:"艾玛"}).//写这种 但是把deep:true删掉还是不行的
        // Object.assign(person,{
        //     car:{
        //         c1:"奔驰",
        //         c2:"宝马",
        //     }
        // })//这样也只是能监听到整个
        // Object.assign(person,{
        //     name:"张三",
        //     age:18,
        //     car:{c1:"雅迪",c2:"艾玛"}
        // })//这样也只是能监听到整个
    }
    
    //如果只想监视person.name 需要用getter函数  （官方：一个函数 返回一个值）说白了就是一个箭头函数
    const stopWatch=watch(()=>person.name,(newVal,oldVal)=>{
        console.log("sum",newVal,oldVal)
    })
    // watch(person.car,(newVal,oldVal)=>{//整体不行  像监听ref deep那样 也不行 
    //     console.log("sum",newVal,oldVal)
    // })
    watch(()=>person.car,(newVal,oldVal)=>{//如果只想监视person.name 需要用getter函数  （官方：一个函数 返回一个值）
        console.log("sum2",newVal,oldVal)
    },{deep:true})//你监视的只是reactive中的一个属性 这个属性只是一个对象这个对象并不是reactive  所以不存在隐式深层监听 需要手动开启deep
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