<template>
  <div class="bodys">
    <Navigator></Navigator>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navigator from "./Navigator.vue";
</script>

<style scoped>
.bodys {
  display: flex;
  box-sizing: border-box;
  padding-top: 68px;
  width: 100%;
  height: 100%;
}
</style>
