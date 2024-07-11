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
import { ref, onMounted, reactive } from "vue";
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
onMounted(() => {
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

/* @media (width > 1400px) {
    .collection-post {
        grid-template-columns: repeat(6, auto);
    }
}

@media (1400px >=width > 1200px) {
    .collection-post {
        grid-template-columns: repeat(5, auto);
    }
}

@media (1200px >=width > 1000px) {
    .collection-post {
        grid-template-columns: repeat(4, auto);
    }
}

@media (width <=1000px) {
    .collection-post {
        grid-template-columns: repeat(3, auto);
    }
} */

.tt {
    margin-right: calc((100% - 180*6px)/5);
    width: 180px;
    height: 300px;
    margin-bottom: 15px;
}

.tt:nth-child(6n) {
    margin-right: 0 !important;
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