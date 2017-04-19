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
export default {
  name: 'todos-summary',
  props: ['completedTodos', 'todos'],
  methods: {
    markAllAsDone () {
      for (let todo of this.todos) {
        this.$emit('markDone', todo)
      }
    }
  }
}
</script>
