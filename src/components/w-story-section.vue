<template>
  <section class="story">
    <div class="story__container container">
      <h2 class="visually-hidden">
        Since 2019, LibertyWalk has successfully provided express courier
        delivery services
      </h2>
      <div class="story__content">
        <p class="story__paragraph">
          Since 2019, LibertyWalk has successfully provided express courier
          delivery services in the city for both individuals and legal entities,
          and is also a reliable logistics partner for delivery services for
          online stores and restaurants! Express delivery of documents and
          parcels for organizations, express delivery of correspondence,
          purchases, flowers, food, gifts and goods up to 1.5 tons - the most
          frequent orders in our company.
        </p>
        <p class="story__paragraph">
          But at the same time, we do not limit the range of courier services
          and without problems we can buy and bring goods and products from the
          online store, arrange delivery for the online store, cafe,
          supermarket, restaurant or any other business. Around the clock on our
          website you can call a courier in just a minute and arrange an express
          courier delivery without unnecessary bureaucracy, negotiations and
          calls to the call center.
        </p>
        <p class="story__paragraph" v-if="showText">
          Since 2019, LibertyWalk has successfully provided express courier
          delivery services in the city for both individuals and legal entities,
          and is also a reliable logistics partner for delivery services for
          online stores and restaurants! Express delivery of documents and
          parcels for organizations, express delivery of correspondence,
          purchases, flowers, food, gifts and goods up to 1.5 tons - the most
          frequent orders in our company.
        </p>
        <button
          :class="{
            'btn-reset': true,
            'story__btn-add': true,
            'story__btn-add--show': showText,
            'story__btn-add--hide': !showText,
          }"
          @click="toggleText"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "w-story-section",
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
};
</script>

<style lang="scss" scoped>
.story {
  padding-top: 95px;
  padding-bottom: 89px;

  &__container {
    max-width: 1190px;
  }

  &__content {
    position: relative;
  }

  &__paragraph {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    &:not(:last-child) {
      margin-bottom: 24px;

      @include mobile {
        margin-bottom: 16px;
      }
    }

    &:nth-child(2) {
      margin-bottom: 0;
    }

    &:nth-child(3) {
      margin-top: 24px;

      @include mobile {
        margin-bottom: 16px;
      }
    }
  }

  &__btn-add {
    position: absolute;
    right: 199px;
    bottom: 5px;
    margin-left: 11px;
    border-radius: 4px;
    width: 25px;
    height: 15px;
    background-color: #ccdbfc;
    background-size: 19px 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../assets/img/three-points.svg");

    @include mobile {
      right: 117px;
    }

    &--show {
      opacity: 1;
      right: 246px;
      bottom: 3px;

      @include mobile {
        right: 191px;
      }
    }

    &--hide {
      opacity: 0.5;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  @include mobile {
    padding-top: 63px;
    padding-bottom: 57px;
  }
}
</style>
