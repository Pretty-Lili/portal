import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/Layout'
import Form from '@/pages/views/form'
import Page2 from '@/pages/views/page2'
import Table from '@/pages/views/table'
import Main from '@/pages/views/main'
import RouterPage from '@/pages/routerPage/page1'
import Foo from '@/pages/routerPage/foo'
import Bar from '@/pages/routerPage/bar'
import User from '@/pages/routerPage/user'
import Error from '@/pages/views/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index'),
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Main',
          component: Main
        },
        {
          path: '/form',
          name: 'Form',
          component: Form
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2
        },
        {
          path: '/table',
          name: 'Table',
          component: Table
        }
      ]
    }, {
      path: '/routerPage',
      component: RouterPage,
      children: [
        {
          path: '/foo',
          name: 'foo',
          component: Foo
        }, {
          path: '/bar',
          name: 'bar',
          component: Bar
        }
      ]
    }, {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        {
          path: '/',
          component: Foo
        }, {
          path: 'foo',
          component: Foo
        }, {
          path: 'bar',
          component: Bar
        }
      ]
    }, {
      path: 'user-*'
    }, {
      path: '*',
      component: Error
    }
  ]
})
