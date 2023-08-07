<template>
  <section class="express-delivery">
    <div class="express-delivery__container container">
      <div class="section-top">
        <h2 class="section-top__title title title--h2">
          Express delivery market revolution
        </h2>
        <p class="section-top__descr">
          Express courier service in the city. We are a reliable logistics
          partner for delivery services for online stores and restaurants!
        </p>
      </div>
      <ul class="list-reset express-delivery__list">
        <li
          class="express-delivery__item express-delivery-item"
          v-for="item in items"
          :key="item.id"
        >
          <h3 class="express-delivery-item__title title title--h3">
            {{ item.title }}
          </h3>
          <div class="express-delivery-item__icon">
            <img class="img" :src="item.img" :alt="item.title" />
          </div>
          <p class="express-delivery-item__descr">{{ item.descr }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import iconBecomeACourier from "@/assets/img/express-delivery/become-a-courier-icon.svg";
import iconHelpAndSupport from "@/assets/img/express-delivery/support-icon.svg";
import iconAffiliateProgram from "@/assets/img/express-delivery/affiliate-program-icon.svg";

export default {
  name: "w-express-delivery-section",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Become a Courier",
          img: iconBecomeACourier,
          descr:
            "You choose a schedule. You decide how much and when to earn. Earnings from day one",
        },
        {
          id: 2,
          title: "Help & Support",
          img: iconHelpAndSupport,
          descr: "Door-to-door delivery in 90 minutes or at your convenience",
        },
        {
          id: 3,
          title: "Affiliate Program",
          img: iconAffiliateProgram,
          descr:
            "Use our service and feel new quality of this traditional service!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.express-delivery {
  position: relative;
  padding-top: 91px;
  padding-bottom: 94px;
  border-bottom: 2px solid $blue-light-color;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -16px;
    z-index: 1000;
    margin: 0 auto;
    width: 100px;
    height: 28px;
    background-position: center;
    background-size: 32px 28px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/decor-box.svg");
    background-color: $light-color;
  }

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    max-width: 1000px;
  }
}

.express-delivery-item {
  border: 1px solid $blue-light-color;
  border-radius: 8px;
  padding: 19px 24px 24px 23px; 
  background-color: $bg-color;
  transition: background-color 0.1s ease-in-out;

  &__title {
    margin-bottom: 21px;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 7px;
    margin-bottom: 31px;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    background-color: $light-color;
    box-shadow: 0 8px 16px rgba(43, 107, 243, 0.16);
    pointer-events: none;
  }

  &__descr {
    margin: 0;
    line-height: 150%;
  }

  &:first-child {
    background-position: 120px 75px;
    background-size: 100px 76px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/express-delivery/bg-for-first-child.svg");
  }

  &:nth-child(2) {
    .express-delivery-item__descr {
      max-width: 180px;
    }
  }

  &:hover {
    border: 1px solid $light-color;
    outline: 2px solid $blue-color;
    background-color: $light-color;
  }
}
</style>
