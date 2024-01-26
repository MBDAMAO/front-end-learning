<template>
  <div class="container">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script setup lang="ts">
import Header from "@/views/Header/Index.vue";
import Body from "@/views/Body/index.vue";
</script>

<style>
.container {
  height: 100%;
  display: flex;
}
</style>
