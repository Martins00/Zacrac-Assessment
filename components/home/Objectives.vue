<template>
    <div class="my-container">
        <div 
          v-motion
          :visible="scaleInVariants.visibleOnce"
          :initial="scaleInVariants.initial"
          class="lg:flex justify-between gap-6 my-8 sm:my-32">
            <CardObjective v-for="card in cards" :data="card" />
        </div>
    </div>
</template>

<script setup>
import missionImage from '@/assets/images/MissionImage.png'
import visionImage from '@/assets/images/VisionImage.png'

// data for objectives cards.
const cards = reactive([
  {
    image: missionImage,
    title: 'Our Mission',
    body: 'our mission is to revolutionize the financial landscape by empowering individuals and businesses with innovative and secure financial solutions. We strive to bridge the gap between traditional banking systems and cutting-edge technology, ensuring a seamless and inclusive financial experience ....',
  },
  {
    image: visionImage,
    title: 'Our Vision',
    body: 'Our vision is to create a world where financial freedom is accessible to everyone, irrespective of their background or location. We envision a future where financial decisions are driven by data-driven insights, smart automation, and transparent practices, empowering individuals to make informed cho ....',  
  }
])
</script>