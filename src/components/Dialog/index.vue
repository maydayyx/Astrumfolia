<template>
      
        <dialog :open="state" class="rounded-2xl h-8 w-64 bg-[black] text-white">
          <div class="w-full h-full  flex justify-center items-center">
            <slot name="content"></slot>
          </div>
        </dialog>
</template>

<script setup lang="ts">
defineProps ({
    state: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>

</style>