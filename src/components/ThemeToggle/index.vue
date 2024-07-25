<template>
    <button @click="handleChange">
        <Icon :customIcon="themeStore==='dark'?'iconamoon:mode-dark':'iconamoon:mode-light'"/>
    </button>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const { system: themeSystem, store: themeStore } = useColorMode();

const handleChange = () => {
    themeStore.value = themeStore.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>

</style>