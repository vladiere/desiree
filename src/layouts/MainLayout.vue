<template>
  <q-layout view="lHh lpR fFf">

    <q-header class="bg-transparent">
      <q-toolbar>
        <q-fab
          v-model="fab2"
          padding="2px"
          vertical-actions-align="left"
          color="red-5"
          icon="keyboard_arrow_down"
          direction="down"
        >
          <q-fab-action color="red-5" @click="onClick('/')" icon="mdi-home" label="Home" />
          <q-fab-action color="red-5" @click="onClick('about')" icon="mdi-account" label="About" />
          <q-fab-action color="red-5" @click="onClick('service')" icon="mdi-earth" label="Service" />
          <q-fab-action color="red-5" @click="onClick('contact')" icon="mdi-email-outline" label="Contact" />
        </q-fab>
      </q-toolbar>
    </q-header>

    <q-page-container>
     <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const fab2 = ref(false);
const router = useRouter();

const onClick = (link) => {
  router.push(link)
}

</script>
