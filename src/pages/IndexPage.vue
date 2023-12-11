<style lang="sass" scoped>
.picture
  -webkit-filter: brightness(110%) contrast(110%) grayscale(82%) sepia(30%)
  filter: brightness(110%) contrast(110%) grayscale(82%) sepia(30%)
</style>

<template>
  <q-page class="flex flex-center column">
    <img
      class="picture"
      alt="Desiree picture"
      src="~assets/picture.png"
    >
    <span class="text-h1 text-weight-bolder text-grey-9">Desiree Rendon</span>
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'IndexPage'
})
</script>
