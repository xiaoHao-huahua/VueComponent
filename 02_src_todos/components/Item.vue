<template>
  <li :style="{background:bgColor}" @mouseenter="isEnter(true)" @mouseleave="isEnter(false)">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{todo.title}}</span>
    </label>
    <button
      class="btn btn-danger"
      style="display:none"
      v-show="isShow"
      @click="deleteItem(todo.index)"
    >删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["todo", "deleteTodos",'upDateTodos'],
  data() {
    return {
      bgColor: "aqua",
      isShow: false
    };
  },
  methods: {
    isEnter(Enter) {
      if (Enter) {
        this.isShow = true;
        this.bgColor = "pink";
      } else {
        this.isShow = false;
        this.bgColor = "aqua";
      }
    },
    deleteItem(index) {
      if (window.confirm("确定删除吗?")) this.deleteTodos(index);
    }
  },
  computed: {
    isCompleted: {
      get() {
        return this.todo.completed;
      },
      set(value) {
        this.upDateTodos(this.todo,value)
        // this.todo.completed = value
      }
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
