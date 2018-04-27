import {SHOW_MESSAGE} from '../mutation-types'


const state = {
  message: {
    type: 'success',
    message: '提示信息',
    showClose: false,
    duration: 1000
  }
}

const mutations = {
  [SHOW_MESSAGE](state, message) {
    state.message = message.message;
    state.type = message.type;
    state.duration = message.duration;
    state.showClose = message.showClose;
  }
}

export default {
  state,
  mutations
}
