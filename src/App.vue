<template>
  <div id="app">
    <div class="site-container">
      <w-header />
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import wHeader from "./components/w-header.vue";

export default {
  name: "App",
  components: {
    wHeader,
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  font-family: $font-family, sans-serif;
  -webkit-text-size-adjust: 100%;
  color: $text-color;
}
</style>
