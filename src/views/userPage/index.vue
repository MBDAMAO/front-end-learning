<template>
    <div class="userPageContainer">
        <div class="userMain">
            <Header></Header>
            <div class="userSwitch">
                <router-link to="/user/post">
                    <div class="btn btn-default">点击跳转</div>
                </router-link>
                <router-link to="/user/like">
                    <div class="btn btn-default">点击跳转</div>
                </router-link>
                <router-link to="/user/collection">
                    <div class="btn btn-default">点击跳转</div>
                </router-link>
                <router-link to="/user/post">
                    <div class="btn btn-default">点击跳转</div>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from "./info"
</script>
<style scoped>
.userPageContainer {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: rgb(22, 24, 35);

}

.userMain {
    width: 80%;
    /* background-color: rgb(22, 24, 35); */
}

.userSwitch {
    display: flex;
    flex-direction: row;
}
</style>
