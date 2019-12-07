<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodos="deleteTodos" :upDateTodos="upDateTodos" />
      <Footer :todos="todos" :isCheckAll="isCheckAll" :deleteChecked='deleteChecked' />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  data() {
    return {
      todos: [
        { id: 1, title: "打篮球", completed: true },
        { id: 2, title: "乒乓球", completed: false },
        { id: 3, title: "羽毛球", completed: false }
      ]
    };
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    addTodo(value) {
      this.todos.unshift({ id: Date.now(), title: value, completed: false });
    },
    deleteTodos(index) {
      this.todos.shift(index, 1);
    },
    upDateTodos(todo, value) {
      todo.completed = value;
    },
    isCheckAll(isChecked) {
      this.todos.forEach(todo => {
        todo.completed = isChecked;
      });
    },
    deleteChecked() {
      this.todos = this.todos.filter(todo=>{
        return todo.completed === false
      })
    }
  }
};
</script>

<style scoped>
/*app*/
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
