<template>
    <div class="title main">
        <div class="speech-bubble">
            <h3 class="title_message">{{ message }}</h3>
        </div>
        <div class="title_task speech-bubble2">
            <h3 class="task_message">You've got</h3>
            <h2 class="title_task-total">{{ taskTotal }}</h2>
            <h3 class="task_message2">tasks today!</h3>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 아이디랑 data 처리!!!
            message: "Hi, so !",
            taskTotal: 5
        };
    },
};
</script>