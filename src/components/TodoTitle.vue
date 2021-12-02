<template>
    <div class="top">
        <div class="date">{{ timestamp }}</div>
        <!-- speech bubble -->
        <div class="title main">
            <div class="speech-bubble">
                <h3 class="title_message">{{ message }}</h3>
            </div>
            <div class="title_task speech-bubble2">
                <h3 class="task_message">You've got</h3>
                <div class="task_count">
                    <em class="title_task-left">{{ propsdata.left }}</em>
                    <em class="title_task-total" v-if="propsdata.total">&nbsp;/ {{ propsdata.total }}</em>
                </div>
                <h3 class="task_message2">tasks today!</h3>
            </div>
        </div>
        <!-- innput -->
        <div class="add main speech-bubble3">
            <input type="text" class="add_input" placeholder="Enter your task here" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" />
            <button class="add_button" v-on:click="addTodoItem"><i class="xi-plus-circle-o"></i></button>
        </div>
    </div>
</template>
<script>
import getDate from "../models/getDate.js"
export default {
    props: ["propsdata"],
    data() {
        return {
            // date
            timestamp: "",

            // innput
            newTodoItem: "",

            // speech bubble
            message: "Hi, so !",
            taskTotal: 5
        };
    },
    created(){
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`;
    },
    methods: {
        // 추가
        addTodoItem(){
            if(this.newTodoTiem !== ""){
                this.$emit("addItem", this.newTodoItem);
                this.clearInput();
            }
        },
        // 완료 체크
        toggleComplete(todoItem){
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        // 삭제
        removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
    }
};
</script>