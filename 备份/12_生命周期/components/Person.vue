<template>
    <div class="Person_box">
      <h1>{{ sum }}</h1>
      <button @click="add">点我sum+1</button>
    </div>
</template>
<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
   let sum=ref(0)
   function add(){
     sum.value+=1
   }
    //创建阶段
    //setup本身
    
    //挂载前
   onBeforeMount(()=>{
    console.log("挂载前");
   })
    //挂载完毕
   onMounted(() => {
    console.log("挂载完毕");
   })
    // 更新前
    onBeforeUpdate(() => {
        console.log('更新前');
    })
    // 更新完毕
    onUpdated(() => {
        console.log("更新完毕");
    })
    // 卸载
    onBeforeUnmount(() => {
        console.log("卸载");
    })
    // 卸载后
    onUnmounted(() => {
        console.log("卸载后");
    })
</script>

<style scoped> 
    /* scoped 局部样式  当前文件私有 */
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