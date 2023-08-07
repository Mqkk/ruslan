<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__left">
        <h1 class="hero__title title title--h1">
          Our service started work in New York
        </h1>
        <p class="hero__descr">
          We make delivery exactly at the time you need - we can start to
          fulfill the order a few minutes after it arrives, or we can deliver on
          a specific day and hour.
        </p>
        <router-link to="/" class="hero__link read-more">
          <span class="read-more__text">Read more</span>
          <span class="read-more__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
            >
              <path
                d="M4.72351 3.30468L1.61047 0.269411C1.24206 -0.0898037 0.644732 -0.0898037 0.276314 0.269411C-0.0921045 0.628626 -0.0921046 1.21103 0.276314 1.57024L2.76841 4.00008L0.276486 6.42976C-0.0919318 6.78897 -0.0919317 7.37137 0.276486 7.73059C0.644904 8.0898 1.24223 8.0898 1.61065 7.73059L4.72369 4.69531C4.92006 4.50384 5.01177 4.24896 4.99879 3.99827C5.01075 3.74869 4.91899 3.49527 4.72351 3.30468Z"
                fill="#2B6BF3"
              />
            </svg>
          </span>
        </router-link>
        <div class="hero__block-video block-video">
          <h3 class="block-video__title title title--h3">How it works</h3>
          <div class="block-video__video"></div>
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
  background-color: $bg-color;

  &__container {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 784px;
    background-position: 396px bottom;
    background-size: 657px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/hero/bg-sity.svg");

    &::before {
      content: "";
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-position: 472px bottom;
      background-size: 446px;
      background-repeat: no-repeat;
      background-image: url("../assets/img/hero/bg-statue.svg");
    }
  }

  &__left {
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 59px;
    padding-left: 71px;
  }

  &__title {
    margin-bottom: 34px;
    max-width: 375px;
  }

  &__descr {
    margin: 0;
    margin-bottom: 34px;
    max-width: 360px;
    line-height: 150%;
  }

  &__link {
    margin-bottom: 83px;
  }

  &__right {
    z-index: 1;
    display: grid;
    gap: 72px;
    margin-top: 36px;
  }
}

.block-video {
  &__title {
    margin-bottom: 22px;
  }
}
</style>
