import {
  SHOW_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../mutation-types'

import api from '../../../src/api/api'
import router from '../../../src/router/index'

const state = {
  isLoading: false,
  articles: []
}

const actions = {
  login({commit},account) {
    commit(SHOW_LOADING);
    api.login(account)
      .then(response => {
        commit(LOGIN_SUCCESS);
        localStorage.setItem('jwt', response.data.resultData.jwt);
        router.push({name: 'Admin'});
      }).catch(error => {
      commit(LOGIN_FAIL, error);
    })
  }
}

const mutations = {
  [SHOW_LOADING](state) {
    state.isLoading = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isLoading = false;
  },
  [LOGIN_FAIL](state, error) {
    state.isLoading = false;
    console.log("网络错误:" + error.data.resultText)
  }
}

export default {
  state,
  actions,
  mutations
}
