<template>
  <div>
    <h1>Todos</h1>
  </div>
  <form>
    <v-input @getTodo="saveTodo" />
    <v-table :todos="todos" :editable="true" @deleteTodo="removeTodo" />

    <div class="flex gap-4">
      <v-table title="New" :todos="todos" show="new" />
      <v-table title="Done" :todos="todos" show="done" />
    </div>
  </form>
</template>

<script>
import { v4 } from "uuid";
import VInput from "../components/form-components/InputComponent.vue";
import VTable from "../components/TodoTable.vue";

export default {
  name: "TodosView",
  components: {
    VInput,
    VTable,
  },
  data() {
    return {
      todos: [
        {
          id: v4(),
          todo: "Learn Vue",
          done: true,
        },
        {
          id: v4(),
          todo: "Learn Python",
          done: false,
        },
        {
          id: v4(),
          todo: "Learn MySQL",
          done: false,
        },
      ],
    };
  },
  methods: {
    saveTodo(todo) {
      this.todos.unshift({
        id: v4(),
        todo,
        done: false,
      });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style></style>
