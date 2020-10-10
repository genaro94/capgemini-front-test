import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App.vue'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] =
 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL0dpdEh1YlwvY2FwZ2VtaW5pLWFwaVwvcHVibGljXC9hcGlcL2FjY291bnRcL2xvZ2luIiwiaWF0IjoxNjAyMzQ5NTE3LCJleHAiOjE2MDIzNTMxMTcsIm5iZiI6MTYwMjM0OTUxNywianRpIjoiUWtYd2NXU2JhNUtxa2h3OCIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._R7zgqIvFlZU2znR_ovfx-feP5yUpQxv5yAlMyTaza4'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
