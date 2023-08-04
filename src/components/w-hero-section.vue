<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__left">
        <h1 class="title title--h1">Our service started work in New York</h1>
        <p class="hero__descr">
          We make delivery exactly at the time you need - we can start to
          fulfill the order a few minutes after it arrives, or we can deliver on
          a specific day and hour.
        </p>
        <router-link to="/" class="hero__link read-more">
          <span class="read-more__text">Read more</span>
          <span class="read-more__icon"></span>
        </router-link>
        <div class="hero__block-video">
          <h3 class="title title--h3">How it works</h3>
          <div class="hero__video"></div>
        </div>
      </div>
      <div class="hero__right">
        <w-sand-a-parcel />
        <w-track-a-package />
      </div>
    </div>
  </section>
</template>

<script>
import wSandAParcel from "./w-sand-a-parcel.vue";
import wTrackAPackage from "./w-track-a-package.vue";

export default {
  name: "w-hero-section",
  components: {
    wSandAParcel,
    wTrackAPackage,
  },
};
</script>

<style lang="scss" scoped>
    .hero {
        min-height: 768px;
        background-color: $bg-color;
    }
</style>
