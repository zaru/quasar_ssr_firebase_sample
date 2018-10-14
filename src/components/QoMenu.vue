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
  </q-list>
</template>

<style>
</style>

<script>
export default {
}
</script>
