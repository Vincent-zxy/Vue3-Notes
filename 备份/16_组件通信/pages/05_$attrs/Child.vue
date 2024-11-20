<template>
    <div class="box">
        子组件
         <hr/>
        <h4>a:{{ a }}</h4>
        <h4>其他{{ $attrs }}</h4>
         <GrandChild v-bind="$attrs"/>
       
    </div>
</template>

<script setup name='Child'>
    import GrandChild from './GrandChild.vue'
    defineProps(['a'])
</script>

<style scoped>
.box{
    background: orange;
    padding: 20px;
}
</style>