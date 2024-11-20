<template>
   <div>
        父组件
        <hr/>
        <h4>a:{{ a }}</h4>
        <h4>b:{{ b }}</h4>
        <h4>c:{{ c }}</h4>
        <h4>d:{{ d }}</h4>
        <Child :a="a"  :b="b"  :c="c" v-bind="{x:100,y:200}" :updataFn="updataFn"/>
   </div>
</template>

<script setup name='Father'>
    import Child from './Child.vue'
    import {ref} from 'vue'
    let a=ref(1)
    let b=ref(2)
    let c=ref(3)
    let d=ref(4)
    function updataFn(value){
        console.log(value);
    }
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>