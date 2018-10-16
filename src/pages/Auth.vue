<template>
  <q-page padding>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import { AUTH } from '../plugins/firebase'
export default {
  name: 'Auth',
  components: {
  },
  data () {
    return {
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
    ])
  },
  beforeCreate () {
    this.$q.loading.show()
    AUTH.onAuthStateChanged(async user => {
      if (user) {
        await this.login(user.uid)
        this.$q.loading.hide()
        if (this.alreadyLoggedIn) {
          // 目的のページへ遷移
          this.$router.push(this.$route.query.redirect)
        } else {
          // register ページへ遷移
          this.$router.push({ name: 'Register' })
        }
      } else {
        this.$q.loading.hide()
        this.$router.push({ name: 'SignUp' })
      }
    })
  }
}
</script>
