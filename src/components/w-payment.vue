<template>
  <section class="payment">
    <div class="payment__container container">
      <div class="section-top payment__top">
        <h2 class="section-top__title title title--h2">Payment methods</h2>
      </div>
      <div class="payment-swiper">
        <swiper
          :modules="modules"
          :slides-per-view="2.5"
          :space-between="20"
          :breakpoints="breakpoints"
          :loop="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
        >
          <swiper-slide
            v-for="item in items"
            :key="item.id"
            class="payment-slide"
          >
            <div class="payment-slide__img">
              <img :src="item.img" :alt="item.name" />
            </div>
          </swiper-slide>
          <template #navigation>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </template>
        </swiper>
        <div ref="prev" class="swiper-button-prev"></div>
        <div ref="next" class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/scss/navigation";
import gPay from "../assets/img/payment/g-pay.svg";
import sofort from "../assets/img/payment/sofort.svg";
import unionPay from "../assets/img/payment/union-pay.svg";
import visa from "../assets/img/payment/visa.svg";
import mastercard from "../assets/img/payment/mastercard.svg";
import americanExpress from "../assets/img/payment/american-express.svg";

export default {
  name: "w-payment",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "googlePay",
          img: gPay,
        },
        {
          id: 2,
          name: "Sofort",
          img: sofort,
        },
        {
          id: 3,
          name: "unionPay",
          img: unionPay,
        },
        {
          id: 4,
          name: "VISA",
          img: visa,
        },
        {
          id: 5,
          name: "Mastercard",
          img: mastercard,
        },
        {
          id: 6,
          name: "American Express",
          img: americanExpress,
        },
        {
          id: 7,
          name: "American Express",
          img: americanExpress,
        },
      ],
      breakpoints: {
        425: {
          slidesPerView: 6,
          initialSlide: 1,
          spaceBetween: 106,
          loop: false
        },
      },
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {
      return;
    };
    const prev = ref(null);
    const next = ref(null);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>

<style lang="scss" scoped>
.payment {
  position: relative;
  padding-top: 90px;
  padding-bottom: 90px;
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
    padding-right: 0;
    max-width: 1190px;
  }

  &__top {
    margin-bottom: 24px;
  }
}

.payment-swiper {
  position: relative;
  width: 1025px;

  @include mobile {
    width: 100%;
  }
}

.swiper-button-prev {
  left: -74px;
  top: 27px;
}

.swiper-button-next {
  right: -74px;
  top: 27px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-weight: 700;
  font-size: 25px;
  color: rgba($dark-color, $alpha: 0.16);
}
</style>
