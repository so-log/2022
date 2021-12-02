<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle v-on:addItem="addOneItem" :propsdata="checkCount" />
    <TodoList :propsdata="todoItems" v-on:sortItem="sortAllItem" v-on:clearAll="clearAllItem" v-on:toggleItem="toggleOneItem" v-on:removeItem="removeOneItem" />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoTitle from './components/TodoTitle.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import getDate from './models/getDate.js'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoList,
    TodoFooter
  },
  data(){
    return {
      todoItems: []
    };
  },
  created(){
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  mounted(){
    this.sortTodoLatest();  // 자동정렬 : 최신순
  },
  computed: {
    // 남은 일/전체 할일
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0;
        for (let i = 0; i < this.todoItems.length; i++) {
          if (this.todoItems[i].completed === false) {
            leftCount++;
          }
        }
        return leftCount;
      };

      const count = {
        total: this.todoItems.length,
        left: checkLeftItems()
      };
      return count;
    }
  },
  methods: {
    // 추가
    addOneItem(todoItem){  
      var value = {
          item : todoItem,
          date : `${getDate().month}/${getDate().date}`,
          time: getDate().time,   // 정렬 기준
          completed: false    // 완료여부 체크
      };
      
      // key, value > string #데이터를 문자열로 변환:JSON
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    // 정렬
    sortTodoLatest() {
      this.todoItems.sort(function(a, b) {
        return b.time - a.time;   // 최신순 : 양수 > 내림차순
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function(a, b) {
        return a.time - b.time;   // 오래된순 : 음수 > 오름차순
      });
    },
    sortAllItem(selectedSort){
      if(selectedSort.value === "date-desc"){
        this.sortTodoLatest();
      } else if(selectedSort.value === "date-asc") {
        this.sortTodoOldest();
      }
    },
    // 전체 삭제
    clearAllItem(){
      this.todoItems = [];
      localStorage.clear();
    },
    // 완료 체크
    toggleOneItem(todoItem){
        todoItem.completed = !todoItem.completed;
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    // 삭제
    removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
