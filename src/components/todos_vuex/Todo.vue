<template>
  <li v-bind:class="{ done: todo.isDone }">
    {{ todo.name }}
    <button v-on:click="deleteTodo(todo)">Delete</button>
    <button v-on:click="markDone(todo)">
      <span v-if="todo.isDone">Undo</span>
      <span v-else>Done</span>
    </button>
  </li>
</template>

<script>
export default {
  name: 'todo',
  props: ['todo'],
  methods: {
    deleteTodo: function (todo) {
      this.$store.dispatch('DELETE_TODO', { t: todo })
    },
    markDone: function (todo) {
      this.$store.dispatch('TOGGLE_TODO_DONE', { t: todo })
    }
  }
}
</script>

<style scoped>
  .done{
    text-decoration: line-through;
  }

  li {
    margin: 10px;
  }
</style>
