<template>
  <div class="body">
    <Navigatior></Navigatior>
    <router-view></router-view>
  </div>
</template>

<script setup name="Body">
import Navigatior from "./Navigator.vue";
</script>

<style scoped>
.body {
  display: flex;
  padding-top: 68px;
  width: 100%;
  height: 100%;
}
</style>
