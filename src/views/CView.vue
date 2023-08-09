<template>
  <LangView :lang="lang" :src="src">
    C (pronounced /ˈsiː/ – like the letter c) is a general-purpose computer
    programming language. It was created in the 1970s by Dennis Ritchie, and
    remains very widely used and influential. By design, C's features cleanly
    reflect the capabilities of the targeted CPUs. It has found lasting use in
    operating systems, device drivers, protocol stacks, though decreasingly for
    application software. C is commonly used on computer architectures that
    range from the largest supercomputers to the smallest microcontrollers and
    embedded systems. A successor to the programming language B, C was
    originally developed at Bell Labs by Ritchie between 1972 and 1973 to
    construct utilities running on Unix. It was applied to re-implementing the
    kernel of the Unix operating system. During the 1980s, C gradually gained
    popularity. It has become one of the most widely used programming languages,
    with C compilers available for practically all modern computer architectures
    and operating systems. The book The C Programming Language, co-authored by
    the original language designer, served for many years as the de facto
    standard for the language. C has been standardized by ANSI since 1989 (ANSI
    C) and by the International Organization for Standardization (ISO).
  </LangView>
</template>

<script>
import LangView from "@/components/LangView.vue";

export default {
  name: "CView",
  components: {
    LangView,
  },
  data() {
    return {
      lang: "C language",
      src: require("@/assets/img/c.png"),
    };
  },
};
</script>

<style></style>
