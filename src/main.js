import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Person from './components/Person.vue'
import Activity from './components/Activity.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [{
    component: Person,
    path: '/person',
    props: {
      msg: "Person Generator"
    }
  }, {
    component: Activity,
    path: '/activity',
    props: {
      msg: "Activity Generator"
    }
  }]
})

const store = new Vuex.Store({
  state: {
    userName: null
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
