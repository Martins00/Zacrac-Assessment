<template>
  <section class="my-container">
    <div class="join-us rounded-[1.875rem] py-6 sm:py-24">
      <div class="text-center sm:w-[85%] lg:w-[60%] mx-auto">
        <h5 class="text-[#96EF76]  text-[1rem] lg:text-[1.25rem] font-semibold">
          Join Us on Our Financial Journey
        </h5>
        <p class="text-[#FFF] text-[0.8rem] md:text-[0.875rem] lg:text-[1rem] my-8 px-2 sm:p-0">
          We invite you to embark on this exciting financial journey with us. At [Your
          Fintech Company Name], we believe in a collaborative approach, where our clients
          become our partners. Together, we can shape a future where financial
          possibilities are limitless.
        </p>

        <!-- download buttons -->
        <div 
          v-motion
          :visible="slideUpVariants.visibleOnce"
          :initial="slideUpVariants.initial"
          class="flex justify-center">
          <Button v-for="button in buttons" :data="button" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppleStore from "@/components/svg/AppleStore.vue"
import GooglePlay from "@/components/svg/GooglePlay.vue"

const buttons = ref([
  {  icon: AppleStore, store: 'App Store' },
  {  icon: GooglePlay, store: 'Play Store' }
])
</script>

<style lang="scss" scoped>
.join-us {
    background: url("@/assets/images/LineArt.png"), #0B150F;
    background-position: center;
}
</style>
