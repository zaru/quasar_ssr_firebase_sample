<template>
  <q-page padding>
    <qo-menu></qo-menu>
    <h1>Register</h1>
    <q-field label="Your Name">
      <q-input v-model="name" />
    </q-field>
    <q-btn label="register" @click="submit" />
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { AUTH } from '../plugins/firebase'
import QoMenu from '../components/QoMenu.vue'

export default {
  components: {
    QoMenu
  },
  data () {
    return {
      name: null
    }
  },
  computed: {
  },
  methods: {
    ...mapActions('auth', [
      'register'
    ]),
    submit () {
      this.register(this.name).then(() => {
        this.$router.push({ name: 'MyPage' })
      })
    }
  },
  mounted () {
    if (this.alreadyLoggedIn) {
      this.$router.push({ name: 'Home' })
    }
    this.name = AUTH.currentUser.displayName
  }
}
</script>

<style>
</style>
