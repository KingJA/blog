import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,

  GET_ARTICLES_BY_CATALOGID,
  GET_ARTICLES_BY_CATALOGID_SUCCESS,
  GET_ARTICLES_BY_CATALOGID_FAIL,

  GET_CATALOGS,
  GET_CATALOGS_SUCCESS,
  GET_CATALOGS_FAIL,

  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,

  SET_PUBLISH_STATUS,
  SET_PUBLISH_STATUS_SUCCESS,
  SET_PUBLISH_STATUS_FAIL,

  SET_CURRENT_CATALOGID,
  SAVE_ARTICLES_BY_CATALOGID
} from '../mutation-types'

import api from '../../../src/api/api'
import Vue from 'vue'

const state = {
  isCatalogLoading: false,
  isArticleLoading: false,
  catalogId_articles: {},
  currentCatalogId: -1,
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
      commit(GET_CATALOGS_FAIL, error);
    })
  },
  getArticlesByCatelogId({commit, state}, catalog) {
    commit(GET_ARTICLES_BY_CATALOGID);
    let articles = state.catalogId_articles[catalog.id];
    if (articles) {
      state.currentCatalogId=catalog.id;
      commit(SET_CURRENT_CATALOGID, catalog.id);
      commit(GET_ARTICLES_BY_CATALOGID_SUCCESS, articles);
      return;
    }
    api.getArticlesByCatelogId(catalog.id)
      .then(response => {
        commit(SET_CURRENT_CATALOGID, catalog.id);
        commit(GET_ARTICLES_BY_CATALOGID_SUCCESS, response.data.resultData);
        commit(SAVE_ARTICLES_BY_CATALOGID, {
          catalogid: catalog.id,
          articles: response.data.resultData
        });
      }).catch(error => {
      commit(GET_ARTICLES_BY_CATALOGID_FAIL, error);
    })
  },
  deleteArticle({commit, state}, article) {
    console.log('deleteArticle');
    commit(DELETE_ARTICLE);
    api.deleteArticle(article.id)
      .then(response => {
        commit(DELETE_ARTICLE_SUCCESS, article);
      }).catch(error => {
      commit(DELETE_ARTICLE_FAIL, error);
    })
  },
  setPublishStatus({commit, state}, article) {
    commit(SET_PUBLISH_STATUS);
    api.setPublishStatus(article.id)
      .then(() => {
        commit(SET_PUBLISH_STATUS_SUCCESS, article);
      }).catch(error => {
      commit(SET_PUBLISH_STATUS_FAIL, error);
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
  },
  [GET_CATALOGS](state) {
    state.isCatalogLoading = true;
  },
  [GET_CATALOGS_SUCCESS](state, catalogs) {
    state.isCatalogLoading = false;
    state.catalogs = catalogs;
  },
  [GET_CATALOGS_FAIL](state, error) {
    state.isCatalogLoading = false;
  },
  [GET_ARTICLES_BY_CATALOGID](state) {
    state.isArticleLoading = true;
  },
  [GET_ARTICLES_BY_CATALOGID_SUCCESS](state, articles) {
    state.isArticleLoading = false;
    state.articles = articles;
  },
  [GET_ARTICLES_BY_CATALOGID_FAIL](state, error) {
    state.isArticleLoading = false;
  },
  [SET_CURRENT_CATALOGID](state, id) {
    state.currentCatalogId = id;
  },
  [SAVE_ARTICLES_BY_CATALOGID](state, map) {
    let id = map.catalogid;
    let articles = map['articles'];
    Vue.set(state.catalogId_articles, id, articles);
  },
  [DELETE_ARTICLE](state) {
    state.isArticleLoading = true;
  },
  [DELETE_ARTICLE_SUCCESS](state, article) {
    state.isArticleLoading = false;
    state.articles.remove(article);
  },
  [DELETE_ARTICLE_FAIL](state, error) {
    state.isArticleLoading = false;
  },
  [SET_PUBLISH_STATUS](state) {
    state.isArticleLoading = true;
  },
  [SET_PUBLISH_STATUS_SUCCESS](state, article) {
    state.isArticleLoading = false;
    article.published = article.published === 0 ? 1 : 0;
  },
  [SET_PUBLISH_STATUS_FAIL](state, error) {
    state.isArticleLoading = false;
  },
}

export default {
  state,
  actions,
  mutations
}
