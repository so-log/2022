<template>
    <header class="header">
        <h1 class="logo">Todo</h1>
        <div class="date">{{ timestamp }}</div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            timestamp: ""
        };
    },
    created(){
        const now = new Date();
        const month = now.getMonth() +1;
        const date = now.getDate();
        const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
        const week = weekList[now.getDay()];
        this.timestamp = `${month}/${date} ${week}`;
    }
};
</script>