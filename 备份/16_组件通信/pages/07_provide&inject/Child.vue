<template>
    <div class="box">
        子组件
         <hr/>
         <GrandChild />
    </div>
</template>

<script setup name='Child'>
    import GrandChild from './GrandChild.vue'
</script>

<style scoped>
.box{
    background: orange;
    padding: 20px;
}
</style>