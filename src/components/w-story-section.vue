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
          <button class="btn-reset story__btn-add"></button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "w-story-section",
};
</script>

<style lang="scss" scoped>
.story {
  padding-top: 95px;
  padding-bottom: 89px;

  &__container {
    max-width: 1190px;
  }

  &__paragraph {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__btn-add {
    margin-left: 11px;
    border-radius: 4px;
    width: 25px;
    height: 15px;
    background-color: #ccdbfc;
    background-size: 19px 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../assets/img/three-points.svg");

    &:hover {
        opacity: 0.7;
    }
  }
}
</style>
