<template>
  <div class="login__content">
    <form class="form login__form" @submit.prevent="handleLogin">
      <label for="login" class="form__label">
        Логин
        <input
          id="login"
          type="text"
          class="input-reset form__input"
          placeholder="Введите ваш логин"
          v-model="inputLogin"
        />
      </label>
      <label for="password" class="form__label">
        Пароль
        <input
          id="password"
          type="password"
          class="input-reset form__input"
          placeholder="Введите ваш пароль"
          v-model="inputPassword"
        />
      </label>
      <button class="btn-reset btn form__btn" :disabled="isLoading">
        {{ isLoading ? "Загрузка..." : "Войти в систему" }}
      </button>
      <button class="btn-reset form__clear" @click.prevent="clearForm">
        Очистить все
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "tab-content",
  data() {
    return {
      inputLogin: "",
      inputPassword: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["login", "fetchUser"]),

    clearForm() {
      this.inputLogin = "";
      this.inputPassword = "";
    },
    async handleLogin() {
      if (!this.inputLogin || !this.inputPassword) {
        alert("Пожалуйста, заполните все поля!");
        return;
      }

      this.isLoading = true;

      try {
        await this.login({
          username: this.inputLogin,
          password: this.inputPassword,
        });

        if (this.isAuthenticated) {
          this.fetchUser();
          this.$router.push("/main");
        }
      } catch (error) {
        console.error("Ошибка авторизации:", error);
        alert("Неправильный логин или пароль!");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__label {
    position: relative;
    overflow: hidden;
    display: grid;
    gap: 6px;
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

    @include mobile {
      width: 100%;
    }
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
    background-image: url("/src/assets/img/send-a-parcel/x-mark.svg");
  }
}
</style>
