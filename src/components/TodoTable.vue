<template>
  <div class="flex-grow-1">
    <h2 v-if="title">{{ title }}</h2>
    <ul class="table">
      <li
        v-for="(todoObj, i) in todosShown"
        :key="todoObj.id"
        class="row"
        :class="[isIndexOddOrPair(i), { done: todoObj.done }]"
      >
        <v-checkbox
          v-if="editable"
          :title="todoObj.todo"
          v-model:checked="todoObj.done"
        />
        <template v-else>
          <span>{{ todoObj.todo }}</span>
        </template>
        <div v-if="editable">
          <button class="p-2" @click.prevent="$emit('deleteTodo', todoObj.id)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import VCheckbox from "@/components/form-components/CheckboxComponent.vue";

export default {
  name: "v-table",
  components: {
    VCheckbox,
  },
  props: {
    title: String,
    todos: {
      type: Array,
      required: true,
    },
    show: {
      type: String,
      default: "all",
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    todosShown() {
      if (this.show === "new") return this.todos.filter((todo) => !todo.done);
      if (this.show === "done") return this.todos.filter((todo) => todo.done);
      return this.todos;
    },
  },
  methods: {
    isIndexOddOrPair(index) {
      if (index % 2 === 0) return "odd";
      else return "pair";
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
  @extend .pl-4;
  @extend .flex;
  @extend .flex-justify-between;
  @extend .flex-align-center;
  @extend .text-bold;
  border-radius: 0.5rem;
  min-height: 3rem;
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
