<template>
  <div class="table">
    <div class="table__top" v-if="filteredClients?.length">
      <p>ФИО</p>
      <p>Номер телефона</p>
      <p>Комментарий</p>
      <p>Действие</p>
    </div>
    <ul class="list-reset table__list" v-if="filteredClients?.length">
      <li class="table-item" v-for="item in filteredClients" :key="item.id">
        <div class="table-item__row">
          <p>{{ item?.name }}</p>
        </div>
        <div class="table-item__row">
          <p>{{ item?.phone }}</p>
        </div>
        <div class="table-item__row">
          <p>{{ item?.description }}</p>
        </div>
        <div class="table-item__row">
          <button
            @click="deleteItem(item?.id)"
            class="btn-reset btn btn--yellow table-item__btn"
          >
            Удалить
          </button>
        </div>
      </li>
    </ul>
    <h3 class="title title--h4" v-else>Список пока пуст</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    searchTerm: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["clients"]),

    filteredClients() {
      const search = (this.searchTerm || "").trim();

      return this.clients?.filter((client) =>
        client.name?.toLowerCase().includes(search?.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(["fetchClients", "deleteClient"]),

    deleteItem(id) {
      this.deleteClient(id);

      this.$store.commit(
        "SET_CLIENTS",
        this.clients?.filter((item) => item.id !== id)
      );
    },
  },
  mounted() {
    this.fetchClients();
  },
};
</script>

<style scoped lang="scss">
.table {
  display: flex;
  flex-direction: column;
  border: 2px solid $blue-light-color;
  border-radius: 8px;
  padding: 32px 29px 24px;
  width: 100%;
  height: auto;
  max-height: 500px;
  box-shadow: 0 8px 16px rgba($blue-color, $alpha: 0.08);
  background-color: $light-color;

  &__top {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-bottom: 2px solid rgba($blue-color, $alpha: 0.16);
    padding-bottom: 9px;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    color: $dark-color;
    font-weight: 700;
    text-transform: uppercase;

    p {
      width: 100%;
      margin: 0;

      &:last-child {
        text-align: right;
      }
    }

    @include mobile {
      display: none;
    }
  }

  &__list {
    overflow: auto;
  }

  @include mobile {
    margin-bottom: 40px;
    padding: 18px 16px;
    max-height: 100%;
  }
}

.table-item {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid rgba($blue-color, $alpha: 0.12);
  padding-top: 30px;
  padding-bottom: 16px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: $dark-color;

  p {
    margin: 0;
    font-size: 16px;
  }

  &__row {
    width: 100%;

    &:last-child {
      display: flex;
      justify-content: end;

      @include mobile {
        justify-content: flex-start;
      }
    }
  }

  &__btn {
    width: 86px;
    height: 34px;
    font-size: 14px;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  @include mobile {
    flex-direction: column;
    gap: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
