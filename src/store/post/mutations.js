export const INSERT_TAG = (state, payload) => {
  if (state.tags.find(v => v.id === payload.id) === undefined) {
    state.tags.push(payload)
  }
}
