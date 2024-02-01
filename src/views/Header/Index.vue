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
      <div class="inner">
        <input v-model="username" class="inp1" placeholder="请输入用户名" />
        <input v-model="password" class="inp2" placeholder="请输入密码" />
        <button @click="loginF()" class="ensure">确认</button>
        <button @click="loginTableDisplay = false" class="ensure">返回</button>
      </div>
    </div>
  </div>
</template>

<script setup name="Header" lang="ts">
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
  window.location.reload();
}
</script>

<style scoped>
.ensure {
  border: 0;
  border-radius: 10px;
  background-color: rgb(255, 194, 198);
  color: white;
  height: 50px;
  width: 200px;
}
.inp1 {
  font-size: 14px;
  outline: 0;
  height: 52px;
  color: rgba(22, 24, 35, 0.34);
  background: #f2f2f4;
  border: none;
  border-radius: 10px;
  padding: 8px 20px 8px 10px;
  line-height: 24px;
}
.inp2 {
  font-size: 14px;
  margin-top: 24px;
  outline: 0;
  height: 28px;
  color: rgba(22, 24, 35, 0.34);
  background: #f2f2f4;
  border: none;
  border-radius: 10px;
  padding: 8px 20px 8px 10px;
  line-height: 24px;
}
.loginTable {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 114;
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
  }
  .block {
    padding: 24px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 360px;
    background-color: rgb(254, 245, 248);
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
  outline: 0;
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
