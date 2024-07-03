<template>
  <div class="homeContainer">
    <div class="homePage">
      <div class="banner" v-show="close">
        <div class="off" @click="offShow()">×关闭</div>
        <img class="bannerImage" src="/banner.png" alt="广告位" />
      </div>
      <div class="content">
        <div class="item" v-for="it in vlist" :key="it.ownerId">
          <Video :url="it.videoCoverUrl" :title="it.videoName" :ownername="it.ownerId" :pubt="it.updateTime"></Video>
        </div>
      </div>
    </div>
  </div>
  <div class="fullScreenFeed" v-if="false">
    <div class="wapper">
      <FeedModel class="ffd"></FeedModel>
    </div>
    <div class="wapper">
      <FeedModel class="ffd"></FeedModel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Video from "@/components/Video.vue";
import FeedModel from "@/components/VideoWindow/index.vue";
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
.content {
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.ffd {
  border-radius: 0;
}

.wapper {
  height: 100%;
  width: 100%;
}

.item:hover {
  scale: 1.02;
}

.item {
  margin-right: calc((100% - 250*7px)/6);
  margin-bottom: 10px;
  width: 250px;
}

.item:nth-child(7n) {
  margin-right: 0 !important;
}

.fullScreenFeed {
  height: 100%;
  width: 100%;
  z-index: 9999;
  top: 0;
  position: fixed;
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
  box-sizing: border-box;
  width: 98%;
  padding: 0 5px 0 5px;
  height: 100%;
}

.homeContainer {
  background-color: rgb(22, 24, 35);
  width: 100%;
  height: 100%;
}

.banner {
  height: 135px;
  border-radius: 10px;
  background-color: rgb(139, 140, 145);
  margin: 0px 5px 6px 5px;
}

.bannerImage {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
