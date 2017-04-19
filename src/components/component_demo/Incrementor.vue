<template>
  <div class='incrementor'>
    <p>{{counter}}</p>
    <button v-on:click='incrementLocal'>1 Up Locally!</button>
    <button v-on:click='incrementEmit'>1 Up with Emit!</button>
  </div>	
</template>

<script>
export default {
  name: 'incrementor',
  props: ['counter'],
  methods: {
    incrementLocal () {
      this.counter += 1
    },
    incrementEmit () {
      this.$emit('increment')
    }
  }
}
</script>

<style scoped>
  .incrementor {
    background: #f1f1f1;
  }  
</style>

