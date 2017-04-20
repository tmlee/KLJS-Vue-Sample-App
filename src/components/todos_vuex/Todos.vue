<template>
  <div class='todos row'>
    <div class='col-xs-12'>
      <div class='form-inline'>
        <input type="text" 
               v-model="newTodo.name">
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
          <button v-on:click="markDone(todo)">
            <span v-if="todo.isDone">Undo</span>
            <span v-else>Done</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'todos',
  data () {
    return {
      newTodo: {}
    }
  },
  computed: {
    // ... is the Object spread operator (That takes varying arguments via array or hash)
    ...mapState(['todos']),
    ...mapGetters(['completedTodos'])
  },
  methods: {
    createTodo: function (e) {
      e.preventDefault()
      this.$store.dispatch('CREATE_TODO', { t: { name: this.newTodo.name, isDone: false } })
    },
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

  #todos{
    padding: 20px;
  }

  #todos li {
    margin: 10px;
  }
</style>
