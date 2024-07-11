<template>
  <div class="container">
    <div class="headSide">
      <img class="img" :src=props.comment.user.avatar alt="" />
    </div>
    <div class="rightSide">
      <div class="name">
        {{ props.comment.user.nickname }}
      </div>
      <div class="content">
        {{ props.comment.text }}
      </div>
      <div class="time">
        {{ props.comment.create_time }}
      </div>
      <div class="options">
        <div class="opItem" @click="reply">
          <Comment class="opIcon"></Comment>
          <div class="genshin">回复</div>
        </div>
        <div class="opItem">
          <Share class="opIcon"></Share>
          <div class="genshin">分享</div>
        </div>
        <div class="opItem" @click="like">
          <Like class="opIcon" :fill="likeColor"></Like>
          <div class="genshin">{{ Number(props.comment.likes) + likeCount }}</div>
        </div>
        <div class="opItem">
          <HeartBreak class="opIcon"></HeartBreak>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
import Like from "@/svgs/SvgLike.vue";
import Comment from "@/svgs/Comment.vue";
import Share from "@/svgs/SvgShare.vue";
import { PINK, GREY } from "@/constant/color";
import HeartBreak from "@/svgs/SvgHeartBreak.vue";

const likeCount = ref(0);
let likeStatus = false;
const likeColor = ref(GREY);
const props = defineProps({
  comment: Object
});
function like() {
  likeCount.value = 1 - likeCount.value;
  if (!likeStatus) {
    likeColor.value = PINK;
  } else {
    likeColor.value = GREY;
  }
  likeStatus = !likeStatus
}

const emit = defineEmits(['func'])
function reply() {
  emit('func', {
    'username': props.comment.user.nickname,
    'id': props.comment.cid,
    'content': props.comment.text
  });
}
</script>
<style scoped>
.genshin {
  display: flex;
  align-items: center;
}

.opIcon {
  margin-right: 3px;
  fill: rgb(169, 169, 169);
}

.opItem {
  color: rgb(169, 169, 169);
  display: flex;
  margin-right: 10px;
  height: 100%;
}

.opItem:hover {
  cursor: pointer;
  color: white;

  .opIcon {
    fill: white;
  }
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  /* background-color: rgba(55, 55, 55, 0.2); */
  width: 100%;
  margin-bottom: 10px;
}

.img {
  height: 40px;
  width: 40px;
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
  height: 20px;
  margin-top: 15px;
  color: white;
}
</style>
