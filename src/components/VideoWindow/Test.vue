<template>
  <div class="vbox">
    <div class="background">
      <canvas id="canvas"></canvas>
    </div>
    <div class="videoBlock">
      <video class="videoEntity" controls ref="rv" @click="draw()">
        <source src="../../../public/2.mp4" />
      </video>
      <div class="controller"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";
import { onMounted } from "vue";
var video = null;
let status = false;
var rv = ref(null);
let videoDuration = ref(0);
let showedTime = ref("00:00");
var hiddenp = null;
onMounted(() => {
  // 放到这里不然获取不到...
  video = rv.value; //document.getElementById("rv");
  video.onloadeddata = () => {
    draw();
  };
  video.onloadedmetadata = () => {
    videoDuration.value = video.duration;
    showedTime.value =
      (videoDuration.value / 60).toFixed() +
      ":" +
      (videoDuration.value % 60).toFixed();
    console.log(showedTime);
  };
});
function draw() {
  var canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.style.scale = 1.6;
  canvas.style.filter = "blur(30px)";
}
defineProps([""]);
</script>
<style scoped>
.vbox {
  position: relative;
  height: 90%;
  width: 100%;
  border-radius: 15px;
  min-width: 440px;
}
.background {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
}
.videoBlock {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
}
.videoEntity {
  width: 100%;
}
.controller {
  height: 46px;
  width: 100%;
  /* background-color: rgb(176, 102, 102); */
}
</style>
