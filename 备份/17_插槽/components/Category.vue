<template>
    <div class="Category">
        <h2>{{title}}</h2>
        <slot name="s1">默认内容</slot>
        <hr/>
        <slot name="s2">默认内容</slot>
        <slot name="s3">默认内容</slot>
    </div>
</template>

<script setup name='Category' lang='ts'>
    defineProps(['title'])
</script>

<style lang='less' scoped>
.Category{
    background: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-right: 20px;
    width: 200px;
    height: 300px;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    h2{
        background: orange;
        color: white;
    }
    
}
</style>