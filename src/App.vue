<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>
<style lang="scss">
body {
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fafbfd;
  background: black;
  height: 100%;
}

nav {
  padding: 30px;
}
</style>
