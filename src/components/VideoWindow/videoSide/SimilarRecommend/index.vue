<template>
  <div class="cont">
    <div class="similarBox">
      <div class="videos" v-for="video in videoList" :key="video.id">
        <VideoItem :video="video"></VideoItem>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VideoItem from "@/components/VideoListItem/index.vue";
import { getSimiarVideos } from '@/apis/video'
import { onMounted, reactive } from 'vue'
const videoList: any[] = reactive([])
onMounted(() => {
  getSimiarVideos().then((data) => {
    videoList.push(...data.data)
  })
})
</script>
<style scoped>
.cont {
  height: 100%;
  overflow-y: scroll;
}

.similarBox {
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 20px;
}

.videos {
  margin: 5px 0 5px 0;
}

.cont::-webkit-scrollbar {
  width: 6px;
  /* background-color: rgb(20, 19, 19); */
}

/*滚动条的样式*/
.cont::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.2, rgb(125, 126, 128)),
      color-stop(0.4, rgb(97, 98, 99)),
      color-stop(0.8, rgb(125, 126, 128)));
}
</style>
