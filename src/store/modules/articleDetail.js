import {
  GET_ARTICLE_BY_ARTICLEID,
} from '../mutation-types'

import api from '../../../src/api/api'

const state = {
  isLoading: false,
  articleDetail: {}
}

const actions = {
  getArticleDetail({commit}) {
    commit(GET_ARTICLE_BY_ARTICLEID);
    api.getArticles()
      .then(response => {
        if (response.data.resultCode===0) {
          commit(GET_ARTICLES_SUCCESS,response.data.resultData);
        }
      }).catch(error=>{
      commit(GET_ARTICLES_FAIL,error);
    })
  }
}

const mutations = {
  [GET_ARTICLES](state) {
    state.isLoading = true;
  },
  [GET_ARTICLES_SUCCESS](state, articles) {
    state.isLoading = false;
    state.articles = articles;
  }
}

export default {
  state,
  actions,
  mutations
}
