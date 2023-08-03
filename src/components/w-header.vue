<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <div class="header__logo logo">
          <img class="img" src="../assets/img/logo.svg" alt="whoosh" width="192" height="64">
          <div class="header__select select">NY, Manhattan</div>
        </div>
      </div>
      <div class="header__search">

      </div>
      <div class="header__right">
        <ul class="list-reset header__menu header-menu">
          <li class="header-menu__item">
            <router-link to="/" class="header__link">Send a Parcel</router-link>
          </li>
          <li class="header-menu__item">
            <router-link to="/" class="header__link">Become a Courier</router-link>
          </li>
          <li class="header-menu__item">
            <router-link to="/" class="header__link header__link--icon">
              <img class="img" src="../assets/img/icon-lock.svg" alt="login">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "w-header",
};
</script>

<style lang="scss" scoped></style>
