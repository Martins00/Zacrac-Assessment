<template>
    <div class="bg-[#F3F3F3] rounded-[1.875rem] p-5 my-3">
      <div class="flex justify-between  items-center m-5">
        <span class="text-[1.5rem] font-semibold">{{ data.title }}</span>
        <SvgArrow class="w-[18%] sm:w-auto" />
      </div>
  
      <div class="flex justify-center">
        <img :src="data.image" class="w-[50%]" />
      </div>
  
      <div class="m-5">
        <p class="text-[1rem] line-clamp-3 md:line-clamp-none">
          {{ data.body }}
        </p>
      </div>
    </div>
  </template>

  <script setup>
  defineProps ({
    data: {
      type: Object,
      default: () => ({})
    }
  })
  </script>

  