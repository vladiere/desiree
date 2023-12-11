<template>
  <q-page padding class="window-height row text-center q-gutter-y-xl">
    <div class="col column q-gutter-y-xl">
      <span class="text-h3 text-weight-regular">PERSONAL INFOS</span>
      <div class="row justify-between">
        <div class="column text-h6 q-gutter-y-xs">
          <div class="row q-gutter-x-md">
            <span class="text-grey-8">First Name:</span>
            <span class="text-grey-6">Desiree</span>
          </div>
          <div class="row q-gutter-x-md">
            <span class="text-grey-8">Last Name:</span>
            <span class="text-grey-6">Rendon</span>
          </div>
          <div class="row q-gutter-x-md">
            <span class="text-grey-8">Age:</span>
            <span class="text-grey-6">20</span>
          </div>
          <div class="row q-gutter-x-md">
            <span class="text-grey-8">Nationality:</span>
            <span class="text-grey-6">Filino</span>
          </div>
          <div class="row q-gutter-x-md">
            <span class="text-grey-8">Language:</span>
            <span class="text-grey-6">Cebuano</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col column q-gutter-y-xl">
      <span class="text-h3 text-weight-regular">A LITTLE ABOUT ME</span>
      <span class="text-h6 text-weight-light">I possess enough artistic sensibility to freely tap into my imagination. When I encounter a sunset or waterfall, there's a brief moment of greatness. I step out of my thoughts, not trying to analyze. I ponder if I can sustain that tranquil state of mind.</span>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'AboutPage'
})
</script>
