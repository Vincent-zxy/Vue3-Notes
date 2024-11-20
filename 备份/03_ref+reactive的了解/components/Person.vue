<template>
    <div class="Person_box">
        <h1>{{ tel }}   let直接声明的 非响应式数据</h1>
        <h1>{{ refName }}  ref定义的 响应式数据</h1>
        <h1>{{ refCar.brand }}{{ refCar.price }}    ref定义的 对象类型的响应式数据 </h1>
        <h1>{{ reactCar.brand }}{{ reactCar.price }}  reactive 对象类型的响应式数据 </h1>
        <h1>游戏列表：</h1>
        <ul>
            <li v-for="(v,i) in reactGames" :key="v.id">{{ v.name }} </li>
        </ul>
        <button  @click="changeName">修改ref 名字</button>
        <button  @click="changeRefCar">修改ref 对象数据</button>
        <button  @click="changeFirstGames">修改react 游戏名称</button>
        <button  @click="changePrice">修改react 汽车价格</button>
        <button @click="showTel">查看练习方式</button>
    </div>
</template>
<!-- ref是 可以 定义 基本类型、对象类型的响应式数据 -->
<!-- reactive是 只能 创建 对象类型的响应式数据 -->
<script lang="ts" setup name="Person">
    import { ref ,reactive } from 'vue'// 跟vue2的ref没有任何关系
    
    let tel="131321323"//不是响应式数据
    let refName=ref("张三")// 用ref包裹 就是响应式数据 
    console.log(name);//Reflpml对象 name.value才是 但是html里是自动.value 所以不需要  <h1>{{ name.value }}</h1>
    let refCar=ref({brand:"雪佛兰",price:999})
    // 表面上是ref 基本和复杂都能处理，但是 ref实际上打印一下可以发现是用了 reactive的 Proxy 且需要修改数据时 要.value

    let reactCar=reactive({brand:"奔驰",price:100})//用reactive包裹一下 原对象=> 响应式对象
    console.log(reactCar);//Proxy对象  ProxyJS原生的方法
    let reactGames=reactive([
        {id:"1",name:"王者荣耀"},
        {id:"2",name:"元神"},
        {id:"3",name:"消光"},
    ])
    function changeName(){
        refName.value="赵四"//点击修改了  但数据并不是响应式的  所以页面没有更新
    }
    function changeRefCar(){
        refCar.value.price +=50//相比reactive 需要加个.value
    } 
    function changePrice(){
        reactCar.price +=10
        reactCar.brand ='奔驰——11111'
    }
    function changeFirstGames(){
        // 但在之后点击其他任何按钮时，因为其他按钮的点击事件可能会引起组件其它响应式数据的变动并触发页面更新，
        // 此时 Vue 可能会顺便更新整个组件视图，从而导致之前非响应式修改的 games 数组内容也一并显示出来。
        reactGames[0].name="给白傻子买瓜子儿去"
    }
    function showTel(){
        alert(tel)
    }
</script>

<style >
    .Person_box{
        background: skyblue;
    }
    button{
        padding: 20px;
        margin: 5px;
        font-size: 20px;
    }
</style>