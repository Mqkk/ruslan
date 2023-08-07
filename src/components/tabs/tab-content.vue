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
      <label for="location" class="form__label">
        Drop location
        <input
          id="location"
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
  background-position: left;
  background-size: 24px 112px;
  background-repeat: no-repeat;
  background-image: url("/src/assets/img/sand-a-parcel/decor.svg");

  &__label {
    position: relative;
    display: flex;
    flex-direction: column;
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

    &:not(:last-child) {
      margin-bottom: 37px;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      border-radius: 4px;
      width: 100%;
      height: 2px;
      background-color: rgba($blue-color, $alpha: 0.16);
    }
  }

  &__input {
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
  }

  &__btn {
    margin-bottom: 16px;
  }

  &__clear {
    padding-left: 10px;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: #999;
    background-position: left;
    background-size: 8px;
    background-repeat: no-repeat;
    background-image: url("/src/assets/img/sand-a-parcel/x-mark.svg");
  }
}
</style>
