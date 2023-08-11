<template>
  <NavBar />
  <div class="p-6 flex flex-column gap-4">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
</style>
