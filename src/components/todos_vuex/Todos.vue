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
        <todo v-for="todo in todos" 
              v-bind:todo='todo' 
              v-bind:key='todo'>
        </todo>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Todo from '@/components/todos_vuex/Todo'

export default {
  name: 'todos',
  components: {Todo},
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
    }
  }
}
</script>

<style scoped>
  #todos{
    padding: 20px;
  }
</style>
