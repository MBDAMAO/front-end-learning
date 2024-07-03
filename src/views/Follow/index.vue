<template>
    <div class="container-follow">
        <div class=" side">
            <SideBar></SideBar>
        </div>
        <div class="content">
            <Recommend></Recommend>
        </div>
    </div>
</template>
<script setup lang='ts'>
import SideBar from "./SideBar/index.vue"
import Recommend from "../Recommend/index.vue"
</script>
<style scoped>
.container-follow {
    height: 100%;
    width: 100%;
    display: flex;
}

.side {
    background-color: rgb(22, 24, 35);
    width: 220px;
    height: 100%;
}

.content {
    height: 100%;
    width: 100%;
}
</style>