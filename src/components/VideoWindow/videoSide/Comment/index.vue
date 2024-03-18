<template>
  <div class="comment-container">
    <div class="comment-head">全部评论(125)</div>
    <div class="comment-bodys" @scroll="handScroll" ref="contentbox">
      <div class="commentsBoxs" v-for="item in list" :key="item.id">
        <Comment :content="item.content" :username="item.username" :pubtime="item.pubtime" :likes="item.likes"
          @func="reply"></Comment>
      </div>
      <Loading v-show="isloading"></Loading>
    </div>
    <div class="comment-foot">
      <div class="replyTip" v-show="isReplyIng">
        <div class="replyTo">{{ replyName }}</div>
        <div class="content">{{ contentRefer }}</div>
        <div class="cancel">{{ 'X' }}</div>
      </div>
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
var isReplyIng = ref(false);
var replyTo = ref(0)
var replyName = ref('')
var contentRefer = ref('')

const props = defineProps({
  vid: String,
});
function reply(data: any) {
  if (replyTo.value == data.id && isReplyIng.value) {
    isReplyIng.value = false;
  } else {
    replyTo.value = data.id;
    replyName.value = '@' + data.username;
    contentRefer.value = data.content;
    isReplyIng.value = true;
  }
}
var list: comment[] = [
  {
    id: "1",
    content:
      "我去，我最喜欢的一集",
    pubtime: "昨天",
    username: "飞舞",
    likes: "12",
    headurl: "123",
  },
  {
    id: "2",
    content:
      "阿八八八八八八八",
    pubtime: "昨天",
    username: "田所浩二",
    likes: "12",
    headurl: "123",
  },
  {
    id: "3",
    content:
      "？？？？？？？？？？？？？？？？",
    pubtime: "昨天",
    username: "@dingzhen",
    likes: "12",
    headurl: "123",
  },
  {
    id: "4",
    content:
      "你说我有点难追，好让他知难而退，礼物必须挑最贵",
    pubtime: "昨天",
    username: "JayChou",
    likes: "12",
    headurl: "123",
  },
  {
    id: "5",
    content:
      "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
    likes: "12",
    headurl: "123",
  },
  {
    id: "6",
    content:
      "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
    likes: "12",
    headurl: "123",
  },
  {
    id: "7",
    content:
      "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
    likes: "12",
    headurl: "123",
  },
  {
    id: "8",
    content:
      "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
    pubtime: "昨天",
    username: "@dingzhen",
    likes: "12",
    headurl: "123",
  },
  {
    id: "9",
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
/* .comment-bodys::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0);
  background-color: rgb(20, 19, 19);
} 
*/

/*定义滚动条整体的样式*/
.comment-bodys::-webkit-scrollbar {
  width: 6px;
  /* background-color: rgb(20, 19, 19); */
}

/*滚动条的样式*/
.comment-bodys::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.2, rgb(125, 126, 128)),
      color-stop(0.4, rgb(97, 98, 99)),
      color-stop(0.8, rgb(125, 126, 128)));
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
  flex-direction: column;
  height: 80px;
  display: flex;
  align-items: center;
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
