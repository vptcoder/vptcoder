<script setup lang="ts">
// const route = useRoute();
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <!-- <NuxtPage /> -->
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
