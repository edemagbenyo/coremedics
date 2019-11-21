import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Services from '@/pages/Services'
import Booking from '@/pages/Booking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },

  ]
})
