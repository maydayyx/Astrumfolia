<template>
    <Icon :icon="customIcon" :style="{fontSize: customSize+'px'}" />
</template>

<script setup>
import {Icon} from '@iconify/vue'
defineProps({
    customIcon: {
        type: String,
    },
    customSize: {
        type: String,
        default: '25'
    }
})
</script>

<style lang="scss" scoped>

</style>