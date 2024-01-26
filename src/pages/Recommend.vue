<template>
  <div class="vbox">
    <div class="sidebar"></div>
    <div class="play-hidden" @click="change()" id="play-hidden" display="none">
      <svg
        t="1705315469945"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5315"
        width="70"
        height="70"
      >
        <path
          d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
          fill="#fff"
          p-id="5316"
        ></path>
      </svg>
    </div>
    <div class="bar"></div>
    <div class="canvas">
      <canvas class="back" id="background"></canvas>
    </div>
    <video
      class="rvideo"
      id="rv"
      @click="change()"
      ref="rv"
      autoplay="true"
      @timeupdate="gettime()"
    >
      <source
        src="https://cn-hljheb-ct-01-07.bilivideo.com/upgcxcode/59/64/1413106459/1413106459-1-192.mp4?e=ig8euxZM2rNcNbRz7wdVhwdlhWhMhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1706268615&gen=playurlv2&os=bcache&oi=2030413803&trid=000070af2d146c1b411eb9718744462d1dffT&mid=35056091&platform=html5&upsig=19512d38cab3d1c77a0a9948fd07c483&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=3848&bvc=vod&nettype=0&bw=134835&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000"
      />
    </video>
    <div class="controller">
      <div class="playButton"></div>
      <div class="timeline">{{ timenow }} / {{ showedTime }}</div>
    </div>
  </div>
</template>

<script setup name="Recommend" lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
var video = null;
let status = false;
let videoDuration = ref(0);
let showedTime = ref("00:00");
var rv = ref(null);
var hiddenp = null;
onMounted(() => {
  hiddenp = document.getElementById("play-hidden");
  // 放到这里不然获取不到...
  video = rv.value; //document.getElementById("rv");
  video.onloadeddata = () => {
    get();
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
function change() {
  if (status === true) {
    video.play();
    hiddenp.style.display = "none";
  } else {
    video.pause();
    hiddenp.style.display = "";
  }
  status = status === true ? false : true;
  get();
}
let timenow = ref("00:00");
function gettime() {
  timenow.value =
    (video.currentTime / 60).toFixed() +
    ":" +
    (video.currentTime % 60).toFixed();
}
function get() {
  var canvas = document.getElementById("background");
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  // 应用模糊效果
  canvas.style.filter = "blur(50px)"; // 调整此处的模糊程度
}
</script>

<style scoped>
.sidebar {
  z-index: 11;
  position: absolute;
  bottom: 200px;
  right: 100px;
  background-color: antiquewhite;
  width: 50px;
  height: 150px;
}
.play-hidden {
  position: absolute;
  left: 50%;
  z-index: 5;
}
.play-hidden:hover {
  cursor: pointer;
}
.playButton {
  height: 100%;
  width: 80px;
  background-color: wheat;
}
.bar {
  position: fixed;
  height: 90px;
  width: 40px;
  top: 420px;
  right: 10px;
  background-color: rgb(43, 44, 54);
}
.back {
  display: flex;
  height: 100%;
  width: 100%;
}
.canvas {
  position: absolute;
  display: flex;
  z-index: 0;
  height: 91%;
  left: 155px;
  right: 60.5px;
  border-radius: 20px;
}
.controller {
  color: #fff;
  display: flex;
  z-index: 2;
  align-items: center;
  height: 80px;
}
.controller:hover {
  cursor: pointer;
}
.vbox {
  height: 100%;
  width: 100%;
  display: flex;
  position: static;
  flex-direction: column;
  background-color: rgb(22, 24, 35);
}
.rvideo {
  display: block;
  top: 80;
  height: 86%;
  width: 96%;
  z-index: 2;
  /* background-color: rgb(39, 41, 51); */
  border-radius: 20px;
}
.rvideo:hover {
  cursor: pointer;
}
</style>
