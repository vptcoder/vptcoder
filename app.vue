<script setup lang="ts">
const route = useRoute();
</script>

<template #nav>
  <div>
    <NuxtLoadingIndicator />
    <!-- <NuxtPage /> -->
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
  </div>
</template>
