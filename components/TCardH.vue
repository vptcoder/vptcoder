<script setup>
import { useSlots } from 'vue'
const slots = useSlots()
</script>

<template>
  <div class="max-w-prose w-full my-3">
    <div
      class="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-6">
        <p class="text-gray-900 font-bold font-serif text-xl break-words">
          <slot name="title">Title</slot>
        </p>
        <p
          class="text-xs italic text-gray-600 flex items-center mb-2 break-words"
        >
          <slot name="remark">Remark</slot>
        </p>
        <p class="text-gray-700 text-sm whitespace-pre-line mx-5">
          <slot>Content</slot>
        </p>
      </div>
      <div v-if="slots.link" class="inline-flex">
        <span>&#128073;</span>
        <div class="mx-2 text-blue-600 underline">
          <slot name="link">Link</slot>
        </div>
      </div>
    </div>
  </div>
</template>
