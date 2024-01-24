<template>
  <div class="homePage">
    <div class="banner" v-show="close">
      <div class="off" @click="offShow()">×关闭</div>
      <img class="bannerImage" src="../../public/banner.png" />
    </div>
    <div class="content">
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">
          <Video
            class="v"
            :url="vlist[i].url"
            :title="vlist[i].title"
            :ownername="vlist[i].ownername"
            :pubt="vlist[i].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 1].url"
            :title="vlist[i + 1].title"
            :ownername="vlist[i + 1].ownername"
            :pubt="vlist[i + 1].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 2].url"
            :title="vlist[i + 2].title"
            :ownername="vlist[i + 2].ownername"
            :pubt="vlist[i + 2].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 3].url"
            :title="vlist[i + 3].title"
            :ownername="vlist[i + 3].ownername"
            :pubt="vlist[i + 3].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 4].url"
            :title="vlist[i + 4].title"
            :ownername="vlist[i + 4].ownername"
            :pubt="vlist[i + 4].updateTime"
          ></Video>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup name="Home">
import { ref, reactive } from "vue";
import Video from "@/components/Video.vue";
const count = reactive([]);
let vlist = reactive([]);

let close = ref(true);
function offShow() {
  close.value = false;
}
let fl = 0;
const load = () => {
  vlist.push({
    url: "https://i2.hdslb.com/bfs/archive/9a5cf4cfb11c512c61a54c479fc2ca52e73be1af.jpg@672w_378h_1c_!web-home-common-cover.avif",
    title: "我的网站今日新增用户6.98亿，打算申请世界纪录",
    ownername: "余胜军说java编程",
    updateTime: "2023-12-28",
  });
  vlist.push({
    url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.OSpjOa28yMQayI8KBfm0nQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "dsad14",
    ownername: "damao",
    updateTime: "2023年06月15日",
  });
  vlist.push({
    url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.OSpjOa28yMQayI8KBfm0nQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "dsad1ddddddddddddddddddddddddddddddddddddddddddddddddddddddd4",
    ownername: "damao",
    updateTime: "2023年06月15日",
  });
  vlist.push({
    url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.OSpjOa28yMQayI8KBfm0nQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "dsad14",
    ownername: "damao",
    updateTime: "2023年06月15日",
  });
  vlist.push({
    url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.OSpjOa28yMQayI8KBfm0nQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "dsad14",
    ownername: "damao",
    updateTime: "2023年06月15日",
  });
  count.push(fl);
  fl += 5;
};
</script>

<style scoped>
.v {
  margin-left: 18px;
  margin-right: 3px;
}
.infinite-list {
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  background: rgb(22, 24, 35);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.off {
  position: absolute; /*绝对位置 */
  color: rgb(139, 140, 145);
  font-size: 15px;
}
.off:hover {
  color: white;
  cursor: pointer;
}
.homePage {
  width: 100%;
  height: 100%;
  background-color: rgb(22, 24, 35);
}
.banner {
  height: 135px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: rgb(139, 140, 145);
}
.bannerImage {
  height: 100%;
  width: 100%;
}
</style>
