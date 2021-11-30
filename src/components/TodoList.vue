<template>
    <div class="todoMain op main">
        <div class="controller main">
        <div class="select">
            <label class="blind" for="order">Order</label>
            <select name="order" id="order" class="selectbox" >
                <option value="date-asc">Oldest</option>
                <option value="date-desc">Latest</option>
            </select>
        </div>
        <button class="clear">Clear All</button>
        </div>
        <ul class="list main">
            <li class="list_item">
                <!-- 할일 리스트 -->
                <input type="checkbox" id="list_item" />
                <label for="list_item" class="list_label">
                    <p class="list_text">vue.js study</p>
                </label>
                <div class="list_right">
                    <button class="list_delete">Delete</button>
                    <p class="list_date">11/29</p>
                </div>
            </li>
        </ul>
    </div>
</template>