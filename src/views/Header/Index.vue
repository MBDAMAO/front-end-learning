<template>
  <div class="head">
    <div class="left-logo">
      <p>抖音🎶</p>
    </div>
    <input class="main-input" type="text" placeholder="搜索你感兴趣的内容" />
    <div class="right">
      <span>冲钻石</span>
      <span>客户端</span>
      <span>快捷访问</span>
      <span>通知</span>
      <span>私信</span>
      <span>投稿</span>
      <button class="login" @click="loginTableDisplay = true">登录</button>
    </div>
  </div>
  <div class="loginTable" v-if="loginTableDisplay">
    <div class="block">
      <input v-model="username" />
      <input v-model="password" />
      <button @click="loginF()"></button>
      <button @click="loginTableDisplay = false"></button>
    </div>
  </div>
</template>

<script setup name="Header">
import { ref } from "vue";
import { login } from "@/apis/user";
const loginTableDisplay = ref(false);
var password = ref("");
var username = ref("");
async function loginF() {
  let data = await login({
    username: username.value,
    password: password.value,
  });
  console.log(data);
  localStorage.setItem("token", data.data.token);
}
</script>

<style scoped>
.loginTable {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 114;
  .block {
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 360px;
    background-color: aliceblue;
  }
}
.login {
  cursor: pointer;
  border-radius: 10px;
  border: 0;
  margin-left: 15px;
  color: #fff;
  font-size: 15px;
  margin-top: 14px;
  height: 38px;
  width: 80px;
  background-color: rgb(255, 61, 94);
}
.login:hover {
  background-color: rgb(249, 31, 67);
}
.left-logo {
  display: flex;
  p {
    color: rgb(255, 255, 255);
    width: 100px;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
  }
}
.main-input {
  border-style: solid;
  border-color: aliceblue;
  border-radius: 10px; /*加圆角*/
  padding-left: 10px; /*左侧输入padding*/
  font-family: Microsoft YaHei;

  font-size: 15px;
  color: rgb(255, 255, 255); /*字体颜色*/
  margin-top: 16.5px;
  background-color: rgb(22, 24, 35);
  height: 35px;
  width: 400px;
}
.right {
  display: flex;
  span {
    color: rgb(139, 140, 145);
    margin-left: 10px;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
  }
  margin-right: 20px;
}
.right span:hover {
  color: #fff;
  cursor: pointer;
}
.head {
  position: fixed;
  z-index: 114;
  height: 68px;
  width: 100%;
  display: flex;
  background-color: rgb(22, 24, 35);
  justify-content: space-between;
}
</style>
