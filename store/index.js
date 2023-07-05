const actions = {}

const mutations = {
  SET_STATE(state, val) {
    state._state = val
  },
}

function state() {
  return {
    _state: null,
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
}
