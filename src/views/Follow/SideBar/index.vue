<template>
    <div class="side-container">
        <div class="isShowing">
            正在直播
        </div>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <div class="followUpdate">
            关注人更新
        </div>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <div class="followUpdate">
            精选关注人
        </div>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
    </div>
</template>
<script setup lang='ts'>
import InfoCard from './InfoCard.vue';
</script>
<style scoped>
.side-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-right: 5px;
}

.isShowing {
    height: 40px;
    width: 100%;

    display: flex;
    align-items: center;
    color: rgb(167, 162, 168);
}

.followUpdate {
    height: 40px;
    width: 100%;

    display: flex;
    color: rgb(167, 162, 168);
    align-items: center;
}
</style>