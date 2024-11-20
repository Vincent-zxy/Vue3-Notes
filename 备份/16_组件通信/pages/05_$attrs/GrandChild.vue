<template>
    <div class="boxs">
        孙子组件
         <hr/>
        <h4>x:{{ x }}</h4>
        <!-- 这里需要注意，child组件用了a 所以这里a就没有 -->
        <h4>a:{{ a }}</h4>
        <h4>其他:{{ $attrs }}</h4>
        <button @click="handleFn">点击</button>
    </div>
</template>

<script setup name='GrandChild'>
    let props=defineProps(['x','updataFn'])
    function handleFn(){
        props.updataFn('孙子组件->>>父组件')
    }
</script>

<style scoped>
.boxs{
    background: pink;
    padding: 20px;
}
</style>