import Vue from 'vue'
import VueRouter from 'vue-router'

const clientForm = () => import("../views/clientLogin.vue")

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/clientform' },
  { path: '/clientform', component: clientForm, meta: { title: "顾客等级表" } }
]

const router = new VueRouter({
  routes
})

export default router
