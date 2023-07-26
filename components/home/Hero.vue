<template>
  <div class="bg-[#0B150F] grid grid-cols-5 py-12 lg:py-0 lg:pt-28">
    <div class="hero col-span-full sm:col-start-2 sm:col-end-5 lg:col-span-3 justify-self-center lg:max-w-[75%]  lg:self-center lg:mb-14">
      <h1 class="text-[#96EF76] text-[1.5rem] mb-3">Who We Are</h1>
      <p class="text-[#FFF] text-[1rem] mb-">
        Cashwise is a leading fintech company dedicated to providing personalized
        financial services that cater to the unique needs and goals of our clients. With a
        team of industry experts, visionary technologists, and passionate financial
        enthusiasts, we bring together a perfect blend of financial expertise and technological prowess.
      </p>
    </div>

    <!-- this is the main image -->
    <div class="w-full col-span-2 hidden lg:block">
      <img src="@/assets/images/HeroImage.png" class="w-full" />
    </div>

    <!-- this is the image that's positioned between the text and main image -->
    <div class="col-start-3 col-end-5 row-span-full relative hidden lg:flex justify-center">
      <img
        src="@/assets/images/HeroImageExtend.png"
        class="image__extend absolute w-[40%] lg:w-[30%] top-[150px] lg:top-[200px]"
      />
    </div>
  </div>
</template> 

<script setup></script>

<style lang="scss" scoped>
// media query for the entire hero section
.hero {
  @media screen and (max-width: 425px) { 
    width: 100%;
    padding-inline: 1rem;
  }
}

// media query for the absolutely postioned image 
.image__extend {
    @media screen and (min-width: 1120px) {
        top: 225px;
        width: auto;
    }
    @media screen and (min-width: 1440px) {
        top: 270px;
        width: auto;
    }
    @media screen and (min-width: 2000px) {
        top: 500px;
        width: auto;
    }
}
</style>
