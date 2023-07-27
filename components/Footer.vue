<template>
  <div class="bg-[#0B150F] py-8">
    <div class="mx-auto w-[90%]">
      <div class="flex justify-between sm:p-5">
        <SvgLogo fill="white" class="hidden md:inline-block" />

        <div class="flex w-full sm:w-auto justify-between sm:space-x-20">
          <div class="links">
            <span class="font-semibold">Support</span>
            <Nuxt-link v-for="item in support" :to="item.link">{{
              item.title
            }}</Nuxt-link>
          </div>
          <div class="links">
            <span class="font-semibold">Legal</span>
            <Nuxt-link v-for="item in legal" :to="item.link">{{ item.title }}</Nuxt-link>
          </div>
          <div class="links">
            <span class="font-semibold">Follow</span>
            <Nuxt-link v-for="item in socials" :to="item.link">{{
              item.title
            }}</Nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const support = reactive([
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Company",
    link: "/",
  },
]);
const legal = reactive([
  {
    title: "Terms of use",
    link: "/",
  },
  {
    title: "Privacy policy",
    link: "/",
  },
]);
const socials = reactive([
  {
    title: "Twitter",
    link: "/",
  },
  {
    title: "Linkedin",
    link: "/",
  },
  {
    title: "Facebook",
    link: "/",
  },
]);
</script>

<style lang="scss" scoped>
.links > * {
  color: #ffffff;
  margin: 0.3rem 0;
  font-size: 0.875rem;
  display: block;
}
</style>
