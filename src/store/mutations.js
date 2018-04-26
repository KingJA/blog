import * as types from './mutation-types'
import Vue from 'vue'

// 在ES6中，把属性名用[ ]括起来，则括号中就可以引用提前定义的变量
// Mutation 必须是同步函数
const matuations = {
  [types.ADD]: state => state.count += 1,
  [types.SAVE_ARTICLE](state, article) {
    state.article = article;
  },
  [types.REDUCE](state) {
    state.count -= 1;
  },
  [types.SET_MSG](state, msg) {
    state.msg = msg;
  },
  [types.SAVE_ARTICLES_BY_CATALOGID](state, map) {
   let id= map.catalogid;
   let articles=map['articles'];
    Vue.set(state.catalog_articles, id, articles);
  }
}

export default matuations
