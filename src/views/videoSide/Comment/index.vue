<template>
  <div class="comment-container">
    <div class="comment-head">全部评论(125)</div>
    <div class="comment-bodys" @scroll="handScroll" ref="contentbox">
      <div class="commentsBoxs" v-for="item in list" :key="item.id">
        <Comment
          :content="item.content"
          :username="item.username"
          :pubtime="item.pubtime"
          :likes="item.likes"
        ></Comment>
      </div>
      <Loading v-show="isloading"></Loading>
    </div>
    <div class="comment-foot">
      <input class="commentInput" placeholder="留下你精彩的评论吧" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps } from "vue";
import Loading from "@/components/Loadings/loading1.vue";
import Comment from "@/components/Comment/index.vue";
import { getVideoComments } from "@/apis/comment";
var isloading = ref(false);
var contentbox = ref();
const props = defineProps({
  vid: String,
});
var list: comment[] = [
  {
    id: "1",
    content:
      "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
    likes: "12",
    headurl: "123",
  },
];
onMounted(() => {
  getVideoComments(props.vid).then((data) => {
    list.push(...data.data);
  });
  console.log(list);
});

var num = 81;
async function get(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
async function handScroll() {
  if (!isloading.value) {
    let scrollTop = contentbox.value.scrollTop;
    let scrollHeight = contentbox.value.scrollHeight;
    let clientHeight = contentbox.value.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      isloading.value = true;
      list.push({
        id: "1" + num,
        content:
          "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
        pubtime: "昨天",
        username: "@dingzhen" + num,
        likes: "12",
        headurl: "123",
      });
      await get(2000);
      isloading.value = false;
      num += 1;
    }
  }
}

interface comment {
  id: string;
  content: string;
  username: string;
  headurl: string;
  pubtime: string;
  likes: string;
}
</script>
<style scoped>
.comment-bodys::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0);
  background-color: rgb(20, 19, 19); */
}
/*定义滚动条整体的样式*/
.comment-bodys::-webkit-scrollbar {
  width: 6px;
  /* background-color: rgb(20, 19, 19); */
}
/*滚动条的样式*/
.comment-bodys::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.2, rgb(125, 126, 128)),
    color-stop(0.4, rgb(97, 98, 99)),
    color-stop(0.8, rgb(125, 126, 128))
  );
}
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
  margin-left: 20px;
  align-items: center;
}
.comment-bodys {
  height: 100%;
  width: 100%;
  overflow-y: overlay;
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
