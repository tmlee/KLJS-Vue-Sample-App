<template>
	<div class='todos_vuex'>
    <todos></todos>
    <todos-summary></todos-summary>
  </div>
</template>

<script>
import Todos from '@/components/todos_vuex/Todos'
import TodosSummary from '@/components/todos_vuex/TodosSummary'

export default {
  name: 'todos_vuex',
  components: {
    TodosSummary, Todos
  }
}
</script>
