import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Debit from '@/components/admin/Debit'
import Withdraw from '@/components/admin/Withdraw'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home
  },

  {
    name: 'deposit',
    path: '/admin/deposits',
    component: Debit
  },

  {
    name: 'withdraw',
    path: '/admin/withdraws',
    component: Withdraw
  }, 
]

export default new VueRouter({
  mode: 'history',
  routes
})
