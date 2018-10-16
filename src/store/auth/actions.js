import { DB, AUTH } from '../../plugins/firebase'

export const register = async ({ commit }, name) => {
  const uid = AUTH.currentUser.uid
  const result = await DB.collection('user').doc(uid).set({ name: name })
  commit('SET_USER_DATA', { uid, name })
  return result
}

export const login = async ({ commit }, uid) => {
  const result = await DB.collection('user').doc(uid).get()
  if (result.exists) {
    const data = result.data()
    commit('SET_USER_DATA', { uid: uid, name: data.name })
  }
}

export const logout = async ({ commit }) => {
  await AUTH.signOut()
  commit('RESET')
}
