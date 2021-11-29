<template>
    <div class="title">
        <p class="title_message">{{ message }}</p>
        <p class="title_task">
            오늘 해야할 일!
            <span class="title_task-total">{{ taskTotal }}</span>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 아이디랑 data 처리!!!
            message: "Hi, so-!",
            taskTotal: 5
        };
    },
};
</script>