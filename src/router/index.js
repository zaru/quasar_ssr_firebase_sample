import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { AUTH } from '../plugins/firebase'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */
export default function ({ store }) {
  // IMPORTANT! Instantiate Router inside this function
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,
    // Leave these as they are and change from quasar.conf.js instead!
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters['auth/alreadyLoggedIn'] === true && AUTH.currentUser) {
        next()
        return
      }
      // Auth コンポーネントで firebase 認証を行ってから目的先へリダイレクトさせる
      const query = Object.keys(to.params).map(key => key + '=' + to.params[key]).join('&')
      next({ name: 'Auth', query: { redirect: to.fullPath + '?' + query } })
    } else {
      if (to.name === 'Register' && !AUTH.currentUser) {
        next({ name: 'Home' })
        return
      }
      if (to.name === 'SignUp' && store.getters['auth/alreadyLoggedIn'] === true && AUTH.currentUser) {
        next({ name: 'MyPage' })
        return
      }
      next()
    }
  })

  return Router
}
