<script setup lang="ts">
import {ref, reactive, onMounted} from "vue";
import router from "@/router";
// eslint-disable-next-line no-undef
onMounted(() => {
  initHistory([
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
})

const recommendList: any[] = reactive([])
const hotList: any[] = reactive([])
const historyList: any[] = reactive([])
const initHistory = (data: any[]) => {
  historyList.push(...data);
}
const setHots = (data: any[]) => {
  hotList.push(...data);
}
const setRecommends = (data: any[]) => {
  recommendList.push(...data);
}
const mainInput = ref()

function addToInput(text: string) {
  mainInput.value = text;
}

function pushValue(input: string) {
  let path = `/search/${input}`;
  historyList.push({"text": input});
  router.push({path: path})
}

let bShow = ref(false)

function open() {
  console.log(123)
  bShow.value = true
}

function close() {
  bShow.value = false
}
function addHistory(text:string) {
  historyList.push({"text": text});
}
// eslint-disable-next-line no-undef
defineExpose({open, close,addHistory})
</script>

<template>
  <div class="searchBlock" v-show="bShow">
    <div class="box1">
      <div class="info">历史记录</div>
      <div class="histories">
        <div class="testLine" v-for="item in historyList" @click="addToInput(item.text)">{{ item.text }}</div>
      </div>
    </div>
    <div class="box2">
      <div class="info">猜你想搜</div>
      <div class="recommends">
        <div class="testLine2" v-for="item in recommendList" @click="pushValue(item.content)">{{ item.content }}
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="info">热点</div>
      <div class="hots">
        <div class="hTopic" v-for="item in hotList" @click="pushValue(item.content)">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchBlock {
  box-sizing: border-box;
  padding: 15px;
  margin-top: 5px;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 118;
  display: flex;
  /* display: flex; */
  flex-direction: column;
  background-color: rgb(37, 38, 50);
}
.box1 {
  margin-bottom: 10px;
  margin-top: 10px;
}

.info {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: rgb(168, 168, 173);
}
.histories {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
.testLine:hover {
  cursor: pointer;
  background-color: rgb(93, 95, 103);
}
</style>