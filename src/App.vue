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
.vh-100 {
  height: 100vh;
}
.vw-100 {
  width: 100vw;
}
.h-100 {
  height: 100%;
}
.h-25 {
  height: 25%;
}
.w-100 {
  width: 100%;
}
.w-50 {
  width: 50%;
}
.w-25 {
  width: 25%;
}
.m-auto {
  margin-left: auto;
  margin-right: auto;
}
.mt-8 {
  margin-top: 4rem;
}
.text-primary {
  color: #4ab3f8;
}
.text-emphasis {
  color: #fc4cbc;
}
.text-white {
  color: #fff;
}
.bg-primary {
  background-color: #4ab3f8;
}
.bg-secondary {
  background-color: #962dcf;
}
.bg-tertiary {
  background-color: #53235e;
}

#app {
  margin: 0;
  padding: 0;
  display: block;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
  font: sans-serif;
  @extend .bg-tertiary;
  @extend .text-primary;
  @extend .vh-100;
  @extend .vw-100;
}
nav {
  font-size: 1.5rem;
  font-weight: bold;
}
h1 {
  font-size: 3rem;
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
  display: inline-block;
}
li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
a:hover {
  @extend .text-emphasis;
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-align-center {
  align-items: center;
}
.flex-justify-between {
  justify-content: space-between;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
</style>
