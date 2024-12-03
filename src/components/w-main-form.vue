<template>
  <div class="main-form__content">
    <form class="form main-form__form" @submit.prevent="submitForm">
      <label for="name" class="form__label">
        ФИО клиента
        <input
          id="name"
          type="text"
          class="input-reset form__input"
          placeholder="Введите ФИО клиента"
          v-model="name"
          required
        />
      </label>
      <label for="phone" class="form__label">
        Номер телефона
        <input
          id="phone"
          type="tel"
          class="input-reset form__input"
          placeholder="Введите номер телефона"
          v-model="phone"
          @input="formatPhone"
          required
        />
      </label>
      <label for="comment" class="form__label">
        Причина добавления
        <input
          id="comment"
          type="text"
          class="input-reset form__input"
          placeholder="Введите причину добавления"
          v-model="comment"
          required
        />
      </label>
      <button type="submit" class="btn-reset btn form__btn">
        Добавить в список
      </button>
      <button class="btn-reset form__clear" @click.prevent="clearForm">
        Очистить все
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "tab-content",
  data() {
    return {
      name: "",
      phone: "",
      comment: "",
    };
  },
  methods: {
    ...mapActions(["addClient", "fetchClients"]),

    async submitForm() {
      if (!this.name || !this.phone || !this.comment) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      const newClient = {
        name: this.name,
        phone: this.phone,
        description: this.comment,
      };

      try {
        await this.addClient(newClient);
        alert("Клиент успешно добавлен!");

        this.clearForm();
        await this.fetchClients();
      } catch (error) {
        alert("Не удалось добавить клиента. Попробуйте снова.");
      }
    },

    clearForm() {
      this.name = "";
      this.phone = "";
      this.comment = "";
    },

    formatPhone(event) {
      let phone = event.target.value.replace(/\D/g, "");
      if (phone.length > 11) phone = phone.slice(0, 11);

      this.phone = phone;
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
    margin-bottom: 34px;
    padding-bottom: 5px;
    width: 100%;
    font-family: "Intro";
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
    color: #c4cee5;

    &:last-of-type {
      margin-bottom: 0;
    }

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
