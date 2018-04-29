import {
  SHOW_LOADING,
  GET_ARTICLE_BY_ARTICLEID_SUCCESS,
  GET_ARTICLE_BY_ARTICLEID_FAIL,
} from '../mutation-types'

import api from '../../../src/api/api'
import marked from 'marked'

const state = {
  isLoading: false,
  article: {}
}

const actions = {
  getArticleDetail({commit}, articleId) {
    commit(SHOW_LOADING);
    api.getArticleDetail(articleId)
      .then(response => {
      let article=  response.data.resultData;
        article.content=marked(article.content, { sanitize: true });
        commit(GET_ARTICLE_BY_ARTICLEID_SUCCESS, article);
      }).catch(error => {
      commit(GET_ARTICLE_BY_ARTICLEID_FAIL, error);
    })
  }
}

const mutations = {
  [SHOW_LOADING](state) {
    state.isLoading = true;
  },
  [GET_ARTICLE_BY_ARTICLEID_SUCCESS](state, article) {
    state.isLoading = false;
    state.article = article;
  },
  [GET_ARTICLE_BY_ARTICLEID_FAIL](state) {
    state.isLoading = false;
  }
}

export default {
  state,
  actions,
  mutations
}
