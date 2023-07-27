<template>
  <div class="mr-4 mb-4">
    <component :is="data.icon" class="bg-[#96EF7644] w-[47px] h-[47px] p-2 rounded-[10px]" />
    <h3 class="text-[1.125rem] font-semibold my-2">{{ data.title }}</h3>
    <p class="text-[0.8750rem]">{{ data.body }}</p>
  </div>
</template>

<script setup>
defineProps ({
  data: Object
})
</script>

