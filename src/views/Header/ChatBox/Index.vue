<script setup lang="ts">
import {onMounted, onUnmounted, reactive, ref, nextTick} from "vue"
import Loading from "@/components/Loadings/loading1.vue"
import {useUserStore} from "@/store/status";
import {getChatHistory, getChatList} from "@/apis/chat";
//chat
// WebSocket 连接状态
const ws = ref();

const openWebSocket = () => {

  const userStore = useUserStore()
  let token = userStore.getToken();
  if (token == "" || token == null) return;
  // 创建 WebSocket 连接
  ws.value = new WebSocket(`ws://localhost:8081/whisper/${token}`);

  // 监听连接打开事件
  ws.value.addEventListener('open', (event: any) => {
    console.log('WebSocket 连接已打开:', event);
  });

  // 监听消息事件
  ws.value.addEventListener('message', (event: any) => {
    console.log('收到消息:', event.data);
    let obj = JSON.parse(event.data);
    chatMsgList.push({
      msg: obj.msg,
      id: obj.toUid,
      isMyMsg: false,
    })
    nextTick(() => {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    })
  });

  // 监听错误事件
  ws.value.addEventListener('error', (event: any) => {
    console.error('WebSocket 连接出错:', event);
    // 尝试重连
    // openWebSocket();
  });

  // 监听连接关闭事件
  ws.value.addEventListener('fclose', (event: any) => {
    console.log('WebSocket 连接已关闭:', event);
  });
};
const sendMessage = (message: string) => {
  if (ws.value && ws.value.readyState === WebSocket.OPEN) {
    ws.value.send(message);
  } else {
    console.error('WebSocket 连接未打开');
  }
};
// 组件卸载时关闭 WebSocket 连接
onUnmounted(() => {
  if (ws.value) {
    console.log("关闭websocket")
    ws.value.close();
  }
});
onMounted(() => {
  // 组件挂载时打开 WebSocket 连接
  openWebSocket();
  getChatList().then((data) => {
    chatList.push(...data.data)
  })
})

function openFullWindow(item: any) {
  windowStyle.value.width = "750px"
  showDialog.value = true
  chatListStyle.value.width = "250px"
  chatMsgList.length = 0
  isLoading.value = true
  friend = item.id;
  name.value = item.username
  getChatHistory(item.id).then((data) => {
    chatMsgList.push(...data.data);
    isLoading.value = false
    nextTick(() => {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    })
  })
}

function sendMsg(msg: string) {
  if (!input.value || input.value.length == 0) return;
  chatMsgList.push({
    msg: msg,
    id: "88",
    isMyMsg: true,
  })
  sendMessage(JSON.stringify({toUid: ["" + friend], msg: msg}))
  input.value = ""
  nextTick(() => {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  })
}

function exitDialog() {
  windowStyle.value.width = "350px"
  showDialog.value = false
  chatListStyle.value.width = "350px"
}

function closeWindow() {
  showChat.value = false;
}

const open = () => {
  showChat.value = true;
}
const fClose = () => {
  showChat.value = false;
}
const close = () => {
  if (showDialog.value) {
    return
  }
  showChat.value = false;
}

// eslint-disable-next-line no-undef
defineExpose({
  close,
  fClose,
  open
});

const input = ref()
const showChat = ref(false)
const chatMsgList: any = reactive([])
const showDialog: any = ref(false)
const windowStyle: any = ref({})
const chatListStyle: any = ref({})
const chatList: any = reactive([])
const isLoading = ref(true)
const name = ref()
let friend = 1;
let chatContainer: any = ref(null);
</script>

<template>
  <div class="chat-box-container" :style="windowStyle" v-show="showChat">
    <div class="chat-list" :style="chatListStyle">
      <div class="chatName">私信</div>
      <div class="noticeBox">
        <div class="noticeItem flex" @click="openFullWindow(chatListItem)" v-for="chatListItem in chatList"
             :key="chatListItem.id">
          <div class="chat-msg-avatar">
            <img class="full" :src="chatListItem.avatar" alt="">
          </div>
          <div class="chat-msg-info flex-column" style="padding-left: 10px; box-sizing: border-box; width: calc(100% - 40px);">
            <div style="height: 50%">
              {{ chatListItem.username }}
            </div>
            <div style="height: 50%">
              {{ chatListItem.tips }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-one2one" v-if="showDialog">
      <div class="chat-one2one-header flex" style="align-items: center">
        <div>{{ name }}</div>
        <div class="flex" style="align-items: center">
          <div class="hover" @click="exitDialog()">退出会话</div>
          <div style="height: 50px; width: 50px; align-content: center; text-align: center" class="hover"
               @click="closeWindow()">x
          </div>
        </div>
      </div>
      <div class="chat-one2one-content" style="height: 380px; width: 100%; position: relative; overflow-y: scroll;"
           ref="chatContainer">
        <div v-if="isLoading" style="height: 100%; width: 100%; position: absolute; z-index: 120;
         align-items: center; display: flex; justify-content: center; background-color: rgb(38,38,50)">
          <Loading></Loading>
        </div>
        <div class="chat-one2one-content-item">
          <div
              :style="{width: '100%', 'margin-bottom': '18px',display: 'flex','flex-direction': item.isMyMsg ?'row':'row-reverse'}"
              v-for="item in chatMsgList" :key="item.id">
            <div style="width: calc(100% - 30px); padding: 0 10px 0 10px; box-sizing: border-box;">
              <div :style="{display: 'flex','flex-direction': 'row', 'justify-content': item.isMyMsg ?'right':'left'}">
                <div style="background-color: rgb(65,66,76); max-width:200px; box-sizing: border-box; padding: 8px 14px;
                border-radius: 10px; color: white; align-content: center; flex-wrap: wrap; font-size: 13px">{{
                    item.msg
                  }}
                </div>
              </div>
            </div>
            <div style="height: 30px;width: 30px;">
              <div class="head-wrapper" style="height: 100%; width: 100%; border-radius: 50%">
                <img src="https://dummyimage.com/400x400" alt="" style="height: 100%; width: 100%;">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-one2one-footer" style="height: 70px; width: 100%;box-sizing: border-box; padding: 16px;">
        <input
            style="color:white;height: 100%;box-sizing: border-box;padding: 0 0 0 10px; border: 0; width: 100%; border-radius: 10px; background-color: rgb(65,66,76)"
            v-model="input" @keyup.enter="sendMsg(input)">
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-one2one-content-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
}

.chat-one2one {
  width: 500px;
  height: 100%;
}

.chat-one2one-header {
  height: 50px;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  text-align: left;
  color: white;
  box-sizing: border-box;
  padding-left: 5px;
}

.chat-list {
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0 15px 15px;
  flex-direction: column;
}

.chat-box-container {
  text-align: left;
  display: flex;
  height: 500px;
  width: 350px;
  z-index: 120;
  background-color: rgb(37, 38, 50);

  .chatName {
    color: white;
    height: 50px;
    align-content: center;
  }

  .noticeBox {
    height: calc(100% - 50px);
    box-sizing: border-box;
    overflow-y: scroll;
    width: 100%;
    padding-right: 9px;

    .noticeItem {
      color: white;
      height: 60px;
      width: 100%;
      border-radius: 10px;
      margin-bottom: 5px;
      box-sizing: border-box;
      padding: 10px;
    }

    .noticeItem:hover {
      cursor: pointer;
      background-color: rgb(53, 54, 65);
    }
  }
}

.chat-msg-avatar {
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
}

.chat-msg-info {

}

.noticeBox::-webkit-scrollbar,
.chat-one2one-content::-webkit-scrollbar {
  width: 6px;
}

/*滚动条的样式*/
.noticeBox::-webkit-scrollbar-thumb,
.chat-one2one-content::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
  left bottom,
  left top,
  color-stop(0.2, rgb(125, 126, 128)),
  color-stop(0.4, rgb(97, 98, 99)),
  color-stop(0.8, rgb(125, 126, 128)));
}
</style>