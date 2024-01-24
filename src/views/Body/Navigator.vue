<template>
  <div class="navigator">
    <ul class="items">
      <div @click="push('/home')">
        <span>首页</span>
      </div>
      <div @click="push('/recommend')"><span>推荐</span></div>
      <div @click="push('/follow')"><span>关注</span></div>
      <div @click="push('/friend')"><span>朋友</span></div>
      <div @click="push('/user')"><span>我的</span></div>
      <br />
      <div><span>直播</span></div>
      <div><span>放映厅</span></div>
      <div><span>知识</span></div>
      <br />
      <div><span>业务合作</span></div>
    </ul>
  </div>
</template>

<script setup name="Navigator">
import router from "@/router/index.ts";
function push(path) {
  router.push(path);
}
</script>

<style scoped>
.navigator {
  display: flex;
  width: 170px;
  height: 100%;
  background-color: rgb(22, 24, 35);
  .items {
    div {
      span {
        margin-left: 30px;
        margin-top: 15px;
        align-items: center;
      }
      /* justify-content: center; */ /*水平居中*/
      display: flex;
      width: 130px;
      margin-left: 20px;
      font-size: 15px;
      color: rgb(139, 140, 145);
      height: 50px;
      border-radius: 10px;
    }
    div:hover {
      color: #fff;
      background-color: rgb(39, 41, 51);
      cursor: pointer;
    }
  }
}
</style>
