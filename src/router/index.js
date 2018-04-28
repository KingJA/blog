import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import AboutMe from '@/components/AboutMe/AboutMe'
import Contact from '@/components/Contact/Contact'
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail'
import Publish from '@/components/Publish/Publish'
import Login from '@/components/Login/Login'
import Admin from '@/components/Admin/Admin'
import UserCenter from '@/components/UserCenter/UserCenter'
import ArticleCenter from '@/components/ArticleCenter/ArticleCenter'
import Modify from '@/components/Modify/Modify'
import {checkLogined} from '@/common/js/userUtils'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/article',
      children: [
        {
          path: '/aboutme',
          name: 'AboutMe',
          component: resolve => System.import('@/components/AboutMe/AboutMe')
        },
        {
          path: '/article',
          component: r => require.ensure([], () => r(require('@/components/Article/Article')), 'Article')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: resolve => require(['@/components/Contact/Contact'], resolve)
        },
        {
          path: '/publish',
          name: 'Publish',
          component: Publish
        }
      ]
    },
    {
      path: '/detail',
      name: 'ArticleDetail',
      component: ArticleDetail,
      meta: {checkLogin: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/modify',
      name: 'Modify',
      component: Modify,
      meta: {checkLogin: true}
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {checkLogin: true},
      redirect: '/article_center',
      children: [
        {
          path: '/user_center',
          name: 'UserCenter',
          meta: {checkLogin: true},
          component: UserCenter
        },
        {
          path: '/article_center',
          name: 'ArticleCenter',
          meta: {checkLogin: true},
          component: ArticleCenter
        }
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.checkLogin) {
    if (checkLogined()) {
      next();
    } else {
      alert('用户未登录');
      next({path: '/login'});
    }
  } else {
    next();
  }
})
export default router
