<template>
  <div class="head">
    <div class="left-logo">
      <p>抖音🎶</p>
    </div>
    <div class="search">
      <input class="main-input" v-model="mainInput" id="main-input" type="text" placeholder="搜索你感兴趣的内容"
        @keyup.enter="push()" />
      <div class="searchBlock">
        <div class="box1">
          <div class="info">历史记录</div>
          <div class="histories">
            <div class="testLine" v-for="item in historyList" @click="addToInput(item.text)">{{ item.text }}</div>
          </div>
        </div>
        <div class="box2">
          <div class="info">猜你想搜</div>
          <div class="recommends">
            <div class="testLine2" v-for="item in recommendList" @click="pushValue(item.content)">{{ item.content }}</div>
          </div>
        </div>
        <div class="box3">
          <div class="info">热点</div>
          <div class="hots">
            <div class="hTopic" v-for="item in hotList" @click="pushValue(item.content)">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="fake">
        <div class="content">冲钻石</div>
        <div class="msg">
          <div class="chatName">钻石充值</div>
          <div class="select">
            <div class="price" v-for="item in priceList">
              <div class="up">{{ item.content }}</div>
              <div class="down">{{ item.price }}</div>
            </div>
          </div>
          <div class="payment">

          </div>
        </div>
      </div>
      <div class="fake">
        <div class="content">客户端</div>
        <!-- <div class="msg"></div> -->
      </div>
      <div class="fake">
        <div class="content">快捷访问</div>
        <!-- <div class="msg"></div> -->
      </div>
      <div class="fake1">
        <div class="content">通知</div>
        <div class="notice">
          <div class="chatName">互动消息</div>
          <div class="noticeBox">
            <div class="noticeItem" v-for="item in noticeList"></div>
          </div>
        </div>
      </div>
      <div class="fake2">
        <div class="content">私信</div>
        <div class="chat">
          <div class="chatName">私信</div>
          <div class="noticeBox">
            <div class="noticeItem" v-for="item in chatList"></div>
          </div>
        </div>
      </div>
      <div class="fake3">
        <div class="content">投稿</div>
        <div class="tougao">
        </div>
      </div>
      <div class="login-container" style="height: 100%;">
        <div class="header-headimg" v-if="isUserLoggedIn">
          <img class="header-headimg-img" src="http://dummyimage.com/400x400">
          <div class="self-dropdown">
            <div class="self-dropdown-header" style="height: 55px; width: 100%; display: flex; margin-bottom: 8px;">
              <div class="self-dropdown-header-img-container" style="height:55px; width: 55px;  padding: 0 5px 0 5px;">
                <div class="self-dropdown-header-img-warpper" style="height: 100%; width: 100%; border-radius: 50%;">
                  <img class="self-dropdown-header-img" style="height: 100%; width: 100%;"
                    src="http://dummyimage.com/400x400">
                </div>
              </div>
              <div class="self-dropdown-header-info" style="height: 100%; width: calc(100% - 80px);">
                <div class="self-dropdown-header-info-name" style="height: 50%; width: 100%; align-content: center;">
                  1231
                </div>
                <div class="self-dropdown-header-info-statistics"
                  style="height: 50%; width: 100%; align-content: center; ">
                  123123
                </div>
              </div>
            </div>
            <div class="self-dropdown-item self-dropdown-likes"></div>
            <div class="self-dropdown-item self-dropdown-collections"></div>
            <div class="self-dropdown-item self-dropdown-histories"></div>
            <div class="self-dropdown-item self-dropdown-watchsoon"></div>
            <div class="self-dropdown-item self-dropdown-posts"></div>
            <div class="self-dropdown-orders"></div>
            <div class="self-dropdown-logout" @click="logout()">退出登录</div>
          </div>
        </div>
        <button v-if="!isUserLoggedIn" class="login" @click="loginTableDisplay = true">登录</button>
      </div>
    </div>
  </div>
  <div class="loginTable" v-if="loginTableDisplay">
    <div class="block">
      <div class="inner">
        <input v-model="username" class="inp1" placeholder="请输入用户名" />
        <input v-model="password" class="inp2" placeholder="请输入密码" />
        <button @click="loginF()" class="ensure" :class="{ 'redColor': canSubmit }" :disabled="!canSubmit">确认</button>
        <button @click="loginTableDisplay = false" class="exit">返回</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onBeforeMount } from "vue";
import { login } from "@/apis/user";
import { useUserStore } from "@/store/status"
import router from "@/router/index";

// input
const recommendList: any[] = reactive([])
const hotList: any[] = reactive([])
const historyList: any[] = reactive([])
const setHistory = (data: any[]) => {
  historyList.push(...data);
}
const setHots = (data: any[]) => {
  hotList.push(...data);
}
const setRecommends = (data: any[]) => {
  recommendList.push(...data);
}

// search
const mainInput = ref()
function addToInput(text: string) {
  mainInput.value = text;
}
function push() {
  let searchText = document.getElementById("main-input")?.value;
  let path = `/search/${searchText}`;
  router.push({ path: path })
}
function pushValue(input: string) {
  let path = `/search/${input}`;
  router.push({ path: path })
}

// login & logout
const userStore = useUserStore();
const isUserLoggedIn = computed(() => userStore.isLoggedIn);
const loginTableDisplay = ref(false);
const password = ref();
const username = ref();
const canSubmit = computed(() => {
  return username.value !== '' && password.value !== ''
});
async function loginF() {
  let data = await login({
    username: username.value,
    password: password.value,
  });
  console.log(data.data.token)
  localStorage.setItem("token", data.data.token);
  userStore.login()
  console.log(userStore.isLoggedIn)
  window.location.reload();
}

async function logout() {
  localStorage.removeItem("token");
  userStore.logout()
  window.location.reload();
}

// price
const priceList: any[] = reactive([])
function setPrice(data: any[]) {
  priceList.push(...data)
}

// noticeList
const noticeList: any[] = reactive([])
function setNotice(data: any[]) {
  noticeList.push(...data)
}
// chatList
const chatList: any[] = reactive([])
function setChat(data: any[]) {
  chatList.push(...data)
}
onBeforeMount(() => {
  setNotice([
    {}, {}, {}, {}, {}, {}, {}, {}
  ])
  setChat([
    {}, {}, {}, {}, {}, {}, {}, {}
  ])
  setHistory([
    {
      "text": "wtf"
    },
    {
      "text": "你好"
    },
    {
      "text": "嘻嘻了这下"
    },
  ])
  setRecommends([
    {
      "content": "wtf"
    },
    {
      "content": "你好"
    },
    {
      "content": "嘻嘻了这下"
    },
  ])
  setHots([
    {
      "content": "wtf"
    },
    {
      "content": "你好"
    },
    {
      "content": "嘻嘻了这下"
    },
  ])
  setPrice([
    {
      "content": "10钻石",
      "price": "￥6"
    },
    {
      "content": "10钻石",
      "price": "￥6"
    },
    {
      "content": "10钻石",
      "price": "￥6"
    },
    {
      "content": "10钻石",
      "price": "￥6"
    },
    {
      "content": "10钻石",
      "price": "￥6"
    },
    {
      "content": "10钻石",
      "price": "￥6"
    },
    {
      "content": "10钻石",
      "price": "￥6"
    },
  ])
})
</script>

<style scoped lang="scss">
$red: rgb(255, 61, 94);
$red-selected: rgb(249, 31, 67);

@mixin flex-column-box {
  display: flex;
  flex-direction: column;
}

.self-dropdown {
  top: 63px;
  margin-top: 5px;
  max-height: 500px;
  min-height: 400px;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 15px 15px 15px 15px;
  margin-top: 5px;
  right: 20px;
  width: 320px;
  border-radius: 10px;
  position: absolute;
  z-index: 120;
  display: none;
  /* display: flex; */
  flex-direction: column;
  box-shadow: 0 0 20px 0 black;
  background-color: rgb(37, 38, 50);
}

.login-container:hover {
  .self-dropdown {
    display: flex;
  }
}

.header-headimg {
  background-color: #009fb7;
  border-radius: 50%;
  height: 100%;
  width: 68px;
}

.header-headimg-img {
  cursor: pointer;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.payment {
  height: 200px;
  width: 100%;
  background-color: #009fb7;
  box-sizing: border-box;
  margin-top: 5px;
  border-radius: 10px;
}

.chatName {
  color: white;
}

/*定义滚动条整体的样式*/
.noticeBox::-webkit-scrollbar {
  width: 6px;
  /* background-color: rgb(20, 19, 19); */
}

/*滚动条的样式*/
.noticeBox::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.2, rgb(125, 126, 128)),
      color-stop(0.4, rgb(97, 98, 99)),
      color-stop(0.8, rgb(125, 126, 128)));
}

.notice {
  top: 63px;
  margin-top: 5px;
  max-height: 500px;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 15px 0 15px 15px;
  margin-top: 5px;
  left: -160px;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  z-index: 120;
  display: none;
  /* display: flex; */
  flex-direction: column;
  box-shadow: 0 0 20px 0 black;
  background-color: rgb(37, 38, 50);

  .chatName {
    height: 50px;
  }

  .noticeBox {
    box-sizing: border-box;
    overflow-y: auto;
    width: 100%;
    margin-top: 10px;
    padding-right: 5px;

    .noticeItem {
      height: 80px;
      width: 100%;
      background-color: black;
      border-radius: 10px;
      margin-bottom: 5px;
    }

    .noticeItem:hover {
      cursor: pointer;
      background-color: rgb(53, 54, 65);
    }
  }
}

.fake1:hover .notice {
  display: flex;
}

.fake2:hover .chat {
  display: flex;
}

.fake3:hover .notice {
  display: flex;
}

.chat {
  top: 63px;
  margin-top: 5px;
  height: 500px;
  box-sizing: border-box;
  padding: 15px 0 15px 15px;
  margin-top: 5px;
  left: -200px;
  width: 350px;
  border-radius: 10px;
  position: absolute;
  z-index: 120;
  display: none;
  /* display: flex; */
  flex-direction: column;
  background-color: rgb(37, 38, 50);
  box-shadow: 0 0 20px 0 black;

  .chatName {
    height: 50px;
  }

  .noticeBox {
    box-sizing: border-box;
    overflow-y: auto;
    width: 100%;
    margin-top: 10px;
    padding-right: 5px;

    .noticeItem {
      height: 80px;
      width: 100%;
      background-color: black;
      border-radius: 10px;
      margin-bottom: 5px;
    }

    .noticeItem:hover {
      cursor: pointer;
      background-color: rgb(53, 54, 65);
    }
  }
}

.box1 {
  margin-bottom: 10px;
  margin-top: 10px;
}

.hTopic {
  border-radius: 5px;
  color: white;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  padding: 0 5px 0 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.hTopic:hover {
  background-color: rgb(51, 52, 63);
  cursor: pointer;
}

.testLine2 {
  border-radius: 5px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  padding: 0 5px 0 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.testLine2:hover {
  background-color: rgb(51, 52, 63);
  cursor: pointer;
}


.testLine {
  background-color: rgb(51, 52, 63);
  border-radius: 5px;
  color: white;
  height: 25px;
  font-size: 10px;
  line-height: 25px;
  padding: 0 5px 0 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.histories {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.testLine:hover {
  cursor: pointer;
  background-color: rgb(93, 95, 103);
}

.recommends {
  width: 100%;
  display: grid;
  color: white;
  grid-template-columns: repeat(2, 1fr);
}


.hots {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.search:hover .searchBlock,
.main-input:focus+.searchBlock {
  display: flex;
}

.fake:hover .msg {
  display: flex;
  top: 63px;
}

.info {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: rgb(168, 168, 173);
}

.search {
  overflow-y: visible;
  z-index: 115;
  position: relative;
}

.searchBlock {
  box-sizing: border-box;
  padding: 15px;
  margin-top: 5px;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 118;
  display: none;
  /* display: flex; */
  flex-direction: column;
  background-color: rgb(37, 38, 50);
}

.msg {
  transition: 200ms;
  top: -200px;
  /* top: 63px; */
  margin-top: 5px;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 5px;
  left: -160px;
  width: 560px;
  border-radius: 10px;
  position: absolute;
  z-index: 120;
  display: none;
  /* display: flex; */
  flex-direction: column;
  background-color: rgb(37, 38, 50);
  box-shadow: 0 0 20px 0 black;

  .select {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    .price {
      color: white;
      justify-content: center;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      margin: 5px;
      height: 80px;
      background-color: rgb(51, 52, 63);
      border-radius: 10px;

      .down {
        color: rgb(204, 204, 207);
        margin-top: 2px;
      }
    }

    .price:hover {
      cursor: pointer;
      background-color: rgb(65, 66, 76);
    }
  }
}

.ensure {
  border: 0;
  border-radius: 10px;
  background-color: rgb(255, 194, 198);
  color: white;
  margin-top: 20px;
  height: 50px;
  width: 200px;
}

.redColor {
  background-color: $red;
  cursor: pointer;
}


.exit {
  background-color: $red;
  border: 0;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  height: 50px;
  width: 200px;
}

.exit:hover {
  cursor: pointer;
}

.inp1 {
  font-size: 14px;
  outline: 0;
  height: 28px;
  /* color: rgba(22, 24, 35, 0.34); */
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
  /* color: rgba(22, 24, 35, 0.34); */
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
  z-index: 1148;

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
  background-color: $red;
}

.login:hover {
  background-color: $red-selected;
}

.left-logo {
  display: flex;
  min-width: 100px;

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
  min-width: 300px;
  border-radius: 10px;
  /*加圆角*/
  padding-left: 10px;
  /*左侧输入padding*/
  font-family: Microsoft YaHei, serif;

  font-size: 15px;
  color: rgb(255, 255, 255);
  /*字体颜色*/
  margin-top: 16.5px;
  background-color: rgb(22, 24, 35);
  height: 35px;
  width: 400px;
}

.right {
  overflow-y: visible;
  display: flex;
  min-width: 500px;
  justify-content: space-between;

  .fake,
  .fake1,
  .fake2,
  .fake3 {
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 118;
    overflow-y: visible;
    position: relative;
    text-align: center;
  }

  .content {
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

.right .content:hover {
  color: #fff;
  cursor: pointer;
}

.head {
  /* overflow-x: hidden; */
  overflow-y: visible;
  position: absolute;
  z-index: 114;
  height: 68px;
  width: 100%;
  display: flex;
  background-color: rgb(22, 24, 35);
  justify-content: space-between;
}

.self-dropdown-logout {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: black;
  color: white;
  align-content: center;
  box-sizing: border-box;
  padding-left: 5px;
  cursor: pointer;
}

.self-dropdown-item {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: rgb(51, 52, 63);
  margin-bottom: 8px;
  cursor: pointer;
}

.self-dropdown-item:hover {
  background-color: rgb(65, 66, 76);
}
</style>
