<template>
  <div class="container">
    <div class="head">全部评论(125)</div>
    <div class="body">
      <div class="commentsBoxs">
        <Comment></Comment>
        <!-- <Comment v-for="list"></Comment> -->
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import Comment from "@/components/Comment/index.vue";
var list = [];
interface comment {
  content: string;
  username: string;
  headurl: string;
  pubtime: string;
  likes: string;
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  font-size: 15px;
  color: white;
  display: flex;
  height: 40px;
  align-items: center;
}
</style>
