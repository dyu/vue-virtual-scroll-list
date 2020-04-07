import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/fixed-size',
    name: 'fixed-size',
    component: () => import(/* webpackChunkName: "fixed-size" */ '../views/fixed-size/Main.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router