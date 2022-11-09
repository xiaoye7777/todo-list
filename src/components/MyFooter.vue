<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 方式二，v-model -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll" >清除已完成任务</button>
  </div>
</template>

<script>
//import { set } from 'vue/types/umd'
//？？？👆这个不是我写的把？？哪来的🤔？？？？？？？？？？

export default {
  name: 'MyFooter',
  props:['todos','checkAllTodo','clearAllTodo'], 
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,current)=>pre + (current.done? 1 : 0),0)
    },
    // isAll(){
    //   return this.doneTotal === this.total && this.total > 0  
    // }
    // 方式二，v-model
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0
      },
      set(value){
        this.checkAllTodo(value)
      }
    }
  },
  methods:{
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
    // } 在上面isAll计算属性的set函数里了

    //清除所有已经完成的任务
    clearAll(){
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>