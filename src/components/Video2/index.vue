<template>
    <div class="video2" @click="open()">
        <div class="imageDiv">
            <img :src="props.videoUrl" class="image2" alt="">
        </div>
        <div class="infoDown">
            {{ props.info }}
        </div>
    </div>
</template>
<script setup lang='ts'>
import { defineProps } from "vue";
const props = defineProps({
    info: String,
    videoUrl: String,
    vid: String,
    play: String
})
function open() {
    alert("open")
}
</script>
<style scoped>
.video2 {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.video2:hover {
    cursor: pointer;
}

.image2 {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.imageDiv {
    border-radius: 10px;
    height: 90%;
    width: 100%;
}

.infoDown {
    color: white;
    height: 10%;
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
}
</style>