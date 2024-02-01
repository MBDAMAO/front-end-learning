<template>
  <div class="vbox">
    <div class="topPlay" @click="change()" v-show="!playing">
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
    <div class="details">
      <div class="account">
        <div class="uploader">@欢乐喜剧人</div>
        <div class="pubTime">· 2022年6月8日</div>
      </div>
      <div class="title">
        <div class="content">今天刚吃了粑粑，好开心！！1</div>
        <div class="tags">#宝宝辅食 #司马</div>
      </div>
    </div>
    <div class="sideBar"></div>
    <div class="background">
      <canvas id="canvas"></canvas>
    </div>
    <div class="videoBlock">
      <video
        class="videoEntity"
        autoplay
        ref="rv"
        @click="change()"
        @timeupdate="update()"
      >
        <source src="../../../public/2.mp4" />
      </video>
      <div class="controller">
        <div class="progressBar" @click="tapProgressBar" ref="progressBar">
          <div class="progressBackground">
            <div class="progressNow" ref="progressNow"></div>
          </div>
        </div>
        <div class="controlItems">
          <div class="left">
            <div class="playButton" v-on:click="change()">
              <svg
                t="1705315469945"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5315"
                v-show="!playing"
              >
                <path
                  d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                  fill="#fff"
                  p-id="5316"
                ></path>
              </svg>
              <svg
                t="1706784841703"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4210"
                v-show="playing"
              >
                <path
                  d="M426.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H266.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h106.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m330.666666-53.333334H650.666667a53.393333 53.393333 0 0 0-53.333334 53.333334v746.666666a53.393333 53.393333 0 0 0 53.333334 53.333334h106.666666a53.393333 53.393333 0 0 0 53.333334-53.333334V138.666667a53.393333 53.393333 0 0 0-53.333334-53.333334z"
                  fill="#ffffff"
                  p-id="4211"
                ></path>
              </svg>
            </div>
            <div class="timeDetails">{{ timenow }} / {{ duration }}</div>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";
import { onMounted } from "vue";
var video = null;
var playing = ref(true);
var timenow = ref("00:00");
var duration = ref("00:00");
var rv = ref();
var progressNow = ref();
var videoDuration = ref(0);
function change() {
  draw();
  playing.value = playing.value == false;
  if (playing.value) {
    play();
  } else {
    pause();
  }
}
function play() {
  video.play();
}
function pause() {
  video.pause();
}
function update() {
  timenow.value =
    (video.currentTime / 60).toFixed().padStart(2, "0") +
    ":" +
    (video.currentTime % 60).toFixed().padStart(2, "0");
  progressNow.value.style.width =
    "" + (video.currentTime / video.duration) * 100 + "%";
}
var progressBar = ref(null);
function tapProgressBar(event: Event) {
  let rect = progressBar.value.getBoundingClientRect();
  let clickPercentage = (event.clientX - rect.left) / rect.width;
  video.currentTime = clickPercentage * video.duration;
}
onMounted(() => {
  // 放到这里不然获取不到...
  video = rv.value; //document.getElementById("rv");
  video.onloadeddata = () => {
    draw();
  };
  video.onloadedmetadata = () => {
    videoDuration.value = video.duration;
    duration.value =
      (videoDuration.value / 60).toFixed().padStart(2, "0") +
      ":" +
      (videoDuration.value % 60).toFixed().padStart(2, "0");
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
.details {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  padding: 16px 0px 16px 0px;
  box-sizing: content-box;
  height: 70px;
  /* background-color: aqua; */
  bottom: 50px;
  width: 100%;
  .account {
    width: 100%;
    height: 50%;
    /* background-color: wheat; */
    align-items: center;
    display: flex;
    .uploader {
      font-family: "PingFang SC";
      font-size: 19px;
      color: white;
      padding-left: 16px;
      padding-right: 5px;
      /* background-color: aquamarine; */
    }
    .pubTime {
      font-size: 14px;
      color: white;
    }
  }
  .title {
    width: 100%;
    height: 50%;
    /* background-color: black; */
    align-items: center;
    display: flex;
    .content {
      padding-left: 16px;
      font-size: 15px;
      color: white;
    }
    .tags {
      padding-left: 5px;
      font-size: 15px;
      color: rgb(250, 206, 21);
    }
  }
}
.topPlay {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  top: 40%;
  left: 40%;
  right: 40%;
  bottom: 40%;
  height: 20%;
  width: 20%;
}
.icon {
  opacity: 0.75;
}
.icon:hover {
  opacity: 0.9;
}
.controlItems {
  height: 100%;
  width: 100%;
  display: flex;
  .left {
    height: 100%;
    width: 70%;
    /* background-color: antiquewhite; */
    display: flex;
    align-items: center;
    .playButton {
      margin-left: 20px;
      height: 20px;
      width: 20px;
      /* background-color: aquamarine; */
    }
    .timeDetails {
      margin-left: 5px;
      height: 20px;
      color: white;
      /* background-color: blue; */
    }
  }
  .right {
    height: 100%;
    width: 30%;
    /* background-color: aqua; */
  }
}
.vbox {
  position: relative;
  height: 92%;
  width: 90%;
  border-radius: 20px;
  min-width: 440px;
}
.vbox:hover {
  cursor: pointer;
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
  height: 100%;
  width: 100%;
}
.controller {
  height: 46px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(176, 102, 102); */
  .progressBar {
    padding-bottom: 2px;
    width: 100%;
    opacity: 0.5;
    .progressBackground {
      width: 100%;
      height: 2.55px;
      background-color: rgb(104, 104, 104);
      .progressNow {
        height: 100%;
        background-color: rgb(255, 255, 255);
      }
    }
  }
  .progressBar:hover {
    background-color: rgb(104, 104, 104);
    opacity: 0.9;
  }
}
</style>
