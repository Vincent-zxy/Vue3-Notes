<template>
    <div class="Person_box">
        <h1>{{ person.name }}</h1>
        <h1>{{ person.age }}</h1>
        <button @click="changeName">名字</button>
        <button @click="changeAge">年龄</button>
        <button @click="changePerson">整个人</button>
        <hr>
    </div>
</template>
<script lang="ts" setup name="Person3">
    // watch 只能监视4种数据 官方4种  网上是5种
    // ref基本类型一种、 ref对象类型一种、 reactive 、函数返回一个值（可以监视一个getter函数）、一个包含上述内容的数组

    // 3 reactive
    import { reactive,watch } from 'vue'// 跟vue2的ref没有任何关系
    let person=reactive({
        name:"张三",
        age:18 
    })
    function changeName(){
        person.name +='~'
    }
    function changeAge(){
        person.age +=1
    }
    function changePerson(){
        // person.value={name:'李四',age:222} ref写法 这才是整个替换地址
        Object.assign(person,{name:'李四',age:222})//这并不是整个替换
    }
    // 监视为reactive 定义的对象数据时   默认深层监听  并且不能关闭 隐式深层监听（官方）
    // 所以不需要像监听 ref 定义的数据一样 开启deep
    const stopWatch=watch(person,(newVal,oldVal)=>{//不能.value 必须ref
        console.log("sum",newVal,oldVal)//地址值没变  也就是指针没变所以newVal和oldVal是一样的
    })
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