<template>
  <div class="max-w-md w-full my-3">
    <div
      class="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center break-words">
          <slot name="remark">Remark</slot>
        </p>
        <div
          class="text-gray-900 font-bold font-serif text-xl mb-2 break-words"
        >
          <slot name="title">Title</slot>
        </div>
        <div class="text-gray-700 text-sm whitespace-pre-line">
          <slot>Body Content</slot>
        </div>
      </div>
    </div>
  </div>
</template>
