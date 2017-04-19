import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ComponentDemo from '@/components/component_demo/ComponentDemo'
import Todos from '@/components/todos/TodosNovuex'
import TodosVuex from '@/components/todos_vuex/TodosVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/component_demo/',
      component: ComponentDemo
    },
    {
      path: '/todos/',
      component: Todos
    },
    {
      path: '/todos_vuex/',
      component: TodosVuex
    }
  ]
})
