<template>
  <div class="container">
    <div class="inner">
      <Test videoSrc="1.mp4"></Test>
    </div>
    <div class="inner">
      <Test videoSrc="2.mp4"></Test>
    </div>
    <div class="inner">
      <Test videoSrc="3.mp4"></Test>
    </div>
    <div class="inner">
      <Test videoSrc="4.mp4"></Test>
    </div>
  </div>
</template>

<script setup name="Recommend" lang="ts">
import Test from "@/components/VideoWindow/Test.vue";
</script>

<style scoped>
.container {
  height: 100%;
  z-index: 0;
  overflow: auto;
  width: 100%;
  background-color: rgb(22, 24, 35);
}
.inner {
  margin-bottom: 100px;
  height: 90%;
  width: 98%;
}
</style>
