<template>
    <div class="infoContainer">
        <div class="avatar">
            <img src="../../../../public/head.png">
        </div>
        <div class="info">
            <p class="name">大帽</p>
            <div class="statistic">1</div>
            <div class="bizInfo">5</div>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style scoped>
.infoContainer {
    display: flex;
    flex-direction: row;
    height: 200px;
}

.avatar {
    height: 100%;
}

.info {
    display: flex;
    flex-direction: column;
}
</style>