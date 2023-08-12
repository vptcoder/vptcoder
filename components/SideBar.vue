<template>
  <div
    class="max-w-sm border-r-2 p-2 container flex flex-wrap flex-col bg-newspaper-light"
  >
    <NuxtLink to="/junior" class="font-serif">
      <TButton
        class="text-left"
        :class="{ 'bg-newspaper-white': $route.path == '/junior' }"
        >Become better: Junior Backend Programmer</TButton
      >
    </NuxtLink>
    <NuxtLink to="/year-one" class="font-serif">
      <TButton
        class="text-left"
        :class="{ 'bg-newspaper-white': $route.path == '/junior' }"
        >Get better: Year One</TButton
      >
    </NuxtLink>
  </div>
</template>
