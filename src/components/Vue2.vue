<template>
  <div v-bind:class="sx" :id="sx1">{{ message }}</div>
  <button :disabled="isBtn">Button</button>
</template>
<script >
// v-bind == : 
export default{
  data(){
    return {
      sx:"className",//v-bind用于属性绑定 
      sx1:"cont",
      isBtn:false,
      message:"message"//文本插值 也叫 模板语法
    }       
  }
}
</script>
<style scoped>
.className{
  color: red;
}
</style>
