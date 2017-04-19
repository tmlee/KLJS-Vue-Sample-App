<template>
  <div class='component_demo'>
    <h1>Component Demo</h1>
    <div>Parent Counter: {{counter}}</div>
    <incrementor v-on:increment="incrementCounter" v-bind:counter="counter"></incrementor>
  </div>
</template>

<script>
  import Incrementor from '@/components/component_demo/Incrementor'
  export default {
    name: 'component_demo',
    data () {
      return {
        counter: 99
      }
    },
    components: {
      Incrementor
    },
    methods: {
      incrementCounter () {
        this.counter += 1
      }
    }
  }
</script>

