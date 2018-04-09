import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import AboutMe from '@/components/AboutMe/AboutMe'
import Article from '@/components/Article/Article'
import Contact from '@/components/Contact/Contact'
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail'
import Edit from '@/components/Edit/Edit'
import Login from '@/components/Login/Login'
import Admin from '@/components/Admin/Admin'
import UserCenter from '@/components/UserCenter/UserCenter'
import ArticleCenter from '@/components/ArticleCenter/ArticleCenter'
import Modify from '@/components/Modify/Modify'


Vue.use(Router)

export default new Router({
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
          component: AboutMe
        },
        {
          path: '/article',
          name: 'Article',
          component: Article
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/edit',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/detail',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/modify',
      name: 'Modify',
      component: Modify
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: '/user_center',
      children: [
        {
          path: '/user_center',
          name: 'UserCenter',
          component: UserCenter
        },
        {
          path: '/article_center',
          name: 'ArticleCenter',
          component: ArticleCenter
        }
      ]
    }
  ]
})
