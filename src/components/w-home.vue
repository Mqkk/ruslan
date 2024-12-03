<template>
  <div class="home">
    <w-hero-section />
    <w-for-what-section />
  </div>
</template>

<script>
import wForWhatSection from "./w-for-what-section.vue";
import wHeroSection from "./w-hero-section.vue";

export default {
  name: "w-home",
  components: {
    wHeroSection,
    wForWhatSection,
  },
};
</script>

<style lang="scss" scoped></style>
