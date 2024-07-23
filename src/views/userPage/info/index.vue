<template>
    <div class="infoContainer">
        <div class="avatar">
            <div class="innerA">
                <img :src=userInfo.avatar alt="">
            </div>
        </div>
        <div class="info">
            <p class="name">{{ userInfo.username }}</p>
            <div class="statistic">
                <div class="d1">
                    关注 {{ userInfo.follows }}
                </div>
                <div class="d1">
                    粉丝 {{ userInfo.fans }}
                </div>
                <div class="d1">
                    获赞 {{ userInfo.likes }}
                </div>
            </div>
            <div class="bizInfo">
                <div class="uid">
                    账号ID：{{ userInfo.uid }}
                </div>
                <div class="gender">
                    {{ userInfo.gender }}
                </div>
            </div>
            <div class="msg">
                {{ 'nishuowoshiahsauib' }}
            </div>
        </div>
        <div class="setting">
            <div class="backImg">
                <img :src=userInfo.back_img class="imgs" alt="">
            </div>
            <div class="up">

            </div>
            <div class="down">
                <div class="edit" @click="edit()">
                    编辑资料
                </div>
            </div>
        </div>
        <div class="editProfile" v-if="showEdit">

        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, reactive } from "vue";
import { getInfo } from "@/apis/user"

const showEdit = ref(false);

function edit() {
    showEdit.value = !showEdit.value;
}
var userInfo = reactive({})
onMounted(() => {
    getInfo().then((data) => {
        Object.assign(userInfo, data.data);
    })
})
</script>
<style scoped>
.backImg {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;

    .imgs {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}

.infoContainer {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    height: 150px;
    /* background-color: black; */
}

.avatar {
    box-sizing: border-box;
    overflow: hidden;
    width: 150px;
    min-width: 150px;
    height: 100%;
    padding: 10px;

    .innerA {
        height: 100%;
        border-radius: 50%;
    }

    img {
        height: 100%;
        width: 100%;
    }
}

.info {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
}

.statistic {
    display: flex;
    color: white;
    flex-direction: row;
    margin: 5px 0 5px 0;
}

.bizInfo {
    display: flex;
    color: white;
    flex-direction: row;
    margin: 5px 0 5px 0;
}

.name {
    color: white;
    height: 30px;
}

.msg {
    color: white;
}

.setting {
    height: 100%;
    width: 40%;
    position: relative;
    /* background-color: antiquewhite; */
}

.d1 {
    margin-right: 20px;
}

.up {
    height: 50%;
    z-index: 2;
    /* background-color: aqua; */
}

.down {
    height: 50%;
    display: flex;
    z-index: 2;
    align-items: center;
}

.edit {
    height: 50%;
    width: 100px;
    border-radius: 10px;
    background-color: rgb(114, 116, 114);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.edit:hover {
    cursor: pointer;
}

.editProfile {
    position: absolute;
    z-index: 999;
    background-color: black;
    height: 100%;
    width: 100%;
}
</style>