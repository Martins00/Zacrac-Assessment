<template>
  <div class="bg-[#0B150F] py-8">
    <div class="mx-auto w-[90%]">
      <div class="flex justify-between sm:p-5">
        <SvgLogo fill="white" class="hidden md:inline-block" />

        <div class="flex w-full sm:w-auto justify-between sm:space-x-20">
          <div class="links">
            <span class="font-semibold">Support</span>
            <Nuxt-link to="/">Blog</Nuxt-link>
            <Nuxt-link to="/">Company</Nuxt-link>
          </div>
          <div class="links">
            <span class="font-semibold">Legal</span>
            <Nuxt-link to="/">Term of use</Nuxt-link>
            <Nuxt-link to="/">Privacy policy</Nuxt-link>
          </div>
          <div class="links">
            <span class="font-semibold">Follow</span>
            <Nuxt-link to="/">Twitter</Nuxt-link>
            <Nuxt-link to="/">Linkedin</Nuxt-link>
            <Nuxt-link to="/">Facebook</Nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links > * {
  color: #ffffff;
  margin: 0.3rem 0;
  font-size: 0.8750rem;
  display: block;
}
</style>
