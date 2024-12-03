<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__left">
        <h1 class="hero__title title title--h1">Ваш черный список клиентов</h1>
        <p class="hero__descr">
          Черный список клиентов - информационная система, содержащая информацию
          о недобросовестных клиентах организации
        </p>
        <button @click="scrollToForWhat" class="hero__link read-more btn-reset">
          <span class="read-more__text">Для чего</span>
          <span class="read-more__icon"></span>
        </button>
      </div>
      <div class="hero__right">
        <w-form-wrapper>
          <w-login-form />
        </w-form-wrapper>
      </div>
    </div>
  </section>
</template>

<script>
import wFormWrapper from "./w-form-wrapper.vue";
import wLoginForm from "./w-login-form.vue";

export default {
  name: "w-hero-section",
  components: {
    wFormWrapper,
    wLoginForm,
  },
  methods: {
    scrollToForWhat() {
      const section = document.getElementById("forWhatSection");
      section && section.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 70px;
  height: 100vh;
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
    padding-top: 10%;
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
    margin-top: 10%;

    @include mobile {
      gap: 32px;
      margin-top: 32px;
      width: 100%;
    }
  }

  @include mobile {
    height: auto;
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
