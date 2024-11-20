<template>
    <div>{{query.id}}</div>
    <div>{{query.title}}</div>
    <div>{{query.content}}</div>

    <!-- <div>{{params.id}}</div>
    <div>{{params.title}}</div>
    <div>{{params.content}}</div> -->

    <div>{{id}}</div>
    <div>{{title}}</div>
    <div>{{content}}</div>
</template>

<script setup name='Detail'>
    import { useRoute } from 'vue-router';
    import { toRefs } from 'vue';
    let route= useRoute()
    console.log(route.query);
    console.log(route.params);
    const {query,params}= toRefs(route)

    defineProps(['id','title','content']) //  props: true 
</script>

<style scoped>
</style>