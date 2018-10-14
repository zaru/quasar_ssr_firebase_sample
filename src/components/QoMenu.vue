<template>
  <q-list highlight>
    <q-list-header>Menu</q-list-header>
    <q-item>
      <q-item-main link @click.native="$router.push({name: 'Home'})">
        Home
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-main link @click.native="$router.push({name: 'Post'})">
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
