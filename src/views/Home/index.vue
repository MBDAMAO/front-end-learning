<template>
  <div class="homeContainer">
    <div class="homePage">
      <div class="banner" v-show="close">
        <div class="off" @click="offShow()">×关闭</div>
        <img class="bannerImage" :src="banner" alt="广告位" />
      </div>
      <div class="content">
        <div class="item" v-for="it in vlist" :key="it.ownerId">
          <Video :url="it.cover" :title="it.title" :ownername="it.ownerId" :pubt="it.createTime"></Video>
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
import { ref, reactive, onBeforeMount } from "vue";
import Video from "@/components/Video.vue";
import FeedModel from "@/components/VideoWindow/index.vue";
import banner from "@/assets/banner.png"
import { getHomeFeed } from "@/apis/video";
let vlist: { "cover": string, "title": string, "ownerId": string, "createTime": string }[] = reactive([]);

let close = ref(true);
function offShow() {
  close.value = false;
}
onBeforeMount(() => {
  getHomeFeed().then((data) => {
    vlist.push(...data.data)
  })
})
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

@media screen and (max-width: 1200px) {
  .item {
    margin-right: calc((100% - 95.9%)/2);
    margin-bottom: 10px;
    width: 31.967%;
  }

  .item:nth-child(3n) {
    margin-right: 0 !important;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .item {
    margin-right: calc((100% - 95.9%)/3);
    margin-bottom: 10px;
    width: 23.975%;
  }

  .item:nth-child(4n) {
    margin-right: 0 !important;
  }
}

@media screen and (min-width: 1400px) and (max-width: 1600px) {
  .item {
    margin-right: calc((100% - 95.9%)/4);
    margin-bottom: 10px;
    width: 19.18%;
  }

  .item:nth-child(5n) {
    margin-right: 0 !important;
  }
}

@media screen and (min-width: 1600px) and (max-width: 1800px) {
  .item {
    margin-right: calc((100% - 95.9%)/5);
    margin-bottom: 10px;
    width: 15.983%;
  }

  .item:nth-child(6n) {
    margin-right: 0 !important;
  }
}

@media screen and (min-width: 1800px) {
  .item {
    margin-right: calc((100% - 95.9%)/6);
    margin-bottom: 10px;
    width: 13.7%;
  }

  .item:nth-child(7n) {
    margin-right: 0 !important;
  }
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
  width: calc(100% - 28px);
  padding: 0 5px 0 5px;
}

.homeContainer {
  background-color: rgb(22, 24, 35);
  width: 100%;
  min-width: 900px;
  height: 100%;
  overflow-y: scroll;
}

.homeContainer::-webkit-scrollbar {
  width: 8px;
  /* background-color: rgb(20, 19, 19); */
}

/*滚动条的样式*/
.homeContainer::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.2, rgb(125, 126, 128)),
      color-stop(0.4, rgb(97, 98, 99)),
      color-stop(0.8, rgb(125, 126, 128)));
}

.banner {
  position: relative;
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
