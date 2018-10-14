<template>
  <q-page padding>
    <h1>Posts page</h1>
    <ul>
      <li v-for="(tag, index) in getTags" :key="index">
        {{tag}}
      </li>
    </ul>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    return store.dispatch('post/fetchTags')
  },
  computed: {
    ...mapGetters('post', [
      'getTags'
    ])
  }
}
</script>

<style>
</style>
