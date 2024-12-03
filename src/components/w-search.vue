<template>
  <div class="search-wrapper">
    <h3 class="search-wrapper__title title title--h3">Поиск по списку</h3>
    <form class="form search" @submit.prevent>
      <input
        type="text"
        class="input-reset search__input"
        placeholder="Введите имя клиента"
        :value="modelValue"
        @input="updateSearchTerm($event)"
      />
      <button class="btn-reset search__btn" type="button"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "w-search",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateSearchTerm(event) {
      this.$emit("update:modelValue", event.target.value); // Обновляем значение через emit
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  padding: 18px;
  width: 100%;
  background-color: $yellow-color;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);

  &__title {
    text-wrap: nowrap;
  }

  @include mobile {
    padding: 18px 16px 24px;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
}

.search {
  position: relative;
  width: 100%;

  &__input {
    outline: none;
    border-radius: 4px;
    padding: 8px 16px;
    width: 100%;
    min-width: 100%;
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
