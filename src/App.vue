<template>
  <Person/>
</template>
<script lang="ts">
  import Person from "./components/Person.vue"
  export default{
    name:"App",
    components:{Person}
  }
  console.log(111);
  console.log(2222);
</script>
<style scoped>
.className{
  color: red;
}
</style>