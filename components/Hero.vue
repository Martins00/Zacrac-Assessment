<template>
  <div class="bg-[#0B150F] grid grid-cols-5 pt-24">
    <div class="col-span-3 lg:w-[60%] justify-self-center self-center">
      <h1 class="text-[#96EF76] text-[24px] mb-3">Who We Are</h1>
      <p class="text-[#FFF] text-[16px]">
        Cashwise is a leading fintech company dedicated to providing personalized
        financial services that cater to the unique needs and goals of our clients. With a
        team of industry experts, visionary technologists, and passionate financial
        enthusiasts, we bring together a perfect blend of financial expertise and
        technological prowess. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        accusamus cumque ratione facere tempora pariatur laborum, perspiciatis saepe id!
      </p>
    </div>
    <div class="w-full col-span-2">
      <img src="@/assets/images/HeroImage.png" class="w-full" />
    </div>
    <div class="col-start-3 col-end-5 row-span-full relative flex justify-center">
      <img
        src="@/assets/images/HeroImageExtend.png"
        class="image__extend absolute w-[40%] top-[150px] lg:top-[200px]"
      />
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.image__extend {
    @media screen and (min-width: 1440px) {
        top: 270px;
        width: auto;
    }
}
</style>
