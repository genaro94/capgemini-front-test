import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import Toasted from 'vue-toasted'
import VueTheMask from 'vue-the-mask'
import money from 'v-money'

import App from './App.vue'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false
Vue.use(Toasted)
Vue.use(VueTheMask)
Vue.use(money, {precision: 2})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
