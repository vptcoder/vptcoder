<template>
  <header class="px-2">
    <div class="flex flex-wrap items-center border-b-2">
      <NuxtLink to="/" class="font-title text-xl">
        <TButton class="underline underline-offset-4">vptcoder</TButton>
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
