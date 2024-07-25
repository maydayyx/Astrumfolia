<template>
    <div class="flex flex-col justify-center items-center font-mono">
       <transition name="fade" mode="out-in">
        <!-- 二级路由出口 -->
        <router-view/>
       </transition>
       <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* Fade transition styles */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>