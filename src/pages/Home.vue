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
            :url="vlist[i].videoCoverUrl"
            :title="vlist[i].videoName"
            :ownername="vlist[i].ownerId"
            :pubt="vlist[i].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 1].videoCoverUrl"
            :title="vlist[i + 1].videoName"
            :ownername="vlist[i + 1].ownerId"
            :pubt="vlist[i + 1].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 2].videoCoverUrl"
            :title="vlist[i + 2].videoName"
            :ownername="vlist[i + 2].ownerId"
            :pubt="vlist[i + 2].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 3].videoCoverUrl"
            :title="vlist[i + 3].videoName"
            :ownername="vlist[i + 3].ownerId"
            :pubt="vlist[i + 3].updateTime"
          ></Video>
          <Video
            class="v"
            :url="vlist[i + 4].videoCoverUrl"
            :title="vlist[i + 4].videoName"
            :ownername="vlist[i + 4].ownerId"
            :pubt="vlist[i + 4].updateTime"
          ></Video>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup name="Home" lang="ts">
import { ref, reactive } from "vue";
import Video from "@/components/Video.vue";
import { getVideos } from "@/apis/video";
const count = reactive([]);
let vlist = reactive([]);

let close = ref(true);
function offShow() {
  close.value = false;
}
let fl = 0;
const load = async () => {
  let videos = await getVideos();
  console.log(videos);
  vlist.push(...videos.data);
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
