import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../src/App'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('../pages/login')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router