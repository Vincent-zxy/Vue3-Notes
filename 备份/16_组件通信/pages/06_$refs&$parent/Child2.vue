<template>
    <div class="box">
        子组件2
         <hr/>
         <h4>电脑:{{dn}}</h4>
        <h4>书籍:{{book}}</h4>
    </div>
</template>

<script setup name='Child2'>
    import {ref} from 'vue'
    let dn=ref('联想')
    let book=ref(6)

     // 把数据交个外边
     defineExpose({dn,book})
</script>

<style scoped>
.box{
    background: pink;
    padding: 20px;
}
</style>