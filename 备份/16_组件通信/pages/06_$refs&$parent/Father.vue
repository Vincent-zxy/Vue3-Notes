<template>
   <div>
        父组件
        <hr/>
        <h4>房产：{{house}}</h4>
        <button @click="changeToy">修改Child1的玩具</button><br/>
        <button @click="changeDn">修改Child2的电脑</button><br/>
        <button @click="getAllChild($event,$refs)">获取所有子组件实例对象并 book + 2</button>
        <Child ref="c1"/>
        <Child2 ref="c2"/>
   </div>
</template>

<script setup name='Father'>
    import Child from './Child.vue'
    import Child2 from './Child2.vue'
    import {ref} from 'vue'
    let c1=ref()
    let c2=ref()
    let house=ref(4)
    function changeToy(){
        console.log(c1.value);
        c1.value.toy="小猪佩奇"
    }
    function changeDn(){
        c2.value.dn="苹果电脑"
    }
    function getAllChild(e,r){
        console.log(e,'事件对象');
        console.log(r,'所有儿子');
        for (const key in r) {
            r[key].book+=2
        }
        // 这里的r是响应式对象 reactive ,而reactive里有ref时，
        // 我们在拿取reactive里的这个ref 是不需要.value的，reactive是会自动解读的
    }




    defineExpose({house})
</script>

<style scoped>
div{
    background: skyblue;
    padding: 20px;
}
</style>