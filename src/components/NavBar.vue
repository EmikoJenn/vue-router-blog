<template>
  <nav
    class="p-4 flex flex-align-center flex-justify-between text-white bg-secondary"
  >
    <div>
      <router-link :to="mainRoute.path">~ /> {{ mainRoute.name }}</router-link>
    </div>
    <ul class="flex gap-2">
      <li v-for="({ path, name }, i) in subRoutes" :key="i" class="flex">
        <router-link :to="path">[ {{ name }} ]</router-link>
        <div v-if="i < subRoutes.length - 1" class="px-2">-</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      routes: [
        { path: "/", name: "Home" },
        { path: "/c", name: "C lang" },
        { path: "/ts", name: "Typescript" },
        { path: "/py", name: "Python" },
        { path: "/rs", name: "Rust" },
      ],
    };
  },
  computed: {
    mainRoute() {
      return this.routes[0];
    },
    subRoutes() {
      return this.routes.slice(1);
    },
  },
};
</script>

<style scoped></style>
