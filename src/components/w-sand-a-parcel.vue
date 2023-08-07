<template>
  <div class="sand-a-parcel">
    <h3 class="sand-a-parcel__title title title--h3">Send a Parcel</h3>
    <div class="sand-a-parcel__tabs tabs">
      <ul class="list-reset tabs-nav sand-a-parcel__tabs-nav">
        <li class="tabs-nav__item" v-for="(tab, index) in tabs" :key="index">
          <button
            class="btn-reset tabs-nav__btn"
            @click="activeTab = index"
            :class="{ active: activeTab === index }"
          >
            <img class="img tabs-nav__img" :src="tab.img" :alt="tab.name" />
            <span class="tabs-nav__name">{{ tab.name }}</span>
          </button>
        </li>
      </ul>
      <div class="tabs-content">
        <component :is="currentTabComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import manIcon from "../assets/img/sand-a-parcel/man-icon.svg";
import carIcon from "../assets/img/sand-a-parcel/car-icon.svg";
import truckIcon from "../assets/img/sand-a-parcel/truck-icon.svg";
import tabContent from "../components/tabs/tab-content.vue";
import tabContentSecond from "../components/tabs/tab-content-second.vue";

export default {
  name: "w-sand-a-parcel",
  components: {
    tabContent,
    tabContentSecond,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          name: "up to 10lb",
          img: manIcon,
          component: "tabContent",
        },
        {
          name: "up to 130lb",
          img: carIcon,
          component: "tabContentSecond",
        },
        {
          name: "over 130lb",
          img: truckIcon,
          component: "tabContent",
        },
      ],
    };
  },
  computed: {
    currentTabComponent() {
      return this.tabs[this.activeTab].component;
    },
  },
};
</script>

<style lang="scss" scoped>
.sand-a-parcel {
  border: 2px solid $blue-light-color;
  border-radius: 8px;
  padding: 39px 32px 24px;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 500px;
  box-shadow: 0 8px 16px rgba($blue-color, $alpha: 0.08);
  background-color: $light-color;

  &__title {
    margin-bottom: 20px;
  }

  &__tabs-nav {
    margin-bottom: 34px;
  }
}

.tabs-nav {
  display: flex;
  border-radius: 8px;
  width: 100%;
  max-width: 296px;
  background-color: #eff4ff;

  &__item {
    width: 100%;

    &:first-child {
      .tabs-nav__btn {
        border-radius: 8px 0 0 8px;
      }
    }

    &:last-child {
      .tabs-nav__btn {
        border-radius: 0 8px 8px 0;
      }
    }
  }

  &__btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &.active {
      background-color: $dark-color;
    }
  }
}

.tabs-content {
  position: relative;
}
</style>
