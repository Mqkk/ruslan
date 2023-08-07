<template>
  <div class="send-a-parcel__content">
    <form class="form send-a-parcel__form">
      <label for="location" class="form__label">
        Pickup location
        <input
          id="location"
          type="text"
          class="input-reset form__input"
          placeholder="location"
        />
      </label>
      <label for="dropLocation" class="form__label">
        Drop location
        <input
          id="dropLocation"
          type="text"
          class="input-reset form__input"
          placeholder="location"
        />
      </label>
      <button class="btn-reset btn form__btn">Order</button>
      <button class="btn-reset form__clear">Clear All</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "tab-content",
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: left 23px;
  background-size: 24px 112px;
  background-repeat: no-repeat;
  background-image: url("/src/assets/img/sand-a-parcel/decor.svg");

  &__label {
    position: relative;
    overflow: hidden;
    display: grid;
    gap: 6px;
    padding-left: 39px;
    padding-bottom: 5px;
    width: 100%;
    font-family: "Intro";
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
    color: #c4cee5;

    &:hover {
      opacity: 0.7;
    }

    &:focus {
      &::before {
        content: "";
        position: absolute;
        z-index: 10;
        bottom: 2px;
        margin-left: 39px;
        border-radius: 4px;
        width: 100%;
        height: 2px;
        background-color: $blue-color;
      }
    }

    &:first-child {
      margin-bottom: 34px;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      margin-left: 39px;
      border-radius: 4px;
      width: 100%;
      height: 2px;
      background-color: rgba($blue-color, $alpha: 0.16);
    }
  }

  &__input {
    font-family: "IntroBook";
    font-size: 16px;
    line-height: 24px;
    color: $dark-color;
    background-color: inherit;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      color: rgba($dark-color, $alpha: 0.56);
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      & ~ .form__label::before {
        content: "";
        position: absolute;
        bottom: 2px;
        margin-left: 39px;
        border-radius: 4px;
        width: 100%;
        height: 2px;
        background-color: $blue-color;
      }
    }
  }

  &__btn {
    margin-top: 39px;
    margin-bottom: 15px;
  }

  &__clear {
    padding-left: 15px;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: #999;
    background-position: -1px;
    background-size: 8px;
    background-repeat: no-repeat;
    background-image: url("/src/assets/img/sand-a-parcel/x-mark.svg");
  }
}
</style>
