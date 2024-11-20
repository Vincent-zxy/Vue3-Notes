<template>
    <div class="Person_box">
        <h1>{{reactPerson.name}}======={{name}}</h1>
        <h1>{{reactPerson.age}}</h1>
        <hr>
        <button @click="changeName">修改名字</button>
        <button @click="changeToRefAge">toRefAge</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    // toRefs: 把响应式对象里的东西拿出来 并且拿出来的数据具备响应式能力 可以拿一堆
    // toRefs常用于 ：
    // let {name,age}=toRefs(reactPerson)  解构赋值

    // toRef:把响应式对象里的东西拿出来 并且拿出来的数据具备响应式能力 只能拿一个
    // toRef常用于：
    // 或者在组件的 setup 函数中使用
    // function setup() {
    //   const nameRef = toRef(state, 'name');
    
    //   return { nameRef };
    // }
    import { ref ,reactive,toRefs,toRef } from 'vue'// 跟vue2的ref没有任何关系
    let reactPerson=reactive({
        name:"张三",
        age:18,
    })
    // let {name,age}=person//解构赋值出来只是读取  所以不是响应式的
    let {name,age}=toRefs(reactPerson)
   
    
    function changeName(){
        // name="阿达"
        name.value+="阿达"
        console.log(name,reactPerson.name);
        
    }
    function changeAge(){
        age.value=999
        console.log(age,reactPerson.age);
    }

    let toRefAge=toRef(reactPerson,'age')
    // {
    //     name:refIpml  指针指向的是 reactPerson 的 name 所以当修改name reactPerson 里的name也会修改
    //     age:refIpml
    // }
    console.log(toRefAge);//RefIpml
    function changeToRefAge(){
        toRefAge.value=666
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