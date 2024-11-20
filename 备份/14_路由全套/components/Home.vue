<template>
    <h1>我是home</h1>
</template>

<script setup name='home'>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const router=useRouter()
    onMounted(()=>{
        setTimeout(()=>{
            // router.push('/new')
            router.replace('/new')
        },3000)
    })
</script>

<style scoped>
</style>