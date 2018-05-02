import {
  SET_CURRENT_CATALOGID,
  PUBLISH,
  PUBLISH_SUCCESS,
  PUBLISH_FAIL
} from '../mutation-types'

import api from '../../../src/api/api'
import router from '../../../src/router/index'
import elementUI from '@/common/js/elementUtils.js'

const state = {
  isLoading: false,
  selectedCatalogId: -1
}

const actions = {
  publish({commit}, article) {
    commit(PUBLISH);
    api.publish(article)
      .then(() => {
        commit(PUBLISH_SUCCESS);
        elementUI.alert('提示','文章发布成功',function () {
          router.go(-1);
        })

      }).catch(error => {
      commit(PUBLISH_FAIL, error);
    })
  }
}

const mutations = {
  [SET_CURRENT_CATALOGID](state,catalogId) {
    state.selectedCatalogId = catalogId;
  },
  [PUBLISH](state) {
    state.isLoading = true;
  },
  [PUBLISH_SUCCESS](state) {
    state.isLoading = false;
  },
  [PUBLISH_FAIL](state, error) {
    state.isLoading = false;
    console.log("网络错误:" + error.data.resultText)
  }
}

export default {
  state,
  actions,
  mutations
}
