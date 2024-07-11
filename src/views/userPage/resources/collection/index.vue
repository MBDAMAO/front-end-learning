<template>
    <div class="collection-saved">
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
    get(200).then(() => {
        dataList.push(...[{
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        }, {
            "cover": "http://sggjhw2qo.hb-bkt.clouddn.com/2.png",
            "info": "1123154",
            "vid": "1231"
        },])
        isLoading.value = false;
        isEmpty.value = true;
    })
    // })
}
onMounted(() => {
    getCollection()
})
</script>
<style scoped>
.loading {
    width: 100%;
    height: 30px;
}

.collection-saved {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

/* @media (width > 1400px) {
    .collection {
        grid-template-columns: repeat(6, auto);
    }
}

@media (1400px >=width > 1200px) {
    .collection {
        grid-template-columns: repeat(5, auto);
    }
}

@media (1200px >=width > 1000px) {
    .collection {
        grid-template-columns: repeat(4, auto);
    }
}

@media (width <=1000px) {
    .collection {
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