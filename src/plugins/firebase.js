import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const CONFIG = {
  apiKey: process.env.FIREBASE.API_KEY,
  authDomain: process.env.FIREBASE.AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE.DB_URL,
  projectId: process.env.FIREBASE.PROJECT_ID,
  storageBucket: process.env.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE.MESSAGE_SENDER_ID
}
const fireApp = !firebase.apps.length ? firebase.initializeApp(CONFIG) : firebase.app()

fireApp.auth().languageCode = 'ja'

export const DB = fireApp.firestore()
export const AUTH = fireApp.auth()

const settings = { timestampsInSnapshots: true }
DB.settings(settings)

export default ({ Vue }) => {
}
