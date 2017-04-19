import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Data storage, default/initial state here
  strict: true,
  state: {
    todos: [
      { name: 'Remember the milk', isDone: true },
      { name: 'Pay the landlord', isDone: false },
      { name: 'Take out the trash', isDone: false }
    ]
  },
  // Public accessible actions, that commits changes
  actions: {
    LOAD_TODOS_LIST: function () {
      this.state.todos
    },
    // {t} means grabbing t from {item: {t : 'hello'}}
    MARK_TODO_AS_DONE: function ({commit, state}, {t}) {
      commit('DONE_TODO', {t})
    },
    TOGGLE_TODO_DONE: function ({commit, state}, {t}) {
      commit('TOGGLE_TODO', {t})
    },
    DELETE_TODO: function ({commit, state}, {t}) {
      console.log(commit, state, t)
      commit('DELETE_TODO', {t})
    },
    CREATE_TODO: function ({commit, state}, {t}) {
      commit('CREATE_TODO', {t})
    }
  },
  // Actions must call mutations to mutate data. Only place can update data
  mutations: {
    CREATE_TODO: function (state, {t}) {
      state.todos.push(t)
    },
    DONE_TODO: function (state, {t}) {
      t.isDone = true
    },
    TOGGLE_TODO: function (state, {t}) {
      t.isDone = !t.isDone
    },
    DELETE_TODO: function (state, {t}) {
      state.todos.splice(state.todos.indexOf(t), 1)
    }
  },
  // Public accessible data
  getters: {
    completedTodos: function (state) {
      // return state.todos.filter(function(o){ return o.isDone}).length
      return state.todos.filter(o => { return o.isDone }).length
    }

  },

  modules: {}
})

export default store
