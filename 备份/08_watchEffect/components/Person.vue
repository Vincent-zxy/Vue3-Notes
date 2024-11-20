<template>
    <div class="Person_box">
        <h1>{{ a }}</h1>
        <h1>{{ b }}</h1>
        <h1>{{ c.car.c1 }}</h1>
        <button @click="changeA">点我a+1</button>
        <button @click="changeB">点我b+1</button>
        <button @click="changeC">点我c+1  深层遍历验证</button>
        <hr>
    </div>
</template>
<script lang="ts" setup name="Person">
    // watchEffect  立即运行一个函数 响应式地追踪依赖
    // watch 对比 watchEffect
    // 1 都监听数据变化
    // 2 watch 要明确指出监视的数据
    // 3 watchEffect 不用指出 自动的
    import { reactive, ref, watchEffect } from 'vue'// 跟vue2的ref没有任何关系
    let a=ref(10)
    let c=reactive({
        name:'张三',
        car:{
            c1:666,
        }
    })
    let b=ref(20)
    function changeA(){
        a.value +=10
    }
    function changeB(){
        b.value +=10
    }
    function changeC(){
        c.car.c1 +=10
    }
    watchEffect(()=>{
        if(a.value>=60||b.value>=80){
            console.log("发送请求");
        }
        if(c.car.c1>=690){
            console.log("6666");
        }
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