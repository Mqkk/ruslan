<template>
  <section class="payment">
    <div class="payment__container container">
      <div class="section-top">
        <h2 class="section-top__title title title--h2">Payment methods</h2>
      </div>
      <div class="payment-swiper">
        <swiper
          :modules="modules"
          :slides-per-view="6"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          navigation
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
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
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
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.payment {
  &__container {
    padding-bottom: 96px;
    max-width: 1190px;
  }
}

.payment-slide {
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: $dark-color;
}
</style>
