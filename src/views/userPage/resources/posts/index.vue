<template>
    <div class="collection-post">
        <div class="tt" v-for="item in dataList" :key="item.vid">
            <Blocks :videoUrl=item.cover :info=item.info></Blocks>
        </div>
    </div>
    <div class="loading" v-if="isLoading">
        <Loading></Loading>
    </div>
    <div class="nothing" v-show="isEmpty">
        暂时没有更多了
    </div>
</template>
<script setup lang='ts'>
import { ref, onBeforeMount, reactive } from "vue";
import Blocks from "@/components/Video2/index.vue"
import Loading from "@/components/Loadings/loading1.vue"
import { getPost } from "@/apis/user"

const isEmpty = ref(false);
const isLoading = ref(true);
const dataList: { "cover": string, "info": string, "vid": string }[] = reactive([]);

async function get(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
async function getCollection() {
    if (isEmpty.value == true) return;
    isLoading.value = true;
    getPost().then((data) => {
        dataList.push(...data.data)
        isLoading.value = false;
        isEmpty.value = true;
    })
}
onBeforeMount(() => {
    getCollection()
})
</script>
<style scoped>
.collection-post {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.loading {
    width: 100%;
    height: 30px;
}

@media screen and (width <1000px) {
    .tt {
        width: 100%;
        margin-bottom: 15px;
    }
}

@media screen and (width >=1000px) and (width <1200px) {
    .tt {
        margin-right: calc(5%/1);
        width: 47.5%;
        margin-bottom: 15px;
    }

    .tt:nth-child(2n) {
        margin-right: 0 !important;
    }
}

@media screen and (width >=1200px) and (width <1400px) {
    .tt {
        margin-right: calc(5%/2);
        width: 31.667%;
        margin-bottom: 15px;
    }

    .tt:nth-child(3n) {
        margin-right: 0 !important;
    }
}

@media screen and (width >=1400px) and (width < 1600px) {
    .tt {
        margin-right: calc(5%/3);
        width: 23.75%;
        margin-bottom: 15px;
    }

    .tt:nth-child(4n) {
        margin-right: 0 !important;
    }
}

@media screen and (width>=1600px) and (width <1800px) {
    .tt {
        margin-right: calc(5%/4);
        width: 19%;
        margin-bottom: 15px;
    }

    .tt:nth-child(5n) {
        margin-right: 0 !important;
    }
}

@media screen and (width >=1800px) {
    .tt {
        margin-right: calc(5%/5);
        width: 15.833%;
        margin-bottom: 15px;
    }

    .tt:nth-child(6n) {
        margin-right: 0 !important;
    }
}

.nothing {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
}
</style>