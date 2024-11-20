<template>
    <div class="Person_box">
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
        <button  @click="changeName">修改名字</button>
        <button  @click="changeAge">修改年龄</button>
        <button @click="showTel">查看练习方式</button>
    </div>
</template>
<script lang="ts">
// 选项式 和 组合式
    export default{
        name:"Person",
        data(){
            return{
                name:"咱三",
                age:18,
                tel:'1231232131221'
            }
        },
        methods:{
            showTel(){
                alert(this.tel)
            },
            changeName(){
                this.name="撒的"
            },
            changeAge(){
                this.age=555
            }
        }
    }
</script>
<style >
    .Person_box{
        background: skyblue;
    }
</style>