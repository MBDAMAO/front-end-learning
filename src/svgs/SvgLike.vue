<template>
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M535.9 216.7l-22.9 23-22.9-23.1c-89.2-89.7-234.3-90.1-323.9-0.8l-0.8 0.8c-89.7 90.1-89.7 235.8 0 326L476 859.3c20.1 20.4 52.9 20.7 73.4 0.7l0.7-0.7 310.7-316.7c89.7-90.1 89.7-235.8 0-326-89.2-89.7-234.3-90.1-323.9-0.9l-1 1z"
        :fill="props.fill"></path>
  </svg>
</template>
<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  fill: String,
})
</script>
<style scoped></style>