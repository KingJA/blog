import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
/*modules*/
import articleModule from './modules/article'
import loginModule from './modules/login'
import articleDetailModule from './modules/articleDetail'
import articleCenterModule from './modules/articleCenter'
import publishModule from './modules/publish'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {articleModule, loginModule, articleDetailModule, articleCenterModule,publishModule},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// export interface StoreOptions<S> {
// actions?: ActionTree<S, S>;
// getters?: GetterTree<S, S>;
// state?: S;
// mutations?: MutationTree<S>;
// strict?: boolean;
// plugins?: Plugin<S>[];
// modules?: ModuleTree<S>;
// }
