<template>
  <div class="cont">
    <div class="aworks">
      <div class="bb"><img src="../../../../assets/head.png" /></div>
      <div class="bb"><img src="../../../../assets/head.png" /></div>
      <div class="bb"><img src="../../../../assets/head.png" /></div>
      <div class="bb"><img src="../../../../assets/head.png" /></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.cont {
  overflow-y: scroll;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 8px 0 16px;
}

img {
  object-fit: cover;
}

img:hover {
  transition: 200ms;
  scale: 1.2;
}

.aworks {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.bb {
  height: 200px;
  width: calc(33.33% - 8px);
  overflow: hidden;
  justify-content: center;
  border-radius: 5px;
  display: flex;
  background-color: black;
}

.bb:nth-child(3n-2) {
  margin-bottom: 12px;
  margin-right: 6px;
}

.bb:nth-child(3n-1) {
  margin-left: 6px;
  margin-bottom: 12px;
  margin-right: 6px;
}

.bb:nth-child(3n) {
  margin-left: 6px;
  margin-bottom: 12px;
}

.bb:hover {
  cursor: pointer;
}

.cont::-webkit-scrollbar {
  width: 8px;
  /* background-color: rgb(20, 19, 19); */
}

/*滚动条的样式*/
.cont::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.2, rgb(125, 126, 128)),
      color-stop(0.4, rgb(97, 98, 99)),
      color-stop(0.8, rgb(125, 126, 128)));
}
</style>
