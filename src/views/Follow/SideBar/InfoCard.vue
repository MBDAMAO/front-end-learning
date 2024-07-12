<template>
    <div class="con">
        <div class="imgHead">
            <img src="http://dummyimage.com/400x400" alt="">
        </div>
        <div class="name">
            麦当劳都近点
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style scoped>
.con {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    margin-top: 5px;
}

.con:hover {
    cursor: pointer;
    background-color: rgb(39, 41, 51);
}

.imgHead {
    padding: 5px 5px 5px 5px;
    height: 40px;
    width: 40px;
    position: relative;
    display: inline-block;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
        z-index: 1;
    }
}

.imgHead::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    /* 初始时的圆圈直径 */
    height: 300%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    /* 圆圈的颜色和透明度 */
    transform: translate(-50%, -50%);
    z-index: 0;
    animation: expandCircle 2s ease-out infinite;
    /* 动画效果 */
}

@keyframes expandCircle {
    0% {
        width: 300%;
        /* 初始直径 */
        height: 300%;
        opacity: 0.5;
        /* 初始透明度 */
    }

    100% {
        width: 500%;
        /* 最终直径 */
        height: 500%;
        opacity: 0;
        /* 最终透明度 */
    }
}

.name {
    height: 100%;
    color: rgb(234, 234, 235);
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
    font-size: 14px;
}
</style>