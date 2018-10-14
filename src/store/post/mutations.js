export const INSERT_TAG = (state, payload) => {
  if (state.tags.find(v => v.id === payload.id) === undefined) {
    state.tags.push(payload)
  }
}

export const INSERT_POST = (state, payload) => {
  if (state.posts.find(v => v.id === payload.id) === undefined) {
    state.posts.push(payload)
  }
}
