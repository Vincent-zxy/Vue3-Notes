<template>
    <div class="Person_box">
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
        <button  @click="changeName">修改名字</button>
        <button  @click="changeAge">修改年龄</button>
        <button @click="showTel">查看练习方式</button>
    </div>
</template>

<!-- 用于给当前文件命名组件名字的 -->
<!-- <script lang="ts" >
    export default {
        name:"Setupo234"//文件名字叫 Setup 但是我要在devtool中看的组件名字叫234  所以单独开了一个script
    }
</script> -->

<!-- 写两个script很麻烦，所以可以用插件 npm i vite-plugin-vue-setup-extend -D  在vite config 里引入 声明一下 -->
<!-- 然后就可以在script配置 name命名组件的属性 可以去vue-devtools插件 浏览器里进行查看 -->
<!-- 组合式用于编写代码 -->
<script lang="ts" setup name="Setupo234">
    // setup 语法糖  <script  setup>
    let name="张三"//并不是响应式数据
    let age=18
    let tel="131321323"
    function changeName(){
        name="赵四"//点击修改了  但数据并不是响应式的  所以页面没有更新
    }
    function changeAge(){
        age=88
    }
    function showTel(){
        alert(tel)
    }
</script>

<style >
    .Person_box{
        background: skyblue;
    }
</style>

教堂吸烟问题
汗脚
