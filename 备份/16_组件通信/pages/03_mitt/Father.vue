<template>
   <div>
        父组件
        <hr/>
        <Child1 />
        <Child2 />
   </div>
</template>

<script setup name='Father'>
    import Child1 from './Child1.vue'
    import Child2 from './Child2.vue'
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>