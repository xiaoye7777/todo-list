<template>
  <div id="app">
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addToDo="addToDo"/>
          <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
          <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter },
  data(){
    return {
      todos:[
        {id:'001', title:'抽烟', done:true},
        {id:'002', title:'喝酒', done:false},
        {id:'003', title:'开车', done:true}
      ]
    }
  },
  methods: {
    //添加新todo
    addToDo(x){
      this.todos.unshift(x)
    },
    //勾选
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id == id)todo.done = !todo.done
      })
    },
    //删除(删除的方式居然是过滤一遍再放回去，咋感觉优点浪费啊)
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选 or 取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=> todo.done = done )
    },
    //清除所有已经完成的任务
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=> !todo.done)
    }
  },
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}







</style>
