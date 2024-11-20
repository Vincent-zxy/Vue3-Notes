<template>
  <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup name="App">
  import { reactive } from "vue";
  import Person from "./components/Person.vue"//vue3 自动注册
  import { Persons } from "./types";
  // let personList:Persons=reactive(
  //   [
  //       {id:"asyn",name:"张三",age:80},
  //       {id:"asyn1",name:"李四",age:18},
  //       {id:"asyn2",name:"王五",age:20},
  //   ]
  // )
  let personList=reactive<Persons>(
    [
        {id:"asyn",name:"张三",age:80},
        {id:"asyn1",name:"李四",age:18},
        {id:"asyn2",name:"王五",age:20},
    ]
  )
  console.log(personList);
  
</script>