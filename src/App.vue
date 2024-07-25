<template>
  <load-animation v-if="loading"/>
    <!-- 一级路由出口 -->
    <router-view/>
</template>

<script setup lang="ts">
import {emitter} from '@/utils'
const loading = ref(true)

emitter.on('loading',(val)=>{
  loading.value = val as boolean
})

onUnmounted(()=>{
  emitter.off('loading')
})
</script>

<style scoped>
</style>