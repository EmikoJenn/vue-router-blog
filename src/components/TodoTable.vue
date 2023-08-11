<template>
  <ul class="table">
    <li
      v-for="(todoObj, i) in Todos"
      :key="todoObj.id"
      class="row"
      :class="[isIndexOddOrPair(i), { done: todoObj.done }]"
    >
      <label>
        {{ todoObj.todo }}
        <input type="checkbox" v-model="todoObj.done" />
        <span />
      </label>
      <button class="p-2" @click.prevent="$emit('deleteTodo', todoObj.id)">
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "v-table",
  props: {
    Todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isIndexOddOrPair(index) {
      if (index % 2 === 0) return "odd";
      else return "pair";
    },
  },
  watch: {
    Todos: {
      handler() {
        console.log(this.Todos);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.table {
  @extend .w-100;
  @extend .flex;
  @extend .flex-column;
  @extend .gap-2;
}

.row {
  @extend .w-100;
  @extend .flex;
  @extend .flex-justify-between;
  @extend .flex-align-center;
  @extend .text-bold;
  border-radius: 0.5rem;
}
.row > div {
  @extend .flex;
  @extend .gap-4;
  @extend .p-2;
}

.odd {
  background-color: rgba($secondary-color, 0.6);
  &.done {
    background-color: $success-color-1;
    color: $success-color-3;
  }
}

.pair {
  background-color: $secondary-color;

  &.done {
    background-color: $success-color-2;
    color: $success-color-3;
  }
}

.done button {
  color: inherit;
}

label {
  @extend .text-bold;
  @extend .text-lg;
  position: relative;
  padding-left: 2.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      background-color: $emphasis-color;
    }

    &:checked ~ span:after {
      display: block;
      left: 0.5rem;
      top: 0.3rem;
      width: 0.5rem;
      height: 1rem;
      border: solid white;
      border-width: 0 0.25rem 0.25rem 0;
      transform: rotate(45deg);
    }
  }

  span {
    height: calc(100% - 0.2rem);
    width: 1.8rem;
    position: absolute;
    top: 0.5rem;
    left: -0.5rem;
    border-radius: 0.5rem;
    background-color: inherit;
    border: 0.2rem solid $emphasis-color;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  &:hover input ~ span {
    background-color: rgba($emphasis-color, 0.6);

    &:after {
      display: block;
    }
  }
}

button {
  @extend .h-100;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background: $primary-color;
    outline: 8px solid rgba($primary-color, 0.4);
    color: white;
  }
}
</style>
