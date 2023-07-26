<template>
  <div class="bg-[#FFF] w-full fixed top-0 z-10">
    <div class="my-container">
      <div class="flex justify-between py-4 lg:py-8">
        <SvgLogo fill="black" />
        <nav
          class="nav-list bg-[#FFF] z-20 lg:z-0 flex flex-col items-center lg:flex-row fixed top-0 inset-x-0 py-8 lg:py-0 lg:w-auto lg:h-auto lg:static"
          :class="{ 'hidden lg:inline-block': state.isHidden }"
        >
          <Nuxt-link to="/">Home</Nuxt-link>
          <Nuxt-link to="/">Our Services</Nuxt-link>
          <Nuxt-link to="/">Pricing</Nuxt-link>
          <Nuxt-link to="/">Company</Nuxt-link>
        </nav>
        <SvgHamburger class="lg:hidden z-30" @click="toggleNav" />
      </div>
    </div>
  </div>
</template>

<script setup>
// component's data/state are being saved here.
const state = reactive({
  isHidden: true
})

// function for toggling nav state.
function toggleNav() {
  state.isHidden = !state.isHidden
}
</script>

<style lang="scss" scoped>
nav {
  transition: all 1s ease;
  > * {
    color: #000;
    font-size: 0.875rem;
    margin-block: 0;
    margin-inline: 2rem;
    @media screen and (max-width: 768px) {
      margin-block: 1rem;
      margin-inline: 0;
    }
  }
}
</style>