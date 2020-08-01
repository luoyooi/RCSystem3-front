import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main-page'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main }
]

const router = new VueRouter({
  routes
})

export default router
