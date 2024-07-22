<template>
  <div class="videoContainer">
    <div class="pre-back"></div>
    <div class="shadow"></div>
    <div class="background">
      <canvas id="canvas" class="canvas" ref="canvas"></canvas>
    </div>
    <div class="vbox">
      <div class="expand" @click="showSide()" v-show="!showside">
        <Expand/>
      </div>
      <div class="topPlay" @click="change()" v-show="!playing">
        <Pause/>
      </div>
      <div class="details">
        <div class="account">
          <div class="uploader">@{{ props.modal?.author.nickname }}</div>
          <div class="pubTime">· {{ props.modal?.video.publish_time }}</div>
        </div>
        <div class="title">
          <div class="content">{{ props.modal?.video.title }}</div>
          <div class="tags">{{ props.modal?.video.tags }}</div>
        </div>
      </div>
      <div class="sideBar">
        <div class="headimg">
          <img class="himg" :src=props.modal?.author.head_img alt=""/>
          <AddFollow></AddFollow>
        </div>
        <div class="like" v-on:click="like()">
          <LikeIcon :fill="likeColor" ref="likeButton" class="icon1"></LikeIcon>
          <div class="numinfo">{{ likeCount }}</div>
        </div>
        <div class="comment" v-on:click="openComment()">
          <Comment/>
          <div class="numinfo">{{ props.modal?.statistics.comment_count }}</div>
        </div>
        <div class="save" v-on:click="save()">
          <SaveStar :fill="savecolor"></SaveStar>
          <div class="numinfo">{{ props.modal?.statistics.save_count }}</div>
        </div>
        <div class="share">
          <svg-share/>
          <div class="numinfo">{{ props.modal?.statistics.share_count }}</div>
        </div>
        <div class="more" v-on:click="openMoreSide()">
          <SvgVideoWindow/>
          <div class="numinfo">看相关</div>
        </div>
        <div class="other">
          <Dotx3/>
        </div>
      </div>

      <div class="videoBlock">
        <video class="videoEntity" ref="rv" @click="change()" @timeupdate="update()">
          <source :src="props.modal?.video.src"/>
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
                <Pause2 v-show="!playing"/>
                <Play v-show="playing"></Play>
              </div>
              <div class="timeDetails">{{ timeNow }} / {{ duration }}</div>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sideInfo" v-if="showside">
      <VideoSide @close-event="showSide()" @changeStatus="(p: number) => changeStatus(p)" :status="sideStatus"
                 :vid="props.modal?.feed_item_id"></VideoSide>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onUnmounted, ref} from "vue";
import {onMounted} from "vue";
import {like as ILike} from "@/apis/video";
import VideoSide from "./videoSide/index.vue";
// svgs
import Pause from "@/svgs/Pause.vue";
import LikeIcon from "@/svgs/SvgLike.vue"
import AddFollow from "@/svgs/AddFollow.vue";
import Expand from "@/svgs/Expand.vue";
import Comment from "@/svgs/Comment.vue";
import SaveStar from "@/svgs/SaveStar.vue";
import Play from "@/svgs/Play.vue";
import SvgShare from "@/svgs/SvgShare.vue";
import SvgVideoWindow from "@/svgs/SvgVideoWindow.vue";
import Dotx3 from "@/svgs/Dotx3.vue";
import Pause2 from "@/svgs/Pause2.vue";
const props = defineProps({
  modal: Object,
});
const sideStatus = ref(2);
const showside = ref(false);
let likeStatus = false;
const likeColor = ref("white");
let video: any = null;
const likeButton = ref();
const playing = ref(false);
const timeNow = ref("00:00");
const duration = ref("00:00");
const rv = ref();
const progressNow = ref();
const videoDuration = ref(0);
const likeCount = ref();

function changeStatus(p: number) {
  sideStatus.value = p;
}

function change() {
  draw();
  playing.value = !playing.value;
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
  timeNow.value =
      (video.currentTime / 60).toFixed().padStart(2, "0") +
      ":" +
      (video.currentTime % 60).toFixed().padStart(2, "0");
  progressNow.value.style.width =
      "" + (video.currentTime / video.duration) * 100 + "%";
}

const progressBar: any = ref(null);

function tapProgressBar(event: Event | any) {
  if (progressBar.value == null) return;
  let rect = progressBar.value.getBoundingClientRect();
  let clickPercentage = (event.clientX - rect.left) / rect.width;
  video.currentTime = clickPercentage * video.duration;
}

onMounted(() => {
  likeCount.value = props.modal?.statistics.like_count
  video = rv.value;
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
  likeStatus = props.modal?.video.like_status;
  if (!likeStatus) {
    likeColor.value = "white";
  } else {
    likeColor.value = "rgb(254,44,85)";
  }
});
onUnmounted(() => {
  video.onloadedmetadata = null;
  video.onloadeddata = null;
})
const canvas = ref();

function draw() {
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
    likeColor.value = "white";
    likeCount.value -= 1;
    ILike(props.modal?.feed_item_id, "1");
  } else {
    likeStatus = true;
    likeCount.value += 1;
    likeColor.value = "rgb(254,44,85)";
    ILike(props.modal?.feed_item_id, "1");
  }
}

let saveStatus = false;
const savecolor = ref("white");

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
  right: 0;
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
  min-width: 350px;
}

.canvas {
  position: relative;
}

.details {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  padding: 16px 0 16px 0;
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
      font-family: "PingFang SC", serif;
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
  overflow-x: hidden;
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
  bottom: 0;
}

.follow:hover {
  scale: 1.2;
  transition: 200ms;
}
</style>
