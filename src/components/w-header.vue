<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <div class="header__logo logo"></div>
        <div class="select">
          <div class="select__icon"></div>
          <span>NY, Manhattan</span>
        </div>
      </div>
      <div class="header__search"></div>
      <ul class="list-reset header__menu header-menu">
        <li class="header-menu__item">
          <router-link to="/" class="header-menu__link"
            >Send a Parcel</router-link
          >
        </li>
        <li class="header-menu__item">
          <router-link to="/" class="header-menu__link"
            >Become a Courier</router-link
          >
        </li>
        <li class="header-menu__item">
          <router-link to="/" class="header-menu__link header-menu__link--icon">
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "w-header",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $blue-light-color;
  width: 100%;
  min-height: 80px;
  background-color: $bg-color;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 66px;
    width: 192px;
    height: 64px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/img/logo.svg");
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

    &--icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      background-color: $blue-color;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 16px 16px;
      background-image: url("../assets/img/icon-lock.svg");
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: rgba($blue-color, $alpha: 0.7);

        &::after {
          display: none;
        }
      }
    }
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
    margin-left: 6px;
  }

  &:hover {
    .select__icon {
      opacity: 0.7;
    }

    span {
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
