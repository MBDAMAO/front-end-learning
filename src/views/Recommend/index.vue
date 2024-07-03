<template>
	<div class="recommend-container" ref="container" @wheel="handleScroll">
		<div class="inner-wrapper">
			<div class="inner" v-for="(item, index) in items" :key="index" :id="'inner_' + index">
				<FeedModel :modal="item" :videoSrc="item.videoSrc" :ref="setTestRef(index)" :vid="item.vid"></FeedModel>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import FeedModel from "@/components/VideoWindow/index.vue";
import { ref, onMounted, reactive } from 'vue';
import { getVideos } from "@/apis/video";
const container = ref<HTMLElement | null>(null);
const currentIndex = ref(0);

const items: any = reactive([]);
const testRefs = ref<InstanceType<typeof FeedModel>[]>([]);
const setTestRef = (index: number) => (el: InstanceType<typeof FeedModel> | null) => {
	if (el) {
		testRefs.value[index] = el;
	}
};
async function loadRecommend() {
	getVideos().then((data: any) => {
		items.push(...data.feed_list)
	}).catch(() => {
		items.push({ videoSrc: "j (11).mp4", vid: 1 })
		items.push({ videoSrc: "j (12).mp4", vid: 1 })
		items.push({ videoSrc: "j (13).mp4", vid: 1 })
	})
}
const handleScroll = (e: WheelEvent) => {
	if (!container.value) return;
	const target = e.target as HTMLElement;
	if (!container.value.contains(target)) return;
	e.preventDefault();
	if (currentIndex.value >= items.length - 2) {
		loadRecommend()
	}
	const innerElements = container.value.querySelectorAll('.inner');
	let closestIndex = 0;
	let distance = Infinity;

	innerElements.forEach((element, index) => {
		if (!container.value) return;
		const rect = element.getBoundingClientRect();
		const offset = Math.abs(rect.top - container.value.getBoundingClientRect().top);
		if (offset < distance) {
			closestIndex = index;
			distance = offset;
		}
	});

	let newIndex = closestIndex;

	if (e.deltaY > 0 && newIndex < innerElements.length - 1) {
		newIndex++;
	} else if (e.deltaY < 0 && newIndex > 0) {
		newIndex--;
	}

	const targetInner = container.value.querySelector(`#inner_${newIndex}`);
	if (targetInner) {
		targetInner.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
		currentIndex.value = newIndex;
	}
};

onMounted(() => {
	loadRecommend()
	if (container.value) {
		container.value.addEventListener('wheel', handleScroll);
	}
});
</script>

<style scoped>
.recommend-container {
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
	z-index: 0;
	overflow: hidden;

	width: 100%;
	background-color: rgb(22, 24, 35);

}

.inner-wrapper {
	height: 100%;
	width: 100%;
	height: calc(100% - 12px);
	width: 98%;
}

.inner {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
}
</style>
