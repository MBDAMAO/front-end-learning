<template>
  <div class="homePage">
    <div class="banner" v-show="close">
      <botton class="off" @click="offShow()">×关闭</botton>
    </div>
    <div class="content"><Video></Video></div>
  </div>
</template>

<script setup name="Home">
import { ref } from "vue";
import Video from "@/components/Video.vue";
let close = ref(true);
function offShow() {
  close.value = false;
}
</script>

<style scoped>
.off {
  color: black;
  font-size: 15px;
}
.off:hover {
  color: white;
  cursor: pointer;
}
.homePage {
  width: 100%;
  height: 100%;
  background-color: black;
}
.banner {
  height: 135px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: rgb(139, 140, 145);
}
</style>
