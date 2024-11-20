<template>
  <!-- <h1>01_props</h1> -->
  <!-- <h1>02_custom_event</h1> -->
  <!-- <h1>03_mitt</h1> -->
  <!-- <h1>04_v-model</h1> -->
  <!-- <h1>05_$attrs</h1> -->
  <!-- <h1>06_$refs&$parent</h1> -->
  <!-- <h1>07_provide&inject</h1> -->
  <Father/>
</template>

<script setup name='App'>
// import Father from './pages/01_props/Father.vue';// 父子传值
// import Father from './pages/02_custom_event/Father.vue';//自定义事件  event作为参数
// import Father from './pages/03_mitt/Father.vue';// mitt 兄弟传值
// import Father from './pages/04_v-model/Father.vue';// 双向绑定  用于封装组件
// import Father from './pages/05_$attrs/Father.vue'//祖孙传值  $attrs
import Father from './pages/06_$refs&$parent/Father.vue'//多父 多子 传值  
// import Father from './pages/07_provide&inject/Father.vue'//祖孙传值  真正的跨级传 相比 $attrs  不需要v-bind做一个透传
</script>

<style scoped>
</style>