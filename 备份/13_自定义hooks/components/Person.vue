<template>
    <div class="Person_box">
      <h1>{{ sum }}——{{bigSum}}</h1>
      <button @click="add">sum+1</button>
      <img v-for="(v,i) in dogList" :src="v"  alt="" :key="i"/>
      <button @click="getDog">再来一只</button>
    </div>
</template>
<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';
    const {sum,add,bigSum}=useSum()
    const {dogList,getDog}=useDog()
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
    img{
        width: 200px;
        height: 200px;
    }
</style>