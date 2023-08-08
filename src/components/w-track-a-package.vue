<template>
  <div class="track-a-package">
    <h3 class="track-a-package__title title title--h3">Track a package</h3>
    <form class="form search">
      <input
        type="text"
        class="input-reset search__input"
        placeholder="Enter code"
      />
      <button class="btn-reset search__btn"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "w-track-a-package",
};
</script>

<style lang="scss" scoped>
.track-a-package {
  border-radius: 8px;
  padding: 26px 40px 32px;
  width: 360px;
  background-color: $yellow-color;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);

  &__title {
    margin-bottom: 15px;

    @include mobile {
      margin-bottom: 14px;
    }
  }

  @include mobile {
    padding: 18px 16px 24px;
    width: 100%;
  }
}

.search {
  position: relative;

  &__input {
    outline: none;
    border-radius: 4px;
    padding: 8px 16px;
    width: 100%;
    height: 40px;
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    color: $dark-color;

    &::placeholder {
      color: rgba($dark-color, $alpha: 0.32);
    }
  }

  &__btn {
    position: absolute;
    right: 1px;
    width: 40px;
    height: 40px;
    background-position: center;
    background-size: 24px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/loop.svg");

    &:hover,
    &:focus {
      outline: none;
      opacity: 0.7;
    }
  }
}
</style>
