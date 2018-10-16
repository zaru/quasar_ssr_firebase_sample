<template>
  <q-page padding>
    <qo-menu></qo-menu>
    <h1>SignUp</h1>
    <q-btn @click="authGoogle">Google login</q-btn>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as firebase from 'firebase/app'
import { AUTH } from '../plugins/firebase'
import QoMenu from '../components/QoMenu.vue'
export default {
  name: 'SignUp',
  components: {
    QoMenu
  },
  data () {
    return {
      provider: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'alreadyLoggedIn'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),
    authGoogle () {
      AUTH.signInWithRedirect(this.provider)
    }
  },
  mounted () {
    this.provider = new firebase.auth.GoogleAuthProvider()
  },
  beforeCreate () {
    this.$q.loading.show()
    AUTH.onAuthStateChanged(async user => {
      if (user) {
        await this.login(user.uid)
        this.$q.loading.hide()
        if (this.alreadyLoggedIn) {
          // 会員ページへ遷移
          this.$router.push({ name: 'MyPage' })
        } else {
          // register ページへ遷移
          this.$router.push({ name: 'Register' })
        }
      } else {
        this.$q.loading.hide()
      }
    })
  }
}
</script>
