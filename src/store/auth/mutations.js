export const SET_USER_DATA = (state, payload) => {
  state.uid = payload.uid
  state.name = payload.name
}

export const RESET = (state) => {
  state.uid = null
  state.name = ''
}
