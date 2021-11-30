<template>
    <div class="todoMain op main">
        <div class="controller main">
        <div class="select">
            <label for="order">정렬</label>
            <select name="order" id="order" class="selectbox" >
                <option value="date-asc">최신순</option>
                <option value="date-">오래된순</option>
            </select>
        </div>
        <button class="clear">전체 삭제</button>
        </div>
        <ul class="list main">
            <li class="list_item">
                <!-- 할일 리스트 -->
                <input type="checkbox" id="list_item-1" />
                <label for="list_item-1">
                    <p class="list_text">vue.js 공부</p>
                </label>
                    <p class="list_date">11/29</p>
                    <button class="list_delete">삭제</button>
            </li>
        </ul>
    </div>
</template>