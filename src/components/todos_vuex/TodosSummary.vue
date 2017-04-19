<template>
	<div class='row'>
    <div class='col-xs-12'>
		  <button v-on:click="markAllAsDone">Mark All As Done</button>  
    </div>
    <div class='col-xs-12'>
      <span>{{completedTodos}} Done</span>
    </div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'todos-summary',
  computed: {
    ...mapState([
      'todos'
    ]),
    ...mapGetters(['completedTodos'])
  },
  methods: {
    markAllAsDone () {
      for (let todo of this.todos) {
        this.$store.dispatch('MARK_TODO_AS_DONE', { t: todo })
      }
    }
  }
}
</script>
