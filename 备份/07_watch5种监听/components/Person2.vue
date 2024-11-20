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
<script lang="ts" setup name="Person2">
    // watch 只能监视4种数据 官方4种  网上是5种
    // ref基本类型一种、 ref对象类型一种、 reactive 、函数返回一个值（可以监视一个getter函数）、一个包含上述内容的数组

    // 2 ref对象类型
    import { ref,watch } from 'vue'// 跟vue2的ref没有任何关系
    let person=ref({
        name:"张三",
        age:18
    })
    function changeName(){
        person.value.name +='~'
    }
    function changeAge(){
        person.value.age +=1
    }
    function changePerson(){
        person.value={name:'李四',age:222}
    }
    // 监视的是对象的地址值，若想见识对象内部属性的变化 需要手动开启 深层监听
    // 只有deep开启 changeName和Age 的改变才会被监听到

    // watch参数： 被监视的数据、监视的回调、配置的对象{}
    const stopWatch=watch(person,(newVal,oldVal)=>{//不能.value 必须ref
        console.log("sum",newVal,oldVal)
        // 若修改的是ref定义的属性，newVal和oldVal都是新的值
        // 若修改的是ref定义的对象，newVal是新的oldVal是旧的值
    },{deep:true,immediate:true})//immediate立即执行 watch函数一次
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