<template>
  <div class="flex flex-justify-between">
    <h1 class="m-auto mt-8">{{ lang }}</h1>
    <img :src="src" :alt="lang" class="w-50 p-4" />
  </div>
  <p><slot /></p>
</template>

<script>
export default {
  name: "LangLayout",
  props: {
    lang: {
      type: String,
      required: true,
    },
    src: {
      required: true,
    },
  },
};
</script>

<style></style>
