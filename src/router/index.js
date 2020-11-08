import Vue from 'vue'
import VueRouter from 'vue-router'
import Team from '@/views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
