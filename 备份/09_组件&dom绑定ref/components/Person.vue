<template>
    <div class="Person_box">
        <h1 ref="titleRef">中国</h1>
        <h2 id="title">北京</h2>
        <button @click="showLog">点我输出h2这个元素</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    // defineExpose 抛出当前组件的值 父组件可以通过 绑定ref 进行获取
    import { ref, watchEffect } from 'vue'
    let titleRef=ref()//用于存储 ref 标记的内容
    let a=ref(10)
    let b=ref(20)
    function showLog(){
        console.log(document.getElementById("title"));//我在App里也整了个id 所以打印后是 吉林 而不是 北京
        console.log(titleRef.value);
        
    }
    watchEffect(()=>{
        if(a.value>=60||b.value>=80){
            console.log("发送请求");
        }
    })
    defineExpose({a,b})
</script>
<!-- scoped 局部样式  当前文件私有 -->
<style scoped> 
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