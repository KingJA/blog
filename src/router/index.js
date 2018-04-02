import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import AboutMe from '@/components/AboutMe/AboutMe'
import Article from '@/components/Article/Article'
import Contact from '@/components/Contact/Contact'

Vue.use(Router)

export default new Router({
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
        }
      ]
    }
  ]
})
