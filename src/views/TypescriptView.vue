<template>
  <LangLayout :lang="lang" :src="src">
    TypeScript is a free and open-source high-level programming language
    developed by Microsoft that adds static typing with optional type
    annotations to JavaScript. It is designed for the development of large
    applications and transpiles to JavaScript. Because TypeScript is a superset
    of JavaScript, all JavaScript programs are syntactically valid TypeScript,
    but they can fail to type-check for safety reasons. TypeScript may be used
    to develop JavaScript applications for both client-side and server-side
    execution (as with Node.js or Deno). Multiple options are available for
    transpilation. The default TypeScript Compiler can be used, or the Babel
    compiler can be invoked to convert TypeScript to JavaScript.
  </LangLayout>
</template>

<script>
import LangLayout from "@/components/LangLayout.vue";

export default {
  name: "TypescriptView",
  components: {
    LangLayout,
  },
  data() {
    return {
      lang: "Typescript",
      src: require("@/assets/img/typescript.png"),
    };
  },
};
</script>

<style></style>
