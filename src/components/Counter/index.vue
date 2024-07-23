<template>
	<div class="w-[130px] h-[50px] my-[30px] flex justify-between items-center">
		<button class="hover:scale-50 cursor-pointer" >
			<Icon customIcon="typcn:plus-outline" customSize="30" @click="increment" />
		</button>
		<span class="font-bold text-2xl"> {{ count }}</span>
		<button class="hover:scale-50 cursor-pointer" >
			<Icon
				customIcon="typcn:minus-outline"
				customSize="30"
				@click="decrement"
			/>
		</button>
	</div>
</template>

<script setup lang="ts">
import {useCounter} from '@/hooks/useCounter'

const {count,increment,decrement} = useCounter()
</script>

<style scoped></style>
