import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_BY_CATALOGID,
  GET_ARTICLES_BY_CATALOGID_SUCCESS,
  GET_ARTICLES_BY_CATALOGID_ERROR,
  GET_CATALOGS,
  GET_CATALOGS_SUCCESS,
  GET_CATALOGS_ERROR,
  SAVE_ARTICLES_BY_CATALOGID,
} from '../mutation-types'

import api from '../../../src/api/api'
import * as types from "../mutation-types";
import Vue from 'vue'

const state = {
  isCatalogLoading: false,
  isArticleLoading: false,
  catalogId_articles: {},
  catalogs: [],
  articles: []
}

const actions = {
  getAdminnArticles({commit}) {
    commit(GET_ARTICLES);
    api.getArticles()
      .then(response => {
        commit(GET_ARTICLES_SUCCESS, response.data.resultData);
      }).catch(error => {
      commit(GET_ARTICLES_FAIL, error);
    })
  },
  getCatalogs({commit}) {
    commit(GET_CATALOGS);
    api.getCatalogs()
      .then(response => {
        commit(GET_CATALOGS_SUCCESS, response.data.resultData);
      }).catch(error => {
      commit(GET_CATALOGS_ERROR, error);
    })
  },
  getArticlesByCatelogId({commit,state}, catalog) {
    commit(GET_ARTICLES_BY_CATALOGID);
   let articles= state.catalogId_articles[catalog.id];
    if(articles) {
      commit(GET_ARTICLES_BY_CATALOGID_SUCCESS, articles);
      return;
    }
    api.getArticlesByCatelogId(catalog.id)
      .then(response => {
        commit(GET_ARTICLES_BY_CATALOGID_SUCCESS, response.data.resultData);
        commit(SAVE_ARTICLES_BY_CATALOGID, {
          catalogid: catalog.id,
          articles: response.data.resultData
        });
      }).catch(error => {
      commit(GET_ARTICLES_BY_CATALOGID_ERROR, error);
    })
  }

}

const mutations = {
  [GET_ARTICLES](state) {
    state.isArticleLoading = true;
  },
  [GET_ARTICLES_SUCCESS](state, articles) {
    state.isArticleLoading = false;
    state.articles = articles;
  },
  [GET_ARTICLES_FAIL](state, error) {
    state.isArticleLoading = false;
    console.log("网络错误:" + error.data.resultText)
  },
  [GET_CATALOGS](state) {
    state.isCatalogLoading = true;
  },
  [GET_CATALOGS_SUCCESS](state, catalogs) {
    state.isCatalogLoading = false;
    state.catalogs = catalogs;
  },
  [GET_CATALOGS_ERROR](state, error) {
    state.isCatalogLoading = false;
    console.log("网络错误:" + error.data.resultText)
  },
  [GET_ARTICLES_BY_CATALOGID](state) {
    state.isArticleLoading = true;
  },
  [GET_ARTICLES_BY_CATALOGID_SUCCESS](state, articles) {
    state.isArticleLoading = false;
    state.articles = articles;
  },
  [GET_ARTICLES_BY_CATALOGID_ERROR](state, error) {
    state.isArticleLoading = false;
    console.log("网络错误:" + error.data.resultText)
  },
  [types.SAVE_ARTICLES_BY_CATALOGID](state, map) {
    let id= map.catalogid;
    let articles=map['articles'];
    Vue.set(state.catalogId_articles, id, articles);
  }
}

export default {
  state,
  actions,
  mutations
}
