<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <router-link to="/" class="header__login-btn" />
        <div class="header__logo logo"></div>
        <div class="select">
          <div class="select__icon"></div>
          <span>NY, Manhattan</span>
        </div>
      </div>
      <div class="header__search">
        <form class="form search">
          <input
            type="text"
            class="input-reset search__input"
            placeholder="Track a Package"
          />
          <button class="btn-reset search__btn"></button>
        </form>
      </div>
      <button
        class="btn-reset header-menu-btn"
        @click="isSideMenuOpen = true"
      ></button>
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
  <w-side-menu :is-open="isSideMenuOpen" @close="isSideMenuOpen = false" />
</template>

<script>
import wSideMenu from "./w-side-menu.vue";

export default {
  name: "w-header",
  components: {
    wSideMenu,
  },
  data() {
    return {
      isSideMenuOpen: false,
    };
  },
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

    @include mobile {
      justify-content: space-between;
      width: 100%;
    }
  }

  &__logo {
    margin-right: 66px;
    width: 192px;
    height: 64px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/img/logo.svg");

    @include mobile {
      margin-right: 87px;
      width: 120px;
      height: 40px;
    }
  }

  &__login-btn {
    display: none;
    width: 24px;
    height: 24px;
    background-position: center;
    background-size: 24px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/profile-icon.svg");

    @include mobile {
      display: block;
      margin-left: 1px;
    }
  }

  @include mobile {
    min-height: 64px;
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

  @include mobile {
    display: none;
  }
}

.header-menu-btn {
  display: none;
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: 24px;
  background-repeat: no-repeat;
  background-image: url("../assets/img/header-burger.svg");

  @include mobile {
    display: block;
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

  @include mobile {
    display: none;
  }
}

.search {
  position: relative;
  margin-right: 43px;

  &__input {
    outline: none;
    border: 1px solid $blue-light-color;
    border-radius: 8px;
    padding: 12.5px 16px;
    padding-right: 45px;
    width: 184px;
    height: 40px;
    font-family: inherit;
    font-size: 14px;
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
    background-size: 16px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/search-icon.svg");
    opacity: 0.3;

    &:hover,
    &:focus {
      background-color: #f1f5ff;
    }
  }

  &:hover {
    .search__input {
      background-color: #f1f5ff;
    }
  }

  @include mobile {
    display: none;
  }
}
</style>
