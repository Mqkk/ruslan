<template>
  <section class="what-we-do">
    <div class="what-we-do__container container">
      <div class="section-top">
        <h2 class="section-top__title what-we-do__title title title--h2">What we do</h2>
        <p class="section-top__descr">
          Express courier service in the city. We are a reliable logistics
          partner for delivery services for online stores and restaurants!
        </p>
      </div>
      <div class="what-we-do__content">
        <ul class="list-reset what-we-do__list">
          <li class="what-we-do__item what-we-do-item">
            <div class="what-we-do-item__icon">
              <img
                class="img"
                src="../assets/img/what-we-do/online-calculation-icon.svg"
                alt="Online calculation"
              />
            </div>
            <h3 class="what-we-do-item__title title title--h3">
              Online<router-link to="/" class="link what-we-do-item__link"
                >calculation</router-link
              >
            </h3>
            <p class="what-we-do-item__descr">
              Instant calculation of the cost in the order form, the price is
              updated in the process of filling out the form
            </p>
          </li>
          <li class="what-we-do__item what-we-do-item">
            <div class="what-we-do-item__icon">
              <img
                class="img"
                src="../assets/img/what-we-do/minimum-paperwork-icon.svg"
                alt="Minimum paperwork"
              />
            </div>
            <h3 class="what-we-do-item__title title title--h3">
              Minimum paperwork
            </h3>
            <p class="what-we-do-item__descr">
              You can place an order for courier or freight delivery without
              registration and contract.
            </p>
          </li>
          <li class="what-we-do__item what-we-do-item">
            <div class="what-we-do-item__icon">
              <img
                class="img"
                src="../assets/img/what-we-do/convenient-payment.svg"
                alt="Convenient payment"
              />
            </div>
            <h3 class="what-we-do-item__title title title--h3">
              Convenient payment
            </h3>
            <p class="what-we-do-item__descr">
              You can pay for delivery by card or in cash at any of the order
              addresses. For legal entities non-cash is available.
              <router-link
                class="what-we-do-item__circle-link circle-link"
                to="/"
              />
            </p>
          </li>
        </ul>
        <div class="what-we-do__bottom">
          <router-link to="/" class="btn btn--yellow">Get started!</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "w-what-we-do-section",
};
</script>

<style lang="scss" scoped>
.what-we-do {
  &__container {
    position: relative;
    border-top-left-radius: 308px;
    border-bottom-left-radius: 308px;
    padding-top: 67px;
    padding-bottom: 73px;
    max-width: 100%;
    background: linear-gradient(333deg, #f8faff 0%, #f2f6ff 100%);

    &::before {
      content: "";
      z-index: 0;
      position: absolute;
      top: 0;
      left: -29px;
      border-top-left-radius: 308px;
      border-bottom-left-radius: 308px;
      width: 100%;
      height: 100%;
      background: linear-gradient(333deg, #f8faff 0%, #f2f6ff 100%);
    }

    &::after {
      content: "";
      z-index: 0;
      position: absolute;
      right: -37px;
      top: -72px;
      width: 220px;
      height: 504px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(../assets/img/what-we-do/bg-element.png);

      @include mobile {
        display: none;
      }
    }

    @include mobile {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding-top: 48px;
      padding-bottom: 48px;
    }
  }

  &__title {
    @include mobile {
      margin-left: 4px;
    }
  }

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2px;

    @include mobile {
      padding-top: 16px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    margin-bottom: 41px;
    max-width: 1000px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 41px;
    }
  }
}

.what-we-do-item {
  &__title {
    margin-bottom: 21px;

    @include mobile {
      margin-bottom: 16px;
      font-size: 20px;
      text-align: center;
    }
  }

  &__link {
    margin-left: 9px;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 26px;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    background-color: $light-color;
    box-shadow: 0 8px 16px rgba(43, 107, 243, 0.16);
    pointer-events: none;

    @include mobile {
      width: 64px;
      height: 64px;
    }
  }

  &__descr {
    position: relative;
    margin: 0;
    line-height: 150%;

    @include mobile {
      max-width: 323px;
      text-align: center;
    }
  }

  &__circle-link {
    position: absolute;
    right: 15px;
    bottom: 3px;

    @include mobile {
      right: 21px;
    }
  }

  @include mobile {
    display: flex;
    align-items: center;
    flex-direction: column;

    &:nth-child(1) {
      .img {
        width: 32px;
      }
    }

    &:nth-child(2) {
      .img {
        width: 28px;
      }
    }

    &:nth-child(3) {
      .img {
        width: 31px;
      }
    }
  }
}
</style>
