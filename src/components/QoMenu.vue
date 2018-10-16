<template>
  <q-list highlight>
    <q-list-header>Menu</q-list-header>
    <q-item link tag="a" :to="{name: 'Home'}">
      <q-item-main>
        Home
      </q-item-main>
    </q-item>
    <q-item link tag="a" :to="{name: 'Post'}">
      <q-item-main>
        Posts
      </q-item-main>
    </q-item>
    <q-item v-if="!alreadyLoggedIn" link tag="a" :to="{name: 'SignUp'}">
      <q-item-main>
        SignUp
      </q-item-main>
    </q-item>
    <q-item v-if="alreadyLoggedIn" link @click.native="logoutToTop">
      <q-item-main>
        LogOut
      </q-item-main>
    </q-item>
    <q-item link tag="a" :to="{name: 'MyPage', query: { foo: 'bar' } }">
      <q-item-main>
        MyPage
      </q-item-main>
    </q-item>
  </q-list>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', [
      'alreadyLoggedIn'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),
    logoutToTop () {
      this.logout().then(() => {
        this.$router.push({ name: 'Home' })
      })
    }
  }
}
</script>
