<template>
  <div class="max-w-sm w-full">
    <div
      class="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <slot name="remark">Remark</slot>
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">
          <slot name="title">Title</slot>
        </div>
        <p class="text-gray-700 text-base">
          <slot>Body Content</slot>
        </p>
      </div>
    </div>
  </div>
</template>
