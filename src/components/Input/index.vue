<template>
	<div class="flex justify-center my-5">
		<input
			type="text"
			v-model="username"
			class="px-4 placeholder:italic placeholder:text-center placeholder:text-slate-400 block py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
			placeholder="Your name"
		/>
		<a
			href="#"
			@click="handleClick"
			class="w-10 h-10 flex justify-center items-center bg-[skyblue] rounded-xl ml-3"
			>GO</a
		>
	</div>
</template>

<script setup lang="ts">

defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(["update:modelValue"]);
const username = ref("");
const router = useRouter();
let timer: NodeJS.Timeout | null = null;
const handleClick = () => {
	if (!username.value) {
		emit("update:modelValue", true);
		timer = setTimeout(() => {
			emit("update:modelValue", false);
		}, 2000);
		return
	}else {
		if (timer !== null) {
			clearTimeout(timer);
		}
		router.push(`/user/${username.value}`);
	}
};

onUnmounted(() => {
	if (timer !== null) {
		// 当组件卸载时，清除计时器
		clearTimeout(timer);
	}
});
</script>
