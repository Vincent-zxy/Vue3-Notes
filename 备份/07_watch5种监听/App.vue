<template>
  <Person />
  <Person2 />
  <Person3 />
  <Person4 />
  <Person5 />
</template>
<script lang="ts">
  import Person from "./components/Person.vue"
  import Person2 from "./components/Person2.vue";
import Person3 from "./components/Person3.vue";
import Person4 from "./components/Person4.vue";
import Person5 from "./components/Person5.vue";
  export default{
    name:"App",
    components:{Person,Person2,Person3,Person4,Person5}
  }
</script>
