<template>
  <div class="homePage">
    <div class="banner" v-show="close">
      <div class="off" @click="offShow()">×关闭</div>
      <img class="bannerImage" src="/banner.png"  alt="广告位"/>
    </div>
    <div class="content">
      <div class="item" v-for="it in vlist" :key="it.ownerId">
        <Video class="v" :url="it.videoCoverUrl" :title="it.videoName" :ownername="it.ownerId"
          :pubt="it.updateTime"></Video>
      </div>
      <!-- <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">
          <Video class="v" :url="vlist[i].videoCoverUrl" :title="vlist[i].videoName" :ownername="vlist[i].ownerId"
            :pubt="vlist[i].updateTime"></Video>
          <Video class="v" :url="vlist[i + 1].videoCoverUrl" :title="vlist[i + 1].videoName"
            :ownername="vlist[i + 1].ownerId" :pubt="vlist[i + 1].updateTime"></Video>
          <Video class="v" :url="vlist[i + 2].videoCoverUrl" :title="vlist[i + 2].videoName"
            :ownername="vlist[i + 2].ownerId" :pubt="vlist[i + 2].updateTime"></Video>
          <Video class="v" :url="vlist[i + 3].videoCoverUrl" :title="vlist[i + 3].videoName"
            :ownername="vlist[i + 3].ownerId" :pubt="vlist[i + 3].updateTime"></Video>
          <Video class="v" :url="vlist[i + 4].videoCoverUrl" :title="vlist[i + 4].videoName"
            :ownername="vlist[i + 4].ownerId" :pubt="vlist[i + 4].updateTime"></Video>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Video from "@/components/Video.vue";
import { getVideos } from "@/apis/video";
const count: number[] = reactive([]);
let vlist: { "videoCoverUrl": string, "videoName": string, "ownerId": string, "updateTime": string }[] = reactive([
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" },
  { "videoCoverUrl": "/2.png", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" }]);

let close = ref(true);
function offShow() {
  close.value = false;
}
let fl = 0;
const load = async () => {
  alert(1)
  let videos = [{ "videoCoverUrl": "ss", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" }, { "videoCoverUrl": "ss", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" }, { "videoCoverUrl": "ss", "videoName": "ceshi", "ownerId": "15", "updateTime": "2024-01-05" }]
  vlist.push(...videos);
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

.content {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, auto);
}

.infinite-list .infinite-list-item+.list-item {
  margin-top: 10px;
}

.off {
  position: absolute;
  /*绝对位置 */
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
