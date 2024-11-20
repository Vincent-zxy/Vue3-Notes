<template>
  <h2 id="title">吉林</h2>
  <Person ref="ren"/>
  <button @click="showLog">点我输出Person组件</button>
</template>

<script lang="ts" setup name="App">
  import Person from "./components/Person.vue"//vue3 自动注册
  import {ref} from 'vue'
  let ren=ref()
  function showLog(){
    console.log(ren.value.a);//在v2里不需要子组件抛出  v3里需要在子组件里抛出
  }
</script>
<!-- <script lang="ts">
  import Person from "./components/Person.vue"
  export default{
    name:"App",
    components:{Person,}
  }
</script> -->