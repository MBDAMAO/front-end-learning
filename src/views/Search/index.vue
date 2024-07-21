<template>
  <div class="outer">
    <div class="searchContainer">
      <div class="middle">
        <div class="left">
          <div class="left-head">
            <div class="types">
              <div class="stypes">
                <div class="type-item">综合</div>
                <div class="type-item">视频</div>
                <div class="type-item">用户</div>
                <div class="type-item">直播</div>
              </div>
              <div class="control">
                <div class="control-items">标签</div>
                <div class="control-items">标签</div>
                <div class="control-items">标签</div>
              </div>
            </div>
            <div class="tags">
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
              <div class="tag-items">标签</div>
            </div>
          </div>
          <div class="results">
            <div class="vCont" v-for="item in vlist" :id="item.feed_item_id">
              <div class="info">
                <div class="upInfo"></div>
                <div class="downInfo"></div>
              </div>
              <Video :modal="item" class="video"></Video>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="related">
            <div class="related-title">相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
            <div class="related-info">相关搜索相关搜索相关搜索</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import Video from "@/components/VideoWindow/index.vue";
import {search} from "@/apis/search"
import {onBeforeMount, reactive, watch} from "vue"
import {useRoute} from "vue-router";

const vlist: any[] = reactive([])
const router = useRoute();

watch(() => router.params, (newParams) => {
  search(Array.isArray(newParams.text) ? newParams.text[0] : newParams.text).then((data) => {
    while (vlist.length) {
      vlist.pop()
    }
    vlist.push(...data.data)
  })
})

onBeforeMount(() => {
  search(Array.isArray(router.params.text) ? router.params.text[0] : router.params.text).then((data) => {
    while (vlist.length) {
      vlist.pop()
    }
    vlist.push(...data.data)
  })
})
</script>
<style scoped>
.outer {
  position: relative;
  overflow-y: scroll;
  z-index: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(22, 24, 35);
}

.outer::-webkit-scrollbar {
  width: 8px;
  /* background-color: rgb(20, 19, 19); */
}

/*滚动条的样式*/
.outer::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
  left bottom,
  left top,
  color-stop(0.2, rgb(125, 126, 128)),
  color-stop(0.4, rgb(97, 98, 99)),
  color-stop(0.8, rgb(125, 126, 128)));
}

.searchContainer {
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
}

.related-title {
  height: 50px;
  background-color: azure;
}

.related-info {
  height: 35px;
  color: white;
  background-color: black;
  margin-bottom: 5px;
}

.related {
  position: fixed;
  margin-top: 150px;
  background-color: aquamarine;
}

.upInfo {
  height: 50%;
  width: 100%;
  background-color: antiquewhite;
}

.downInfo {
  height: 50%;
  width: 100%;
}

.control {
  height: 100%;
  display: flex;
}

.stypes {
  height: 100%;
  display: flex;
}

.type-item {
  color: white;
  cursor: pointer;
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  background-color: black;
}

.tag-items {
  color: white;
  cursor: pointer;
  height: 100%;
  width: 80px;
  display: flex;
  background-color: black;
  align-items: center;
}

.control-items {
  background-color: black;
  color: white;
  cursor: pointer;
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
}

.info {
  height: 120px;
  width: 100%;
}

.middle {
  position: relative;
  width: 1540px;
  display: flex;
}

.vCont {
  height: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.video {
  border-radius: 0;
}

.left-head {
  z-index: 1145149;
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 0 100% 0 0;
  width: calc(100% - 390px);
  background-color: rgb(22, 24, 35);
}

.types {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.tags {
  height: 50%;
  width: 100%;
  display: flex;
}

.results {
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.left {
  position: relative;
  width: calc(100% - 290px);
}

.right {
  position: relative;
  width: 290px;
}
</style>