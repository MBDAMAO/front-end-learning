<template>
  <div class="container">
    <div class="headSide">
      <img class="img" src="/head.png" />
    </div>
    <div class="rightSide">
      <div class="name">
        {{ props.username }}
      </div>
      <div class="content">
        {{ props.content }}
      </div>
      <div class="time">
        {{ props.pubtime }}
      </div>
      <div class="options">回复 分享 点赞{{ props.likes }} 点踩</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  id: String,
  content: String,
  username: String,
  headurl: String,
  pubtime: String,
  likes: String,
});
</script>
<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: row;
  /* background-color: rgba(55, 55, 55, 0.2); */
  width: 100%;
  margin-bottom: 10px;
}
.img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.headSide {
  display: flex;
  height: 100%;
  width: 50px;
  /* background-color: white; */
  margin-right: 8px;
}
.rightSide {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 4px;
  /* background-color: antiquewhite; */
}
.name {
  height: 30px;
  color: rgb(169, 169, 169);
}
.time {
  margin-top: 5px;
  color: rgb(169, 169, 169);
}
.content {
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  display: flex;
  color: white;
}
.options {
  display: flex;
  margin-top: 15px;
  color: white;
}
</style>
