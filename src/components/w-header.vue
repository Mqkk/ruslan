<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <div class="header__search">
          <form class="form search">
            <input
              disabled
              type="text"
              class="input-reset search__input"
              :placeholder="user?.name"
            />
            <button class="btn-reset search__btn"></button>
          </form>
        </div>
      </div>
      <ul class="list-reset header__menu header-menu">
        <li class="header-menu__item">
          <button
            @click="logout"
            class="btn-reset header-menu__link"
            v-if="user"
          >
            <span>Выйти</span>
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "w-header",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapMutations(["SET_USER"]),

    logout() {
      localStorage.clear();
      this.SET_USER(null);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 10;
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
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: $text-color;
    cursor: pointer;

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

    span {
      position: relative;
    }
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
  }
}
</style>
