<template>
	<div class='todos_novuex'>
    <todos  v-bind:todos='todos' 
            v-bind:newTodo='newTodo' 
            v-on:createTodo='createTodo' 
            v-on:deleteTodo='deleteTodo' 
            v-on:toggleDone='toggleDone'>
    </todos>
    <todos-summary  v-bind:todos='todos' 
                    v-bind:completedTodos='completedTodos' 
                    v-on:markDone='markDone'>
    </todos-summary>
  </div>
</template>

<script>
import Todos from '@/components/todos/Todos'
import TodosSummary from '@/components/todos/TodosSummary'

export default {
  name: 'todos_novuex',
  components: {
    TodosSummary, Todos
  },
  data () {
    return {
      todos: [
        { name: 'Remember the milk', isDone: true },
        { name: 'Pay the landlord', isDone: false },
        { name: 'Take out the trash', isDone: false }
      ],
      newTodo: {}
    }
  },
  computed: {
    // ... is the Object spread operator (That takes varying arguments via array or hash)
    completedTodos: function () {
      return this.todos.filter(o => { return o.isDone }).length
    }
  },
  methods: {
    createTodo: function (todo) {
      this.todos.push({ name: todo.name, isDone: false })
    },
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    markDone: function (todo) {
      todo.isDone = true
    },
    toggleDone: function (todo) {
      todo.isDone = !todo.isDone
    }
  }
}
</script>

