<template>
  <div class="cont">
    <div class="aworks">
      <div class="bb">
        <img src="head.png" />
      </div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
      <div class="bb"><img src="head.png" /></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.cont {
  height: 100%;
  display: flex;
  /*width: 100%; */
  margin: 0px 0px 0px 20px;
  overflow-y: auto;
}
img {
  object-fit: cover;
}
img:hover {
  transition: 200ms;
  scale: 1.2;
}
.aworks {
  overflow-y: auto;
  width: 100%;
  grid-gap: 15px;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(auto-fill, 150px);
  grid-auto-rows: minmax(150px, auto);
}
.bb {
  overflow: hidden;
  justify-content: center;
  border-radius: 5px;
  display: flex;
  background-color: black;
}
.bb:hover {
  cursor: pointer;
}
.aworks::-webkit-scrollbar {
  width: 6px;
  /* background-color: rgb(20, 19, 19); */
}
/*滚动条的样式*/
.aworks::-webkit-scrollbar-thumb {
  height: 20px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.2, rgb(125, 126, 128)),
    color-stop(0.4, rgb(97, 98, 99)),
    color-stop(0.8, rgb(125, 126, 128))
  );
}
</style>
