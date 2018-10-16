<template>
  <q-page padding>
    <qo-menu></qo-menu>

    <h1>Posts page</h1>
    <h2>SSR contents</h2>
    <ul>
      <li v-for="(tag, index) in getTags" :key="index">
        {{tag.id}}
      </li>
    </ul>
    <h2>Ajax contents</h2>
    <ul>
      <li v-for="(post, index) in getPosts" :key="index">
        {{post.id}}: {{post.title}}
      </li>
    </ul>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import QoMenu from '../components/QoMenu.vue'

export default {
  components: {
    QoMenu
  },
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
    return store.dispatch('post/fetchTags')
  },
  computed: {
    ...mapGetters('post', [
      'getTags',
      'getPosts'
    ])
  },
  methods: {
    ...mapActions('post', [
      'fetchZaruPosts'
    ])
  },
  mounted () {
    this.fetchZaruPosts()
  }
}
</script>

<style>
</style>
