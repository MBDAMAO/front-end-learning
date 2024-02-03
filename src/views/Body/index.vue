<template>
  <div class="bodys">
    <Navigatior></Navigatior>
    <router-view></router-view>
  </div>
</template>

<script setup name="Body" lang="ts">
import Navigatior from "./Navigator.vue";
</script>

<style scoped>
.bodys {
  display: flex;
  padding-top: 68px;
  width: 100%;
  height: 100%;
}
</style>
