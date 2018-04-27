import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL
} from '../mutation-types'

import api from '../../../src/api/api'

const state = {
  isLoading: false,
  articles: []
}

const actions = {
  getArticles({commit}) {
    commit(GET_ARTICLES);
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
  },
  [GET_ARTICLES_FAIL](state,error) {
    state.isLoading = false;
    console.log("网络错误:"+error)
  }
}

export default {
  state,
  actions,
  mutations
}
