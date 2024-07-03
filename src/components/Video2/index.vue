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
    border-radius: 10px;
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
    height: 80%;
    width: 100%;
}

.infoDown {
    box-sizing: border-box;
    padding: 6px 6px 6px 6px;
    background-color: rgb(38, 38, 50);
    color: white;
    height: 20%;
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>