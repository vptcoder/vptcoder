<template>
  <header class="px-2 sm:px-4 py-2.5 rounded">
    <div
      class="container flex flex-wrap items-center justify-center mx-auto border-b-2"
    >
      <NuxtLink to="/" class="font-title text-xl">
        <TButton>I</TButton>
      </NuxtLink>
      <NuxtLink class="font-serif hidden" to="/code">
        <TButton>Code</TButton>
      </NuxtLink>
      <!-- <TBlank>|</TBlank> -->
      <NuxtLink class="font-serif hidden" to="/think">
        <TButton>Think</TButton>
      </NuxtLink>
      <!-- <TBlank>|</TBlank> -->
      <NuxtLink class="font-serif hidden" to="/shoot">
        <TButton>Shoot</TButton>
      </NuxtLink>
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
