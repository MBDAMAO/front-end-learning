<template>
  <div class="item-container" @click="openVideo()">
    <div class="view-box">
      <img :src=props.video.cover class="coverimg" alt="" />
    </div>
    <div class="info-box">
      <div class="title">{{ props.video.title }}</div>
      <div class="love-uploader">
        <div class="love">
          <Likes fill="rgba(169, 169, 169, 0.8)"></Likes>
          {{ props.video.likes }}
        </div>
        <div class="uploader">{{ props.video.uploader }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Likes from "@/svgs/SvgLike.vue";
const props = defineProps({
  video: Object
})
function openVideo() {
  alert("打开视频");
}
</script>
<style scoped>
.item-container {
  display: flex;
  height: 100px;
  width: 100%;
}

.item-container:hover {
  cursor: pointer;
}

.love {
  display: flex;
}

.coverimg {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.coverimg:hover {
  transition: 200ms;
  scale: 1.2;
}

.view-box {
  border-radius: 10px;
  margin-right: 5px;
  width: 160px;
  display: flex;
  overflow: hidden;
  background-color: black;
}

.info-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  color: white;
  height: 50%;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}

.love-uploader {
  color: rgba(169, 169, 169, 0.8);
  display: flex;
  justify-content: space-between;
  height: 20px;
  width: 100%;
}
</style>
