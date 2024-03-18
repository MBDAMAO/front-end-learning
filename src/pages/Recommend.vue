<template>
  <div class="recommend-container" ref="container" @wheel="handleScroll">
    <div class="inner-wrapper">
      <div class="inner" v-for="(item, index) in items" :key="index" :id="'inner_' + index">
        <FeedModel :videoSrc="item.videoSrc" :ref="setTestRef(index)" :vid="item.vid"></FeedModel>
      </div>
    </div>
  </div>
</template>

<script setup name="Recommend" lang="ts">
import FeedModel from "@/components/VideoWindow/index.vue";
import { ref, onMounted, toRef, reactive } from 'vue';

const container = ref<HTMLElement | null>(null);
const currentIndex = ref(0);

var items: any = reactive([
  { videoSrc: "j (1).mp4", vid: "1" },
  { videoSrc: "j (2).mp4", vid: "1" },
  { videoSrc: "j (3).mp4", vid: "1" },
  { videoSrc: "j (4).mp4", vid: "1" },
  { videoSrc: "j (5).mp4", vid: "1" },
  { videoSrc: "j (6).mp4", vid: "1" },
  { videoSrc: "j (7).mp4", vid: "1" },
  { videoSrc: "j (8).mp4", vid: "1" },
  { videoSrc: "j (9).mp4", vid: "1" },
  { videoSrc: "j (10).mp4", vid: "1" }
]);
const testRefs = ref<InstanceType<typeof FeedModel>[]>([]);
// 设置Test组件的引用  
const setTestRef = (index: number) => (el: InstanceType<typeof FeedModel> | null) => {
  if (el) {
    testRefs.value[index] = el;
  }
};
async function loadRecommend() {
  items.push({ videoSrc: "j (11).mp4", vid: "1" })
  items.push({ videoSrc: "j (12).mp4", vid: "1" })
  items.push({ videoSrc: "j (13).mp4", vid: "1" })
}
const handleScroll = (e: WheelEvent) => {
  if (!container.value) return;
  const target = e.target as HTMLElement;
  if (!container.value.contains(target)) return;
  e.preventDefault();
  if (currentIndex.value >= items.length - 2) {
    loadRecommend()

  }
  const innerElements = container.value.querySelectorAll('.inner');
  let closestIndex = 0;
  let distance = Infinity;

  innerElements.forEach((element, index) => {
    if (!container.value) return;
    const rect = element.getBoundingClientRect();
    const offset = Math.abs(rect.top - container.value.getBoundingClientRect().top);
    if (offset < distance) {
      closestIndex = index;
      distance = offset;
    }
  });

  let newIndex = closestIndex;

  if (e.deltaY > 0 && newIndex < innerElements.length - 1) {
    newIndex++;
  } else if (e.deltaY < 0 && newIndex > 0) {
    newIndex--;
  }

  const targetInner = container.value.querySelector(`#inner_${newIndex}`);
  if (targetInner) {
    targetInner.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    currentIndex.value = newIndex;

    // // 获取新索引对应的Test组件实例  
    // const prevTestComponent = testRefs.value[currentIndex.value - 1];
    // if (prevTestComponent) {
    //   // 调用Test组件的方法或访问其属性  
    //   prevTestComponent.exposedFunctions.change(); // 假设Test组件有一个名为`change`的方法  
    // }
  }
};

onMounted(() => {
  loadRecommend()
  if (container.value) {
    container.value.addEventListener('wheel', handleScroll);
  }
});
</script>

<style scoped>
.recommend-container {
  height: 100%;
  position: relative;
  /* 固定容器的位置 */
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  /* 隐藏溢出内容 */
  width: 100%;
  background-color: rgb(22, 24, 35);
  /* 这里是过渡时间，你可以根据需要调整 */
}

.inner-wrapper {
  height: 100%;
  width: 100%;
  height: 90%;
  width: 98%;
  /* overflow-y: auto; */
  /* 允许容器内部滚动 */
}

.inner {
  /* margin-bottom: 100px; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
