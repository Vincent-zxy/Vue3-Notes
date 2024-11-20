<template>  
     <div class="games">
        <slot :youxi="newGames"></slot>
     </div>
</template> 

<script setup name='Game' lang='ts'>
import { reactive, ref } from 'vue';
let newGames=reactive([
  {id:1,name:"英雄联盟"},
  {id:2,name:"王者荣耀"},
  {id:3,name:"火影忍者"},
  {id:4,name:"猫和老鼠"},
])
</script>

<style lang='less' scoped>
    .games{
       display: inline-block;
       background: orange;
       color: white;
       margin-right: 10px;
       font-size: 20px;
    }
</style>