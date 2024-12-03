<template>
  <section class="for-what" id="forWhatSection">
    <div class="for-what__container container">
      <div class="section-top">
        <h2 class="section-top__title title title--h2">
          Для чего нужна данная система?
        </h2>
        <p class="section-top__descr">
          Система выполняет задачу организации списка сотрудников, которые
          должны находится в черном списке организации
        </p>
      </div>
      <ul class="list-reset for-what__list">
        <li
          class="for-what__item for-what-item"
          v-for="item in items"
          :key="item.id"
        >
          <h3 class="for-what-item__title title title--h3">
            {{ item.title }}
          </h3>
          <div class="for-what-item__icon">
            <img class="img" :src="item.img" :alt="item.title" />
          </div>
          <p class="for-what-item__descr">{{ item.descr }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import iconBecomeACourier from "@/assets/img/for-what/become-a-courier-icon.svg";
import iconHelpAndSupport from "@/assets/img/for-what/support-icon.svg";
import iconAffiliateProgram from "@/assets/img/for-what/affiliate-program-icon.svg";

export default {
  name: "w-for-what-section",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Добавление клиента",
          img: iconBecomeACourier,
          descr: "Управляйте списком клиентов, добавляя их в список",
        },
        {
          id: 2,
          title: "Удаление клиента",
          img: iconHelpAndSupport,
          descr: "При необходимости вы всегда можете удалить клиента из списка",
        },
        {
          id: 3,
          title: "Поиск клиентов",
          img: iconAffiliateProgram,
          descr:
            "При большом колличестве клиентов вы всегда можете воспользоваться поиском",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.for-what {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 91px;
  padding-bottom: 94px;
  height: 100vh;

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    max-width: 1000px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 32px;
      max-width: 300px;
    }
  }

  @include mobile {
    height: auto;
    padding-top: 48px;
    padding-bottom: 62px;
  }
}

.for-what-item {
  border: 1px solid $blue-light-color;
  border-radius: 8px;
  padding: 19px 24px 24px 23px;
  background-color: $bg-color;
  transition: background-color 0.1s ease-in-out;

  &__title {
    margin-bottom: 21px;

    @include mobile {
      margin-bottom: 23px;
      font-size: 20px;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 7px;
    margin-bottom: 31px;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    background-color: $light-color;
    box-shadow: 0 8px 16px rgba(43, 107, 243, 0.16);
    pointer-events: none;
  }

  &__descr {
    margin: 0;
    line-height: 150%;
  }

  &:nth-child(2) {
    padding: 19px 24px 15px 23px;

    .for-what-item__icon {
      margin-bottom: 36px;
    }
    .for-what-item__descr {
      max-width: 181px;
      padding-bottom: 4px;
    }
  }

  &:hover {
    border: 1px solid $light-color;
    outline: 2px solid $blue-color;
    background-color: $light-color;
  }

  @include mobile {
    &:nth-child(3) {
      grid-row-start: 2;

      .for-what-item__descr {
        max-width: 220px;
      }
    }
  }
}
</style>
