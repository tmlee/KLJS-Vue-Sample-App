<template>
  <div class='todos row'>
    <div class='col-xs-12'>
      <div class='form-inline'>
        <input type="text" v-model="newTodo.name">
        <button v-on:click="createTodo">Add</button>
      </div>
    </div>

    <div class='col-xs-12'>
      <ul id='todos'>
        <li v-for="todo in todos" 
            v-bind:class="{ done: todo.isDone }"
        >
          {{ todo.name }}
          <button v-on:click="deleteTodo(todo)">Delete</button>
          <button v-on:click="toggleDone(todo)">
            <span v-if="todo.isDone">Undo</span>
            <span v-else>Done</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todos',
  props: ['todos', 'newTodo'],
  methods: {
    createTodo () {
      this.$emit('createTodo', this.newTodo)
    },
    deleteTodo (todo) {
      this.$emit('deleteTodo', todo)
    },
    toggleDone (todo) {
      this.$emit('toggleDone', todo)

      // Do not do the following...
      // todo.isDone = !todo.isDone // Easily make changes here, because todo is not a prop
      // this.todos = [] // Manipulating props directly from child is not allowed
    }
  }
}
</script>

<style scoped>
  .done{
    text-decoration: line-through;
  }

  #todos{
    padding: 20px;
  }

  #todos li {
    margin: 10px;
  }
</style>
