<template>
  <div id="app">
    <div class="navigation">
      <router-link to='/'>Hello</router-link>
      <router-link to='/component_demo'>ComponentDemo</router-link>
      <router-link to='/todos'>Todos</router-link>
      <router-link to='/todos_vuex'>Todos with Vuex</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navigation{
  position: absolute;
  top: 0;
}
</style>
