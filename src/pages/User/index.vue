<template>
	<div class="my-20">
		<div class="ml-5 flex justify-center text-3xl">
			Hi,{{ name }}
			<Icon customIcon="meteocons:star-fill" />
		</div>
		<p class="mt-5 text-center">现在是{{ formatDate(Now) }}</p>
		<p class="flex justify-center my-5">
			您在{{ city }} 天气{{ weather }} 温度为{{ degree }}&deg;C
		</p>
		<Counter />
		<span class="flex justify-center mt-10">[ - User Page - ]</span>
	</div>
</template>

<script setup lang="ts">
import { request, formatDate } from "@/utils";

const route = useRoute();
const name = route.params.username;

const city = ref("");
const weather = ref("");
const degree = ref("");
const Now = ref()

let timer = null;
onMounted(async () => {
	await request({
		method: "get",
		url: "https://api.oioweb.cn/api/weather/GetWeather",
	}).then((data) => {
		const { result } = data as any;
		city.value = result.city.Province + result.city.City;
		weather.value = result.condition.day_weather;
		degree.value = result.condition.max_degree;
	});
	timer = setInterval(() => {
		Now.value = new Date()
	}, 1000);
});
onUnmounted(() => {
	clearInterval(timer)
})

</script>
