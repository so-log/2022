<template>
    <main class="todoMain">
        <div class="main">
            <!-- controller -->
            <div class="controller main">
                <div class="select">
                    <label class="blind" for="order">Order</label>
                    <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">
                        <option value="date-asc">Oldest</option>
                        <option value="date-desc">Latest</option>
                    </select>
                </div>
                <button class="clear" v-on:click="clearTodo">Clear All</button>
            </div>
            <!-- todolist -->
            <ul class="list main" :class="listempty">
                <li class="list_item" v-for="(todoItem, index) in propsdata" :key="todoItem.item">
                    <!-- todo -->
                    <input type="checkbox" :id="todoItem.item" :checked="todoItem.completed === true" v-on:change="toggleComplete(todoItem)" />
                    <label :for="todoItem.item" class="list_label">
                        <p class="list_text">{{ todoItem.item }}</p>
                    </label>
                    <!-- x, date -->
                    <div class="list_right">
                        <button class="list_delete xi-close-min" v-on:click="removeTodo(todoItem, index)"></button>
                        <p class="list_date">{{ todoItem.date }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
export default {
    props: ["propsdata", "propEmpty"],
    data(){
        return {
            selected: "data-desc"
        };
    },
    computed: {
        listempty() {
            return this.propEmpty?"empty":null;
        }
    },
    methods: {
        // 정렬
        sortTodo(){
            this.$emit("sortItem", { value: this.selected });
        },
        // 완료
        toggleComplete(todoItem) {
            this.$emit("toggleItem", todoItem);
        },
        // 삭제
        removeTodo(todoItem, index) {
        this.$emit("removeItem", todoItem, index);
        },
        // crealAll
        clearTodo(){
            this.$emit("clearAll");
        }
    }
};
</script>