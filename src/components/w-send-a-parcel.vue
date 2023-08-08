<template>
  <div class="send-a-parcel">
    <div class="send-a-parcel__top">
      <h3 class="send-a-parcel__title title title--h3">Send a Parcel</h3>
      <div class="tooltip send-a-parcel__tooltip">
        <span class="tooltip__icon"></span>
        <span class="tooltip__text">
          <p>
            A commission is a piece of work that someone is asked to do and is
            paid for.
          </p>
        </span>
      </div>
    </div>
    <div class="send-a-parcel__tabs tabs">
      <ul class="list-reset tabs-nav send-a-parcel__tabs-nav">
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
import manIcon from "../assets/img/send-a-parcel/man-icon.png";
import carIcon from "../assets/img/send-a-parcel/car-icon.png";
import truckIcon from "../assets/img/send-a-parcel/truck-icon.png";
import tabContent from "../components/tabs/tab-content.vue";
import tabContentSecond from "../components/tabs/tab-content-second.vue";

export default {
  name: "w-send-a-parcel",
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
.send-a-parcel {
  border: 2px solid $blue-light-color;
  border-radius: 8px;
  padding: 32px 29px 24px;
  width: 100%;
  height: 500px;
  max-width: 360px;
  box-shadow: 0 8px 16px rgba($blue-color, $alpha: 0.08);
  background-color: $light-color;

  &__top {
    display: flex;
    margin-bottom: 25px;

    @include mobile {
      margin-bottom: 22px;
    }
  }

  &__title {
    margin-right: 17px;
  }

  &__tooltip {
    margin-top: 2px;
  }

  &__tabs-nav {
    margin-bottom: 34px;

    @include mobile {
      margin-bottom: 37px;
    }
  }

  @include mobile {
    padding: 32px 14px 24px;
    width: 100%;
    height: 472px;
    max-width: 100%;
  }
}

.tabs-nav {
  display: flex;
  border: 1px solid $blue-light-color;
  border-radius: 8px;
  width: 100%;
  max-width: 296px;
  height: 84px;
  background-color: #eff4ff;

  &__item {
    width: 100%;

    &:first-child {
      .tabs-nav__btn {
        border-right: 1px solid $blue-light-color;
        border-radius: 8px 0 0 8px;

        &.active {
          border-right: 2px solid $blue-color;
        }
      }

      .tabs-nav__img {
        top: 6px;
      }
    }

    &:last-child {
      .tabs-nav__btn {
        border-left: 1px solid $blue-light-color;
        border-radius: 0 8px 8px 0;

        &.active {
          border-left: 2px solid $blue-color;
        }
      }
    }
  }

  &__btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &:hover {
      opacity: 0.7;

      @include mobile {
        opacity: 1;
      }
    }

    &.active {
      border: 2px solid $blue-color;
      background-color: $light-color;

      span {
        color: $dark-color;
      }
    }
  }

  &__img {
    position: absolute;
    top: -1px;
    pointer-events: none;
  }

  &__name {
    font-family: "IntroBook";
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 8px;

    @include mobile {
      display: none;
    }
  }

  @include mobile {
    height: 56px;
  }
}

.tabs-content {
  position: relative;
}
</style>
