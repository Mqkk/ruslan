<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top">
        <div class="footer__about footer-about">
          <h4 class="footer-about__title footer__title title title--h4">
            About Whoosh
          </h4>
          <div class="footer-about__content">
            <p>
              Express delivery of documents and parcels for organizations,
              express delivery of correspondence, purchases and other goods
            </p>
          </div>
        </div>
        <div class="footer__menu footer-menu">
          <h4 class="footer__title footer-menu__title title title--h4">Menu</h4>
          <ul class="list-reset footer-menu__list">
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                About company
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Contact
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Rules
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link"> FAQ </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Reviews
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Cargo transportation
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Tariffs
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__menu footer-menu">
          <h4 class="footer__title footer-menu__title title title--h4">
            Services
          </h4>
          <ul class="list-reset footer-menu__list">
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Online stores
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Legal entity
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                API Integration
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Contract
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link"> Jobs </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                Courier job
              </router-link>
            </li>
            <li class="footer-menu__item">
              <router-link to="/" class="footer-menu__link">
                The blog
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__contact-us footer-contact-us">
          <h4 class="footer__title footer-contact-us__title title title--h4">
            Contact us
          </h4>
          <a href="tel:88009345959" class="footer-contact-us__number">
            8 800 934 5959
          </a>
          <div class="footer-contact-us__descr">
            2545 W. Diversey Ave. <br />
            3rd Floor Chicago, IL 60647
          </div>
          <ul class="list-reset footer__social-list social-list">
            <li class="social-list__item">
              <router-link to="/" class="social-list__link">
                <img
                  class="img"
                  src="../assets/img/footer/social/facebook.svg"
                  alt="facebook"
                />
              </router-link>
            </li>
            <li class="social-list__item">
              <router-link to="/" class="social-list__link">
                <img
                  class="img"
                  src="../assets/img/footer/social/vk.svg"
                  alt="vk"
                />
              </router-link>
            </li>
            <li class="social-list__item">
              <router-link to="/" class="social-list__link">
                <img
                  class="img"
                  src="../assets/img/footer/social/youtube.svg"
                  alt="youtube"
                />
              </router-link>
            </li>
            <li class="social-list__item">
              <router-link to="/" class="social-list__link">
                <img
                  class="img"
                  src="../assets/img/footer/social/instagram.svg"
                  alt="instagram"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="footer__copy"> © 2022. All rights reserved. </span>
        <div class="footer__center">
          <a
            href="https://pyrobyte.ru/"
            target="_blank"
            class="footer__logo"
          ></a>
        </div>
        <router-link to="/" class="footer__link">Privacy policy</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "w-footer",
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid $blue-light-color;
  background-color: $bg-color;

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 56px;
    max-width: 1190px;

    @include mobile {
      padding-top: 40px;
      padding-bottom: 24px;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;
    width: 100%;

    @include mobile {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 16px;
    }
  }

  &__title {
    display: inline-block;
    margin-bottom: 17px;
    width: 100%;
    height: 28px;
    max-width: 200px;
    border-bottom: 2px solid $blue-light-color;

    @include mobile {
      max-width: 100%;
    }
  }

  &__bottom {
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid rgba($blue-light-color, $alpha: 0.7);
    padding: 24px 84px 0px 65px;
    width: 100%;

    &::before {
      content: "Made by";
      position: absolute;
      margin: 0 auto;
      left: 1px;
      right: 0;
      top: -13px;
      width: 73px;
      height: 24px;
      font-family: "Intro";
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: $blue-light-color;
      background-color: $bg-color;

      @include mobile {
        display: none;
      }
    }

    @include mobile {
      display: grid;
      justify-items: center;
      justify-content: center;
      grid-template-columns: 1fr;
      border-top: none;
      padding: 0;
    }
  }

  &__center {
    position: relative;

    @include mobile {
      display: flex;
      justify-content: center;
      border-top: 2px solid rgba($blue-light-color, $alpha: 0.7);
      padding-top: 24px;
      width: 100%;

      &::before {
        content: "Made by";
        position: absolute;
        margin: 0 auto;
        left: 1px;
        right: 0;
        top: -13px;
        width: 73px;
        height: 24px;
        font-family: "Intro";
        text-align: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: $blue-light-color;
        background-color: $bg-color;
      }
    }
  }

  &__copy {
    margin-top: 6px;
    font-size: 14px;
    line-height: 171%;
    color: rgba($dark-color, $alpha: 0.64);

    @include mobile {
      margin-top: 24px;
      margin-bottom: 38px;
    }
  }

  &__logo {
    display: block;
    margin-left: -43px;
    width: 85px;
    height: 64px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../assets/img/footer/pyrobyte.svg");

    @include mobile {
      margin-left: 0;
      background-image: url("../assets/img/footer/pyrobyte-mobile.svg");
    }
  }

  &__link {
    margin-top: 6px;
    padding-left: 22px;
    font-size: 14px;
    line-height: 171%;
    color: rgba($dark-color, $alpha: 0.64);
    background-position: left;
    background-size: 10px 13px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/footer/shield-icon.svg");

    &:hover {
      opacity: 0.7;
    }

    @include mobile {
      grid-row-start: 1;
    }
  }
}

.footer-about {
  padding-left: 61px;
  max-width: 300px;
  background-position: left 47px;
  background-size: 44px;
  background-repeat: no-repeat;
  background-image: url("../assets/img/footer/footer-decor.svg");

  &__title {
    border-bottom: none;
    margin-left: -61px;
  }

  &__content {
    p {
      margin: 0;
      font-size: 14px;
      line-height: 171%;
    }
  }

  @include mobile {
    grid-column: 2 span;
    margin-bottom: 32px;
  }
}

.footer-menu {
  width: 100%;
  max-width: 210px;

  &__list {
    display: grid;
    row-gap: 12px;
  }

  &__link {
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    color: rgba($dark-color, $alpha: 0.64);

    &:hover {
      opacity: 0.7;
    }
  }

  @include mobile {
    grid-column: 1 span;
  }
}

.footer-contact-us {
  display: flex;
  flex-direction: column;
  max-width: 259px;
  width: 100%;

  &__title {
    margin-top: 3px;
  }

  &__number {
    margin-bottom: 23px;
    font-family: "Intro";
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    color: $dark-color;

    &:hover {
      opacity: 0.9;
    }
  }

  &__descr {
    margin-bottom: 64px;
    padding-left: 24px;
    font-size: 14px;
    line-height: 171%;
    background-position: 1px 3px;
    background-size: 12px 16px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/footer/dot-icon.svg");

    @include mobile {
      margin-bottom: 32px;
      max-width: 300px;

      br {
        display: none;
      }
    }
  }

  @include mobile {
    grid-column: 2 span;
    margin-top: 38px;
    max-width: 100%;
  }
}

.social-list {
  display: flex;

  &__item {
    &:not(:last-child) {
      margin-right: 24px;

      @include mobile {
        margin-right: 38px;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: $blue-color;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: rgba($blue-color, $alpha: 0.7);
    }
  }

  @include mobile {
    justify-content: center;
  }
}
</style>
