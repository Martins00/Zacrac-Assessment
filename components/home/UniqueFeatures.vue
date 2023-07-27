<template>
  <section class="my-container">
    <h2 class="text-[2.125rem] font-semibold mb-14">What sets us Apart</h2>
    <div 
      v-motion
      :visible="slideUpVariants.visibleOnce"
      :initial="slideUpVariants.initial"
      class="grid-container">
      <CardUniqueFeature v-for="card in cards" :data="card" />
    </div>
  </section>
</template>

<script setup>
import Bulb from "@/components/svg/Bulb.vue"
import Safe from "@/components/svg/Safe.vue"
import Palette from "@/components/svg/Palette.vue"
import Globe from "@/components/svg/Globe.vue"
import Question from "@/components/svg/Question.vue"

const cards = ref([
  {
    icon: Bulb,
    title: 'Innovation',
    body: 'We are at the forefront of financial technology, continuously exploring and integrating the latest advancements to offer cutting-edge solutions that enhance our users financial lives.'
  },
  {
    icon: Safe,
    title: 'Security',
    body: 'Your security is our utmost priority. We employ state-of-the-art security measures, encryption protocols, and advanced authentication methods to safeguard your financial data and transactions.'
  },
  {
    icon: Palette,
    title: 'User Experience',
    body: 'We are committed to providing an intuitive, user-friendly platform that makes managing finances a breeze. Our interface is designed with simplicity and functionality in mind to ensure a seamless user experience.'
  },
  {
    icon: Globe,
    title: 'Personalization',
    body: "We understand that every individual's financial journey is unique. That's why we offer tailored financial solutions that align with your specific goals and aspirations."
  },
  {
    icon: Question,
    title: 'Customer Support',
    body: 'Our dedicated customer support team is always available to assist you with any queries, concerns, or technical assistance you may need.'
  }
])
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: stretch;
  gap: 3%;
}
</style>
