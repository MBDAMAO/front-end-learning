<template>
  <div class="container">
    <div class="headSide">
      <img class="img" src="/head.png" />
    </div>
    <div class="rightSide">
      <div class="name">damao</div>
      <div class="content">123</div>
      <div class="time">1-1-1</div>
      <div class="options">1 2 3</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.container {
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;
}
.headSide {
  display: flex;
  height: 100%;
  width: 50px;
}
.rightSide {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
