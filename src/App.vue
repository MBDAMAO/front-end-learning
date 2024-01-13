<template>
  <div class="container">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script setup>
import Header from "@/views/Header/Index.vue";
import Body from "@/views/Body/index.vue";
</script>

<style>
.container {
  height: 100%;
  display: flex;
}
</style>
