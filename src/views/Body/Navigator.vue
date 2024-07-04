<template>
  <div class="navigator">
    <div class="items">
      <div @click="push('/home', 0)" :class="{ active: indexNow == 0 }">
        <span>首页</span>
      </div>
      <div @click="push('/recommend', 1)" :class="{ active: indexNow == 1 }"><span>推荐</span></div>
      <div @click="push('/follow', 2)" :class="{ active: indexNow == 2 }"><span>关注</span></div>
      <div @click="push('/friend', 3)" :class="{ active: indexNow == 3 }"><span>朋友</span></div>
      <div @click="push('/user/like', 4)" :class="{ active: indexNow == 4 }"><span>我的</span></div>
      <br />
      <div @click="push('/live', 5)" :class="{ active: indexNow == 5 }"><span>直播</span></div>
      <div :class="{ active: indexNow == 6 }"><span>放映厅</span></div>
      <div :class="{ active: indexNow == 7 }"><span>知识</span></div>
      <br />
      <div :class="{ active: indexNow == 8 }"><span>业务合作</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router/index";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
// const route = useRoute()
const path = ref();
const indexNow = ref(0);
function push(path: string, index: number) {
  router.push(path);
  indexNow.value = index
}
onMounted(() => {
  path.value = localStorage.getItem('currentState');
  switch (path.value) {
    case "/home": indexNow.value = 0; break;
    case "/recommend": indexNow.value = 1; break;
    case "/follow": indexNow.value = 2; break;
    case "/friend": indexNow.value = 3; break;
    case "/user": indexNow.value = 4; break;
    case "/live": indexNow.value = 5; break;
  }
})
</script>

<style scoped>
.navigator {
  display: flex;
  width: 170px;
  height: 100%;
  background-color: rgb(22, 24, 35);
  min-width: 170px;

  .items {
    div {
      margin-bottom: 5px;

      span {
        margin-left: 30px;
        margin-top: 15px;
        align-items: center;
      }

      display: flex;
      width: 130px;
      margin-left: 20px;
      font-size: 15px;
      color: rgb(139, 140, 145);
      height: 45px;
      border-radius: 10px;
    }

    div:hover {
      color: #fff;
      background-color: rgb(39, 41, 51);
      cursor: pointer;
    }
  }
}

.active {
  background-color: rgb(39, 41, 51);

  span {
    color: #fff;
  }
}
</style>
