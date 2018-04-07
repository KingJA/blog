// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import './common/stylus/index.styl';
import Axios from 'axios'
import store from './store'//相当于'./store/index'
import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
// import 'minireset.css/minireset.css'
import qs from 'qs'
/*语法高亮*/
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
});
Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.baseURL = 'http://192.168.1.102'
Vue.prototype.$qs = qs;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
