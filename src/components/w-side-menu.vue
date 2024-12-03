<template>
  <div :class="['side-menu', { open: isOpen }]">
    <div class="side-menu__close" @click="closeSideMenu"></div>
    <div class="side-menu__content">
      <div class="side-menu__top">
        <div class="select"></div>
        <div class="side-menu__btn-close" @click="closeSideMenu"></div>
      </div>
      <div class="side-menu__search">
        <form class="form search">
          <input
            type="text"
            class="input-reset search__input"
            placeholder="Track a Package"
          />
          <button class="btn-reset search__btn"></button>
        </form>
      </div>
      <ul class="list-reset side-menu__list">
        <li class="side-menu__item">
          <router-link to="/" class="side-menu__link" @click="closeSideMenu">
            Send a Parcel
          </router-link>
        </li>
        <li class="side-menu__item">
          <router-link to="/" class="side-menu__link" @click="closeSideMenu">
            Become a Courier
          </router-link>
        </li>
        <li class="side-menu__item">
          <router-link to="/" class="side-menu__link" @click="closeSideMenu">
            Affiliate Program
          </router-link>
        </li>
        <li class="side-menu__item">
          <router-link to="/" class="side-menu__link" @click="closeSideMenu">
            Help & Support
          </router-link>
        </li>
      </ul>
      <div class="side-menu__bottom">
        <button class="btn-reset btn side-menu__btn" @click="closeSideMenu">
          Take a complex order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "w-side-menu",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    shouldDisableScroll() {
      return this.isOpen;
    },
  },
  watch: {
    shouldDisableScroll(val) {
      document.body.style.overflow = val ? "hidden" : "auto";
    },
  },
  methods: {
    closeSideMenu() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  position: fixed;
  z-index: 9999;
  right: -100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  transition: right 0.2s ease-in-out;

  &.open {
    right: 0;
  }

  &__close {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 21px 16px 30px;
    width: 100%;
    height: 100%;
    max-width: 274px;
    box-shadow: 0 16px 16px rgba(73, 99, 176, 0.16);
    background-color: $light-color;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 43px;
  }

  &__btn-close {
    width: 24px;
    height: 24px;
    background-position: center;
    background-size: 24px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/header-xmark.svg");
  }

  &__search {
    margin-bottom: 39px;
  }

  &__btn {
    width: 100%;
  }

  &__list {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__link {
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: $text-color;

    &:hover {
      color: rgba($text-color, $alpha: 0.7);

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #c1cfef;
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }
}

.select {
  display: flex;
  cursor: pointer;

  &__icon {
    width: 16px;
    height: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-image: url("../assets/img/pin.svg");
  }

  span {
    position: relative;
    margin-left: 14px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #c1cfef;
    }
  }

  &:hover {
    .select__icon {
      opacity: 0.7;
    }

    span {
      color: rgba($text-color, $alpha: 0.7);
    }
  }
}

.search {
  position: relative;

  &__input {
    outline: none;
    border: 1px solid $blue-light-color;
    border-radius: 4px;
    padding: 12.5px 16px;
    padding-right: 45px;
    width: 100%;
    height: 40px;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: $dark-color;

    &::placeholder {
      color: rgba($dark-color, $alpha: 0.56);
    }

    &:focus-visible {
      border: 1px solid $blue-color;
      background-color: $light-color;

      & ~ .search__btn {
        opacity: 1;
      }
    }
  }

  &__btn {
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    background-position: center;
    background-size: 24px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/loop.svg");
  }

  &:active {
    .search__input {
      background-color: #f1f5ff;
    }
  }
}

.header-menu {
  display: flex;
  align-items: center;

  &__item {
    &:not(:first-child) {
      margin-left: 36px;
    }

    &:last-child {
      margin-left: 32px;
    }
  }

  &__link {
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: $text-color;

    &:hover {
      color: rgba($text-color, $alpha: 0.7);

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #c1cfef;
      }
    }
  }
}
</style>
