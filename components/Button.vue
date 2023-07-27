<template>
    <div class="bg-[#243C22] flex items-center  rounded-full px-3 sm:px-6 py-2 mx-2 sm:mx-3">
        <component :is="data.icon"></component>
        <div class="flex flex-col ml-2 sm:ml-4 text-left">
            <span class="text-[#FFF] text-[0.75rem]">Available on</span>
            <span class="text-[#FFF] text-[0.75rem] md:text-[1rem] md:font-semibold">{{ data.store }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})
</script>