<template>
  <div class="comment-container">
    <div class="comment-head">全部评论(125)</div>
    <div class="comment-bodys" @scroll="handScroll" ref="contentbox">
      <div class="commentsBoxs" v-for="item in list" :key="item.id">
        <Comment
          :content="item.content"
          :username="item.username"
          :pubtime="item.pubtime"
        ></Comment>
        <!-- <Comment v-for="list"></Comment> -->
      </div>
      <div class="loading" v-show="isloading">加载新内容中</div>
    </div>
    <div class="comment-foot">
      <input class="commentInput" placeholder="留下你精彩的评论吧" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import Comment from "@/components/Comment/index.vue";
var isloading = ref(false);
var contentbox = ref();
var list = [
  {
    id: 1,
    content:
      "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
  },
  {
    id: 2,
    content: "cma你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
  },
  {
    id: 3,
    content: "cma你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
  },
  {
    id: 4,
    content: "c你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你ma",
    pubtime: "昨天",
    username: "@dingzhen",
  },
  {
    id: 5,
    content: "cm你哈都i塞尼你你哈都i塞尼你a",
    pubtime: "昨天",
    username: "@dingzhen",
  },
  {
    id: 6,
    content: "cma你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
  },
  {
    id: 7,
    content: "cma你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
  },
];
var num = 8;
function handScroll() {
  let scrollTop = contentbox.value.scrollTop;
  let scrollHeight = contentbox.value.scrollHeight;
  let clientHeight = contentbox.value.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("没有评论了捏");
    isloading.value = true;
    list.push({
      id: num,
      content:
        "cma我是傻逼我是傻逼我是傻逼我是傻逼我是傻逼我是傻逼我是傻逼我是傻逼",
      pubtime: "1小时前·浙江",
      username: "@dingzhen",
    });
    isloading.value = false;
    num += 1;
  }
}

interface comment {
  content: string;
  username: string;
  headurl: string;
  pubtime: string;
  likes: string;
}
</script>
<style scoped>
.comment-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.comment-head {
  font-size: 15px;
  color: white;
  display: flex;
  height: 40px;
  align-items: center;
}
.comment-bodys {
  height: 100%;
  width: 100%;
  overflow: overlay;
}
.commentsBoxs {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
}
.comment-foot {
  height: 80px;
  display: flex;
  justify-content: center;
}
.commentInput {
  padding: 0 0 0 15px;
  margin-top: 10px;
  height: 40px;
  width: 370px;
  border: 0;
  background-color: rgba(190, 190, 190, 0.3);
  border-radius: 10px;
  color: rgb(255, 255, 255, 1);
}
.commentInput:hover {
  background-color: rgba(190, 190, 190, 0.4);
}
</style>
