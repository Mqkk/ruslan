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
          <span class="read-more__icon"></span>
        </router-link>
        <div class="hero__block-video block-video">
          <h3 class="block-video__title title title--h3">How it works</h3>
          <div class="block-video__video">
            <button class="btn-reset block-video__btn"></button>
          </div>
        </div>
      </div>
      <div class="hero__right">
        <w-send-a-parcel />
        <w-track-a-package />
      </div>
    </div>
  </section>
</template>

<script>
import wSendAParcel from "./w-send-a-parcel.vue";
import wTrackAPackage from "./w-track-a-package.vue";

export default {
  name: "w-hero-section",
  components: {
    wSendAParcel,
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

      @include mobile {
        display: none;
      }
    }

    @include mobile {
      flex-direction: column-reverse;
      padding-bottom: 80px;
      background-position: center 873px;
      background-size: 328px;
    }
  }

  &__left {
    z-index: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 59px;
    padding-left: 71px;

    @include mobile {
      padding-left: 0;
      padding-top: 40px;
    }
  }

  &__title {
    margin-bottom: 34px;
    max-width: 376px;

    @include mobile {
      margin-bottom: 14px;
      max-width: 236px;
    }
  }

  &__descr {
    margin: 0;
    margin-bottom: 34px;
    max-width: 361px;
    line-height: 150%;

    @include mobile {
      margin-bottom: 17px;
    }
  }

  &__link {
    margin-bottom: 83px;

    @include mobile {
      margin-bottom: 37px;
    }
  }

  &__right {
    z-index: 1;
    display: grid;
    gap: 72px;
    margin-top: 36px;

    @include mobile {
      gap: 32px;
      margin-top: 32px;
      width: 100%;
    }
  }
}

.block-video {
  width: 100%;

  &__title {
    margin-bottom: 22px;

    @include mobile {
      margin-bottom: 15px;
      font-size: 20px;
    }
  }

  &__video {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 374px;
    height: 232px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../assets/img/video.jpg");

    @include mobile {
      width: 100%;
      height: 200px;
      background-size: cover;
    }
  }

  &__btn {
    border-radius: 100%;
    width: 96px;
    height: 96px;
    background-position: center;
    background-repeat: 29px 40px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/play-icon.svg");
    background-color: rgba($color: #000000, $alpha: 0.32);
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background-color: rgba($color: #000000, $alpha: 0.48);
    }
  }
}
</style>
