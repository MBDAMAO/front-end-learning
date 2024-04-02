<template>
    <div class="userPageContainer">
        <div class="userMain">
            <Header></Header>
            <div class="userSwitch">
                <router-link to="/user/post" class="d1">
                    <div class="btn btn-default" :class="{ active: route.matched[1].path == '/user/post' }">作品 {{ 6 }}
                    </div>
                </router-link>
                <router-link to="/user/like" class="d1">
                    <div class="btn btn-default" :class="{ active: route.matched[1].path == '/user/like' }">喜欢 {{ 20 }}
                    </div>
                </router-link>
                <router-link to="/user/collection" class="d1">
                    <div class="btn btn-default" :class="{ active: route.matched[1].path == '/user/collection' }">收藏</div>
                </router-link>
                <router-link to="/user/post" class="d1">
                    <div class="btn btn-default" :class="{ active: route.matched[1].path == '/user/history' }">观看历史</div>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from "./info/index.vue"
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
const route = useRoute()
// onMounted(
//     () => {
//         console.log(route.matched[1].path)
//         switch (index.value = route.matched[0].path) {
//             case "/user": {

//                 break;
//             }
//         }
//     }
// )

</script>
<style scoped>
::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
}

.userPageContainer {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: rgb(22, 24, 35);
    min-width: 800px;
}

.userMain {
    width: 80%;
    overflow-y: scroll;
    /* background-color: rgb(22, 24, 35); */
}


.userSwitch {
    display: flex;
    flex-direction: row;
    height: 80px;
}

.d1 {
    font-size: 18px;
    text-decoration: none;
    color: rgb(100, 101, 108);
    margin-right: 40px;
    display: flex;
    align-items: center;
}

.active {
    color: white;
}
</style>
