// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResourse from 'vue-resource'
import axios from "axios";
//
// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

//
// Sync router with store
import { sync } from 'vuex-router-sync'
//
// Components
import './components'
//
// Plugins
import './plugins'
//
// Sync store with routers
sync(store, router)
//
Vue.config.productionTip = false
//
/* eslint-disable no-new */
Vue.use(VueResourse);
axios.defaults.baseURL = "https://myfirstproject-93489.firebaseio.com";
// Vue.use(axios);
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
