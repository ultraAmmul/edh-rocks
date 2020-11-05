import Vue from 'vue'
import VueRouter from 'vue-router'
import Banlist from "@/views/Banlist";
import ImprintPrivacy from "@/views/ImprintPrivacy";
import About from "@/views/About";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Banlist',
    component: Banlist
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/imprint_privacy',
    name: 'Imprint & Privacy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ImprintPrivacy
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
