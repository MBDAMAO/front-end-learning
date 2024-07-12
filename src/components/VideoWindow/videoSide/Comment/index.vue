<template>
  <div class="comment-container">
    <div class="comment-head">全部评论(125)</div>
    <div class="comment-bodys" ref="contentbox">
      <div class="commentsBoxs" v-for="item in list" :key="item.cid">
        <Comment :comment="item" @func="reply"></Comment>
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
import { ref, onMounted, reactive } from "vue";
import Loading from "@/components/Loadings/loading1.vue";
import Comment from "@/components/Comment/index.vue";
import { getVideoComments } from "@/apis/comment";
const isloading = ref(false);
const contentbox = ref();
const isReplyIng = ref(false);
const replyTo = ref(0)
const replyName = ref('')
const contentRefer = ref('')

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

const list: any[] = reactive([]);
onMounted(() => {
  // contentbox.value.addEventListener('onscroll', () => {
  //   handScroll();
  // });
  isloading.value = true;
  getVideoComments("1").then((data) => {
    list.push(...data.comments);
    isloading.value = false;
  });
});

async function handScroll() {
  if (!isloading.value) {
    let scrollTop = contentbox.value.scrollTop;
    let scrollHeight = contentbox.value.scrollHeight;
    let clientHeight = contentbox.value.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      isloading.value = true;
      list.push({
        id: "1",
        content:
          "你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你你哈都i塞尼你",
        pubtime: "昨天",
        username: "@dingzhen",
        likes: "12",
        headurl: "123",
      });
      isloading.value = false;
    }
  }
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
  width: 100%;
}

.commentInput {
  padding: 0 0 0 15px;
  margin-top: 10px;
  height: 40px;
  width: 90%;
  border: 0;
  background-color: rgba(190, 190, 190, 0.3);
  border-radius: 10px;
  color: rgb(255, 255, 255, 1);
}

.commentInput:hover {
  background-color: rgba(190, 190, 190, 0.4);
}
</style>
