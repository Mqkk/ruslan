<template>
  <div class="form-wrapper">
    <div class="form-wrapper__top">
      <h3 class="form-wrapper__title title title--h3">{{ title }}</h3>
    </div>
    <div class="form-wrapper__tabs tabs">
      <div class="tabs-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "w-form-wrapper",
  props: {
    title: {
      type: String,
      default: "Войти в систему",
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  border: 2px solid $blue-light-color;
  border-radius: 8px;
  padding: 32px 29px 24px;
  width: 100%;
  height: auto;
  max-width: 360px;
  box-shadow: 0 8px 16px rgba($blue-color, $alpha: 0.08);
  background-color: $light-color;

  &__top {
    display: flex;
    margin-bottom: 25px;

    @include mobile {
      margin-bottom: 22px;
    }
  }

  &__title {
    margin-right: 17px;
  }

  &__tooltip {
    margin-top: 2px;
  }

  &__tabs-nav {
    margin-bottom: 34px;

    @include mobile {
      margin-bottom: 37px;
    }
  }

  @include mobile {
    padding: 32px 14px 24px;
    width: 100%;
    max-width: 100%;
  }
}

.tabs-nav {
  display: flex;
  border: 1px solid $blue-light-color;
  border-radius: 8px;
  width: 100%;
  max-width: 296px;
  height: 84px;
  background-color: #eff4ff;

  &__item {
    width: 100%;

    &:first-child {
      .tabs-nav__btn {
        border-right: 1px solid $blue-light-color;
        border-radius: 8px 0 0 8px;

        &.active {
          border-right: 2px solid $blue-color;
        }
      }

      .tabs-nav__img {
        top: 6px;
      }
    }

    &:last-child {
      .tabs-nav__btn {
        border-left: 1px solid $blue-light-color;
        border-radius: 0 8px 8px 0;

        &.active {
          border-left: 2px solid $blue-color;
        }
      }
    }
  }

  &__btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &:hover {
      opacity: 0.7;

      @include mobile {
        opacity: 1;
      }
    }

    &.active {
      border: 2px solid $blue-color;
      background-color: $light-color;

      span {
        color: $dark-color;
      }
    }
  }

  &__img {
    position: absolute;
    top: -1px;
    pointer-events: none;
  }

  &__name {
    font-family: "IntroBook";
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 8px;

    @include mobile {
      display: none;
    }
  }

  @include mobile {
    height: 56px;
  }
}

.tabs-content {
  position: relative;
}
</style>
