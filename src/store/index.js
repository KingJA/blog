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

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {articleModule, loginModule},
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
