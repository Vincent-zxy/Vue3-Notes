<template>
   <div>
        父组件
        <hr/>
        <!-- <input type="text" :value="username" @input="username=$event.target.value"><br/>  v-model原理 -->
        <!-- <input type="text" v-model="username"> -->
        
        <!-- <MyInput  v-model="username"/> -->
        <!-- <MyInput :value="username" @input="username=$event"/>这是v2 本质 -->
        <!-- <MyInput :modelValue="username" @update:modelValue="username=$event"/> 这是v3本质 -->
        <!-- v3比v2增加了一些灵活性  提供了更一致的事件命名约定 说白了就是 可以自定义模型属性名称了 modelValue -->

        <!-- <MyInput  v-model:qwe="username"/> 自定义qwe -->

        <!-- 多个双向绑定 -->
        <!-- <MyInput :ming="username" :mima="password" @input="updateValues" />  v2-->
         <!-- v3  -->
        <MyInput  v-model:ming="username"  v-model:mima="password"/> 
        <h4>{{ username }} <br/>{{ password }}</h4>
   </div>
</template>

<script setup name='Father'>
    import {ref} from 'vue'
    import MyInput from './MyInput.vue';
    let username=ref('zhangsan')
    let password=ref('123456')

    // v2 封装对比
    // methods: {
    //     updateValues(values) {
    //     if (values.ming !== undefined) {
    //         this.username = values.ming;
    //     }
    //     if (values.mima !== undefined) {
    //         this.password = values.mima;
    //     }
    //     }
    // }
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>