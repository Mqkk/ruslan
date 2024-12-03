<template>
  <section class="main-content">
    <div class="main-content__container container">
      <div class="main-content__left">
        <h2 class="main-content__title title title--h2">
          Ваш черный список клиентов
        </h2>
        <w-form-wrapper title="Добавление клиента в черный список">
          <w-main-form />
        </w-form-wrapper>
      </div>
      <div class="main-content__right">
        <w-search v-model="searchTerm" />
        <w-table :searchTerm="searchTerm" />
      </div>
    </div>
  </section>
</template>

<script>
import wFormWrapper from "./w-form-wrapper.vue";
import wMainForm from "./w-main-form.vue";
import wSearch from "./w-search.vue";
import wTable from "./w-table.vue";

export default {
  name: "w-main-content",
  components: {
    wFormWrapper,
    wMainForm,
    wSearch,
    wTable,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
};
</script>

<style scoped lang="scss">
.main-content {
  padding-top: 100px;
  height: 100vh;

  &__container {
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 57px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  &__title {
    margin-bottom: 36px;

    @include mobile {
      margin-bottom: 20px;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 60px;

    @include mobile {
      gap: 24px;
    }
  }

  @include mobile {
    height: auto;
  }
}
</style>
