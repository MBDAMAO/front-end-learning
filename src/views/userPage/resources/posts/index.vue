<template>
    <div class="collection-post">
        <div class="tt" v-for="item in dataList" :key="item.vid">
            <Blocks :videoUrl=item.cover :info=item.info></Blocks>
        </div>
    </div>
    <div class="loading">
        <Loading v-show="isLoading"></Loading>
    </div>
    <div class="nothing" v-if="isEmpty">
        暂时没有更多了
    </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, reactive } from "vue";
import Blocks from "@/components/Video2/index.vue"
import Loading from "@/components/Loadings/loading1.vue"
import { getCollection as igetCollection } from "@/apis/video"

const isEmpty = ref(false);
const isLoading = ref(true);
const dataList: { "cover": string, "info": string, "vid": string }[] = reactive([]);

async function get(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
async function getCollection() {
    if (isEmpty.value == true) return;
    isLoading.value = true;
    // igetCollection().then((data) => {
    // if (data.data.hasMore == false) {
    //     isEmpty = true;
    // }
    get(1000).then(() => {
        dataList.push(...[{
            "cover": "/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "/2.png",
            "info": "1123154",
            "vid": "1231"
        }])
        isLoading.value = false;
    })
    // })
}
onMounted(() => {
    getCollection()
})
</script>
<style scoped>
.collection-post {
    display: grid;
    grid-gap: 10px 20px;
    width: 100%;
}

@media (width > 1400px) {
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
}

.tt {
    height: 300px;
    width: 100%;
}

.nothing {
    height: 200px;
    width: 100%;
}
</style>