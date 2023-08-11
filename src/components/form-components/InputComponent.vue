<template>
  <div class="flex gap-4">
    <input type="text" v-model="value" @keypress.prevent.enter="handleTodo" />
    <button @click.prevent="handleTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: "v-input",
  data() {
    return {
      value: null,
    };
  },
  methods: {
    handleTodo() {
      if (!this.value) return;
      this.$emit("getTodo", this.value);
      this.value = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgba($primary-color, 0.8);
  color: white;
  border: none;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba($primary-color, 0.4);
    outline: 4px solid $primary-color;
  }
}
button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: $primary-color;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: $emphasis-color;
    outline: 4px solid rgba($emphasis-color, 0.4);
  }
}
</style>
