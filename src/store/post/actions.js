import axios from 'axios'

export const fetchTags = async ({ commit }) => {
  return axios.get('https://qiita.com/api/v2/tags').then(res => {
    res.data.forEach(tag => {
      commit('INSERT_TAG', tag)
    })
  })
}
