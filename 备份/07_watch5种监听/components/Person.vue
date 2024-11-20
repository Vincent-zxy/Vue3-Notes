<template>
    <div class="Person_box">
        <h1>{{ sum }}</h1>
        <button @click="changeSum">点我sum+1</button>
        <hr>
    </div>
</template>
<script lang="ts" setup name="Person">
    // watch 只能监视4种数据 官方4种  网上是5种
    // ref基本类型一种、 ref对象类型一种、 reactive 、函数返回一个值（可以监视一个getter函数）、一个包含上述内容的数组

    // 1 ref基本类型
    import { ref,watch } from 'vue'// 跟vue2的ref没有任何关系
    let sum=ref(0)
    function changeSum(){
        sum.value +=1
    }
    // 监视
    const stopWatch=watch(sum,(newVal,oldVal)=>{//不能.value 必须ref
        console.log("sum")
        if(newVal>=10){
            stopWatch()//停止监视的方法
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