<template>
    <div class="Person_box">
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
        <button  @click="changeName">修改名字</button>
        <button  @click="changeAge">修改年龄</button>
        <button @click="showTel">查看练习方式</button>
    </div>
</template>
<script lang="ts">
//  组合式
// 1 v2 v3 可以共存
// 2 旧的语法  可以读取 setup 的东西  setup 不能读取 旧的语法 的东西  因为setup的数据定义 执行顺序 是在data数据的前面
// 3 使用setup()函数 需要 return { xxx } 东西 出来才行
    export default{
        name:"Person",
        setup(){
            // console.log(this);//undefined   vue3弱化this了  
            
            // 数据
            let name="张三"//并不是响应式数据
            let age=18
            let tel="131321323"
            // 方法
            function changeName(){
                name="赵四"//点击修改了  但数据并不是响应式的  所以页面没有更新
            }
            function changeAge(){
                age=88
            }
            function showTel(){
                alert(tel)
            }
            return {name,age,changeName,changeAge,showTel}
            // return ()=> "哈哈"
        }
    }
</script>
<style >
    .Person_box{
        background: skyblue;
    }
</style>