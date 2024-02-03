<template>
  <div class="videoSide">
    <div class="back"></div>
    <div class="headnavi">
      <div class="option" v-on:click="open(1)">TA的作品</div>
      <div class="option" v-on:click="open(2)">评论</div>
      <div class="option" v-on:click="open(3)">相关推荐</div>
    </div>
    <div class="cutline"></div>
    <div class="content" v-show="status == 1">
      <Works></Works>
    </div>
    <div class="content" v-show="status == 2">
      <Comments></Comments>
    </div>
    <div class="content" v-show="status == 3">
      <Recommends></Recommends>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Comments from "./Comment/index.vue";
import Recommends from "./SimilarRecommend/index.vue";
import Works from "./Works/index.vue";
var status = ref(2);
function open(params: number) {
  status.value = params;
}
</script>
<style scoped>
.back {
  background-color: black;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.videoSide {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  /* background-color: aliceblue; */
}
.headnavi {
  display: flex;
  height: 7%;
  width: 100%;
  /* background-color: antiquewhite; */
}
.option {
  display: flex;
  flex-direction: column;
}
.option:hover {
  cursor: pointer;
}
.cutline {
  height: 1.1px;
  width: 100%;
  background-color: rgb(120, 120, 120);
  opacity: 0.2;
}
.content{
  height: 100%;
  width: 100%;
}
</style>
