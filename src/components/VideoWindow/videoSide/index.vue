<template>
  <div class="videoSide">
    <div class="back"></div>
    <div class="headnavi">
      <div class="option" v-on:click="
        open(1);
      $emit('changeStatus', 1);
      " ref="b1">
        TA的作品
      </div>
      <div class="option" v-on:click="
        open(2);
      $emit('changeStatus', 2);
      " ref="b2">
        评论
      </div>
      <div class="option" v-on:click="
        open(3);
      $emit('changeStatus', 3);
      " ref="b3">
        相关推荐
      </div>
      <div class="exit">
        <svg class="exits" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
          fill="rgba(169, 169, 169, 0.8)" @click="$emit('closeEvent')">
          <path
            d="M886.784 746.496q29.696 30.72 43.52 56.32t-4.608 58.368q-4.096 6.144-11.264 14.848t-14.848 16.896-15.36 14.848-12.8 9.728q-25.6 15.36-60.416 8.192t-62.464-34.816l-43.008-43.008-57.344-57.344-67.584-67.584-73.728-73.728-131.072 131.072q-60.416 60.416-98.304 99.328-38.912 38.912-77.312 48.128t-68.096-17.408l-7.168-7.168-11.264-11.264-11.264-11.264q-6.144-6.144-7.168-8.192-11.264-14.336-13.312-29.184t2.56-29.184 13.824-27.648 20.48-24.576q9.216-8.192 32.768-30.72l55.296-57.344q33.792-32.768 75.264-73.728t86.528-86.016q-49.152-49.152-93.696-93.184t-79.872-78.848-57.856-56.832-27.648-27.136q-26.624-26.624-27.136-52.736t17.92-52.736q8.192-10.24 23.552-24.064t21.504-17.92q30.72-20.48 55.296-17.92t49.152 28.16l31.744 31.744q23.552 23.552 58.368 57.344t78.336 76.288 90.624 88.576q38.912-38.912 76.288-75.776t69.632-69.12 58.368-57.856 43.52-43.008q24.576-23.552 53.248-31.232t55.296 12.8q1.024 1.024 6.656 5.12t11.264 9.216 10.752 9.728 7.168 5.632q27.648 26.624 27.136 57.856t-27.136 57.856q-18.432 18.432-45.568 46.08t-60.416 60.416-70.144 69.632l-77.824 77.824q37.888 36.864 74.24 72.192t67.584 66.048 56.32 56.32 41.472 41.984z"
            ></path>
        </svg>
      </div>
    </div>
    <div class="cutline"></div>

    <div class="content" v-if="props.status == 1">
      <Works></Works>
    </div>
    <div class="content" v-if="props.status == 2">
      <Comments :vid="props.vid"></Comments>
    </div>
    <div class="content" v-if="props.status == 3">
      <Recommends></Recommends>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Comments from "./Comment/index.vue";
import Recommends from "./SimilarRecommend/index.vue";
import Works from "./Works/index.vue";

const status = ref(2);
const b1 = ref(),
  b2 = ref(),
  b3 = ref();

function open(params: number) {
  b1.value.style.color = "rgba(169, 169, 169, 0.8)";
  b2.value.style.color = "rgba(169, 169, 169, 0.8)";
  b3.value.style.color = "rgba(169, 169, 169, 0.8)";
  if (params === 1) {
    b1.value.style.color = "white";
  } else if (params === 2) {
    b2.value.style.color = "white";
  } else {
    b3.value.style.color = "white";
  }

  status.value = params;
}

const props = defineProps({
  status: Number,
  vid: String,
});
</script>
<style scoped>
.exit {
  position: absolute;
  display: flex;
  height: 100%;
  right: 20px;
}

.exits {
  margin: 18px 0 18px 0;
}

.exits:hover {
  cursor: pointer;
  fill: white;
}

.back {
  background-color: black;
  opacity: 0.2;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.videoSide {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 350px;
  /* background-color: aliceblue; */
}

.headnavi {
  position: relative;
  display: flex;
  height: 7%;
  width: 100%;
  align-items: center;
  /* background-color: antiquewhite; */
}

.option {
  display: flex;
  flex-direction: column;
  color: rgba(169, 169, 169, 0.8);
  margin: 0 20px 0 20px;
}

.option:hover {
  cursor: pointer;
}

.cutline {
  display: flex;
  height: 1.1px;
  width: 100%;
  background-color: rgb(120, 120, 120);
  opacity: 0.2;
}

.content {
  height: 100%;
  width: 100%;
}
</style>
