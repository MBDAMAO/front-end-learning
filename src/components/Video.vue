<template>
  <div class="vbox">
    <div class="cover">
      <img class="coverImage" :src="url"  alt=""/>
    </div>
    <div class="details">
      <div class="title" :title="title">{{ truncatedTitle }}</div>
      <div class="blo">
        <div class="owner">@{{ ownername }}</div>
        <div class="time">{{ pubt }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
const props = defineProps(["url", "vid", "ownername", "pubt", "title"]);
const truncatedTitle = ref("");

onMounted(() => {
  // 处理title字段，如果大于30字符则截断并添加"..."
  truncatedTitle.value =
    props.title.length > 30 ? props.title.slice(0, 30) + "..." : props.title;
});
</script>

<style scoped>
.coverImage {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.blo {
  height: 30px;
  display: flex;
}
.title {
  color: white;
  height: 50px;
  display: flex;
  align-items: center; /* 垂直剧中，依赖于flex*/
  margin-left: 10px;
  word-wrap: break-word;
  word-break: break-all;
}
.owner {
  height: 30px;
  width: 50%;
  color: rgb(140, 141, 147);
  display: flex;
  font-size: 14px;
  align-items: center; /* 垂直剧中，依赖于flex*/
  margin-left: 10px;
}
.owner:hover {
  color: white;
}
.time {
  display: flex;
  align-items: center; /* 垂直剧中，依赖于flex*/
  margin-left: 10px;
  height: 30px;
  width: 50%;
  color: rgb(140, 141, 147);
  font-size: 12px;
}
.vbox {
  height: 300px;
  width: 280px;
  border-radius: 12px;
  background-color: rgb(37, 38, 50);
  transition: 200ms;
}
.cover {
  height: 220px;
  background-color: black;
}
.vbox:hover {
  cursor: pointer;
  scale: 1.02;
  .details {
    background-color: rgb(51, 52, 63);
  }
}
.details {
  height: 80px;
}
</style>
