<template>
  <div class="videoContainer">
    <div class="pre-back"></div>
    <div class="shadow"></div>
    <div class="background">
      <canvas id="canvas" class="canvas" ref="canvas"></canvas>
    </div>
    <div class="vbox">
      <div class="expand" @click="showSide()" v-show="!showside">
        <svg
          t="1707052181872"
          class="icon"
          viewBox="0 0 1028 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="20169"
          fill="rgba(169, 169, 169, 0.8)"
        >
          <path
            d="M495.212 189.092a8 8 0 0 0-11.312 0l-295.492 295.492-0.08 0.08-45.256 45.252a8 8 0 0 0 0 11.316l45.256 45.256 0.06 0.06 295.512 295.508a8 8 0 0 0 11.312 0l45.256-45.252a8 8 0 0 0 0-11.316l-289.912-289.912 289.912-289.916a8 8 0 0 0 0-11.312l-45.256-45.256z m387.688 636.396a8 8 0 0 1 0 11.316l-45.256 45.252a8 8 0 0 1-11.312 0l-295.512-295.508-0.06-0.06-45.256-45.256a7.996 7.996 0 0 1 0-11.316l45.256-45.252 0.08-0.08 295.492-295.492a8 8 0 0 1 11.312 0l45.256 45.256a8 8 0 0 1 0 11.312l-289.916 289.916 289.916 289.912z"
            p-id="20170"
          ></path>
        </svg>
      </div>
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
      <div class="sideBar">
        <div class="headimg">
          <img class="himg" src="../../../public/head.png" />
          <svg
            t="1706801829143"
            class="follow"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11087"
            width="25"
            height="25"
          >
            <path
              d="M511.488 64.468c-246.974 0-447.184 200.211-447.184 447.185 0 246.972 200.21 447.185 447.184 447.185s447.185-200.213 447.185-447.185c0-246.974-200.21-447.185-447.185-447.185z m223.795 472.027h-198.95v198.953c0 13.608-11.028 24.64-24.846 24.64-13.72 0-24.845-11.311-24.845-24.64V536.495h-198.95c-13.607 0-24.64-11.027-24.64-24.842 0-13.722 11.31-24.845 24.64-24.845h198.953V287.856c0-13.608 11.027-24.64 24.844-24.64 13.72 0 24.845 11.311 24.845 24.64v198.953h198.95c13.611 0 24.643 11.027 24.643 24.845-0.002 13.719-11.313 24.84-24.644 24.84z"
              p-id="11088"
              fill="#FE2C55"
            ></path>
          </svg>
        </div>
        <div class="like" v-on:click="like()">
          <svg
            t="1706800852085"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5248"
            ref="likeButton"
            :fill="likecolor"
          >
            <path
              d="M535.9 216.7l-22.9 23-22.9-23.1c-89.2-89.7-234.3-90.1-323.9-0.8l-0.8 0.8c-89.7 90.1-89.7 235.8 0 326L476 859.3c20.1 20.4 52.9 20.7 73.4 0.7l0.7-0.7 310.7-316.7c89.7-90.1 89.7-235.8 0-326-89.2-89.7-234.3-90.1-323.9-0.9l-1 1z"
              p-id="5249"
            ></path>
          </svg>
          <div class="numinfo">114</div>
        </div>
        <div class="comment" v-on:click="openComment()">
          <svg
            t="1706801099641"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15649"
          >
            <path
              d="M847.36 107.52h-665.6c-69.12 0-125.44 56.32-125.44 125.44v401.92c0 69.12 56.32 125.44 125.44 125.44h38.4l15.36 181.76 158.72-181.76h453.12c69.12 0 125.44-56.32 125.44-125.44V232.96c0-69.12-56.32-125.44-125.44-125.44z m-563.2 376.32c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z m230.4 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 0 33.28-28.16 61.44-61.44 61.44z m227.84 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z"
              fill="#ffffff"
              p-id="15650"
            ></path>
          </svg>
          <div class="numinfo">10万</div>
        </div>
        <div class="save" v-on:click="save()">
          <svg
            t="1706801145907"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="17536"
            :fill="savecolor"
          >
            <path
              d="M753.5 943.2c-9.7 0-21.1-3.2-30.8-8.1l-210.4-105-212 105.1c-21.1 11.2-48.5 9.7-68-4.9-19.3-14.6-30.8-40.4-25.8-64.6l43.7-226.5L83.7 483.7C66 466 59.5 438.3 66 415.7c8.1-24.3 27.4-42 53.4-45.4l231.2-42L454.1 118c11.2-22.6 33.9-37.2 58.1-37.2 24.3 0 48.5 14.6 58.1 37.2l103.5 210.3L905 368.7c24.3 3.2 45.4 21.1 51.9 45.4 8.1 24.3 1.5 50.1-16.2 68l-166.5 157 42 226.5c4.9 25.8-6.5 50.1-25.8 64.6-9.6 8.1-22.4 13-36.9 13z"
              p-id="17537"
            ></path>
          </svg>
          <div class="numinfo">14万</div>
        </div>
        <div class="share">
          <svg
            t="1706801222228"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="20248"
          >
            <path
              d="M627.2 171.264a25.6 25.6 0 0 1 16.768 6.2464l319.3088 276.736a25.6 25.6 0 0 1 0 38.7072l-319.3088 276.736a25.6 25.6 0 0 1-42.368-19.3536V614.4H435.2c-167.9872 0-310.784 107.8784-362.9056 258.1248A408.9344 408.9344 0 0 1 51.2 742.4c0-226.2272 183.3728-409.6 409.6-409.6h140.8V196.864a25.6 25.6 0 0 1 25.6-25.6z"
              p-id="20249"
              fill="#ffffff"
            ></path>
          </svg>
          <div class="numinfo">114万</div>
        </div>
        <div class="more" v-on:click="openMoreSide()">
          <svg
            t="1706801332358"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="28640"
          >
            <path
              d="M0 0m0 0l1024 0q0 0 0 0l0 1024q0 0 0 0l-1024 0q0 0 0 0l0-1024q0 0 0 0Z"
              fill="#ffffff"
              fill-opacity="0"
              p-id="28641"
            ></path>
            <path
              d="M170.666667 284.444444v455.111112a56.888889 56.888889 0 0 0 56.888889 56.888888h568.888888a56.888889 56.888889 0 0 0 56.888889-56.888888V284.444444a56.888889 56.888889 0 0 0-56.888889-56.888888H227.555556a56.888889 56.888889 0 0 0-56.888889 56.888888z m312.888889 326.087112a28.444444 28.444444 0 0 1-42.666667-24.632889V438.101333a28.444444 28.444444 0 0 1 42.666667-24.632889l128 73.898667a28.444444 28.444444 0 0 1 0 49.265778L483.555556 610.531556z"
              fill="#ffffff"
              p-id="28642"
            ></path>
          </svg>
          <div class="numinfo">看相关</div>
        </div>
        <div class="other">
          <svg
            t="1706801395970"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="29834"
          >
            <path
              d="M378.04714667 512.87381333c0-33.93536-27.50464-61.46048-61.44-61.46048-33.93536 0-61.44 27.52512-61.44 61.46048 0 33.93536 27.50464 61.46048 61.44 61.46048C350.52202667 574.31381333 378.04714667 546.80917333 378.04714667 512.87381333zM644.26666667 512.87381333c0 33.93536 27.50464 61.46048 61.44 61.46048s61.44-27.52512 61.44-61.46048c0-33.93536-27.50464-61.46048-61.44-61.46048S644.26666667 478.93845333 644.26666667 512.87381333zM449.70666667 512.87381333c0 33.93536 27.50464 61.46048 61.44 61.46048 33.93536 0 61.44-27.52512 61.44-61.46048 0-33.93536-27.50464-61.46048-61.44-61.46048C477.21130667 451.41333333 449.70666667 478.93845333 449.70666667 512.87381333z"
              p-id="29835"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      <div class="videoBlock">
        <video
          class="videoEntity"
          ref="rv"
          @click="change()"
          @timeupdate="update()"
        >
          <source :src="props.videoSrc" />
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
    <div class="sideInfo" v-show="showside">
      <VideoSide
        @close-event="showSide()"
        @changeStatus="(p:number) => changeStatus(p)"
        :status="sideStatus"
      ></VideoSide>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";
import { onMounted } from "vue";
import VideoSide from "@/views/videoSide/index.vue";
var props = defineProps({
  videoSrc: String,
});
var sideStatus = ref(2);
var showside = ref(false);
var likeStatus = false;
var likecolor = ref("white");
var video = null;
var likeButton = ref();
var playing = ref(false);
var timenow = ref("00:00");
var duration = ref("00:00");
var rv = ref();
var progressNow = ref();
var videoDuration = ref(0);
function changeStatus(p: number) {
  sideStatus.value = p;
}
function change() {
  draw();
  playing.value = playing.value == false;
  if (playing.value) {
    play();
  } else {
    pause();
  }
}
function showSide() {
  showside.value = showside.value == false;
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
var canvas = ref();
function draw() {
  // var canvas = document.getElementById("canvas");
  const context = canvas.value.getContext("2d");
  canvas.value.width = video.videoWidth;
  canvas.value.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.value.width, canvas.value.height);
  canvas.value.style.scale = 1.6;
  canvas.value.style.filter = "blur(30px)";
}
async function like() {
  if (likeStatus) {
    likeStatus = false;
    likecolor.value = "white";
  } else {
    likeStatus = true;
    likecolor.value = "rgb(254,44,85)";
  }
}
var saveStatus = false;
var savecolor = ref("white");
function openMoreSide() {
  if (!showside.value) {
    sideStatus.value = 3;
    showside.value = true;
  } else if (sideStatus.value != 3) {
    sideStatus.value = 3;
  } else {
    showside.value = false;
  }
}
function openComment() {
  if (!showside.value) {
    sideStatus.value = 2;
    showside.value = true;
  } else if (sideStatus.value != 2) {
    sideStatus.value = 2;
  } else {
    showside.value = false;
  }
}
async function save() {
  if (saveStatus) {
    saveStatus = false;
    savecolor.value = "white";
  } else {
    saveStatus = true;
    savecolor.value = "rgb(255,184,2)";
  }
}
</script>
<style scoped>
.numinfo {
  font-size: 13px;
  color: white;
}
.shadow {
  z-index: -0.5;
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.5) inset;
}
.sideBar {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 50px;
  padding-right: 38px;
  right: 0px;
  bottom: 50px;
  z-index: 99;
}
.sideBar > div {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.sideInfo {
  height: 100%;
  width: 40%;
  min-width: 20%;
}
.canvas {
  position: relative;
}
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
.expand {
  overflow: hidden;
  position: absolute;
  right: -15px;
  top: 45%;
  width: 50px;
  /* background-color: antiquewhite; */
  height: 50px;
  bottom: 45%;
  z-index: 114514;
}
.expand:hover {
  fill: rgba(255, 255, 255, 1);
  margin-right: 10px;
  transition: 300ms;
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
.videoContainer {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 20px;
}
.vbox {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 440px;
}
.vbox:hover {
  cursor: pointer;
}
.pre-back {
  position: absolute;
  z-index: -2;
  background-color: black;
  height: 100%;
  width: 100%;
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
.icon1 {
  width: 40px;
  height: 40px;
}
.icon1:hover {
  scale: 1.2;
  transition: 300ms;
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
.himg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.headimg {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
}
.follow {
  position: absolute;
  z-index: 100;
  bottom: 0px;
}
.follow:hover {
  scale: 1.2;
  transition: 200ms;
}
</style>
