<template>
  <div class="bg-newspaper-light min-h-screen max-h-screen">
    <!-- Default Desktop layout -->
    <NavBar></NavBar>
    <div class="flex flex-row">
      <div
        class="max-w-sm border-r-2 p-2 container flex flex-wrap bg-newspaper-light"
      >
        <NuxtLink to="/junior" class="font-serif">
          <TButton
            class="text-left"
            :class="{ 'bg-newspaper-dark': $route.path == '/junior' }"
            >Become better: Junior Backend Programmer</TButton
          >
        </NuxtLink>
      </div>
      <div class="bg-newspaper-light px-4 justify-center content-center w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
