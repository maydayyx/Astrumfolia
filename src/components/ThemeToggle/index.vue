<template>
    <button @click="handleChange">
        <Icon customIcon="iconamoon:mode-dark"/>
    </button>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const { system: themeSystem, store: themeStore } = useColorMode();

const handleChange = () => {
    console.log(123);
    
    themeStore.value = themeStore.value === 'dark' ? 'light' : 'dark'

}
</script>

<style scoped>

</style>