<template>
  <Person v-if="isShow"/>
  <button @click="btn">触发卸载</button>
</template>

<script lang="ts" setup name="App">
  import { ref } from "vue";
import Person from "./components/Person.vue"//vue3 自动注册
  let isShow=ref(true)
  function btn(){
    isShow.value=false//点击就会触发卸载
  }
</script>