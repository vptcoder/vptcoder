<template>
  <div class="bg-newspaper-light min-h-screen max-h-screen">
    <!-- Default Desktop layout -->
    <NavBar></NavBar>
    <div class="flex flex-row">
      <SideBar></SideBar>
      <div class="bg-newspaper-light px-4 justify-center content-center w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
