<template>
  <h3>{{ msg }}</h3>
  <input v-model="msg"/>
  {{ a }}
  <!-- 自定义全局指令 -->
  <div v-beauty="123"></div>
  <!-- 传送门 to='.calss'-->
  <teleport to='body'> 
     <img :src="imgUrl" alt="">
  </teleport>
</template>

<script setup name='App' lang='ts'>
  import {ref,shallowRef,shallowReactive,readonly,shallowReadonly,toRaw,markRaw,customRef} from'vue'
  let sum=shallowRef(0)
  let person=shallowReactive({})
  // 通过使用这两个来绕开深度响应，避免了对每一个深层内部属性做响应式带来的性能成本，提升性能。  ->>> 详情可以去看尚硅谷第64级  blibli
  let sum2=readonly(sum)//只读的  不能更改  这里必须是响应式的值 用处是在封装组件时 防止定义的变量被操作
  // readonly和 shallowReadonly 都是用来保护数据的    shallowReadonly值有第一层设为只读 深层次则可以被更改
  let person2=toRaw(person)//现在person2就是普通对象 使用场景：function Fn(toRow(person)) {在这里操作的就只是值 不会让它响应了}
  let obj=markRaw({})//被标记的对象 永远不会响应式

     // customRef 自定义Ref 
    // let val='你好'
    // let timer=null
    // // track 跟踪  trigger 触发
    // let msg=customRef((track,trigger)=>{
    //   return {
    //       get(){
              // track()
              // return val
    //       },
    //       set(value){
              // clearTimeout(timer)
              // timer=setTimeout(() => {
              // val=value
              // trigger()

              // }, 2000);
    //       }
    //   }
    // })

    // 把上面的封装成hooks之后
    import useMsgRef from './useMsgRef';
    // let msg=ref('你好')
    let {msg} =useMsgRef('你好',2000)

    let imgUrl='https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
</script>

<style lang='less' scoped>
  img{
    filter:saturate(0%)
    // filter也可以用grayscale(1)来置灰
  }
</style>