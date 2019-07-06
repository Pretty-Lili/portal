import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Page1 from '@/pages/home/components/page1'
import Page2 from '@/pages/home/components/page2'
import Page3 from '@/pages/home/components/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3
        }
      ]
    }
  ]
})
