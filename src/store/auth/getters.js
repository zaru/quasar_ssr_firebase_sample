import { AUTH } from '../../plugins/firebase'

export const alreadyLoggedIn = state => {
  return state.uid !== null && AUTH.currentUser !== null
}
