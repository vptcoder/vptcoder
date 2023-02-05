<template>
  <header class="px-2 sm:px-4 py-2.5 rounded">
    <div
      class="container flex flex-wrap items-center justify-center mx-auto border-b-2"
    >
      <NuxtLink class="font-serif" to="/"> <TButton>Home</TButton></NuxtLink>
      <TBlank>|</TBlank>
      <NuxtLink class="font-serif" to="/philosophy">
        <TButton>Thoughts</TButton></NuxtLink
      >
      <NuxtLink class="font-serif" to="/photography">
        <TButton>Shoot</TButton></NuxtLink
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
