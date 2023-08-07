<template>
  <div class="home">
    <w-hero-section />
    <w-express-delivery-section />
    <w-our-partners />
    <w-what-we-do-section />
    <w-payment />
    <w-story-section />
  </div>
</template>

<script>
import WExpressDeliverySection from "./w-express-delivery-section.vue";
import wHeroSection from "./w-hero-section.vue";
import WStorySection from "./w-story-section.vue";
import WWhatWeDoSection from "./w-what-we-do-section.vue";
import wPayment from "./w-payment.vue";
import WOurPartners from "./w-our-partners.vue";

export default {
  name: "w-home",
  components: {
    wHeroSection,
    WExpressDeliverySection,
    WWhatWeDoSection,
    WStorySection,
    wPayment,
    WOurPartners,
  },
};
</script>

<style lang="scss" scoped></style>
