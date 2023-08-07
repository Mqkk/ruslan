<template>
  <section class="our-partners">
    <div class="our-partners__container container">
      <div class="section-top">
        <h2 class="section-top__title title title--h2">Our Partners</h2>
        <router-link to="/" class="our-partners__btn"
          >Let's collaborate</router-link
        >
      </div>
      <div class="our-partners-swiper">
        <swiper
          :slides-per-view="5"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="item in items"
            :key="item.id"
            class="our-partners-slide"
          >
            <div class="our-partners-slide__img">
              <img
                class="our-partners-slide__img-no-color"
                :src="item.imgNoColor"
                :alt="item.name"
              />
              <img
                class="our-partners-slide__img-color"
                :src="item.img"
                :alt="item.name"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import alvaImg from "../assets/img/our-partners/alva.svg";
import fagorImg from "../assets/img/our-partners/fagor.svg";
import tendoImg from "../assets/img/our-partners/tendo.svg";
import radioShackImg from "../assets/img/our-partners/radioshack.svg";
import guitarCenterImg from "../assets/img/our-partners/guitar-center.svg";
import alvaImgNoColor from "../assets/img/our-partners/alva-no-color.svg";
import fagorImgNoColor from "../assets/img/our-partners/fagor-no-color.svg";
import tendoImgNoColor from "../assets/img/our-partners/tendo-no-color.svg";
import radioShackImgNoColor from "../assets/img/our-partners/radioshack-no-color.svg";
import guitarCenterImgNoColor from "../assets/img/our-partners/guitar-center-no-color.svg";

export default {
  name: "w-our-partners",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Alva",
          img: alvaImg,
          imgNoColor: alvaImgNoColor,
        },
        {
          id: 2,
          name: "Tendo",
          img: tendoImg,
          imgNoColor: tendoImgNoColor,
        },
        {
          id: 3,
          name: "Fagor",
          img: fagorImg,
          imgNoColor: fagorImgNoColor,
        },
        {
          id: 4,
          name: "Radio Shack",
          img: radioShackImg,
          imgNoColor: radioShackImgNoColor,
        },
        {
          id: 5,
          name: "Guitar Center",
          img: guitarCenterImg,
          imgNoColor: guitarCenterImgNoColor,
        },
      ],
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {
      return;
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.our-partners {
  padding-top: 91px;
  padding-bottom: 45px;

  &__container {
    max-width: 1243px;
  }

  &__btn {
    position: absolute;
    right: 26px;
    top: 5px;
    border: 1px solid #dde7fd;
    border-radius: 24px;
    padding: 7px 17px;
    padding-left: 41px;
    font-size: 16px;
    line-height: 150%;
    color: $dark-color;
    background-position: 15px 9px;
    background-size: 17px 16px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/our-partners/briefcase-icon.svg");
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
}

.our-partners-swiper {
  margin-top: 54px;
}

.our-partners-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;

  &__img {
    position: relative;

    &-color {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      opacity: 0;
      cursor: pointer;

      &:hover {
        overflow: auto;
        opacity: 1;
      }
    }
  }
}
</style>
